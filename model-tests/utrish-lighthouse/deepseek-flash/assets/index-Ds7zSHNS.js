(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const za="181",as={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nh=0,pc=1,Fh=2,Nl=1,Fl=2,Zn=3,fi=0,tn=1,_t=2,Jn=0,Ti=1,mc=2,xc=3,gc=4,Oh=5,Si=100,zh=101,Bh=102,kh=103,Gh=104,Vh=200,Hh=201,Wh=202,Xh=203,Ho=204,Wo=205,Yh=206,qh=207,Zh=208,jh=209,Kh=210,$h=211,Jh=212,Qh=213,eu=214,Xo=0,Yo=1,qo=2,ls=3,Zo=4,jo=5,Ko=6,$o=7,Ol=0,tu=1,nu=2,ui=0,iu=1,su=2,ru=3,zl=4,ou=5,au=6,cu=7,Bl=300,hs=301,us=302,Nr=303,Jo=304,Hr=306,Xt=1e3,Wt=1001,Qo=1002,fn=1003,lu=1004,er=1005,en=1006,Jr=1007,ci=1008,zn=1009,kl=1010,Gl=1011,Gs=1012,Ba=1013,Ci=1014,Fn=1015,gs=1016,ka=1017,Ga=1018,Vs=1020,Vl=35902,Hl=35899,Wl=1021,Xl=1022,vn=1023,Hs=1026,Ws=1027,Va=1028,Ha=1029,Wa=1030,Xa=1031,Ya=1033,Rr=33776,Pr=33777,Dr=33778,Lr=33779,ea=35840,ta=35841,na=35842,ia=35843,sa=36196,ra=37492,oa=37496,aa=37808,ca=37809,la=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,xa=37817,ga=37818,_a=37819,va=37820,Ma=37821,ya=36492,ba=36494,Sa=36495,wa=36283,Ea=36284,Ta=36285,Aa=36286,hu=3200,uu=3201,Yl=0,du=1,Nn="",Rt="srgb",ds="srgb-linear",Fr="linear",ft="srgb",Oi=7680,_c=519,fu=512,pu=513,mu=514,ql=515,xu=516,gu=517,_u=518,vu=519,vc=35044,Mc="300 es",On=2e3,Or=2001;function Zl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mu(){const i=zr("canvas");return i.style.display="block",i}const yc={};function bc(...i){const e="THREE."+i.shift();console.log(e,...i)}function $e(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Pt(...i){const e="THREE."+i.shift();console.error(e,...i)}function Xs(...i){const e=i.join(" ");e in yc||(yc[e]=!0,$e(...i))}function yu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sc=1234567;const Ns=Math.PI/180,Ys=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function qa(i,e){return(i%e+e)%e}function bu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Su(i,e,t){return i!==e?(t-i)/(e-i):0}function Fs(i,e,t){return(1-t)*i+t*e}function wu(i,e,t,n){return Fs(i,e,1-Math.exp(-t*n))}function Eu(i,e=1){return e-Math.abs(qa(i,e*2)-e)}function Tu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Au(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ru(i,e){return i+Math.random()*(e-i)}function Pu(i){return i*(.5-Math.random())}function Du(i){i!==void 0&&(Sc=i);let e=Sc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lu(i){return i*Ns}function Iu(i){return i*Ys}function Uu(i){return(i&i-1)===0&&i!==0}function Nu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ou(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*d,a*h,a*l);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ca={DEG2RAD:Ns,RAD2DEG:Ys,generateUUID:Ii,clamp:tt,euclideanModulo:qa,mapLinear:bu,inverseLerp:Su,lerp:Fs,damp:wu,pingpong:Eu,smoothstep:Tu,smootherstep:Au,randInt:Cu,randFloat:Ru,randFloatSpread:Pu,seededRandom:Du,degToRad:Lu,radToDeg:Iu,isPowerOfTwo:Uu,ceilPowerOfTwo:Nu,floorPowerOfTwo:Fu,setQuaternionFromProperEuler:Ou,normalize:$t,denormalize:es};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],g=r[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=g;return}if(u!==g||c!==f||l!==d||h!==x){let m=c*f+l*d+h*x+u*g;m<0&&(f=-f,d=-d,x=-x,g=-g,m=-m);let p=1-a;if(m<.9995){const _=Math.acos(m),v=Math.sin(_);p=Math.sin(p*_)/v,a=Math.sin(a*_)/v,c=c*p+f*a,l=l*p+d*a,h=h*p+x*a,u=u*p+g*a}else{c=c*p+f*a,l=l*p+d*a,h=h*p+x*a,u=u*p+g*a;const _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*u+c*d-l*f,e[t+1]=c*x+h*f+l*u-a*d,e[t+2]=l*x+h*d+a*f-c*u,e[t+3]=h*x-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"YZX":this._x=f*h*u+l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u-f*d*x;break;case"XZY":this._x=f*h*u-l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u+f*d*x;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new L,wc=new bn;class et{constructor(e,t,n,s,r,o,a,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],g=s[0],m=s[3],p=s[6],_=s[1],v=s[4],M=s[7],w=s[2],S=s[5],T=s[8];return r[0]=o*g+a*_+c*w,r[3]=o*m+a*v+c*S,r[6]=o*p+a*M+c*T,r[1]=l*g+h*_+u*w,r[4]=l*m+h*v+u*S,r[7]=l*p+h*M+u*T,r[2]=f*g+d*_+x*w,r[5]=f*m+d*v+x*S,r[8]=f*p+d*M+x*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,x=t*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=u*g,e[1]=(s*l-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=f*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(eo.makeScale(e,t)),this}rotate(e){return this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new et,Ec=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){const i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const ht=zu();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class Bu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zi===void 0&&(zi=zr("canvas")),zi.width=e.width,zi.height=e.height;const s=zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ku=0;class Za{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Gu=0;const no=new L;class Zt extends Li{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=Wt,s=Wt,r=en,o=ci,a=vn,c=zn,l=Zt.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Ii(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xt:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case Qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xt:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case Qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Bl;Zt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],x=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,M=(d+1)/2,w=(p+1)/2,S=(h+f)/4,T=(u+g)/4,P=(x+m)/4;return v>M&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=T/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=P/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=P/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(u-g)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends Li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Zt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Za(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Vu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jl extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hu extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),nr.subVectors(this.max,Ss),Bi.subVectors(e.a,Ss),ki.subVectors(e.b,Ss),Gi.subVectors(e.c,Ss),ti.subVectors(ki,Bi),ni.subVectors(Gi,ki),gi.subVectors(Bi,Gi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-gi.z,gi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,gi.z,0,-gi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-gi.y,gi.x,0];return!io(t,Bi,ki,Gi,nr)||(t=[1,0,0,0,1,0,0,0,1],!io(t,Bi,ki,Gi,nr))?!1:(ir.crossVectors(ti,ni),t=[ir.x,ir.y,ir.z],io(t,Bi,ki,Gi,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,tr=new Ui,Bi=new L,ki=new L,Gi=new L,ti=new L,ni=new L,gi=new L,Ss=new L,nr=new L,ir=new L,_i=new L;function io(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);const a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Wu=new Ui,ws=new L,so=new L;class _s{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(so)),this.expandByPoint(ws.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new L,ro=new L,sr=new L,ii=new L,oo=new L,rr=new L,ao=new L;class ja{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ro.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ro);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sr),a=ii.dot(this.direction),c=-ii.dot(sr),l=ii.lengthSq(),h=Math.abs(1-o*o);let u,f,d,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ro).addScaledVector(sr,f),d}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){oo.subVectors(t,e),rr.subVectors(n,e),ao.crossVectors(oo,rr);let o=this.direction.dot(ao),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const c=a*this.direction.dot(rr.crossVectors(ii,rr));if(c<0)return null;const l=a*this.direction.dot(oo.cross(ii));if(l<0||c+l>o)return null;const h=-a*ii.dot(ao);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,x,g,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,g,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),o=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,x=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+x*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,x=l*h,g=l*u;t[0]=f+g*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,x=l*h,g=l*u;t[0]=f-g*a,t[4]=-o*u,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,x=a*h,g=a*u;t[0]=c*h,t[4]=x*l-d,t[8]=f*l+g,t[1]=c*u,t[5]=g*l+f,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,x=a*c,g=a*l;t[0]=c*h,t[4]=g-f*u,t[8]=x*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+x,t[10]=f-g*u}else if(e.order==="XZY"){const f=o*c,d=o*l,x=a*c,g=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+g,t[5]=o*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,Yu)}lookAt(e,t,n){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),si.crossVectors(n,hn),si.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),si.crossVectors(n,hn)),si.normalize(),or.crossVectors(hn,si),s[0]=si.x,s[4]=or.x,s[8]=hn.x,s[1]=si.y,s[5]=or.y,s[9]=hn.y,s[2]=si.z,s[6]=or.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],g=n[6],m=n[10],p=n[14],_=n[3],v=n[7],M=n[11],w=n[15],S=s[0],T=s[4],P=s[8],y=s[12],b=s[1],C=s[5],I=s[9],z=s[13],B=s[2],U=s[6],F=s[10],G=s[14],W=s[3],Q=s[7],te=s[11],Se=s[15];return r[0]=o*S+a*b+c*B+l*W,r[4]=o*T+a*C+c*U+l*Q,r[8]=o*P+a*I+c*F+l*te,r[12]=o*y+a*z+c*G+l*Se,r[1]=h*S+u*b+f*B+d*W,r[5]=h*T+u*C+f*U+d*Q,r[9]=h*P+u*I+f*F+d*te,r[13]=h*y+u*z+f*G+d*Se,r[2]=x*S+g*b+m*B+p*W,r[6]=x*T+g*C+m*U+p*Q,r[10]=x*P+g*I+m*F+p*te,r[14]=x*y+g*z+m*G+p*Se,r[3]=_*S+v*b+M*B+w*W,r[7]=_*T+v*C+M*U+w*Q,r[11]=_*P+v*I+M*F+w*te,r[15]=_*y+v*z+M*G+w*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+g*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],g=e[13],m=e[14],p=e[15],_=u*m*l-g*f*l+g*c*d-a*m*d-u*c*p+a*f*p,v=x*f*l-h*m*l-x*c*d+o*m*d+h*c*p-o*f*p,M=h*g*l-x*u*l+x*a*d-o*g*d-h*a*p+o*u*p,w=x*u*c-h*g*c-x*a*f+o*g*f+h*a*m-o*u*m,S=t*_+n*v+s*M+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=_*T,e[1]=(g*f*r-u*m*r-g*s*d+n*m*d+u*s*p-n*f*p)*T,e[2]=(a*m*r-g*c*r+g*s*l-n*m*l-a*s*p+n*c*p)*T,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*T,e[4]=v*T,e[5]=(h*m*r-x*f*r+x*s*d-t*m*d-h*s*p+t*f*p)*T,e[6]=(x*c*r-o*m*r-x*s*l+t*m*l+o*s*p-t*c*p)*T,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*T,e[8]=M*T,e[9]=(x*u*r-h*g*r-x*n*d+t*g*d+h*n*p-t*u*p)*T,e[10]=(o*g*r-x*a*r+x*n*l-t*g*l-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*T,e[12]=w*T,e[13]=(h*g*s-x*u*s+x*n*f-t*g*f-h*n*m+t*u*m)*T,e[14]=(x*a*s-o*g*s-x*n*c+t*g*c+o*n*m-t*a*m)*T,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,x=r*u,g=o*h,m=o*u,p=a*u,_=c*l,v=c*h,M=c*u,w=n.x,S=n.y,T=n.z;return s[0]=(1-(g+p))*w,s[1]=(d+M)*w,s[2]=(x-v)*w,s[3]=0,s[4]=(d-M)*S,s[5]=(1-(f+p))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(x+v)*T,s[9]=(m-_)*T,s[10]=(1-(f+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Vi.set(s[0],s[1],s[2]).length();const o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const l=1/r,h=1/o,u=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=On,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let x,g;if(c)x=r/(o-r),g=o*r/(o-r);else if(a===On)x=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Or)x=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=On,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let x,g;if(c)x=1/(o-r),g=o/(o-r);else if(a===On)x=-2/(o-r),g=-(o+r)/(o-r);else if(a===Or)x=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new L,An=new at,Xu=new L(0,0,0),Yu=new L(1,1,1),si=new L,or=new L,hn=new L,Ac=new at,Cc=new bn;class Sn{constructor(e=0,t=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const Rc=new L,Hi=new bn,Wn=new at,ar=new L,Es=new L,Zu=new L,ju=new bn,Pc=new L(1,0,0),Dc=new L(0,1,0),Lc=new L(0,0,1),Ic={type:"added"},Ku={type:"removed"},Wi={type:"childadded",child:null},co={type:"childremoved",child:null};class Vt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new L,t=new Sn,n=new bn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new et}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Es,ar,this.up):Wn.lookAt(ar,Es,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ic),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ku),co.child=e,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ic),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new L(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new L,Xn=new L,lo=new L,Yn=new L,Xi=new L,Yi=new L,Uc=new L,ho=new L,uo=new L,fo=new L,po=new mt,mo=new mt,xo=new mt;class Rn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),Xn.subVectors(n,t),lo.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(Xn),c=Cn.dot(lo),l=Xn.dot(Xn),h=Xn.dot(lo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(o,Yn.y),c.addScaledVector(a,Yn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return po.setScalar(0),mo.setScalar(0),xo.setScalar(0),po.fromBufferAttribute(e,t),mo.fromBufferAttribute(e,n),xo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(po,r.x),o.addScaledVector(mo,r.y),o.addScaledVector(xo,r.z),o}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),Xn.subVectors(e,t),Cn.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Cn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Xi.subVectors(s,n),Yi.subVectors(r,n),ho.subVectors(e,n);const c=Xi.dot(ho),l=Yi.dot(ho);if(c<=0&&l<=0)return t.copy(n);uo.subVectors(e,s);const h=Xi.dot(uo),u=Yi.dot(uo);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Xi,o);fo.subVectors(e,r);const d=Xi.dot(fo),x=Yi.dot(fo);if(x>=0&&d<=x)return t.copy(r);const g=d*l-c*x;if(g<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Yi,a);const m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return Uc.subVectors(r,s),a=(u-h)/(u-h+(d-x)),t.copy(s).addScaledVector(Uc,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Xi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},cr={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=qa(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=go(o,r,e+1/3),this.g=go(o,r,e),this.b=go(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=$l[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ht.workingToColorSpace(qt.copy(this),e),Math.round(tt(qt.r*255,0,255))*65536+Math.round(tt(qt.g*255,0,255))*256+Math.round(tt(qt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(qt.copy(this),t);const n=qt.r,s=qt.g,r=qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Rt){ht.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,s=qt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(cr);const n=Fs(ri.h,cr.h,t),s=Fs(ri.s,cr.s,t),r=Fs(ri.l,cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new me;me.NAMES=$l;let $u=0;class vs extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Ti,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Wo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new L,lr=new le;let Ju=0;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}}class Jl extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ql extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ie extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qu=0;const xn=new at,_o=new Vt,qi=new L,un=new Ui,Ts=new Ui,Bt=new L;class st extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zl(e)?Ql:Jl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(un.min,Ts.min),un.expandByPoint(Bt),Bt.addVectors(un.max,Ts.max),un.expandByPoint(Bt)):(un.expandByPoint(Ts.min),un.expandByPoint(Ts.max))}un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(e,l),Bt.add(qi)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new L,c[P]=new L;const l=new L,h=new L,u=new L,f=new le,d=new le,x=new le,g=new L,m=new L;function p(P,y,b){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,y),x.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),x.sub(f);const C=1/(d.x*x.y-x.x*d.y);isFinite(C)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(C),a[P].add(g),a[y].add(g),a[b].add(g),c[P].add(m),c[y].add(m),c[b].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,y=_.length;P<y;++P){const b=_[P],C=b.start,I=b.count;for(let z=C,B=C+I;z<B;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new L,M=new L,w=new L,S=new L;function T(P){w.fromBufferAttribute(s,P),S.copy(w);const y=a[P];v.copy(y),v.sub(w.multiplyScalar(w.dot(y))).normalize(),M.crossVectors(S,y);const C=M.dot(c[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,C)}for(let P=0,y=_.length;P<y;++P){const b=_[P],C=b.start,I=b.count;for(let z=C,B=C+I;z<B;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const x=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,x=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*h;for(let p=0;p<h;p++)f[x++]=l[d++]}return new yt(f,h,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new st,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new at,vi=new ja,hr=new _s,Fc=new L,ur=new L,dr=new L,fr=new L,vo=new L,pr=new L,Oc=new L,mr=new L;class N extends Vt{constructor(e=new st,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(vo.fromBufferAttribute(u,e),o?pr.addScaledVector(vo,h):pr.addScaledVector(vo.sub(t),h))}t.add(pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(hr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(hr,Fc)===null||vi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Nc.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=f.length;x<g;x++){const m=f[x],p=o[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,w=v;M<w;M+=3){const S=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);s=xr(this,p,e,n,l,h,u,S,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){const _=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=xr(this,o,e,n,l,h,u,_,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,g=f.length;x<g;x++){const m=f[x],p=o[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,w=v;M<w;M+=3){const S=M,T=M+1,P=M+2;s=xr(this,p,e,n,l,h,u,S,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){const _=m,v=m+1,M=m+2;s=xr(this,o,e,n,l,h,u,_,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ed(i,e,t,n,s,r,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===fi,a),c===null)return null;mr.copy(a),mr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(mr);return l<t.near||l>t.far?null:{distance:l,point:mr.clone(),object:i}}function xr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ur),i.getVertexPosition(c,dr),i.getVertexPosition(l,fr);const h=ed(i,e,t,n,ur,dr,fr,Oc);if(h){const u=new L;Rn.getBarycoord(Oc,ur,dr,fr,u),s&&(h.uv=Rn.getInterpolatedAttribute(s,a,c,l,u,new le)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,a,c,l,u,new le)),o&&(h.normal=Rn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};Rn.getNormal(ur,dr,fr,f.normal),h.face=f,h.barycoord=u}return h}class de extends st{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function x(g,m,p,_,v,M,w,S,T,P,y){const b=M/T,C=w/P,I=M/2,z=w/2,B=S/2,U=T+1,F=P+1;let G=0,W=0;const Q=new L;for(let te=0;te<F;te++){const Se=te*C-z;for(let Ge=0;Ge<U;Ge++){const ne=Ge*b-I;Q[g]=ne*_,Q[m]=Se*v,Q[p]=B,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Ge/T),u.push(1-te/P),G+=1}}for(let te=0;te<P;te++)for(let Se=0;Se<T;Se++){const Ge=f+Se+U*te,ne=f+Se+U*(te+1),we=f+(Se+1)+U*(te+1),fe=f+(Se+1)+U*te;c.push(Ge,ne,fe),c.push(ne,we,fe),W+=6}a.addGroup(d,W,y),d+=W,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new de(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=fs(i[t]);for(const s in n)e[s]=n[s]}return e}function td(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const nd={clone:fs,merge:Jt};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class th extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new L,zc=new le,Bc=new le;class dn extends th{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Bc),t.subVectors(Bc,zc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,ji=1;class rd extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Zi,ji,e,t);s.layers=this.layers,this.add(s);const r=new dn(Zi,ji,e,t);r.layers=this.layers,this.add(r);const o=new dn(Zi,ji,e,t);o.layers=this.layers,this.add(o);const a=new dn(Zi,ji,e,t);a.layers=this.layers,this.add(a);const c=new dn(Zi,ji,e,t);c.layers=this.layers,this.add(c);const l=new dn(Zi,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class nh extends Zt{constructor(e=[],t=hs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class od extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new de(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Jn});r.uniforms.tEquirect.value=t;const o=new N(s,r),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=en),new rd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Xe extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ad={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class cd extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ka extends Zt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=fn,h=fn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kc extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ki=new at,Gc=new at,gr=[],Vc=new Ui,ld=new at,As=new N,Cs=new _s;class Pn extends N{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ld)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Vc.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Cs.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),e.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),Gc.multiplyMatrices(n,Ki),As.matrixWorld=Gc,As.raycast(e,gr);for(let o=0,a=gr.length;o<a;o++){const c=gr[o];c.instanceId=r,c.object=this,t.push(c)}gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ka(new Float32Array(s*this.count),s,this.count,Va,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yo=new L,hd=new L,ud=new et;class ai{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=yo.subVectors(n,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ud.getNormalMatrix(e),s=this.coplanarPoint(yo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new _s,dd=new le(.5,.5),_r=new L;class $a{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],x=r[8],g=r[9],m=r[10],p=r[11],_=r[12],v=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-o,d-h,p-x,w-_).normalize(),s[1].setComponents(l+o,d+h,p+x,w+_).normalize(),s[2].setComponents(l+a,d+u,p+g,w+v).normalize(),s[3].setComponents(l-a,d-u,p-g,w-v).normalize(),n)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,d-f,p-m,w-M).normalize();else if(s[4].setComponents(l-c,d-f,p-m,w-M).normalize(),t===On)s[5].setComponents(l+c,d+f,p+m,w+M).normalize();else if(t===Or)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=dd.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fd extends vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hc=new at,Ra=new ja,vr=new _s,Mr=new L;class pd extends Vt{constructor(e=new st,t=new fd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,e.ray.intersectsSphere(vr)===!1)return;Hc.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(Hc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,g=d;x<g;x++){const m=l.getX(x);Mr.fromBufferAttribute(u,m),Wc(Mr,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,g=d;x<g;x++)Mr.fromBufferAttribute(u,x),Wc(Mr,x,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wc(i,e,t,n,s,r,o){const a=Ra.distanceSqToPoint(i);if(a<t){const c=new L;Ra.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class kn extends Zt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ih extends Zt{constructor(e,t,n=Ci,s,r,o,a=fn,c=fn,l,h=Hs,u=1){if(h!==Hs&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sh extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ja extends st{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,x=n*2+r,g=s+1,m=new L,p=new L;for(let _=0;_<=x;_++){let v=0,M=0,w=0,S=0;if(_<=n){const y=_/n,b=y*Math.PI/2;M=-h-e*Math.cos(b),w=e*Math.sin(b),S=-e*Math.cos(b),v=y*u}else if(_<=n+r){const y=(_-n)/r;M=-h+y*t,w=e,S=0,v=u+y*f}else{const y=(_-n-r)/n,b=y*Math.PI/2;M=h+e*Math.sin(b),w=e*Math.cos(b),S=e*Math.sin(b),v=u+f+y*u}const T=Math.max(0,Math.min(1,v/d));let P=0;_===0?P=.5/s:_===x&&(P=-.5/s);for(let y=0;y<=s;y++){const b=y/s,C=b*Math.PI*2,I=Math.sin(C),z=Math.cos(C);p.x=-w*z,p.y=M,p.z=w*I,a.push(p.x,p.y,p.z),m.set(-w*z,S,w*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(b+P,T)}if(_>0){const y=(_-1)*g;for(let b=0;b<s;b++){const C=y+b,I=y+b+1,z=_*g+b,B=_*g+b+1;o.push(C,I,z),o.push(I,B,z)}}}this.setIndex(o),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class qs extends st{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,h=new le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qe extends st{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let x=0;const g=[],m=n/2;let p=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function _(){const M=new L,w=new L;let S=0;const T=(t-e)/n;for(let P=0;P<=r;P++){const y=[],b=P/r,C=b*(t-e)+e;for(let I=0;I<=s;I++){const z=I/s,B=z*c+a,U=Math.sin(B),F=Math.cos(B);w.x=C*U,w.y=-b*n+m,w.z=C*F,u.push(w.x,w.y,w.z),M.set(U,T,F).normalize(),f.push(M.x,M.y,M.z),d.push(z,1-b),y.push(x++)}g.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const b=g[y][P],C=g[y+1][P],I=g[y+1][P+1],z=g[y][P+1];(e>0||y!==0)&&(h.push(b,C,z),S+=3),(t>0||y!==r-1)&&(h.push(C,I,z),S+=3)}l.addGroup(p,S,0),p+=S}function v(M){const w=x,S=new le,T=new L;let P=0;const y=M===!0?e:t,b=M===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),x++;const C=x;for(let I=0;I<=s;I++){const B=I/s*c+a,U=Math.cos(B),F=Math.sin(B);T.x=y*F,T.y=m*b,T.z=y*U,u.push(T.x,T.y,T.z),f.push(0,b,0),S.x=U*.5+.5,S.y=F*.5*b+.5,d.push(S.x,S.y),x++}for(let I=0;I<s;I++){const z=w+I,B=C+I;M===!0?h.push(B,B+1,z):h.push(B+1,B,z),P+=3}l.addGroup(p,P,M===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pi extends Qe{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wr extends st{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new L,M=new L,w=new L;for(let S=0;S<t.length;S+=3)d(t[S+0],v),d(t[S+1],M),d(t[S+2],w),c(v,M,w,_)}function c(_,v,M,w){const S=w+1,T=[];for(let P=0;P<=S;P++){T[P]=[];const y=_.clone().lerp(M,P/S),b=v.clone().lerp(M,P/S),C=S-P;for(let I=0;I<=C;I++)I===0&&P===S?T[P][I]=y:T[P][I]=y.clone().lerp(b,I/C)}for(let P=0;P<S;P++)for(let y=0;y<2*(S-P)-1;y++){const b=Math.floor(y/2);y%2===0?(f(T[P][b+1]),f(T[P+1][b]),f(T[P][b])):(f(T[P][b+1]),f(T[P+1][b+1]),f(T[P+1][b]))}}function l(_){const v=new L;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const _=new L;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const M=m(_)/2/Math.PI+.5,w=p(_)/Math.PI+.5;o.push(M,1-w)}x(),u()}function u(){for(let _=0;_<o.length;_+=6){const v=o[_+0],M=o[_+2],w=o[_+4],S=Math.max(v,M,w),T=Math.min(v,M,w);S>.9&&T<.1&&(v<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,v){const M=_*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function x(){const _=new L,v=new L,M=new L,w=new L,S=new le,T=new le,P=new le;for(let y=0,b=0;y<r.length;y+=9,b+=6){_.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),S.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),w.copy(_).add(v).add(M).divideScalar(3);const C=m(w);g(S,b+0,_,C),g(T,b+2,v,C),g(P,b+4,M,C)}}function g(_,v,M,w){w<0&&_.x===1&&(o[v]=_.x-1),M.x===0&&M.z===0&&(o[v]=w/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.vertices,e.indices,e.radius,e.details)}}class Ni extends Wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ni(e.radius,e.detail)}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],o=[],a=new L,c=new at;for(let d=0;d<=e;d++){const x=d/e;s[d]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(tt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(tt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qa extends Gn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class md extends Qa{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ec(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const yr=new L,bo=new ec,So=new ec,wo=new ec;class Bn extends Gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(yr.subVectors(s[0],s[1]).add(s[0]),l=yr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),bo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,g,m),So.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,g,m),wo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),So.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),wo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(bo.calc(c),So.calc(c),wo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function xd(i,e){const t=1-i;return t*t*e}function gd(i,e){return 2*(1-i)*i*e}function _d(i,e){return i*i*e}function Os(i,e,t,n){return xd(i,e)+gd(i,t)+_d(i,n)}function vd(i,e){const t=1-i;return t*t*t*e}function Md(i,e){const t=1-i;return 3*t*t*i*e}function yd(i,e){return 3*(1-i)*i*i*e}function bd(i,e){return i*i*i*e}function zs(i,e,t,n,s){return vd(i,e)+Md(i,t)+yd(i,n)+bd(i,s)}class rh extends Gn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sd extends Gn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y),zs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oh extends Gn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wd extends Gn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ah extends Gn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Os(e,s.x,r.x,o.x),Os(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ch extends Gn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Os(e,s.x,r.x,o.x),Os(e,s.y,r.y,o.y),Os(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lh extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Xc(a,c.x,l.x,h.x,u.x),Xc(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var Br=Object.freeze({__proto__:null,ArcCurve:md,CatmullRomCurve3:Bn,CubicBezierCurve:rh,CubicBezierCurve3:Sd,EllipseCurve:Qa,LineCurve:oh,LineCurve3:wd,QuadraticBezierCurve:ah,QuadraticBezierCurve3:ch,SplineCurve:lh});class Ed extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Br[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Br[s.type]().fromJSON(s))}return this}}class Yc extends Ed{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new oh(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ah(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new rh(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new lh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Qa(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ms extends Yc{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Yc().fromJSON(s))}return this}}function Td(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=hh(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Dd(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let f=t;f<s;f+=t){const d=i[f],x=i[f+1];d<a&&(a=d),x<c&&(c=x),d>h&&(h=d),x>u&&(u=x)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Zs(r,o,t,a,c,l,0),o}function hh(i,e,t,n,s){let r;if(s===Vd(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=qc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=qc(o/n|0,i[o],i[o+1],r);return r&&ps(r,r.next)&&(Ks(r),r=r.next),r}function Di(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ps(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Ks(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zs(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Fd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Cd(i,n,s,r):Ad(i)){e.push(c.i,i.i,l.i),Ks(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Rd(Di(i),e),Zs(i,e,t,n,s,r,2)):o===2&&Pd(i,e,t,n,s,r):Zs(Di(i),e,t,n,s,r,1);break}}}function Ad(i){const e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&Ls(s,a,r,c,o,l,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Cd(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Tt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),x=Math.min(h,u,f),g=Math.max(a,c,l),m=Math.max(h,u,f),p=Pa(d,x,e,t,n),_=Pa(g,m,e,t,n);let v=i.prevZ,M=i.nextZ;for(;v&&v.z>=p&&M&&M.z<=_;){if(v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==s&&v!==o&&Ls(a,h,c,u,l,f,v.x,v.y)&&Tt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=g&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&Ls(a,h,c,u,l,f,M.x,M.y)&&Tt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==s&&v!==o&&Ls(a,h,c,u,l,f,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=g&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&Ls(a,h,c,u,l,f,M.x,M.y)&&Tt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Rd(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ps(n,s)&&dh(n,t,t.next,s)&&js(n,s)&&js(s,n)&&(e.push(n.i,t.i,s.i),Ks(t),Ks(t.next),t=i=s),t=t.next}while(t!==i);return Di(t)}function Pd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bd(o,a)){let c=fh(o,a);o=Di(o,o.next),c=Di(c,c.next),Zs(o,e,t,n,s,r,0),Zs(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Dd(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=hh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(zd(l))}s.sort(Ld);for(let r=0;r<s.length;r++)t=Id(s[r],t);return t}function Ld(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Id(i,e){const t=Ud(i,e);if(!t)return e;const n=fh(t,i);return Di(n,n.next),Di(t,t.next)}function Ud(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(ps(i,t))return t;do{if(ps(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&uh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);js(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Nd(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Nd(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function Fd(i,e,t,n){let s=i;do s.z===0&&(s.z=Pa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Od(s)}function Od(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Pa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function zd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function uh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ls(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&uh(i,e,t,n,s,r,o,a)}function Bd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!kd(i,e)&&(js(i,e)&&js(e,i)&&Gd(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||ps(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ps(i,e){return i.x===e.x&&i.y===e.y}function dh(i,e,t,n){const s=Sr(Tt(i,e,t)),r=Sr(Tt(i,e,n)),o=Sr(Tt(t,n,i)),a=Sr(Tt(t,n,e));return!!(s!==r&&o!==a||s===0&&br(i,t,e)||r===0&&br(i,n,e)||o===0&&br(t,i,n)||a===0&&br(t,e,n))}function br(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sr(i){return i>0?1:i<0?-1:0}function kd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&dh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function js(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function Gd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function fh(i,e){const t=Da(i.i,i.x,i.y),n=Da(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qc(i,e,t,n){const s=Da(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Da(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vd(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Hd{static triangulate(e,t,n=2){return Td(e,t,n)}}class Kn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Kn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Zc(e),jc(n,e);let o=e.length;t.forEach(Zc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,jc(n,t[c]);const a=Hd.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Zc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function jc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class $n extends st{constructor(e=new Ms([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Wd;let v,M=!1,w,S,T,P;p&&(v=p.getSpacedPoints(h),M=!0,f=!1,w=p.computeFrenetFrames(h,!1),S=new L,T=new L,P=new L),f||(m=0,d=0,x=0,g=0);const y=a.extractPoints(l);let b=y.shape;const C=y.holes;if(!Kn.isClockWise(b)){b=b.reverse();for(let ee=0,R=C.length;ee<R;ee++){const X=C[ee];Kn.isClockWise(X)&&(C[ee]=X.reverse())}}function z(ee){const X=10000000000000001e-36;let j=ee[0];for(let oe=1;oe<=ee.length;oe++){const ce=oe%ee.length,De=ee[ce],_e=De.x-j.x,Ce=De.y-j.y,D=_e*_e+Ce*Ce,E=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(j.x),Math.abs(j.y)),H=X*E*E;if(D<=H){ee.splice(ce,1),oe--;continue}j=De}}z(b),C.forEach(z);const B=C.length,U=b;for(let ee=0;ee<B;ee++){const R=C[ee];b=b.concat(R)}function F(ee,R,X){return R||Pt("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(R,X)}const G=b.length;function W(ee,R,X){let j,oe,ce;const De=ee.x-R.x,_e=ee.y-R.y,Ce=X.x-ee.x,D=X.y-ee.y,E=De*De+_e*_e,H=De*D-_e*Ce;if(Math.abs(H)>Number.EPSILON){const $=Math.sqrt(E),ae=Math.sqrt(Ce*Ce+D*D),K=R.x-_e/$,Be=R.y+De/$,Ee=X.x-D/ae,Ve=X.y+Ce/ae,Fe=((Ee-K)*D-(Ve-Be)*Ce)/(De*D-_e*Ce);j=K+De*Fe-ee.x,oe=Be+_e*Fe-ee.y;const he=j*j+oe*oe;if(he<=2)return new le(j,oe);ce=Math.sqrt(he/2)}else{let $=!1;De>Number.EPSILON?Ce>Number.EPSILON&&($=!0):De<-Number.EPSILON?Ce<-Number.EPSILON&&($=!0):Math.sign(_e)===Math.sign(D)&&($=!0),$?(j=-_e,oe=De,ce=Math.sqrt(E)):(j=De,oe=_e,ce=Math.sqrt(E/2))}return new le(j/ce,oe/ce)}const Q=[];for(let ee=0,R=U.length,X=R-1,j=ee+1;ee<R;ee++,X++,j++)X===R&&(X=0),j===R&&(j=0),Q[ee]=W(U[ee],U[X],U[j]);const te=[];let Se,Ge=Q.concat();for(let ee=0,R=B;ee<R;ee++){const X=C[ee];Se=[];for(let j=0,oe=X.length,ce=oe-1,De=j+1;j<oe;j++,ce++,De++)ce===oe&&(ce=0),De===oe&&(De=0),Se[j]=W(X[j],X[ce],X[De]);te.push(Se),Ge=Ge.concat(Se)}let ne;if(m===0)ne=Kn.triangulateShape(U,C);else{const ee=[],R=[];for(let X=0;X<m;X++){const j=X/m,oe=d*Math.cos(j*Math.PI/2),ce=x*Math.sin(j*Math.PI/2)+g;for(let De=0,_e=U.length;De<_e;De++){const Ce=F(U[De],Q[De],ce);be(Ce.x,Ce.y,-oe),j===0&&ee.push(Ce)}for(let De=0,_e=B;De<_e;De++){const Ce=C[De];Se=te[De];const D=[];for(let E=0,H=Ce.length;E<H;E++){const $=F(Ce[E],Se[E],ce);be($.x,$.y,-oe),j===0&&D.push($)}j===0&&R.push(D)}}ne=Kn.triangulateShape(ee,R)}const we=ne.length,fe=x+g;for(let ee=0;ee<G;ee++){const R=f?F(b[ee],Ge[ee],fe):b[ee];M?(T.copy(w.normals[0]).multiplyScalar(R.x),S.copy(w.binormals[0]).multiplyScalar(R.y),P.copy(v[0]).add(T).add(S),be(P.x,P.y,P.z)):be(R.x,R.y,0)}for(let ee=1;ee<=h;ee++)for(let R=0;R<G;R++){const X=f?F(b[R],Ge[R],fe):b[R];M?(T.copy(w.normals[ee]).multiplyScalar(X.x),S.copy(w.binormals[ee]).multiplyScalar(X.y),P.copy(v[ee]).add(T).add(S),be(P.x,P.y,P.z)):be(X.x,X.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){const R=ee/m,X=d*Math.cos(R*Math.PI/2),j=x*Math.sin(R*Math.PI/2)+g;for(let oe=0,ce=U.length;oe<ce;oe++){const De=F(U[oe],Q[oe],j);be(De.x,De.y,u+X)}for(let oe=0,ce=C.length;oe<ce;oe++){const De=C[oe];Se=te[oe];for(let _e=0,Ce=De.length;_e<Ce;_e++){const D=F(De[_e],Se[_e],j);M?be(D.x,D.y+v[h-1].y,v[h-1].x+X):be(D.x,D.y,u+X)}}}Y(),J();function Y(){const ee=s.length/3;if(f){let R=0,X=G*R;for(let j=0;j<we;j++){const oe=ne[j];ve(oe[2]+X,oe[1]+X,oe[0]+X)}R=h+m*2,X=G*R;for(let j=0;j<we;j++){const oe=ne[j];ve(oe[0]+X,oe[1]+X,oe[2]+X)}}else{for(let R=0;R<we;R++){const X=ne[R];ve(X[2],X[1],X[0])}for(let R=0;R<we;R++){const X=ne[R];ve(X[0]+G*h,X[1]+G*h,X[2]+G*h)}}n.addGroup(ee,s.length/3-ee,0)}function J(){const ee=s.length/3;let R=0;pe(U,R),R+=U.length;for(let X=0,j=C.length;X<j;X++){const oe=C[X];pe(oe,R),R+=oe.length}n.addGroup(ee,s.length/3-ee,1)}function pe(ee,R){let X=ee.length;for(;--X>=0;){const j=X;let oe=X-1;oe<0&&(oe=ee.length-1);for(let ce=0,De=h+m*2;ce<De;ce++){const _e=G*ce,Ce=G*(ce+1),D=R+j+_e,E=R+oe+_e,H=R+oe+Ce,$=R+j+Ce;Oe(D,E,H,$)}}}function be(ee,R,X){c.push(ee),c.push(R),c.push(X)}function ve(ee,R,X){nt(ee),nt(R),nt(X);const j=s.length/3,oe=_.generateTopUV(n,s,j-3,j-2,j-1);ze(oe[0]),ze(oe[1]),ze(oe[2])}function Oe(ee,R,X,j){nt(ee),nt(R),nt(j),nt(R),nt(X),nt(j);const oe=s.length/3,ce=_.generateSideWallUV(n,s,oe-6,oe-3,oe-2,oe-1);ze(ce[0]),ze(ce[1]),ze(ce[3]),ze(ce[1]),ze(ce[2]),ze(ce[3])}function nt(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function ze(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Xd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Br[s.type]().fromJSON(s)),new $n(n,e.options)}}const Wd={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,c),new le(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],x=e[s*3+2],g=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new le(o,1-c),new le(l,1-u),new le(f,1-x),new le(g,1-p)]:[new le(a,1-c),new le(h,1-u),new le(d,1-x),new le(m,1-p)]}};function Xd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class li extends Wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new li(e.radius,e.detail)}}class tc extends st{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=tt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new L,f=new le,d=new L,x=new L,g=new L;let m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),c.push(d.x,d.y,d.z),g.copy(x)}for(let _=0;_<=t;_++){const v=n+_*h*s,M=Math.sin(v),w=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*w,o.push(u.x,u.y,u.z),f.x=_/t,f.y=S/(e.length-1),a.push(f.x,f.y);const T=c[3*S+0]*M,P=c[3*S+1],y=c[3*S+0]*w;l.push(T,P,y)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){const M=v+_*e.length,w=M,S=M+e.length,T=M+e.length+1,P=M+1;r.push(w,S,P),r.push(T,P,S)}this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("uv",new Ie(a,2)),this.setAttribute("normal",new Ie(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.points,e.segments,e.phiStart,e.phiLength)}}class Ht extends st{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],x=[],g=[],m=[];for(let p=0;p<h;p++){const _=p*f-o;for(let v=0;v<l;v++){const M=v*u-r;x.push(M,-_,0),g.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const v=_+l*p,M=_+l*(p+1),w=_+1+l*(p+1),S=_+1+l*p;d.push(v,M,S),d.push(M,w,S)}this.setIndex(d),this.setAttribute("position",new Ie(x,3)),this.setAttribute("normal",new Ie(g,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.widthSegments,e.heightSegments)}}class nc extends st{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const f=(t-e)/s,d=new L,x=new le;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),x.x=(d.x/t+1)/2,x.y=(d.y/t+1)/2,h.push(x.x,x.y)}u+=f}for(let g=0;g<s;g++){const m=g*(n+1);for(let p=0;p<n;p++){const _=p+m,v=_,M=_+n+1,w=_+n+2,S=_+1;a.push(v,M,S),a.push(M,w,S)}}this.setIndex(a),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xr extends st{constructor(e=new Ms([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(o,2));function l(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const x=f.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=x.length;m<p;m++){const _=x[m];Kn.isClockWise(_)===!0&&(x[m]=_.reverse())}const g=Kn.triangulateShape(d,x);for(let m=0,p=x.length;m<p;m++){const _=x[m];d=d.concat(_)}for(let m=0,p=d.length;m<p;m++){const _=d[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=g.length;m<p;m++){const _=g[m],v=_[0]+u,M=_[1]+u,w=_[2]+u;n.push(v,M,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Yd(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Xr(n,e.curveSegments)}}function Yd(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Ft extends st{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,f=new L,d=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){const _=[],v=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const S=w/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+v*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(S+M,1-v),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const v=h[p][_+1],M=h[p][_],w=h[p+1][_],S=h[p+1][_+1];(p!==0||o>0)&&d.push(v,M,S),(p!==n-1||c<Math.PI)&&d.push(M,w,S)}this.setIndex(d),this.setAttribute("position",new Ie(x,3)),this.setAttribute("normal",new Ie(g,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yn extends st{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){const g=x/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){const g=(s+1)*d+x-1,m=(s+1)*(d-1)+x-1,p=(s+1)*(d-1)+x,_=(s+1)*d+x;o.push(g,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ei extends st{constructor(e=new ch(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new le;let h=new L;const u=[],f=[],d=[],x=[];g(),this.setIndex(x),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function g(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),p()}function m(v){h=e.getPointAt(v/t,h);const M=o.normals[v],w=o.binormals[v];for(let S=0;S<=s;S++){const T=S/s*Math.PI*2,P=Math.sin(T),y=-Math.cos(T);c.x=y*M.x+P*w.x,c.y=y*M.y+P*w.y,c.z=y*M.z+P*w.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){const w=(s+1)*(v-1)+(M-1),S=(s+1)*v+(M-1),T=(s+1)*v+M,P=(s+1)*(v-1)+M;x.push(w,S,P),x.push(S,T,P)}}function _(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)l.x=v/t,l.y=M/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ei(new Br[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ie extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qd extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zd extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yr extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jd extends Yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Eo=new at,Kc=new L,$c=new L;class ph{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jc=new at,Rs=new L,To=new L;class Kd extends ph{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rs),To.copy(n.position),To.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(To),n.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc,n.coordinateSystem,n.reversedDepth)}}class ic extends Yr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mh extends th{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $d extends ph{constructor(){super(new mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qc extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new $d}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jd extends Yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qd extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ef{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class el{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tf extends Li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){$e("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function tl(i,e,t,n){const s=nf(n);switch(t){case Wl:return i*e;case Va:return i*e/s.components*s.byteLength;case Ha:return i*e/s.components*s.byteLength;case Wa:return i*e*2/s.components*s.byteLength;case Xa:return i*e*2/s.components*s.byteLength;case Xl:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Ya:return i*e*4/s.components*s.byteLength;case Rr:case Pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ta:case ia:return Math.max(i,16)*Math.max(e,8)/4;case ea:case na:return Math.max(i,8)*Math.max(e,8)/2;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ya:case ba:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wa:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nf(i){switch(i){case zn:case kl:return{byteLength:1,components:1};case Gs:case Gl:case gs:return{byteLength:2,components:1};case ka:case Ga:return{byteLength:2,components:4};case Ci:case Ba:case Fn:return{byteLength:4,components:1};case Vl:case Hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);function xh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sf(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){const x=u[f],g=u[d];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){const g=u[d];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_f=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,H0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,up=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:rf,alphahash_pars_fragment:of,alphamap_fragment:af,alphamap_pars_fragment:cf,alphatest_fragment:lf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:xf,bsdfs:gf,iridescence_fragment:_f,bumpmap_pars_fragment:vf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Sf,color_fragment:wf,color_pars_fragment:Ef,color_pars_vertex:Tf,color_vertex:Af,common:Cf,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Df,displacementmap_vertex:Lf,emissivemap_fragment:If,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:Ff,envmap_fragment:Of,envmap_common_pars_fragment:zf,envmap_pars_fragment:Bf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:$f,envmap_vertex:Gf,fog_vertex:Vf,fog_pars_vertex:Hf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:qf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:jf,lights_pars_begin:Kf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:o0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:d0,map_particle_fragment:f0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:x0,morphinstance_vertex:g0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:M0,morphtarget_vertex:y0,normal_fragment_begin:b0,normal_fragment_maps:S0,normal_pars_fragment:w0,normal_pars_vertex:E0,normal_vertex:T0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:D0,opaque_fragment:L0,packing:I0,premultiplied_alpha_fragment:U0,project_vertex:N0,dithering_fragment:F0,dithering_pars_fragment:O0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:G0,shadowmap_vertex:V0,shadowmask_pars_fragment:H0,skinbase_vertex:W0,skinning_pars_vertex:X0,skinning_vertex:Y0,skinnormal_vertex:q0,specularmap_fragment:Z0,specularmap_pars_fragment:j0,tonemapping_fragment:K0,tonemapping_pars_fragment:$0,transmission_fragment:J0,transmission_pars_fragment:Q0,uv_pars_fragment:ep,uv_pars_vertex:tp,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:op,backgroundCube_frag:ap,cube_vert:cp,cube_frag:lp,depth_vert:hp,depth_frag:up,distanceRGBA_vert:dp,distanceRGBA_frag:fp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:xp,linedashed_frag:gp,meshbasic_vert:_p,meshbasic_frag:vp,meshlambert_vert:Mp,meshlambert_frag:yp,meshmatcap_vert:bp,meshmatcap_frag:Sp,meshnormal_vert:wp,meshnormal_frag:Ep,meshphong_vert:Tp,meshphong_frag:Ap,meshphysical_vert:Cp,meshphysical_frag:Rp,meshtoon_vert:Pp,meshtoon_frag:Dp,points_vert:Lp,points_frag:Ip,shadow_vert:Up,shadow_frag:Np,sprite_vert:Fp,sprite_frag:Op},Te={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Un={basic:{uniforms:Jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new me(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Jt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Jt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new me(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Jt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Jt([Te.points,Te.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Jt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Jt([Te.common,Te.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Jt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Jt([Te.sprite,Te.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Jt([Te.common,Te.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Jt([Te.lights,Te.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Un.physical={uniforms:Jt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const wr={r:0,b:0,g:0},yi=new Sn,zp=new at;function Bp(i,e,t,n,s,r,o){const a=new me(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function x(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function g(v){let M=!1;const w=x(v);w===null?p(a,c):w&&w.isColor&&(p(w,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,M){const w=x(M);w&&(w.isCubeTexture||w.mapping===Hr)?(h===void 0&&(h=new N(new de(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:fs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(M.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zp.makeRotationFromEuler(yi)),h.material.toneMapped=ht.getTransfer(w.colorSpace)!==ft,(u!==w||f!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new N(new Ht(2,2),new an({name:"BackgroundMaterial",uniforms:fs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ht.getTransfer(w.colorSpace)!==ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(wr,eh(i)),n.buffers.color.setClear(wr.r,wr.g,wr.b,M,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:g,addToRenderList:m,dispose:_}}function kp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(b,C,I,z,B){let U=!1;const F=u(z,I,C);r!==F&&(r=F,l(r.object)),U=d(b,z,I,B),U&&x(b,z,I,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,M(b,C,I,z),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,C,I){const z=I.wireframe===!0;let B=n[b.id];B===void 0&&(B={},n[b.id]=B);let U=B[C.id];U===void 0&&(U={},B[C.id]=U);let F=U[z];return F===void 0&&(F=f(c()),U[z]=F),F}function f(b){const C=[],I=[],z=[];for(let B=0;B<t;B++)C[B]=0,I[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:z,object:b,attributes:{},index:null}}function d(b,C,I,z){const B=r.attributes,U=C.attributes;let F=0;const G=I.getAttributes();for(const W in G)if(G[W].location>=0){const te=B[W];let Se=U[W];if(Se===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),te===void 0||te.attribute!==Se||Se&&te.data!==Se.data)return!0;F++}return r.attributesNum!==F||r.index!==z}function x(b,C,I,z){const B={},U=C.attributes;let F=0;const G=I.getAttributes();for(const W in G)if(G[W].location>=0){let te=U[W];te===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const Se={};Se.attribute=te,te&&te.data&&(Se.data=te.data),B[W]=Se,F++}r.attributes=B,r.attributesNum=F,r.index=z}function g(){const b=r.newAttributes;for(let C=0,I=b.length;C<I;C++)b[C]=0}function m(b){p(b,0)}function p(b,C){const I=r.newAttributes,z=r.enabledAttributes,B=r.attributeDivisors;I[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),B[b]!==C&&(i.vertexAttribDivisor(b,C),B[b]=C)}function _(){const b=r.newAttributes,C=r.enabledAttributes;for(let I=0,z=C.length;I<z;I++)C[I]!==b[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function v(b,C,I,z,B,U,F){F===!0?i.vertexAttribIPointer(b,C,I,B,U):i.vertexAttribPointer(b,C,I,z,B,U)}function M(b,C,I,z){g();const B=z.attributes,U=I.getAttributes(),F=C.defaultAttributeValues;for(const G in U){const W=U[G];if(W.location>=0){let Q=B[G];if(Q===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),Q!==void 0){const te=Q.normalized,Se=Q.itemSize,Ge=e.get(Q);if(Ge===void 0)continue;const ne=Ge.buffer,we=Ge.type,fe=Ge.bytesPerElement,Y=we===i.INT||we===i.UNSIGNED_INT||Q.gpuType===Ba;if(Q.isInterleavedBufferAttribute){const J=Q.data,pe=J.stride,be=Q.offset;if(J.isInstancedInterleavedBuffer){for(let ve=0;ve<W.locationSize;ve++)p(W.location+ve,J.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<W.locationSize;ve++)m(W.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let ve=0;ve<W.locationSize;ve++)v(W.location+ve,Se/W.locationSize,we,te,pe*fe,(be+Se/W.locationSize*ve)*fe,Y)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,Q.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let J=0;J<W.locationSize;J++)v(W.location+J,Se/W.locationSize,we,te,Se*fe,Se/W.locationSize*J*fe,Y)}}else if(F!==void 0){const te=F[G];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(W.location,te);break;case 3:i.vertexAttrib3fv(W.location,te);break;case 4:i.vertexAttrib4fv(W.location,te);break;default:i.vertexAttrib1fv(W.location,te)}}}}_()}function w(){P();for(const b in n){const C=n[b];for(const I in C){const z=C[I];for(const B in z)h(z[B].object),delete z[B];delete C[I]}delete n[b]}}function S(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const I in C){const z=C[I];for(const B in z)h(z[B].object),delete z[B];delete C[I]}delete n[b.id]}function T(b){for(const C in n){const I=n[C];if(I[b.id]===void 0)continue;const z=I[b.id];for(const B in z)h(z[B].object),delete z[B];delete I[b.id]}}function P(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function Gp(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*f[g];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Vp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==zn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fn&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&($e("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:w,maxSamples:S}}function Hp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ai,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,v=_*4;let M=p.clippingState||null;c.value=M,M=h(x,f,v,d);for(let w=0;w!==v;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,x!==!0||m===null){const p=d+g*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==g;++v,M+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Wp(i){let e=new WeakMap;function t(o,a){return a===Nr?o.mapping=hs:a===Jo&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nr||a===Jo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new od(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const hi=4,nl=[.125,.215,.35,.446,.526,.582],wi=20,Xp=512,Ps=new mh,il=new me;let Ao=null,Co=0,Ro=0,Po=!1;const Yp=new L;class La{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Yp}=r;Ao=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao,Co,Ro),this._renderer.xr.enabled=Po,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:gs,format:vn,colorSpace:ds,depthBuffer:!1},s=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qp(r)),this._blurMaterial=jp(r,e,t)}return s}_compileMaterial(e){const t=new N(new st,e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,n,s,r){const c=new dn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(il),u.toneMapping=ui,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new N(new de,new pi({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(il),p=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):M===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));const w=this._cubeSize;$i(s,M*w,v>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hs||e.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;$i(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const _=3*Math.max(this._cubeSize,16),v=4*this._cubeSize;this._ggxMaterial=Zp(this._lodMax,_,v)}const o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=.05+l*.95,d=u*f,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-hi?n-x+hi:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=x-t,$i(r,m,p,3*g,2*g),s.setRenderTarget(r),s.render(a,Ps),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,$i(e,m,p,3*g,2*g),s.setRenderTarget(e),s.render(a,Ps)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=l;const f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*wi-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):wi;m>wi&&$e(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let _=0;for(let T=0;T<wi;++T){const P=T/g,y=Math.exp(-P*P/2);p.push(y),T===0?_+=y:T<m&&(_+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-n;const M=this._sizeLods[s],w=3*M*(s>v-hi?s-v+hi:0),S=4*(this._cubeSize-M);$i(t,w,S,3*M,2*M),c.setRenderTarget(t),c.render(u,Ps)}}function qp(i){const e=[],t=[],n=[];let s=i;const r=i-hi+1+nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-hi?c=nl[o-i+hi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,g=3,m=2,p=1,_=new Float32Array(g*x*d),v=new Float32Array(m*x*d),M=new Float32Array(p*x*d);for(let S=0;S<d;S++){const T=S%3*2/3-1,P=S>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];_.set(y,g*x*S),v.set(f,m*x*S);const b=[S,S,S,S,S,S];M.set(b,p*x*S)}const w=new st;w.setAttribute("position",new yt(_,g)),w.setAttribute("uv",new yt(v,m)),w.setAttribute("faceIndex",new yt(M,p)),n.push(new N(w,null)),s>hi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function sl(i,e,t){const n=new Ri(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zp(i,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function jp(i,e,t){const n=new Float32Array(wi),s=new L(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function rl(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ol(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function qr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Nr||c===Jo,h=c===hs||c===us;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new La(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new La(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $p(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Xs("WebGLRenderer: "+n+" extension not supported."),s}}}function Jp(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,x=u.attributes.position;let g=0;if(d!==null){const _=d.array;g=d.version;for(let v=0,M=_.length;v<M;v+=3){const w=_[v+0],S=_[v+1],T=_[v+2];f.push(w,S,S,T,T,w)}}else if(x!==void 0){const _=x.array;g=x.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const w=v+0,S=v+1,T=v+2;f.push(w,S,S,T,T,w)}}else return;const m=new(Zl(f)?Ql:Jl)(f,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Qp(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*o,x),t.update(d,n,x))}function h(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];t.update(m,n,1)}function u(f,d,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,x);let p=0;for(let _=0;_<x;_++)p+=d[_]*g[_];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function em(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tm(i,e,t){const n=new WeakMap,s=new mt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let w=a.attributes.position.count*M,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*S*4*u),P=new jl(T,w,S,u);P.type=Fn,P.needsUpdate=!0;const y=M*4;for(let C=0;C<u;C++){const I=p[C],z=_[C],B=v[C],U=w*S*4*C;for(let F=0;F<I.count;F++){const G=F*y;x===!0&&(s.fromBufferAttribute(I,F),T[U+G+0]=s.x,T[U+G+1]=s.y,T[U+G+2]=s.z,T[U+G+3]=0),g===!0&&(s.fromBufferAttribute(z,F),T[U+G+4]=s.x,T[U+G+5]=s.y,T[U+G+6]=s.z,T[U+G+7]=0),m===!0&&(s.fromBufferAttribute(B,F),T[U+G+8]=s.x,T[U+G+9]=s.y,T[U+G+10]=s.z,T[U+G+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new le(w,S)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const g=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function nm(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const gh=new Zt,al=new ih(1,1),_h=new jl,vh=new Hu,Mh=new nh,cl=[],ll=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function ys(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=cl[s];if(r===void 0&&(r=new Float32Array(s),cl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zr(i,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;dl.set(n),i.uniformMatrix2fv(this.addr,!1,dl),zt(t,n)}}function cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;ul.set(n),i.uniformMatrix3fv(this.addr,!1,ul),zt(t,n)}}function lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;hl.set(n),i.uniformMatrix4fv(this.addr,!1,hl),zt(t,n)}}function hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function _m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(al.compareFunction=ql,r=al):r=gh,t.setTexture2D(e||r,s)}function vm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vh,s)}function Mm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mh,s)}function ym(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_h,s)}function bm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return xm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return ym}}function Sm(i,e){i.uniform1fv(this.addr,e)}function wm(i,e){const t=ys(e,this.size,2);i.uniform2fv(this.addr,t)}function Em(i,e){const t=ys(e,this.size,3);i.uniform3fv(this.addr,t)}function Tm(i,e){const t=ys(e,this.size,4);i.uniform4fv(this.addr,t)}function Am(i,e){const t=ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cm(i,e){const t=ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rm(i,e){const t=ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pm(i,e){i.uniform1iv(this.addr,e)}function Dm(i,e){i.uniform2iv(this.addr,e)}function Lm(i,e){i.uniform3iv(this.addr,e)}function Im(i,e){i.uniform4iv(this.addr,e)}function Um(i,e){i.uniform1uiv(this.addr,e)}function Nm(i,e){i.uniform2uiv(this.addr,e)}function Fm(i,e){i.uniform3uiv(this.addr,e)}function Om(i,e){i.uniform4uiv(this.addr,e)}function zm(i,e,t){const n=this.cache,s=e.length,r=Zr(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||gh,r[o])}function Bm(i,e,t){const n=this.cache,s=e.length,r=Zr(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vh,r[o])}function km(i,e,t){const n=this.cache,s=e.length,r=Zr(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Mh,r[o])}function Gm(i,e,t){const n=this.cache,s=e.length,r=Zr(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_h,r[o])}function Vm(i){switch(i){case 5126:return Sm;case 35664:return wm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return Cm;case 35676:return Rm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Gm}}class Hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bm(t.type)}}class Wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vm(t.type)}}class Xm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function fl(i,e){i.seq.push(e),i.map[e.id]=e}function Ym(i,e,t){const n=i.name,s=n.length;for(Do.lastIndex=0;;){const r=Do.exec(n),o=Do.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fl(t,l===void 0?new Hm(a,i,e):new Wm(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Xm(a),fl(t,u)),t=u}}}class Ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ym(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function pl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const qm=37297;let Zm=0;function jm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ml=new et;function Km(i){ht._getMatrix(ml,ht.workingColorSpace,i);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Fr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jm(i.getShaderSource(e),a)}else return r}function $m(i,e){const t=Km(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jm(i,e){let t;switch(e){case iu:t="Linear";break;case su:t="Reinhard";break;case ru:t="Cineon";break;case zl:t="ACESFilmic";break;case au:t="AgX";break;case cu:t="Neutral";break;case ou:t="Custom";break;default:$e("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new L;function Qm(){ht.getLuminanceCoefficients(Er);const i=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function tx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Is(i){return i!==""}function gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(ix,rx)}const sx=new Map;function rx(i,e){let t=it[e];if(t===void 0){const n=sx.get(e);if(n!==void 0)t=it[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(ox,ax)}function ax(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ml(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function lx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function ux(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ol:e="ENVMAP_BLENDING_MULTIPLY";break;case tu:e="ENVMAP_BLENDING_MIX";break;case nu:e="ENVMAP_BLENDING_ADD";break}return e}function dx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=cx(t),l=lx(t),h=hx(t),u=ux(t),f=dx(t),d=ex(t),x=tx(r),g=s.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Is).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(m=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?it.tonemapping_pars_fragment:"",t.toneMapping!==ui?Jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,$m("linearToOutputTexel",t.outputColorSpace),Qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),o=Ia(o),o=gl(o,t),o=_l(o,t),a=Ia(a),a=gl(a,t),a=_l(a,t),o=vl(o),a=vl(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=_+m+o,M=_+p+a,w=pl(s,s.VERTEX_SHADER,v),S=pl(s,s.FRAGMENT_SHADER,M);s.attachShader(g,w),s.attachShader(g,S),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(w)||"",B=s.getShaderInfoLog(S)||"",U=I.trim(),F=z.trim(),G=B.trim();let W=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,S);else{const te=xl(s,w,"vertex"),Se=xl(s,S,"fragment");Pt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+te+`
`+Se)}else U!==""?$e("WebGLProgram: Program Info Log:",U):(F===""||G==="")&&(Q=!1);Q&&(C.diagnostics={runnable:W,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(w),s.deleteShader(S),P=new Ir(s,g),y=nx(s,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,qm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=S,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xx(e),t.set(e,n)),n}}class xx{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}}function gx(i,e,t,n,s,r,o){const a=new Kl,c=new mx,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,b,C,I,z){const B=I.fog,U=z.geometry,F=y.isMeshStandardMaterial?I.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),W=G&&G.mapping===Hr?G.image.height:null,Q=x[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&$e("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Se=te!==void 0?te.length:0;let Ge=0;U.morphAttributes.position!==void 0&&(Ge=1),U.morphAttributes.normal!==void 0&&(Ge=2),U.morphAttributes.color!==void 0&&(Ge=3);let ne,we,fe,Y;if(Q){const ut=Un[Q];ne=ut.vertexShader,we=ut.fragmentShader}else ne=y.vertexShader,we=y.fragmentShader,c.update(y),fe=c.getVertexShaderID(y),Y=c.getFragmentShaderID(y);const J=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),be=z.isInstancedMesh===!0,ve=z.isBatchedMesh===!0,Oe=!!y.map,nt=!!y.matcap,ze=!!G,ee=!!y.aoMap,R=!!y.lightMap,X=!!y.bumpMap,j=!!y.normalMap,oe=!!y.displacementMap,ce=!!y.emissiveMap,De=!!y.metalnessMap,_e=!!y.roughnessMap,Ce=y.anisotropy>0,D=y.clearcoat>0,E=y.dispersion>0,H=y.iridescence>0,$=y.sheen>0,ae=y.transmission>0,K=Ce&&!!y.anisotropyMap,Be=D&&!!y.clearcoatMap,Ee=D&&!!y.clearcoatNormalMap,Ve=D&&!!y.clearcoatRoughnessMap,Fe=H&&!!y.iridescenceMap,he=H&&!!y.iridescenceThicknessMap,ge=$&&!!y.sheenColorMap,Ze=$&&!!y.sheenRoughnessMap,Ye=!!y.specularMap,Pe=!!y.specularColorMap,Ke=!!y.specularIntensityMap,O=ae&&!!y.transmissionMap,Ae=ae&&!!y.thicknessMap,Me=!!y.gradientMap,ye=!!y.alphaMap,ue=y.alphaTest>0,se=!!y.alphaHash,Ue=!!y.extensions;let Je=ui;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Je=i.toneMapping);const Mt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:ne,fragmentShader:we,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ve,batchingColor:ve&&z._colorsTexture!==null,instancing:be,instancingColor:be&&z.instanceColor!==null,instancingMorph:be&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ds,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:nt,envMap:ze,envMapMode:ze&&G.mapping,envMapCubeUVHeight:W,aoMap:ee,lightMap:R,bumpMap:X,normalMap:j,displacementMap:f&&oe,emissiveMap:ce,normalMapObjectSpace:j&&y.normalMapType===du,normalMapTangentSpace:j&&y.normalMapType===Yl,metalnessMap:De,roughnessMap:_e,anisotropy:Ce,anisotropyMap:K,clearcoat:D,clearcoatMap:Be,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ve,dispersion:E,iridescence:H,iridescenceMap:Fe,iridescenceThicknessMap:he,sheen:$,sheenColorMap:ge,sheenRoughnessMap:Ze,specularMap:Ye,specularColorMap:Pe,specularIntensityMap:Ke,transmission:ae,transmissionMap:O,thicknessMap:Ae,gradientMap:Me,opaque:y.transparent===!1&&y.blending===Ti&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:ue,alphaHash:se,combine:y.combine,mapUv:Oe&&g(y.map.channel),aoMapUv:ee&&g(y.aoMap.channel),lightMapUv:R&&g(y.lightMap.channel),bumpMapUv:X&&g(y.bumpMap.channel),normalMapUv:j&&g(y.normalMap.channel),displacementMapUv:oe&&g(y.displacementMap.channel),emissiveMapUv:ce&&g(y.emissiveMap.channel),metalnessMapUv:De&&g(y.metalnessMap.channel),roughnessMapUv:_e&&g(y.roughnessMap.channel),anisotropyMapUv:K&&g(y.anisotropyMap.channel),clearcoatMapUv:Be&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&g(y.sheenRoughnessMap.channel),specularMapUv:Ye&&g(y.specularMap.channel),specularColorMapUv:Pe&&g(y.specularColorMap.channel),specularIntensityMapUv:Ke&&g(y.specularIntensityMap.channel),transmissionMapUv:O&&g(y.transmissionMap.channel),thicknessMapUv:Ae&&g(y.thicknessMap.channel),alphaMapUv:ye&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(j||Ce),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(Oe||ye),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&ht.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:ce&&y.emissiveMap.isVideoTexture===!0&&ht.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_t,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ue&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&y.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(_(b,y),v(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const b=x[y.type];let C;if(b){const I=Un[b];C=nd.clone(I.uniforms)}else C=y.uniforms;return C}function w(y,b){let C;for(let I=0,z=h.length;I<z;I++){const B=h[I];if(B.cacheKey===b){C=B,++C.usedTimes;break}}return C===void 0&&(C=new fx(i,b,y,r),h.push(C)),C}function S(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function T(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:P}}function _x(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,x,g,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,f,d,x,g,m){const p=o(u,f,d,x,g,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,x,g,m){const p=o(u,f,d,x,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||vx),n.length>1&&n.sort(f||yl),s.length>1&&s.sort(f||yl)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Mx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new bl,i.set(n,[o])):s>=r.length?(o=new bl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function yx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new me};break;case"SpotLight":t={position:new L,direction:new L,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function bx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Sx=0;function wx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ex(i){const e=new yx,t=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new at,o=new at;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,x=0,g=0,m=0,p=0,_=0,v=0,M=0,w=0,S=0,T=0;l.sort(wx);for(let y=0,b=l.length;y<b;y++){const C=l[y],I=C.color,z=C.intensity,B=C.distance,U=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=I.r*z,u+=I.g*z,f+=I.b*z;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],z);T++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,W=t.get(C);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=C.shadow.matrix,_++}n.directional[d]=F,d++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(I).multiplyScalar(z),F.distance=B,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[g]=F;const G=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,G.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[g]=G.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=U,M++}g++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(I).multiplyScalar(z),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=F,m++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const G=C.shadow,W=t.get(C);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=U,n.pointShadowMatrix[x]=C.shadow.matrix,v++}n.point[x]=F,x++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(z),F.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==x||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==M||P.numSpotMaps!==w||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.directionalLength=d,P.pointLength=x,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=w,P.numLightProbes=T,n.version=Sx++)}function c(l,h){let u=0,f=0,d=0,x=0,g=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const v=l[p];if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Sl(i){const e=new Ex(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Tx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Sl(i),e.set(s,[a])):r>=o.length?(a=new Sl(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rx(i,e,t){let n=new $a;const s=new le,r=new le,o=new mt,a=new qd({depthPacking:uu}),c=new Zd,l={},h=t.maxTextureSize,u={[fi]:tn,[tn]:fi,[_t]:_t},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Ax,fragmentShader:Cx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new st;x.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new N(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let p=this.type;this.render=function(S,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const y=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Jn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==Zn&&this.type===Zn,B=p===Zn&&this.type!==Zn;for(let U=0,F=S.length;U<F;U++){const G=S[U],W=G.shadow;if(W===void 0){$e("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Q=W.getFrameExtents();if(s.multiply(Q),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,W.mapSize.y=r.y)),W.map===null||z===!0||B===!0){const Se=this.type!==Zn?{minFilter:fn,magFilter:fn}:{};W.map!==null&&W.map.dispose(),W.map=new Ri(s.x,s.y,Se),W.map.texture.name=G.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const te=W.getViewportCount();for(let Se=0;Se<te;Se++){const Ge=W.getViewport(Se);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),I.viewport(o),W.updateMatrices(G,Se),n=W.getFrustum(),M(T,P,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===Zn&&_(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,b,C)};function _(S,T){const P=e.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ri(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,P,f,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,P,d,g,null)}function v(S,T,P,y){let b=null;const C=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)b=C;else if(b=P.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=b.uuid,z=T.uuid;let B=l[I];B===void 0&&(B={},l[I]=B);let U=B[z];U===void 0&&(U=b.clone(),B[z]=U,T.addEventListener("dispose",w)),b=U}if(b.visible=T.visible,b.wireframe=T.wireframe,y===Zn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=i.properties.get(b);I.light=P}return b}function M(S,T,P,y,b){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===Zn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const z=e.update(S),B=S.material;if(Array.isArray(B)){const U=z.groups;for(let F=0,G=U.length;F<G;F++){const W=U[F],Q=B[W.materialIndex];if(Q&&Q.visible){const te=v(S,Q,y,b);S.onBeforeShadow(i,S,T,P,z,te,W),i.renderBufferDirect(P,null,z,te,S,W),S.onAfterShadow(i,S,T,P,z,te,W)}}}else if(B.visible){const U=v(S,B,y,b);S.onBeforeShadow(i,S,T,P,z,U,null),i.renderBufferDirect(P,null,z,U,S,null),S.onAfterShadow(i,S,T,P,z,U,null)}}const I=S.children;for(let z=0,B=I.length;z<B;z++)M(I[z],T,P,y,b)}function w(S){S.target.removeEventListener("dispose",w);for(const P in l){const y=l[P],b=S.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const Px={[Xo]:Yo,[qo]:Ko,[Zo]:$o,[ls]:jo,[Yo]:Xo,[Ko]:qo,[$o]:Zo,[jo]:ls};function Dx(i,e){function t(){let O=!1;const Ae=new mt;let Me=null;const ye=new mt(0,0,0,0);return{setMask:function(ue){Me!==ue&&!O&&(i.colorMask(ue,ue,ue,ue),Me=ue)},setLocked:function(ue){O=ue},setClear:function(ue,se,Ue,Je,Mt){Mt===!0&&(ue*=Je,se*=Je,Ue*=Je),Ae.set(ue,se,Ue,Je),ye.equals(Ae)===!1&&(i.clearColor(ue,se,Ue,Je),ye.copy(Ae))},reset:function(){O=!1,Me=null,ye.set(-1,0,0,0)}}}function n(){let O=!1,Ae=!1,Me=null,ye=null,ue=null;return{setReversed:function(se){if(Ae!==se){const Ue=e.get("EXT_clip_control");se?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ae=se;const Je=ue;ue=null,this.setClear(Je)}},getReversed:function(){return Ae},setTest:function(se){se?J(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(se){Me!==se&&!O&&(i.depthMask(se),Me=se)},setFunc:function(se){if(Ae&&(se=Px[se]),ye!==se){switch(se){case Xo:i.depthFunc(i.NEVER);break;case Yo:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=se}},setLocked:function(se){O=se},setClear:function(se){ue!==se&&(Ae&&(se=1-se),i.clearDepth(se),ue=se)},reset:function(){O=!1,Me=null,ye=null,ue=null,Ae=!1}}}function s(){let O=!1,Ae=null,Me=null,ye=null,ue=null,se=null,Ue=null,Je=null,Mt=null;return{setTest:function(ut){O||(ut?J(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(ut){Ae!==ut&&!O&&(i.stencilMask(ut),Ae=ut)},setFunc:function(ut,In,En){(Me!==ut||ye!==In||ue!==En)&&(i.stencilFunc(ut,In,En),Me=ut,ye=In,ue=En)},setOp:function(ut,In,En){(se!==ut||Ue!==In||Je!==En)&&(i.stencilOp(ut,In,En),se=ut,Ue=In,Je=En)},setLocked:function(ut){O=ut},setClear:function(ut){Mt!==ut&&(i.clearStencil(ut),Mt=ut)},reset:function(){O=!1,Ae=null,Me=null,ye=null,ue=null,se=null,Ue=null,Je=null,Mt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],x=null,g=!1,m=null,p=null,_=null,v=null,M=null,w=null,S=null,T=new me(0,0,0),P=0,y=!1,b=null,C=null,I=null,z=null,B=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=G>=2);let Q=null,te={};const Se=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),ne=new mt().fromArray(Se),we=new mt().fromArray(Ge);function fe(O,Ae,Me,ye){const ue=new Uint8Array(4),se=i.createTexture();i.bindTexture(O,se),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<Me;Ue++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(Ae+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return se}const Y={};Y[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(ls),X(!1),j(pc),J(i.CULL_FACE),ee(Jn);function J(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function pe(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function be(O,Ae){return u[O]!==Ae?(i.bindFramebuffer(O,Ae),u[O]=Ae,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ve(O,Ae){let Me=d,ye=!1;if(O){Me=f.get(Ae),Me===void 0&&(Me=[],f.set(Ae,Me));const ue=O.textures;if(Me.length!==ue.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ue=ue.length;se<Ue;se++)Me[se]=i.COLOR_ATTACHMENT0+se;Me.length=ue.length,ye=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,ye=!0);ye&&i.drawBuffers(Me)}function Oe(O){return x!==O?(i.useProgram(O),x=O,!0):!1}const nt={[Si]:i.FUNC_ADD,[zh]:i.FUNC_SUBTRACT,[Bh]:i.FUNC_REVERSE_SUBTRACT};nt[kh]=i.MIN,nt[Gh]=i.MAX;const ze={[Vh]:i.ZERO,[Hh]:i.ONE,[Wh]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[Kh]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[Yh]:i.DST_ALPHA,[Xh]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[$h]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[eu]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(O,Ae,Me,ye,ue,se,Ue,Je,Mt,ut){if(O===Jn){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),O!==Oh){if(O!==m||ut!==y){if((p!==Si||M!==Si)&&(i.blendEquation(i.FUNC_ADD),p=Si,M=Si),ut)switch(O){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",O);break}else switch(O){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xc:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",O);break}_=null,v=null,w=null,S=null,T.set(0,0,0),P=0,m=O,y=ut}return}ue=ue||Ae,se=se||Me,Ue=Ue||ye,(Ae!==p||ue!==M)&&(i.blendEquationSeparate(nt[Ae],nt[ue]),p=Ae,M=ue),(Me!==_||ye!==v||se!==w||Ue!==S)&&(i.blendFuncSeparate(ze[Me],ze[ye],ze[se],ze[Ue]),_=Me,v=ye,w=se,S=Ue),(Je.equals(T)===!1||Mt!==P)&&(i.blendColor(Je.r,Je.g,Je.b,Mt),T.copy(Je),P=Mt),m=O,y=!1}function R(O,Ae){O.side===_t?pe(i.CULL_FACE):J(i.CULL_FACE);let Me=O.side===tn;Ae&&(Me=!Me),X(Me),O.blending===Ti&&O.transparent===!1?ee(Jn):ee(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ye=O.stencilWrite;a.setTest(ye),ye&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ce(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function j(O){O!==Nh?(J(i.CULL_FACE),O!==C&&(O===pc?i.cullFace(i.BACK):O===Fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),C=O}function oe(O){O!==I&&(F&&i.lineWidth(O),I=O)}function ce(O,Ae,Me){O?(J(i.POLYGON_OFFSET_FILL),(z!==Ae||B!==Me)&&(i.polygonOffset(Ae,Me),z=Ae,B=Me)):pe(i.POLYGON_OFFSET_FILL)}function De(O){O?J(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function _e(O){O===void 0&&(O=i.TEXTURE0+U-1),Q!==O&&(i.activeTexture(O),Q=O)}function Ce(O,Ae,Me){Me===void 0&&(Q===null?Me=i.TEXTURE0+U-1:Me=Q);let ye=te[Me];ye===void 0&&(ye={type:void 0,texture:void 0},te[Me]=ye),(ye.type!==O||ye.texture!==Ae)&&(Q!==Me&&(i.activeTexture(Me),Q=Me),i.bindTexture(O,Ae||Y[O]),ye.type=O,ye.texture=Ae)}function D(){const O=te[Q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function $(){try{i.texSubImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function ae(){try{i.texSubImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function Ee(){try{i.texStorage2D(...arguments)}catch(O){O("WebGLState:",O)}}function Ve(){try{i.texStorage3D(...arguments)}catch(O){O("WebGLState:",O)}}function Fe(){try{i.texImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function he(){try{i.texImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function ge(O){ne.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ne.copy(O))}function Ze(O){we.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),we.copy(O))}function Ye(O,Ae){let Me=l.get(Ae);Me===void 0&&(Me=new WeakMap,l.set(Ae,Me));let ye=Me.get(O);ye===void 0&&(ye=i.getUniformBlockIndex(Ae,O.name),Me.set(O,ye))}function Pe(O,Ae){const ye=l.get(Ae).get(O);c.get(Ae)!==ye&&(i.uniformBlockBinding(Ae,ye,O.__bindingPointIndex),c.set(Ae,ye))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,te={},u={},f=new WeakMap,d=[],x=null,g=!1,m=null,p=null,_=null,v=null,M=null,w=null,S=null,T=new me(0,0,0),P=0,y=!1,b=null,C=null,I=null,z=null,B=null,ne.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:pe,bindFramebuffer:be,drawBuffers:ve,useProgram:Oe,setBlending:ee,setMaterial:R,setFlipSided:X,setCullFace:j,setLineWidth:oe,setPolygonOffset:ce,setScissorTest:De,activeTexture:_e,bindTexture:Ce,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:Fe,texImage3D:he,updateUBOMapping:Ye,uniformBlockBinding:Pe,texStorage2D:Ee,texStorage3D:Ve,texSubImage2D:$,texSubImage3D:ae,compressedTexSubImage2D:K,compressedTexSubImage3D:Be,scissor:ge,viewport:Ze,reset:Ke}}function Lx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,E){return d?new OffscreenCanvas(D,E):zr("canvas")}function g(D,E,H){let $=1;const ae=Ce(D);if((ae.width>H||ae.height>H)&&($=H/Math.max(ae.width,ae.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const K=Math.floor($*ae.width),Be=Math.floor($*ae.height);u===void 0&&(u=x(K,Be));const Ee=E?x(K,Be):u;return Ee.width=K,Ee.height=Be,Ee.getContext("2d").drawImage(D,0,0,K,Be),$e("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+K+"x"+Be+")."),Ee}else return"data"in D&&$e("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(D,E,H,$,ae=!1){if(D!==null){if(i[D]!==void 0)return i[D];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let K=E;if(E===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),E===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),E===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),E===i.RGBA){const Be=ae?Fr:ht.getTransfer($);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=Be===ft?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(D,E){let H;return D?E===null||E===Ci||E===Vs?H=i.DEPTH24_STENCIL8:E===Fn?H=i.DEPTH32F_STENCIL8:E===Gs&&(H=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ci||E===Vs?H=i.DEPTH_COMPONENT24:E===Fn?H=i.DEPTH_COMPONENT32F:E===Gs&&(H=i.DEPTH_COMPONENT16),H}function w(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==fn&&D.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function S(D){const E=D.target;E.removeEventListener("dispose",S),P(E),E.isVideoTexture&&h.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),b(E)}function P(D){const E=n.get(D);if(E.__webglInit===void 0)return;const H=D.source,$=f.get(H);if($){const ae=$[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&y(D),Object.keys($).length===0&&f.delete(H)}n.remove(D)}function y(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const H=D.source,$=f.get(H);delete $[E.__cacheKey],o.memory.textures--}function b(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let ae=0;ae<E.__webglFramebuffer[$].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[$][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=D.textures;for(let $=0,ae=H.length;$<ae;$++){const K=n.get(H[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(D)}let C=0;function I(){C=0}function z(){const D=C;return D>=s.maxTextures&&$e("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),C+=1,D}function B(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function U(D,E){const H=n.get(D);if(D.isVideoTexture&&De(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const $=D.image;if($===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,D,E);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function F(D,E){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Y(H,D,E);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function G(D,E){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Y(H,D,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function W(D,E){const H=n.get(D);if(D.version>0&&H.__version!==D.version){J(H,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}const Q={[Xt]:i.REPEAT,[Wt]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},te={[fn]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Se={[fu]:i.NEVER,[vu]:i.ALWAYS,[pu]:i.LESS,[ql]:i.LEQUAL,[mu]:i.EQUAL,[_u]:i.GEQUAL,[xu]:i.GREATER,[gu]:i.NOTEQUAL};function Ge(D,E){if(E.type===Fn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===en||E.magFilter===Jr||E.magFilter===er||E.magFilter===ci||E.minFilter===en||E.minFilter===Jr||E.minFilter===er||E.minFilter===ci)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,te[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===fn||E.minFilter!==er&&E.minFilter!==ci||E.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ne(D,E){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",S));const $=E.source;let ae=f.get($);ae===void 0&&(ae={},f.set($,ae));const K=B(E);if(K!==D.__cacheKey){ae[K]===void 0&&(ae[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[K].usedTimes++;const Be=ae[D.__cacheKey];Be!==void 0&&(ae[D.__cacheKey].usedTimes--,Be.usedTimes===0&&y(E)),D.__cacheKey=K,D.__webglTexture=ae[K].texture}return H}function we(D,E,H){return Math.floor(Math.floor(D/H)/E)}function fe(D,E,H,$){const K=D.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,H,$,E.data);else{K.sort((he,ge)=>he.start-ge.start);let Be=0;for(let he=1;he<K.length;he++){const ge=K[Be],Ze=K[he],Ye=ge.start+ge.count,Pe=we(Ze.start,E.width,4),Ke=we(ge.start,E.width,4);Ze.start<=Ye+1&&Pe===Ke&&we(Ze.start+Ze.count-1,E.width,4)===Pe?ge.count=Math.max(ge.count,Ze.start+Ze.count-ge.start):(++Be,K[Be]=Ze)}K.length=Be+1;const Ee=i.getParameter(i.UNPACK_ROW_LENGTH),Ve=i.getParameter(i.UNPACK_SKIP_PIXELS),Fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let he=0,ge=K.length;he<ge;he++){const Ze=K[he],Ye=Math.floor(Ze.start/4),Pe=Math.ceil(Ze.count/4),Ke=Ye%E.width,O=Math.floor(Ye/E.width),Ae=Pe,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Ke,O,Ae,Me,H,$,E.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ee),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function Y(D,E,H){let $=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=i.TEXTURE_3D);const ae=ne(D,E),K=E.source;t.bindTexture($,D.__webglTexture,i.TEXTURE0+H);const Be=n.get(K);if(K.version!==Be.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);const Ee=ht.getPrimaries(ht.workingColorSpace),Ve=E.colorSpace===Nn?null:ht.getPrimaries(E.colorSpace),Fe=E.colorSpace===Nn||Ee===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let he=g(E.image,!1,s.maxTextureSize);he=_e(E,he);const ge=r.convert(E.format,E.colorSpace),Ze=r.convert(E.type);let Ye=v(E.internalFormat,ge,Ze,E.colorSpace,E.isVideoTexture);Ge($,E);let Pe;const Ke=E.mipmaps,O=E.isVideoTexture!==!0,Ae=Be.__version===void 0||ae===!0,Me=K.dataReady,ye=w(E,he);if(E.isDepthTexture)Ye=M(E.format===Ws,E.type),Ae&&(O?t.texStorage2D(i.TEXTURE_2D,1,Ye,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ye,he.width,he.height,0,ge,Ze,null));else if(E.isDataTexture)if(Ke.length>0){O&&Ae&&t.texStorage2D(i.TEXTURE_2D,ye,Ye,Ke[0].width,Ke[0].height);for(let ue=0,se=Ke.length;ue<se;ue++)Pe=Ke[ue],O?Me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Pe.width,Pe.height,ge,Ze,Pe.data):t.texImage2D(i.TEXTURE_2D,ue,Ye,Pe.width,Pe.height,0,ge,Ze,Pe.data);E.generateMipmaps=!1}else O?(Ae&&t.texStorage2D(i.TEXTURE_2D,ye,Ye,he.width,he.height),Me&&fe(E,he,ge,Ze)):t.texImage2D(i.TEXTURE_2D,0,Ye,he.width,he.height,0,ge,Ze,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ye,Ke[0].width,Ke[0].height,he.depth);for(let ue=0,se=Ke.length;ue<se;ue++)if(Pe=Ke[ue],E.format!==vn)if(ge!==null)if(O){if(Me)if(E.layerUpdates.size>0){const Ue=tl(Pe.width,Pe.height,E.format,E.type);for(const Je of E.layerUpdates){const Mt=Pe.data.subarray(Je*Ue/Pe.data.BYTES_PER_ELEMENT,(Je+1)*Ue/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Je,Pe.width,Pe.height,1,ge,Mt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Pe.width,Pe.height,he.depth,ge,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Ye,Pe.width,Pe.height,he.depth,0,Pe.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Pe.width,Pe.height,he.depth,ge,Ze,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Ye,Pe.width,Pe.height,he.depth,0,ge,Ze,Pe.data)}else{O&&Ae&&t.texStorage2D(i.TEXTURE_2D,ye,Ye,Ke[0].width,Ke[0].height);for(let ue=0,se=Ke.length;ue<se;ue++)Pe=Ke[ue],E.format!==vn?ge!==null?O?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Pe.width,Pe.height,ge,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Ye,Pe.width,Pe.height,0,Pe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Pe.width,Pe.height,ge,Ze,Pe.data):t.texImage2D(i.TEXTURE_2D,ue,Ye,Pe.width,Pe.height,0,ge,Ze,Pe.data)}else if(E.isDataArrayTexture)if(O){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ye,he.width,he.height,he.depth),Me)if(E.layerUpdates.size>0){const ue=tl(he.width,he.height,E.format,E.type);for(const se of E.layerUpdates){const Ue=he.data.subarray(se*ue/he.data.BYTES_PER_ELEMENT,(se+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,ge,Ze,Ue)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ge,Ze,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,he.width,he.height,he.depth,0,ge,Ze,he.data);else if(E.isData3DTexture)O?(Ae&&t.texStorage3D(i.TEXTURE_3D,ye,Ye,he.width,he.height,he.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ge,Ze,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,he.width,he.height,he.depth,0,ge,Ze,he.data);else if(E.isFramebufferTexture){if(Ae)if(O)t.texStorage2D(i.TEXTURE_2D,ye,Ye,he.width,he.height);else{let ue=he.width,se=he.height;for(let Ue=0;Ue<ye;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ye,ue,se,0,ge,Ze,null),ue>>=1,se>>=1}}else if(Ke.length>0){if(O&&Ae){const ue=Ce(Ke[0]);t.texStorage2D(i.TEXTURE_2D,ye,Ye,ue.width,ue.height)}for(let ue=0,se=Ke.length;ue<se;ue++)Pe=Ke[ue],O?Me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ge,Ze,Pe):t.texImage2D(i.TEXTURE_2D,ue,Ye,ge,Ze,Pe);E.generateMipmaps=!1}else if(O){if(Ae){const ue=Ce(he);t.texStorage2D(i.TEXTURE_2D,ye,Ye,ue.width,ue.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Ze,he)}else t.texImage2D(i.TEXTURE_2D,0,Ye,ge,Ze,he);m(E)&&p($),Be.__version=K.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function J(D,E,H){if(E.image.length!==6)return;const $=ne(D,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+H);const K=n.get(ae);if(ae.version!==K.__version||$===!0){t.activeTexture(i.TEXTURE0+H);const Be=ht.getPrimaries(ht.workingColorSpace),Ee=E.colorSpace===Nn?null:ht.getPrimaries(E.colorSpace),Ve=E.colorSpace===Nn||Be===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!Fe&&!he?ge[se]=g(E.image[se],!0,s.maxCubemapSize):ge[se]=he?E.image[se].image:E.image[se],ge[se]=_e(E,ge[se]);const Ze=ge[0],Ye=r.convert(E.format,E.colorSpace),Pe=r.convert(E.type),Ke=v(E.internalFormat,Ye,Pe,E.colorSpace),O=E.isVideoTexture!==!0,Ae=K.__version===void 0||$===!0,Me=ae.dataReady;let ye=w(E,Ze);Ge(i.TEXTURE_CUBE_MAP,E);let ue;if(Fe){O&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ke,Ze.width,Ze.height);for(let se=0;se<6;se++){ue=ge[se].mipmaps;for(let Ue=0;Ue<ue.length;Ue++){const Je=ue[Ue];E.format!==vn?Ye!==null?O?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,Je.width,Je.height,Ye,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,Ke,Je.width,Je.height,0,Je.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,Je.width,Je.height,Ye,Pe,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,Ke,Je.width,Je.height,0,Ye,Pe,Je.data)}}}else{if(ue=E.mipmaps,O&&Ae){ue.length>0&&ye++;const se=Ce(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ke,se.width,se.height)}for(let se=0;se<6;se++)if(he){O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,Ye,Pe,ge[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ke,ge[se].width,ge[se].height,0,Ye,Pe,ge[se].data);for(let Ue=0;Ue<ue.length;Ue++){const Mt=ue[Ue].image[se].image;O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,Mt.width,Mt.height,Ye,Pe,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,Ke,Mt.width,Mt.height,0,Ye,Pe,Mt.data)}}else{O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ye,Pe,ge[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ke,Ye,Pe,ge[se]);for(let Ue=0;Ue<ue.length;Ue++){const Je=ue[Ue];O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,Ye,Pe,Je.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,Ke,Ye,Pe,Je.image[se])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),K.__version=ae.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function pe(D,E,H,$,ae,K){const Be=r.convert(H.format,H.colorSpace),Ee=r.convert(H.type),Ve=v(H.internalFormat,Be,Ee,H.colorSpace),Fe=n.get(E),he=n.get(H);if(he.__renderTarget=E,!Fe.__hasExternalTextures){const ge=Math.max(1,E.width>>K),Ze=Math.max(1,E.height>>K);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,K,Ve,ge,Ze,E.depth,0,Be,Ee,null):t.texImage2D(ae,K,Ve,ge,Ze,0,Be,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ce(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ae,he.__webglTexture,0,oe(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ae,he.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(D,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const $=E.depthTexture,ae=$&&$.isDepthTexture?$.type:null,K=M(E.stencilBuffer,ae),Be=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=oe(E);ce(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,K,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Be,i.RENDERBUFFER,D)}else{const $=E.textures;for(let ae=0;ae<$.length;ae++){const K=$[ae],Be=r.convert(K.format,K.colorSpace),Ee=r.convert(K.type),Ve=v(K.internalFormat,Be,Ee,K.colorSpace),Fe=oe(E);H&&ce(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ve,E.width,E.height):ce(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);const ae=$.__webglTexture,K=oe(E);if(E.depthTexture.format===Hs)ce(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(E.depthTexture.format===Ws)ce(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Oe(D){const E=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const $=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",ae)};$.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=$}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const $=D.texture.mipmaps;$&&$.length>0?ve(E.__webglFramebuffer[0],D):ve(E.__webglFramebuffer,D)}else if(H){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=i.createRenderbuffer(),be(E.__webglDepthbuffer[$],D,!1);else{const ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,K)}}else{const $=D.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),be(E.__webglDepthbuffer,D,!1);else{const ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(D,E,H){const $=n.get(D);E!==void 0&&pe($.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Oe(D)}function ze(D){const E=D.texture,H=n.get(D),$=n.get(E);D.addEventListener("dispose",T);const ae=D.textures,K=D.isWebGLCubeRenderTarget===!0,Be=ae.length>1;if(Be||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=E.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[Ee]=[];for(let Ve=0;Ve<E.mipmaps.length;Ve++)H.__webglFramebuffer[Ee][Ve]=i.createFramebuffer()}else H.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)H.__webglFramebuffer[Ee]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Be)for(let Ee=0,Ve=ae.length;Ee<Ve;Ee++){const Fe=n.get(ae[Ee]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ce(D)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ae.length;Ee++){const Ve=ae[Ee];H.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Ee]);const Fe=r.convert(Ve.format,Ve.colorSpace),he=r.convert(Ve.type),ge=v(Ve.internalFormat,Fe,he,Ve.colorSpace,D.isXRRenderTarget===!0),Ze=oe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,ge,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,H.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),be(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,E);for(let Ee=0;Ee<6;Ee++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)pe(H.__webglFramebuffer[Ee][Ve],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve);else pe(H.__webglFramebuffer[Ee],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Ee=0,Ve=ae.length;Ee<Ve;Ee++){const Fe=ae[Ee],he=n.get(Fe);let ge=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,he.__webglTexture),Ge(ge,Fe),pe(H.__webglFramebuffer,D,Fe,i.COLOR_ATTACHMENT0+Ee,ge,0),m(Fe)&&p(ge)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,$.__webglTexture),Ge(Ee,E),E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)pe(H.__webglFramebuffer[Ve],D,E,i.COLOR_ATTACHMENT0,Ee,Ve);else pe(H.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,Ee,0);m(E)&&p(Ee),t.unbindTexture()}D.depthBuffer&&Oe(D)}function ee(D){const E=D.textures;for(let H=0,$=E.length;H<$;H++){const ae=E[H];if(m(ae)){const K=_(D),Be=n.get(ae).__webglTexture;t.bindTexture(K,Be),p(K),t.unbindTexture()}}}const R=[],X=[];function j(D){if(D.samples>0){if(ce(D)===!1){const E=D.textures,H=D.width,$=D.height;let ae=i.COLOR_BUFFER_BIT;const K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Be=n.get(D),Ee=E.length>1;if(Ee)for(let Fe=0;Fe<E.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ve=D.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Fe]);const he=n.get(E[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,ae,i.NEAREST),c===!0&&(R.length=0,X.length=0,R.push(i.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(R.push(K),X.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Fe=0;Fe<E.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Fe]);const he=n.get(E[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function oe(D){return Math.min(s.maxSamples,D.samples)}function ce(D){const E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function De(D){const E=o.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function _e(D,E){const H=D.colorSpace,$=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==ds&&H!==Nn&&(ht.getTransfer(H)===ft?($!==vn||ae!==zn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",H)),E}function Ce(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=nt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ce}function Ix(i,e){function t(n,s=Nn){let r;const o=ht.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===Wl)return i.ALPHA;if(n===Xl)return i.RGB;if(n===vn)return i.RGBA;if(n===Hs)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===Va)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===Wa)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===Ya)return i.RGBA_INTEGER;if(n===Rr||n===Pr||n===Dr||n===Lr)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ea||n===ta||n===na||n===ia)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sa||n===ra||n===oa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sa||n===ra)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===xa||n===ga||n===_a||n===va||n===Ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===aa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ca)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ha)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ma)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===ba||n===Sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ya)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wa||n===Ea||n===Ta||n===Aa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new sh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:Ux,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new N(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ox extends Li{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,x=null;const g=typeof XRWebGLBinding<"u",m=new Fx,p={},_=t.getContextAttributes();let v=null,M=null;const w=[],S=[],T=new le;let P=null;const y=new dn;y.viewport=new mt;const b=new dn;b.viewport=new mt;const C=[y,b],I=new Qd;let z=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=w[Y];return J===void 0&&(J=new Mo,w[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=w[Y];return J===void 0&&(J=new Mo,w[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=w[Y];return J===void 0&&(J=new Mo,w[Y]=J),J.getHandSpace()};function U(Y){const J=S.indexOf(Y.inputSource);if(J===-1)return;const pe=w[J];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,l||o),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<w.length;Y++){const J=S[Y];J!==null&&(S[Y]=null,w[Y].disconnect(J))}z=null,B=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(v),d=null,f=null,u=null,s=null,M=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,be=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=_.stencil?Ws:Hs,be=_.stencil?Vs:Ci);const Oe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ri(f.textureWidth,f.textureHeight,{format:vn,type:zn,depthTexture:new ih(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ri(d.framebufferWidth,d.framebufferHeight,{format:vn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Y){for(let J=0;J<Y.removed.length;J++){const pe=Y.removed[J],be=S.indexOf(pe);be>=0&&(S[be]=null,w[be].disconnect(pe))}for(let J=0;J<Y.added.length;J++){const pe=Y.added[J];let be=S.indexOf(pe);if(be===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=S.length){S.push(pe),be=Oe;break}else if(S[Oe]===null){S[Oe]=pe,be=Oe;break}if(be===-1)break}const ve=w[be];ve&&ve.connect(pe)}}const W=new L,Q=new L;function te(Y,J,pe){W.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const be=W.distanceTo(Q),ve=J.projectionMatrix.elements,Oe=pe.projectionMatrix.elements,nt=ve[14]/(ve[10]-1),ze=ve[14]/(ve[10]+1),ee=(ve[9]+1)/ve[5],R=(ve[9]-1)/ve[5],X=(ve[8]-1)/ve[0],j=(Oe[8]+1)/Oe[0],oe=nt*X,ce=nt*j,De=be/(-X+j),_e=De*-X;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_e),Y.translateZ(De),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ce=nt+De,D=ze+De,E=oe-_e,H=ce+(be-_e),$=ee*ze/D*Ce,ae=R*ze/D*Ce;Y.projectionMatrix.makePerspective(E,H,$,ae,Ce,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Se(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,pe=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),I.near=b.near=y.near=J,I.far=b.far=y.far=pe,(z!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,B=I.far),I.layers.mask=Y.layers.mask|6,y.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const be=Y.parent,ve=I.cameras;Se(I,be);for(let Oe=0;Oe<ve.length;Oe++)Se(ve[Oe],be);ve.length===2?te(I,y,b):I.projectionMatrix.copy(y.projectionMatrix),Ge(Y,I,be)};function Ge(Y,J,pe){pe===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ys*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Y){return p[Y]};let ne=null;function we(Y,J){if(h=J.getViewerPose(l||o),x=J,h!==null){const pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let be=!1;pe.length!==I.cameras.length&&(I.cameras.length=0,be=!0);for(let ze=0;ze<pe.length;ze++){const ee=pe[ze];let R=null;if(d!==null)R=d.getViewport(ee);else{const j=u.getViewSubImage(f,ee);R=j.viewport,ze===0&&(e.setRenderTargetTextures(M,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(M))}let X=C[ze];X===void 0&&(X=new dn,X.layers.enable(ze),X.viewport=new mt,C[ze]=X),X.matrix.fromArray(ee.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(ee.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(R.x,R.y,R.width,R.height),ze===0&&(I.matrix.copy(X.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),be===!0&&I.cameras.push(X)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const ze=u.getDepthInformation(pe[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,s.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let ze=0;ze<pe.length;ze++){const ee=pe[ze].camera;if(ee){let R=p[ee];R||(R=new sh,p[ee]=R);const X=u.getCameraImage(ee);R.sourceTexture=X}}}}for(let pe=0;pe<w.length;pe++){const be=S[pe],ve=w[pe];be!==null&&ve!==void 0&&ve.update(be,J,l||o)}ne&&ne(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}const fe=new xh;fe.setAnimationLoop(we),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const bi=new Sn,zx=new at;function Bx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,eh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),v=_.envMap,M=_.envMapRotation;v&&(m.envMap.value=v,bi.copy(M),bi.x*=-1,bi.y*=-1,bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(zx.makeRotationFromEuler(bi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){const M=v.program;n.uniformBlockBinding(_,M)}function l(_,v){let M=s[_.id];M===void 0&&(x(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));const w=v.program;n.updateUBOMapping(_,w);const S=e.render.frame;r[_.id]!==S&&(f(_),r[_.id]=S)}function h(_){const v=u();_.__bindingPointIndex=v;const M=i.createBuffer(),w=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=s[_.id],M=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,T=M.length;S<T;S++){const P=Array.isArray(M[S])?M[S]:[M[S]];for(let y=0,b=P.length;y<b;y++){const C=P[y];if(d(C,S,y,w)===!0){const I=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let U=0;U<z.length;U++){const F=z[U],G=g(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,I+B,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,B),B+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,v,M,w){const S=_.value,T=v+"_"+M;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:w[T]=S.clone(),!0;{const P=w[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return w[T]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function x(_){const v=_.uniforms;let M=0;const w=16;for(let T=0,P=v.length;T<P;T++){const y=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,C=y.length;b<C;b++){const I=y[b],z=Array.isArray(I.value)?I.value:[I.value];for(let B=0,U=z.length;B<U;B++){const F=z[B],G=g(F),W=M%w,Q=W%G.boundary,te=W+Q;M+=Q,te!==0&&w-te<G.storage&&(M+=w-te),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=G.storage}}}const S=M%w;return S>0&&(M+=w-S),_.__size=M,_.__cache={},this}function g(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}const Gx=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let qn=null;function Vx(){return qn===null&&(qn=new Ka(Gx,32,32,Wa,gs),qn.minFilter=en,qn.magFilter=en,qn.wrapS=Wt,qn.wrapT=Wt,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}class Hx{constructor(e={}){const{canvas:t=Mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const x=new Set([Ya,Xa,Ha]),g=new Set([zn,Ci,Gs,Vs,ka,Ga]),m=new Uint32Array(4),p=new Int32Array(4);let _=null,v=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=Rt;let P=0,y=0,b=null,C=-1,I=null;const z=new mt,B=new mt;let U=null;const F=new me(0);let G=0,W=t.width,Q=t.height,te=1,Se=null,Ge=null;const ne=new mt(0,0,W,Q),we=new mt(0,0,W,Q);let fe=!1;const Y=new $a;let J=!1,pe=!1;const be=new at,ve=new L,Oe=new mt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ee(){return b===null?te:1}let R=n;function X(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),R===null){const k="webgl2";if(R=X(k,A),R===null)throw X(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let j,oe,ce,De,_e,Ce,D,E,H,$,ae,K,Be,Ee,Ve,Fe,he,ge,Ze,Ye,Pe,Ke,O,Ae;function Me(){j=new $p(R),j.init(),Ke=new Ix(R,j),oe=new Vp(R,j,e,Ke),ce=new Dx(R,j),oe.reversedDepthBuffer&&f&&ce.buffers.depth.setReversed(!0),De=new em(R),_e=new _x,Ce=new Lx(R,j,ce,_e,oe,Ke,De),D=new Wp(S),E=new Kp(S),H=new sf(R),O=new kp(R,H),$=new Jp(R,H,De,O),ae=new nm(R,$,H,De),Ze=new tm(R,oe,Ce),Fe=new Hp(_e),K=new gx(S,D,E,j,oe,O,Fe),Be=new Bx(S,_e),Ee=new Mx,Ve=new Tx(j),ge=new Bp(S,D,E,ce,ae,d,c),he=new Rx(S,ae,oe),Ae=new kx(R,De,oe,ce),Ye=new Gp(R,j,De),Pe=new Qp(R,j,De),De.programs=K.programs,S.capabilities=oe,S.extensions=j,S.properties=_e,S.renderLists=Ee,S.shadowMap=he,S.state=ce,S.info=De}Me();const ye=new Ox(S,R);this.xr=ye,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const A=j.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=j.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(W,Q,!1))},this.getSize=function(A){return A.set(W,Q)},this.setSize=function(A,k,q=!0){if(ye.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,Q=k,t.width=Math.floor(A*te),t.height=Math.floor(k*te),q===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(W*te,Q*te).floor()},this.setDrawingBufferSize=function(A,k,q){W=A,Q=k,te=q,t.width=Math.floor(A*q),t.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(ne)},this.setViewport=function(A,k,q,Z){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,k,q,Z),ce.viewport(z.copy(ne).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,k,q,Z){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,k,q,Z),ce.scissor(B.copy(we).multiplyScalar(te).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){ce.setScissorTest(fe=A)},this.setOpaqueSort=function(A){Se=A},this.setTransparentSort=function(A){Ge=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,q=!0){let Z=0;if(A){let V=!1;if(b!==null){const xe=b.texture.format;V=x.has(xe)}if(V){const xe=b.texture.type,Re=g.has(xe),Ne=ge.getClearColor(),Le=ge.getClearAlpha(),qe=Ne.r,je=Ne.g,He=Ne.b;Re?(m[0]=qe,m[1]=je,m[2]=He,m[3]=Le,R.clearBufferuiv(R.COLOR,0,m)):(p[0]=qe,p[1]=je,p[2]=He,p[3]=Le,R.clearBufferiv(R.COLOR,0,p))}else Z|=R.COLOR_BUFFER_BIT}k&&(Z|=R.DEPTH_BUFFER_BIT),q&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ge.dispose(),Ee.dispose(),Ve.dispose(),_e.dispose(),D.dispose(),E.dispose(),ae.dispose(),O.dispose(),Ae.dispose(),K.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ac),ye.removeEventListener("sessionend",cc),mi.stop()};function ue(A){A.preventDefault(),bc("WebGLRenderer: Context Lost."),T=!0}function se(){bc("WebGLRenderer: Context Restored."),T=!1;const A=De.autoReset,k=he.enabled,q=he.autoUpdate,Z=he.needsUpdate,V=he.type;Me(),De.autoReset=A,he.enabled=k,he.autoUpdate=q,he.needsUpdate=Z,he.type=V}function Ue(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Je(A){const k=A.target;k.removeEventListener("dispose",Je),Mt(k)}function Mt(A){ut(A),_e.remove(A)}function ut(A){const k=_e.get(A).programs;k!==void 0&&(k.forEach(function(q){K.releaseProgram(q)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,Z,V,xe){k===null&&(k=nt);const Re=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Rh(A,k,q,Z,V);ce.setMaterial(Z,Re);let Le=q.index,qe=1;if(Z.wireframe===!0){if(Le=$.getWireframeAttribute(q),Le===void 0)return;qe=2}const je=q.drawRange,He=q.attributes.position;let ot=je.start*qe,dt=(je.start+je.count)*qe;xe!==null&&(ot=Math.max(ot,xe.start*qe),dt=Math.min(dt,(xe.start+xe.count)*qe)),Le!==null?(ot=Math.max(ot,0),dt=Math.min(dt,Le.count)):He!=null&&(ot=Math.max(ot,0),dt=Math.min(dt,He.count));const At=dt-ot;if(At<0||At===1/0)return;O.setup(V,Z,Ne,q,Le);let Ct,xt=Ye;if(Le!==null&&(Ct=H.get(Le),xt=Pe,xt.setIndex(Ct)),V.isMesh)Z.wireframe===!0?(ce.setLineWidth(Z.wireframeLinewidth*ee()),xt.setMode(R.LINES)):xt.setMode(R.TRIANGLES);else if(V.isLine){let We=Z.linewidth;We===void 0&&(We=1),ce.setLineWidth(We*ee()),V.isLineSegments?xt.setMode(R.LINES):V.isLineLoop?xt.setMode(R.LINE_LOOP):xt.setMode(R.LINE_STRIP)}else V.isPoints?xt.setMode(R.POINTS):V.isSprite&&xt.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))xt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const We=V._multiDrawStarts,wt=V._multiDrawCounts,ct=V._multiDrawCount,cn=Le?H.get(Le).bytesPerElement:1,Fi=_e.get(Z).currentProgram.getUniforms();for(let ln=0;ln<ct;ln++)Fi.setValue(R,"_gl_DrawID",ln),xt.render(We[ln]/cn,wt[ln])}else if(V.isInstancedMesh)xt.renderInstances(ot,At,V.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,We);xt.renderInstances(ot,At,wt)}else xt.render(ot,At)};function In(A,k,q){A.transparent===!0&&A.side===_t&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,Qs(A,k,q),A.side=fi,A.needsUpdate=!0,Qs(A,k,q),A.side=_t):Qs(A,k,q)}this.compile=function(A,k,q=null){q===null&&(q=A),v=Ve.get(q),v.init(k),w.push(v),q.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),v.setupLights();const Z=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const Ne=xe[Re];In(Ne,q,V),Z.add(Ne)}else In(xe,q,V),Z.add(xe)}),v=w.pop(),Z},this.compileAsync=function(A,k,q=null){const Z=this.compile(A,k,q);return new Promise(V=>{function xe(){if(Z.forEach(function(Re){_e.get(Re).currentProgram.isReady()&&Z.delete(Re)}),Z.size===0){V(A);return}setTimeout(xe,10)}j.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let En=null;function Ch(A){En&&En(A)}function ac(){mi.stop()}function cc(){mi.start()}const mi=new xh;mi.setAnimationLoop(Ch),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(A){En=A,ye.setAnimationLoop(A),A===null?mi.stop():mi.start()},ye.addEventListener("sessionstart",ac),ye.addEventListener("sessionend",cc),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(k),k=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,k,b),v=Ve.get(A,w.length),v.init(k),w.push(v),be.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(be,On,k.reversedDepth),pe=this.localClippingEnabled,J=Fe.init(this.clippingPlanes,pe),_=Ee.get(A,M.length),_.init(),M.push(_),ye.enabled===!0&&ye.isPresenting===!0){const xe=S.xr.getDepthSensingMesh();xe!==null&&Kr(xe,k,-1/0,S.sortObjects)}Kr(A,k,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(Se,Ge),ze=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ze&&ge.addToRenderList(_,A),this.info.render.frame++,J===!0&&Fe.beginShadows();const q=v.state.shadowsArray;he.render(q,A,k),J===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,V=_.transmissive;if(v.setupLights(),k.isArrayCamera){const xe=k.cameras;if(V.length>0)for(let Re=0,Ne=xe.length;Re<Ne;Re++){const Le=xe[Re];hc(Z,V,A,Le)}ze&&ge.render(A);for(let Re=0,Ne=xe.length;Re<Ne;Re++){const Le=xe[Re];lc(_,A,Le,Le.viewport)}}else V.length>0&&hc(Z,V,A,k),ze&&ge.render(A),lc(_,A,k);b!==null&&y===0&&(Ce.updateMultisampleRenderTarget(b),Ce.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(S,A,k),O.resetDefaultState(),C=-1,I=null,w.pop(),w.length>0?(v=w[w.length-1],J===!0&&Fe.setGlobalState(S.clippingPlanes,v.state.camera)):v=null,M.pop(),M.length>0?_=M[M.length-1]:_=null};function Kr(A,k,q,Z){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){Z&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const Re=ae.update(A),Ne=A.material;Ne.visible&&_.push(A,Re,Ne,q,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Re=ae.update(A),Ne=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Oe.copy(Re.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(Ne)){const Le=Re.groups;for(let qe=0,je=Le.length;qe<je;qe++){const He=Le[qe],ot=Ne[He.materialIndex];ot&&ot.visible&&_.push(A,Re,ot,q,Oe.z,He)}}else Ne.visible&&_.push(A,Re,Ne,q,Oe.z,null)}}const xe=A.children;for(let Re=0,Ne=xe.length;Re<Ne;Re++)Kr(xe[Re],k,q,Z)}function lc(A,k,q,Z){const{opaque:V,transmissive:xe,transparent:Re}=A;v.setupLightsView(q),J===!0&&Fe.setGlobalState(S.clippingPlanes,q),Z&&ce.viewport(z.copy(Z)),V.length>0&&Js(V,k,q),xe.length>0&&Js(xe,k,q),Re.length>0&&Js(Re,k,q),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function hc(A,k,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Z.id]===void 0&&(v.state.transmissionRenderTarget[Z.id]=new Ri(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?gs:zn,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const xe=v.state.transmissionRenderTarget[Z.id],Re=Z.viewport||z;xe.setSize(Re.z*S.transmissionResolutionScale,Re.w*S.transmissionResolutionScale);const Ne=S.getRenderTarget(),Le=S.getActiveCubeFace(),qe=S.getActiveMipmapLevel();S.setRenderTarget(xe),S.getClearColor(F),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear(),ze&&ge.render(q);const je=S.toneMapping;S.toneMapping=ui;const He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),v.setupLightsView(Z),J===!0&&Fe.setGlobalState(S.clippingPlanes,Z),Js(A,q,Z),Ce.updateMultisampleRenderTarget(xe),Ce.updateRenderTargetMipmap(xe),j.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let dt=0,At=k.length;dt<At;dt++){const Ct=k[dt],{object:xt,geometry:We,material:wt,group:ct}=Ct;if(wt.side===_t&&xt.layers.test(Z.layers)){const cn=wt.side;wt.side=tn,wt.needsUpdate=!0,uc(xt,q,Z,We,wt,ct),wt.side=cn,wt.needsUpdate=!0,ot=!0}}ot===!0&&(Ce.updateMultisampleRenderTarget(xe),Ce.updateRenderTargetMipmap(xe))}S.setRenderTarget(Ne,Le,qe),S.setClearColor(F,G),He!==void 0&&(Z.viewport=He),S.toneMapping=je}function Js(A,k,q){const Z=k.isScene===!0?k.overrideMaterial:null;for(let V=0,xe=A.length;V<xe;V++){const Re=A[V],{object:Ne,geometry:Le,group:qe}=Re;let je=Re.material;je.allowOverride===!0&&Z!==null&&(je=Z),Ne.layers.test(q.layers)&&uc(Ne,k,q,Le,je,qe)}}function uc(A,k,q,Z,V,xe){A.onBeforeRender(S,k,q,Z,V,xe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(S,k,q,Z,A,xe),V.transparent===!0&&V.side===_t&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,S.renderBufferDirect(q,k,Z,V,A,xe),V.side=fi,V.needsUpdate=!0,S.renderBufferDirect(q,k,Z,V,A,xe),V.side=_t):S.renderBufferDirect(q,k,Z,V,A,xe),A.onAfterRender(S,k,q,Z,V,xe)}function Qs(A,k,q){k.isScene!==!0&&(k=nt);const Z=_e.get(A),V=v.state.lights,xe=v.state.shadowsArray,Re=V.state.version,Ne=K.getParameters(A,V.state,xe,k,q),Le=K.getProgramCacheKey(Ne);let qe=Z.programs;Z.environment=A.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(A.isMeshStandardMaterial?E:D).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",Je),qe=new Map,Z.programs=qe);let je=qe.get(Le);if(je!==void 0){if(Z.currentProgram===je&&Z.lightsStateVersion===Re)return fc(A,Ne),je}else Ne.uniforms=K.getUniforms(A),A.onBeforeCompile(Ne,S),je=K.acquireProgram(Ne,Le),qe.set(Le,je),Z.uniforms=Ne.uniforms;const He=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Fe.uniform),fc(A,Ne),Z.needsLights=Dh(A),Z.lightsStateVersion=Re,Z.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=je,Z.uniformsList=null,je}function dc(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Ir.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function fc(A,k){const q=_e.get(A);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Rh(A,k,q,Z,V){k.isScene!==!0&&(k=nt),Ce.resetTextureUnits();const xe=k.fog,Re=Z.isMeshStandardMaterial?k.environment:null,Ne=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ds,Le=(Z.isMeshStandardMaterial?E:D).get(Z.envMap||Re),qe=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let At=ui;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(At=S.toneMapping);const Ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=Ct!==void 0?Ct.length:0,We=_e.get(Z),wt=v.state.lights;if(J===!0&&(pe===!0||A!==I)){const Kt=A===I&&Z.id===C;Fe.setState(Z,A,Kt)}let ct=!1;Z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==wt.state.version||We.outputColorSpace!==Ne||V.isBatchedMesh&&We.batching===!1||!V.isBatchedMesh&&We.batching===!0||V.isBatchedMesh&&We.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&We.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&We.instancing===!1||!V.isInstancedMesh&&We.instancing===!0||V.isSkinnedMesh&&We.skinning===!1||!V.isSkinnedMesh&&We.skinning===!0||V.isInstancedMesh&&We.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&We.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&We.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&We.instancingMorph===!1&&V.morphTexture!==null||We.envMap!==Le||Z.fog===!0&&We.fog!==xe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Fe.numPlanes||We.numIntersection!==Fe.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==je||We.morphTargets!==He||We.morphNormals!==ot||We.morphColors!==dt||We.toneMapping!==At||We.morphTargetsCount!==xt)&&(ct=!0):(ct=!0,We.__version=Z.version);let cn=We.currentProgram;ct===!0&&(cn=Qs(Z,k,V));let Fi=!1,ln=!1,bs=!1;const Et=cn.getUniforms(),sn=We.uniforms;if(ce.useProgram(cn.program)&&(Fi=!0,ln=!0,bs=!0),Z.id!==C&&(C=Z.id,ln=!0),Fi||I!==A){ce.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Et.setValue(R,"projectionMatrix",A.projectionMatrix),Et.setValue(R,"viewMatrix",A.matrixWorldInverse);const rn=Et.map.cameraPosition;rn!==void 0&&rn.setValue(R,ve.setFromMatrixPosition(A.matrixWorld)),oe.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Et.setValue(R,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,ln=!0,bs=!0)}if(V.isSkinnedMesh){Et.setOptional(R,V,"bindMatrix"),Et.setOptional(R,V,"bindMatrixInverse");const Kt=V.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Et.setValue(R,"boneTexture",Kt.boneTexture,Ce))}V.isBatchedMesh&&(Et.setOptional(R,V,"batchingTexture"),Et.setValue(R,"batchingTexture",V._matricesTexture,Ce),Et.setOptional(R,V,"batchingIdTexture"),Et.setValue(R,"batchingIdTexture",V._indirectTexture,Ce),Et.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&Et.setValue(R,"batchingColorTexture",V._colorsTexture,Ce));const mn=q.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Ze.update(V,q,cn),(ln||We.receiveShadow!==V.receiveShadow)&&(We.receiveShadow=V.receiveShadow,Et.setValue(R,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(sn.envMap.value=Le,sn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(sn.envMapIntensity.value=k.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=Vx()),ln&&(Et.setValue(R,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&Ph(sn,bs),xe&&Z.fog===!0&&Be.refreshFogUniforms(sn,xe),Be.refreshMaterialUniforms(sn,Z,te,Q,v.state.transmissionRenderTarget[A.id]),Ir.upload(R,dc(We),sn,Ce)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ir.upload(R,dc(We),sn,Ce),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Et.setValue(R,"center",V.center),Et.setValue(R,"modelViewMatrix",V.modelViewMatrix),Et.setValue(R,"normalMatrix",V.normalMatrix),Et.setValue(R,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Kt=Z.uniformsGroups;for(let rn=0,$r=Kt.length;rn<$r;rn++){const xi=Kt[rn];Ae.update(xi,cn),Ae.bind(xi,cn)}}return cn}function Ph(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Dh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,k,q){const Z=_e.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),_e.get(A.texture).__webglTexture=k,_e.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const q=_e.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Lh=R.createFramebuffer();this.setRenderTarget=function(A,k=0,q=0){b=A,P=k,y=q;let Z=!0,V=null,xe=!1,Re=!1;if(A){const Le=_e.get(A);if(Le.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(R.FRAMEBUFFER,null),Z=!1;else if(Le.__webglFramebuffer===void 0)Ce.setupRenderTarget(A);else if(Le.__hasExternalTextures)Ce.rebindTextures(A,_e.get(A.texture).__webglTexture,_e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Le.__boundDepthTexture!==He){if(He!==null&&_e.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Re=!0);const je=_e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[k])?V=je[k][q]:V=je[k],xe=!0):A.samples>0&&Ce.useMultisampledRTT(A)===!1?V=_e.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?V=je[q]:V=je,z.copy(A.viewport),B.copy(A.scissor),U=A.scissorTest}else z.copy(ne).multiplyScalar(te).floor(),B.copy(we).multiplyScalar(te).floor(),U=fe;if(q!==0&&(V=Lh),ce.bindFramebuffer(R.FRAMEBUFFER,V)&&Z&&ce.drawBuffers(A,V),ce.viewport(z),ce.scissor(B),ce.setScissorTest(U),xe){const Le=_e.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,q)}else if(Re){const Le=k;for(let qe=0;qe<A.textures.length;qe++){const je=_e.get(A.textures[qe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+qe,je.__webglTexture,q,Le)}}else if(A!==null&&q!==0){const Le=_e.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Le.__webglTexture,q)}C=-1},this.readRenderTargetPixels=function(A,k,q,Z,V,xe,Re,Ne=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){ce.bindFramebuffer(R.FRAMEBUFFER,Le);try{const qe=A.textures[Ne],je=qe.format,He=qe.type;if(!oe.textureFormatReadable(je)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(He)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Z&&q>=0&&q<=A.height-V&&(A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ne),R.readPixels(k,q,Z,V,Ke.convert(je),Ke.convert(He),xe))}finally{const qe=b!==null?_e.get(b).__webglFramebuffer:null;ce.bindFramebuffer(R.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,k,q,Z,V,xe,Re,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(k>=0&&k<=A.width-Z&&q>=0&&q<=A.height-V){ce.bindFramebuffer(R.FRAMEBUFFER,Le);const qe=A.textures[Ne],je=qe.format,He=qe.type;if(!oe.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ot),R.bufferData(R.PIXEL_PACK_BUFFER,xe.byteLength,R.STREAM_READ),A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ne),R.readPixels(k,q,Z,V,Ke.convert(je),Ke.convert(He),0);const dt=b!==null?_e.get(b).__webglFramebuffer:null;ce.bindFramebuffer(R.FRAMEBUFFER,dt);const At=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await yu(R,At,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ot),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,xe),R.deleteBuffer(ot),R.deleteSync(At),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,q=0){const Z=Math.pow(2,-q),V=Math.floor(A.image.width*Z),xe=Math.floor(A.image.height*Z),Re=k!==null?k.x:0,Ne=k!==null?k.y:0;Ce.setTexture2D(A,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,Re,Ne,V,xe),ce.unbindTexture()};const Ih=R.createFramebuffer(),Uh=R.createFramebuffer();this.copyTextureToTexture=function(A,k,q=null,Z=null,V=0,xe=null){xe===null&&(V!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=V,V=0):xe=0);let Re,Ne,Le,qe,je,He,ot,dt,At;const Ct=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(q!==null)Re=q.max.x-q.min.x,Ne=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,qe=q.min.x,je=q.min.y,He=q.isBox3?q.min.z:0;else{const mn=Math.pow(2,-V);Re=Math.floor(Ct.width*mn),Ne=Math.floor(Ct.height*mn),A.isDataArrayTexture?Le=Ct.depth:A.isData3DTexture?Le=Math.floor(Ct.depth*mn):Le=1,qe=0,je=0,He=0}Z!==null?(ot=Z.x,dt=Z.y,At=Z.z):(ot=0,dt=0,At=0);const xt=Ke.convert(k.format),We=Ke.convert(k.type);let wt;k.isData3DTexture?(Ce.setTexture3D(k,0),wt=R.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ce.setTexture2DArray(k,0),wt=R.TEXTURE_2D_ARRAY):(Ce.setTexture2D(k,0),wt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,k.unpackAlignment);const ct=R.getParameter(R.UNPACK_ROW_LENGTH),cn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Fi=R.getParameter(R.UNPACK_SKIP_PIXELS),ln=R.getParameter(R.UNPACK_SKIP_ROWS),bs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ct.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ct.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,qe),R.pixelStorei(R.UNPACK_SKIP_ROWS,je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,He);const Et=A.isDataArrayTexture||A.isData3DTexture,sn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const mn=_e.get(A),Kt=_e.get(k),rn=_e.get(mn.__renderTarget),$r=_e.get(Kt.__renderTarget);ce.bindFramebuffer(R.READ_FRAMEBUFFER,rn.__webglFramebuffer),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let xi=0;xi<Le;xi++)Et&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(A).__webglTexture,V,He+xi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(k).__webglTexture,xe,At+xi)),R.blitFramebuffer(qe,je,Re,Ne,ot,dt,Re,Ne,R.DEPTH_BUFFER_BIT,R.NEAREST);ce.bindFramebuffer(R.READ_FRAMEBUFFER,null),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||_e.has(A)){const mn=_e.get(A),Kt=_e.get(k);ce.bindFramebuffer(R.READ_FRAMEBUFFER,Ih),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,Uh);for(let rn=0;rn<Le;rn++)Et?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,mn.__webglTexture,V,He+rn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,mn.__webglTexture,V),sn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Kt.__webglTexture,xe,At+rn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Kt.__webglTexture,xe),V!==0?R.blitFramebuffer(qe,je,Re,Ne,ot,dt,Re,Ne,R.COLOR_BUFFER_BIT,R.NEAREST):sn?R.copyTexSubImage3D(wt,xe,ot,dt,At+rn,qe,je,Re,Ne):R.copyTexSubImage2D(wt,xe,ot,dt,qe,je,Re,Ne);ce.bindFramebuffer(R.READ_FRAMEBUFFER,null),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else sn?A.isDataTexture||A.isData3DTexture?R.texSubImage3D(wt,xe,ot,dt,At,Re,Ne,Le,xt,We,Ct.data):k.isCompressedArrayTexture?R.compressedTexSubImage3D(wt,xe,ot,dt,At,Re,Ne,Le,xt,Ct.data):R.texSubImage3D(wt,xe,ot,dt,At,Re,Ne,Le,xt,We,Ct):A.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,xe,ot,dt,Re,Ne,xt,We,Ct.data):A.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,xe,ot,dt,Ct.width,Ct.height,xt,Ct.data):R.texSubImage2D(R.TEXTURE_2D,xe,ot,dt,Re,Ne,xt,We,Ct);R.pixelStorei(R.UNPACK_ROW_LENGTH,ct),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,cn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fi),R.pixelStorei(R.UNPACK_SKIP_ROWS,ln),R.pixelStorei(R.UNPACK_SKIP_IMAGES,bs),xe===0&&k.generateMipmaps&&R.generateMipmap(wt),ce.unbindTexture()},this.initRenderTarget=function(A){_e.get(A).__webglFramebuffer===void 0&&Ce.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ce.setTextureCube(A,0):A.isData3DTexture?Ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ce.setTexture2DArray(A,0):Ce.setTexture2D(A,0),ce.unbindTexture()},this.resetState=function(){P=0,y=0,b=null,ce.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const wl={type:"change"},sc={type:"start"},yh={type:"end"},Tr=new ja,El=new ai,Wx=Math.cos(70*Ca.DEG2RAD),Nt=new L,on=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lo=1e-6;class Xx extends tf{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new bn,this._lastTargetPosition=new L,this._quat=new bn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new el,this._sphericalDelta=new el,this._scale=1,this._panOffset=new L,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new L,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qx.bind(this),this._onPointerDown=Yx.bind(this),this._onPointerUp=Zx.bind(this),this._onContextMenu=tg.bind(this),this._onMouseWheel=$x.bind(this),this._onKeyDown=Jx.bind(this),this._onTouchStart=Qx.bind(this),this._onTouchMove=eg.bind(this),this._onMouseDown=jx.bind(this),this._onMouseMove=Kx.bind(this),this._interceptControlDown=ng.bind(this),this._interceptControlUp=ig.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wl),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Tr.origin.copy(this.object.position),Tr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tr.direction))<Wx?this.object.lookAt(this.target):(El.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tr.intersectPlane(El,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lo||this._lastTargetPosition.distanceToSquared(this.target)>Lo?(this.dispatchEvent(wl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Nt.copy(s).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Yx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function qx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Zx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yh),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pt.DOLLY;break;case as.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}break;case as.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(sc)}function Kx(i){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $x(i){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(i.preventDefault(),this.dispatchEvent(sc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yh))}function Jx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Qx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pt.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pt.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(sc)}function eg(i){switch(this._trackPointer(i),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pt.NONE}}function tg(i){this.enabled!==!1&&i.preventDefault()}function ng(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ig(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ln(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new st;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Tl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let g=0;g<o[h].length;++g)d.push(o[h][g][f]);const x=Tl(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function Tl(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new yt(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<t;x++){const g=h.getComponent(f,x);a.setComponent(f+u,x,g)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const It=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),di=(i,e,t)=>i+(e-i)*t,sg=(i,e,t)=>It((t-i)/(e-i)),ke=(i,e,t)=>{const n=sg(i,e,t);return n*n*(3-2*n)};function rg(i){let e=i>>>0;return function(){e+=1831565813;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function rt(i=1337){const e=rg(i),t=(o,a)=>o+(a-o)*e();return{random:e,range:t,int:(o,a)=>Math.floor(t(o,a+1)),choose:o=>o[Math.floor(e()*o.length)],chance:o=>e()<o}}function Ar(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=(t^t>>>13)*1274126177,t^=t>>>16,(t>>>0)/4294967296}function Mn(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,o=s*s*s*(s*(s*6-15)+10),a=r*r*r*(r*(r*6-15)+10),c=Ar(t,n),l=Ar(t+1,n),h=Ar(t,n+1),u=Ar(t+1,n+1);return di(di(c,l,o),di(h,u,o),a)*2-1}function vt(i,e,t=4,n=2.03,s=.5){let r=.5,o=1,a=0,c=0;for(let l=0;l<t;l++)a+=Mn(i*o,e*o)*r,c+=r,r*=s,o*=n;return a/c}function Bs(i,e,t=4,n=2.1,s=.52){let r=.5,o=1,a=0,c=0;for(let l=0;l<t;l++){const h=1-Math.abs(Mn(i*o,e*o));a+=h*h*r,c+=r,r*=s,o*=n}return a/c}function og(i,e){if(e<=i[0][0])return i[0][1];if(e>=i[i.length-1][0])return i[i.length-1][1];for(let t=0;t<i.length-1;t++){const n=i[t],s=i[t+1];if(e>=n[0]&&e<=s[0]){const r=(e-n[0])/(s[0]-n[0]),o=r*r*(3-2*r);return di(n[1],s[1],o)}}return i[i.length-1][1]}const bt={minX:-44,maxX:44,minZ:-34,maxZ:34,footprintX:43,footprintZ:33,baseY:-8.2},re={tower:{x:-10.8,z:1.65,ground:null},chapel:{x:-1.45,z:5.45,ground:null},bridge:{islandX:6.15,mainlandX:11.72,z:3.1,deckY:2.05,width:1.6},memorial:{x:-15.55,z:4.5},service:{x:-17.3,z:-1.15},path:[[-10.3,2.7],[-8.5,3],[-6.1,3.05],[-3.6,3],[-1.4,3.05],[1,3.25],[2.8,3.65],[4.25,4],[5.35,3.7],[5.85,3.35]],pier:{shore:{x:15.15,z:11.8},end:{x:9.35,z:13.6},y:1.2},beach:{x:13.8,z:10.7},boats:[{kind:"excursion",x:9.1,z:8.5,angle:2.45},{kind:"motor",x:6.85,z:12.1,angle:1.2},{kind:"motor",x:8.4,z:14,angle:2.7},{kind:"motor",x:7.2,z:10,angle:.7}],village:[{x:23.1,z:6.2,angle:-.22,w:3.3,d:2.5,h:2,roof:"terracotta"},{x:25,z:9.4,angle:.28,w:2.9,d:2.3,h:1.9,roof:"terracotta"},{x:22.2,z:12.6,angle:-.12,w:2.5,d:2.1,h:1.8,roof:"grey"},{x:27.6,z:5.9,angle:.55,w:3.1,d:2.5,h:1.95,roof:"terracotta"}],dolphinarium:{x:12.9,z:19.6,hutX:19.8,hutZ:19.4},islandCenter:{x:-12.8,z:1.1},camera:{position:{x:23,y:29.5,z:57},target:{x:-.6,y:4.7,z:4.4},fov:40.5}},Io=[[-28,-1.5,3.7],[-24,-2.7,5.4],[-19.2,-2.2,6.7],[-14.4,-.7,7.2],[-9.5,.9,7.3],[-4.8,2,6.7],[-.6,2.9,5.8],[3,3.6,4.7],[5.4,3.8,3.3]],ag=[[-40,2],[-33,3],[-27,3.6],[-21,4.8],[-15,6.2],[-9,8],[-3,9.8],[3,11.6],[9,13.2],[15,14.7],[21,15.4],[27,15],[34,13.8],[40,12.6]];function bh(i){return 1+.035*Math.sin(i*3+1.55)+.025*Math.sin(i*5+.2)+.016*Math.sin(i*9+2.7)+.009*Math.sin(i*13-1.4)}function cg(i){const e=bh(i);return{x:bt.footprintX*Math.cos(i)*e,z:bt.footprintZ*Math.sin(i)*e}}function ms(i,e,t=0){if(i===0&&e===0)return!0;const n=Math.atan2(e/bt.footprintZ,i/bt.footprintX);return Math.hypot(i/bt.footprintX,e/bt.footprintZ)<=bh(n)-t}function lg(i=160){const e=[];for(let t=0;t<i;t++){const n=t/i*Math.PI*2;e.push(cg(n))}return e}function $s(i){return og(ag,i)}function Sh(i,e){let t=1/0,n=null;const s=1+.095*vt(i*.17+4.7,e*.17-2.3,3)+.035*vt(i*.82-3.1,e*.82+1.7,2);for(let r=0;r<Io.length-1;r++){const o=Io[r],a=Io[r+1],c=a[0]-o[0],l=a[1]-o[1],h=c*c+l*l,u=i-o[0],f=e-o[1],d=It((u*c+f*l)/h),x=o[0]+c*d,g=o[1]+l*d,m=di(o[2],a[2],d)*s,_=Math.hypot(i-x,e-g)-m;_<t&&(t=_,n={cx:x,cz:g,radius:m,t:d,segment:r})}return{signed:t,...n,boundaryNoise:s}}function is(i,e,t,n,s,r,o){const a=(i-t)/s,c=(e-n)/r;return Math.exp(-(a*a+c*c)*2.2)*o}function ts(i,e,t,n,s){const r=1-ke(n,s,t);return di(i,e,r)}function hg(i,e){const t=$s(e),n=i-t;if(n<=0)return null;const s=vt(e*.22+2,1.7,3)*.22,r=Math.max(0,n+s),o=.18+ke(0,6.8,r)*1.15,a=vt(i*.6,e*.6,3)*.12*ke(0,2,r),c=ke(3.1,19,n),l=ke(13,36,n),h=Bs(i*.045+1.2,e*.045-.4,4),u=vt(i*.12-2.1,e*.12+4.2,4);let f=c*(12.3+u*5.5)+l*(8.2+h*5.5);f+=is(i,e,31,-9,12,13,5)*l,f+=is(i,e,25,15,9,10,3.2)*ke(8,23,n),f+=is(i,e,20,-23,10,9,4)*ke(8,20,n);let d=o+f+a;const x=ke(-3,3,e)*(1-ke(19,25,e)),g=ke(.2,1.2,n)*(1-ke(7.8,13.5,n)),m=.22+n*.16+vt(i*.4,e*.4,2)*.08;d=di(d,Math.min(d,m),x*g*.88),d=ts(d,1.55,Math.hypot(i-(re.bridge.mainlandX+1.1),e-re.bridge.z),1.3,4.3);const p=is(i,e,17.8,20.2,5.2,4.1,1);return d-=p*1.45*ke(.1,1.2,p),Math.max(.06,d)}function ug(i,e,t=Sh(i,e)){const n=t.signed;if(n>=0)return null;const s=-n,r=vt(i*.29+8.4,e*.29-2.6,4),o=Bs(i*.58-2.2,e*.58+5.1,3),a=ke(-30,-6,i)*.55,c=ke(-1,5,e),l=di(2.65,1.25,c)+.32*vt(i*.5,e*.5,2),h=ke(.04,l+.25,s);let u=5.55+a+r*.62+o*.22;u+=is(i,e,-23.5,-1.8,5.2,4.2,.8),u+=is(i,e,-8,3.2,4,3.3,.45),u*=.82+.18*ke(4.5,-10,i);let f=u*h;const d=Math.exp(-Math.pow((s-1.35)/.95,2))*.28*(.4+o);f+=d;const x=ke(.04,.4,s)*(1-ke(1.9,5.5,s)),g=Bs(i*.95+3.7,e*.95-7.1,3)-.45,m=Bs(i*2.15-1.6,e*2.15+3.8,3)-.5,p=vt(i*2.35-1.8,e*2.35+6.4,2);f+=g*x*.92,f+=m*x*.24,f+=p*.16*ke(.03,.35,s)*(1-ke(3.2,5.3,s));const _=Math.sin(s*6.4+r*4.2+o*3)*.055;f+=_*ke(.35,1,s)*(1-ke(2,3.7,s));const v=Math.exp(-Math.pow((i+14.5)/1.15,2)-Math.pow((e-5)/6.2,2)),M=Math.exp(-Math.pow((i+23.5)/.9,2)-Math.pow((e+1.2)/4.6,2));f-=(v*.85+M*.52)*ke(.35,1.8,s)*(1-ke(2.8,4.9,s));const w=Math.hypot(i-re.tower.x,e-re.tower.z);f=ts(f,6.5,w,3.5,5.8);const S=Math.hypot(i-re.memorial.x,e-re.memorial.z);f=ts(f,6.45,S,2.4,4.5);const T=Math.hypot(i-re.chapel.x,e-re.chapel.z);f=ts(f,4.05,T,1.8,3.7);const P=Math.hypot(i-5.7,e-re.bridge.z);f=ts(f,1.9,P,1,3.2);const y=Math.hypot(i-re.service.x,e-re.service.z);return f=ts(f,6.25,y,2.3,4.8),Math.max(.02,f)}function dg(i,e,t,n){const s=Math.max(0,t.signed),r=n<0?-n:Math.max(0,n),o=ke(2,7,e)*(1-ke(17,25,e))*ke(3,10,i),a=Math.exp(-Math.pow((i-8.7)/4.5,2))*Math.exp(-Math.pow((e-re.bridge.z)/7.2,2)),c=vt(i*.18+3.7,e*.18-1.4,4)*.35,l=Bs(i*.35,e*.35,3)*.25,h=.24+1.13*s+.075*s*s,u=.17+.3*r+.055*r*r;let f=Math.min(h,u);return f*=1-o*.3,f*=1-a*.16,f+=(c+l)*.22,f+=ke(22,38,Math.abs(i)+Math.abs(e)*.4)*.35,f=It(f,.34,7.4),-f}function pn(i,e){const t=Sh(i,e),n=i-$s(e),s=t.signed<0,r=!s&&n>0;let o=null;return s?o=ug(i,e,t):r&&(o=hg(i,e)),{x:i,z:e,islandInfo:t,islandDistance:t.signed,mainlandInland:n,isIsland:s,isMainland:r,height:o===null?dg(i,e,t,n):o,landHeight:o}}function Lt(i,e){return pn(i,e).height}function gn(i,e){return Math.max(0,Lt(i,e))}function fg(){re.tower.ground=gn(re.tower.x,re.tower.z),re.chapel.ground=gn(re.chapel.x,re.chapel.z),re.memorial.ground=gn(re.memorial.x,re.memorial.z),re.service.ground=gn(re.service.x,re.service.z);const i=gn(re.pier.shore.x,re.pier.shore.z);return re.pier.y=Math.max(1.15,i+.25),re}const Uo=256,No=200,lt={limestone:new me("#ab9f88"),limestoneLight:new me("#c3b49a"),limestonePale:new me("#b5aa94"),marl:new me("#77776d"),marlDark:new me("#61645d"),ochre:new me("#987f62"),rust:new me("#7c654f"),pebble:new me("#b6aa94"),pebbleDark:new me("#8e8573"),pebbleLight:new me("#d0c4ad"),sand:new me("#c3b698"),dryGrass:new me("#9d925e"),dryGrassPale:new me("#b4a878"),olive:new me("#6d714c"),deepGreen:new me("#3f4c34"),juniper:new me("#303f31"),seabedLight:new me("#919382"),seabedDeep:new me("#4a5d58"),seagrass:new me("#445239"),algae:new me("#5a4d34"),wetRock:new me("#6c6a5c"),soil:new me("#5b513f"),waterEdge:new me("#234b55"),seabedTint:new me("#213c3b")};function pg(i){const n=document.createElement("canvas");n.width=1024,n.height=768;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,1024,768),s.fillStyle="#fff",s.beginPath(),i.forEach(({x:o,z:a},c)=>{const l=(o-bt.minX)/(bt.maxX-bt.minX)*1024,h=(1-(a-bt.minZ)/(bt.maxZ-bt.minZ))*768;c===0?s.moveTo(l,h):s.lineTo(l,h)}),s.closePath(),s.fill();const r=new kn(n);return r.colorSpace=Nn,r.wrapS=Wt,r.wrapT=Wt,r.minFilter=en,r.magFilter=en,r.generateMipmaps=!1,r.needsUpdate=!0,r}function mg(i,e,t,n){const s=Math.max(0,-i.height),r=vt(e*.47+2.4,t*.47-8.2,3)*.5+.5,o=vt(e*.13-3.1,t*.13+5.6,4)*.5+.5,a=i.isMainland?It(1-i.mainlandInland/9):.28,c=1-ke(.8,3.7,s),l=ke(2.7,6.5,s);n.copy(lt.seabedLight).lerp(lt.pebbleDark,.42+r*.3),n.lerp(lt.sand,a*c*.55),n.lerp(lt.seabedDeep,l*.72),n.lerp(lt.seabedTint,ke(1.2,5.8,s)*.46),n.lerp(lt.wetRock,(1-ke(.3,1.3,s))*.28);const h=ke(.54,.68,o)*(1-ke(3.1,4.7,s))*ke(.35,1.4,s),u=ke(.56,.72,r)*(1-ke(2.2,3.8,s));n.lerp(lt.seagrass,h*.72),n.lerp(lt.algae,u*.55);const f=Mn(e*3.4,t*3.4)*.5+.5;return n.multiplyScalar(.82+f*.13),n}function xg(i,e,t,n,s){const r=i.height,o=1-It(n),a=vt(e*.55+11.2,t*.55-2.7,4)*.5+.5,c=vt(e*.16-5.2,t*.16+9.1,4)*.5+.5,l=vt(e*1.35+2.1,t*1.35+4.4,3)*.5+.5,h=i.isMainland?(1-ke(2.2,7.7,Math.max(0,i.mainlandInland)))*ke(-4.2,1.2,t)*(1-ke(17.5,22.5,t)):0;if(i.isIsland){const g=ke(.24,.48,o+a*.09),m=lt.limestone.clone().lerp(lt.marl,.28+a*.32),p=lt.dryGrass.clone().lerp(lt.dryGrassPale,a*.6);return p.lerp(lt.olive,ke(.55,.85,l)*.3),s.copy(p).lerp(m,g*.65+a*.08),s.lerp(lt.pebble,ke(.35,.75,1-r/6)*.36),s.lerp(lt.juniper,ke(.69,.86,c)*.18),s.lerp(lt.wetRock,(1-ke(.05,.55,r))*.55),s.multiplyScalar(.94+l*.11),s}if(h>.15)return s.copy(lt.pebble).lerp(lt.pebbleDark,a*.58).lerp(lt.pebbleLight,c*.25),s.lerp(lt.olive,(1-h)*.28),s.lerp(lt.wetRock,(1-ke(.05,.5,r))*.45),s;const u=lt.deepGreen.clone().lerp(lt.juniper,a*.5);u.lerp(lt.olive,c*.36);const f=lt.dryGrass.clone().lerp(lt.dryGrassPale,a*.55),d=lt.limestone.clone().lerp(lt.marl,.4+a*.5),x=ke(.3,.72,c+a*.2);return s.copy(u).lerp(f,x*.44),s.lerp(d,ke(.31,.6,o)*.82),s.lerp(lt.ochre,ke(.64,.84,a)*.14),s.lerp(lt.wetRock,(1-ke(.15,.8,r))*.36),s.multiplyScalar(.9+l*.14),s}function gg(i,e,t){const n=bt.maxX-bt.minX,s=bt.maxZ-bt.minZ,r=Uo+1,o=No+1,a=new Float32Array(r*o*3),c=new Float32Array(r*o*2),l=new Float32Array(r*o*3),h=new Array(r*o);let u=0,f=0;for(let _=0;_<o;_++){const v=_/No,M=bt.minZ+v*s;for(let w=0;w<r;w++){const S=w/Uo,T=bt.minX+S*n,P=pn(T,M);h[u]=P,a[u*3]=T,a[u*3+1]=P.height,a[u*3+2]=M,c[f]=S,c[f+1]=v,u++,f+=2}}const d=[];for(let _=0;_<No;_++)for(let v=0;v<Uo;v++){const M=_*r+v,w=M+1,S=M+r,T=S+1;d.push(M,S,w,w,S,T)}const x=new st;x.setAttribute("position",new yt(a,3)),x.setAttribute("uv",new yt(c,2)),x.setIndex(d),x.computeVertexNormals();const g=x.getAttribute("normal");for(let _=0;_<h.length;_++){const v=h[_],M=g.getY(_),w=a[_*3],S=a[_*3+2],T=v.height<-.02?mg(v,w,S,new me):xg(v,w,S,M,new me);l[_*3]=T.r,l[_*3+1]=T.g,l[_*3+2]=T.b}x.setAttribute("color",new yt(l,3)),x.computeBoundingSphere();const m=new ie({color:16777215,vertexColors:!0,roughness:.97,metalness:0,flatShading:!0,alphaMap:i,alphaTest:.48,normalMap:e.detailNormal,normalScale:new le(.55,.55),map:null});m.normalMap.wrapS=Xt,m.normalMap.wrapT=Xt,m.normalMap.repeat.set(1,1),m.onBeforeCompile=_=>{_.uniforms.uTime=t.timeUniform,_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vWorldPosDetail;
        varying vec3 vWorldNormalDetail;
        float tHash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }
        float tNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f*f*(3.0-2.0*f);
          return mix(mix(tHash(i), tHash(i+vec2(1.0,0.0)), f.x),
                     mix(tHash(i+vec2(0.0,1.0)), tHash(i+vec2(1.0,1.0)), f.x), f.y);
        }
        float tFbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for(int i=0; i<4; i++) {
            v += a * tNoise(p);
            p = p * 2.04 + vec2(13.1, 7.7);
            a *= 0.5;
          }
          return v;
        }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float cliffness = smoothstep(0.28, 0.78, 1.0 - clamp(objectNormal.y, 0.0, 1.0));
        vec2 tp = transformed.xz;
        float cragMacro = tFbm(vec2(tp.x * 0.7 + transformed.y * 0.18, tp.y * 0.7 - transformed.y * 0.14) + vec2(3.4, -2.1));
        float cragRidge = 1.0 - abs(tFbm(vec2(tp.x * 1.8 - transformed.y * 0.24, tp.y * 1.8 + transformed.y * 0.19) - vec2(7.2, 1.9)) * 2.0 - 1.0);
        float cragFine = tNoise(tp * 4.4 + vec2(transformed.y * 0.9, -3.1 + transformed.y * 0.6));
        float cragDisp = (cragMacro - 0.5) * 0.34 + (cragRidge - 0.48) * 0.2 + (cragFine - 0.5) * 0.06;
        transformed += objectNormal * cragDisp * cliffness;
        transformed.y += (cragMacro - 0.5) * 0.16 * cliffness;
        vWorldPosDetail = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vWorldNormalDetail = normalize(mat3(modelMatrix) * objectNormal);`),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWorldPosDetail;
        varying vec3 vWorldNormalDetail;
        uniform float uTime;
        float hash21(vec2 p) {
          p = fract(p * vec2(123.34, 345.45));
          p += dot(p, p + 34.345);
          return fract(p.x * p.y);
        }
        float vNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f*f*(3.0-2.0*f);
          return mix(mix(hash21(i), hash21(i+vec2(1.0,0.0)), f.x),
                     mix(hash21(i+vec2(0.0,1.0)), hash21(i+vec2(1.0,1.0)), f.x), f.y);
        }
        float detailFbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for(int i=0; i<4; i++) {
            v += a * vNoise(p);
            p = p * 2.03 + vec2(17.3, 9.2);
            a *= 0.5;
          }
          return v;
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 wp = vWorldPosDetail;
        float fineN = detailFbm(wp.xz * 2.6 + 4.2);
        float macroN = detailFbm(wp.xz * 0.33 - 2.6);
        float slope = 1.0 - clamp(vWorldNormalDetail.y, 0.0, 1.0);
        float layered = 0.5 + 0.5 * sin((wp.y * 2.9 + wp.x * 0.22 - wp.z * 0.11) + fineN * 2.1);
        float bandMask = smoothstep(0.44, 0.7, detailFbm(wp.xz * 0.64 + 11.3));
        float paleBand = smoothstep(0.24, 0.7, slope) * smoothstep(0.36, 0.76, layered) * mix(0.25, 1.0, bandMask);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.14, 1.06, 0.9) + vec3(0.015, 0.011, 0.004), paleBand * 0.36);
        float marlBand = smoothstep(0.36, 0.64, 1.0 - layered) * smoothstep(0.18, 0.62, slope) * bandMask;
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.13, 0.145, 0.135), marlBand * 0.5);
        float seam = smoothstep(0.9, 1.0, 0.5 + 0.5 * sin((wp.y * 5.4 + wp.x * 0.31 - wp.z * 0.15) + fineN * 4.4 + macroN * 2.2));
        seam *= mix(0.2, 1.0, bandMask) * smoothstep(0.24, 0.72, slope);
        diffuseColor.rgb *= 1.0 - seam * 0.24;
        float ochrePatch = smoothstep(0.48, 0.8, detailFbm(wp.xz * 0.42 - 7.1));
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.06, 0.98, 0.84), ochrePatch * smoothstep(0.2, 0.7, slope) * 0.3);
        diffuseColor.rgb *= 0.82 + 0.26 * fineN + 0.14 * macroN;
        diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.92,0.94,0.9), diffuseColor.rgb, smoothstep(0.15,0.8,detailFbm(wp.xz*3.0+2.4)));
        float verticalFissure = smoothstep(0.8, 0.95, detailFbm(vec2(wp.x * 6.4 + wp.z * 1.3, wp.z * 6.4 - wp.x * 1.1) + wp.y * 0.22));
        diffuseColor.rgb *= 1.0 - verticalFissure * smoothstep(0.26, 0.8, slope) * 0.38;
        float dampAlgae = (1.0 - smoothstep(0.4, 1.8, wp.y)) * smoothstep(0.25, 0.7, slope) * smoothstep(0.35, 0.7, fineN);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.55, 0.7, 0.63), dampAlgae * 0.22);
        float wetShore = 1.0 - smoothstep(0.03, 0.48, wp.y);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.72, 0.82, 0.8), wetShore * 0.35);
        float dryFleck = smoothstep(0.68, 0.86, vNoise(wp.xz * 13.0));
        diffuseColor.rgb += dryFleck * vec3(0.036, 0.031, 0.016) * smoothstep(0.55, 0.92, vWorldNormalDetail.y) * smoothstep(0.1, 0.7, wp.y);
        float crackDark = smoothstep(0.84, 0.97, detailFbm(wp.xz * 5.2 + wp.y * 0.7 + 8.1));
        diffuseColor.rgb *= 1.0 - crackDark * slope * 0.23;
        `).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.56, wetShore * 0.55);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float underwater = 1.0 - smoothstep(-0.08, 0.12, wp.y);
        float causticA = sin(wp.x * 2.35 + uTime * 0.75 + sin(wp.z * 1.17) * 1.6);
        float causticB = sin(wp.z * 2.15 - uTime * 0.57 + sin(wp.x * 1.44) * 1.4);
        float caustic = pow(max(0.0, causticA * causticB * 0.5 + 0.48), 3.0);
        totalEmissiveRadiance += vec3(0.038, 0.064, 0.055) * caustic * underwater * smoothstep(0.15, 0.65, fineN);
        `)},m.customProgramCacheKey=()=>"utrish-terrain-detail-v2";const p=new N(x,m);return p.name="terrain",p.castShadow=!0,p.receiveShadow=!0,p}function _g(i,e=2){let t=i.slice();for(let n=0;n<e;n++){const s=t.slice();for(let r=1;r<t.length-1;r++)s[r]=(t[r-1]+t[r]*2+t[r+1])/4;t=s}return t}function vg(i,e){const t=i.length,n=i.map(({x:U,z:F})=>({x:U,z:F})),s=[0];for(let U=1;U<=t;U++){const F=n[(U-1)%t],G=n[U%t];s.push(s[U-1]+Math.hypot(G.x-F.x,G.z-F.z))}const r=s[s.length-1],o=i.map(({x:U,z:F})=>{const G=Lt(U,F);return G>.12?G:.03}),a=_g(o,2),c=[],l=[],h=[],u=[],f=[],d=[],x=[],g=bt.baseY,m=12.6;for(let U=0;U<t;U++){const F=i[U],G=i[(U+1)%t],W=a[U],Q=a[(U+1)%t],te=s[U]/r*3.05,Se=s[U+1]/r*3.05,Ge=(F.x+G.x)*.5,ne=(F.z+G.z)*.5;let we=Ge,fe=ne;const Y=Math.hypot(we,fe);Y<1e-4?(we=0,fe=1):(we/=Y,fe/=Y);const J=[[F.x,g,F.z,te,g],[G.x,g,G.z,Se,g],[G.x,Q,G.z,Se,Q],[F.x,W,F.z,te,W]],pe=c.length/3;J.forEach(([ee,R,X,j,oe])=>{c.push(ee,R,X),l.push(j,It((oe-g)/m)),h.push(we,0,fe);const ce=.92+.16*(Mn(ee*.08,X*.08)*.5+.5);u.push(ce,ce*.97,ce*.9)}),f.push(pe,pe+2,pe+1,pe,pe+3,pe+2);const ve=W<.4?lt.waterEdge:lt.soil,Oe=ve.clone().multiplyScalar(.9+Mn(U*.33,1.2)*.15),nt=.13,ze=new L(-we,0,-fe);d.push(F.x,W+.035,F.z,G.x,Q+.035,G.z,F.x+ze.x*nt,W+.02,F.z+ze.z*nt,G.x+ze.x*nt,Q+.02,G.z+ze.z*nt),x.push(ve.r,ve.g,ve.b,Oe.r,Oe.g,Oe.b,ve.r*1.12,ve.g*1.08,ve.b*1.03,Oe.r*1.1,Oe.g*1.06,Oe.b*1.02)}const p=new st;p.setAttribute("position",new Ie(c,3)),p.setAttribute("uv",new Ie(l,2)),p.setAttribute("normal",new Ie(h,3)),p.setAttribute("color",new Ie(u,3)),p.setIndex(f),p.computeBoundingSphere();const _=e.geology.map;_.wrapS=Xt,_.wrapT=Wt,_.repeat.set(1,1),e.geology.bumpMap.wrapS=Xt,e.geology.bumpMap.wrapT=Wt,e.geology.bumpMap.repeat.set(1,1);const v=new ie({map:_,bumpMap:e.geology.bumpMap,bumpScale:.12,roughness:.94,metalness:.01,vertexColors:!0}),M=new N(p,v);M.name="cutaway-geology",M.receiveShadow=!0,M.castShadow=!0;const w=new st;w.setAttribute("position",new Ie(d,3)),w.setAttribute("color",new Ie(x,3));const S=[];for(let U=0;U<t;U++){const F=U*4;S.push(F,F+1,F+2,F+2,F+1,F+3)}w.setIndex(S),w.computeVertexNormals();const T=new N(w,new ie({vertexColors:!0,roughness:.9,side:_t}));T.name="cut-edge",T.receiveShadow=!0;const P=new Ms;i.forEach(({x:U,z:F},G)=>{G===0?P.moveTo(U,F):P.lineTo(U,F)}),P.closePath();const y=new Xr(P,24);y.rotateX(Math.PI/2),y.translate(0,g+.02,0);const b=new N(y,new ie({color:3880751,roughness:1,side:_t})),C=rt(12736),I=new ie({color:9011051,map:e.stone,roughness:.98,flatShading:!0}),z=new Xe;for(let U=0;U<7;U++){const F=C.range(.08,.94),G=Math.floor(F*t),W=i[G],Q=i[(G+1)%t],te=Ca.lerp(W.x,Q.x,C.random()),Se=Ca.lerp(W.z,Q.z,C.random()),Ge=C.range(g+1.2,-1.2),ne=C.range(.35,1.2),we=new Ni(ne,0),fe=new N(we,I),Y=Math.atan2(Se,te);fe.position.set(te*.995,Ge,Se*.995),fe.rotation.set(C.range(0,Math.PI),C.range(0,Math.PI),C.range(0,Math.PI)),fe.scale.set(C.range(.5,1.7),C.range(.3,.9),C.range(.3,.8)),fe.userData.outward=Y,z.add(fe)}z.name="embedded-cut-boulders";const B=new Xe;return B.add(M,T,b,z),B.name="cutaway",B}function Mg(i){const e=new Xe;e.name="island-causeway";const t=new Bn(re.path.map(([ne,we])=>new L(ne,0,we)),!1,"centripetal",.35),n=150,s=t.getPoints(n),r=.8,o=[],a=[],c=[],l=[],h=[];for(let ne=0;ne<=n;ne++){const we=s[ne],fe=s[Math.max(0,ne-1)],Y=s[Math.min(n,ne+1)],J=Y.x-fe.x,pe=Y.z-fe.z,be=Math.hypot(J,pe)||1,ve=-pe/be,Oe=J/be,nt=Lt(we.x,we.z),ze=we.x+ve*r,ee=we.z+Oe*r,R=we.x-ve*r,X=we.z-Oe*r,j=Lt(ze,ee),oe=Lt(R,X);o.push({x:ze,z:ee,ground:j}),a.push({x:R,z:X,ground:oe}),c.push({x:we.x,z:we.z,ground:nt}),h.push(Math.max(nt,j,oe)+.11)}const u=h.slice();for(let ne=0;ne<8;ne++){const we=u.slice();for(let fe=1;fe<u.length-1;fe++)we[fe]=(u[fe-1]+u[fe]*2+u[fe+1])*.25;for(let fe=0;fe<u.length;fe++)u[fe]=we[fe]}for(let ne=0;ne<u.length;ne++)l.push(Math.max(u[ne],h[ne]-.005));const f=[],d=[],x=[],g=[],m=[],p=[];let _=0;for(let ne=0;ne<=n;ne++){ne>0&&(_+=s[ne].distanceTo(s[ne-1]));const we=l[ne],fe=o[ne],Y=a[ne];f.push(fe.x,we,fe.z,Y.x,we,Y.z),d.push(0,_/2,1,_/2);const J=Math.min(fe.ground,we-.12)-.16,pe=Math.min(Y.ground,we-.12)-.16;if(g.push(fe.x,we,fe.z,fe.x,J,fe.z),m.push(Y.x,we,Y.z,Y.x,pe,Y.z),ne<n){const be=ne*2;x.push(be,be+2,be+1,be+1,be+2,be+3),p.push(be,be+2,be+1,be+1,be+2,be+3)}}const v=new st;v.setAttribute("position",new Ie(f,3)),v.setAttribute("uv",new Ie(d,2)),v.setIndex(x),v.computeVertexNormals();const M=new ie({color:15919317,map:i.gravel,bumpMap:i.gravelBump,bumpScale:.04,roughness:.98,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),w=new N(v,M);w.name="footpath",w.receiveShadow=!0,w.castShadow=!0,e.add(w);const S=new st;S.setAttribute("position",new Ie(g,3)),S.setIndex(p),S.computeVertexNormals();const T=new st;T.setAttribute("position",new Ie(m,3)),T.setIndex(p),T.computeVertexNormals();const P=new ie({color:12168598,map:i.stone,roughness:.98,flatShading:!0,side:_t}),y=new N(S,P);y.receiveShadow=!0,y.castShadow=!0;const b=new N(T,P);b.receiveShadow=!0,b.castShadow=!0,e.add(y,b);const C=[];for(let ne=4;ne<n-3;ne+=6){const we=l[ne],fe=o[ne],Y=a[ne],J=s[ne+1].x-s[ne-1].x,pe=s[ne+1].z-s[ne-1].z,be=Math.atan2(J,pe);for(const ve of[fe,Y]){const Oe=new de(.2,.16,.5);Oe.translate(0,.06,0),Oe.rotateY(be),Oe.translate(ve.x,we,ve.z),C.push(Oe)}}if(C.length){const ne=new N(Ln(C,!1),new ie({color:14866370,map:i.stone,roughness:.95}));ne.castShadow=!0,ne.receiveShadow=!0,e.add(ne)}const I=new ie({color:10458498,map:i.stone,roughness:.98});for(let ne=8;ne<42;ne+=4){if(Math.abs(l[ne+1]-l[ne])/Math.max(.1,s[ne+1].distanceTo(s[ne]))<.11)continue;const fe=(c[ne].x+o[ne].x+a[ne].x)/3,Y=(c[ne].z+o[ne].z+a[ne].z)/3,J=new N(new de(r*2+.06,.08,.34),I),pe=s[ne+1].x-s[ne].x,be=s[ne+1].z-s[ne].z;J.position.set(fe,l[ne]+.03,Y),J.rotation.y=Math.atan2(pe,be),J.castShadow=!0,J.receiveShadow=!0,e.add(J)}const z=new ie({color:14274751,map:i.concrete,roughness:.96,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),B=new N(new qs(4.45,52),z);B.rotation.x=-Math.PI/2,B.position.set(re.tower.x,re.tower.ground+.065,re.tower.z),B.receiveShadow=!0,e.add(B);const U=new N(new nc(4.4,4.56,52),new ie({color:8288104,roughness:.96,side:_t}));U.rotation.x=-Math.PI/2,U.position.set(re.tower.x,re.tower.ground+.07,re.tower.z),e.add(U);const F=new N(new qs(2.45,36),z);F.rotation.x=-Math.PI/2,F.position.set(re.chapel.x,re.chapel.ground+.06,re.chapel.z),F.receiveShadow=!0,e.add(F);const G=new N(new de(1.25,.22,.42),P);G.position.set(re.chapel.x+1.95,re.chapel.ground+.36,re.chapel.z-.8),G.rotation.y=.25,G.castShadow=!0,G.receiveShadow=!0,e.add(G);const W=new N(new Qe(.055,.07,1.3,6),P);W.position.set(-2.45,Lt(-2.45,3.35)+.65,3.35),W.castShadow=!0,e.add(W);const Q=document.createElement("canvas");Q.width=512,Q.height=160;const te=Q.getContext("2d");te.fillStyle="#274f5d",te.fillRect(0,0,512,160),te.strokeStyle="rgba(236, 229, 211, 0.72)",te.lineWidth=4,te.strokeRect(10,10,492,140),te.fillStyle="#eee7d5",te.textAlign="center",te.textBaseline="middle",te.font='600 38px "Times New Roman", Georgia, serif',te.fillText("МАЯК · ЧАСОВНЯ",256,67),te.font="20px Helvetica, Arial, sans-serif",te.fillStyle="rgba(234, 226, 208, 0.8)",te.fillText("LIGHTHOUSE · CHAPEL",256,112);const Se=new kn(Q);Se.colorSpace=Rt,Se.needsUpdate=!0;const Ge=new N(new de(.86,.3,.055),new ie({color:2576221,roughness:.7,metalness:.2,map:Se}));return Ge.position.set(-2.45,Lt(-2.45,3.35)+1.22,3.35),Ge.rotation.y=.1,e.add(Ge),e}function Fo(i){const e=rt(i),t=new Ni(1,1),n=t.attributes.position,s=new Float32Array(n.array);for(let r=0;r<n.count;r++){const o=s[r*3],a=s[r*3+1],c=s[r*3+2],l=1+Mn(o*2.2+a*.8+i,c*2.4-a*.6)*.17+e.range(-.035,.035);n.setXYZ(r,o*l,a*(.72+e.range(-.1,.18)),c*l)}return t.computeVertexNormals(),t.computeBoundingSphere(),t}function yg(i){const e=new Xe;e.name="shore-rocks";const t=new ie({color:13222061,map:i.stone,bumpMap:i.stone,bumpScale:.055,roughness:.97,metalness:.01,flatShading:!0}),n=[Fo(65),Fo(156),Fo(287)],s=rt(36877),r=[[],[],[]];let o=0;for(;o<9e3&&r.reduce((f,d)=>f+d.length,0)<174;){o++;const f=s.range(-33,8.5),d=s.range(-11,12.8);if(!ms(f,d,.035))continue;const x=pn(f,d);if(!(x.islandDistance>-4.8&&x.islandDistance<4.6)||!(Math.hypot(f-re.tower.x,d-re.tower.z)>6.1&&Math.hypot(f-re.chapel.x,d-re.chapel.z)>4&&Math.hypot(f-5.7,d-re.bridge.z)>2.2))continue;const p=x.height>0,_=.36,v=Math.hypot(Lt(f+_,d)-Lt(f-_,d),Lt(f,d+_)-Lt(f,d-_))/(2*_);if(p&&v>1.15)continue;const M=p?s.range(.16,p&&x.height>3?.82:1.5):s.range(.32,1.85);if(!p&&-x.height>2.1&&s.chance(.7))continue;const w=p?x.height-M*s.range(.08,.3):x.height+M*s.range(.12,.56),S=s.int(0,2);r[S].push({x:f,z:d,y:w,scale:M,rotX:s.range(-.8,.8),rotY:s.range(0,Math.PI*2),rotZ:s.range(-.7,.7),tint:s.range(.62,.94),stretchX:s.range(.65,1.55),stretchY:s.range(.34,.8),stretchZ:s.range(.6,1.3)})}const a=new at,c=new bn,l=new Sn,h=new L,u=new L;return r.forEach((f,d)=>{const x=new Pn(n[d],t,f.length);x.name=`shore-rock-instance-${d}`,x.castShadow=!0,x.receiveShadow=!0,f.forEach((g,m)=>{h.set(g.x,g.y,g.z),l.set(g.rotX,g.rotY,g.rotZ),c.setFromEuler(l),u.set(g.scale*g.stretchX,g.scale*g.stretchY,g.scale*g.stretchZ),a.compose(h,c,u),x.setMatrixAt(m,a),x.setColorAt(m,new me().setRGB(g.tint*.95,g.tint*.97,g.tint*.95))}),x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),x.computeBoundingSphere(),e.add(x)}),e}function bg(i,e){const t=lg(180),n=pg(t),s=new Xe;s.name="terrain-system";const r=gg(n,i,e),o=vg(t,i),a=Mg(i),c=yg(i);return s.add(r,o,a,c),s.userData.maskTexture=n,s.userData.polygon=t,s.userData.terrain=r,{group:s,maskTexture:n,polygon:t,terrain:r,cutaway:o,paths:a,rocks:c}}const Oo=232,zo=184;function Sg(){const i=Oo+1,e=zo+1,t=bt.maxX-bt.minX,n=bt.maxZ-bt.minZ,s=new Float32Array(i*e*3),r=new Float32Array(i*e*2),o=new Float32Array(i*e),a=new Float32Array(i*e),c=new Float32Array(i*e),l=new Float32Array(i*e),h=new Float32Array(i*e),u=[];let f=0;for(let x=0;x<e;x++){const g=x/zo,m=bt.minZ+g*n;for(let p=0;p<i;p++){const _=p/Oo,v=bt.minX+_*t,M=pn(v,m),w=Math.max(0,-M.height),S=Math.exp(-Math.pow((v-10.7)/6.2,2)-Math.pow((m-11.4)/6.4,2)),T=Math.exp(-Math.pow((v-8.75)/2.4,2)-Math.pow((m-3.15)/4.2,2))*(1-ke(.4,4.5,Math.abs(m-3.15))*.4);let P=.2+ke(8.5,-7,v)*.72+ke(8,24,m)*(1-ke(3,12,v))*.27;P-=S*.22,P-=T*.08,P=It(P,.13,1);const y=It(Math.exp(-Math.pow((v-11.6)/5.8,2)-Math.pow((m-11.8)/5.2,2))*.9+S*.4,0,1);s[f*3]=v,s[f*3+1]=0,s[f*3+2]=m,r[f*2]=_,r[f*2+1]=g;const b=Math.max(0,M.islandDistance),C=M.mainlandInland<0?-M.mainlandInland:999;h[f]=M.landHeight!==null?0:Math.min(b,C),o[f]=w,a[f]=P,c[f]=T,l[f]=y,f++}}for(let x=0;x<zo;x++)for(let g=0;g<Oo;g++){const m=x*i+g,p=m+1,_=m+i,v=_+1;u.push(m,_,p,p,_,v)}const d=new st;return d.setAttribute("position",new yt(s,3)),d.setAttribute("uv",new yt(r,2)),d.setAttribute("aDepth",new yt(o,1)),d.setAttribute("aExposure",new yt(a,1)),d.setAttribute("aStrait",new yt(c,1)),d.setAttribute("aBay",new yt(l,1)),d.setAttribute("aShore",new yt(h,1)),d.setIndex(u),d.computeBoundingSphere(),d}const wg=`
  uniform float uTime;
  uniform sampler2D uMask;
  attribute float aDepth;
  attribute float aExposure;
  attribute float aStrait;
  attribute float aBay;
  attribute float aShore;

  varying vec3 vWorldPos;
  varying vec2 vUv;
  varying vec3 vWaveNormal;
  varying float vDepth;
  varying float vExposure;
  varying float vStrait;
  varying float vBay;
  varying float vShore;
  varying float vWaveHeight;
  varying float vShorePulse;

  #define PI 3.14159265359

  float groupEnvelope(float t, vec2 p) {
    float setA = sin(t * 0.235 - p.x * 0.038 - 0.7);
    float setB = sin(t * 0.157 + p.y * 0.044 + 2.1);
    return clamp(0.72 + 0.18 * setA + 0.13 * setB, 0.38, 1.06);
  }

  void main() {
    vUv = uv;
    vec3 p = vec3(position.x, 0.0, position.z);
    float exposure = aExposure;
    float shoreAtten = mix(0.34, 1.0, smoothstep(0.0, 1.8, aDepth));
    float amplitude = (0.11 + 0.89 * exposure) * shoreAtten * groupEnvelope(uTime, p.xz);

    float height = 0.0;
    vec3 normal = vec3(0.0, 1.0, 0.0);

    // Long, overlapping Black Sea swell groups.
    {
      vec2 dir = normalize(vec2(0.95, 0.29));
      float wavelength = 12.8;
      float k = 2.0 * PI / wavelength;
      float phase = dot(p.xz, dir) * k - uTime * 0.83 + 0.3;
      float a = 0.35 * amplitude;
      height += a * sin(phase);
      p.x += dir.x * a * 0.38 * cos(phase);
      p.z += dir.y * a * 0.38 * cos(phase);
      normal.x -= dir.x * k * a * cos(phase);
      normal.z -= dir.y * k * a * cos(phase);
    }
    {
      vec2 dir = normalize(vec2(0.66, -0.75));
      float wavelength = 7.4;
      float k = 2.0 * PI / wavelength;
      float phase = dot(p.xz, dir) * k - uTime * 1.12 + 2.7;
      float a = 0.2 * amplitude;
      height += a * sin(phase);
      p.x += dir.x * a * 0.44 * cos(phase);
      p.z += dir.y * a * 0.44 * cos(phase);
      normal.x -= dir.x * k * a * cos(phase);
      normal.z -= dir.y * k * a * cos(phase);
    }
    {
      vec2 dir = normalize(vec2(0.28, 0.96));
      float wavelength = 4.4;
      float k = 2.0 * PI / wavelength;
      float phase = dot(p.xz, dir) * k - uTime * 1.57 + 5.1;
      float a = 0.085 * amplitude;
      height += a * sin(phase);
      normal.x -= dir.x * k * a * cos(phase);
      normal.z -= dir.y * k * a * cos(phase);
    }
    {
      vec2 dir = normalize(vec2(-0.52, 0.85));
      float wavelength = 2.6;
      float k = 2.0 * PI / wavelength;
      float phase = dot(p.xz, dir) * k - uTime * 2.15 + 3.9;
      float a = 0.025 * (0.35 + 0.65 * exposure + aBay * 0.1);
      height += a * sin(phase);
      normal.x -= dir.x * k * a * cos(phase);
      normal.z -= dir.y * k * a * cos(phase);
    }
    {
      vec2 dir = normalize(vec2(0.99, 0.12));
      float wavelength = 21.0;
      float k = 2.0 * PI / wavelength;
      float phase = dot(p.xz, dir) * k - uTime * 0.49 + 4.2;
      float a = 0.13 * amplitude;
      height += a * sin(phase);
      normal.x -= dir.x * k * a * cos(phase);
      normal.z -= dir.y * k * a * cos(phase);
    }

    // Sloshing pressure in the narrow strait: a slow sideways surge.
    float sloshPhase = uTime * 0.76 + p.x * 0.63 + p.z * 0.31;
    float slosh = sin(sloshPhase) * aStrait * (0.07 + 0.018 * sin(uTime * 0.21));
    height += slosh;
    normal.x -= cos(sloshPhase) * 0.044 * aStrait;
    normal.z -= cos(sloshPhase) * 0.022 * aStrait;
    p.y += height;
    normal = normalize(normal);

    // A slow pulse moving shoreward is used to break up the foam lines.
    vShorePulse = 0.5 + 0.5 * sin(uTime * 0.62 + p.x * 0.21 + p.z * 0.15);
    vWaveHeight = height;
    vWaveNormal = normal;
    vDepth = aDepth;
    vExposure = exposure;
    vStrait = aStrait;
    vBay = aBay;
    vShore = aShore;
    vWorldPos = p;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`,Eg=`
  uniform float uTime;
  uniform sampler2D uMask;
  uniform sampler2D uNoise;
  uniform vec3 uSunDirection;
  uniform vec3 uSunColor;
  uniform vec3 uSkyColor;
  uniform vec3 uHorizonColor;
  uniform vec3 uDeepColor;
  uniform vec3 uMidColor;
  uniform vec3 uShallowColor;
  uniform vec3 uFoamColor;

  varying vec3 vWorldPos;
  varying vec2 vUv;
  varying vec3 vWaveNormal;
  varying float vDepth;
  varying float vExposure;
  varying float vStrait;
  varying float vBay;
  varying float vShore;
  varying float vWaveHeight;
  varying float vShorePulse;

  vec3 softSky(vec3 n) {
    vec3 r = reflect(-normalize(cameraPosition - vWorldPos), n);
    float up = smoothstep(-0.04, 0.76, r.y);
    return mix(uHorizonColor, uSkyColor, up);
  }

  void main() {
    float mask = texture2D(uMask, vUv).g;
    if (mask < 0.47) discard;
    if (vDepth < 0.015) discard;

    vec2 w = vWorldPos.xz;
    float flowX = uTime * 0.018;
    float flowZ = uTime * 0.011;
    float nA = texture2D(uNoise, w * 0.18 + vec2(flowX, -flowZ)).r;
    float nB = texture2D(uNoise, w * 0.52 - vec2(flowX * 1.7, flowZ * 0.9)).g;
    float nC = texture2D(uNoise, w * 1.45 + vec2(-flowX * 1.3, flowZ * 1.9)).b;
    float nD = texture2D(uNoise, w * 3.8 + vec2(flowX * 2.3, flowZ * 1.4)).a;

    vec3 n = normalize(vWaveNormal);
    float rip = mix(0.3, 1.0, vExposure);
    float rippleA = sin(w.x * 1.17 + w.y * 0.42 + uTime * 1.35 + nA * 3.2);
    float rippleB = sin(w.x * 2.65 - w.y * 1.12 + uTime * 2.05 + nC * 3.4);
    float rippleC = sin(w.x * 6.4 + w.y * 3.3 - uTime * 2.6 + nD * 4.2);
    n.x += ((nA - 0.5) * 0.06 + (nC - 0.5) * 0.085 + rippleA * 0.045 + rippleB * 0.026 + rippleC * 0.012) * rip;
    n.z += ((nB - 0.5) * 0.055 + (nC - 0.5) * 0.05 - rippleA * 0.025 + rippleB * 0.033 + rippleC * 0.015) * rip;
    n.y += (nD - 0.5) * 0.035;
    n = normalize(n);

    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float NdotV = clamp(dot(n, viewDir), 0.0, 1.0);
    float fresnel = pow(1.0 - NdotV, 4.0);
    fresnel = mix(0.035, 1.0, fresnel);

    float shallowMix = 1.0 - smoothstep(0.25, 2.35, vDepth);
    float deepMix = smoothstep(2.4, 6.8, vDepth);
    vec3 waterColor = mix(uShallowColor, uMidColor, smoothstep(0.2, 3.2, vDepth));
    waterColor = mix(waterColor, uDeepColor, deepMix);
    waterColor = mix(waterColor, uShallowColor * vec3(0.87, 1.03, 0.95), vBay * shallowMix * 0.3);
    waterColor *= 0.88 + nB * 0.16;
    waterColor += vec3(0.018, 0.055, 0.043) * (1.0 - deepMix) * smoothstep(0.035, 0.7, vDepth);

    vec3 reflection = softSky(n);
    vec3 sunDir = normalize(uSunDirection);
    float sunFacing = max(dot(reflect(-viewDir, n), sunDir), 0.0);
    reflection += uSunColor * (0.1 * pow(sunFacing, 10.0) + 0.22 * pow(sunFacing, 80.0));

    float reflectionMix = 0.02 + fresnel * 0.4;
    vec3 color = mix(waterColor, reflection, reflectionMix);

    // Wave crests brighten slightly; troughs keep their deep, cool blue.
    float waveCrest = smoothstep(0.06, 0.33, vWaveHeight) * smoothstep(0.25, 1.05, vDepth) * vExposure;
    vec3 waveKey = normalize(vec3(-0.55, 0.4, 0.35));
    float waveLit = clamp(dot(n, waveKey) * 0.5 + 0.5, 0.0, 1.0);
    color *= 0.68 + 0.64 * waveLit;
    color += vec3(0.022, 0.064, 0.055) * waveLit * smoothstep(0.6, 2.4, vDepth);
    color = mix(color, color * 1.12 + vec3(0.035, 0.11, 0.09), waveCrest * 0.48);
    color *= 0.9 + 0.16 * smoothstep(0.2, 0.7, nA);
    float skySparkle = smoothstep(0.73, 0.93, texture2D(uNoise, w * 2.1 + vec2(-uTime * 0.038, uTime * 0.045)).b);
    skySparkle *= smoothstep(0.08, 0.42, fresnel) * (0.35 + 0.65 * vExposure);
    color += vec3(0.88, 0.94, 0.94) * skySparkle * 0.26;


    // Restrained late-afternoon glitter path.
    vec3 halfVec = normalize(sunDir + viewDir);
    float spec = pow(max(dot(n, halfVec), 0.0), 540.0);
    float sparkleNoise = texture2D(uNoise, w * 1.7 + vec2(uTime * 0.018, -uTime * 0.012)).b;
    float sparkle = smoothstep(0.63, 0.82, sparkleNoise);
    float broadSpec = pow(max(dot(n, halfVec), 0.0), 34.0);
    float reflectedSun = max(dot(reflect(-sunDir, n), viewDir), 0.0);
    float glitter = pow(reflectedSun, 760.0) + pow(reflectedSun, 90.0) * 0.18;
    color += uSunColor * (spec * (0.7 + sparkle * 1.8) + broadSpec * 0.11 + glitter * (0.6 + sparkle * 1.3));
    color += uSunColor * 0.016 * max(dot(n, sunDir), 0.0) * smoothstep(0.8, 2.0, vDepth);

    // A fine band of warm sky reflection at the shoreline edge.
    color += uSunColor * (1.0 - smoothstep(0.0, 0.12, vDepth)) * 0.08 * (0.4 + fresnel);

    // Foam: soft lace on the rocks, an advancing wash line, and occasional whitecaps.
    float foamNoise = texture2D(uNoise, w * 0.31 + vec2(uTime * 0.009, -uTime * 0.006)).r;
    float foamFine = texture2D(uNoise, w * 0.98 - vec2(uTime * 0.021, -uTime * 0.013)).g;
    float foamMicro = texture2D(uNoise, w * 2.85 + vec2(uTime * 0.03, -uTime * 0.021)).a;
    float pulse = 0.5 + 0.5 * sin(uTime * 0.57 - w.x * 0.16 - w.y * 0.11 + foamNoise * 5.2);

    float shoreBand = 1.0 - smoothstep(0.0, 1.15 + vBay * 0.25, vDepth);
    float lace = smoothstep(0.3, 0.67, foamFine * 0.6 + foamMicro * 0.32 + foamNoise * 0.13);
    float shoreFoam = shoreBand * mix(0.12, 1.0, vExposure) * (0.42 + 0.58 * pulse) * (0.35 + 0.65 * lace) * 1.32;
    float cliffShore = 1.0 - smoothstep(0.0, 2.7 + vBay * 0.7, vShore);
    float cliffFoam = cliffShore * mix(0.15, 1.0, vExposure) * (0.5 + 0.5 * pulse) * (0.3 + 0.7 * lace) * 1.5;
    float washShore = 1.0 - smoothstep(0.0, 0.32, abs(vShore - (0.6 + 0.35 * sin(uTime * 0.5 + w.x * 0.16 + w.y * 0.12 + foamNoise * 4.2))));
    washShore *= mix(0.1, 1.0, vExposure) * smoothstep(0.28, 0.65, foamFine + 0.16 * foamMicro);
    float spentFoam = (1.0 - smoothstep(0.5, 2.3, vDepth)) * smoothstep(0.44, 0.74, foamFine + foamNoise * 0.22) * mix(0.1, 0.55, vExposure);

    float washPosition = 0.28 + 0.28 * (0.5 + 0.5 * sin(uTime * 0.48 + w.x * 0.17 + w.y * 0.13 + foamNoise * 3.4));
    float washBand = 1.0 - smoothstep(0.0, 0.18, abs(vDepth - washPosition));
    washBand *= mix(0.15, 1.0, vExposure) * smoothstep(0.28, 0.66, foamFine + 0.18 * foamMicro);

    float crestBand = smoothstep(0.2, 0.42, vWaveHeight) * smoothstep(0.5, 1.25, vDepth) *
      (1.0 - smoothstep(3.7, 5.6, vDepth)) * vExposure;
    float crestFoam = crestBand * smoothstep(0.38, 0.69, foamFine + foamNoise * 0.22) * 0.55;
    float whitecap = smoothstep(0.77, 0.9, foamNoise + vShorePulse * 0.06 + nA * 0.06) *
      smoothstep(2.4, 4.2, vDepth) * vExposure * 0.2;
    float straitFoam = vStrait * smoothstep(0.12, 0.65, vDepth) * (1.0 - smoothstep(2.0, 3.2, vDepth)) *
      smoothstep(0.3, 0.64, foamFine + 0.17 * sin(uTime * 0.8 + w.y * 0.65));

    float capLace = smoothstep(0.48, 0.72, foamFine + foamNoise * 0.2);
    float caps = smoothstep(0.22, 0.42, vWaveHeight) * smoothstep(1.1, 2.0, vDepth) *
      (1.0 - smoothstep(4.6, 6.0, vDepth)) * vExposure * capLace;
    float openCap = smoothstep(0.25, 0.46, vWaveHeight) * smoothstep(2.0, 3.0, vDepth) *
      (1.0 - smoothstep(5.2, 6.5, vDepth)) * vExposure * smoothstep(0.62, 0.8, foamFine + foamNoise * 0.16);
    float foamSignal = shoreFoam + cliffFoam * 0.9 + washShore * 0.95 + spentFoam * 0.24 + washBand * 0.95 + crestFoam * 0.6 + caps * 0.7 + openCap * 0.38 + whitecap + straitFoam * 0.65;
    float foam = smoothstep(0.38, 0.74, foamSignal + foamNoise * 0.12 + foamMicro * 0.03);
    foam *= smoothstep(0.012, 0.09, vDepth);
    foam = clamp(foam, 0.0, 1.0);
    float waterlineFoam = (1.0 - smoothstep(0.02, 0.16, vDepth)) *
      smoothstep(0.2, 0.55, foamFine + 0.2 * foamMicro) * mix(0.16, 1.0, vExposure);
    foam = clamp(foam + waterlineFoam * 0.95, 0.0, 1.0);
    vec3 foamTint = mix(uFoamColor, vec3(0.74, 0.9, 0.86), 0.15 + foamMicro * 0.18);
    color = mix(color, foamTint, foam * 0.86);

    float baseAlpha = mix(0.22, 0.968, smoothstep(0.08, 3.6, vDepth));
    baseAlpha = mix(baseAlpha, 0.98, fresnel * 0.5);
    baseAlpha = mix(baseAlpha * 0.88, baseAlpha, vBay * 0.5);
    float alpha = clamp(max(baseAlpha, foam * 0.8), 0.0, 1.0);

    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Tg=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Ag=`
  uniform float uOpacity;
  uniform float uProgress;
  uniform sampler2D uFoam;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv - 0.5;
    float radius = length(p) * 2.0;
    float ringRadius = mix(0.15, 0.86, uProgress);
    float width = mix(0.12, 0.38, uProgress);
    float ring = smoothstep(width, 0.0, abs(radius - ringRadius));
    float inner = smoothstep(0.0, 0.65, radius - ringRadius + 0.07);
    float foamTex = texture2D(uFoam, fract(vUv * 2.4 + vec2(0.2, 0.7))).a;
    float foamTex2 = texture2D(uFoam, fract(vUv * 4.8 - vec2(0.4, 0.15))).a;
    float lace = smoothstep(0.1, 0.63, foamTex * 0.72 + foamTex2 * 0.37);
    float alpha = ring * inner * lace * uOpacity;
    gl_FragColor = vec4(vec3(0.96, 0.975, 0.94), alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;class Cg{constructor(e,t){this.assets=t,this.capacity=900,this.particles=[],this.particleByIndex=new Map,this.attributePosition=new Float32Array(this.capacity*3),this.attributeAlpha=new Float32Array(this.capacity),this.attributeSize=new Float32Array(this.capacity),this.cursor=0,this.activeCount=0,this.geometry=new st,this.geometry.setAttribute("position",new yt(this.attributePosition,3)),this.geometry.setAttribute("aAlpha",new yt(this.attributeAlpha,1)),this.geometry.setAttribute("aSize",new yt(this.attributeSize,1)),this.geometry.setDrawRange(0,0),this.material=new an({vertexShader:`
        attribute float aAlpha;
        attribute float aSize;
        varying float vAlpha;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = min(34.0, aSize * (920.0 / max(1.0, -mvPosition.z)));
          vAlpha = aAlpha;
        }
      `,fragmentShader:`
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = smoothstep(1.0, 0.48, d);
          if (a < 0.01) discard;
          gl_FragColor = vec4(vec3(0.94, 0.965, 0.93), a * vAlpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,transparent:!0,depthWrite:!1,blending:Ti}),this.points=new pd(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=4,e.add(this.points),this.rings=[],this.ringPool=[],this.ringDuration=2.2;const n=new Ht(1,1);for(let s=0;s<18;s++){const r=new an({uniforms:{uOpacity:{value:0},uProgress:{value:0},uFoam:{value:t.foam}},vertexShader:Tg,fragmentShader:Ag,transparent:!0,depthWrite:!1,side:_t}),o=new N(n,r);o.rotation.x=-Math.PI/2,o.visible=!1,o.renderOrder=3,e.add(o),this.ringPool.push({mesh:o,active:!1,age:0,life:0,size:1,driftX:0,driftZ:0})}this.rng=rt(985681),this.emitters=[],this.buildEmitters(),this.waveTime=0}findWaterEdge(e,t){const n=pn(e,t);if(!n.isIsland)return{x:e,z:t,depth:Math.max(.4,-n.height)};const s=n.islandInfo;let r=e-s.cx,o=t-s.cz;const a=Math.hypot(r,o)||1;r/=a,o/=a;for(let c=0;c<24;c++){const l=e+r*c*.35,h=t+o*c*.35,u=Lt(l,h);if(u<-.32)return{x:l,z:h,depth:-u}}return{x:e,z:t,depth:.4}}buildEmitters(){const e=[[-27,3.2,.1],[-23.2,5.1,1.9],[-18.5,6.3,3.8],[-13.8,7.4,5.3],[-8.6,8.2,7.4],[-3.8,8.1,9.3],[-30.1,-1.8,2.6],[-28.5,-5.1,4.7]];this.emitters=e.map(([t,n,s],r)=>{const o=this.findWaterEdge(t,n);return{x:o.x,z:o.z,timer:.7+s*.5+r*.31,period:2.3+r%4*.46,strength:.65+r%3*.24}})}spawnParticle(e,t,n,s,r,o,a,c){if(this.particles.length>=this.capacity){const u=this.particles.shift();u&&this.freeParticle(u)}const l=this.cursor;this.cursor=(this.cursor+1)%this.capacity;let h=this.particleByIndex.get(l);h||(h={index:l},this.particleByIndex.set(l,h)),h.x=e,h.y=t,h.z=n,h.vx=s,h.vy=r,h.vz=o,h.size=a,h.life=c,h.maxLife=c,h.phase=this.rng.range(0,Math.PI*2),this.particles.push(h)}freeParticle(e){this.attributeAlpha[e.index]=0,this.attributeSize[e.index]=0}addSplash(e,t,n=1,s=null){const r=s??Math.floor(16+n*34);for(let o=0;o<r;o++){const a=this.rng.range(0,Math.PI*2),c=this.rng.range(.15,1.5)*n,l=Math.cos(a)*c,h=Math.sin(a)*c,u=this.rng.range(.6,3.5)*n,f=this.rng.range(.13,.42)*(.7+n*.4),d=this.rng.range(.55,1.45);this.spawnParticle(e+Math.cos(a)*this.rng.range(0,.28),.08,t+Math.sin(a)*this.rng.range(0,.28),l,u,h,f,d)}}addFoamRing(e,t,n=3.2,s=.7,r=2.1){let o=this.ringPool.find(a=>!a.active);o||(o=this.ringPool.reduce((a,c)=>c.age>a.age?c:a,this.ringPool[0])),o.active=!0,o.age=0,o.life=r,o.size=n,o.opacity=s,o.mesh.visible=!0,o.mesh.position.set(e,.075,t),o.mesh.rotation.z=this.rng.range(0,Math.PI*2),o.mesh.scale.setScalar(n),o.mesh.material.uniforms.uOpacity.value=0,o.mesh.material.uniforms.uProgress.value=0,o.driftX=this.rng.range(-.05,.05),o.driftZ=this.rng.range(.02,.14),this.rings.push(o)}update(e,t){this.waveTime=t;for(let n=this.particles.length-1;n>=0;n--){const s=this.particles[n];if(s.life-=e,s.life<=0||s.y<-.12){this.freeParticle(s),this.particles.splice(n,1);continue}s.vy-=5.9*e,s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,s.vx*=.985,s.vz*=.985;const r=It(s.life/s.maxLife),o=s.index;this.attributePosition[o*3]=s.x,this.attributePosition[o*3+1]=s.y,this.attributePosition[o*3+2]=s.z,this.attributeAlpha[o]=Math.sin(r*Math.PI)*.82,this.attributeSize[o]=s.size*(.65+(1-r)*1.5)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.emitters.forEach((n,s)=>{n.timer-=e,n.timer<=0&&(n.timer=n.period*this.rng.range(.62,1.5),this.waveTime>1&&(this.addSplash(n.x,n.z,n.strength*1.35,20+Math.floor(n.strength*28)),s<3&&this.addFoamRing(n.x,n.z,.9+n.strength*1.1,.12+n.strength*.08,1.25)))}),this.rings=this.rings.filter(n=>n.active),this.rings.forEach(n=>{n.age+=e;const s=It(n.age/n.life);if(s>=1){n.active=!1,n.mesh.visible=!1,n.mesh.material.uniforms.uOpacity.value=0;return}n.mesh.position.x+=n.driftX*e,n.mesh.position.z+=n.driftZ*e,n.mesh.scale.setScalar(n.size*(.35+s*1.4)),n.mesh.material.uniforms.uProgress.value=s,n.mesh.material.uniforms.uOpacity.value=Math.sin(s*Math.PI)*n.opacity}),this.geometry.setDrawRange(0,this.capacity)}}function Rg(i,e,t){const n=new Xe;n.name="breaking-foam";const r=[[-30.5,-3.6],[-30.8,.4],[-28.7,3.3],[-25,5.2],[-21,6.3],[-17,7.2],[-12.5,8],[-7.8,8.3],[-3.2,7.8]].map(([d,x])=>{const g=t.findWaterEdge(d,x),m=pn(g.x,g.z);let p=g.x-m.islandInfo.cx,_=g.z-m.islandInfo.cz;const v=Math.hypot(p,_)||1;return p/=v,_/=v,{x:g.x,z:g.z,ox:p,oz:_}}),o=new Ht(1,1),a=rt(985651),c=[],l=`
    uniform float uOpacity;
    uniform float uSeed;
    uniform sampler2D uFoam;
    varying vec2 vUv;
    void main() {
      vec2 p = vUv;
      float edge = smoothstep(0.02, 0.16, p.x) * smoothstep(0.98, 0.84, p.x) *
                   smoothstep(0.03, 0.19, p.y) * smoothstep(0.97, 0.8, p.y);
      float a1 = texture2D(uFoam, fract(p * vec2(1.55, 1.0) + vec2(uSeed * 0.31, uSeed * 0.17))).a;
      float a2 = texture2D(uFoam, fract(p * vec2(2.7, 1.7) - vec2(uSeed * 0.12, uSeed * 0.23))).a;
      float lace = smoothstep(0.16, 0.62, a1 * 0.7 + a2 * 0.42);
      float alpha = lace * edge * uOpacity;
      if (alpha < 0.004) discard;
      gl_FragColor = vec4(vec3(0.95, 0.965, 0.93), alpha);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `,h=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;for(let d=0;d<17;d++){const x=new an({uniforms:{uOpacity:{value:0},uSeed:{value:a.range(0,10)},uFoam:{value:i.foam}},vertexShader:h,fragmentShader:l,transparent:!0,depthWrite:!1,side:_t});x.toneMapped=!0;const g=new N(o,x);g.rotation.x=-Math.PI/2,g.renderOrder=4,n.add(g),c.push({mesh:g,material:x,seedIndex:a.int(0,r.length-1),progress:a.range(0,1),life:a.range(3.2,6.2),peak:a.range(.35,.68),size:a.range(1.8,4.4),width:a.range(1,2),rotation:a.range(0,Math.PI*2),drift:a.range(-.6,.6)})}function u(d){d.seedIndex=a.int(0,r.length-1),d.progress=a.range(-.16,0),d.life=a.range(3.2,6.4),d.peak=a.range(.32,.64),d.size=a.range(1.8,4.4),d.width=a.range(1,2),d.rotation=a.range(0,Math.PI*2),d.drift=a.range(-.7,.7)}function f(d,x){c.forEach(g=>{g.progress+=d/g.life,g.progress>=1&&u(g);const m=It(g.progress),p=r[g.seedIndex],_=2.8*(1-m)+.18,v=Math.sin(x*.4+g.seedIndex)*.14*g.drift,M=p.x+p.ox*_-p.oz*v,w=p.z+p.oz*_+p.ox*v,S=g.size*(.65+m*.55),T=Math.sin(Math.PI*It(m*1.1))*g.peak;g.mesh.position.set(M,.085+Math.sin(x*.7+g.seedIndex)*.012,w),g.mesh.rotation.z=g.rotation+Math.sin(x*.13+g.seedIndex)*.12,g.mesh.scale.set(S,S*g.width,1),g.material.uniforms.uOpacity.value=T})}return{group:n,update:f}}function Pg(i,e,t,n){const s=Sg(),r={uTime:e.timeUniform,uMask:{value:i.maskTexture},uNoise:{value:i.waterNoise},uSunDirection:{value:n.clone().normalize()},uSunColor:{value:new me("#ffd9a8")},uSkyColor:{value:new me("#5f879b")},uHorizonColor:{value:new me("#adc4c4")},uDeepColor:{value:new me("#022a42")},uMidColor:{value:new me("#084a5f")},uShallowColor:{value:new me("#5bbda7")},uFoamColor:{value:new me("#f0eee2")}},o=new an({uniforms:r,vertexShader:wg,fragmentShader:Eg,transparent:!0,depthWrite:!1,side:_t});o.toneMapped=!0;const a=new N(s,o);a.name="black-sea-water",a.renderOrder=2,a.frustumCulled=!1,t.add(a);const c=new Cg(t,i),l=Rg(i,e,c);return t.add(l.group),{mesh:a,material:o,splash:c,uniforms:r,foam:l}}const Qt=Math.PI*2;function Ai(i,e={}){return new ie({color:16777215,map:i,roughness:.94,metalness:.02,...e})}function jn(i,e,t=e*.34){const n=new Ms,s=i*.5,r=e-t;return n.moveTo(-s,0),n.lineTo(s,0),n.lineTo(s,r),n.absarc(0,r,s,0,Math.PI,!1),n.lineTo(-s,0),n.closePath(),n}function Ds(i,e){const t=Ln(i,!1),n=new N(t,e);return n.castShadow=!0,n.receiveShadow=!0,n}function Dg(i){const e=new Xe;e.name="sculpted-relief-band";const t=new ie({color:8484967,map:i.stone,bumpMap:i.stone,bumpScale:.05,roughness:.98,metalness:.01}),n=new ie({color:11049859,map:i.stone,bumpMap:i.stone,bumpScale:.04,roughness:.97}),s=new ie({color:4078386,roughness:.98,metalness:0}),r=new N(new Qe(2.03,2.03,1.28,64,1,!1),t);r.castShadow=!0,r.receiveShadow=!0,e.add(r);const o=new N(new yn(2.045,.08,5,64),n);o.rotation.x=Math.PI/2,o.position.y=.64,o.castShadow=!0,e.add(o);const a=o.clone();a.position.y=-.64,e.add(a);const c=rt(2071);for(let d=0;d<12;d++){const x=c.range(0,Qt),g=new N(new li(c.range(.07,.16),0),t);g.position.set(Math.sin(x)*2.07,c.range(-.52,.52),Math.cos(x)*2.07),g.rotation.set(c.range(0,Qt),c.range(0,Qt),c.range(0,Qt)),g.scale.set(1.4,.6,.85),g.castShadow=!0,e.add(g)}function l(d,x=!1){const g=rt(d),m=new Ms,p=x?-1:1;return[[-.02,.36],[.15,.38],[.29,.27],[.31,.06],[.24,-.18],[.13,-.34],[-.02,-.38],[-.09,-.27],[-.05,-.15],[-.11,-.06],[-.2,0],[-.12,.08],[-.2,.16],[-.12,.24],[-.1,.34]].forEach(([v,M],w)=>{const S=v*p+g.range(-.012,.012),T=M+g.range(-.012,.012);w===0?m.moveTo(S,T):m.lineTo(S,T)}),m.closePath(),m}function h(d,x=!1){const g=new Xe,m=new N(new de(.96,.88,.14),n);m.position.z=.08,m.castShadow=!0,m.receiveShadow=!0,g.add(m);const p=new N(new de(.78,.76,.035),s);p.position.z=.16,g.add(p);const _=new $n(l(d,x),{depth:.055,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1}),v=new N(_,t);v.position.set(x?.04:-.04,.01,.19),v.castShadow=!0,g.add(v);const M=new N(new de(.07,.014,.02),s);M.position.set(x?-.075:.075,.17,.255),g.add(M);const w=new N(new de(.18,.03,.04),t);w.position.set(x?-.03:.03,.225,.25),w.rotation.z=x?-.1:.1,g.add(w);const S=new N(new de(.12,.025,.025),s);S.position.set(x?.08:-.08,-.16,.255),g.add(S);const T=new N(new li(.085,0),t);T.scale.set(.7,.9,.25),T.position.set(x?-.17:.17,.02,.23),g.add(T);const P=new N(new de(.42,.075,.08),t);P.position.set(0,.325,.22),P.rotation.z=x?-.08:.08,g.add(P);const y=new N(new Qe(.19,.24,.09,8),t);return y.position.set(.02,.38,.19),g.add(y),g}function u(d){const x=new Xe,g=new N(new de(.96,.88,.13),n);g.position.z=.08,g.castShadow=!0,g.receiveShadow=!0,x.add(g);const m=new N(new de(.76,.72,.03),s);if(m.position.z=.155,x.add(m),d==="wheel"){const p=new N(new yn(.24,.055,6,22),t);p.position.z=.24,p.castShadow=!0,x.add(p);for(let v=0;v<8;v++){const M=new N(new de(.05,.46,.05),t);M.rotation.z=v/8*Qt,M.position.z=.25,x.add(M)}const _=new N(new Qe(.09,.09,.08,10),t);_.rotation.x=Math.PI/2,_.position.z=.29,x.add(_)}else if(d==="anchor"){const p=new N(new yn(.09,.025,5,16),t);p.position.set(0,.21,.25),x.add(p);const _=new N(new de(.052,.48,.05),t);_.position.set(0,-.06,.24),x.add(_);const v=new N(new de(.38,.045,.05),t);v.position.set(0,.12,.25),x.add(v);const M=new Bn([new L(-.22,-.23,.25),new L(-.17,-.34,.25),new L(0,-.37,.25),new L(.17,-.34,.25),new L(.22,-.23,.25)]);x.add(new N(new ei(M,12,.03,4,!1),t))}else if(d==="star"){const p=new N(new li(.18,0),t);p.position.z=.25,p.castShadow=!0,x.add(p);for(let _=0;_<10;_++){const v=_%2===0?.28:.12,M=new N(new de(.035,v,.035),t);M.position.set(Math.sin(_/10*Qt)*.18,Math.cos(_/10*Qt)*.18,.25),M.rotation.z=-(_/10)*Qt,x.add(M)}}else{for(let _=0;_<3;_++){const v=new Bn([new L(-.3,-.12+_*.12,.25),new L(-.14,.02+_*.12,.25),new L(.08,-.03+_*.12,.25),new L(.26,.08+_*.12,.25)]);x.add(new N(new ei(v,10,.026,4,!1),t))}const p=new N(new li(.08,0),t);p.position.set(.24,.28,.25),x.add(p)}return x}const f=8;for(let d=0;d<f;d++){const x=d/f*Qt+.1;let g;d===0||d===4?g=h(17+d,!1):d===2||d===6?g=h(65+d,!0):d===1||d===5?g=u("wheel"):d===3?g=u("anchor"):g=u("waves");const m=new Xe;m.position.set(Math.sin(x)*1.93,0,Math.cos(x)*1.93),m.rotation.y=x,m.add(g),e.add(m)}return e}function Lg(i,e){const t=new Xe,n=jn(1.02,1.9,.58),s=new $n(n,{depth:.07,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:2}),r=new N(s,new ie({color:2237473,roughness:.67,metalness:.18}));r.position.z=.02,t.add(r);const o=jn(1.22,2.04,.64),a=jn(1.02,1.9,.58);o.holes.push(a);const c=new N(new $n(o,{depth:.04,bevelEnabled:!1}),i);c.position.z=-.01,t.add(c);const l=new N(new Ht(.72,.26),new pi({color:16766624,transparent:!0,opacity:.27}));l.position.set(0,1.18,.115),t.add(l);const h=new N(new Ft(.045,8,6),e);return h.position.set(.32,.9,.15),t.add(h),t}function Ig(i){const e=new Xe;e.name="1975-memorial-lighthouse";const t=Ai(i.brick.map,{bumpMap:i.brick.bumpMap,bumpScale:.12,color:15064267,roughness:.96}),n=Ai(i.plaster,{color:15854556,roughness:.93}),s=Ai(i.concrete,{color:13749438,roughness:.9}),r=new ie({color:4606276,roughness:.75,metalness:.52}),o=new ie({color:7297095,roughness:.72,metalness:.48,map:i.metal}),a=new ie({color:12819030,roughness:.33,metalness:.7}),c=new ie({color:16769966,emissive:16757599,emissiveIntensity:1.4,transparent:!0,opacity:.72,roughness:.15,metalness:.05});new ie({color:9336919,roughness:.6,metalness:.38});const l=new N(new Qe(4.2,4.55,.28,8),s);l.rotation.y=Math.PI/8,l.position.y=.14,l.receiveShadow=!0,l.castShadow=!0,e.add(l);const h=new N(new Qe(3.58,3.9,.38,8),s);h.rotation.y=Math.PI/8,h.position.y=.47,h.receiveShadow=!0,h.castShadow=!0,e.add(h);const u=new N(new Qe(2.9,3.12,1.12,8),n);u.rotation.y=Math.PI/8,u.position.y=1.22,u.receiveShadow=!0,u.castShadow=!0,e.add(u);const f=1.78,d=new N(new Qe(2.16,2.3,.52,48),s);d.position.y=f+.26,d.castShadow=!0,d.receiveShadow=!0,e.add(d);const x=f+.52,g=11.45,m=x+g,p=new Qe(1.66,1.89,g,64,1,!1),_=new N(p,t);_.position.y=x+g*.5,_.castShadow=!0,_.receiveShadow=!0,e.add(_);const v=Dg(i);v.position.y=x+3.65,e.add(v);const M=new de(.22,.3,.22),w=[];for(let X=0;X<22;X++){const j=X/22*Qt,oe=M.clone();oe.rotateY(j),oe.translate(Math.sin(j)*1.74,m-.15,Math.cos(j)*1.74),w.push(oe)}const S=Ds(w,s);e.add(S);const T=new N(new Qe(2.35,2.15,.2,48),s);T.position.y=m+.1,T.castShadow=!0,T.receiveShadow=!0,e.add(T);const P=new N(new yn(2.33,.05,4,48),s);P.rotation.x=Math.PI/2,P.position.y=m+.2,e.add(P);const y=[];for(let X=0;X<20;X++){const j=X/20*Qt,oe=new Qe(.024,.024,1.1,5);oe.translate(Math.sin(j)*2.17,m+.75,Math.cos(j)*2.17),y.push(oe)}const b=Ds(y,o);e.add(b);for(let X=0;X<3;X++){const j=new N(new yn(2.17,.019,4,72),o);j.rotation.x=Math.PI/2,j.position.y=m+.42+X*.32,e.add(j)}const C=new N(new Qe(.7,.82,.42,8),o);C.position.y=m+.46,C.castShadow=!0,e.add(C);const I=new N(new Qe(.67,.72,.9,8,1,!0),c);I.position.y=m+1.12,e.add(I);const z=[];for(let X=0;X<8;X++){const j=X/8*Qt,oe=new de(.035,.95,.035);oe.translate(Math.sin(j)*.69,m+1.13,Math.cos(j)*.69),z.push(oe)}e.add(Ds(z,o));const B=new N(new Qe(.83,.83,.07,8),o);B.position.y=m+1.59,e.add(B);const U=new N(new Pi(.88,.41,8),new ie({color:8410443,roughness:.56,metalness:.42}));U.position.y=m+1.8,U.castShadow=!0,e.add(U);const F=new N(new Ft(.075,8,6),a);F.position.y=m+2.04,e.add(F);const G=new Xe,W=new N(new Qe(.025,.03,2.4,6),r);W.position.y=1.2,G.add(W);for(let X=0;X<3;X++){const j=new N(new de(.55-X*.11,.025,.025),r);j.position.y=1.2+X*.32,G.add(j)}const Q=new N(new Ft(.2,10,6,0,Math.PI*2,0,Math.PI*.45),r);Q.scale.set(1,.7,.25),Q.position.set(.37,1.73,.04),Q.rotation.y=-.5,G.add(Q),G.position.set(-1.22,m+.18,.35),e.add(G);const te=new ic(16759925,14,18,2);te.position.set(0,m+1.12,0),e.add(te);const Se=new N(new Ft(.16,8,6),new pi({color:16767394}));Se.position.y=m+1.12,e.add(Se);const Ge=Lg(n,r);Ge.position.set(0,.22,2.98),Ge.rotation.y=.17,Ge.scale.set(.86,.83,1),e.add(Ge);const ne=new Xe;for(let X=0;X<3;X++){const j=new N(new de(1.5+X*.22,.16,.32),s);j.position.set(0,.14+X*.16,.4+X*.32),j.castShadow=!0,j.receiveShadow=!0,ne.add(j)}ne.position.set(.65,.16,3.02),ne.rotation.y=.17,e.add(ne);const we=new ie({map:i.memorial.plaqueMap,roughness:.58,metalness:.18,color:16777215}),fe=new N(new Ht(1.15,.58),we);fe.position.set(-1.35,1.23,3.07),fe.rotation.y=.28,e.add(fe);const Y=new ie({color:3422258,roughness:.67,metalness:.45}),J=new ie({color:6643538,roughness:.92,metalness:.02}),pe=[],be=[],ve=4.28,Oe=15,nt=.34,ze=.55;for(let X=0;X<Oe;X++){const j=X/Oe*Qt+.15;let oe=Math.atan2(Math.sin(j-nt),Math.cos(j-nt));if(Math.abs(oe)<ze)continue;const ce=new Qe(.09,.12,.95,6);ce.translate(Math.sin(j)*ve,.47,Math.cos(j)*ve),pe.push(ce)}e.add(Ds(pe,J));const ee=[];for(let X=0;X<Oe;X++){const j=X/Oe*Qt+.15;let oe=Math.atan2(Math.sin(j-nt),Math.cos(j-nt));Math.abs(oe)<ze||ee.push(j)}for(let X=0;X<ee.length;X++){const j=ee[X],oe=ee[(X+1)%ee.length];if(Math.abs(Math.atan2(Math.sin(oe-j),Math.cos(oe-j)))>.8)continue;const De=new L(Math.sin(j)*ve,.9,Math.cos(j)*ve),_e=new L(Math.sin(oe)*ve,.9,Math.cos(oe)*ve),Ce=De.clone().add(_e).multiplyScalar(.5);Ce.y-=.2,be.push(new Bn([De,Ce,_e]))}const R=be.map(X=>new ei(X,8,.018,4,!1));return R.length&&e.add(Ds(R,Y)),e.position.set(re.tower.x,re.tower.ground,re.tower.z),e.rotation.y=-.06,e}function Ug(){const i=document.createElement("canvas");i.width=256,i.height=320;const e=i.getContext("2d");e.fillStyle="#5c4827",e.fillRect(0,0,256,320),e.fillStyle="#1f2a2b",e.fillRect(12,12,232,296);const t=e.createRadialGradient(128,128,6,128,128,120);t.addColorStop(0,"rgba(255,231,177,0.45)"),t.addColorStop(1,"rgba(255,231,177,0)"),e.fillStyle=t,e.fillRect(0,0,256,320),e.strokeStyle="#d8b36b",e.lineWidth=5,e.strokeRect(24,24,208,272),e.strokeStyle="#e1c17b",e.lineWidth=12,e.beginPath(),e.moveTo(128,70),e.lineTo(128,232),e.moveTo(82,128),e.lineTo(174,128),e.moveTo(94,196),e.lineTo(160,208),e.stroke(),e.strokeStyle="rgba(225,193,123,0.45)",e.lineWidth=2,e.beginPath(),e.arc(128,128,72,0,Math.PI*2),e.stroke();const n=new kn(i);return n.colorSpace=Rt,n.needsUpdate=!0,n}function Ng(i){const e=new Xe;e.name="chapel-of-st-nicholas",e.position.set(re.chapel.x,re.chapel.ground,re.chapel.z),e.rotation.y=.16;const t=Ai(i.plaster,{color:16117729,roughness:.94}),n=Ai(i.concrete,{color:15130574,roughness:.92}),s=new ie({color:1531035,roughness:.35,metalness:.1,emissive:665668,emissiveIntensity:.25}),r=new ie({color:13213778,roughness:.28,metalness:.82}),o=new ie({color:4074785,roughness:.78,metalness:.04});new ie({color:10181958,roughness:.8,metalness:.08});const a=new N(new de(3.1,.32,3.1),n);a.position.y=.16,a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=new N(new de(2.55,.22,3.15),n);c.position.set(0,.1,.2),c.receiveShadow=!0,e.add(c);const l=new N(new de(3,.85,.32),n);l.position.set(0,-.26,1.47),l.castShadow=!0,e.add(l);const h=new N(new de(1,.12,.34),n);h.position.set(0,.17,1.8),e.add(h);const u=new N(new Qe(1.05,1.2,2.32,32),t);u.position.y=1.49,u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new N(new Qe(1.34,1.23,.16,32),n);f.position.y=2.69,f.castShadow=!0,e.add(f);const d=new N(new Qe(1.05,1.11,1.15,24),s);d.position.y=3.31,d.castShadow=!0,e.add(d);const x=new N(new yn(1.055,.04,5,32),r);x.rotation.x=Math.PI/2,x.position.y=3.88,e.add(x);const g=new N(new Qe(1.11,1.11,.12,24),s);g.position.y=2.79,e.add(g);const m=jn(.38,.66,.21),p=new ie({color:2827805,emissive:16765595,emissiveIntensity:.15,roughness:.32,metalness:.1});for(let we=0;we<6;we++){const fe=we/6*Qt+.24,Y=new N(new $n(m,{depth:.035,bevelEnabled:!1}),p);Y.position.set(Math.sin(fe)*1.025,3.12,Math.cos(fe)*1.025),Y.rotation.y=fe,e.add(Y);const J=new N(new $n((()=>{const pe=jn(.48,.76,.25),be=jn(.38,.66,.21);return pe.holes.push(be),pe})(),{depth:.025,bevelEnabled:!1}),r);J.position.set(Math.sin(fe)*1.08,3.07,Math.cos(fe)*1.08),J.rotation.y=fe,e.add(J)}const _=new Xe,v=jn(.84,1.62,.44),M=new N(new $n(v,{depth:.08,bevelEnabled:!1}),o);M.position.z=.02,_.add(M);const w=jn(1,1.76,.5),S=jn(.84,1.62,.44);w.holes.push(S);const T=new N(new $n(w,{depth:.06,bevelEnabled:!1}),n);T.position.z=-.01,_.add(T);const P=new N(new Ht(.34,.44),new ie({map:Ug(),roughness:.5,metalness:.25}));P.position.set(0,1.93,.11),_.add(P),_.position.set(0,.31,1.17),_.rotation.y=0,e.add(_);const y=[],b=18,C=1.22;for(let we=0;we<=b;we++){const fe=we/b,Y=Math.sin(fe*Math.PI)*.93+Math.pow(1-fe,2)*.18,J=Math.sin(fe*Math.PI*.5)*.78+fe*.34;y.push(new le(Math.max(.015,Y),J))}y.push(new le(.02,C));const I=new N(new tc(y,32),r);I.position.y=3.96,I.castShadow=!0,e.add(I);const z=new N(new Qe(1.08,1.15,.1,24),r);z.position.y=3.92,e.add(z);const B=new N(new Ft(.12,10,8),r);B.position.y=5.25,e.add(B);const U=new Xe,F=r,G=new N(new de(.065,1.25,.065),F);G.position.y=.62,U.add(G);const W=new N(new de(.64,.075,.07),F);W.position.y=.89,U.add(W);const Q=new N(new de(.36,.052,.06),F);Q.position.y=.28,Q.rotation.z=-.32,U.add(Q),U.position.y=5.29,e.add(U);const te=new ic(16761981,2.4,7,2);te.position.set(0,1.3,0),e.add(te);const Se=new N(new Ht(.7,.2),new pi({color:16766875,transparent:!0,opacity:.18}));Se.position.set(0,1.23,.09),_.add(Se);const Ge=new ie({color:10918791,map:i.stone,roughness:.98,flatShading:!0}),ne=rt(6417);for(let we=0;we<5;we++){const fe=new N(new Ni(ne.range(.16,.35),0),Ge);fe.position.set(ne.range(-2.3,2.3),.1,ne.range(-2.4,2.1)),fe.rotation.set(ne.range(0,Math.PI),ne.range(0,Math.PI),ne.range(0,Math.PI)),fe.castShadow=!0,e.add(fe)}return e}function Al(i,e=512,t=96,n="#cdbd9f"){const s=document.createElement("canvas");s.width=e,s.height=t;const r=s.getContext("2d");r.fillStyle="#232120",r.fillRect(0,0,e,t),r.strokeStyle="rgba(186,169,134,0.4)",r.lineWidth=2,r.strokeRect(8,8,e-16,t-16),r.fillStyle=n,r.textAlign="center",r.textBaseline="middle",r.font='600 27px "Times New Roman", Georgia, serif',r.fillText(i,e/2,t/2+1);const o=new kn(s);return o.colorSpace=Rt,o.needsUpdate=!0,o}function Fg(i){const e=new Xe;e.name="sailors-memorial",e.position.set(re.memorial.x,re.memorial.ground,re.memorial.z),e.rotation.y=.52,e.scale.setScalar(.86);const t=Ai(i.memorialPlinth,{color:14862265,roughness:.67,metalness:.06}),n=new ie({color:2830641,roughness:.42,metalness:.16}),s=new N(new de(3.45,.24,2.25),t);s.position.y=.12,s.castShadow=!0,s.receiveShadow=!0,e.add(s);const r=new N(new de(3.02,.26,1.94),t);r.position.y=.36,r.castShadow=!0,r.receiveShadow=!0,e.add(r);const o=new N(new de(2.78,.12,1.68),n);o.position.set(0,.65,.02),o.rotation.x=.22,o.castShadow=!0,o.receiveShadow=!0,e.add(o);const a=new N(new Ht(2.58,1.34),new ie({map:i.memorial.map,roughness:.48,metalness:.06,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.rotation.set(-Math.PI/2+.22,0,0),a.position.set(0,.76,.02),e.add(a);const c=new N(new de(.86,1.85,.22),n);c.position.set(-1.12,1.24,1.02),c.rotation.y=-.15,c.castShadow=!0,c.receiveShadow=!0,e.add(c);const l=new N(new Ht(.72,.16),new ie({map:Al("ВЕЧНАЯ ПАМЯТЬ",1024,160),roughness:.5}));l.position.set(-1.12,1.94,1.14),l.rotation.y=-.15,e.add(l);const h=new ie({color:10255442,roughness:.53,metalness:.44}),u=new Xe,f=new N(new yn(.12,.025,5,16),h);f.position.y=.18,u.add(f);const d=new N(new de(.035,.45,.035),h);d.position.y=-.02,u.add(d);const x=new N(new de(.33,.035,.035),h);x.position.y=.08,u.add(x);const g=new Bn([new L(-.2,-.22,0),new L(-.15,-.3,0),new L(0,-.33,0),new L(.15,-.3,0),new L(.2,-.22,0)]);u.add(new N(new ei(g,10,.022,4,!1),h)),u.position.set(-1.12,.77,1.15),u.rotation.y=-.15,e.add(u);const m=new N(new Ht(1.35,.17),new ie({map:Al("МОРЯКАМ ЧЕРНОМОРЦАМ · 1941—1945",1024,128,"#bfa676"),roughness:.6,metalness:.15}));m.position.set(.7,.44,1.14),e.add(m);const p=new Xe,_=new ie({color:7303504,roughness:.8,metalness:.1});for(let v=0;v<14;v++){const w=v/14*Math.PI*2,S=new N(new Ft(.07,5,4),_);S.scale.set(.65,.25,1.9),S.position.set(Math.cos(w)*.35,0,Math.sin(w)*.35),S.rotation.y=-w,p.add(S)}return p.position.set(1.1,.54,.68),p.rotation.x=.2,e.add(p),e}function Og(i){const e=new Xe;e.position.set(re.service.x,re.service.ground,re.service.z),e.rotation.y=.2;const t=Ai(i.plaster,{color:15327955,roughness:.95}),n=new ie({color:4612459,roughness:.72,metalness:.2}),s=new N(new de(3.4,2.3,2.35),t);s.position.y=1.15,s.castShadow=!0,s.receiveShadow=!0,e.add(s);const r=new N(new Pi(2.28,.72,4),n);r.rotation.y=Math.PI/4,r.position.y=2.69,r.castShadow=!0,r.receiveShadow=!0,e.add(r);const o=new N(new de(3.75,.12,2.7),n);o.position.y=2.35,e.add(o);const a=new N(new de(.65,1.4,.06),new ie({color:2117991,roughness:.75}));a.position.set(-.8,.72,1.2),e.add(a);const c=new N(new de(.55,.5,.045),new ie({color:3103076,emissive:1780525,roughness:.45}));c.position.set(.9,1.32,1.19),e.add(c);const l=new N(new de(.25,.8,.25),t);return l.position.set(1.06,2.65,-.52),l.castShadow=!0,e.add(l),e}function zg(i){const e=new Xe;return e.name="lighthouses-and-memorial",e.add(Ig(i)),e.add(Ng(i)),e.add(Fg(i)),e.add(Og(i)),e}function Cl(i,e){const t=Ln(i,!1),n=new N(t,e);return n.castShadow=!0,n.receiveShadow=!0,n}function Bg(){const i=document.createElement("canvas");i.width=512,i.height=192;const e=i.getContext("2d");e.fillStyle="#1d4f65",e.fillRect(0,0,512,192),e.strokeStyle="rgba(230,234,225,0.72)",e.lineWidth=5,e.strokeRect(12,12,488,168),e.fillStyle="#e6e6d8",e.textAlign="center",e.font='600 52px "Times New Roman", Georgia, serif',e.fillText("ОСТРОВ УТРИШ",256,89),e.font="24px Helvetica, Arial, sans-serif",e.letterSpacing="6px",e.fillText("UTRISH ISLAND",256,131);const t=new kn(i);return t.colorSpace=Rt,t.needsUpdate=!0,t}function kg(i){const e=new Xe;e.name="utrish-footbridge";const t=rt(45526);re.bridge.mainlandX-re.bridge.islandX,(re.bridge.mainlandX+re.bridge.islandX)*.5;const n=re.bridge.z,s=re.bridge.deckY,r=re.bridge.width,o=new ie({color:8416086,map:i.metal,roughness:.66,metalness:.4}),a=new ie({color:5855055,roughness:.62,metalness:.44}),c=new ie({color:9142901,map:i.metal,roughness:.78,metalness:.26}),l=new ie({color:12103064,map:i.stone,roughness:.98,flatShading:!0}),h=new ie({color:11775649,map:i.concrete,roughness:.92}),u=re.bridge.islandX-.25,f=re.bridge.mainlandX+.25,d=f-u,x=new N(new de(d,.1,r),c);x.position.set((u+f)*.5,s-.1,n),x.castShadow=!0,x.receiveShadow=!0,e.add(x);const g=[];for(let B=0;B<34;B++){const U=new de(.035,.018,r-.12);U.translate(u+.2+B/33*(d-.4),s-.042,n),g.push(U)}const m=Cl(g,a);m.castShadow=!1,e.add(m);for(const B of[-1,1]){const U=new N(new de(d,.31,.12),o);U.position.set((u+f)*.5,s-.23,n+B*(r*.5+.03)),U.castShadow=!0,U.receiveShadow=!0,e.add(U);const F=new N(new de(d*.92,.08,.24),a);F.position.set((u+f)*.5,s-.39,n+B*(r*.5+.03)),F.castShadow=!0,e.add(F)}const p=new Ft(.025,5,4),_=new Pn(p,a,96);_.name="bridge-rivets";const v=new at;let M=0;for(const B of[-1,1])for(let U=0;U<24;U++){const F=u+.2+U/23*(d-.4);for(const G of[-.14,-.31])v.makeTranslation(F,s-.23+G,n+B*(r*.5+.095)),_.setMatrixAt(M++,v)}_.count=M,_.instanceMatrix.needsUpdate=!0,e.add(_);const w=[],S=16;for(const B of[-1,1])for(let U=0;U<=S;U++){const F=u+U/S*d,G=new de(.035,.96,.035);G.translate(F,s+.5,n+B*(r*.5-.02)),w.push(G)}e.add(Cl(w,o));for(const B of[-1,1]){for(const[F,G]of[[.42,.05],[.77,.035]]){const W=new N(new de(d,G,.05),o);W.position.set((u+f)*.5,s+F,n+B*(r*.5-.02)),W.castShadow=!0,e.add(W)}const U=new N(new Qe(.032,.032,d,8),o);U.rotation.z=Math.PI/2,U.position.set((u+f)*.5,s+1.03,n+B*(r*.5-.02)),U.castShadow=!0,e.add(U)}for(const B of[-1,1])for(let U=0;U<4;U++){const F=u+.45+U*(d/4),G=F+d/5.5,W=G-F,Q=new N(new Qe(.025,.025,Math.hypot(W,.55),5),o);Q.position.set((F+G)*.5,s-.52,n+B*(r*.5+.02)),Q.rotation.z=Math.atan2(.55,W),e.add(Q)}const T=Lt(re.bridge.islandX-.5,n),P=Lt(re.bridge.mainlandX+.6,n),y=2.8;for(const[B,U]of[[u-.45,T],[f+.45,P]]){const F=new N(new de(1.25,y,r+.66),l);F.position.set(B,s-y*.5+.04,n),F.castShadow=!0,F.receiveShadow=!0,e.add(F);const G=new N(new de(1.42,.14,r+.8),h);G.position.set(B,s+.02,n),G.receiveShadow=!0,e.add(G)}const b=new Xe;for(let B=0;B<4;B++){const U=new N(new de(.46,.13,r+.35),h);U.position.set(0,.12+B*.12,0),U.castShadow=!0,U.receiveShadow=!0,b.add(U)}b.position.set(u-1.48,s-1.02,n),e.add(b);const C=new N(new de(2.2,.12,r+.5),h);C.position.set(f+1.8,P+.04,n),C.receiveShadow=!0,e.add(C);const I=new N(new Qe(.035,.045,1.35,6),o);I.position.set(f+1.05,P+.72,n+r*.5+.35),e.add(I);const z=new N(new Ht(1.05,.38),new ie({map:Bg(),roughness:.65,metalness:.22,side:_t}));z.position.set(f+1.05,P+1.42,n+r*.5+.37),z.rotation.y=.05,e.add(z);for(let B=0;B<10;B++){const U=new N(new Ni(t.range(.03,.1),0),new ie({color:9076837,roughness:1,flatShading:!0})),F=t.range(u-.8,f+.8),G=n+t.range(-1.1,1.1);U.position.set(F,Math.max(-.15,Lt(F,G)+.08),G),U.rotation.set(t.range(0,3),t.range(0,3),t.range(0,3)),e.add(U)}return e}function Rl(i=51,e="#995f49"){const t=document.createElement("canvas");t.width=512,t.height=256;const n=t.getContext("2d"),s=rt(i);n.fillStyle=e,n.fillRect(0,0,512,256);const r=12,o=16;for(let c=0;c<r;c++){const l=c/r*256;for(let h=0;h<o;h++){const u=h/o*512+(c%2?16:0),f=s.range(-25,22);n.fillStyle=`rgba(${It(154+f,0,255)},${It(95+f*.65,0,255)},${It(70+f*.4,0,255)},0.55)`,n.fillRect(u+1,l+1,512/o-2,256/r-2),n.strokeStyle="rgba(48,35,26,0.27)",n.lineWidth=1,n.strokeRect(u,l,512/o,256/r)}}for(let c=0;c<32;c++)n.fillStyle=`rgba(220,210,188,${s.range(.03,.13)})`,n.beginPath(),n.arc(s.range(0,512),s.range(0,256),s.range(4,32),0,Math.PI*2),n.fill();const a=new kn(t);return a.colorSpace=Rt,a.wrapS=Xt,a.wrapT=Xt,a.repeat.set(2,1.8),a.needsUpdate=!0,a}function Gg(){const i=document.createElement("canvas");i.width=256,i.height=256;const e=i.getContext("2d"),t=rt(302);e.fillStyle="#e4ddcd",e.fillRect(0,0,256,256);for(let s=0;s<90;s++)e.fillStyle=`rgba(${t.range(110,190)},${t.range(105,180)},${t.range(90,160)},${t.range(.02,.08)})`,e.beginPath(),e.arc(t.range(0,256),t.range(0,256),t.range(4,34),0,Math.PI*2),e.fill();const n=new kn(i);return n.colorSpace=Rt,n.wrapS=Xt,n.wrapT=Xt,n.needsUpdate=!0,n}function Vg(i,e,t,n,s){const r=i*.5+n,o=e*.5+n,a=0,c=[-r,0,o,r,0,o,r,t,a,-r,0,o,r,t,a,-r,t,a,r,0,-o,-r,0,-o,-r,t,a,r,0,-o,-r,t,a,r,t,a,-r,0,-o,-r,0,o,-r,t,a,r,0,o,r,0,-o,r,t,a],l=[];for(let f=0;f<c.length;f+=3)l.push((c[f]+r)/(2*r),(c[f+2]+o)/(2*o));const h=new st;h.setAttribute("position",new Ie(c,3)),h.setAttribute("uv",new Ie(l,2)),h.computeVertexNormals();const u=new N(h,s);return u.castShadow=!0,u.receiveShadow=!0,u}function Hg(i,e,t){const n=new Xe,s=gn(i.x,i.z),r=new N(new de(i.w+.6,1.05,i.d+.6),e.stone);r.position.y=-.32,r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=new N(new de(i.w,i.h,i.d),e.wall);o.position.y=i.h*.5+.22,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=Vg(i.w,i.d,.85+i.w*.08,.36,e[i.roof==="grey"?"roofGrey":"roofRed"]);a.position.y=i.h+.22,n.add(a);const c=new ie({color:2310481,emissive:16764818,emissiveIntensity:.11,roughness:.35,metalness:.14}),l=new ie({color:15920093,roughness:.86}),h=i.d*.5+.011,u=i.w>3.4?2:1;for(let g=0;g<u;g++){const m=u===1?0:(-.22+g*.44)*i.w*.55,p=new N(new de(.42,.5,.045),c);p.position.set(m,i.h*.64+.22,h),n.add(p);const _=new N(new de(.56,.06,.08),l);_.position.set(m,i.h*.64-.06,h+.02),n.add(_);const v=new N(new de(.16,.52,.035),new ie({color:3959672,roughness:.8}));v.position.set(m-.31,i.h*.64+.22,h+.03),n.add(v);const M=v.clone();M.position.x=m+.31,n.add(M)}const f=new N(new de(.58,1.35,.06),new ie({color:3957616,roughness:.78}));f.position.set(i.w*.22,.88,i.d*.5+.025),n.add(f);const d=new N(new de(.9,.16,.42),e.stone);d.position.set(i.w*.22,.16,i.d*.5+.26),d.castShadow=!0,n.add(d);const x=new N(new de(.28,.72,.3),e.wall);if(x.position.set(-i.w*.25,i.h+.82,-i.d*.16),x.castShadow=!0,n.add(x),t.chance(.65)){const g=new N(new de(.05,.42,.4),c);g.position.set(i.w*.5+.018,i.h*.64+.22,-i.d*.12),n.add(g)}return n.position.set(i.x,s+.04,i.z),n.rotation.y=i.angle,n}function rc(i,e,t,n=14){const s=[],r=[],o=[],a=new me("#e8e4d5"),c=new me("#b7b4a7"),l=new me("#17384a"),h=[];for(let f=0;f<=n;f++){const d=f/n;let x;d<.56?x=.78+.22*Math.sin(d/.56*Math.PI*.5):x=.02+.98*Math.pow(Math.cos((d-.56)/.44*Math.PI*.5),1.2);const g=Math.max(.03,e*.5*x),m=t*(.62+.38*Math.sin(d*Math.PI)),p=-i*.5+i*d,_=d>.82?(d-.82)*t*.8:0;h.push({z:p,halfWidth:g,keelDepth:m,rise:_})}for(let f=0;f<=n;f++){const{z:d,halfWidth:x,keelDepth:g,rise:m}=h[f];[[-x,.12+m,d],[-x*.8,-g*.38+m,d],[0,-g+m,d],[x*.8,-g*.38+m,d],[x,.12+m,d]].forEach((_,v)=>{s.push(..._);const M=v===0||v===4?a:v===1||v===3?a.clone().lerp(c,.28):a.clone().lerp(l,.18);r.push(M.r,M.g,M.b)})}for(let f=0;f<n;f++){const d=f*5,x=(f+1)*5;for(let g=0;g<4;g++){const m=d+g,p=d+g+1,_=x+g,v=x+g+1;o.push(m,_,p,p,_,v)}}const u=new st;return u.setAttribute("position",new Ie(s,3)),u.setAttribute("color",new Ie(r,3)),u.setIndex(o),u.computeVertexNormals(),u}function wh(i,e){const t=new Ms,n=e*.5;t.moveTo(-n*.82,-i*.5),t.lineTo(n*.82,-i*.5),t.lineTo(n*.94,i*.12),t.quadraticCurveTo(n*.58,i*.42,0,i*.5),t.quadraticCurveTo(-n*.58,i*.42,-n*.94,i*.12),t.closePath();const s=new Xr(t);return s.rotateX(-Math.PI/2),s.translate(0,.13,0),s}function Wg(i,e){const t=new Xe;t.name="moored-motorboat";const n=3.4,s=1.22,r=new N(rc(n,s,.62),i.hull);r.castShadow=!0,r.receiveShadow=!0,t.add(r);const o=new N(wh(n,s),i.deck);o.receiveShadow=!0,t.add(o);const a=new N(new de(s+.02,.08,n*.45),i.stripe);a.position.set(0,.51,-.1),a.scale.z=.55,a.castShadow=!1,t.add(a);const c=new N(new de(.8,.13,1.15),i.cockpit);c.position.set(0,.17,-.26),t.add(c);const l=new N(new de(.47,.56,.27),i.white);l.position.set(0,.48,.27),l.castShadow=!0,t.add(l);const h=new N(new Ht(.43,.27),i.glass);h.position.set(0,.77,.39),h.rotation.x=-.35,t.add(h);for(const v of[-1,1]){const M=new N(new de(.38,.13,.34),i.cushion);M.position.set(v*.24,.27,-.28),M.castShadow=!0,t.add(M);const w=new N(new Ja(.055,.23,3,5),i.fender);w.rotation.z=Math.PI/2,w.position.set(v*(s*.5+.03),.01,-.4),t.add(w)}const u=new Xe,f=new N(new de(.4,.48,.32),i.motor);f.position.y=.13,u.add(f);const d=new N(new Qe(.055,.045,.7,6),i.motor);d.position.set(0,-.36,0),u.add(d);const x=new N(new Qe(.16,.16,.035,8),i.motorMetal);x.rotation.z=Math.PI/2,x.position.y=-.68,u.add(x),u.position.set(0,.28,-n*.5-.12),t.add(u);const g=new N(new Qe(.035,.035,.22,6),i.metal);g.rotation.z=Math.PI/2,g.position.set(0,.2,n*.39),t.add(g);const m=new Bn([new L(-.44,.28,.65),new L(-.25,.36,1.15),new L(0,.38,1.35),new L(.25,.36,1.15),new L(.44,.28,.65)]),p=new N(new ei(m,14,.018,4,!1),i.metal);t.add(p);const _=new N(new de(.34,.055,.012),i.metal);return _.position.set(0,.37,-n*.5+.12),t.add(_),t.userData.length=n,t.userData.width=s,t}function Xg(i){const e=new Xe;e.name="small-excursion-boat";const t=6.4,n=2.05,s=new N(rc(t,n,.9,18),i.hull);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const r=new N(wh(t,n),i.deck);r.receiveShadow=!0,e.add(r);const o=new N(new de(n+.03,.12,t*.74),i.stripe);o.position.set(0,.7,-.2),o.scale.z=.72,e.add(o);const a=new N(new de(1.45,.9,2.6),i.white);a.position.set(0,.68,-.9),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=new N(new de(1.62,.09,2.8),i.blueRoof);c.position.set(0,1.17,-.9),c.castShadow=!0,e.add(c);for(const m of[-1.72,-1.35,-.98,-.61,-.24])for(const p of[-1,1]){const _=new N(new de(.035,.3,.27),i.glassDark);_.position.set(p*.74,.77,m),e.add(_)}const l=new N(new Ht(1.15,.42),i.glassDark);l.position.set(0,.83,.43),e.add(l);const h=new Xe,u=new N(new de(1.8,.09,2.5),i.blueRoof);u.position.set(0,1.75,-1.32),u.castShadow=!0,h.add(u);for(const m of[-.78,.78])for(const p of[-2.35,-.28]){const _=new N(new Qe(.022,.022,.95,5),i.metal);_.position.set(m,1.25,p),h.add(_)}const f=[];for(const m of[-1,1]){const p=new de(.03,.03,2.2);p.translate(m*.9,1.22,-1.35),f.push(p);for(let _=0;_<5;_++){const v=new de(.025,.62,.025);v.translate(m*.9,.92,-2.35+_/4*2),f.push(v)}}const d=new N(Ln(f,!1),i.metal);h.add(d);for(let m=0;m<4;m++){const p=new N(new de(.55,.16,.34),i.cushion);p.position.set(-.47+m%2*.94,1.3,-2.03+Math.floor(m/2)*.65),h.add(p)}e.add(h);const x=new N(new Qe(.028,.032,1.75,5),i.metal);x.position.set(-.38,2.14,-2.5),e.add(x);const g=new N(new Ht(.48,.17),i.flag);return g.position.set(-.12,2.72,-2.5),g.rotation.y=-.15,e.add(g),e.userData.length=t,e.userData.width=n,e}function Yg(i){const e=re.pier.shore,t=re.pier.end,n=new Xe;n.name="cape-pier";const s=t.x-e.x,r=t.z-e.z,o=Math.hypot(s,r),a=Math.atan2(-r,s),c=(e.x+t.x)*.5,l=(e.z+t.z)*.5,h=re.pier.y,u=1.55,f=new ie({color:12169632,map:i.concrete,roughness:.9}),d=new ie({color:16777215,map:i.wood,roughness:.86}),x=new ie({color:5131331,roughness:.68,metalness:.5}),g=new ie({color:9139807,map:i.metal,roughness:.68,metalness:.3}),m=new ie({color:1842972,roughness:.88}),p=new N(new de(o,.18,u),f);p.position.set(c,h,l),p.rotation.y=a,p.castShadow=!0,p.receiveShadow=!0,n.add(p);const _=28;for(let I=0;I<_;I++){const z=(I+.5)/_,B=e.x+s*z,U=e.z+r*z,F=new N(new de(.06,.025,u*.96),d);F.position.set(B,h+.1,U),F.rotation.y=a,n.add(F)}for(const I of[-1,1]){const z=new N(new de(o+.3,.22,.15),d);z.position.set(c+Math.sin(a)*0+Math.cos(a+Math.PI/2)*I*u*.5,h-.1,l-Math.sin(a+Math.PI/2)*I*u*.5),z.rotation.y=a,z.castShadow=!0,n.add(z)}const v=[];for(let I=0;I<=6;I++){const z=.06+I/6*.9,B=e.x+s*z,U=e.z+r*z;for(const F of[-1,1]){const G=B+Math.sin(a+Math.PI/2)*F*u*.42,W=U-Math.cos(a+Math.PI/2)*F*u*.42;v.push([G,W])}}for(const[I,z]of v){const B=Lt(I,z)-.3,U=h-B,F=new N(new Qe(.075,.095,U,6),g);F.position.set(I,B+U*.5,z),F.castShadow=!0,n.add(F)}const M=[];for(let I=0;I<7;I++){const z=I/6*.9+.06,B=e.x+s*z,U=e.z+r*z,F=1,G=B+Math.sin(a+Math.PI/2)*F*u*.47,W=U-Math.cos(a+Math.PI/2)*F*u*.47,Q=new de(.04,.85,.04);if(Q.translate(G,h+.53,W),M.push(Q),I%2===0){const te=new N(new Qe(.085,.1,.3,7),x);te.position.set(G-Math.sin(a+Math.PI/2)*.28,h+.22,W+Math.cos(a+Math.PI/2)*.28),te.castShadow=!0,n.add(te)}}const w=new N(Ln(M,!1),g);n.add(w);const S=[];for(let I=0;I<7;I++){const z=I/6*.9+.06,B=e.x+s*z,U=e.z+r*z,F=B+Math.sin(a+Math.PI/2)*1*u*.47,G=U-Math.cos(a+Math.PI/2)*1*u*.47;S.push(new L(F,h+.9,G))}const T=new Bn(S);n.add(new N(new ei(T,18,.025,4,!1),g));for(let I=0;I<5;I++){const z=.2+I*.15,B=e.x+s*z+Math.sin(a+Math.PI/2)*-u*.52,U=e.z+r*z-Math.cos(a+Math.PI/2)*-u*.52,F=new N(new yn(.16,.06,5,8),m);F.rotation.x=Math.PI/2,F.position.set(B,h-.25,U),n.add(F);const G=new N(new Qe(.009,.009,.42,3),x);G.position.set(B,h-.42,U),n.add(G)}const P=new N(new de(2.1,.4,2.2),f);P.position.set(e.x+.6,gn(e.x,e.z)-.12,e.z),P.castShadow=!0,P.receiveShadow=!0,n.add(P);for(let I=0;I<3;I++){const z=new N(new de(1.3,.15,.45),f);z.position.set(e.x+.35,.17+I*.16,e.z-1-I*.42),z.castShadow=!0,z.receiveShadow=!0,n.add(z)}const y=new N(new Qe(.035,.045,1.9,6),x);y.position.set(e.x+.58,h+.95,e.z+.68),n.add(y);const b=new N(new Ft(.13,8,6),new ie({color:16765595,emissive:16759149,emissiveIntensity:2.4,transparent:!0,opacity:.8}));b.position.set(e.x+.58,h+1.9,e.z+.68),n.add(b);const C=[{x:9.4,z:9.8},{x:11.2,z:15.2},{x:6.3,z:12.8}];return C.forEach((I,z)=>{const B=new Xe,U=new N(new Ft(.24,10,7),new ie({color:z===1?15036237:15064528,roughness:.6}));U.scale.y=.75,B.add(U);const F=new N(new Qe(.245,.245,.1,10),new ie({color:z===1?15783859:13726029,roughness:.7}));F.position.y=.1,B.add(F);const G=new N(new yn(.06,.014,4,10),x);G.position.y=.25,B.add(G),B.position.set(I.x,.05,I.z),n.add(B)}),n.userData.buoys=C,n}function qg(i){const e=new Xe;e.name="dolphinarium-edge";const t=re.dolphinarium,n=.02,s=new ie({color:15328209,roughness:.62}),r=new ie({color:14186572,roughness:.65}),o=new ie({color:3950404,roughness:.9,metalness:.18}),a=new ie({color:16777215,map:i.wood,roughness:.86});function c(_,v,M,w,S){const T=new Xe;T.position.set(_,n,v),T.rotation.y=S;const P=10,y=[];for(let C=0;C<P;C++){const I=C/P;y.push([-M*.5+M*I,-w*.5])}for(let C=0;C<P;C++){const I=C/P;y.push([M*.5,-w*.5+w*I])}for(let C=0;C<P;C++){const I=C/P;y.push([M*.5-M*I,w*.5])}for(let C=0;C<P;C++){const I=C/P;y.push([-M*.5,w*.5-w*I])}for(let C=0;C<y.length;C++){const[I,z]=y[C];if(C%6===0){const B=new N(new Qe(.08,.08,.5,6),s);B.rotation.z=Math.PI/2,B.position.set(I,.12,z),T.add(B);const U=new N(new Qe(.09,.09,.08,6),C%12===0?r:s);U.position.set(I,.22,z),T.add(U)}}const b=new N(new yn(1,.012,3,24),o);b.rotation.x=Math.PI/2,b.scale.set(M*.5,w*.5,1),b.position.y=.47,T.add(b);for(const C of[-M*.15,M*.15]){const I=new N(new Qe(.035,.035,w,5),s);I.rotation.x=Math.PI/2,I.position.set(C,.17,0),T.add(I)}return T}e.add(c(12.9,19.6,3.3,1.8,.2));const l=new N(new de(2.1,.14,.55),a);l.position.set(14.4,.18,19.1),l.rotation.y=.16,e.add(l);const h=gn(t.hutX,t.hutZ),u=new Xe,f=new N(new de(2.6,.5,2),new ie({color:11709600,map:i.concrete,roughness:.9}));f.position.y=.25,u.add(f);const d=new N(new de(2.25,1.5,1.7),new ie({color:14999506,roughness:.84}));d.position.y=.95,d.castShadow=!0,u.add(d);const x=new N(new de(2.5,.12,1.95),new ie({color:3235699,roughness:.62,metalness:.2}));x.position.y=1.79,u.add(x);const g=new N(new de(.55,1.18,.04),new ie({color:3099215,roughness:.7}));g.position.set(0,.8,.87),u.add(g),u.position.set(t.hutX,h+.02,t.hutZ),u.rotation.y=-.3,e.add(u);const m=[];for(let _=0;_<7;_++){const v=17.1+_*.9,M=16.2+_*.18,w=gn(M,v),S=new de(.05,.8,.05);S.translate(M,w+.4,v),m.push(S)}const p=new N(Ln(m,!1),new ie({color:5329990,roughness:.8,metalness:.15}));return e.add(p),e}function Zg(i){const e=new Xe;e.name="beached-rowboat";const t={hull:new ie({color:14868433,roughness:.8,vertexColors:!0}),wood:new ie({color:9139808,map:i.wood,roughness:.9})},n=new N(rc(2.5,.9,.36,10),t.hull);n.castShadow=!0,n.receiveShadow=!0,e.add(n);for(let a=0;a<4;a++){const c=new N(new de(.78-a*.05,.04,.08),t.wood);c.position.set(0,.12,-.8+a*.5),e.add(c)}const s=new N(new de(.8,.06,.25),t.wood);s.position.set(0,.22,.18),e.add(s);const r=14.8,o=13.7;return e.position.set(r,Math.max(.2,gn(r,o)+.12),o),e.rotation.set(.12,-.7,-.08),e}function jg(i){const e=new Xe;e.name="bolshoy-utrish-cape";const t=rt(51870),n=new ie({color:16777215,map:Rl(51,"#995f49"),roughness:.85,metalness:.02}),s=new ie({color:16777215,map:Rl(82,"#72766f"),roughness:.82,metalness:.05}),r=Gg();r.repeat.set(1.2,1);const o={wall:new ie({color:16777215,map:r,roughness:.92}),stone:new ie({color:11708564,map:i.stone,roughness:.97,flatShading:!0}),roofRed:n,roofGrey:s};for(const g of re.village)e.add(Hg(g,o,t));const a=Yg(i);e.add(a);const l={hull:new ie({color:16777215,roughness:.36,metalness:.16,vertexColors:!0}),deck:new ie({color:13154459,roughness:.82}),stripe:new ie({color:1851216,roughness:.48,metalness:.14}),cockpit:new ie({color:5594975,roughness:.8}),white:new ie({color:14473676,roughness:.62}),glass:new ie({color:9417911,transparent:!0,opacity:.36,roughness:.08,metalness:.15,side:_t}),glassDark:new ie({color:2112066,roughness:.15,metalness:.28}),cushion:new ie({color:3103076,roughness:.85}),fender:new ie({color:2638399,roughness:.9}),motor:new ie({color:2237729,roughness:.55,metalness:.28}),motorMetal:new ie({color:5856342,roughness:.45,metalness:.6}),metal:new ie({color:7435115,roughness:.45,metalness:.7}),rope:new ie({color:11114610,roughness:.9}),blueRoof:new ie({color:4814204,roughness:.65,metalness:.16}),flag:new ie({color:15131088,roughness:.8,side:_t})},h=[],u=Xg(l),f=re.boats[0];u.position.set(f.x,.47,f.z),u.rotation.y=f.angle,e.add(u),h.push({group:u,baseY:.47,phase:.3,amplitude:.055,roll:.018,kind:"excursion"});for(const g of re.boats.slice(1)){const m=Wg(l);m.position.set(g.x,.37,g.z),m.rotation.y=g.angle,e.add(m),h.push({group:m,baseY:.37,phase:t.range(0,Math.PI*2),amplitude:t.range(.04,.08),roll:t.range(.014,.036),kind:"motor"})}const d=[{x:7.1,z:9.4},{x:5.9,z:12.4},{x:9.5,z:15.2}];d.forEach((g,m)=>{const p=new N(new Ft(.2,8,6),new ie({color:m===1?14512971:14735816,roughness:.68}));p.scale.y=.75,p.position.set(g.x,.05,g.z),e.add(p);const _=new N(new Qe(.009,.009,.7,3),l.rope);_.position.set(g.x,-.22,g.z),e.add(_)}),h.forEach((g,m)=>{if(m===2)return;const p=new L(0,.26,g.group.userData.length*.3).applyAxisAngle(new L(0,1,0),g.group.rotation.y),_=new L(g.group.position.x+p.x,.28,g.group.position.z+p.z),v=new L(m===0?a.userData.buoys[1].x:d[Math.min(m,d.length-1)].x,.13,m===0?a.userData.buoys[1].z:d[Math.min(m,d.length-1)].z),M=_.clone().lerp(v,.5);M.y=.05;const w=new Bn([_,M,v]),S=new N(new ei(w,12,.012,3,!1),l.rope);e.add(S)}),e.add(Zg(i)),e.add(qg(i));function x(g){h.forEach(m=>{const p=g+m.phase;m.group.position.y=m.baseY+Math.sin(p*.72)*m.amplitude,m.group.rotation.z=Math.sin(p*.52+.7)*m.roll,m.group.rotation.x=Math.sin(p*.41+1.4)*m.roll*.45})}return{group:e,update:x,boats:h,pier:a}}const kt=Math.PI*2;function kr(i,e,t,n){i.onBeforeCompile=s=>{s.uniforms.uWindTime=e.timeUniform,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
        uniform float uWindTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          float windPhase = instanceMatrix[3].x * 0.43 + instanceMatrix[3].z * 0.27;
        #else
          float windPhase = 0.0;
        #endif
        float windHeight = max(position.y, 0.0);
        float gust = sin(uWindTime * 0.32 + windPhase * 0.08) * 0.18 + 0.82;
        float sway = (sin(uWindTime * 1.13 + windPhase) * ${t.toFixed(4)} +
                     sin(uWindTime * 2.17 + windPhase * 1.73) * ${(t*.28).toFixed(4)}) *
                     windHeight * gust;
        transformed.x += sway;
        transformed.z += sway * 0.38;`)},i.customProgramCacheKey=()=>n}function _n(i,e,t,n,s){return Math.hypot(i-t,e-n)<s}function Kg(i,e,t=re.path){let n=1/0;for(let s=0;s<t.length-1;s++){const r=t[s][0],o=t[s][1],a=t[s+1][0],c=t[s+1][1],l=a-r,h=c-o,u=i-r,f=e-o,d=l*l+h*h,x=d>0?It((u*l+f*h)/d):0,g=r+l*x,m=o+h*x;n=Math.min(n,Math.hypot(i-g,e-m))}return n}function Ua(i,e,t=0){return!!(Kg(i,e)<1.3+t||_n(i,e,re.tower.x,re.tower.z,5.4+t)||_n(i,e,re.chapel.x,re.chapel.z,3.75+t)||_n(i,e,re.memorial.x,re.memorial.z,2.8+t)||_n(i,e,re.service.x,re.service.z,3.2+t)||_n(i,e,5.9,re.bridge.z,2.5+t))}function jr(i,e,t=0){if(_n(i,e,re.pier.shore.x,re.pier.shore.z,2.3+t)||_n(i,e,re.dolphinarium.hutX,re.dolphinarium.hutZ,2.4+t))return!0;for(const n of re.village)if(_n(i,e,n.x,n.z,Math.max(n.w,n.d)*.95+t))return!0;return!!_n(i,e,re.bridge.mainlandX+2.2,re.bridge.z,4+t)}function xs(i,e){const n=Lt(i+.38,e)-Lt(i-.38,e),s=Lt(i,e+.38)-Lt(i,e-.38);return Math.hypot(n,s)/(2*.38)}function Bo(i=1,e=1){const t=new Ft(i,7,5),n=t.attributes.position,s=rt(Math.floor(i*1e3+e*17));for(let r=0;r<n.count;r++){const o=n.getX(r),a=n.getY(r),c=n.getZ(r),l=1+Mn(o*3.1+3,c*3.1-a*1.2)*.1;n.setXYZ(r,o*l*s.range(.86,1.12),a*s.range(.36,.6),c*l*s.range(.88,1.16))}return t.computeVertexNormals(),t}function $g(i,e){const t=new Xe;t.name="pebble-beach-and-seabed";const n=["#a9a08e","#958d7c","#c0b6a4","#7e7a70","#b2a795","#74746b","#a89a85"].map(M=>new me(M)),s=rt(780996),r=[],o=[],a=[],c=(M,w,S="beach")=>{const T=pn(M,w);if(S==="beach"){if(!T.isMainland||T.height<.08)return!1;const B=T.mainlandInland;if(B<.4||B>7.4||w<-4||w>22||jr(M,w,-.5))return!1}else if(S==="shallow"){if(T.isIsland||T.height>-.08||-T.height>2.8||T.mainlandInland>-.2)return!1}else if(S==="island-shallow"&&(T.islandDistance>3.8||T.islandDistance<-.5||T.height>1.2||T.height<-1.4))return!1;const P=s.random(),y=P<.08?2:P<.28?1:0,b=S==="beach"?s.range(.035,.11):s.range(.045,.16),C=y===2?b*s.range(1.7,2.8):y===1?b*1.4:b,I=T.height+C*s.range(.13,.45),z={x:M,y:I,z:w,sx:C*s.range(.75,1.6),sy:C*s.range(.35,.7),sz:C*s.range(.75,1.55),rx:s.range(0,Math.PI),ry:s.range(0,kt),rz:s.range(0,Math.PI),color:s.choose(n).clone().multiplyScalar(s.range(.82,1.08))};return y===2?a.push(z):y===1?o.push(z):r.push(z),!0};let l=0;for(;l<6500&&r.length+o.length+a.length<1050;){l++;const M=s.random();let w;if(M<.52){w=s.range(0,21.5);const S=$s(w)+s.range(.5,7);c(S,w,"beach")}else if(M<.82){w=s.range(-4,22);const S=$s(w)-s.range(.4,5.5);c(S,w,"shallow")}else{const S=s.range(-32,7);w=s.range(-8,11.5),c(S,w,"island-shallow")}}const h=new ie({color:16777215,roughness:.76,metalness:.02}),u=new at,f=new bn,d=new Sn,x=new L,g=new L,m=Bo(1,1),p=Bo(1,2),_=Bo(1,2),v=(M,w,S)=>{const T=new Pn(w,h,M.length);T.name=S,T.receiveShadow=!0,M.forEach((P,y)=>{d.set(P.rx,P.ry,P.rz),f.setFromEuler(d),x.set(P.sx,P.sy,P.sz),g.set(P.x,P.y,P.z),u.compose(g,f,x),T.setMatrixAt(y,u),T.setColorAt(y,P.color)}),T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0),T.computeBoundingSphere(),t.add(T)};return v(r,m,"small-pebbles"),v(o,p,"medium-pebbles"),v(a,_,"coarse-beach-stones"),t}function Jg(i=7){const e=[],t=[],n=[],s=rt(27221);for(let o=0;o<i;o++){const a=o/i*kt+s.range(-.3,.3),c=s.range(0,.17),l=Math.cos(a)*c,h=Math.sin(a)*c,u=s.range(.015,.031),f=s.range(.35,1),d=s.range(.12,.36),x=2,g=e.length/3;for(let m=0;m<=x;m++){const p=m/x,_=f*p,v=Math.cos(a)*d*p*p,M=Math.sin(a)*d*p*p,w=u*(1-p*.84);e.push(l+v-Math.sin(a)*w,_,h+M+Math.cos(a)*w),e.push(l+v+Math.sin(a)*w,_,h+M-Math.cos(a)*w);const S=.66+p*.33;if(n.push(.7*S,.67*S,.43*S,.7*S,.67*S,.43*S),m<x){const T=g+m*2;t.push(T,T+2,T+1,T+1,T+2,T+3)}}}const r=new st;return r.setAttribute("position",new Ie(e,3)),r.setAttribute("color",new Ie(n,3)),r.setIndex(t),r.computeVertexNormals(),r}function Qg(i,e){const t=new Xe;t.name="coastal-grass-and-wildflowers";const n=Jg(8),s=new ie({color:16777215,vertexColors:!0,roughness:.98,side:_t});kr(s,e,.12,"grass-wind-v1");const r=rt(27658),o=[];let a=0;for(;a<22e3&&o.length<950;){a++;let y,b;if(r.chance(.3)?(y=r.range(-31.5,7.5),b=r.range(-9.5,10.2)):(y=r.range(9,40),b=r.range(-30,28)),!ms(y,b,.03))continue;const I=pn(y,b);if(I.height<.2||I.isIsland&&(I.height<.7||Ua(y,b,.55))||I.isMainland&&(jr(y,b,.5)||I.mainlandInland<2)||xs(y,b)>1.15||vt(y*.18+2.2,b*.18-4.1,3)*.5+.5<.23)continue;const U=I.isIsland?r.range(.28,.7):r.range(.24,.6),F=I.isIsland?new me().setHSL(r.range(.11,.16),r.range(.22,.39),r.range(.38,.56)):new me().setHSL(r.range(.12,.19),r.range(.2,.38),r.range(.28,.47));o.push({x:y,y:I.height+.02,z:b,scale:U,rot:r.range(0,kt),tint:F})}const c=new Pn(n,s,o.length);c.name="dry-grass-tufts";const l=new at,h=new bn,u=new L,f=new L;o.forEach((y,b)=>{h.setFromAxisAngle(new L(0,1,0),y.rot),u.set(y.x,y.y,y.z),f.set(y.scale*1,y.scale,y.scale*1),l.compose(u,h,f),c.setMatrixAt(b,l),c.setColorAt(b,y.tint)}),c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),c.computeBoundingSphere(),c.castShadow=!0,c.receiveShadow=!0,t.add(c);const d=["#e6c15f","#f2e8d1","#b083b3","#e4a15d"],x=[];for(let y=0;y<5;y++){const b=new qs(.075,6);b.rotateX(-Math.PI/2),b.rotateY(y/5*kt),b.translate(Math.cos(y/5*kt)*.065,0,Math.sin(y/5*kt)*.065),x.push(b)}const g=Ln(x,!1),m=new ie({color:16777215,roughness:.85,side:_t,emissive:1773572,emissiveIntensity:.05}),p=new Qe(.008,.012,1,4);p.translate(0,.5,0);const _=new ie({color:5464380,roughness:1}),v=[];let M=0;for(;M<4e3&&v.length<95;){M++;const y=r.range(-30.5,6.9),b=r.range(-8.5,9.7);if(!ms(y,b,.06))continue;const C=pn(y,b);!C.isIsland||C.height<1||C.height>6.4||Ua(y,b,.35)||xs(y,b)>1.7||Lt(y,b)<.2||v.push({x:y,y:C.height+.01,z:b,scale:r.range(.45,.9),stem:r.range(.2,.45),color:new me(r.choose(d)),sway:r.range(0,kt)})}const w=new Pn(g,m,v.length);w.name="wildflower-heads";const S=new Pn(p,_,v.length),T=new at,P=new at;return v.forEach((y,b)=>{h.setFromAxisAngle(new L(0,1,0),y.sway),u.set(y.x,y.y+y.stem,y.z),f.set(y.scale,y.scale,y.scale),T.compose(u,h,f),w.setMatrixAt(b,T),w.setColorAt(b,y.color),u.set(y.x,y.y,y.z),f.set(y.scale,y.stem,y.scale),P.compose(u,h,f),S.setMatrixAt(b,P)}),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),S.instanceMatrix.needsUpdate=!0,w.computeBoundingSphere(),S.computeBoundingSphere(),w.castShadow=!1,S.castShadow=!1,t.add(w,S),t}function Pl(i=0){const e=rt(32273+i*13),t=[],n=i===0?4:3;for(let r=0;r<n;r++){const o=new li(1,0),a=e.range(.58,1.05);o.scale(a*e.range(.82,1.24),a*e.range(.58,.9),a*e.range(.8,1.22)),o.translate(e.range(-.48,.48),e.range(0,.25),e.range(-.46,.46)),o.rotateY(e.range(0,kt)),t.push(o)}const s=Ln(t,!1);return s.computeVertexNormals(),s}function e_(i=33){const e=rt(i),t=[];for(let s=0;s<4;s++){const r=new li(1,0),o=e.range(.42,.82);r.scale(o*e.range(.85,1.35),o*e.range(.35,.68),o*e.range(.8,1.2)),r.translate(e.range(-.5,.5),e.range(.05,.35),e.range(-.45,.45)),r.rotateY(e.range(0,kt)),t.push(r)}const n=Ln(t,!1);return n.computeVertexNormals(),n}function t_(i,e){const t=new Xe;t.name="utrish-open-woodland";const n=rt(6734),s=[],r=[];let o=0;for(;o<11e3&&s.length+r.length<260;){o++;const w=n.range(8.5,41),S=n.range(-31,29);if(!ms(w,S,.035))continue;const T=pn(w,S);if(!(!T.isMainland||T.mainlandInland<10||T.height<1.3||jr(w,S,1.1)||xs(w,S)>1.4||vt(w*.09+2.7,S*.09-1.4,3)*.5+.5<.28)&&!(Mn(w*.42,S*.42)>.73))if(n.chance(.53)){const b=n.range(2.6,5.7)*(.8+T.height*.014);s.push({x:w,y:T.height,z:S,height:b,canopy:n.range(.72,1.8),rotation:n.range(0,kt),variant:n.random()<.55?0:1,tint:new me().setHSL(n.range(.23,.31),n.range(.3,.5),n.range(.08,.16))})}else r.push({x:w,y:T.height,z:S,scale:n.range(.55,1.35),rotation:n.range(0,kt),tint:new me().setHSL(n.range(.21,.29),n.range(.28,.48),n.range(.07,.15))})}const a=[[-26.8,3.9,.95],[-22.4,5.7,.9],[-17.9,6.3,.8],[-11.8,7.1,.85],[-6.7,7.3,.7],[-2.6,6.8,.8],[3.4,5.5,.65],[-29.1,-3.5,.8],[-23,-5.1,.7],[-16,-5.7,.65],[-9.5,-5,.6]];for(const[w,S,T]of a){const P=pn(w,S);!P.isIsland||P.height<.8||Ua(w,S,.1)||xs(w,S)>.72||r.push({x:w,y:P.height,z:S,scale:T*.8,rotation:n.range(0,kt),tint:new me().setHSL(n.range(.24,.3),n.range(.3,.45),n.range(.08,.15))})}s.push({x:-24.2,y:gn(-24.2,-2.6),z:-2.6,height:2.9,canopy:1.35,rotation:1.7,variant:0,tint:new me().setHSL(.27,.35,.11)},{x:-18.4,y:gn(-18.4,-3.5),z:-3.5,height:2.3,canopy:1.1,rotation:3.4,variant:1,tint:new me().setHSL(.28,.33,.1)});const c=new Qe(.07,.12,1,5);c.translate(0,.5,0);const l=new ie({color:7035205,roughness:.98,flatShading:!0}),h=new ie({color:16777215,roughness:.92,flatShading:!0});kr(h,e,.052,"tree-canopy-wind-v1");const u=new ie({color:16777215,roughness:.96,flatShading:!0});kr(u,e,.048,"shrub-wind-v1");const f=[Pl(0),Pl(1)],d=new Pn(c,l,s.length);d.name="pine-trunks",d.castShadow=!0,d.receiveShadow=!0;const x=f.map((w,S)=>{const T=s.filter(y=>y.variant===S).length,P=new Pn(w,h,T);return P.name=`pine-canopies-${S}`,P.castShadow=!0,P.receiveShadow=!0,{mesh:P,cursor:0}}),g=new at,m=new bn,p=new L,_=new L;s.forEach((w,S)=>{m.setFromAxisAngle(new L(0,1,0),w.rotation),p.set(w.x,w.y,w.z),_.set(w.height*.24,w.height,w.height*.24),g.compose(p,m,_),d.setMatrixAt(S,g);const T=x[w.variant];p.set(w.x,w.y+w.height*.88,w.z),_.set(w.canopy,w.canopy*(w.variant===0?.82:.92),w.canopy),g.compose(p,m,_),T.mesh.setMatrixAt(T.cursor,g),T.mesh.setColorAt(T.cursor,w.tint),T.cursor++}),d.instanceMatrix.needsUpdate=!0,d.computeBoundingSphere(),t.add(d),x.forEach(({mesh:w})=>{w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),w.computeBoundingSphere(),t.add(w)});const v=e_(),M=new Pn(v,u,r.length);return M.name="juniper-and-pistachio-scrub",M.castShadow=!0,M.receiveShadow=!0,r.forEach((w,S)=>{m.setFromAxisAngle(new L(0,1,0),w.rotation),p.set(w.x,w.y-w.scale*.05,w.z),_.set(w.scale*1.3,w.scale*.72,w.scale*1.15),g.compose(p,m,_),M.setMatrixAt(S,g),M.setColorAt(S,w.tint)}),M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),M.computeBoundingSphere(),t.add(M),t}function n_(i,e){const t=new Xe;t.name="seagrass-and-algae";const n=rt(24233),s=[];let r=0;for(;r<6e3&&s.length<190;){r++;const p=n.range(-2,19),_=n.random();let v;if(_<.62?v=$s(p)-n.range(.8,5.5):v=n.range(-30,3),!ms(v,p,.08))continue;const M=pn(v,p);M.height>-.35||M.height<-2.4||xs(v,p)>.62||M.mainlandInland>-.3&&M.isMainland||_n(v,p,re.pier.end.x,re.pier.end.z,3.2)||_n(v,p,re.pier.shore.x,re.pier.shore.z,3.8)||jr(v,p,.5)||n.chance(.38)||s.push({x:v,z:p,y:M.height+.015,scale:n.range(.35,.95),rot:n.range(0,kt),tint:new me().setHSL(n.range(.19,.28),n.range(.2,.4),n.range(.16,.27))})}function o(p,_){const v=[],M=rt(2329);for(let w=0;w<p;w++){const S=w/p*kt+M.range(-.25,.25),T=M.range(.018,.042),P=_*M.range(.6,1.1),y=M.range(.05,.22),b=Math.cos(S)*M.range(.02,.16),C=Math.sin(S)*M.range(.02,.16),I=[[-T,0,0],[T,0,0],[-T*.65+Math.cos(S)*y,P*.55,Math.sin(S)*y],[T*.65+Math.cos(S)*y,P*.55,Math.sin(S)*y],[Math.cos(S)*y*1.7,P,Math.sin(S)*y*1.7]],z=v.length,B=[0,1,2,1,3,2,2,3,4];I.forEach(F=>{const G=new st;G.setAttribute("position",new Ie(F,3)),v.push(G)}),v.splice(z,5);const U=new st;U.setAttribute("position",new Ie(I.flat(),3)),U.setIndex(B),U.computeVertexNormals(),U.translate(b,0,C),v.push(U)}return Ln(v,!1)}const a=o(5,.8),c=new ie({color:16777215,roughness:.9,side:_t});kr(c,e,.055,"seagrass-wind-v1");const l=new Pn(a,c,s.length);l.name="seagrass-clumps",l.receiveShadow=!0;const h=new at,u=new bn,f=new L,d=new L;s.forEach((p,_)=>{u.setFromAxisAngle(new L(0,1,0),p.rot),f.set(p.x,p.y,p.z),d.set(p.scale,p.scale,p.scale),h.compose(f,u,d),l.setMatrixAt(_,h),l.setColorAt(_,p.tint)}),l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.computeBoundingSphere(),t.add(l);const x=new Ni(1,0),g=[];for(r=0;r<3e3&&g.length<70;){r++;const p=n.range(-24,16),_=n.range(1,18);if(!ms(p,_,.08))continue;const v=pn(p,_);if(v.height>-.12||v.height<-1.2||xs(p,_)>.5||_n(p,_,re.pier.end.x,re.pier.end.z,2.2))continue;const M=n.range(.12,.38);g.push({x:p,y:v.height+M*.2,z:_,scale:M,tint:new me().setHSL(n.range(.07,.13),n.range(.24,.44),n.range(.14,.26))})}const m=new Pn(x,new ie({color:16777215,roughness:.96,flatShading:!0}),g.length);return m.name="brown-algae",g.forEach((p,_)=>{u.setFromAxisAngle(new L(0,1,0),n.range(0,kt)),f.set(p.x,p.y,p.z),d.set(p.scale*1.6,p.scale*.25,p.scale*1.25),h.compose(f,u,d),m.setMatrixAt(_,h),m.setColorAt(_,p.tint)}),m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),m.computeBoundingSphere(),t.add(m),t}function i_(){const i=new Xe;i.rotation.order="YXZ";const e=new ie({color:15263452,roughness:.7}),t=new ie({color:10331298,roughness:.72});new ie({color:2369060,roughness:.75});const n=new ie({color:13931068,roughness:.65}),s=new N(new Ft(1,8,6),e);s.scale.set(.12,.13,.42),i.add(s);const r=new N(new Ft(.11,8,6),e);r.position.set(0,.08,.34),i.add(r);const o=new N(new Pi(.035,.16,5),n);o.rotation.x=Math.PI/2,o.position.set(0,.07,.48),i.add(o);const a=new pi({color:1514266});for(const x of[-1,1]){const g=new N(new Ft(.018,4,3),a);g.position.set(x*.065,.105,.4),i.add(g)}const c=new N(new Pi(.16,.32,4),t);c.rotation.x=-Math.PI/2,c.position.set(0,.01,-.46),c.scale.z=.45,i.add(c);const l=new st,h=[0,0,.14,.54,.02,.06,.42,.01,-.12,.1,0,-.17,.02,0,-.02];l.setAttribute("position",new Ie(h,3)),l.setIndex([0,1,2,0,2,3,0,3,4]),l.computeVertexNormals();const u=new ie({color:15263452,roughness:.7,side:_t,flatShading:!0}),f=new ie({color:3158833,roughness:.8,side:_t,flatShading:!0}),d=[];for(const x of[-1,1]){const g=new Xe,m=new N(l,u);m.scale.x=x,g.add(m);const p=new st;p.setAttribute("position",new Ie([.4,.012,.08,.54,.02,.06,.42,.01,-.12,.3,.005,-.05],3)),p.setIndex([0,1,2,0,2,3]),p.computeVertexNormals();const _=new N(p,f);_.scale.x=x,g.add(_),g.position.set(x*.04,.04,0),i.add(g),d.push(g)}return i.userData.wings=d,i.userData.flapPhase=Math.random()*Math.PI*2,i.scale.setScalar(1),i}function s_(i){const e=new Xe;e.name="gulls";const t=rt(36881),n=[];[{cx:-10,cz:1,rx:15,rz:10,height:28,speed:.083,phase:.2,scale:.8},{cx:-4,cz:6,rx:10,rz:7,height:24,speed:.115,phase:2.5,scale:.62},{cx:-17,cz:-1,rx:20,rz:12,height:31,speed:.065,phase:4.4,scale:.9},{cx:3,cz:2,rx:17,rz:9,height:26,speed:.1,phase:1.3,scale:.7},{cx:-21,cz:10,rx:23,rz:13,height:34,speed:.052,phase:5.2,scale:.88}].forEach((o,a)=>{const c=i_();c.userData.flapPhase=t.range(0,kt),c.userData.glidePhase=t.range(0,kt),c.scale.setScalar(o.scale),e.add(c),n.push({root:c,config:o,index:a})});function r(o){n.forEach(({root:a,config:c,index:l},h)=>{const u=c.phase+o*c.speed,f=c.cx+Math.cos(u)*c.rx,d=c.cz+Math.sin(u)*c.rz,x=c.height+Math.sin(u*1.7+l*1.1)*.9,g=-Math.sin(u)*c.rx,m=Math.cos(u)*c.rz;a.position.set(f,x,d),a.rotation.y=Math.atan2(g,m);const p=It(-Math.cos(u)*.22,-.28,.28);a.rotation.z=p,a.rotation.x=Math.sin(u*.8)*.05;const _=.5+.5*Math.sin(o*.33+a.userData.glidePhase),v=.18+.78*ke(.2,.75,_),M=Math.sin(o*(5.8+h*.33)+a.userData.flapPhase)*v;a.userData.wings[0].rotation.z=-M,a.userData.wings[1].rotation.z=M})}return{group:e,update:r,gulls:n}}function r_(){const i=new Ft(1,28,18),e=i.attributes.position,t=[],n=new me("#40545b"),s=new me("#697c7f"),r=new me("#b6c0bc");for(let d=0;d<e.count;d++){const x=e.getX(d),g=e.getY(d),m=e.getZ(d),p=It((m+1)*.5),_=Math.pow(Math.sin(Math.PI*p),.72)*(.48+.52*p)+.035,v=p>.9?(p-.9)*.4:0,M=x*.31*_,w=g*.37*_+.01,S=m*1.36+v;e.setXYZ(d,M,w,S);const T=It(.5+g*.8),P=r.clone().lerp(s,It(T*1.3));P.lerp(n,ke(.35,.95,T)),t.push(P.r,P.g,P.b)}i.setAttribute("color",new Ie(t,3)),i.computeVertexNormals();const o=new Xe,a=new ie({color:16777215,vertexColors:!0,roughness:.38,metalness:.05}),c=new ie({color:3952469,roughness:.42,metalness:.03,side:_t}),l=new N(i,a);l.castShadow=!1,l.receiveShadow=!1,o.add(l);const h=new st;h.setAttribute("position",new Ie([-.018,.24,.12,-.018,.68,-.05,-.018,.18,-.33,.018,.24,.12,.018,.18,-.33,.018,.68,-.05],3)),h.setIndex([0,1,2,3,4,5,0,2,1,3,5,4]),h.computeVertexNormals(),o.add(new N(h,c));const u=new st;u.setAttribute("position",new Ie([-.03,.01,-1.21,-.54,.01,-1.57,-.08,.01,-1.5,.03,.01,-1.21,.08,.01,-1.5,.54,.01,-1.57],3)),u.setIndex([0,1,2,3,4,5]),u.computeVertexNormals(),o.add(new N(u,c));for(const d of[-1,1]){const x=new st;x.setAttribute("position",new Ie([d*.2,.02,.24,d*.65,-.2,.12,d*.25,-.12,-.08],3)),x.setIndex([0,1,2]),x.computeVertexNormals();const g=new N(x,c);o.add(g);const m=new N(new Ft(.035,5,4),new pi({color:1382682}));m.position.set(d*.19,.06,.83),o.add(m)}const f=new N(new Pi(.085,.3,8),c);return f.rotation.x=Math.PI/2,f.position.set(0,.04,1.39),o.add(f),o}function o_(i,e){const t=new Xe;t.name="wild-black-sea-dolphins";const n=rt(53279),r=[{points:[[-23,18],[-17,20],[-12,18],[-14,14],[-20,13],[-26,15]],speed:1.12,offset:.06,leapDelay:7.5,roll:.1},{points:[[-36,10],[-33,15],[-28,18],[-27,12],[-31,8],[-37,5]],speed:.88,offset:.66,leapDelay:11.3,roll:-.08},{points:[[-8,20],[-3,24],[3,24],[-2,18],[-9,16]],speed:1.3,offset:.38,leapDelay:9.8,roll:.13},{points:[[-30,-12],[-24,-17],[-15,-20],[-8,-20],[-12,-16],[-22,-14]],speed:.98,offset:.24,leapDelay:13.6,roll:-.1}].map((c,l)=>{const h=new Bn(c.points.map(([d,x])=>new L(d,0,x)),!0,"centripetal",.5),u=new Xe;u.rotation.order="YXZ";const f=r_();return f.rotation.y=0,u.add(f),t.add(u),{root:u,body:f,curve:h,speed:c.speed,t:c.offset,leapTimer:c.leapDelay+l*1.7,leaping:!1,leapElapsed:0,leapDuration:1.35,splashStart:!1,splashEnd:!1,lastWake:0,index:l,roll:c.roll,phase:n.range(0,kt)}});function o(c,l){const h=c.root.position;e.addSplash(h.x,h.z,l,Math.floor(10+l*18)),e.addFoamRing(h.x,h.z,.85+l*1.1,.28+l*.2,1.4+l*.5)}function a(c,l){r.forEach(h=>{const u=h.curve.getLength();h.t=(h.t+c*h.speed/u)%1;const f=h.curve.getPointAt(h.t),d=h.curve.getTangentAt(h.t),x=Math.atan2(d.x,d.z);if(h.root.rotation.y=x,h.root.position.x=f.x,h.root.position.z=f.z,h.leaping){h.leapElapsed+=c;const g=It(h.leapElapsed/h.leapDuration),m=Math.sin(g*Math.PI);h.root.position.y=-.52+m*2.05,h.root.rotation.x=-.92*Math.cos(g*Math.PI),h.root.rotation.z=h.roll*Math.sin(g*Math.PI),!h.splashStart&&g>.08&&(h.splashStart=!0,o(h,.55)),!h.splashEnd&&g>.9&&(h.splashEnd=!0,o(h,.78)),g>=1&&(h.leaping=!1,h.root.position.y=-1.02,h.root.rotation.x=.015)}else{h.leapTimer-=c;const g=h.leapTimer<1.25,m=g?-.51+Math.sin(l*1.1+h.phase)*.06:-1.02;h.root.position.y=m,h.root.rotation.x=g?-.08:.015,h.root.rotation.z=Math.sin(l*.35+h.phase)*.045,g&&l-h.lastWake>.52&&(h.lastWake=l,e.addFoamRing(f.x,f.z,.5,.16,1)),h.leapTimer<=0&&(h.leaping=!0,h.leapElapsed=0,h.splashStart=!1,h.splashEnd=!1,h.leapTimer=n.range(9.5,17.5))}})}return{group:t,update:a,dolphins:r}}function a_(i,e,t){const n=new Xe;n.name="coastal-life",n.add($g()),n.add(Qg(i,e)),n.add(t_(i,e)),n.add(n_(i,e));const s=s_();n.add(s.group);const r=o_(e,t);n.add(r.group);function o(a,c){s.update(c),r.update(a,c)}return{group:n,update:o,gulls:s.gulls,dolphins:r.dolphins}}function c_(i){const e=i.geometry,t=["position","normal","uv","color"];if(!t.filter(r=>e.getAttribute(r)).includes("position"))return null;const s=e.index?e.toNonIndexed():e.clone();if(s.getAttribute("normal")||s.computeVertexNormals(),!s.getAttribute("uv")){const r=s.getAttribute("position").count;s.setAttribute("uv",new Ie(new Float32Array(r*2),2))}for(const r of Object.keys(s.attributes))t.includes(r)||s.deleteAttribute(r);return{geometry:s,key:t.map(r=>s.getAttribute(r)?r:"").join("|")}}function Cr(i,{exclude:e=()=>!1}={}){if(!i)return i;i.updateMatrixWorld(!0);const t=i.matrixWorld.clone().invert(),n=[];function s(o){if(!e(o)){if(o.isMesh){const a=o.material;!o.isInstancedMesh&&!o.isSkinnedMesh&&!Array.isArray(a)&&a&&!a.transparent&&!a.isShaderMaterial&&o.renderOrder===0&&o.userData.noMerge!==!0&&n.push(o)}for(const a of o.children)s(a)}}if(s(i),!n.length)return i;const r=new Map;for(const o of n){const a=c_(o);if(!a)continue;const c=`${o.material.uuid}::${a.key}`;r.has(c)||r.set(c,{material:o.material,geometries:[],castShadow:!1,receiveShadow:!1,meshes:[]});const l=r.get(c),h=t.clone().multiply(o.matrixWorld);a.geometry.applyMatrix4(h),l.geometries.push(a.geometry),l.castShadow||=o.castShadow,l.receiveShadow||=o.receiveShadow,l.meshes.push(o)}for(const o of r.values()){if(!o.geometries.length)continue;const a=o.geometries.length===1?o.geometries[0]:Ln(o.geometries,!1);if(!a)continue;a.computeBoundingSphere();const c=new N(a,o.material);c.castShadow=o.castShadow,c.receiveShadow=o.receiveShadow,c.name="merged-static",i.add(c);for(const l of o.meshes)l.parent&&l.parent.remove(l)}return i}const Gr={value:4},oc=[];function l_(i){Gr.value=Math.min(8,i||4),oc.forEach(e=>{e.anisotropy=Gr.value,e.needsUpdate=!0})}function nn(i,e){const t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d",{willReadFrequently:!0});return{canvas:t,ctx:n}}function jt(i,{repeat:e=[1,1],color:t=!0,wrap:n=!0}={}){const s=new kn(i);return s.colorSpace=t?Rt:Nn,n&&(s.wrapS=Xt,s.wrapT=Xt),s.repeat.set(e[0],e[1]),s.anisotropy=Gr.value,s.needsUpdate=!0,oc.push(s),s}function wn(i,e,t,n,s=.08,r=.01){const o=Math.floor(e*t*r);for(let a=0;a<o;a++){const c=n.chance(.5)?255:30;i.fillStyle=`rgba(${c},${c},${c},${n.range(0,s)})`,i.fillRect(n.range(0,e),n.range(0,t),n.range(.5,2.2),n.range(.5,2.2))}}function Dn(i,e,t,n,s=34,r=["#c7bca8","#a99e89","#d1c8b9"]){for(let o=0;o<s;o++){const a=n.range(-e*.08,e*1.08),c=n.range(-t*.08,t*1.08),l=n.range(e*.025,e*.18),h=i.createRadialGradient(a,c,0,a,c,l),u=n.choose(r);h.addColorStop(0,u),h.addColorStop(1,"rgba(255,255,255,0)"),i.save(),i.globalAlpha=n.range(.03,.12),i.fillStyle=h,i.beginPath(),i.arc(a,c,l,0,Math.PI*2),i.fill(),i.restore()}}function h_(){const{canvas:t,ctx:n}=nn(1024,1024),s=nn(1024,1024),r=rt(729544);n.fillStyle="#b8aa91",n.fillRect(0,0,1024,1024);const o=22,a=64,c=1024/o,l=1024/a,h=["#c3b49b","#bbac92","#c8b89f","#b2a389","#c1b197","#b8a98f","#c6b79e","#aa9c84"];s.ctx.fillStyle="#6e6e6e",s.ctx.fillRect(0,0,1024,1024);for(let u=0;u<a;u++){const f=u%2===0?0:c*.5;for(let d=-1;d<o+1;d++){const x=d*c+f,g=u*l;n.fillStyle=r.choose(h),n.fillRect(x+.85,g+.8,c-1.7,l-1.6),s.ctx.fillStyle=r.range(.35,.65)>.5?"#9c9c9c":"#7f7f7f",s.ctx.fillRect(x+1.3,g+1.3,c-2.6,l-2.6),n.save(),n.globalAlpha=r.range(.025,.09),n.fillStyle=r.chance(.5)?"#4d463b":"#faf2df",n.fillRect(x+1.8,g+1.5+r.range(0,l*.5),c-r.range(3,7),r.range(1,l*.5)),n.restore(),r.chance(.055)&&(n.save(),n.globalAlpha=.14,n.strokeStyle="#4c463a",n.lineWidth=.8,n.beginPath(),n.moveTo(x+r.range(2,c*.5),g+r.range(2,l*.7)),n.lineTo(x+r.range(c*.5,c-2),g+r.range(l*.3,l-2)),n.stroke(),n.restore())}}for(let u=0;u<22;u++){const f=r.range(0,1024),d=r.range(0,1024),x=r.range(24,155),g=n.createRadialGradient(f,d,0,f,d,x);g.addColorStop(0,r.chance(.5)?"rgba(248,240,220,0.22)":"rgba(128,123,105,0.13)"),g.addColorStop(1,"rgba(248,240,220,0)"),n.fillStyle=g,n.beginPath(),n.arc(f,d,x,0,Math.PI*2),n.fill()}for(let u=0;u<32;u++){const f=r.range(0,1024),d=r.range(0,1024*.5),x=r.range(1024*.15,1024*.7),g=n.createLinearGradient(f,d,f,d+x);g.addColorStop(0,"rgba(83,81,68,0)"),g.addColorStop(.4,"rgba(76,77,67,0.055)"),g.addColorStop(1,"rgba(76,77,67,0)"),n.fillStyle=g,n.fillRect(f,d,r.range(1,9),x)}return Dn(n,1024,1024,r,22,["#b5a68a","#e0d4bd","#958b78"]),wn(n,1024,1024,r,.16,.018),wn(s.ctx,1024,1024,r,.2,.018),{map:jt(t,{repeat:[2,1.12]}),bumpMap:jt(s.canvas,{repeat:[2,1.12],color:!1})}}function u_(i=9){const{canvas:n,ctx:s}=nn(768,768),r=rt(i);s.fillStyle="#eee8d9",s.fillRect(0,0,768,768),Dn(s,768,768,r,44,["#cfc6b4","#f7f1e3","#c2b6a1","#e4dbc9"]),wn(s,768,768,r,.14,.022);for(let o=0;o<21;o++){const a=r.range(0,768),c=r.range(0,768);s.strokeStyle=`rgba(95, 86, 69, ${r.range(.06,.2)})`,s.lineWidth=r.range(.45,1.3),s.beginPath(),s.moveTo(a,c);const l=r.int(2,5);let h=a,u=c;for(let f=0;f<l;f++)h+=r.range(-17,17),u+=r.range(3,25),s.lineTo(h,u);s.stroke()}for(let o=0;o<8;o++){const a=r.range(0,768),c=r.range(768*.55,768),l=r.range(10,50);s.save(),s.globalAlpha=.18,s.fillStyle="#938a78",s.beginPath(),s.ellipse(a,c,l,l*r.range(.25,.65),r.range(-.8,.8),0,Math.PI*2),s.fill(),s.restore()}for(let o=0;o<18;o++){const a=r.range(0,768),c=r.range(0,768*.3),l=r.range(768*.2,768*.8),h=s.createLinearGradient(a,c,a,c+l);h.addColorStop(0,"rgba(90,95,89,0)"),h.addColorStop(.35,"rgba(90,95,89,0.075)"),h.addColorStop(1,"rgba(90,95,89,0)"),s.fillStyle=h,s.fillRect(a,c,r.range(1,6),l)}return jt(n,{repeat:[1,1]})}function d_(i=17){const{canvas:n,ctx:s}=nn(512,512),r=rt(i);s.fillStyle="#b4af9f",s.fillRect(0,0,512,512),Dn(s,512,512,r,34,["#9f9a8b","#cdc7b8","#aaa493"]),wn(s,512,512,r,.16,.03);for(let o=0;o<40;o++)s.fillStyle=`rgba(45,44,38,${r.range(.05,.2)})`,s.beginPath(),s.arc(r.range(0,512),r.range(0,512),r.range(.5,2.1),0,Math.PI*2),s.fill();return jt(n,{repeat:[1.5,1.5]})}function f_(i=26){const{canvas:n,ctx:s}=nn(640,640),r=rt(i);s.fillStyle="#b7aa90",s.fillRect(0,0,640,640),Dn(s,640,640,r,48,["#928872","#d0c1a5","#b3a488","#ddd0b8","#7f796a"]),wn(s,640,640,r,.22,.03);for(let o=0;o<24;o++){s.strokeStyle=`rgba(74, 70, 61, ${r.range(.08,.3)})`,s.lineWidth=r.range(.4,1.5),s.beginPath();let a=r.range(0,640),c=r.range(0,640);s.moveTo(a,c);for(let l=0;l<4;l++)a+=r.range(-30,40),c+=r.range(-12,20),s.lineTo(a,c);s.stroke()}return jt(n,{repeat:[2,2]})}function p_(i=41){const{canvas:n,ctx:s}=nn(512,256),r=rt(i);s.fillStyle="#7a6247",s.fillRect(0,0,512,256);for(let o=0;o<180;o++){const a=r.range(0,256);s.strokeStyle=`rgba(${r.range(30,85)},${r.range(28,65)},${r.range(20,45)},${r.range(.05,.3)})`,s.lineWidth=r.range(.3,2),s.beginPath(),s.moveTo(0,a);for(let c=0;c<=512;c+=32)s.lineTo(c,a+Math.sin(c*r.range(.008,.03)+o)*r.range(.4,2.7));s.stroke()}for(let o=0;o<9;o++){const a=o/9*256;s.fillStyle="rgba(36,28,21,0.25)",s.fillRect(0,a,512,2),s.fillStyle="rgba(229,211,179,0.08)",s.fillRect(0,a+2,512,1)}return Dn(s,512,256,r,18,["#4d3f2f","#b89b75","#6c5740"]),wn(s,512,256,r,.12,.035),jt(n,{repeat:[2.2,1]})}function m_(i=63){const{canvas:n,ctx:s}=nn(512,512),r=rt(i);s.fillStyle="#5d5b53",s.fillRect(0,0,512,512),Dn(s,512,512,r,38,["#45463f","#7b766a","#3d3d38","#8b7962"]),wn(s,512,512,r,.18,.028);for(let o=0;o<42;o++){const a=r.range(0,512),c=r.range(0,512),l=r.range(2,16);s.fillStyle=`rgba(${r.range(100,140)},${r.range(55,88)},${r.range(32,56)},${r.range(.1,.4)})`,s.beginPath(),s.ellipse(a,c,l,l*r.range(.3,1.1),r.range(0,Math.PI),0,Math.PI*2),s.fill()}return jt(n,{repeat:[1.8,1.8]})}function x_(){const{canvas:t,ctx:n}=nn(1e3,520),s=rt(6466);n.fillStyle="#1e2222",n.fillRect(0,0,1e3,520),Dn(n,1e3,520,s,46,["#282d2d","#171b1c","#333838"]),wn(n,1e3,520,s,.14,.025),n.strokeStyle="rgba(194, 184, 160, 0.34)",n.lineWidth=2,n.strokeRect(18,18,964,484),n.textAlign="center",n.fillStyle="#dfd4bc",n.font='600 38px "Times New Roman", Georgia, serif',n.fillText("ВЕЧНАЯ СЛАВА",1e3/2,84),n.fillStyle="rgba(213, 200, 175, 0.82)",n.font='18px "Times New Roman", Georgia, serif',n.fillText("МОРЯКАМ-ЧЕРНОМОРЦАМ, ПОГИБШИМ ПРИ ТОРПЕДИРОВАНИИ",1e3/2,121),n.fillText("УЧЕБНОГО СУДНА «ФАБРИЦИУС» У МЫСА БОЛЬШОЙ УТРИШ",1e3/2,145),n.fillStyle="rgba(190, 165, 117, 0.9)",n.font='17px "Times New Roman", Georgia, serif',n.fillText("3 ОКТЯБРЯ 1941 ГОДА",1e3/2,174);const r=[["МОРГУНОВ А.Н.","БУЗИЛИЧЕНКО П.Г.","ЛОШАЯН Р.Л.","САХНЕНКО В.И.","АНТОНЮК В.А.","БИЛЕТ А.","ГАВРИЛОВ А.С.","ГЛОБА Ф.Я."],["ГОРОВЕЦ С.Ф.","ДЕРКАЧ Ф.П.","ЕРЕМИН В.","КАПШУК И.Н.","КОЗЛОВ А.П.","КОЛЕСНИК Г.В.","КОРОГОДИН В.П.","КОЧЕТОВ В.В."],["КРАВЧЕНКО И.Д.","КУДИНОВ Г.И.","ЛИХАЧЕВ Ю.Н.","ЛЮБОДА Х.Е.","МАТВИЕНКО Н.А.","МОСКАЛЕНКО А.Х.","ОБУХОВ А.Н.","ПОЛЮШКО Н.В."],["ПАЛИКАРПОВ М.","ПОТАЕВ М.Н.","РУДЕНКО В.Е.","СТЕПАНЯН Г.А.","СТОРОЖЕНКО В.Г.","ТИМОФЕЕВ А.А.","ТКАЧЕВ Г.Н.","ТЮЛЕНЕВ М.И."],["ФОМКИН И.Л.","ХАРЧЕНКО В.И.","ЦУКОВСКИЙ В.В.","ШАШКИН И.И.","ШИБАРЕВ А.Д."]];n.textAlign="left",n.font='15px "Times New Roman", Georgia, serif',n.fillStyle="#cfc5b0";const o=48,a=186;r.forEach((u,f)=>{u.forEach((d,x)=>{n.fillText(d,o+f*a,218+x*29)})}),n.save(),n.translate(934,452),n.strokeStyle="rgba(170, 139, 93, 0.9)",n.lineWidth=3,n.beginPath(),n.arc(0,0,20,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(0,-13),n.lineTo(0,13),n.moveTo(-8,4),n.quadraticCurveTo(0,17,8,4),n.moveTo(-7,-8),n.lineTo(7,-8),n.stroke(),n.restore();const c=jt(t,{repeat:[1,1],wrap:!1}),l=nn(620,320),h=l.ctx;return h.fillStyle="#202526",h.fillRect(0,0,620,320),Dn(h,620,320,rt(88),20,["#2b3030","#181c1d"]),wn(h,620,320,rt(89),.14,.03),h.strokeStyle="rgba(200,184,150,0.36)",h.lineWidth=2,h.strokeRect(12,12,596,296),h.textAlign="center",h.fillStyle="#d9c9a8",h.font='25px "Times New Roman", Georgia, serif',h.fillText("МОРЯКАМ ЧЕРНОМОРЦАМ",310,112),h.font='17px "Times New Roman", Georgia, serif',h.fillStyle="rgba(211,197,170,0.78)",h.fillText("ПАМЯТНИК-МАЯК · 1975",310,148),h.fillStyle="rgba(166, 136, 87, 0.95)",h.beginPath(),h.arc(310,217,24,0,Math.PI*2),h.strokeStyle="rgba(166, 136, 87, 0.95)",h.lineWidth=3,h.stroke(),h.beginPath(),h.moveTo(310,199),h.lineTo(310,236),h.moveTo(298,222),h.quadraticCurveTo(310,241,322,222),h.moveTo(300,205),h.lineTo(320,205),h.stroke(),{map:c,plaqueMap:jt(l.canvas,{repeat:[1,1],wrap:!1})}}function g_(){const{canvas:t,ctx:n}=nn(2048,1024),s=rt(20907);n.fillStyle="#8b8170",n.fillRect(0,0,2048,1024);const r=[{y:0,thickness:64,color:"#4e4737"},{y:64,thickness:30,color:"#b3a382"},{y:94,thickness:68,color:"#c5b08d"},{y:162,thickness:38,color:"#958d7d"},{y:200,thickness:92,color:"#cbb996"},{y:292,thickness:54,color:"#918676"},{y:346,thickness:76,color:"#d0bfa1"},{y:422,thickness:62,color:"#9a917c"},{y:484,thickness:104,color:"#b9a786"},{y:588,thickness:62,color:"#7f786a"},{y:650,thickness:88,color:"#c9b794"},{y:738,thickness:110,color:"#948875"},{y:848,thickness:176,color:"#a79b83"}],o=(h,u)=>84+Math.sin(h*.0032+u*.9)*28+h*.018;n.save(),r.forEach((h,u)=>{if(u===0){n.fillStyle=h.color,n.beginPath(),n.moveTo(0,0),n.lineTo(2048,0);for(let g=2048;g>=0;g-=28)n.lineTo(g,h.thickness+o(g,0)+Mn(g*.006,1)*8);n.closePath(),n.fill();return}n.fillStyle=h.color,n.beginPath();const f=[],d=[];for(let g=-20;g<=2068;g+=24){const m=Mn(g*.007+u*3.4,u*1.7)*9,p=Mn(g*.011+u*2.2+3,u*2.9)*6;f.push([g,h.y+o(g,u)+m]),d.push([g,h.y+h.thickness+o(g,u+.7)+p])}n.moveTo(f[0][0],f[0][1]),f.forEach(([g,m])=>n.lineTo(g,m)),d.reverse().forEach(([g,m])=>n.lineTo(g,m)),n.closePath(),n.fill();const x=s.int(2,6);for(let g=0;g<x;g++){n.strokeStyle=`rgba(${s.chance(.5)?"66,62,52":"236,225,204"},${s.range(.06,.22)})`,n.lineWidth=s.range(.6,2.2),n.beginPath();for(let m=-10;m<=2058;m+=28){const p=h.y+h.thickness*(.15+g*.15)+o(m,u+.35)+Math.sin(m*.01+g)*s.range(1,3)+Mn(m*.015+g,u*6)*5;m<0?n.moveTo(m,p):n.lineTo(m,p)}n.stroke()}}),n.restore();for(let h=0;h<220;h++){const u=s.range(0,2048),f=s.int(2,5),d=r[f].y+r[f].thickness*s.range(.2,.8)+o(u,f),x=s.range(2.5,11),g=s.int(120,215);n.fillStyle=`rgba(${g},${g-s.int(0,10)},${g-s.int(10,30)},${s.range(.35,.8)})`,n.beginPath(),n.ellipse(u,d,x,x*s.range(.45,.9),s.range(0,Math.PI),0,Math.PI*2),n.fill(),n.strokeStyle="rgba(55,52,44,0.22)",n.lineWidth=.8,n.stroke()}for(let h=0;h<4;h++){const u=s.range(245.76,1843.2);n.strokeStyle=`rgba(44, 42, 35, ${s.range(.3,.6)})`,n.lineWidth=s.range(2,5.5),n.beginPath();let f=u,d=24;for(n.moveTo(f,d);d<1024;)d+=s.range(18,50),f+=s.range(-10,9),n.lineTo(f,d);for(n.stroke(),n.strokeStyle="rgba(230, 220, 200, 0.12)",n.lineWidth=1,n.beginPath(),f=u+5,d=30,n.moveTo(f,d);d<1024;)d+=s.range(22,58),f+=s.range(-9,8),n.lineTo(f,d);n.stroke()}Dn(n,2048,1024,rt(713),80,["#5e594d","#e2d4b8","#7f7766","#c9b794"]),wn(n,2048,1024,s,.13,.012);const a=n.createLinearGradient(0,784,0,1024);a.addColorStop(0,"rgba(35,39,35,0)"),a.addColorStop(1,"rgba(35,39,35,0.4)"),n.fillStyle=a,n.fillRect(0,784,2048,240),n.fillStyle="rgba(34,32,27,0.5)",n.fillRect(0,0,2048,5);const c=jt(t,{repeat:[1.55,1],color:!0});c.wrapT=Wt;const l=jt(t,{repeat:[1.55,1],color:!1});return l.wrapT=Wt,{map:c,bumpMap:l}}function __(){const{canvas:i,ctx:e}=nn(512,512),t=rt(512);return e.fillStyle="#8e5f51",e.fillRect(0,0,512,512),Dn(e,512,512,t,36,["#a97562","#7b5248","#b78774","#6e4a41"]),wn(e,512,512,t,.18,.04),jt(i,{repeat:[1,1]})}function v_(){const e=new Uint8Array(262144);for(let n=0;n<256;n++)for(let s=0;s<256;s++){const r=(n*256+s)*4,o=s/256,a=n/256,c=vt(o*5.5,a*5.5,4)*.5+.5,l=vt(o*12+3.1,a*12+7.4,3)*.5+.5,h=Math.pow(Math.abs(vt(o*3.1+8,a*3.1+1,3)),.7),u=Math.pow(vt(o*21+11,a*21+2,3)*.5+.5,1.8);e[r]=Math.floor(c*255),e[r+1]=Math.floor(l*255),e[r+2]=Math.floor(h*255),e[r+3]=Math.floor(u*255)}const t=new Ka(e,256,256,vn);return t.wrapS=Xt,t.wrapT=Xt,t.magFilter=en,t.minFilter=ci,t.generateMipmaps=!0,t.anisotropy=Gr.value,t.needsUpdate=!0,oc.push(t),t}function M_(i=5,e=256,t=1){const{canvas:n,ctx:s}=nn(e,e),r=s.createImageData(e,e),o=new Float32Array(e*e);for(let c=0;c<e;c++)for(let l=0;l<e;l++){const h=l/e,u=c/e;o[c*e+l]=vt(h*7,u*7,4)+vt(h*24,u*24,2)*.35}const a=(c,l)=>o[(l+e)%e*e+(c+e)%e];for(let c=0;c<e;c++)for(let l=0;l<e;l++){const h=(a(l+1,c)-a(l-1,c))*t*4,u=(a(l,c+1)-a(l,c-1))*t*4,f=-h,d=-u,x=1,g=Math.hypot(f,d,x),m=(c*e+l)*4;r.data[m]=Math.floor((f/g*.5+.5)*255),r.data[m+1]=Math.floor((d/g*.5+.5)*255),r.data[m+2]=Math.floor((x/g*.5+.5)*255),r.data[m+3]=255}return s.putImageData(r,0,0),jt(n,{repeat:[14,14],color:!1})}function y_(){const{canvas:e,ctx:t}=nn(512,512),n=t.createImageData(512,512),s=rt(3850);for(let o=0;o<512;o++)for(let a=0;a<512;a++){const c=a/512,l=o/512;let h=vt(c*6.3+3.2,l*6.3+9,5);h+=vt(c*18.7,l*18.7,3)*.26;const u=Math.pow(1-Math.abs(vt(c*4.1,l*4.1,4)),2.4),f=Math.max(0,Math.min(1,(u-.34)*2.7+h*.45+(s.chance(.02)?.45:0))),d=(o*512+a)*4;n.data[d]=247,n.data[d+1]=249,n.data[d+2]=243,n.data[d+3]=Math.floor(f*255)}t.putImageData(n,0,0);for(let o=0;o<450;o++)t.globalCompositeOperation="destination-out",t.globalAlpha=s.range(.15,.7),t.beginPath(),t.ellipse(s.range(0,512),s.range(0,512),s.range(1,8),s.range(.5,3.2),s.range(0,Math.PI),0,Math.PI*2),t.fill();t.globalCompositeOperation="source-over",t.globalAlpha=1;const r=jt(e,{repeat:[1,1],wrap:!1});return r.wrapS=Wt,r.wrapT=Wt,r}function b_(i=94){const{canvas:n,ctx:s}=nn(768,768),r=rt(i);s.fillStyle="#b7aa92",s.fillRect(0,0,768,768);for(let o=0;o<1300;o++){const a=r.range(0,768),c=r.range(0,768),l=r.range(.8,5.4),h=r.range(82,200);s.fillStyle=`rgba(${h},${h-r.range(3,15)},${h-r.range(15,36)},${r.range(.25,.85)})`,s.beginPath(),s.ellipse(a,c,l,l*r.range(.5,1),r.range(0,Math.PI),0,Math.PI*2),s.fill(),r.chance(.4)&&(s.strokeStyle="rgba(54,49,40,0.22)",s.lineWidth=.6,s.stroke())}return Dn(s,768,768,r,24,["#8e816e","#d8cdba","#a59782"]),wn(s,768,768,r,.1,.02),jt(n,{repeat:[3,3]})}function S_(i=95){const{canvas:t,ctx:n}=nn(512,512),s=rt(i);n.fillStyle="#777777",n.fillRect(0,0,512,512);for(let r=0;r<1200;r++){const o=s.range(0,512),a=s.range(0,512),c=s.range(1,7);n.fillStyle=`rgba(${s.range(90,240)},${s.range(90,240)},${s.range(90,240)},0.55)`,n.beginPath(),n.ellipse(o,a,c,c*s.range(.5,1),s.range(0,Math.PI),0,Math.PI*2),n.fill()}return jt(t,{repeat:[3,3],color:!1})}const Na=document.getElementById("scene"),Vr=document.getElementById("loading"),ko=document.getElementById("interface"),Dl=document.getElementById("source-prompt"),Go=document.getElementById("prompt-text");document.querySelector(".prompt-details");const Ji=document.querySelector(".prompt-copy"),Ll=document.querySelector(".close-colophon"),Qi=document.getElementById("colophon"),Vo=document.getElementById("live-region"),ss=new L(-.86,.26,.24).normalize(),Fa=new ef,Ur={timeUniform:{value:0}};let Dt,St,Gt,gt,Il,Ei,ks,rs,os,Ul=[],Oa=null;function w_(){Dt=new Hx({canvas:Na,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});const i=window.matchMedia("(pointer: coarse)").matches?1.5:1.8;Dt.setPixelRatio(Math.min(window.devicePixelRatio||1,i)),Dt.setSize(window.innerWidth,window.innerHeight),Dt.outputColorSpace=Rt,Dt.toneMapping=zl,Dt.toneMappingExposure=1,Dt.shadowMap.enabled=!0,Dt.shadowMap.type=Fl,Dt.shadowMap.autoUpdate=!1,Dt.shadowMap.needsUpdate=!0,Dt.setClearColor(15196888,1)}function E_(){const i=new Qc(16765088,4.05),e=new L(-5,3,1);i.position.copy(e).addScaledVector(ss,85),i.target.position.copy(e),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.camera.left=-62,i.shadow.camera.right=62,i.shadow.camera.top=64,i.shadow.camera.bottom=-60,i.shadow.camera.near=8,i.shadow.camera.far=210,i.shadow.bias=-4e-4,i.shadow.normalBias=.03,i.shadow.camera.updateProjectionMatrix(),St.add(i),St.add(i.target);const t=new jd(11061726,9600609,.55);St.add(t);const n=new Qc(9287375,.32);n.position.set(38,24,30),n.target.position.set(-4,3,0),St.add(n),St.add(n.target);const s=new Jd(3426386,.14);St.add(s);const r=new ic(16763016,5.5,65,2);r.position.set(-25,5,22),St.add(r),St.userData.sun=i}function T_(){const i=new Ft(320,40,24),e={uHorizon:{value:new me("#f3e7d7")},uZenith:{value:new me("#c4d8df")},uLower:{value:new me("#dedbd3")},uSunDirection:{value:ss.clone()},uSunColor:{value:new me("#ffe1b3")}},t=new an({uniforms:e,vertexShader:`
      varying vec3 vDirection;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vDirection = normalize(worldPosition.xyz - cameraPosition);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uHorizon;
      uniform vec3 uZenith;
      uniform vec3 uLower;
      uniform vec3 uSunDirection;
      uniform vec3 uSunColor;
      varying vec3 vDirection;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 345.45));
        p += dot(p, p + 34.345);
        return fract(p.x * p.y);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x),
                   mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
      }

      void main() {
        vec3 dir = normalize(vDirection);
        float up = smoothstep(-0.04, 0.75, dir.y);
        vec3 color = mix(uHorizon, uZenith, up);
        color = mix(uLower, color, smoothstep(-0.8, -0.03, dir.y));
        float sunDot = max(dot(dir, normalize(uSunDirection)), 0.0);
        float halo = pow(sunDot, 10.0) * 0.2 + pow(sunDot, 90.0) * 0.48;
        float disc = smoothstep(0.99965, 0.99996, sunDot);
        color += uSunColor * (halo + disc * 1.1);
        float haze = noise(dir.xz * 8.0 + dir.y * 4.0) * 0.018;
        color += vec3(0.04, 0.032, 0.02) * haze;
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }
    `,side:tn,depthWrite:!1,depthTest:!1,toneMapped:!1});os=new N(i,t),os.name="pale-sky",os.renderOrder=-100,St.add(os),St.userData.skyUniforms=e;const n=document.createElement("canvas");n.width=1024,n.height=512;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,512);r.addColorStop(0,"#bcd4df"),r.addColorStop(.42,"#e6e6df"),r.addColorStop(.55,"#f4e6d4"),r.addColorStop(1,"#d4d1c9"),s.fillStyle=r,s.fillRect(0,0,1024,512);const o=(Math.atan2(ss.z,ss.x)+Math.PI)/(Math.PI*2)*1024,a=Math.acos(ss.y)/Math.PI*512,c=s.createRadialGradient(o,a,2,o,a,220);c.addColorStop(0,"rgba(255,244,213,1)"),c.addColorStop(.08,"rgba(255,225,174,0.9)"),c.addColorStop(.5,"rgba(255,218,170,0.16)"),c.addColorStop(1,"rgba(255,218,170,0)"),s.fillStyle=c,s.fillRect(0,0,1024,512);const l=new kn(n);l.mapping=Nr,l.colorSpace=Rt,l.needsUpdate=!0;const h=new La(Dt);h.compileEquirectangularShader();const u=h.fromEquirectangular(l).texture;St.environment=u,St.environmentIntensity=.4,l.dispose(),h.dispose()}function A_(){const i={},e=performance.now();return i.brick=h_(),i.plaster=u_(70),i.concrete=d_(72),i.stone=f_(73),i.wood=p_(74),i.metal=m_(75),i.memorial=x_(),i.memorialPlinth=__(),i.geology=g_(),i.waterNoise=v_(),i.detailNormal=M_(5,256,.7),i.foam=y_(),i.gravel=b_(94),i.gravelBump=S_(95),l_(Dt.capabilities.getMaxAnisotropy()),i.detailNormal.repeat.set(36,30),i.detailNormal.wrapS=Xt,i.detailNormal.wrapT=Xt,i.detailNormal.needsUpdate=!0,console.info(`Utrish procedural textures built in ${Math.round(performance.now()-e)} ms`),i}function Eh(){return Gt.aspect<.82?{position:{x:4,y:30,z:52},target:{x:-7,y:8.6,z:2},fov:52}:{position:{x:re.camera.position.x,y:re.camera.position.y,z:re.camera.position.z},target:{x:re.camera.target.x,y:re.camera.target.y,z:re.camera.target.z},fov:re.camera.fov}}function C_(){gt=new Xx(Gt,Na),gt.enableDamping=!0,gt.dampingFactor=.07,gt.rotateSpeed=.58,gt.zoomSpeed=.85,gt.panSpeed=.72,gt.screenSpacePanning=!0,gt.minDistance=10.5,gt.maxDistance=158,gt.minPolarAngle=.12,gt.maxPolarAngle=Math.PI*.515;const i=Eh();Gt.fov=i.fov,Gt.updateProjectionMatrix(),gt.target.set(i.target.x,i.target.y,i.target.z),Gt.position.set(i.position.x,i.position.y,i.position.z),Gt.lookAt(gt.target),gt.update(),gt.saveState(),Na.addEventListener("contextmenu",e=>e.preventDefault())}function Th(){const i=Eh();Gt.fov=i.fov,Gt.updateProjectionMatrix(),gt._sphericalDelta&&gt._sphericalDelta.set(0,0,0),gt._panOffset&&gt._panOffset.set(0,0,0),typeof gt._scale=="number"&&(gt._scale=1),Gt.position.set(i.position.x,i.position.y,i.position.z),gt.target.set(i.target.x,i.target.y,i.target.z),Gt.lookAt(gt.target),gt.update(),Us("Opening view restored.")}function Us(i){Vo&&(Vo.textContent="",window.setTimeout(()=>{Vo.textContent=i},20))}function R_(){Dl&&Go&&(Go.textContent=Dl.textContent.trim());async function i(){const e=Go?.textContent||"";try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Ji.textContent="Copied",Us("The complete generation prompt has been copied to the clipboard."),window.setTimeout(()=>{Ji.textContent="Copy prompt"},1800)}catch{Us("The prompt could not be copied automatically. It remains selectable in the panel."),Ji.textContent="Select text"}}Ji&&(Ji.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),i()}),Ji.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.stopPropagation(),i())})),Ll&&Ll.addEventListener("click",()=>{Qi.open=!1}),Qi&&Qi.addEventListener("toggle",()=>{ko.classList.toggle("colophon-open",Qi.open)}),window.addEventListener("keydown",e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;const t=e.target;if(!(t instanceof HTMLElement&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))))if(e.code==="KeyH"&&!e.repeat){e.preventDefault();const n=ko.classList.toggle("ui-hidden");n&&document.activeElement instanceof HTMLElement&&ko.contains(document.activeElement)&&document.activeElement.blur(),Us(n?"Interface hidden. Press H to restore it.":"Interface shown.")}else e.code==="KeyR"&&!e.repeat?(e.preventDefault(),Th()):e.code==="Escape"&&Qi?.open&&(e.preventDefault(),Qi.open=!1,Us("About panel closed."))}),document.querySelectorAll(".colophon summary").forEach(e=>{e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&t.stopPropagation()})})}function P_(){const i=window.innerWidth,e=window.innerHeight;Gt.aspect=i/e,Gt.updateProjectionMatrix();const t=window.matchMedia("(pointer: coarse)").matches?1.5:1.8;Dt.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),Dt.setSize(i,e)}function Ah(){requestAnimationFrame(Ah);const i=Math.min(Fa.getDelta(),.05),e=Fa.elapsedTime;Ur.timeUniform.value=e,rs&&(rs.splash.update(i,e),rs.foam&&rs.foam.update(i,e)),ks&&ks.update(i,e),Ei&&Ei.update(e),Oa&&(Oa.intensity=2.15+Math.sin(e*1.35)*.16),os&&os.position.copy(Gt.position),gt.update(),Dt.render(St,Gt)}function D_(){const i=document.createElement("canvas");i.width=512,i.height=512;const e=i.getContext("2d"),t=e.createRadialGradient(256,256,120,256,256,256);t.addColorStop(0,"rgba(79, 67, 50, 0.44)"),t.addColorStop(.5,"rgba(79, 67, 50, 0.25)"),t.addColorStop(.82,"rgba(79, 67, 50, 0.06)"),t.addColorStop(1,"rgba(79, 67, 50, 0)"),e.fillStyle=t,e.fillRect(0,0,512,512);const n=new kn(i);n.colorSpace=Rt;const s=new pi({map:n,transparent:!0,opacity:.48,depthWrite:!1,side:_t}),r=new N(new Ht(112,96),s);return r.rotation.x=-Math.PI/2,r.position.set(0,-8.55,0),r.renderOrder=1,r}async function L_(){w_(),St=new cd,Gt=new dn(re.camera.fov,window.innerWidth/window.innerHeight,.35,750),C_(),E_(),T_(),fg();const i=A_(),e=bg(i,Ur);i.maskTexture=e.maskTexture,St.add(e.group),St.add(D_());const t=Pg(i,Ur,St,ss);rs=t,Il=t.splash;const n=zg(i);Cr(n),St.add(n),n.traverse(r=>{r.isPointLight&&Ul.push(r)});const s=kg(i);Cr(s),St.add(s),Ei=jg(i),Cr(Ei.group,{exclude:r=>r.name==="small-excursion-boat"||r.name==="moored-motorboat"}),Ei.boats.forEach(r=>Cr(r.group)),St.add(Ei.group),ks=a_(i,Ur,Il),St.add(ks.group),Oa=Ul.find(r=>r.intensity<5)||null,window.addEventListener("resize",P_),R_(),await new Promise(r=>requestAnimationFrame(r)),Dt.compile(St,Gt),Dt.shadowMap.needsUpdate=!0,Dt.render(St,Gt),Dt.shadowMap.autoUpdate=!1,window.requestAnimationFrame(()=>{Vr.classList.add("finished"),window.setTimeout(()=>Vr.remove(),1200)}),Fa.start(),window.__utrish={scene:St,camera:Gt,controls:gt,renderer:Dt,water:rs,nature:ks,coast:Ei,resetCamera:Th,LAYOUT:re},Ah()}L_().catch(i=>{console.error(i),Vr&&(Vr.innerHTML=`<div style="max-width:520px;padding:32px;text-align:center;font-family:Georgia,serif;color:#3f4035;line-height:1.6">
      <div style="font-size:30px;margin-bottom:10px">The island could not be built.</div>
      <div style="font-size:14px;color:#747365">A WebGL 2 capable browser is required. Open the console for details.</div>
    </div>`)});
