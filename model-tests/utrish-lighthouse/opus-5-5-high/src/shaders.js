// GLSL for the procedural ground, the water surface, the cut-away sea wall and the final composite.
import * as THREE from 'three';

export const NOISE_GLSL = /* glsl */ `
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++){ s += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s * 1.067; }
// x: distance to nearest feature point, y: distance to cell border (approx F2-F1), z: cell id
vec3 voronoi(vec2 x){
  vec2 n = floor(x), f = fract(x);
  float f1 = 8.0, f2 = 8.0, id = 0.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j));
    vec2 o = hash22(n + g);
    vec2 r = g + o - f;
    float d = dot(r, r);
    if (d < f1) { f2 = f1; f1 = d; id = hash12(n + g); } else if (d < f2) { f2 = d; }
  }
  f1 = sqrt(f1); f2 = sqrt(f2);
  return vec3(f1, f2 - f1, id);
}
`;

export const WAVE_GLSL = /* glsl */ `
uniform float uTime;
uniform sampler2D uBake1;
uniform sampler2D uBake2;
uniform vec2 uBMin;
uniform vec2 uBSize;
uniform vec4 uWaveA[7];
uniform vec4 uWaveB[7];
uniform vec4 uRipples[8];

vec4 sampleB1(vec2 p){ return texture2D(uBake1, (p - uBMin) / uBSize); }
vec4 sampleB2(vec2 p){ return texture2D(uBake2, (p - uBMin) / uBSize); }

float swellEnv(vec2 p, float t, vec2 dir, float seed){
  float s = dot(p, dir);
  float g1 = sin(s * 0.0449 - t * 0.143 + seed);
  float g2 = sin(s * 0.0273 - t * 0.087 + 1.7 + seed * 2.0);
  float g3 = sin(dot(p, vec2(-dir.y, dir.x)) * 0.013 + t * 0.031 + seed * 3.0);
  float e = 0.5 + 0.32 * g1 + 0.22 * g2 + 0.12 * g3;
  return 0.2 + 0.8 * smoothstep(0.2, 0.95, e);
}

struct WaveSample { vec3 disp; vec2 grad; float crest; float sumA; float phase0; float envP; float depth; };

WaveSample evalWaves(vec2 p, float t){
  WaveSample o;
  o.disp = vec3(0.0); o.grad = vec2(0.0); o.crest = 0.0; o.sumA = 0.0; o.phase0 = 0.0;
  vec4 b1 = sampleB1(p); vec4 b2 = sampleB2(p);
  float D = max(0.05, -b1.z);
  o.depth = D;
  float envP = swellEnv(p, t, uWaveA[0].xy, 0.0);
  float envS = swellEnv(p, t, uWaveA[3].xy, 2.3);
  o.envP = envP;
  for (int i = 0; i < 7; i++) {
    vec4 A4 = uWaveA[i]; vec4 B4 = uWaveB[i];
    vec2 dir = A4.xy;
    float k = 6.2831853 / A4.z;
    float w = sqrt(9.8 * k) * B4.z;
    float ph = k * dot(dir, p) - w * t + B4.w;
    float th = tanh(min(k * D, 10.0));
    float Ks = clamp(pow(max(th, 0.02), -0.25), 1.0, 1.85);
    float expo = B4.x < 0.5 ? b1.x : (B4.x < 1.5 ? b1.y : b2.z);
    float env = B4.x < 0.5 ? envP : (B4.x < 1.5 ? envS : 1.0);
    float A = A4.w * expo * env * Ks;
    if (B4.x < 1.5) A = min(A, 0.42 * D + 0.04);
    float steep = B4.y * (1.0 + 0.8 * clamp((Ks - 1.0) * 2.0, 0.0, 1.0));
    float s = sin(ph), c = cos(ph);
    o.disp.y += A * s;
    o.disp.xz += dir * (steep * A * c);
    o.grad += dir * (A * k * c);
    if (B4.x < 0.5) { o.crest += A * s; o.sumA += A; }
    if (i == 0) o.phase0 = ph;
  }
  return o;
}

uniform float uRippleOn;
// dolphin splash rings: x = height, yz = gradient, w = foam
vec4 ripples(vec2 p, float t){
  vec4 o = vec4(0.0);
  if (uRippleOn < 0.5) return o;
  for (int i = 0; i < 8; i++) {
    vec4 R = uRipples[i];
    if (R.w <= 0.0) continue;
    float age = t - R.z;
    if (age < 0.0 || age > 6.0) continue;
    vec2 dv = p - R.xy;
    float d = length(dv) + 1e-3;
    float x = d - age * 2.4;
    float a = R.w * 0.14 * exp(-age * 0.5);
    float g = exp(-x * x * 0.4);
    o.x += a * sin(x * 2.4) * g;
    float dd = a * g * (2.4 * cos(x * 2.4) - 0.8 * x * sin(x * 2.4));
    o.yz += dd * dv / d;
    o.w += R.w * (exp(-d * d * 0.3) * exp(-age * 0.8) * 1.3 + exp(-x * x * 1.5) * exp(-age * 0.7) * 0.45);
  }
  return o;
}

// strait surge + lagoon seiche + shore lapping (b1/b2: bake samples at p)
float extraBase(vec2 p, float t, float envP, vec4 b1, vec4 b2){
  float y = 0.0;
  float st = b2.x;
  y += st * (0.22 + 0.2 * envP) * sin(0.95 * t - p.y * 0.16) + st * 0.08 * sin(2.3 * t - p.y * 0.4 + 1.0);
  y += b2.y * 0.05 * sin(0.42 * t + p.x * 0.02);
  float cd = b2.w * 40.0;
  float lapA = 0.035 * (1.0 - 0.7 * b1.x) * smoothstep(9.0, 1.0, cd) * (0.7 + 0.3 * sin(0.37 * t + p.x * 0.05));
  y += lapA * sin(cd * 1.5 + t * 2.1);
  return y;
}
float extraH(vec2 p, float t, float envP){
  return extraBase(p, t, envP, sampleB1(p), sampleB2(p)) + ripples(p, t).x;
}
`;

