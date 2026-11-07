/**
 * util.js — small geometry/texture helpers.  Everything is generated in code:
 * no image files, no models.
 */

import * as THREE from 'three';
import { noise2, fbm, mulberry32 } from './terrain.js';

/**
 * Merge geometries (optionally transformed / uniformly coloured) into one.
 * Keeps position, normal and colour so a single material can shade the lot.
 * @param {Array<{geo:THREE.BufferGeometry, matrix?:THREE.Matrix4, color?:THREE.Color|string, uv?:number}>} list
 */
export function mergeGeoms(list) {
  const positions = [];
  const normals = [];
  const colors = [];
  const uvs = [];
  const tmpV = new THREE.Vector3();
  const tmpN = new THREE.Vector3();
  const nm = new THREE.Matrix3();

  for (const item of list) {
    // non-indexed inputs keep their baked flat normals, indexed ones their
    // smooth normals — applyMatrix4 rotates normals correctly
    let g = item.geo.index ? item.geo.toNonIndexed() : item.geo;
    if (!g.getAttribute('normal')) g.computeVertexNormals();
    if (item.matrix) g = g.clone().applyMatrix4(item.matrix);
    const pos = g.getAttribute('position');
    const nor = g.getAttribute('normal');
    const col = g.getAttribute('color');
    const uv = g.getAttribute('uv');
    const c = item.color !== undefined ? new THREE.Color(item.color) : null;
    const uvScale = typeof item.uv === 'number' ? item.uv : 1;
    for (let i = 0; i < pos.count; i++) {
      tmpV.fromBufferAttribute(pos, i);
      positions.push(tmpV.x, tmpV.y, tmpV.z);
      if (nor) {
        tmpN.fromBufferAttribute(nor, i);
        if (item.matrix) {
          nm.getNormalMatrix(item.matrix);
          tmpN.applyMatrix3(nm).normalize();
        }
        normals.push(tmpN.x, tmpN.y, tmpN.z);
      } else normals.push(0, 1, 0);
      if (col) colors.push(col.getX(i), col.getY(i), col.getZ(i));
      else if (c) colors.push(c.r, c.g, c.b);
      else colors.push(1, 1, 1);
      if (uv) uvs.push(uv.getX(i) * uvScale, uv.getY(i) * uvScale);
      else uvs.push(0, 0);
    }
    if (g !== item.geo) g.dispose();
  }

  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  out.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  out.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  return out;
}

/** push every vertex along its normal by noise — crags, erosion, wear */
export function noiseDisplace(geo, amp, freq, seed = 3, origin = new THREE.Vector3()) {
  const pos = geo.getAttribute('position');
  const nor = geo.getAttribute('normal');
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + origin.x;
    const y = pos.getY(i) + origin.y;
    const z = pos.getZ(i) + origin.z;
    const n = (fbm(x * freq + z * 0.31, z * freq + y * 0.27, 3, seed) - 0.5) * 2 * amp;
    const fine = (noise2(x * freq * 3.1, z * freq * 3.1, seed + 11) - 0.5) * amp * 0.6;
    const d = n + fine;
    pos.setXYZ(i, pos.getX(i) + nor.getX(i) * d, pos.getY(i) + nor.getY(i) * d, pos.getZ(i) + nor.getZ(i) * d);
  }
  geo.computeVertexNormals();
  return geo;
}

/** faceted boulder: noisy icosahedron with vertex colours */
export function makeRock(seed, radius, flat = true, squash = 0.78, detail = -1) {
  const rnd = mulberry32(seed * 7919 + 13);
  const det = detail >= 0 ? detail : radius > 1.6 ? 2 : 1;
  let g = new THREE.IcosahedronGeometry(radius, det);
  const pos = g.getAttribute('position');
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const l = v.length() || 1;
    const nx = v.x / l;
    const nz = v.z / l;
    const n = (fbm(nx * 2.4 + seed, nz * 2.4 + seed * 0.7, 3, seed) - 0.5) * 0.62 + (noise2(nx * 6 + seed, nz * 6, seed + 5) - 0.5) * 0.24;
    const s = 1 + n;
    v.multiplyScalar(Math.max(0.35, s));
    v.y *= squash * (0.8 + 0.4 * rnd());
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  if (flat && g.index) {
    g = g.toNonIndexed();
    g.computeVertexNormals();
  }
  return g;
}

/** colour a geometry per face from a callback on the face centre */
export function shadeFaces(geo, cb) {
  const pos = geo.getAttribute('position');
  const col = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let f = 0; f < pos.count; f += 3) {
    const cx = (pos.getX(f) + pos.getX(f + 1) + pos.getX(f + 2)) / 3;
    const cy = (pos.getY(f) + pos.getY(f + 1) + pos.getY(f + 2)) / 3;
    const cz = (pos.getZ(f) + pos.getZ(f + 1) + pos.getZ(f + 2)) / 3;
    cb(c, cx, cy, cz, f);
    for (let k = 0; k < 3; k++) {
      col[(f + k) * 3] = c.r;
      col[(f + k) * 3 + 1] = c.g;
      col[(f + k) * 3 + 2] = c.b;
    }
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  return geo;
}

/** box with slightly irregular corners — planks, blocks, slate */
export function roughBox(w, h, d, seed, jitter = 0.03) {
  const g = new THREE.BoxGeometry(w, h, d, 1, 1, 1).toNonIndexed();
  const pos = g.getAttribute('position');
  const rnd = mulberry32(seed);
  for (let i = 0; i < pos.count; i++) {
    pos.setXYZ(
      i,
      pos.getX(i) + (rnd() - 0.5) * jitter * w,
      pos.getY(i) + (rnd() - 0.5) * jitter * h,
      pos.getZ(i) + (rnd() - 0.5) * jitter * d
    );
  }
  g.computeVertexNormals();
  return g;
}

/** offscreen canvas → CanvasTexture (all textures in this project are drawn) */
export function canvasTexture(size, draw, { srgb = true, repeat = 1, aniso = 4 } = {}) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  draw(ctx, size);
  const tex = new THREE.CanvasTexture(cv);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = repeat === 1 ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat);
  tex.anisotropy = aniso;
  tex.needsUpdate = true;
  return tex;
}

/** speckled noise, handy as a mask or wear layer */
export function noiseCanvas(size, freq, seed, contrast = 1) {
  return canvasTexture(size, (ctx, s) => {
    const img = ctx.createImageData(s, s);
    for (let y = 0; y < s; y++) {
      for (let x = 0; x < s; x++) {
        const v = fbm((x / s) * freq, (y / s) * freq, 4, seed);
        const g = Math.max(0, Math.min(1, 0.5 + (v - 0.5) * contrast)) * 255;
        const o = (y * s + x) * 4;
        img.data[o] = img.data[o + 1] = img.data[o + 2] = g;
        img.data[o + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  });
}

export const M = {
  /** translation + rotation + scale as a Matrix4 */
  place(x, y, z, rx = 0, ry = 0, rz = 0, s = 1) {
    const m = new THREE.Matrix4();
    m.compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)),
      new THREE.Vector3(s, s, s)
    );
    return m;
  },
};
