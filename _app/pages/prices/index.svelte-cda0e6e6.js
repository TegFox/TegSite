import{S as H,i as Q,s as J,w as D,x as V,y as B,q as w,o as I,B as P,l as j,g as u,n as W,p as X,Q as Y,d as i,e as g,k as L,c as v,a as h,m as M,b as C,f as S,T as _,t as N,h as R,E as q,_ as Z}from"../../chunks/index-2106b571.js";import{g as K,B as x}from"../../chunks/Body-f9da4fe3.js";import{i as ee}from"../../chunks/prices-7b5e27c8.js";import{C as te,T as re}from"../../chunks/Card-d5231620.js";import{H as ae,C as se}from"../../chunks/Comms-b27f4b7e.js";import{S as O}from"../../chunks/SideBySide.svelte_svelte_type_style_lang-2e817ebd.js";import{R as le}from"../../chunks/ReactiveComp825-48bfaa3c.js";import{c as d}from"../../chunks/commtypes-e6343dfc.js";import{N as ne}from"../../chunks/NotDone-606111b8.js";var oe="/_app/assets/rarrow-433f56ab.svg";function z(f,e,r){const t=f.slice();return t[2]=e[r],t}function fe(f){let e=d[f[2]].desc+"",r;return{c(){r=N(e)},l(t){r=R(t,e)},m(t,a){u(t,r,a)},p:q,d(t){t&&i(r)}}}function ie(f){let e,r,t,a=d[f[2]].start+"",n;return{c(){e=N("Starting at "),r=g("strong"),t=N("US$"),n=N(a)},l(l){e=R(l,"Starting at "),r=v(l,"STRONG",{});var s=h(r);t=R(s,"US$"),n=R(s,a),s.forEach(i)},m(l,s){u(l,e,s),u(l,r,s),_(r,t),_(r,n)},p:q,d(l){l&&i(e),l&&i(r)}}}function ce(f){let e,r,t;return{c(){e=N(`Click To Learn More\r
                                                `),r=g("img"),this.h()},l(a){e=R(a,`Click To Learn More\r
                                                `),r=v(a,"IMG",{src:!0,class:!0}),this.h()},h(){Z(r.src,t=oe)||C(r,"src",t),C(r,"class","arrow svelte-x65air"),S(r,"height","1.25rem",!1)},m(a,n){u(a,e,n),u(a,r,n)},p:q,d(a){a&&i(e),a&&i(r)}}}function $e(f){let e,r=d[f[2]].name+"",t,a,n,l,s,o,c,p,k,E,b=d[f[2]].desc&&fe(f),m=d[f[2]].start&&ie(f);return k=new O({props:{align:"center",$$slots:{default:[ce]},$$scope:{ctx:f}}}),{c(){e=g("div"),t=N(r),a=L(),n=g("div"),l=g("p"),b&&b.c(),s=L(),o=g("p"),m&&m.c(),c=L(),p=g("div"),D(k.$$.fragment),this.h()},l($){e=v($,"DIV",{class:!0});var T=h(e);t=R(T,r),T.forEach(i),a=M($),n=v($,"DIV",{class:!0});var y=h(n);l=v(y,"P",{});var U=h(l);b&&b.l(U),s=M(U),U.forEach(i),o=v(y,"P",{});var A=h(o);m&&m.l(A),A.forEach(i),c=M(y),p=v(y,"DIV",{class:!0});var G=h(p);V(k.$$.fragment,G),G.forEach(i),y.forEach(i),this.h()},h(){C(e,"class","allcaps wide h3"),C(p,"class","cap"),C(n,"class","text")},m($,T){u($,e,T),_(e,t),u($,a,T),u($,n,T),_(n,l),b&&b.m(l,null),_(l,s),_(n,o),m&&m.m(o,null),_(n,c),_(n,p),B(k,p,null),E=!0},p($,T){d[$[2]].desc&&b.p($,T),d[$[2]].start&&m.p($,T);const y={};T&32&&(y.$$scope={dirty:T,ctx:$}),k.$set(y)},i($){E||(w(k.$$.fragment,$),E=!0)},o($){I(k.$$.fragment,$),E=!1},d($){$&&i(e),$&&i(a),$&&i(n),b&&b.d(),m&&m.d(),P(k)}}}function ue(f){let e,r,t,a,n;return a=new O({props:{direction:"column",$$slots:{default:[$e]},$$scope:{ctx:f}}}),{c(){e=g("div"),r=L(),t=g("div"),D(a.$$.fragment),this.h()},l(l){e=v(l,"DIV",{class:!0}),h(e).forEach(i),r=M(l),t=v(l,"DIV",{class:!0});var s=h(t);V(a.$$.fragment,s),s.forEach(i),this.h()},h(){C(e,"class","section-img svelte-x65air"),S(e,"background-image",`url(${d[f[2]].img})`,!1),S(e,"background-repeat","no-repeat",!1),S(e,"background-size",d[f[2]].contain?"contain":"cover",!1),S(e,"background-position","center",!1),S(e,"border-radius","12px",!1),C(t,"class","section-text svelte-x65air")},m(l,s){u(l,e,s),u(l,r,s),u(l,t,s),B(a,t,null),n=!0},p(l,s){const o={};s&32&&(o.$$scope={dirty:s,ctx:l}),a.$set(o)},i(l){n||(w(a.$$.fragment,l),n=!0)},o(l){I(a.$$.fragment,l),n=!1},d(l){l&&i(e),l&&i(r),l&&i(t),P(a)}}}function me(f){let e,r;return e=new O({props:{direction:"row",gap:"2.5rem",align:"center",$$slots:{default:[ue]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,a){const n={};a&32&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function pe(f){let e,r,t,a,n,l;return t=new ae({props:{background:Ee,overlayBackground:f[1],padding:"1.5rem",$$slots:{default:[me]},$$scope:{ctx:f}}}),{c(){e=g("div"),r=g("a"),D(t.$$.fragment),n=L(),this.h()},l(s){e=v(s,"DIV",{slot:!0,class:!0});var o=h(e);r=v(o,"A",{href:!0});var c=h(r);V(t.$$.fragment,c),c.forEach(i),n=M(o),o.forEach(i),this.h()},h(){C(r,"href",a=""+(f[0]+d[f[2]].link)),S(r,"text-decoration","none",!1),S(r,"color","white",!1),C(e,"slot","main"),C(e,"class","hover-target svelte-x65air")},m(s,o){u(s,e,o),_(e,r),B(t,r,null),_(e,n),l=!0},p(s,o){const c={};o&32&&(c.$$scope={dirty:o,ctx:s}),t.$set(c),(!l||o&1&&a!==(a=""+(s[0]+d[s[2]].link)))&&C(r,"href",a)},i(s){l||(w(t.$$.fragment,s),l=!0)},o(s){I(t.$$.fragment,s),l=!1},d(s){s&&i(e),P(t)}}}function _e(f){let e=d[f[2]].desc+"",r;return{c(){r=N(e)},l(t){r=R(t,e)},m(t,a){u(t,r,a)},p:q,d(t){t&&i(r)}}}function de(f){let e,r,t,a=d[f[2]].start+"",n;return{c(){e=N("Starting at "),r=g("strong"),t=N("US$"),n=N(a)},l(l){e=R(l,"Starting at "),r=v(l,"STRONG",{});var s=h(r);t=R(s,"US$"),n=R(s,a),s.forEach(i)},m(l,s){u(l,e,s),u(l,r,s),_(r,t),_(r,n)},p:q,d(l){l&&i(e),l&&i(r)}}}function ge(f){let e,r=d[f[2]].name+"",t,a,n,l,s,o,c,p,k,E=d[f[2]].desc&&_e(f),b=d[f[2]].start&&de(f);return{c(){e=g("div"),t=N(r),a=L(),n=g("div"),l=g("p"),E&&E.c(),s=L(),o=g("p"),b&&b.c(),c=L(),p=g("div"),k=N("Click To Learn More!"),this.h()},l(m){e=v(m,"DIV",{class:!0});var $=h(e);t=R($,r),$.forEach(i),a=M(m),n=v(m,"DIV",{class:!0});var T=h(n);l=v(T,"P",{});var y=h(l);E&&E.l(y),s=M(y),y.forEach(i),o=v(T,"P",{});var U=h(o);b&&b.l(U),U.forEach(i),c=M(T),p=v(T,"DIV",{class:!0});var A=h(p);k=R(A,"Click To Learn More!"),A.forEach(i),T.forEach(i),this.h()},h(){C(e,"class","allcaps wide h3 tac"),C(p,"class","cap"),C(n,"class","text tac")},m(m,$){u(m,e,$),_(e,t),u(m,a,$),u(m,n,$),_(n,l),E&&E.m(l,null),_(l,s),_(n,o),b&&b.m(o,null),_(n,c),_(n,p),_(p,k)},p(m,$){d[m[2]].desc&&E.p(m,$),d[m[2]].start&&b.p(m,$)},d(m){m&&i(e),m&&i(a),m&&i(n),E&&E.d(),b&&b.d()}}}function ve(f){let e,r,t,a;return t=new O({props:{direction:"column",$$slots:{default:[ge]},$$scope:{ctx:f}}}),{c(){e=g("div"),r=L(),D(t.$$.fragment),this.h()},l(n){e=v(n,"DIV",{}),h(e).forEach(i),r=M(n),V(t.$$.fragment,n),this.h()},h(){S(e,"width","100%",!1),S(e,"height","20rem",!1),S(e,"background-image",`url(${d[f[2]].img})`,!1),S(e,"background-size","cover",!1),S(e,"background-position","center",!1),S(e,"border-radius","12px",!1)},m(n,l){u(n,e,l),u(n,r,l),B(t,n,l),a=!0},p(n,l){const s={};l&32&&(s.$$scope={dirty:l,ctx:n}),t.$set(s)},i(n){a||(w(t.$$.fragment,n),a=!0)},o(n){I(t.$$.fragment,n),a=!1},d(n){n&&i(e),n&&i(r),P(t,n)}}}function he(f){let e,r;return e=new O({props:{direction:"column",gap:"2rem",align:"center",$$slots:{default:[ve]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,a){const n={};a&32&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function ke(f){let e,r,t,a,n,l;return t=new te({props:{background:f[1],padding:"1.5rem",$$slots:{default:[he]},$$scope:{ctx:f}}}),{c(){e=g("div"),r=g("a"),D(t.$$.fragment),n=L(),this.h()},l(s){e=v(s,"DIV",{slot:!0});var o=h(e);r=v(o,"A",{href:!0});var c=h(r);V(t.$$.fragment,c),c.forEach(i),n=M(o),o.forEach(i),this.h()},h(){C(r,"href",a=""+(f[0]+d[f[2]].link)),S(r,"text-decoration","none",!1),S(r,"color","white",!1),C(e,"slot","alt")},m(s,o){u(s,e,o),_(e,r),B(t,r,null),_(e,n),l=!0},p(s,o){const c={};o&32&&(c.$$scope={dirty:o,ctx:s}),t.$set(c),(!l||o&1&&a!==(a=""+(s[0]+d[s[2]].link)))&&C(r,"href",a)},i(s){l||(w(t.$$.fragment,s),l=!0)},o(s){I(t.$$.fragment,s),l=!1},d(s){s&&i(e),P(t)}}}function F(f){let e,r;return e=new le({props:{$$slots:{alt:[ke],main:[pe]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,a){const n={};a&33&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function be(f){let e,r,t=Object.keys(d),a=[];for(let l=0;l<t.length;l+=1)a[l]=F(z(f,t,l));const n=l=>I(a[l],1,1,()=>{a[l]=null});return{c(){for(let l=0;l<a.length;l+=1)a[l].c();e=j()},l(l){for(let s=0;s<a.length;s+=1)a[s].l(l);e=j()},m(l,s){for(let o=0;o<a.length;o+=1)a[o].m(l,s);u(l,e,s),r=!0},p(l,s){if(s&3){t=Object.keys(d);let o;for(o=0;o<t.length;o+=1){const c=z(l,t,o);a[o]?(a[o].p(c,s),w(a[o],1)):(a[o]=F(c),a[o].c(),w(a[o],1),a[o].m(e.parentNode,e))}for(W(),o=t.length;o<a.length;o+=1)n(o);X()}},i(l){if(!r){for(let s=0;s<t.length;s+=1)w(a[s]);r=!0}},o(l){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)I(a[s]);r=!1},d(l){Y(a,l),l&&i(e)}}}function we(f){let e,r;return e=new O({props:{direction:"column",gap:"2rem",$$slots:{default:[be]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,[a]){const n={};a&33&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}const Ee="#14191d";function Te(f,e,r){let{routeBase:t}=e;const a=K.colors.teg_grey;return f.$$set=n=>{"routeBase"in n&&r(0,t=n.routeBase)},[t,a]}class Ce extends H{constructor(e){super();Q(this,e,Te,we,J,{routeBase:0})}}function Ie(f){let e;return{c(){e=N("Price estimates for my art!")},l(r){e=R(r,"Price estimates for my art!")},m(r,t){u(r,e,t)},d(r){r&&i(e)}}}function Se(f){let e,r,t,a,n,l;return e=new se({props:{status:K.comms,large:!1}}),t=new Ce({props:{routeBase:"/prices/"}}),n=new ne({}),{c(){D(e.$$.fragment),r=L(),D(t.$$.fragment),a=L(),D(n.$$.fragment)},l(s){V(e.$$.fragment,s),r=M(s),V(t.$$.fragment,s),a=M(s),V(n.$$.fragment,s)},m(s,o){B(e,s,o),u(s,r,o),B(t,s,o),u(s,a,o),B(n,s,o),l=!0},p:q,i(s){l||(w(e.$$.fragment,s),w(t.$$.fragment,s),w(n.$$.fragment,s),l=!0)},o(s){I(e.$$.fragment,s),I(t.$$.fragment,s),I(n.$$.fragment,s),l=!1},d(s){P(e,s),s&&i(r),P(t,s),s&&i(a),P(n,s)}}}function De(f){let e,r;return e=new O({props:{direction:"column",gap:"2rem",$$slots:{default:[Se]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,a){const n={};a&1&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function Ve(f){let e,r,t,a,n,l,s,o;return n=new re({props:{img:ee,title:"Commission Prices",$$slots:{default:[Ie]},$$scope:{ctx:f}}}),s=new x({props:{$$slots:{default:[De]},$$scope:{ctx:f}}}),{c(){e=g("title"),r=N("Prices - Teg Fox"),t=L(),a=g("div"),D(n.$$.fragment),l=L(),D(s.$$.fragment)},l(c){e=v(c,"TITLE",{});var p=h(e);r=R(p,"Prices - Teg Fox"),p.forEach(i),t=M(c),a=v(c,"DIV",{});var k=h(a);V(n.$$.fragment,k),l=M(k),V(s.$$.fragment,k),k.forEach(i)},m(c,p){u(c,e,p),_(e,r),u(c,t,p),u(c,a,p),B(n,a,null),_(a,l),B(s,a,null),o=!0},p(c,[p]){const k={};p&1&&(k.$$scope={dirty:p,ctx:c}),n.$set(k);const E={};p&1&&(E.$$scope={dirty:p,ctx:c}),s.$set(E)},i(c){o||(w(n.$$.fragment,c),w(s.$$.fragment,c),o=!0)},o(c){I(n.$$.fragment,c),I(s.$$.fragment,c),o=!1},d(c){c&&i(e),c&&i(t),c&&i(a),P(n),P(s)}}}class qe extends H{constructor(e){super();Q(this,e,null,Ve,J,{})}}export{qe as default};
