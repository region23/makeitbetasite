import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Every element of the miniature, including the water, is made in code.
export function createDiorama(container) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#e7e9e3');
  scene.fog = new THREE.Fog('#e7e9e3', 23, 48);
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
  camera.position.set(12, 10, 16);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  container.appendChild(renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, .4, 0);
  controls.enableDamping = true;
  controls.dampingFactor = .055;
  controls.minDistance = 6;
  controls.maxDistance = 34;
  controls.maxPolarAngle = Math.PI * .48;
  controls.saveState();
  scene.add(new THREE.HemisphereLight('#eaf6ff', '#6f7167', 2.1));
  const sun = new THREE.DirectionalLight('#ffe0ad', 3.4);
  sun.position.set(-8, 14, 9);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 40 });
  sun.shadow.bias = -.0003;
  scene.add(sun);
  const mat = (color, extra={}) => new THREE.MeshStandardMaterial({ color, roughness: .86, ...extra });
  const stone = mat('#d0c5ae');
  const paleStone = mat('#e1d9c6');
  const chalk = mat('#eee9d9');
  const metal = mat('#5f6c66', { metalness:.55, roughness:.45 });
  const rust = mat('#865e46', { metalness:.35 });
  const dark = mat('#293c3d');
  const gold = mat('#c8a247', { metalness:.68, roughness:.3 });
  const wood = mat('#b79b73');
  const add = (geo, material, x=0,y=0,z=0, parent=scene) => {
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(x,y,z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
  };
  const box = (w,h,d,m,x,y,z,p=scene) => add(new THREE.BoxGeometry(w,h,d),m,x,y,z,p);
  const cyl = (r1,r2,h,m,x,y,z,p=scene,n=24) => add(new THREE.CylinderGeometry(r1,r2,h,n),m,x,y,z,p);
  const sphere = (r,m,x,y,z,p=scene) => add(new THREE.SphereGeometry(r,8,6),m,x,y,z,p);
  const lineBetween = (a,b,r,m,p=scene) => {
    const v = new THREE.Vector3().subVectors(b,a), mesh = cyl(r,r,v.length(),m,0,0,0,p,6);
    mesh.position.copy(a).add(b).multiplyScalar(.5); mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize()); return mesh;
  };
  let seed = 7932;
  const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const pick = arr => arr[Math.floor(rand()*arr.length)];

  // The lower edge of the model exposes the bedding of the ancient landslide.
  const base = cyl(1,1,.65,mat('#919484'),0,-.49,0,scene,128); base.scale.set(8.8,1,6.4);
  for (let i=0; i<5; i++) {
    const band = cyl(1,1,.055,mat(['#a6a18d','#c0b9a4','#999989','#cbc2aa','#a8a898'][i]),0,-.76+i*.115,0,scene,128);
    band.scale.set(8.81,1,6.41);
  }
  const waterUniforms = { time:{value:0} };
  const water = new THREE.Mesh(new THREE.PlaneGeometry(17.6,12.8,180,130), new THREE.ShaderMaterial({
    uniforms:waterUniforms, transparent:false,
    vertexShader:`uniform float time; varying vec2 vP; varying float vWave; void main(){ vP=vec2(position.x,-position.y); vec3 p=position; float exposed=smoothstep(-1.0,1.5,vP.y)*(1.0-smoothstep(-1.5,2.0,vP.x)); float w=sin(p.x*1.5+p.y*3.2+time*1.2)*.045+sin(p.x*3.7-p.y*4.2+time*1.8)*.018; p.z+=w*(.3+exposed); vWave=w; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }`,
    fragmentShader:`uniform float time; varying vec2 vP; varying float vWave; void main(){ vec2 uv=vP/vec2(8.8,6.4); if(dot(uv,uv)>1.) discard; float island=length((vP-vec2(-2.,0.))/vec2(3.3,2.3)); float cape=length((vP-vec2(3.1,-1.5))/vec2(3.2,3.)); float shore=1.-smoothstep(.8,1.52,min(island,cape)); float deep=smoothstep(2.0,6.5,length(vP-vec2(1.,-1.))); float exposed=smoothstep(-.5,1.8,vP.y)*(1.-smoothstep(-2.,2.,vP.x)); vec3 c=mix(vec3(.10,.45,.44),vec3(.035,.27,.37),deep); c=mix(c,vec3(.38,.66,.57),shore*.82); float bands=pow(max(0.,sin(vP.y*4.4+vP.x*.85+time*1.4)),12.); c+=vec3(.12,.20,.18)*bands*exposed*.45; float waves=pow(max(0.,sin(vP.x*1.6+vP.y*3.5+time*1.3)+.2*sin(vP.x*4.-time)),9.); float ripple=pow(max(0.,sin(vP.x*7.+sin(vP.y*3.)+time*.8)*sin(vP.y*8.-time*.6)),14.); c+=vec3(.15,.22,.20)*waves*exposed*.48+vec3(.13,.18,.16)*ripple*.3; vec2 grid=vP*11.; vec2 cell=floor(grid); vec2 f=fract(grid)-.5; float rnd=fract(sin(dot(cell,vec2(127.1,311.7)))*43758.5453); vec2 offset=vec2(rnd-.5,fract(rnd*7.13)-.5)*.35; float pebble=1.-smoothstep(.20,.35,length((f-offset)*vec2(1.,1.35))); float clear=shore*(1.-smoothstep(1.2,2.0,vP.y))*.25; c=mix(c,vec3(.62,.66,.54),pebble*clear*(.45+rnd*.55)); c+=vWave*.28; gl_FragColor=vec4(c,1.); }`
  }));
  water.rotation.x=-Math.PI/2; water.position.y=.02; water.receiveShadow=true; scene.add(water);

  // Irregular coast meshes: the individual bands tilt and break like limestone strata.
  function land(points, center, top, cliffColors) {
    const g = new THREE.Group(); scene.add(g);
    const vertices=[], colors=[], indices=[];
    const cc = new THREE.Color();
    const centerY=top+.08;
    vertices.push(center[0],centerY,center[1]); colors.push(.68,.66,.57);
    for (let i=0;i<points.length;i++) {
      const [x,z,h=0]=points[i]; vertices.push(x,top+h,z); cc.set(pick(cliffColors)); colors.push(cc.r,cc.g,cc.b);
    }
    for(let i=0;i<points.length;i++) indices.push(0,1+i,1+(i+1)%points.length);
    const topGeo=new THREE.BufferGeometry(); topGeo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3)); topGeo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3)); topGeo.setIndex(indices); topGeo.computeVertexNormals();
    const topMesh=add(topGeo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,side:THREE.DoubleSide}),0,0,0,g);
    const layers=5;
    for(let i=0;i<points.length;i++) {
      const a=points[i],b=points[(i+1)%points.length];
      for(let j=0;j<layers;j++) {
        const t=j/layers, u=(j+1)/layers;
        const y0=-.28+(top+.28)*t, y1=-.28+(top+.28)*u;
        const offset=(j%2)*.045, nextOffset=j===layers-1?0:((j+1)%2)*.045;
        const tilt=(b[0]-a[0])*.065+(b[1]-a[1])*.035; const v=[a[0]+offset,y0-tilt*4*t*(1-t)+(a[2]||0)*t,a[1], b[0]+offset,y0+tilt*4*t*(1-t)+(b[2]||0)*t,b[1], b[0]+nextOffset,y1+tilt*4*u*(1-u)+(b[2]||0)*u,b[1], a[0]+nextOffset,y1-tilt*4*u*(1-u)+(a[2]||0)*u,a[1]];
        const geom=new THREE.BufferGeometry();geom.setAttribute('position',new THREE.Float32BufferAttribute(v,3));geom.setIndex([0,1,2,0,2,3]);geom.computeVertexNormals();
        add(geom,mat(pick(cliffColors),{side:THREE.DoubleSide}),0,0,0,g);
      }
    }
    // Fine diagonal seams across the fractured cliff faces.
    const seam=mat('#888d80');
    for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length]; for(let k=0;k<3;k++){const f=.12+k*.27, f2=Math.min(.98,f+.11); const pos=(v,h)=>new THREE.Vector3(THREE.MathUtils.lerp(a[0],b[0],v),h,THREE.MathUtils.lerp(a[1],b[1],v));lineBetween(pos(f,.03),pos(f2,top*.75),.009,seam,g);}}
    return g;
  }
  const island=[[-4.7,-.8,.05],[-4.2,-1.55,.1],[-3.2,-1.9,.14],[-2.2,-1.8,.05],[-1.3,-1.5,.03],[-.55,-.85,-.05],[-.35,-.15,-.16],[-.65,.6,-.1],[-1.15,1.35,-.03],[-2.3,1.7,.08],[-3.5,1.55,.05],[-4.5,.9,0],[-4.9,.1,0]];
  const cape=[[.65,-2.1,.15],[1.5,-3.2,.3],[2.8,-4.1,.45],[4.3,-3.9,.5],[5.5,-3,.27],[6.3,-1.8,.05],[6.2,-.5,-.1],[5.5,.3,-.14],[4.3,.55,-.2],[3.4,.6,-.18],[2.3,.4,-.12],[1.2,.05,-.12],[.72,-.7,0]];
  land(island,[-2.6,0],.62,['#b3aa96','#c7bca6','#d3c9b5','#aba795','#e0d5bf']);
  land(cape,[3.3,-2],.72,['#b6ad98','#d0c4aa','#d8ceb8','#ada996','#c1b7a1']);
  // A rugged backdrop rises above the beach; it remains a cutaway, not a horizon.
  land([[1.2,-3.0,.2],[2.1,-4.0,.5],[3.4,-4.8,.6],[4.9,-4.5,.35],[5.6,-3.6,0],[4.4,-2.9,-.05],[2.8,-2.8,0]], [3.2,-3.8], 1.35,['#a69e85','#b8b099','#c2b59b','#939882']);

  // Broken, angular blocks and scattered pale plates on the exposed shore.
  for(let i=0;i<70;i++) {
    const angle=rand()*Math.PI*2, rad=.85+rand()*.25;
    const x=-2.6+Math.cos(angle)*2.4*rad, z=Math.sin(angle)*1.55*rad;
    const rock=add(new THREE.DodecahedronGeometry(.08+rand()*.23,0),mat(pick(['#bdb6a5','#d0c6b1','#9d9e91','#e0d5be'])),x,.08+rand()*.2,z);
    rock.scale.set(1.5,.5+rand()*.5,.7); rock.rotation.set(rand(),rand()*3,rand()*.4);
  }
  for(let i=0;i<80;i++) {
    const x=1.8+rand()*3.7,z=-.15+rand()*.8;
    const pebble=sphere(.025+rand()*.05,mat(pick(['#c7bba4','#b5ad9a','#e1d5bc','#9b9b8e'])),x,.64,z);
    pebble.scale.set(1.5,.5,1);
  }

  // Memorial lighthouse: broad relief belt, slender cylindrical shaft and open gallery.
  const lighthouse = new THREE.Group(); lighthouse.position.set(-2.35,.64,-.08); scene.add(lighthouse);
  cyl(.83,.9,.12,chalk,0,.06,0,lighthouse,32); cyl(.7,.8,.14,paleStone,0,.18,0,lighthouse,32);
  cyl(.53,.61,2.75,stone,0,1.62,0,lighthouse,40);
  cyl(.64,.64,.68,mat('#bdb4a3'),0,.81,0,lighthouse,40);
  // Raised miniature portraits are deliberately abstract and respectful.
  for(let i=0;i<18;i++) {
    const a=i*Math.PI*2/18;
    const head=sphere(.088,paleStone,Math.sin(a)*.649,.95,Math.cos(a)*.649,lighthouse); head.scale.set(.8,1.2,.55); head.rotation.y=a;
    const torso=box(.13,.22,.045,paleStone,Math.sin(a)*.65,.76,Math.cos(a)*.65,lighthouse); torso.rotation.y=a;
  }
  cyl(.63,.55,.12,chalk,0,3.04,0,lighthouse,32); cyl(.69,.69,.1,stone,0,3.14,0,lighthouse,32);
  for(let i=0;i<24;i++) {const a=i*Math.PI*2/24; cyl(.012,.012,.43,metal,Math.sin(a)*.61,3.37,Math.cos(a)*.61,lighthouse,6);}
  const ring=(r,y,m,p=lighthouse) => {const mesh=add(new THREE.TorusGeometry(r,.014,6,48),m,0,y,0,p);mesh.rotation.x=Math.PI/2;};
  ring(.61,3.58,metal);ring(.61,3.34,metal);
  cyl(.3,.3,.58,mat('#bdd9cd',{transparent:true,opacity:.65,roughness:.15,metalness:.1}),0,3.5,0,lighthouse,20);
  for(let i=0;i<8;i++){const a=i*Math.PI/4;cyl(.012,.012,.58,metal,Math.sin(a)*.3,3.5,Math.cos(a)*.3,lighthouse,6);}
  cyl(.34,.33,.09,metal,0,3.83,0,lighthouse,24); cyl(.1,.3,.16,metal,0,3.94,0,lighthouse,24);
  sphere(.12,mat('#ffe2a0',{emissive:'#f8bd65',emissiveIntensity:1.5}),0,3.5,0,lighthouse);
  // Small memorial stone at the approach.
  const slab=box(.53,.55,.12,mat('#676866'),-1.37,.98,.52); slab.rotation.y=-.32;
  box(.63,.07,.3,paleStone,-1.37,.69,.52).rotation.y=-.32;

  // Former 1911 lighthouse, before relocation: white base, blue drum and gilded dome.
  const chapel = new THREE.Group(); chapel.position.set(-3.85,.68,.38); scene.add(chapel);
  box(.95,.78,.82,chalk,0,.4,0,chapel);
  box(1.05,.1,.92,paleStone,0,.82,0,chapel);
  cyl(.39,.39,.72,mat('#456f9c'),0,1.23,0,chapel,24);
  cyl(.42,.42,.07,chalk,0,.9,0,chapel,24);
  const dome=sphere(.3,gold,0,1.67,0,chapel); dome.scale.set(1,.72,1);
  add(new THREE.ConeGeometry(.19,.28,16),gold,0,1.88,0,chapel);
  box(.035,.35,.035,gold,0,2.16,0,chapel); box(.22,.035,.035,gold,0,2.2,0,chapel);
  box(.24,.47,.02,mat('#494e4a'),0,.28,.42,chapel);
  for(const x of [-.31,.31]) box(.07,.35,.025,paleStone,x,.4,.43,chapel);

  // The narrow riveted footbridge joins the two shores.
  const bridge = new THREE.Group(); bridge.position.set(.18,.48,-.43); scene.add(bridge);
  box(1.65,.1,.48,metal,0,0,0,bridge);
  for(let i=0;i<19;i++) box(.055,.025,.43,wood,-.79+i*.088,.065,0,bridge);
  for(const z of [-.27,.27]) {
    for(let i=0;i<7;i++) {const x=-.78+i*.26; box(.025,.48,.025,metal,x,.28,z,bridge);sphere(.023,rust,x,.08,z,bridge);}
    box(1.65,.025,.025,metal,0,.52,z,bridge);
    box(1.65,.018,.02,metal,0,.28,z,bridge);
    for(let i=0;i<6;i++) lineBetween(new THREE.Vector3(-.78+i*.26,.08,z),new THREE.Vector3(-.52+i*.26,.48,z),.01,metal,bridge);
  }
  // Pale footpath, winding from the bridge towards the monuments.
  const pathMat=mat('#ddd3bb');
  for(let i=0;i<20;i++){const x=-.55-i*.13,z=-.42+Math.sin(i*.19)*.19; const p=box(.17,.025,.28,pathMat,x,.66,z);p.rotation.y=.15;}

  // Pier, posts and small boats in the sheltered water.
  const pier = new THREE.Group(); pier.position.set(4.2,.45,.56);scene.add(pier);
  box(.45,.08,1.75,wood,0,0,.6,pier);
  for(let i=0;i<15;i++) box(.48,.025,.07,mat(i%3?'#bea27b':'#9f876b'),0,.055,-.2+i*.11,pier);
  for(const x of [-.19,.19])for(const z of [-.1,.5,1.2])cyl(.035,.035,.6,wood,x,-.25,z,pier,7);
  const boats=[];
  function boat(x,z,angle,scale=1) {
    const g=new THREE.Group();g.position.set(x,.2,z);g.rotation.y=angle;g.scale.setScalar(scale);scene.add(g);
    const hull=add(new THREE.SphereGeometry(1,16,8,0,Math.PI*2,0,Math.PI/2),mat('#edece1'),0,0,0,g); hull.rotation.z=Math.PI; hull.scale.set(.23,.15,.52);
    box(.34,.05,.63,mat('#d6d0bb'),0,.035,0,g); box(.28,.035,.08,mat('#56767b'),0,.07,-.03,g);
    box(.12,.11,.16,mat('#dce8df'),0,.12,-.17,g); boats.push({g,x,z,phase:rand()*7});return g;
  }
  boat(3.55,1.25,.15,.9);boat(4.95,1.8,-.5,.8);boat(5.4,.8,.4,1.15);
  for(const [x,z] of [[3.3,1.7],[5.4,2.25],[4.9,.8]]) sphere(.07,mat('#e9b06e'),x,.13,z);
  // Modest floating pens of the lagoon, tucked behind the shore.
  for(let i=0;i<2;i++){const tor=add(new THREE.TorusGeometry(.42,.022,6,36),mat('#6a8581'),5.5+i*.85,.09,-.8);tor.rotation.x=Math.PI/2;}

  // Wind-shaped juniper and pine, with spare island tufts.
  const greens=['#485f4b','#657657','#3f5b4a','#708062'];
  const plants=[];
  function shrub(x,y,z,s=1,tree=false) {
    const group=new THREE.Group();group.position.set(x,y,z);group.scale.setScalar(s);scene.add(group);
    if(tree) {cyl(.035,.06,.48,mat('#77705a'),0,.23,0,group,7); for(let j=0;j<5;j++){const a=rand()*6.28,r=rand()*.24;const crown=sphere(.20+rand()*.13,mat(pick(greens)),Math.cos(a)*r,.48+rand()*.20,Math.sin(a)*r,group);crown.scale.set(1.35,.58,1.1);}}
    else for(let j=0;j<5;j++){const a=rand()*6.28,r=rand()*.22;const crown=sphere(.17+rand()*.08,mat(pick(greens)),Math.cos(a)*r,.13+rand()*.12,Math.sin(a)*r,group);crown.scale.set(1,.75,1);}
    plants.push({group,phase:rand()*6});
  }
  for(let i=0;i<90;i++) {const x=1.5+rand()*4,z=-4.35+rand()*1.75; if(((x-3.4)/2.4)**2+((z+3.5)/1.1)**2<1) shrub(x,1.55,z,.35+rand()*.7,rand()>.72);}
  // Broken woodland across the lower cape leaves the beach and bridge clear.
  for(let i=0;i<110;i++){const x=1.25+rand()*4.6,z=-2.95+rand()*2.35; if(((x-3.45)/2.55)**2+((z+1.7)/1.65)**2<1 && !(x<1.75 && z>-.9)) shrub(x,.84,z,.25+rand()*.57,rand()>.84);}
  // Pale tilted outcrops interrupt the sparse open woodland.
  for(let i=0;i<55;i++){const x=1.35+rand()*4.6,z=-3.05+rand()*2.4; if(((x-3.45)/2.5)**2+((z+1.8)/1.6)**2>1)continue; const rock=add(new THREE.DodecahedronGeometry(.12+rand()*.24,0),mat(pick(['#c0b8a3','#d1c7af','#aca995','#ded3bc'])),x,.82,z);rock.scale.set(1.8,.45,1);rock.rotation.set(.12,rand()*3,.18+rand()*.35);}
  for(let i=0;i<30;i++){const x=-4.4+rand()*3.5,z=-1.4+rand()*2.7;if(rand()>.3)shrub(x,.7,z,.12+rand()*.16);}

  // Surf flecks and translucent swash arcs along the exposed cliff.
  const foam=[];
  for(let i=0;i<48;i++){
    const a=.2+rand()*2.6, x=-2.6+Math.cos(a)*2.7,z=Math.sin(a)*1.75;
    const m=new THREE.MeshBasicMaterial({color:'#f1f6e8',transparent:true,opacity:.65,depthWrite:false,side:THREE.DoubleSide});
    const arc=add(new THREE.RingGeometry(.16,.21,18,1,0,Math.PI*(.8+rand()*.7)),m,x,.08,z);arc.rotation.x=-Math.PI/2;arc.rotation.z=-a;foam.push({mesh:arc,phase:rand()*6});
  }
  // Small gull silhouettes wheel around the monument.
  const gulls=[];
  for(let i=0;i<4;i++){
    const g=new THREE.Group();const wingmat=mat('#e5e8df');
    const left=box(.34,.02,.07,wingmat,-.17,0,0,g);left.rotation.z=-.16;
    const right=box(.34,.02,.07,wingmat,.17,0,0,g);right.rotation.z=.16;
    scene.add(g);gulls.push({g,phase:i*1.7,radius:2.4+i*.35});
  }
  // Dolphins stay well offshore; their rise is staggered and intermittent.
  const dolphins=[];
  for(let i=0;i<4;i++){
    const g=new THREE.Group();scene.add(g);
    const skin=mat('#667d7c',{roughness:.38});
    const body=sphere(.19,skin,0,0,0,g);body.scale.set(.65,.7,2.4);
    const snout=sphere(.09,skin,0,-.015,.46,g);snout.scale.set(.8,.55,1.8);
    const fin=add(new THREE.ConeGeometry(.11,.22,3),skin,0,.15,-.05,g);fin.rotation.z=-.25;
    const tail=box(.35,.025,.1,skin,0,-.02,-.45,g);tail.rotation.y=.1;
    const wake=add(new THREE.RingGeometry(.16,.2,24),new THREE.MeshBasicMaterial({color:'#d8eee4',transparent:true,opacity:.5,side:THREE.DoubleSide}),0,-.09,0,g);wake.rotation.x=-Math.PI/2;
    dolphins.push({g,wake,phase:i*3.4,x:-6.3+i*1.25,z:3.5+i*.55});
  }
  const clock=new THREE.Clock();let frame;
  function animate(){
    const t=clock.getElapsedTime();waterUniforms.time.value=t;
    boats.forEach(b=>{b.g.position.y=.2+Math.sin(t*1.2+b.phase)*.025;b.g.rotation.z=Math.sin(t*.8+b.phase)*.025;});
    foam.forEach(f=>{const k=(t*.22+f.phase)%1;f.mesh.scale.setScalar(.9+k*1.45);f.mesh.material.opacity=Math.sin(k*Math.PI)*.7;});
    plants.forEach(p=>{p.group.rotation.z=Math.sin(t*1.05+p.phase)*.025;});
    gulls.forEach(o=>{const a=t*.16+o.phase;o.g.position.set(-2+Math.cos(a)*o.radius,4.6+Math.sin(t*.8+o.phase)*.13,Math.sin(a)*o.radius);o.g.rotation.y=-a;});
    dolphins.forEach((d,i)=>{const cycle=(t+i*4.7)%(17+i*3.9), active=cycle<2.1;d.g.visible=active;if(active){const q=cycle/2.1;d.g.position.set(d.x+q*1.4,.03+Math.sin(q*Math.PI)*(.35+i*.035),d.z+q*.25);d.g.rotation.y=1.35;d.g.rotation.x=Math.cos(q*Math.PI)*.32;d.wake.material.opacity=Math.sin(q*Math.PI)*.4;}});
    controls.update();renderer.render(scene,camera);frame=requestAnimationFrame(animate);
  }
  function resize(){const w=container.clientWidth||window.innerWidth,h=container.clientHeight||window.innerHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);}
  window.addEventListener('resize',resize);resize();animate();
  return {reset:()=>controls.reset(),dispose:()=>{cancelAnimationFrame(frame);window.removeEventListener('resize',resize);controls.dispose();renderer.dispose();renderer.domElement.remove();}};
}
