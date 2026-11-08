import * as THREE from 'three';
import { LAYOUT } from './config.js';
import { terrainHeight } from './terrain.js';
import { fbm } from './textures.js';

// ---------------------------------------------------------------------------
// Living elements: sparse Mediterranean vegetation, circling gulls, and
// occasional Black Sea dolphins leaping in the open sea.
// ---------------------------------------------------------------------------

function ground(x, z) { return terrainHeight(x, z); }

// ---------------- Vegetation ------------------------------------------------
function juniper(x, z, s = 1) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x2c4a2e, roughness: 1 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.06 * s, 0.1 * s, 0.5 * s, 6), new THREE.MeshStandardMaterial({ color: 0x4a3a28 }));
  trunk.position.y = 0.25 * s;
  g.add(trunk);
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(0.5 * s, 8, 6), mat);
  canopy.scale.set(1, 0.7, 1);
  canopy.position.y = 0.6 * s;
  g.add(canopy);
  const canopy2 = new THREE.Mesh(new THREE.SphereGeometry(0.34 * s, 8, 6), mat);
  canopy2.position.set(0.2 * s, 0.9 * s, 0.1 * s);
  g.add(canopy2);
  g.position.set(x, ground(x, z) - 0.05, z);
  g.userData.canopy = canopy;
  return g;
}

function pine(x, z, s = 1) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1 * s, 0.16 * s, 1.2 * s, 6), new THREE.MeshStandardMaterial({ color: 0x4a3a28 }));
  trunk.position.y = 0.6 * s;
  g.add(trunk);
  const mat = new THREE.MeshStandardMaterial({ color: 0x24402a, roughness: 1 });
  for (let i = 0; i < 3; i++) {
    const c = new THREE.Mesh(new THREE.ConeGeometry((1.0 - i * 0.25) * s, 1.0 * s, 8), mat);
    c.position.y = (1.2 + i * 0.7) * s;
    g.add(c);
  }
  g.position.set(x, ground(x, z) - 0.05, z);
  g.userData.top = g.children[2];
  return g;
}

function grassTuft(x, z, s = 1) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xa89a5e, roughness: 1, side: THREE.DoubleSide });
  for (let i = 0; i < 5; i++) {
    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.04 * s, 0.5 * s, 4), mat);
    blade.position.set((Math.random() - 0.5) * 0.3 * s, 0.22 * s, (Math.random() - 0.5) * 0.3 * s);
    blade.rotation.set((Math.random() - 0.5) * 0.5, 0, (Math.random() - 0.5) * 0.5);
    g.add(blade);
  }
  g.position.set(x, ground(x, z) - 0.02, z);
  g.userData.base = g.rotation.z;
  return g;
}

function flower(x, z) {
  const g = new THREE.Group();
  const c = [0xd04a6a, 0xe8c33f, 0xffffff, 0x8a5fd0][(Math.random() * 4) | 0];
  const m = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), new THREE.MeshStandardMaterial({ color: c, roughness: 0.6 }));
  m.position.y = 0.18;
  g.add(m);
  g.position.set(x, ground(x, z), z);
  return g;
}