// ------------------------------------------------------------------ ground / rock / cut-away wall
const TERRAIN_FRAG_FUNCS = /* glsl */ `
uniform float uTime;
uniform vec3 uSunColorT;
varying vec3 vWPos;
varying vec3 vWNormal;
#if TMODE == 0 || TMODE == 2
varying vec4 vMat;
#endif
#if TMODE == 0
varying vec2 vMat2;
#endif
#if TMODE == 2
varying float vTop;
varying float vArc;
#endif
${NOISE_GLSL}
vec3 srgb(vec3 c){ return pow(c, vec3(2.2)); }

vec3 perturbNormalArb2(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDir){
  vec3 vSigmaX = normalize(dFdx(surf_pos.xyz));
  vec3 vSigmaY = normalize(dFdy(surf_pos.xyz));
  vec3 vN = surf_norm;
  vec3 R1 = cross(vSigmaY, vN);
  vec3 R2 = cross(vN, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDir;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}

vec2 surfUV(vec3 p, vec3 n){
  if (abs(n.y) > 0.72) return p.xz;
  vec2 t = normalize(vec2(-n.z, n.x) + vec2(1e-4, 0.0));
  return vec2(dot(p.xz, t), p.y);
}

// Broken, tilted landslide strata of pale limestone and grey marl
vec3 rockCol(vec3 p, vec3 n, out float bh){
  vec2 cp = p.xz / 26.0 + vec2(vnoise(p.xz * 0.04), vnoise(p.zx * 0.04 + 7.0)) * 0.9;
  float r = hash12(floor(cp));
  vec3 tilt = normalize(vec3(sin(r * 6.283) * 0.55, 1.0, cos(r * 6.283) * 0.55));
  float s = dot(p, tilt) * 0.85 + vnoise(p.xz * 0.11 + p.y * 0.05) * 1.8 + r * 13.0;
  float layer = floor(s);
  float fb = fract(s);
  float lh = hash12(vec2(layer, r * 91.0));
  vec3 lime = srgb(vec3(0.84, 0.80, 0.70));
  vec3 marl = srgb(vec3(0.64, 0.64, 0.60));
  vec3 ochre = srgb(vec3(0.82, 0.70, 0.52));
  vec3 c = lh < 0.5 ? lime : (lh < 0.8 ? marl : ochre);
  float bed = smoothstep(0.0, 0.08, fb) * smoothstep(1.0, 0.9, fb);
  c *= 0.74 + 0.26 * bed;
  // joints: triplanar so vertical faces and ledges both fracture naturally
  vec3 an = abs(n);
  float wy = smoothstep(0.45, 0.85, an.y);
  vec2 sideUV = an.x > an.z ? p.zy : p.xy;
  vec3 va = wy < 0.99 ? voronoi(sideUV * vec2(0.5, 0.9) + r * 7.0) : vec3(0.5, 0.5, 0.5);
  vec3 vb = wy > 0.01 ? voronoi(p.xz * 0.45 + 3.7) : vec3(0.5, 0.5, 0.5);
  float edge = mix(va.y, vb.y, wy);
  float cid = mix(va.z, vb.z, wy);
  float crack = 1.0 - smoothstep(0.0, 0.07, edge);
  c *= 1.0 - 0.38 * crack;
  vec2 uv = surfUV(p, n);
  c *= 0.86 + 0.26 * vnoise(uv * 1.1 + layer);
  c = mix(c, c * vec3(1.07, 0.98, 0.86), cid * 0.55);
  bh = bed * 0.45 - crack * 0.7 + vnoise(uv * 1.6) * 0.25;
  return c;
}

// Rounded beach pebbles of two sizes; the larger dome wins where they overlap
vec3 pebbleCol(vec2 xz, out float bh){
  vec3 v1 = voronoi(xz * 3.0);
  vec3 v2 = voronoi(xz * 6.4 + 11.0);
  float d1 = (1.0 - smoothstep(0.0, 0.64, v1.x)) * smoothstep(0.0, 0.09, v1.y);
  float d2 = (1.0 - smoothstep(0.0, 0.6, v2.x)) * smoothstep(0.0, 0.09, v2.y) * 0.8;
  float useB = step(d1, d2);
  float id = mix(v1.z, v2.z, useB);
  float h = max(d1, d2);
  vec3 c = mix(srgb(vec3(0.60, 0.58, 0.54)), srgb(vec3(0.85, 0.81, 0.73)), hash12(vec2(id, 1.3)));
  c = mix(c, srgb(vec3(0.48, 0.45, 0.42)), step(0.86, id) * 0.7);
  c = mix(c, srgb(vec3(0.86, 0.77, 0.62)), step(0.9, hash12(vec2(id, 7.0))) * 0.8);
  c = mix(c, srgb(vec3(0.70, 0.72, 0.72)), step(0.93, hash12(vec2(id, 3.0))) * 0.7);
  c *= 0.42 + 0.66 * smoothstep(0.0, 0.55, h);
  bh = h;
  return c;
}

vec3 grassCol(vec2 xz, out float bh){
  float n = fbm(xz * 0.12);
  float n2 = vnoise(xz * 2.7);
  vec3 straw = srgb(vec3(0.80, 0.69, 0.44));
  vec3 olive = srgb(vec3(0.55, 0.54, 0.33));
  vec3 gravel = srgb(vec3(0.69, 0.67, 0.62));
  vec3 c = mix(straw, olive, smoothstep(0.42, 0.68, n));
  c = mix(c, gravel, smoothstep(0.55, 0.8, vnoise(xz * 0.35 + 3.0)) * 0.75);
  c *= 0.78 + 0.36 * n2;
  bh = n2 * 0.6 + vnoise(xz * 7.0) * 0.4;
  return c;
}

vec3 scrubCol(vec2 xz, out float bh){
  float n = fbm(xz * 0.25);
  vec3 dg = srgb(vec3(0.24, 0.30, 0.17));
  vec3 dirt = srgb(vec3(0.62, 0.56, 0.44));
  vec3 c = mix(dg, dirt, smoothstep(0.48, 0.72, n));
  c *= 0.75 + 0.4 * vnoise(xz * 3.0);
  bh = n;
  return c;
}

float caustics(vec2 p, float t){
  vec3 a = voronoi(p * 0.42 + vec2(t * 0.11, t * 0.07));
  vec3 b = voronoi(p * 0.58 - vec2(t * 0.08, -t * 0.12) + 5.0);
  float c = exp(-a.y * 9.0) + exp(-b.y * 9.0);
  return c * c * 0.5;
}

void seabedLayer(vec3 p, vec3 n, float rockW, float pebW, inout vec3 alb, inout float bump, out float caust){
  float y = p.y;
  float depth = max(0.0, -y);
  vec3 sand = srgb(vec3(0.74, 0.69, 0.55)) * (0.86 + 0.2 * vnoise(p.xz * 0.9));
  float rph = dot(p.xz, vec2(0.9, 0.4)) * 3.0 + vnoise(p.xz * 0.5) * 4.0;
  sand *= 1.0 - 0.06 * (0.5 + 0.5 * sin(rph)) * clamp(1.0 - fwidth(rph) * 0.6, 0.0, 1.0);
  float pebAmt = clamp(pebW + smoothstep(5.0, 1.5, depth) * 0.6, 0.0, 1.0) * (1.0 - smoothstep(7.0, 13.0, depth)) * (1.0 - rockW);
  float pb = 0.0; vec3 cP = sand;
  if (pebAmt > 0.02) cP = pebbleCol(p.xz * 1.15, pb);
  vec3 bed = mix(sand, cP, pebAmt);
  float bedBump = mix(vnoise(p.xz * 3.0) * 0.3, pb, pebAmt);
  if (depth > 1.5 && depth < 9.0 && rockW < 0.9) {
    float sgn = fbm(p.xz * 0.1 + 3.1) + 0.12 * vnoise(p.xz * 1.3);
    float sg = smoothstep(0.55, 0.72, sgn) * smoothstep(1.5, 3.0, depth) * smoothstep(9.0, 6.0, depth) * (1.0 - rockW);
    vec3 grassC = srgb(vec3(0.30, 0.38, 0.19)) * (0.7 + 0.5 * vnoise(p.xz * vec2(5.0, 1.3)));
    bed = mix(bed, grassC, sg * 0.8);
  }
  // submerged rock: strata muted under a film of silt and algae
  vec3 rockUnder = mix(alb, srgb(vec3(0.56, 0.54, 0.47)) * (0.85 + 0.3 * vnoise(p.xz * 0.7)), smoothstep(-0.2, -1.5, y) * 0.7);
  bed = mix(bed, rockUnder, rockW);
  bedBump = mix(bedBump, bump, rockW);
  float al = rockW > 0.0 && depth < 8.0 ? rockW * smoothstep(-0.2, -1.4, y) * smoothstep(0.35, 0.65, vnoise(p.xz * 0.45 + p.y)) : 0.0;
  bed = mix(bed, srgb(vec3(0.38, 0.30, 0.13)), al * 0.85);
  float wUnder = smoothstep(0.35, -0.35, y);
  alb = mix(alb, bed, wUnder);
  bump = mix(bump, bedBump, wUnder);
  caust = depth < 10.0 ? caustics(p.xz, uTime) * smoothstep(0.0, -0.7, y) * exp(-depth * 0.11) * smoothstep(10.0, 6.0, depth) * 0.65 * max(n.y, 0.2) : 0.0;
}

void surfaceMain(vec3 p, vec3 n, out vec3 alb, out float bump, out float rough, out float caust){
  caust = 0.0;
  rough = 0.92;
#if TMODE == 2
  // ---- cut-away wall: deposits over broken, tilted strata of the old landslide
  float top = vTop; float below = top - p.y; float u = vArc;
  float bcoord = u / 24.0 + vnoise(vec2(u * 0.04, p.y * 0.05)) * 0.9 + p.y * 0.012;
  float bid = floor(bcoord); float bf = fract(bcoord);
  float r = hash12(vec2(bid, 17.0));
  float ang = (r - 0.5) * 1.1;
  float sc = p.y * cos(ang) + u * sin(ang) + vnoise(vec2(u, p.y) * 0.08) * 2.0 + r * 30.0;
  float lc = sc / (1.5 + r * 1.3);
  float lid = floor(lc); float lf = fract(lc);
  float lh = hash12(vec2(lid, bid * 3.1));
  vec3 lime = srgb(vec3(0.83, 0.79, 0.69));
  vec3 marl = srgb(vec3(0.61, 0.62, 0.59));
  vec3 marlD = srgb(vec3(0.49, 0.50, 0.48));
  vec3 ochre = srgb(vec3(0.80, 0.67, 0.48));
  vec3 c = lh < 0.45 ? lime : (lh < 0.75 ? marl : (lh < 0.9 ? marlD : ochre));
  float bed = smoothstep(0.0, 0.06, lf) * smoothstep(1.0, 0.94, lf);
  c *= 0.8 + 0.2 * bed;
  float fault = smoothstep(0.035, 0.0, bf) + smoothstep(0.965, 1.0, bf);
  c = mix(c, srgb(vec3(0.33, 0.31, 0.28)), fault * 0.85);
  vec3 vv = voronoi(vec2(u, p.y * 1.3) * 0.45 + r * 10.0);
  float cr = 1.0 - smoothstep(0.0, 0.05, vv.y);
  c *= 1.0 - 0.35 * cr;
  c *= 0.85 + 0.25 * vnoise(vec2(u, p.y) * 1.7);
  bump = bed * 0.4 - cr * 0.6 - fault * 0.6 + vnoise(vec2(u, p.y) * 3.0) * 0.3;
  vec3 pv = voronoi(vec2(u, p.y) * 3.0);
  vec3 gravel = mix(srgb(vec3(0.60, 0.58, 0.53)), srgb(vec3(0.80, 0.76, 0.67)), pv.z) * (0.55 + 0.45 * smoothstep(0.0, 0.15, pv.y));
  if (top > 0.0) {
    float dep = 0.8 + 1.0 * vnoise(vec2(u * 0.1, 3.0)) + vMat.w * 2.4 + vMat.y * 0.6;
    if (below < dep) {
      vec3 soil = srgb(vec3(0.45, 0.38, 0.28));
      float soilW = smoothstep(0.7, 0.0, below) * (1.0 - vMat.w) * (1.0 - vMat.x);
      c = mix(gravel, soil, soilW);
      bump = smoothstep(0.0, 0.15, pv.y) - pv.x * 0.3;
    }
  } else {
    float dep = 1.2 + 1.6 * vnoise(vec2(u * 0.05, 1.0));
    if (below < dep) {
      vec3 sand = srgb(vec3(0.70, 0.65, 0.52)) * (0.9 + 0.1 * sin(p.y * 9.0 + vnoise(vec2(u * 0.3, p.y)) * 3.0));
      c = mix(sand, gravel, smoothstep(0.3, 0.7, vnoise(vec2(u * 0.15, p.y * 0.8))));
      bump = vnoise(vec2(u, p.y) * 6.0) * 0.4;
    }
  }
  c *= mix(0.72, 1.0, smoothstep(-42.0, -26.0, p.y));
  alb = c;
  rough = 0.95;
#else
  #if TMODE == 1
  vec4 m = vec4(1.0, 0.0, 0.0, 0.0); vec2 m2 = vec2(0.0);
  #else
  vec4 m = vMat; vec2 m2 = vMat2;
  #endif
  float bR = 0.0, bG = 0.0, bS = 0.0, bP = 0.0;
  vec3 cR = vec3(0.0), cG = vec3(0.0), cS = vec3(0.0), cP = vec3(0.0);
  vec4 wts = m / (m.x + m.y + m.z + m.w + 1e-4);
  float bn = (vnoise(p.xz * 0.6) - 0.5) * 0.5;
  wts.x = clamp(wts.x + bn * wts.x * (1.0 - wts.x) * 2.0, 0.0, 1.0);
  wts *= step(0.03, wts);
  if (p.y < -10.0) wts = vec4(0.0); // deep water hides the detail: plain sediment is enough
  // only evaluate the layers that are actually present here
  if (wts.x > 0.0) cR = rockCol(p, n, bR);
  if (wts.y > 0.0) cG = grassCol(p.xz, bG);
  if (wts.z > 0.0) cS = scrubCol(p.xz, bS);
  if (wts.w > 0.0) cP = pebbleCol(p.xz, bP);
  float tot = wts.x + wts.y + wts.z + wts.w + 1e-4;
  alb = (cR * wts.x + cG * wts.y + cS * wts.z + cP * wts.w) / tot;
  bump = (bR * wts.x + bG * wts.y + bS * wts.z + bP * wts.w) / tot;
  #if TMODE == 1
  // dust and dry lichen on top faces of fallen blocks above the splash zone
  float topF = smoothstep(0.55, 0.9, n.y) * smoothstep(1.0, 2.5, p.y);
  alb = mix(alb, alb * srgb(vec3(1.0, 0.93, 0.78)), topF * 0.6);
  float lich = smoothstep(0.72, 0.8, vnoise(p.xz * 1.9 + p.y)) * smoothstep(0.6, 1.6, p.y) * (1.0 - smoothstep(4.0, 7.0, p.y));
  alb = mix(alb, srgb(vec3(0.85, 0.62, 0.25)), lich * 0.45);
  #endif
  if (m2.x > 0.01) {
    vec3 cpath = srgb(vec3(0.76, 0.73, 0.66)) * (0.85 + 0.25 * vnoise(p.xz * 3.0));
    alb = mix(alb, cpath, m2.x);
    bump *= 1.0 - m2.x * 0.7;
  }
  if (m2.y > 0.01) {
    vec3 pav = srgb(vec3(0.62, 0.62, 0.60)) * (0.88 + 0.16 * vnoise(p.xz * 1.5)) * (0.94 + 0.06 * step(0.04, fract(p.x * 0.5)) * step(0.04, fract(p.z * 0.5)));
    alb = mix(alb, pav, m2.y);
    bump *= 1.0 - m2.y * 0.9;
  }
  if (p.y < 0.5) seabedLayer(p, n, wts.x, wts.w, alb, bump, caust);
  float wet = smoothstep(1.3, 0.15, p.y) * smoothstep(-0.9, 0.0, p.y);
  alb *= 1.0 - 0.33 * wet;
  rough = mix(rough, 0.4, wet);
#endif
}
`;

