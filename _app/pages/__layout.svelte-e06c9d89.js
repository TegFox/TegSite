var tt=Object.defineProperty;var De=Object.getOwnPropertySymbols;var nt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var ze=(e,t,n)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t)=>{for(var n in t||(t={}))nt.call(t,n)&&ze(e,n,t[n]);if(De)for(var n of De(t))rt.call(t,n)&&ze(e,n,t[n]);return e};import{J as ot,K as lt,L as st,S as Y,i as U,s as X,M as Ne,e as m,c as h,a as g,d as c,b as v,N as j,g as b,O as W,P as Fe,Q as Ce,R as Ye,q as I,o as E,T as it,w as B,x as S,y as G,B as L,n as $e,p as Oe,U as Ue,t as K,k as A,h as Q,m as H,E as te,V as w,G as Xe,W as at,X as ce,Y as fe,f as q,Z as _e,_ as se,$ as ie,l as Ve,a0 as ut}from"../chunks/index-fa9d674a.js";import{T as ct}from"../chunks/logo-1db47dc9.js";import{s as ft}from"../chunks/index-31f5792f.js";import{g as F,B as _t}from"../chunks/Body-7a820a34.js";const pt=()=>{const e=ot("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},dt={subscribe(e){return pt().page.subscribe(e)}};var C=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function we(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),t}var Ze={},ye={},ne=we(ft),N={};function mt(e){const t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}function ht(e){return e*e*((1.70158+1)*e-1.70158)}function gt(e){return--e*e*((1.70158+1)*e+1.70158)+1}function ae(e){const t=.36363636363636365,n=8/11,o=9/10,r=4356/361,a=35442/1805,s=16061/1805,i=e*e;return e<t?7.5625*i:e<n?9.075*i-9.9*e+3.4:e<o?r*i-a*e+s:10.8*e*e-20.52*e+10.72}function vt(e){return e<.5?.5*(1-ae(1-e*2)):.5*ae(e*2-1)+.5}function bt(e){return 1-ae(1-e)}function $t(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}function Ot(e){return 1-Math.sqrt(1-e*e)}function wt(e){return Math.sqrt(1- --e*e)}function yt(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function It(e){return e*e*e}function Je(e){const t=e-1;return t*t*t+1}function Et(e){return e<.5?.5*Math.sin(13*Math.PI/2*2*e)*Math.pow(2,10*(2*e-1)):.5*Math.sin(-13*Math.PI/2*(2*e-1+1))*Math.pow(2,-10*(2*e-1))+1}function kt(e){return Math.sin(13*e*Math.PI/2)*Math.pow(2,10*(e-1))}function Mt(e){return Math.sin(-13*(e+1)*Math.PI/2)*Math.pow(2,-10*e)+1}function Pt(e){return e===0||e===1?e:e<.5?.5*Math.pow(2,20*e-10):-.5*Math.pow(2,10-e*20)+1}function jt(e){return e===0?e:Math.pow(2,10*(e-1))}function qt(e){return e===1?e:1-Math.pow(2,-10*e)}function Tt(e){return e/=.5,e<1?.5*e*e:(e--,-.5*(e*(e-2)-1))}function Dt(e){return e*e}function zt(e){return-e*(e-2)}function Vt(e){return e<.5?8*Math.pow(e,4):-8*Math.pow(e-1,4)+1}function Rt(e){return Math.pow(e,4)}function At(e){return Math.pow(e-1,3)*(1-e)+1}function Ht(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}function Bt(e){return e*e*e*e*e}function St(e){return--e*e*e*e*e+1}function Gt(e){return-.5*(Math.cos(Math.PI*e)-1)}function Lt(e){const t=Math.cos(e*Math.PI*.5);return Math.abs(t)<1e-14?1:1-t}function Nt(e){return Math.sin(e*Math.PI/2)}var Ft=Object.freeze(Object.defineProperty({__proto__:null,backIn:ht,backInOut:mt,backOut:gt,bounceIn:bt,bounceInOut:vt,bounceOut:ae,circIn:Ot,circInOut:$t,circOut:wt,cubicIn:It,cubicInOut:yt,cubicOut:Je,elasticIn:kt,elasticInOut:Et,elasticOut:Mt,expoIn:jt,expoInOut:Pt,expoOut:qt,quadIn:Dt,quadInOut:Tt,quadOut:zt,quartIn:Rt,quartInOut:Vt,quartOut:At,quintIn:Bt,quintInOut:Ht,quintOut:St,sineIn:Lt,sineInOut:Gt,sineOut:Nt,linear:lt},Symbol.toStringTag,{value:"Module"})),Ct=we(Ft);Object.defineProperty(N,"__esModule",{value:!0});N.globalOptions=N.elements=void 0;const Ke=ne,Yt=Ct;N.elements=(0,Ke.writable)([]);N.globalOptions=(0,Ke.writable)({offset:0,duration:500,easing:Yt.cubicInOut});var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.getGlobalOptions=void 0;const Ut=ne,Qe=N,We=(0,Ut.get)(Qe.globalOptions),Xt=()=>We;Z.getGlobalOptions=Xt;const Zt=e=>{Qe.globalOptions.update(()=>Object.assign(We,e))};Z.default=Zt;var z={};Object.defineProperty(z,"__esModule",{value:!0});z.getPosition=z.getElement=z.sanitize=void 0;const Jt=e=>e.replace(/[^A-Z0-9]/gi,"").toLowerCase();z.sanitize=Jt;const Kt=(e,t)=>{const n=e.filter(o=>o.reference===t);return n.length?n[0].node:null};z.getElement=Kt;const Qt=e=>e.offsetTop;z.getPosition=Qt;var pe={},Ie={},Wt=we(st);Object.defineProperty(Ie,"__esModule",{value:!0});const Re=Wt,xt=(e,t,n,o,r)=>n>o?t:e+(t-e)*r(n/o),en=(e,t)=>{const{start:n,end:o,duration:r,easing:a}=e,s=(0,Re.now)(),i=()=>{const l=(0,Re.now)()-s,u=xt(n,o,l,r,a);t(u),!(l>r)&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)};Ie.default=en;var tn=C&&C.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pe,"__esModule",{value:!0});const nn=tn(Ie),rn=Z,on=(0,rn.getGlobalOptions)(),ln=(e,t)=>{const n=Object.assign(on,t),o=window.pageYOffset,r=e+n.offset;(0,nn.default)(ge({start:o,end:r},n),a=>{window.scroll(0,a)})};pe.default=ln;var sn=C&&C.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ye,"__esModule",{value:!0});const an=ne,un=N,cn=Z,be=z,fn=sn(pe),_n=(0,an.get)(un.elements),pn=(0,cn.getGlobalOptions)(),le=(e,t)=>{e.preventDefault();const{ref:n,offset:o,duration:r,easing:a}=t,s=(0,be.getElement)(_n,n);if(!s)throw new Error(`Element reference '${n}' not found`);(0,fn.default)((0,be.getPosition)(s),{duration:r,offset:o,easing:a})},dn=(e,t)=>{if(!t)throw new Error("scrollTo require a options");let n=ge({ref:""},pn);typeof t=="string"?n.ref=t:n=Object.assign(t,n);const o=(0,be.sanitize)(n.ref);if(!o)throw new Error("scrollTo require a reference");return n.ref=o,e instanceof HTMLAnchorElement&&(e.href=`#${o}`),e instanceof HTMLAnchorElement||(e.style.cursor="pointer"),e.addEventListener("click",r=>le(r,n)),e.addEventListener("touchstart",r=>le(r,n)),{destroy(){e.removeEventListener("click",r=>le(r,n)),e.removeEventListener("touchstart",r=>le(r,n))}}};ye.default=dn;var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});const mn=ne,hn=z,gn=N,Ae=(0,mn.get)(gn.elements),vn=(e,t)=>{if(!t)throw new Error("scrollRef require a hash");return Ae.push({node:e,reference:(0,hn.sanitize)(t)}),{destroy(){Ae.length=0}}};Ee.default=vn;var D={},bn=C&&C.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(D,"__esModule",{value:!0});D.scrollPosition=D.scrollElement=D.scrollBottom=D.scrollTop=void 0;const $n=ne,On=N,wn=Z,ve=z,de=bn(pe),me=(0,wn.getGlobalOptions)(),yn=e=>{const t=Object.assign(me,e);(0,de.default)(0,t)};D.scrollTop=yn;const In=e=>{const t=Object.assign(me,e),n=document.body,o=document.documentElement,r=Math.max(n.scrollHeight,n.offsetHeight,o.scrollHeight,o.clientHeight,o.offsetHeight);(0,de.default)(r,t)};D.scrollBottom=In;const En=(e,t)=>{if(!e||typeof e!="string")throw new Error("scrollElement require a reference valid");const n=Object.assign(me,t),o=(0,ve.sanitize)(e),r=(0,$n.get)(On.elements),a=(0,ve.getElement)(r,o);if(!a)throw new Error(`Element reference '${o}' not found`);(0,de.default)((0,ve.getPosition)(a),n)};D.scrollElement=En;const kn=(e,t)=>{if(!e||typeof e!="number")throw new Error("scrollPosition require a position value valid");const n=Object.assign(me,t);(0,de.default)(e,n)};D.scrollPosition=kn;(function(e){var t=C&&C.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(e,"__esModule",{value:!0}),e.scrollPosition=e.scrollElement=e.scrollBottom=e.scrollTop=e.setGlobalOptions=e.scrollRef=e.scrollTo=void 0;var n=ye;Object.defineProperty(e,"scrollTo",{enumerable:!0,get:function(){return t(n).default}});var o=Ee;Object.defineProperty(e,"scrollRef",{enumerable:!0,get:function(){return t(o).default}});var r=Z;Object.defineProperty(e,"setGlobalOptions",{enumerable:!0,get:function(){return t(r).default}});var a=D;Object.defineProperty(e,"scrollTop",{enumerable:!0,get:function(){return a.scrollTop}}),Object.defineProperty(e,"scrollBottom",{enumerable:!0,get:function(){return a.scrollBottom}}),Object.defineProperty(e,"scrollElement",{enumerable:!0,get:function(){return a.scrollElement}}),Object.defineProperty(e,"scrollPosition",{enumerable:!0,get:function(){return a.scrollPosition}})})(Ze);function Mn(e){let t,n,o,r;const a=e[4].default,s=Ne(a,e,e[3],null);return{c(){t=m("a"),s&&s.c(),this.h()},l(i){t=h(i,"A",{href:!0,class:!0});var l=g(t);s&&s.l(l),l.forEach(c),this.h()},h(){v(t,"href",e[1]),v(t,"class","svelte-16cgkw0"),j(t,"active",e[2].url.pathname===e[1])},m(i,l){b(i,t,l),s&&s.m(t,null),n=!0,o||(r=W(t,"click",e[5]),o=!0)},p(i,[l]){s&&s.p&&(!n||l&8)&&Fe(s,a,i,i[3],n?Ye(a,i[3],l,null):Ce(i[3]),null),(!n||l&2)&&v(t,"href",i[1]),l&6&&j(t,"active",i[2].url.pathname===i[1])},i(i){n||(I(s,i),n=!0)},o(i){E(s,i),n=!1},d(i){i&&c(t),s&&s.d(i),o=!1,r()}}}function Pn(e,t,n){let o;it(e,dt,u=>n(2,o=u));let{$$slots:r={},$$scope:a}=t,{href:s}=t,{open:i}=t;const l=()=>{n(0,i=!1)};return e.$$set=u=>{"href"in u&&n(1,s=u.href),"open"in u&&n(0,i=u.open),"$$scope"in u&&n(3,a=u.$$scope)},[i,s,o,a,r,l]}class xe extends Y{constructor(t){super();U(this,t,Pn,Mn,X,{href:1,open:0})}}function He(e,t,n){const o=e.slice();return o[0]=t[n],o}function jn(e){let t=F.links[e[0]].name.toUpperCase()+"",n,o;return{c(){n=K(t),o=A()},l(r){n=Q(r,t),o=H(r)},m(r,a){b(r,n,a),b(r,o,a)},p:te,d(r){r&&c(n),r&&c(o)}}}function Be(e){let t,n;return t=new xe({props:{href:F.links[e[0]].path,$$slots:{default:[jn]},$$scope:{ctx:e}}}),{c(){B(t.$$.fragment)},l(o){S(t.$$.fragment,o)},m(o,r){G(t,o,r),n=!0},p(o,r){const a={};r&8&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){E(t.$$.fragment,o),n=!1},d(o){L(t,o)}}}function qn(e){let t,n,o=Object.keys(F.links),r=[];for(let s=0;s<o.length;s+=1)r[s]=Be(He(e,o,s));const a=s=>E(r[s],1,1,()=>{r[s]=null});return{c(){t=m("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=h(s,"DIV",{class:!0});var i=g(t);for(let l=0;l<r.length;l+=1)r[l].l(i);i.forEach(c),this.h()},h(){v(t,"class","flex-out svelte-eyavq2")},m(s,i){b(s,t,i);for(let l=0;l<r.length;l+=1)r[l].m(t,null);n=!0},p(s,[i]){if(i&0){o=Object.keys(F.links);let l;for(l=0;l<o.length;l+=1){const u=He(s,o,l);r[l]?(r[l].p(u,i),I(r[l],1)):(r[l]=Be(u),r[l].c(),I(r[l],1),r[l].m(t,null))}for($e(),l=o.length;l<r.length;l+=1)a(l);Oe()}},i(s){if(!n){for(let i=0;i<o.length;i+=1)I(r[i]);n=!0}},o(s){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)E(r[i]);n=!1},d(s){s&&c(t),Ue(r,s)}}}class Tn extends Y{constructor(t){super();U(this,t,null,qn,X,{})}}function Dn(e){let t,n,o,r,a,s;return{c(){t=m("button"),n=m("span"),o=m("span"),this.h()},l(i){t=h(i,"BUTTON",{class:!0,"aria-label":!0});var l=g(t);n=h(l,"SPAN",{class:!0});var u=g(n);o=h(u,"SPAN",{class:!0}),g(o).forEach(c),u.forEach(c),l.forEach(c),this.h()},h(){v(o,"class","hamburger-inner svelte-jas1sv"),v(n,"class","hamburger-box svelte-jas1sv"),v(t,"class",r="hamburger hamburger--"+e[1]+" svelte-jas1sv"),v(t,"aria-label","Hamburger menu"),j(t,"is-active",e[0])},m(i,l){b(i,t,l),w(t,n),w(n,o),a||(s=[W(t,"click",e[2]),W(t,"click",e[3])],a=!0)},p(i,[l]){l&2&&r!==(r="hamburger hamburger--"+i[1]+" svelte-jas1sv")&&v(t,"class",r),l&3&&j(t,"is-active",i[0])},i:te,o:te,d(i){i&&c(t),a=!1,Xe(s)}}}function zn(e,t,n){let{open:o=!1}=t,{type:r="spin"}=t;function a(i){at.call(this,e,i)}const s=()=>n(0,o=!o);return e.$$set=i=>{"open"in i&&n(0,o=i.open),"type"in i&&n(1,r=i.type)},[o,r,a,s]}class Vn extends Y{constructor(t){super();U(this,t,zn,Dn,X,{open:0,type:1})}}function Rn(e){let t,n,o,r,a;function s(l){e[1](l)}let i={type:"spin-r"};return e[0]!==void 0&&(i.open=e[0]),n=new Vn({props:i}),ce.push(()=>fe(n,"open",s)),{c(){t=m("div"),o=m("div"),B(n.$$.fragment),this.h()},l(l){t=h(l,"DIV",{});var u=g(t);o=h(u,"DIV",{style:!0});var _=g(o);S(n.$$.fragment,_),u.forEach(c),this.h()},h(){q(o,"display","contents"),q(o,"--color","white"),q(o,"--border-radius","1px"),q(o,"--layer-height","2px"),q(o,"--z-index","30"),q(t,"z-index","25",!1)},m(l,u){b(l,t,u),w(t,o),G(n,o,null),a=!0},p(l,[u]){const _={};!r&&u&1&&(r=!0,_.open=l[0],_e(()=>r=!1)),n.$set(_)},i(l){a||(I(n.$$.fragment,l),a=!0)},o(l){E(n.$$.fragment,l),a=!1},d(l){l&&c(t),L(n)}}}function An(e,t,n){let{open:o}=t;function r(a){o=a,n(0,o)}return e.$$set=a=>{"open"in a&&n(0,o=a.open)},[o,r]}class Hn extends Y{constructor(t){super();U(this,t,An,Rn,X,{open:0})}}function ue(e,{delay:t=0,duration:n=400,easing:o=Je,x:r=0,y:a=0,opacity:s=0}={}){const i=getComputedStyle(e),l=+i.opacity,u=i.transform==="none"?"":i.transform,_=l*(1-s);return{delay:t,duration:n,easing:o,css:(f,p)=>`
			transform: ${u} translate(${(1-f)*r}px, ${(1-f)*a}px);
			opacity: ${l-_*p}`}}function Se(e,t,n){const o=e.slice();return o[2]=t[n],o[4]=n,o}function Bn(e){let t=F.links[e[2]].name.toUpperCase()+"",n;return{c(){n=K(t)},l(o){n=Q(o,t)},m(o,r){b(o,n,r)},p:te,d(o){o&&c(n)}}}function Ge(e){let t,n,o,r,a,s;function i(u){e[1](u)}let l={href:F.links[e[2]].path,$$slots:{default:[Bn]},$$scope:{ctx:e}};return e[0]!==void 0&&(l.open=e[0]),n=new xe({props:l}),ce.push(()=>fe(n,"open",i)),{c(){t=m("div"),B(n.$$.fragment),r=A()},l(u){t=h(u,"DIV",{});var _=g(t);S(n.$$.fragment,_),r=H(_),_.forEach(c)},m(u,_){b(u,t,_),G(n,t,null),w(t,r),s=!0},p(u,_){const f={};_&32&&(f.$$scope={dirty:_,ctx:u}),!o&&_&1&&(o=!0,f.open=u[0],_e(()=>o=!1)),n.$set(f)},i(u){s||(I(n.$$.fragment,u),se(()=>{a||(a=ie(t,ue,{x:15,delay:50*e[4]},!0)),a.run(1)}),s=!0)},o(u){E(n.$$.fragment,u),a||(a=ie(t,ue,{x:15,delay:50*e[4]},!1)),a.run(0),s=!1},d(u){u&&c(t),L(n),u&&a&&a.end()}}}function Sn(e){let t,n,o=Object.keys(F.links),r=[];for(let s=0;s<o.length;s+=1)r[s]=Ge(Se(e,o,s));const a=s=>E(r[s],1,1,()=>{r[s]=null});return{c(){t=m("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=h(s,"DIV",{class:!0});var i=g(t);for(let l=0;l<r.length;l+=1)r[l].l(i);i.forEach(c),this.h()},h(){v(t,"class","mobilemenu-out svelte-bg72h5")},m(s,i){b(s,t,i);for(let l=0;l<r.length;l+=1)r[l].m(t,null);n=!0},p(s,[i]){if(i&1){o=Object.keys(F.links);let l;for(l=0;l<o.length;l+=1){const u=Se(s,o,l);r[l]?(r[l].p(u,i),I(r[l],1)):(r[l]=Ge(u),r[l].c(),I(r[l],1),r[l].m(t,null))}for($e(),l=o.length;l<r.length;l+=1)a(l);Oe()}},i(s){if(!n){for(let i=0;i<o.length;i+=1)I(r[i]);n=!0}},o(s){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)E(r[i]);n=!1},d(s){s&&c(t),Ue(r,s)}}}function Gn(e,t,n){let{open:o}=t;function r(a){o=a,n(0,o)}return e.$$set=a=>{"open"in a&&n(0,o=a.open)},[o,r]}class Ln extends Y{constructor(t){super();U(this,t,Gn,Sn,X,{open:0})}}function Le(e){let t,n,o,r,a;function s(l){e[8](l)}let i={};return e[3]!==void 0&&(i.open=e[3]),n=new Ln({props:i}),ce.push(()=>fe(n,"open",s)),{c(){t=m("div"),B(n.$$.fragment),this.h()},l(l){t=h(l,"DIV",{class:!0});var u=g(t);S(n.$$.fragment,u),u.forEach(c),this.h()},h(){v(t,"class","mobile-menu mobile-navbar svelte-2nrzem"),j(t,"scrolled",e[2])},m(l,u){b(l,t,u),G(n,t,null),a=!0},p(l,u){const _={};!o&&u&8&&(o=!0,_.open=l[3],_e(()=>o=!1)),n.$set(_),u&4&&j(t,"scrolled",l[2])},i(l){a||(I(n.$$.fragment,l),se(()=>{r||(r=ie(t,ue,{x:100},!0)),r.run(1)}),a=!0)},o(l){E(n.$$.fragment,l),r||(r=ie(t,ue,{x:100},!1)),r.run(0),a=!1},d(l){l&&c(t),L(n),l&&r&&r.end()}}}function Nn(e){let t=!1,n=()=>{t=!1},o,r,a,s,i,l,u,_,f,p,$,k,x,O,M,T,J,V,R,he,ke;se(e[5]),se(e[6]);function et(d){e[7](d)}let Me={};e[3]!==void 0&&(Me.open=e[3]),k=new Hn({props:Me}),ce.push(()=>fe(k,"open",et)),T=new Tn({});let y=e[3]&&Le(e);return{c(){r=m("div"),a=m("header"),s=m("div"),i=m("div"),l=m("a"),u=m("img"),f=A(),p=m("div"),$=m("div"),B(k.$$.fragment),O=A(),M=m("div"),B(T.$$.fragment),J=A(),y&&y.c(),V=Ve(),this.h()},l(d){r=h(d,"DIV",{class:!0});var P=g(r);a=h(P,"HEADER",{class:!0});var ee=g(a);s=h(ee,"DIV",{class:!0});var re=g(s);i=h(re,"DIV",{class:!0});var Pe=g(i);l=h(Pe,"A",{href:!0,class:!0});var je=g(l);u=h(je,"IMG",{src:!0,class:!0,id:!0}),je.forEach(c),Pe.forEach(c),f=H(re),p=h(re,"DIV",{class:!0});var oe=g(p);$=h(oe,"DIV",{class:!0});var qe=g($);S(k.$$.fragment,qe),qe.forEach(c),O=H(oe),M=h(oe,"DIV",{class:!0});var Te=g(M);S(T.$$.fragment,Te),Te.forEach(c),oe.forEach(c),re.forEach(c),ee.forEach(c),P.forEach(c),J=H(d),y&&y.l(d),V=Ve(),this.h()},h(){ut(u.src,_=ct)||v(u,"src",_),v(u,"class","logo-img svelte-2nrzem"),v(u,"id","logo"),j(u,"scrolled",e[2]),v(l,"href","/"),v(l,"class","svelte-2nrzem"),v(i,"class","ldiv svelte-2nrzem"),v($,"class","mobile-navbar svelte-2nrzem"),v(M,"class","navbar svelte-2nrzem"),v(p,"class","rdiv svelte-2nrzem"),j(p,"scrolled",e[2]),v(s,"class","title-container svelte-2nrzem"),v(a,"class","title svelte-2nrzem"),j(a,"scrolled",e[2]),v(r,"class","svelte-2nrzem")},m(d,P){b(d,r,P),w(r,a),w(a,s),w(s,i),w(i,l),w(l,u),w(s,f),w(s,p),w(p,$),G(k,$,null),w(p,O),w(p,M),G(T,M,null),b(d,J,P),y&&y.m(d,P),b(d,V,P),R=!0,he||(ke=[W(window,"scroll",()=>{t=!0,clearTimeout(o),o=setTimeout(n,100),e[5]()}),W(window,"resize",e[6]),W(l,"click",Fn)],he=!0)},p(d,[P]){P&1&&!t&&(t=!0,clearTimeout(o),scrollTo(window.pageXOffset,d[0]),o=setTimeout(n,100)),P&4&&j(u,"scrolled",d[2]);const ee={};!x&&P&8&&(x=!0,ee.open=d[3],_e(()=>x=!1)),k.$set(ee),P&4&&j(p,"scrolled",d[2]),P&4&&j(a,"scrolled",d[2]),d[3]?y?(y.p(d,P),P&8&&I(y,1)):(y=Le(d),y.c(),I(y,1),y.m(V.parentNode,V)):y&&($e(),E(y,1,1,()=>{y=null}),Oe())},i(d){R||(I(k.$$.fragment,d),I(T.$$.fragment,d),I(y),R=!0)},o(d){E(k.$$.fragment,d),E(T.$$.fragment,d),E(y),R=!1},d(d){d&&c(r),L(k),L(T),d&&c(J),y&&y.d(d),d&&c(V),he=!1,Xe(ke)}}}const Fn=()=>{};function Cn(e,t,n){let{breakpointVh:o=20}=t,r,a,s,i=!1;function l($){return $*r/100}function u(){n(0,a=window.pageYOffset)}function _(){n(1,r=window.outerHeight)}function f($){i=$,n(3,i)}function p($){i=$,n(3,i)}return e.$$set=$=>{"breakpointVh"in $&&n(4,o=$.breakpointVh)},e.$$.update=()=>{e.$$.dirty&17&&n(2,s=a>l(o)||a>l(o))},[a,r,s,i,o,u,_,f,p]}class Yn extends Y{constructor(t){super();U(this,t,Cn,Nn,X,{breakpointVh:4})}}function Un(e){let t,n,o,r,a,s,i,l,u,_,f=new Date().getFullYear()+"",p,$,k,x;return{c(){t=m("div"),n=K("You've Reached The End."),o=A(),r=m("div"),a=m("a"),s=m("div"),i=K("Go back to top"),l=A(),u=m("p"),_=K("\xA9 Teg Fox "),p=K(f),$=K(". All Rights Reserved."),this.h()},l(O){t=h(O,"DIV",{class:!0});var M=g(t);n=Q(M,"You've Reached The End."),M.forEach(c),o=H(O),r=h(O,"DIV",{style:!0});var T=g(r);a=h(T,"A",{href:!0});var J=g(a);s=h(J,"DIV",{});var V=g(s);i=Q(V,"Go back to top"),V.forEach(c),J.forEach(c),T.forEach(c),l=H(O),u=h(O,"P",{});var R=g(u);_=Q(R,"\xA9 Teg Fox "),p=Q(R,f),$=Q(R,". All Rights Reserved."),R.forEach(c),this.h()},h(){v(t,"class","fh1 svelte-1y7j06e"),q(s,"margin","0.5rem 0",!1),v(a,"href",""),q(a,"text-decoration","none",!1),q(a,"color","grey",!1),q(a,"pointer","pointer",!1),q(r,"display","flex"),q(r,"flex-direction","row")},m(O,M){b(O,t,M),w(t,n),b(O,o,M),b(O,r,M),w(r,a),w(a,s),w(s,i),b(O,l,M),b(O,u,M),w(u,_),w(u,p),w(u,$),k||(x=W(a,"click",e[0]),k=!0)},p:te,d(O){O&&c(t),O&&c(o),O&&c(r),O&&c(l),O&&c(u),k=!1,x()}}}function Xn(e){let t,n;return t=new _t({props:{color:"192231",$$slots:{default:[Un]},$$scope:{ctx:e}}}),{c(){B(t.$$.fragment)},l(o){S(t.$$.fragment,o)},m(o,r){G(t,o,r),n=!0},p(o,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){E(t.$$.fragment,o),n=!1},d(o){L(t,o)}}}function Zn(e){return[()=>Ze.scrollTop()]}class Jn extends Y{constructor(t){super();U(this,t,Zn,Xn,X,{})}}function Kn(e){let t,n,o,r,a,s,i,l;n=new Yn({});const u=e[1].default,_=Ne(u,e,e[0],null);return i=new Jn({}),{c(){t=m("header"),B(n.$$.fragment),o=A(),r=m("main"),_&&_.c(),a=A(),s=m("footer"),B(i.$$.fragment)},l(f){t=h(f,"HEADER",{});var p=g(t);S(n.$$.fragment,p),p.forEach(c),o=H(f),r=h(f,"MAIN",{});var $=g(r);_&&_.l($),$.forEach(c),a=H(f),s=h(f,"FOOTER",{});var k=g(s);S(i.$$.fragment,k),k.forEach(c)},m(f,p){b(f,t,p),G(n,t,null),b(f,o,p),b(f,r,p),_&&_.m(r,null),b(f,a,p),b(f,s,p),G(i,s,null),l=!0},p(f,[p]){_&&_.p&&(!l||p&1)&&Fe(_,u,f,f[0],l?Ye(u,f[0],p,null):Ce(f[0]),null)},i(f){l||(I(n.$$.fragment,f),I(_,f),I(i.$$.fragment,f),l=!0)},o(f){E(n.$$.fragment,f),E(_,f),E(i.$$.fragment,f),l=!1},d(f){f&&c(t),L(n),f&&c(o),f&&c(r),_&&_.d(f),f&&c(a),f&&c(s),L(i)}}}function Qn(e,t,n){let{$$slots:o={},$$scope:r}=t;return e.$$set=a=>{"$$scope"in a&&n(0,r=a.$$scope)},[r,o]}class rr extends Y{constructor(t){super();U(this,t,Qn,Kn,X,{})}}export{rr as default};
