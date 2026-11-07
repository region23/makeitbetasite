/**
 * sky.js — a procedural sky dome.  Its horizon colour is the fog colour, so the
 * ocean dissolves into it without a seam.
 */

import * as THREE from 'three';
import { NOISE_GLSL, SKY_GLSL } from './glsl.js';
import * as T from './theme.js';

const VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAG = /* glsl */ `
precision highp float;
uniform vec3 uSunDir;
uniform vec3 uSkyTop;
uniform vec3 uSkyMid;
uniform vec3 uSkyLow;
uniform vec3 uSunGlow;
varying vec3 vDir;

${NOISE_GLSL}
${SKY_GLSL}

void main() {
  vec3 d = normalize(vDir);
  d.y = max(d.y, -0.005);
  vec3 col = skyColor(d);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export function createSky() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uSunDir: { value: T.SUN_DIR.clone() },
      uSkyTop: { value: new THREE.Color(T.SKY_TOP) },
      uSkyMid: { value: new THREE.Color(T.SKY_MID) },
      uSkyLow: { value: new THREE.Color(T.FOG_COLOR) },
      uSunGlow: { value: new THREE.Color(T.SUN_GLOW) },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(520, 40, 24), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return { mesh, uniforms: mat.uniforms };
}
