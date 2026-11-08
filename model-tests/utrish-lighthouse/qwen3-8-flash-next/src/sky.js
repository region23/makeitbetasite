// Pale late-afternoon sky over the Black Sea: shared GLSL used by the dome, the
// ocean reflections and the pre-filtered environment map.
import * as THREE from 'three';

export const SUN_AZ = 262; // deg from north, clockwise (262 = W, slightly S)
export const SUN_EL = 13.5;

function dir(azDeg, elDeg) {
  const a = (azDeg * Math.PI) / 180;
  const e = (elDeg * Math.PI) / 180;
  return new THREE.Vector3(Math.sin(a) * Math.cos(e), Math.sin(e), -Math.cos(a) * Math.cos(e)).normalize();
}

export const SUN_DIR = dir(SUN_AZ, SUN_EL);
export const SUN_COLOR = new THREE.Color(1.0, 0.79, 0.58);
export const SKY_HORIZON = new THREE.Color(0.80, 0.775, 0.725);
export const SKY_ZENITH = new THREE.Color(0.30, 0.44, 0.62);

export const NOISE_GLSL = /* glsl */ `
float h21(vec2 p){
  p = fract(p * vec2(127.11, 311.7));
  p += dot(p, p + 34.7);
  return fract(p.x * p.y);
}
float vnoise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = h21(i);
  float b = h21(i + vec2(1.0, 0.0));
  float c = h21(i + vec2(0.0, 1.0));
  float d = h21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm2(vec2 p){
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec2(3.1, 1.7);
    a *= 0.5;
  }
  return s;
}
`;

export const SKY_GLSL = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform float uTime;
${NOISE_GLSL}

vec3 skySample(vec3 d) {
  float up = clamp(d.y, -0.25, 1.0);
  float t = pow(1.0 - max(up, 0.0), 4.5);
  vec3 c = mix(uSkyZenith, uSkyHorizon, t);

  float sd = max(dot(normalize(d), uSunDir), 0.0);
  c += vec3(1.0, 0.66, 0.38) * pow(sd, 6.0) * 0.32;
  c += vec3(1.0, 0.80, 0.56) * pow(sd, 42.0) * 0.42;
  c += vec3(1.0, 0.93, 0.80) * pow(sd, 2600.0) * 5.0;
  // warm band hugging the horizon toward the sun
  c = mix(c, vec3(0.99, 0.855, 0.685), pow(sd, 2.2) * t * 0.55);

  // thin high cloud, mostly near the sun
  if (d.y > 0.005) {
    vec2 cp = d.xz / (d.y + 0.14);
    float n = fbm2(cp * 0.55 + vec2(uTime * 0.004, 0.0));
    float band = smoothstep(0.52, 0.86, n) * smoothstep(0.62, 0.06, d.y) * (0.35 + 0.65 * pow(sd, 1.6));
    c = mix(c, vec3(1.0, 0.94, 0.87), band * 0.5);
  }
  // haze below the horizon line (used by ocean reflections)
  c = mix(c, vec3(0.70, 0.735, 0.72), smoothstep(0.02, -0.10, d.y));
  return c;
}
`;

export function createSky() {
  const uniforms = {
    uSunDir: { value: SUN_DIR.clone() },
    uSkyZenith: { value: SKY_ZENITH.clone() },
    uSkyHorizon: { value: SKY_HORIZON.clone() },
    uTime: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vDir;
      ${SKY_GLSL}
      void main() {
        vec3 c = skySample(normalize(vDir));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(900, 40, 24), mat);
  mesh.name = 'sky';
  mesh.frustumCulled = false;
  return { mesh, uniforms };
}

/** render the sky alone into a PMREM environment */
export function environmentFromSky(renderer, skyMesh) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const s = new THREE.Scene();
  const clone = skyMesh.clone();
  clone.geometry = skyMesh.geometry;
  clone.material = skyMesh.material;
  s.add(clone);
  const rt = pmrem.fromScene(s, 0, 1, 1600);
  pmrem.dispose();
  return rt.texture;
}