export function buildVegetation() {
  const group = new THREE.Group();
  const swayers = [];
  let s = 7;
  const rnd = () => { s = (s * 16807) % 2147483647; return (s & 0xffff) / 0xffff; };

  // junipers clinging to the cape cliff edges + a few on the island
  const junSpots = [];
  for (let i = 0; i < 26; i++) {
    const x = 1 + rnd() * 26;
    const z = (rnd() - 0.5) * 22;
    const h = ground(x, z);
    if (h > 1.2) junSpots.push([x, z, 0.7 + rnd() * 0.8]);
  }
  for (let i = 0; i < 8; i++) {
    const a = rnd() * Math.PI * 2, r = 0.5 + rnd() * 0.4;
    const x = LAYOUT.island.x + Math.cos(a) * LAYOUT.island.ax * r;
    const z = LAYOUT.island.z + Math.sin(a) * LAYOUT.island.az * r;
    if (ground(x, z) > 3) junSpots.push([x, z, 0.5 + rnd() * 0.5]);
  }
  junSpots.forEach(([x, z, sc]) => {
    const j = juniper(x, z, sc);
    group.add(j);
    swayers.push({ obj: j.userData.canopy, phase: rnd() * 6, amp: 0.05 });
  });

  // Pitsunda pines on the ridge
  for (let i = 0; i < 10; i++) {
    const x = 14 + rnd() * 16;
    const z = (rnd() - 0.5) * 20;
    const h = ground(x, z);
    if (h > 4) {
      const p = pine(x, z, 0.8 + rnd() * 0.7);
      group.add(p);
    }
  }

  // dry grass tufts (island top + cape)
  for (let i = 0; i < 60; i++) {
    const x = rnd() * 40 - 20;
    const z = (rnd() - 0.5) * 26;
    const h = ground(x, z);
    if (h > 0.3) {
      const t = grassTuft(x, z, 0.6 + rnd() * 0.7);
      group.add(t);
      swayers.push({ obj: t, phase: rnd() * 6, amp: 0.12 });
    }
  }
  // wildflowers in crevices
  for (let i = 0; i < 40; i++) {
    const x = rnd() * 34 - 16;
    const z = (rnd() - 0.5) * 24;
    if (ground(x, z) > 0.2) group.add(flower(x, z));
  }

  group.userData.update = (t) => {
    for (const sw of swayers) {
      sw.obj.rotation.z = Math.sin(t * 1.6 + sw.phase) * sw.amp;
      sw.obj.rotation.x = Math.cos(t * 1.3 + sw.phase) * sw.amp * 0.6;
    }
  };
  return group;
}

// ---------------- Gulls ------------------------------------------------------
function buildGull() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.7, 6), new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: 0.8 }));
  body.rotation.x = Math.PI / 2;
  g.add(body);
  const wingMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, side: THREE.DoubleSide });
  const wingShape = new THREE.Shape();
  wingShape.moveTo(0, 0);
  wingShape.quadraticCurveTo(0.5, 0.05, 1.05, 0.30);
  wingShape.quadraticCurveTo(0.45, 0.12, 0, 0.10);
  const wingGeo = new THREE.ShapeGeometry(wingShape, 6);
  const wl = new THREE.Mesh(wingGeo, wingMat);
  wl.position.set(-0.05, 0, 0);
  const wr = new THREE.Mesh(wingGeo, wingMat);
  wr.position.set(0.05, 0, 0);
  wr.scale.x = -1;
  g.add(wl, wr);
  g.userData = { wl, wr };
  return g;
}

export function buildGulls() {
  const group = new THREE.Group();
  const gulls = [];
  for (let i = 0; i < 5; i++) {
    const g = buildGull();
    group.add(g);
    gulls.push({
      mesh: g,
      cx: LAYOUT.island.x, cz: LAYOUT.island.z,
      R: 5 + i * 1.6,
      h: 13 + i * 1.4,
      speed: (0.25 + i * 0.05) * (i % 2 ? 1 : -1),
      phase: i * 1.7,
      flap: 0,
    });
  }
  group.userData.update = (t) => {
    for (const g of gulls) {
      const a = t * g.speed + g.phase;
      const x = g.cx + Math.cos(a) * g.R;
      const z = g.cz + Math.sin(a) * g.R;
      const y = g.h + Math.sin(t * 0.8 + g.phase) * 0.8;
      g.mesh.position.set(x, y, z);
      // face travel direction
      const a2 = a + Math.PI / 2 * (g.speed > 0 ? 1 : -1);
      g.mesh.rotation.y = -a2;
      const f = Math.sin(t * 12 + g.phase) * 0.6;
      g.mesh.userData.wl.rotation.z = f;
      g.mesh.userData.wr.rotation.z = -f;
    }
  };
  return group;
}

// ---------------- Dolphins ---------------------------------------------------
function buildDolphin() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x3a4a5a, roughness: 0.5, metalness: 0.1 });
  const belly = new THREE.MeshStandardMaterial({ color: 0xcfd6da, roughness: 0.5 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), mat);
  body.scale.set(2.6, 0.75, 0.7);
  g.add(body);
  const bellyMesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), belly);
  bellyMesh.scale.set(2.4, 0.5, 0.55);
  bellyMesh.position.y = -0.18;
  g.add(bellyMesh);
  // snout
  const snout = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.6, 10), mat);
  snout.rotation.z = -Math.PI / 2;
  snout.position.set(1.45, 0, 0);
  g.add(snout);
  // dorsal fin
  const fin = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.5, 6), mat);
  fin.position.set(-0.1, 0.55, 0);
  fin.rotation.z = 0.3;
  g.add(fin);
  // tail flukes
  const fluke = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.3, 0.7), mat);
  fluke.position.set(-1.35, 0.05, 0);
  g.add(fluke);
  g.userData.fluke = fluke;
  return g;
}

