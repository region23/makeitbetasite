/**
 * glsl.js — GLSL chunks shared by the water, sky and foam shaders.
 * Everything here is self-contained: no textures are downloaded, all patterns
 * are hash-based value noise written out below.
 */

export const NOISE_GLSL = /* glsl */ `
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p = p * 2.07 + vec2(11.3, 7.7);
    a *= 0.5;
  }
  return s / 0.9375;
}

float fbm3(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) {
    s += a * vnoise(p);
    p = p * 2.11 + vec2(3.1, 9.7);
    a *= 0.5;
  }
  return s / 0.875;
}
`;

/**
 * Shared procedural sky.  Requires uSkyTop / uSkyMid / uSkyLow / uSunGlow /
 * uSunDir (all linear-space colours) plus optional cloud amount.
 */
export const SKY_GLSL = /* glsl */ `
vec3 skyColor(vec3 dir) {
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
  float t = pow(max(h - 0.5, 0.0) * 2.0, 0.75);
  vec3 col = mix(uSkyLow, uSkyMid, smoothstep(0.0, 0.34, h));
  col = mix(col, uSkyTop, smoothstep(0.30, 0.85, h));

  // warm dome around the low sun
  float sd = max(dot(normalize(dir), uSunDir), 0.0);
  col += uSunGlow * (pow(sd, 7.0) * 0.85 + pow(sd, 2.0) * 0.20);
  // faint banded cloud, flattened toward the horizon
  float band = smoothstep(0.03, 0.55, dir.y);
  vec2 cp = dir.xz / max(dir.y, 0.06) * 0.35;
  float cl = fbm(cp * 0.55) * 0.75 + fbm(cp * 1.4) * 0.3;
  cl = smoothstep(0.52, 0.92, cl) * band * 0.55;
  col = mix(col, mix(vec3(1.0), uSunGlow * 1.35, 0.35), cl);
  return col * (1.0 - t * 0.0);
}
`;
