function T(){}const et=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function nt(){return Object.create(null)}function H(t){t.forEach(q)}function it(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function rt(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function st(t){return Object.keys(t).length===0}function L(t,...e){if(t==null){for(const i of e)i(void 0);return T}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function lt(t,e,n){t.$$.on_destroy.push(L(e,n))}function ot(t,e,n,i){if(t){const c=N(t,e,n,i);return t[0](c)}}function N(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const o=[],r=Math.max(e.dirty.length,c.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|c[l];return o}return e.dirty|c}return e.dirty}function ut(t,e,n,i,c,o){if(c){const r=N(e,n,i,o);t.p(r,c)}}function ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function _t(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function dt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ht(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let y=!1;function mt(){y=!0}function pt(){y=!1}function B(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function M(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&s.push(u)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,u=(c>0&&e[n[c]].claim_order<=a?c+1:B(1,c,O=>e[n[O]].claim_order,a))-1;i[s]=n[u]+1;const k=u+1;n[k]=s,c=Math.max(k,c)}const o=[],r=[];let l=e.length-1;for(let s=n[c]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);l>=s;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<r.length;s++){for(;a<o.length&&r[s].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(r[s],u)}}function R(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=A("style");return e.textContent="/* empty */",z(F(t),e),e.sheet}function z(t,e){return R(t.head||t,e),e.sheet}function I(t,e){if(y){for(M(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){y&&!n?I(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function U(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function wt(){return E(" ")}function Et(){return E("")}function kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function j(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const W=["width","height"];function G(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&W.indexOf(i)===-1?t[i]=e[i]:j(t,i,e[i])}function J(t,e){Object.keys(e).forEach(n=>{K(t,n,e[n])})}function K(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:j(t,e,n)}function vt(t){return/-/.test(t)?J:G}function Nt(t){return t.dataset.svelteH}function At(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,c=!1){Q(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,c||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,c?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function D(t,e,n,i){return C(t,c=>c.nodeName===e,c=>{const o=[];for(let r=0;r<c.attributes.length;r++){const l=c.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>c.removeAttribute(r))},()=>i(e))}function jt(t,e,n){return D(t,e,n,A)}function Ct(t,e,n){return D(t,e,n,U)}function V(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function Dt(t){return V(t," ")}function St(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ot(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Tt(t,e,n){t.classList.toggle(e,!!n)}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Pt(t,e){const n=[];let i=0;for(const c of e.childNodes)if(c.nodeType===8){const o=c.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(c)):o===`HEAD_${t}_START`&&(i+=1,n.push(c))}else i>0&&n.push(c);return n}function qt(t,e){return new t(e)}let p;function b(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Ht(t){h().$$.on_mount.push(t)}function Lt(t){h().$$.after_update.push(t)}function Bt(t){h().$$.on_destroy.push(t)}function Mt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const o=X(e,n,{cancelable:i});return c.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Rt(t,e){return h().$$.context.set(t,e),e}function Ft(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],v=[];let _=[];const x=[],S=Promise.resolve();let w=!1;function Y(){w||(w=!0,S.then($))}function zt(){return Y(),S}function Z(t){_.push(t)}function It(t){x.push(t)}const g=new Set;let f=0;function $(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),tt(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;v.length;)v.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();w=!1,g.clear(),b(t)}function tt(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Ut(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{K as $,kt as A,H as B,ht as C,et as D,Lt as E,Ht as F,v as G,qt as H,zt as I,xt as J,F as K,yt as L,it as M,X as N,nt as O,$ as P,st as Q,Ut as R,p as S,b as T,q as U,d as V,Y as W,mt as X,pt as Y,Ft as Z,It as _,wt as a,U as a0,Ct as a1,dt as a2,Mt as a3,Rt as a4,Bt as a5,P as a6,_t as a7,vt as a8,lt as b,Dt as c,gt as d,A as e,jt as f,Nt as g,Pt as h,bt as i,At as j,I as k,V as l,Et as m,T as n,ot as o,ft as p,at as q,Z as r,ct as s,E as t,ut as u,rt as v,j as w,Ot as x,St as y,Tt as z};