function makeSplash() {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.4, 0.06, 8, 20),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 })
  );
  ring.rotation.x = Math.PI / 2;
  g.add(ring);
  const drops = [];
  for (let i = 0; i < 10; i++) {
    const d = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), new THREE.MeshBasicMaterial({ color: 0xefffff, transparent: true, opacity: 0.8 }));
    g.add(d);
    drops.push(d);
  }
  g.userData = { ring, drops, t: -1, life: 1.0 };
  g.visible = false;
  return g;
}

export function buildDolphins() {
  const group = new THREE.Group();
  const D = LAYOUT.dolphin;
  const N = 4;
  const dolphins = [];
  const splashes = [];
  for (let i = 0; i < N; i++) {
    const g = buildDolphin();
    g.visible = false;
    group.add(g);
    const cx = D.xMin + 6 + (i / N) * (D.xMax - D.xMin - 12);
    const cz = (i % 2 ? 1 : -1) * (5 + i * 2);
    dolphins.push({
      mesh: g,
      cx, cz,
      R: 4 + i * 1.5,
      speed: 0.15 + i * 0.03,
      phase: i * 2.1,
      dir: i % 2 ? 1 : -1,
      baseY: -0.7,
      leapH: 1.4 + i * 0.2,
      nextLeap: 2 + i * 4 + Math.random() * 4,   // staggered first leap
      gap: 9 + Math.random() * 9,
      leaping: false, leapT: 0, leapDur: 1.3,
    });
  }
  // splash pool
  for (let i = 0; i < 8; i++) { const sp = makeSplash(); group.add(sp); splashes.push(sp); }
  let splashIdx = 0;

  function spawnSplash(x, z) {
    const sp = splashes[splashIdx]; splashIdx = (splashIdx + 1) % splashes.length;
    sp.position.set(x, 0.05, z);
    sp.visible = true;
    sp.userData.t = 0;
  }

  group.userData.update = (t) => {
    for (const d of dolphins) {
      const a = t * d.speed * d.dir + d.phase;
      const x = d.cx + Math.cos(a) * d.R;
      const z = d.cz + Math.sin(a) * d.R;

      // leap timing
      if (!d.leaping && t > d.nextLeap) {
        d.leaping = true; d.leapT = 0;
        spawnSplash(x, z);
      }
      let y = d.baseY + Math.sin(t * 2 + d.phase) * 0.15;
      let pitch = 0;
      if (d.leaping) {
        d.leapT += 1 / 60;
        const u = Math.min(1, d.leapT / d.leapDur);
        y = d.baseY + d.leapH * Math.sin(Math.PI * u);
        pitch = Math.sin(Math.PI * u) * 0.9 * d.dir;
        if (u >= 1) {
          d.leaping = false;
          d.nextLeap = t + (d.gap * (0.7 + Math.random() * 0.6));
          d.gap = 8 + Math.random() * 10;
          spawnSplash(x, z);
        }
      }
      d.mesh.position.set(x, y, z);
      // face travel direction
      const a2 = a + Math.PI / 2 * d.dir;
      d.mesh.rotation.y = -a2;
      d.mesh.rotation.z = pitch;
      // tail sway
      d.mesh.userData.fluke.rotation.y = Math.sin(t * 8 + d.phase) * 0.3;
      d.mesh.visible = y > -1.4;
    }
    // update splashes
    for (const sp of splashes) {
      if (!sp.visible) continue;
      const ud = sp.userData;
      ud.t += 1 / 60;
      const u = ud.t / ud.life;
      if (u >= 1) { sp.visible = false; continue; }
      ud.ring.scale.setScalar(1 + u * 3);
      ud.ring.material.opacity = 0.8 * (1 - u);
      for (let i = 0; i < ud.drops.length; i++) {
        const drop = ud.drops[i];
        const ang = (i / ud.drops.length) * Math.PI * 2;
        drop.position.set(Math.cos(ang) * u * 1.2, Math.sin(u * Math.PI) * 1.0, Math.sin(ang) * u * 1.2);
        drop.material.opacity = 0.8 * (1 - u);
      }
    }
  };
  return group;
}
