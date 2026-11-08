// Terrain and cutaway materials: geology colour comes from vertex colours, the
// surface cover (rock / shingle / dry grass / weed) comes from code-painted
// textures, plus caustics and wetness under the waterline.
import * as THREE from 'three';
import { SUN_DIR, SUN_COLOR, SKY_GLSL } from './sky.js';

/** share the sky's uniform objects so one update drives every shader */
export function skyRefs(skyUniforms) {
  return {
    uSunDir: skyUniforms.uSunDir,
    uSkyZenith: skyUniforms.uSkyZenith,
    uSkyHorizon: skyUniforms.uSkyHorizon,
    uTime: skyUniforms.uTime,
  };
}

export function createLandMaterial(tex, refs) {
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.94,
    metalness: 0,
    map: tex.rock,
    bumpMap: tex.rockBump,
    bumpScale: 0.5,
  });
  mat.customProgramCacheKey = () => 'utrish-land';
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uGravel = { value: tex.gravel };
    shader.uniforms.uGravelBump = { value: tex.gravelBump };
    shader.uniforms.uGrass = { value: tex.grass };
    shader.uniforms.uWeed = { value: tex.weed };
    shader.uniforms.uTime = refs.uTime;
    shader.uniforms.uSea = { value: 0 };
    shader.uniforms.uSunDir = refs.uSunDir;

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        /* glsl */ `
        #include <common>
        attribute vec4 aCover;
        varying vec4 vCover;
        varying vec3 vWPos;
        `,
      )
      .replace(
        '#include <begin_vertex>',
        /* glsl */ `
        #include <begin_vertex>
        vCover = aCover;
        vWPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
        `,
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        /* glsl */ `
        #include <common>
        uniform sampler2D uGravel;
        uniform sampler2D uGravelBump;
        uniform sampler2D uGrass;
        uniform sampler2D uWeed;
        uniform float uTime;
        uniform float uSea;
        uniform vec3 uSunDir;
        varying vec4 vCover;
        varying vec3 vWPos;
        `,
      )
      .replace(
        '#include <map_fragment>',
        /* glsl */ `
        #ifdef USE_MAP
          vec3 rockT = texture2D( map, vMapUv ).rgb;
          // multiply-blend a five-times finer pass: real rock faces are gritty,
          // and without it the terrain reads as soft plaster
          vec3 rockFine = texture2D( map, vMapUv * 5.5 + vec2( 2.3, 0.7 ) ).rgb;
          rockT = mix( rockT, rockT * rockFine * 1.32, 0.6 );
          vec3 gravT = texture2D( uGravel, vMapUv * 3.1 ).rgb;
          float gravB = texture2D( uGravelBump, vMapUv * 3.1 ).r;
          float pebB = texture2D( uGravelBump, vMapUv * 9.5 ).r;
          gravT *= 0.66 + 0.55 * pebB;
          float weedB = texture2D( uGravelBump, vMapUv * 1.5 ).r;
          vec3 grassT = texture2D( uGrass, vMapUv * 1.35 ).rgb;
          vec3 weedT = texture2D( uWeed, vMapUv * 1.7 ).rgb;
          vec3 vegT = mix( grassT, weedT, clamp( vCover.z, 0.0, 1.0 ) );
          vec3 mineral = mix( rockT, gravT * ( 0.62 + 0.72 * gravB ), vCover.x );
          vec3 surfT = mix( mineral, vegT * ( 0.72 + 0.5 * weedB ), vCover.y );
          diffuseColor.rgb *= surfT;
        #endif
        // caustic web in the clear shallows
        {
          float sub = smoothstep( uSea + 0.1, uSea - 0.6, vWPos.y );
          float shallow = smoothstep( -4.4, -0.2, vWPos.y );
          if ( sub > 0.005 && shallow > 0.005 ) {
            vec2 q = vWPos.xz;
            float t = uTime * 0.85;
            float c1 = sin( q.x * 0.85 + t ) + sin( q.y * 0.72 - t * 1.24 ) + sin( ( q.x + q.y ) * 0.61 + t * 0.72 );
            float c2 = sin( q.x * 1.37 - t * 1.1 ) + sin( q.y * 1.21 + t * 0.9 ) + sin( ( q.x - q.y ) * 0.93 - t * 0.6 );
            float web = pow( clamp( 1.0 - abs( c1 ) * 0.21, 0.0, 1.0 ), 3.0 )
                      + 0.55 * pow( clamp( 1.0 - abs( c2 ) * 0.24, 0.0, 1.0 ), 4.0 );
            diffuseColor.rgb *= 1.0 + web * 0.85 * sub * shallow;
          }
          // water absorbs: the seabed loses its reds and its brightness
          float subd = smoothstep( uSea - 0.05, uSea - 3.4, vWPos.y );
          diffuseColor.rgb *= mix( 1.0, 0.40, subd );
          diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.035, 0.105, 0.100 ), subd * 0.6 );
        }
        `,
      )
      .replace(
        '#include <roughnessmap_fragment>',
        /* glsl */ `
        float roughnessFactor = roughness;
        float sub = smoothstep( uSea + 0.15, uSea - 0.5, vWPos.y );
        float tidal = smoothstep( 1.15, 0.15, abs( vWPos.y - uSea - 0.3 ) ) * ( 1.0 - sub );
        roughnessFactor *= 1.0 - 0.5 * max( sub, tidal );
        `,
      );
    mat.userData.shader = shader;
  };
  return mat;
}