export function makeTerrainMaterial(mode, shared, extra = {}) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, metalness: 0, ...extra });
  mat.defines = { TMODE: mode };
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = shared.uTime;
    sh.uniforms.uSunColorT = shared.uSunColor;
    sh.uniforms.uBumpScale = shared.uBumpScale;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWPos; varying vec3 vWNormal;
        #if TMODE == 0 || TMODE == 2
        attribute vec4 aMat; varying vec4 vMat;
        #endif
        #if TMODE == 0
        attribute vec2 aMat2; varying vec2 vMat2;
        #endif
        #if TMODE == 2
        attribute float aTop; attribute float aArc; varying float vTop; varying float vArc;
        #endif`)
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
        vec4 tW = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        tW = instanceMatrix * tW;
        #endif
        tW = modelMatrix * tW;
        vWPos = tW.xyz;
        vec3 tN = objectNormal;
        #ifdef USE_INSTANCING
        tN = mat3(instanceMatrix) * tN;
        #endif
        vWNormal = normalize(mat3(modelMatrix) * tN);
        #if TMODE == 0 || TMODE == 2
        vMat = aMat;
        #endif
        #if TMODE == 0
        vMat2 = aMat2;
        #endif
        #if TMODE == 2
        vTop = aTop; vArc = aArc;
        #endif`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uBumpScale;
        ${TERRAIN_FRAG_FUNCS}`)
      .replace('#include <map_fragment>', `
        vec3 tAlb; float tBump; float tRough; float tCaust;
        surfaceMain(vWPos, normalize(vWNormal), tAlb, tBump, tRough, tCaust);
        diffuseColor.rgb *= tAlb;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = tRough;`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          float fadeB = clamp(90.0 / length(vViewPosition), 0.0, 1.0);
          vec2 dH = vec2(dFdx(tBump), dFdy(tBump)) * uBumpScale * fadeB;
          normal = perturbNormalArb2(-vViewPosition, normal, dH, faceDirection);
        }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += tAlb * tCaust * uSunColorT;`);
  };
  mat.customProgramCacheKey = () => 'utrish-terrain-' + mode;
  return mat;
}

