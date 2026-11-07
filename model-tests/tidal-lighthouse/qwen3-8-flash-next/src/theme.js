/**
 * theme.js — shared light and colour palette.  Values are written as the sRGB
 * colours they should read as; THREE.Color converts to linear on construction.
 */

import * as THREE from 'three';

/** late-afternoon sun: low, in the +Z / -X sky, so foam is backlit */
// Low sun coming into the harbour from between the spit and the neck: warm on
// the buildings and the quay, with the seaward faces of the rocks left in cool
// blue shade.
export const SUN_DIR = new THREE.Vector3(0.80, 0.46, 0.235).normalize();
export const SUN_COLOR = 0xffd7a5;
export const SUN_INTENSITY = 2.15;
export const HEMI_SKY = 0xbcd6e6;
export const HEMI_GROUND = 0x6b6250;
export const HEMI_INTENSITY = 0.95;

export const SKY_TOP = 0x77a2c6;
export const SKY_MID = 0xc4dae6;
export const SKY_LOW = 0xe7dfd3; // matches the fog colour at the horizon
export const SUN_GLOW = 0xffc587;

export const FOG_COLOR = 0xe7dfd3;
export const FOG_NEAR = 62;
export const FOG_FAR = 215;

export const OCEAN_DEEP = 0x092c4c;
export const OCEAN_MID = 0x0f6a90;
export const OCEAN_SHALLOW = 0x33b6ac;
export const FOAM_COLOR = 0xf7fbfa;

export const SAND = 0xd3b180;
export const WET_SAND = 0x9d8560;
export const SHORE_ROCK = 0x6f655c;
export const ROCK = 0x83746a;
export const ROCK_DARK = 0x4c4a4a;
export const GRASS = 0x86a054;
export const MOSS = 0x628040;
export const PLASTER = 0xe8e0cf;
export const TOWER_RED = 0xbb3c2c;
export const COPPER = 0x2f8f7d;
export const WARM_LIGHT = 0xffc271;