/**
 * The cut face of the diorama: strata in section, capped by the translucent
 * "block of sea" that the model was cut through.
 */
export function createWallMaterial(tex, refs) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uRock: { value: tex.rock },
      uSunColor: { value: SUN_COLOR.clone() },
      uSea: { value: 0 },
      uSunDir: refs.uSunDir,
      uSkyZenith: refs.uSkyZenith,
      uSkyHorizon: refs.uSkyHorizon,
      uTime: refs.uTime,
    },
    vertexShader: /* glsl */ `
      attribute float aSeabed;
      attribute float aSv;
      varying vec3 vWPos;
      varying vec3 vNrm;
      varying vec3 vCol;
      varying float vSeabed;
      varying float vSv;
      void main() {
        vWPos = ( modelMatrix * vec4( position, 1.0 ) ).xyz;
        vNrm = normalize( mat3( modelMatrix ) * normal );
        vCol = color;
        vSeabed = aSeabed;
        vSv = aSv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uRock;
      uniform vec3 uSunColor;
      uniform float uSea;
      varying vec3 vWPos;
      varying vec3 vNrm;
      varying vec3 vCol;
      varying float vSeabed;
      varying float vSv;
      ${SKY_GLSL}

      void main() {
        vec3 N = normalize( vNrm );
        vec3 V = normalize( cameraPosition - vWPos );
        float ndl = max( dot( N, uSunDir ), 0.0 );
        vec3 amb = mix( vec3( 0.20, 0.235, 0.285 ), vec3( 0.40, 0.375, 0.315 ), N.y * 0.5 + 0.5 );

        float d = texture2D( uRock, vec2( mix( vWPos.x, vWPos.z, 0.5 ) * 0.14 + vWPos.y * 0.03, vWPos.y * 0.15 ) ).r;
        vec3 rock = vCol * ( 0.66 + 0.52 * d );
        vec3 rockCol = rock * ( amb * 1.8 + uSunColor * ndl * 1.15 );

        // bedding planes in section
        float b = fract( vSv / 1.7 );
        float line = smoothstep( 0.95, 1.0, b ) + smoothstep( 0.055, 0.0, b );
        rockCol *= 1.0 - line * 0.42;
        // parting surfaces and the odd rubbly bed read darker still
        rockCol *= 1.0 - 0.16 * smoothstep( 0.86, 0.95, fract( vSv / 0.43 ) );

        // ---- the cut through the sea -----------------------------------
        float bed = min( vSeabed, uSea );
        float band = smoothstep( bed + 0.02, bed + 0.32, vWPos.y ) * ( 1.0 - smoothstep( uSea - 0.02, uSea + 0.12, vWPos.y ) );
        float depth01 = clamp( ( uSea - vWPos.y ) / 22.0, 0.0, 1.0 );
        vec3 resin = mix( vec3( 0.100, 0.260, 0.290 ), vec3( 0.010, 0.050, 0.096 ), pow( depth01, 0.42 ) );
        float lam = 0.5 + 0.5 * sin( vWPos.y * 6.3 + fbm2( vWPos.xz * 0.03 ) * 5.0 );
        resin *= 0.92 + 0.115 * lam;
        float bub = fbm2( vec2( mix( vWPos.x, vWPos.z, 0.5 ) * 1.7, vWPos.y * 2.4 ) );
        resin += smoothstep( 0.90, 0.995, bub ) * 0.16 * ( 1.0 - depth01 );
        float fres = pow( 1.0 - abs( dot( N, V ) ), 3.5 );
        resin += skySample( reflect( -V, N ) ) * fres * 0.30;
        resin += vec3( 1.0, 0.85, 0.66 ) * pow( max( dot( reflect( -V, N ), uSunDir ), 0.0 ), 90.0 ) * 0.32;
        resin += vec3( 0.55, 0.66, 0.68 ) * ( 1.0 - smoothstep( 0.0, 0.30, uSea - vWPos.y ) ) * 0.22;

        vec3 col = mix( rockCol, resin, band * 0.88 );
        // the seam where the water was cut through the sediment
        col *= 1.0 - 0.5 * band * ( 1.0 - smoothstep( bed, bed + 0.34, vWPos.y ) );
        col *= mix( 0.5, 1.0, smoothstep( -26.0, -17.0, vWPos.y ) );

        gl_FragColor = vec4( col, 1.0 );
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    vertexColors: true,
  });
}

export function createBottomMaterial() {
  return new THREE.MeshStandardMaterial({ color: 0x2a2724, roughness: 1, metalness: 0 });
}