// ------------------------------------------------------------------ water surface
export function makeWaterMaterial(uniforms) {
  return new THREE.ShaderMaterial({
    uniforms,
    vertexShader: /* glsl */ `
      ${WAVE_GLSL}
      attribute float aEdge;
      varying vec3 vWPos; varying vec3 vViewPos; varying vec2 vXZ;
      void main(){
        vec3 p = position;
        WaveSample w = evalWaves(p.xz, uTime);
        vec3 d = w.disp;
        d.y += extraH(p.xz, uTime, w.envP);
        d.xz *= (1.0 - aEdge);
        vec3 wp = vec3(p.x + d.x, d.y, p.z + d.z);
        vXZ = p.xz;
        vWPos = wp;
        vec4 mv = viewMatrix * vec4(wp, 1.0);
        vViewPos = mv.xyz;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      ${NOISE_GLSL}
      ${WAVE_GLSL}
      #include <packing>
      uniform sampler2D uSceneColor;
      uniform sampler2D uSceneDepth;
      uniform vec2 uResolution;
      uniform float uNear;
      uniform float uFar;
      uniform vec3 uSunDir;
      uniform vec3 uSunColor;
      varying vec3 vWPos; varying vec3 vViewPos; varying vec2 vXZ;

      vec3 skyColor(vec3 r){
        float y = max(r.y, 0.0);
        vec3 zen = vec3(0.16, 0.33, 0.62);
        vec3 hor = vec3(0.78, 0.77, 0.72);
        vec3 c = mix(hor, zen, pow(y, 0.5));
        float s = max(dot(r, uSunDir), 0.0);
        c += uSunColor * (pow(s, 6.0) * 0.3 + pow(s, 60.0) * 0.5);
        return c;
      }
      vec2 noiseGrad(vec2 q){
        float e = 0.06;
        float a = vnoise(q);
        return vec2(vnoise(q + vec2(e, 0.0)) - a, vnoise(q + vec2(0.0, e)) - a) / e;
      }
      void main(){
        float t = uTime;
        WaveSample w = evalWaves(vXZ, t);
        vec4 b1 = sampleB1(vXZ);
        vec4 b2 = sampleB2(vXZ);
        float e = 0.4;
        float h0 = extraBase(vXZ, t, w.envP, b1, b2);
        float hx = extraBase(vXZ + vec2(e, 0.0), t, w.envP, b1, sampleB2(vXZ + vec2(e, 0.0)));
        float hz = extraBase(vXZ + vec2(0.0, e), t, w.envP, b1, sampleB2(vXZ + vec2(0.0, e)));
        vec4 rip = ripples(vXZ, t);
        vec2 grad = w.grad + vec2(hx - h0, hz - h0) / e + rip.yz;

        vec3 V = normalize(cameraPosition - vWPos);
        float viewDist = length(vViewPos);
        float detailFade = clamp(160.0 / viewDist, 0.25, 1.0);
        float wind = b2.z;
        vec2 rg = (noiseGrad(vXZ * 0.85 + vec2(t * 0.30, t * 0.11)) * 0.85
                 + noiseGrad(vXZ * 1.9 + vec2(-t * 0.21, t * 0.37)) * 1.9 * 0.45) * (0.025 + 0.06 * wind) * detailFade;
        vec2 rg2 = noiseGrad(vXZ * 5.3 + vec2(t * 0.6, -t * 0.4) + 17.0) * 5.3 * (0.006 + 0.012 * wind) * detailFade;
        vec3 N = normalize(vec3(-(grad.x + rg.x), 1.0, -(grad.y + rg.y)));
        vec3 Ns = normalize(vec3(-(grad.x + rg.x + rg2.x), 1.0, -(grad.y + rg.y + rg2.y)));

        // ---- refraction through clear water, using the opaque scene behind
        vec2 suv = gl_FragCoord.xy / uResolution;
        float waterZ = vViewPos.z;
        float sceneZ = perspectiveDepthToViewZ(texture2D(uSceneDepth, suv).x, uNear, uFar);
        float thick0 = max(0.0, waterZ - sceneZ) * viewDist / max(1e-3, -waterZ);
        vec2 off = Ns.xz * 0.05 * clamp(thick0 / 3.0, 0.0, 1.0) * clamp(60.0 / viewDist, 0.15, 1.0);
        vec2 ruv = clamp(suv + off, vec2(0.001), vec2(0.999));
        float rZ = perspectiveDepthToViewZ(texture2D(uSceneDepth, ruv).x, uNear, uFar);
        if (rZ > waterZ - 0.02) { ruv = suv; rZ = sceneZ; }
        float thick = max(0.0, waterZ - rZ) * viewDist / max(1e-3, -waterZ);
        vec3 refr = texture2D(uSceneColor, ruv).rgb;

        float D = w.depth;
        vec3 absorb = vec3(0.36, 0.078, 0.10);
        vec3 T = exp(-absorb * thick);
        vec3 scatShallow = vec3(0.05, 0.22, 0.20);
        vec3 scatDeep = vec3(0.012, 0.062, 0.13);
        vec3 scat = mix(scatShallow, scatDeep, smoothstep(1.5, 22.0, D));
        vec3 inscat = scat * (uSunColor * 0.55 + vec3(0.30, 0.42, 0.55));
        vec3 col = refr * T + inscat * (1.0 - T);

        // ---- reflection of the sky and the low sun
        vec3 R = reflect(-V, N); R.y = abs(R.y);
        float F = 0.02 + 0.98 * pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 5.0);
        col = mix(col, skyColor(R), F * 0.85);
        vec3 Hh = normalize(uSunDir + V);
        float sp = pow(max(dot(Ns, Hh), 0.0), 1600.0) * 10.0 + pow(max(dot(N, Hh), 0.0), 140.0) * 0.18;
        col += uSunColor * sp * 0.75;

        // ---- foam: breaking crests, cliff impacts, shoreline, strait churn, dolphin splashes
        float relH = (2.0 * w.sumA) / (D + 0.35);
        float breaking = smoothstep(0.5, 1.15, relH) * smoothstep(0.02, 0.15, b1.x);
        float crestN = w.sumA > 1e-3 ? w.crest / w.sumA : 0.0;
        float ph = mod(w.phase0 - 1.5708, 6.2831853);
        float trail = exp(-ph * 0.55);
        float rock = b1.w;
        float foamAmt = breaking * (smoothstep(0.25, 0.9, crestN) * 0.9 + trail * 0.65);
        foamAmt += rock * b1.x * (0.15 + 0.85 * w.envP) * (0.2 + 1.05 * trail);
        foamAmt += rock * 0.1;
        float vthick = thick * abs(V.y);
        foamAmt += smoothstep(0.3, 0.0, vthick) * (0.3 + 0.55 * b1.x);
        foamAmt += b2.x * (0.12 + 0.3 * max(sin(0.95 * t - vXZ.y * 0.16), 0.0));
        foamAmt += rip.w;
        foamAmt = clamp(foamAmt, 0.0, 1.4);
        float foam = 0.0;
        if (foamAmt > 0.03) {
          vec2 fp = vXZ * 0.7 + uWaveA[0].xy * t * 0.3;
          vec3 fv1 = voronoi(fp);
          vec3 fv2 = voronoi(fp * 2.3 + vec2(t * 0.05, -t * 0.03));
          float pattern = 0.55 * (1.0 - fv1.x) + 0.35 * (1.0 - fv2.x) + 0.2 * vnoise(fp * 4.0);
          foam = clamp((pattern - (1.05 - foamAmt * 0.75)) * 3.5, 0.0, 1.0) * clamp(foamAmt * 2.0, 0.0, 1.0);
        }
        float ndl = max(dot(N, uSunDir), 0.0);
        vec3 foamCol = vec3(0.93, 0.95, 0.95) * (vec3(0.45, 0.52, 0.6) + uSunColor * (0.35 + 0.65 * ndl) * 0.8);
        col = mix(col, foamCol, foam);

        // ---- light glowing through steep crests
        float sss = clamp(crestN, 0.0, 1.0) * smoothstep(0.25, 0.9, relH) * pow(clamp(dot(-V, uSunDir) * 0.5 + 0.5, 0.0, 1.0), 3.0);
        col += vec3(0.05, 0.30, 0.26) * sss * 0.7 * (1.0 - foam);

        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}

// ------------------------------------------------------------------ cut-away sea wall (resin look)
export function makeSeaWallMaterial(uniforms) {
  return new THREE.ShaderMaterial({
    uniforms,
    side: THREE.DoubleSide,
    vertexShader: /* glsl */ `
      ${WAVE_GLSL}
      attribute float aTop; attribute float aArc;
      varying vec3 vW; varying float vSurf; varying float vArc;
      void main(){
        vec3 p = position;
        WaveSample w = evalWaves(p.xz, uTime);
        float surf = w.disp.y + extraH(p.xz, uTime, w.envP);
        vSurf = surf;
        if (aTop > 0.5) p.y = surf;
        vW = p; vArc = aArc;
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform vec3 uSunColor;
      uniform vec3 uSunDir;
      uniform vec2 uCenter;
      ${NOISE_GLSL}
      varying vec3 vW; varying float vSurf; varying float vArc;
      void main(){
        float d = max(0.0, vSurf - vW.y);
        vec3 c0 = vec3(0.07, 0.30, 0.31);
        vec3 c1 = vec3(0.02, 0.13, 0.21);
        vec3 c2 = vec3(0.006, 0.035, 0.09);
        vec3 c = mix(c0, c1, smoothstep(0.0, 6.0, d));
        c = mix(c, c2, smoothstep(6.0, 30.0, d));
        float shaft = vnoise(vec2(vArc * 0.12 - vW.y * 0.04 + uTime * 0.04, uTime * 0.02));
        c *= 0.85 + 0.35 * shaft * exp(-d * 0.06);
        float speck = step(0.985, hash12(floor(vec2(vArc, vW.y) * 6.0)));
        c += speck * 0.03 * exp(-d * 0.08);
        vec2 n = normalize(vW.xz - uCenter);
        float facing = 0.75 + 0.4 * max(dot(n, normalize(uSunDir.xz)), 0.0);
        c *= facing * (0.6 + 0.5 * uSunColor);
        float men = smoothstep(0.1, 0.0, d);
        c = mix(c, vec3(0.75, 0.85, 0.86), men * 0.6);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}

// ------------------------------------------------------------------ composite: scene colour + depth to screen
export function makeCompositeMaterial(rt) {
  return new THREE.ShaderMaterial({
    uniforms: { tColor: { value: rt.texture }, tDepth: { value: rt.depthTexture } },
    depthTest: true,
    depthWrite: true,
    depthFunc: THREE.AlwaysDepth,
    vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D tColor; uniform sampler2D tDepth;
      varying vec2 vUv;
      float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      vec3 bg(vec2 uv){
        vec3 top = vec3(0.900, 0.912, 0.924);
        vec3 bot = vec3(0.968, 0.952, 0.926);
        vec3 c = mix(bot, top, smoothstep(0.0, 1.0, uv.y));
        float v = length((uv - vec2(0.5, 0.45)) * vec2(1.0, 0.85));
        c *= 1.0 - 0.09 * smoothstep(0.25, 0.95, v);
        return c;
      }
      void main(){
        float d = texture2D(tDepth, vUv).x;
        gl_FragDepth = d;
        if (d >= 1.0) { gl_FragColor = vec4(bg(vUv) + (h12(gl_FragCoord.xy) - 0.5) / 255.0, 1.0); return; }
        gl_FragColor = vec4(texture2D(tColor, vUv).rgb, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}

// ------------------------------------------------------------------ spray particles
export function makeSprayMaterial(uniforms) {
  return new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `
      attribute float aLife; attribute float aSize;
      uniform float uScale;
      varying float vLife;
      void main(){
        vLife = aLife;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aLife > 0.0 ? aSize * uScale / -mv.z : 0.0;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uSunColor;
      varying float vLife;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float r = length(c);
        if (r > 0.5) discard;
        float a = smoothstep(0.5, 0.0, r) * clamp(vLife * 1.6, 0.0, 1.0) * 0.55;
        vec3 col = vec3(0.95, 0.97, 0.98) * (0.55 + 0.6 * uSunColor);
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}
