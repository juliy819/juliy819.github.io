import{r as s,d as r,w as x,e as f,a as _,b as I,m as k,p as P}from"./@vue-2d0ddfb4.js";import{o as M,a as y}from"./evtd-b614532e.js";function V(e){const n=s(!!e.value);if(n.value)return r(n);const t=x(e,i=>{i&&(n.value=!0,t())});return r(n)}function X(e){const n=f(e),t=s(n.value);return x(n,i=>{t.value=i}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(i){e.set(i)}}}function T(){return _()!==null}const b=typeof window<"u";let c,w;const L=()=>{var e,n;c=b?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,w=!1,c!==void 0?c.then(()=>{w=!0}):w=!0};L();function Y(e){if(w)return;let n=!1;I(()=>{w||c==null||c.then(()=>{n||e()})}),k(()=>{n=!0})}const m=s(null);function C(e){if(e.clientX>0||e.clientY>0)m.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:t,top:i,width:o,height:u}=n.getBoundingClientRect();t>0||i>0?m.value={x:t+o/2,y:i+u/2}:m.value={x:0,y:0}}else m.value=null}}let h=0,E=!0;function j(){if(!b)return r(s(null));h===0&&M("click",document,C,!0);const e=()=>{h+=1};return E&&(E=T())?(P(e),k(()=>{h-=1,h===0&&y("click",document,C,!0)})):e(),r(m)}const q=s(void 0);let p=0;function R(){q.value=Date.now()}let B=!0;function D(e){if(!b)return r(s(!1));const n=s(!1);let t=null;function i(){t!==null&&window.clearTimeout(t)}function o(){i(),n.value=!0,t=window.setTimeout(()=>{n.value=!1},e)}p===0&&M("click",window,R,!0);const u=()=>{p+=1,M("click",window,o,!0)};return B&&(B=T())?(P(u),k(()=>{p-=1,p===0&&y("click",window,R,!0),y("click",window,o,!0),i()})):u(),r(n)}function Q(e,n){return x(e,t=>{t!==void 0&&(n.value=t)}),f(()=>e.value===void 0?n.value:e.value)}function z(){const e=s(!1);return I(()=>{e.value=!0}),r(e)}function A(e,n){return f(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const F=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function G(){return F}const $={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function H(e){return`(min-width: ${e}px)`}const v={};function J(e=$){if(!b)return f(()=>[]);if(typeof window.matchMedia!="function")return f(()=>[]);const n=s({}),t=Object.keys(e),i=(o,u)=>{o.matches?n.value[u]=!0:n.value[u]=!1};return t.forEach(o=>{const u=e[o];let a,l;v[u]===void 0?(a=window.matchMedia(H(u)),a.addEventListener?a.addEventListener("change",d=>{l.forEach(g=>{g(d,o)})}):a.addListener&&a.addListener(d=>{l.forEach(g=>{g(d,o)})}),l=new Set,v[u]={mql:a,cbs:l}):(a=v[u].mql,l=v[u].cbs),l.add(i),a.matches&&l.forEach(d=>{d(a,o)})}),k(()=>{t.forEach(o=>{const{cbs:u}=v[e[o]];u.has(i)&&u.delete(i)})}),f(()=>{const{value:o}=n;return t.filter(u=>o[u])})}export{G as a,Q as b,A as c,D as d,j as e,J as f,V as g,z as i,Y as o,X as u};