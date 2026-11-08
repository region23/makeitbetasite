// Shared layout constants for the Utrish diorama.
// Coordinate system (scene units, ~1 unit ≈ 1 m, whole piece is a miniature):
//   X: - = west (open sea)   + = east (cape / ridge)
//   Z: - = north             + = south
//   Y: up.  Water surface at y = 0.
// The diorama is an irregular slice: cape (east), narrow strait, island (west),
// open sea beyond. Cutaway sides face the camera and show landslide geology.

export const LAYOUT = {
  waterY: 0,

  // Diorama footprint (the slice extends a little outside the water for the cut sides)
  bounds: { xMin: -62, xMax: 42, zMin: -30, zMax: 30 },

  // Utrish island (the rocky islet with the two lighthouses)
  island: { x: -13, z: 0, ax: 8, az: 7, height: 8 },

  // Strait between the island and the cape (the narrow ~20 m gap)
  strait: { xMin: -6, xMax: 0, zMin: -7, zMax: 7 },

  // Cape Bolshoy Utrish (east of the strait)
  cape: { xMin: 0, xMax: 34, zHalf: 13, ridgeHeight: 16 },

  // 1975 lighthouse-monument (tall slender pale tower)
  lighthouse: { x: -13.2, z: -1.6 },
  // 1911 lighthouse -> Chapel of St. Nicholas (low, near the strait shoreline)
  chapel: { x: -10.4, z: 1.9 },
  // Granite memorial slab with the crew names
  slab: { x: -14.6, z: 0.6 },
  // Small Yak-40 crew monument
  yak40: { x: -12.2, z: 3.4 },

  // Metal footbridge crossing the strait
  bridge: { z: -2.4, xIsland: -6.6, xCape: 0.8, deckY: 2.1 },
  // Low causeway / footpath from the bridge to the lighthouses (island side)
  causeway: { x0: -6.6, x1: -10.0, z: -2.4 },

  // Wooden/steel pier on the cape beach (sheltered side), with moored boats
  pier: { xCape: 7.5, xEnd: -1.5, z: 3.6 },

  // Open-air dolphinarium lagoon with floating net pens (lee of the cape, south)
  dolphinarium: { x: 16, z: 10, rx: 7, rz: 5 },

  // Village buildings at the edge of the piece (behind the cape)
  village: { x: 26, z: -5 },

  // Open sea area where the dolphins swim (kept clear of rocks/strait/pier)
  dolphin: { xMin: -58, xMax: -24, zMin: -16, zMax: 16 },
};

// Model identity + full prompt for the info panel (see index.html).
export const MODEL_INFO = {
  name: "Qwen3.8-27B-oQ4e-mtp",
  alias: "daily",
  runtime: "omlx (MLX local inference server, macOS)",
  note: "Local model; the exact variant string is taken from the inference runtime's model settings.",
};
