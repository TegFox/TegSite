import{S as G,i as J,s as L,Y as B,V as X,W as Y,e as D,k as C,w as $,c as E,a as I,d as v,m as M,x as ee,b as k,f as r,g as O,T as w,y as te,L as Q,X as j,q,o as A,B as ae,G as le,P as ie,J as N,t as se,h as ne,j as oe,M as W,N as F,O as K,a1 as fe}from"./index-99a98c92.js";import{P as ue,p as re,a as de}from"./Body-867cf5a7.js";var Ve="/_app/assets/about-02f61df6.png";function he(a){let e,i,h,s,t,l,d;const g=a[11].default,n=N(g,a,a[17],null);return{c(){e=D("div"),i=D("div"),h=se(a[1]),s=C(),t=D("div"),n&&n.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var u=I(e);i=E(u,"DIV",{class:!0});var T=I(i);h=ne(T,a[1]),T.forEach(v),s=M(u),t=E(u,"DIV",{class:!0});var V=I(t);n&&n.l(V),V.forEach(v),u.forEach(v),this.h()},h(){k(i,"class","h1 title-head svelte-2sexex"),k(t,"class","sub1 title-body"),k(e,"class","title svelte-2sexex"),r(e,"bottom",`calc(100vh - ${a[2]})`,!1)},m(o,u){O(o,e,u),w(e,i),w(i,h),w(e,s),w(e,t),n&&n.m(t,null),d=!0},p(o,u){(!d||u&2)&&oe(h,o[1]),n&&n.p&&(!d||u&131072)&&W(n,g,o,o[17],d?K(g,o[17],u,null):F(o[17]),null),u&4&&r(e,"bottom",`calc(100vh - ${o[2]})`,!1)},i(o){d||(q(n,o),l||B(()=>{l=fe(e,de,{}),l.start()}),d=!0)},o(o){A(n,o),d=!1},d(o){o&&v(e),n&&n.d(o)}}}function ge(a){let e=!1,i=()=>{e=!1},h,s,t,l,d,g,n,o,u,T,V,p,m,y=`calc(100vh - ${a[2]} + ${Math.min(a[5],a[4])}px )`,P,S,R;B(a[12]),B(a[13]);function H(f){a[14](f)}function _(f){a[15](f)}function Z(f){a[16](f)}let z={url:a[9].url.pathname,$$slots:{default:[he]},$$scope:{ctx:a}};return a[6]!==void 0&&(z.duration=a[6]),a[7]!==void 0&&(z.outduration=a[7]),a[8]!==void 0&&(z.delayconst=a[8]),o=new ue({props:z}),X.push(()=>Y(o,"duration",H)),X.push(()=>Y(o,"outduration",_)),X.push(()=>Y(o,"delayconst",Z)),{c(){s=D("div"),t=D("div"),l=D("div"),d=C(),g=D("div"),n=C(),$(o.$$.fragment),p=C(),m=D("div"),this.h()},l(f){s=E(f,"DIV",{});var c=I(s);t=E(c,"DIV",{class:!0});var b=I(t);l=E(b,"DIV",{class:!0}),I(l).forEach(v),d=M(b),g=E(b,"DIV",{class:!0}),I(g).forEach(v),n=M(b),ee(o.$$.fragment,b),p=M(b),m=E(b,"DIV",{class:!0});var x=I(m);x.forEach(v),b.forEach(v),c.forEach(v),this.h()},h(){k(l,"class","out out-bg svelte-2sexex"),r(l,"height",a[2],!1),r(l,"position","absolute",!1),r(l,"transform",`translate3d(0, ${a[4]<a[5]?a[4]*U:0}px, 0)`,!1),r(l,"background-image",`url(${a[0]})`,!1),k(g,"class","out out-overlay svelte-2sexex"),r(g,"background-image",a[10],!1),r(g,"height",a[2],!1),k(m,"class","hidey-hole svelte-2sexex"),r(m,"height",y,!1),r(m,"top",a[2],!1),r(m,"background",a[3],!1),k(t,"class","out svelte-2sexex"),r(t,"height",a[2],!1)},m(f,c){O(f,s,c),w(s,t),w(t,l),w(t,d),w(t,g),w(t,n),te(o,t,null),w(t,p),w(t,m),P=!0,S||(R=[Q(window,"scroll",()=>{e=!0,clearTimeout(h),h=setTimeout(i,100),a[12]()}),Q(window,"resize",a[13])],S=!0)},p(f,[c]){c&16&&!e&&(e=!0,clearTimeout(h),scrollTo(window.pageXOffset,f[4]),h=setTimeout(i,100)),c&4&&r(l,"height",f[2],!1),c&48&&r(l,"transform",`translate3d(0, ${f[4]<f[5]?f[4]*U:0}px, 0)`,!1),c&1&&r(l,"background-image",`url(${f[0]})`,!1),c&4&&r(g,"height",f[2],!1);const b={};c&512&&(b.url=f[9].url.pathname),c&131078&&(b.$$scope={dirty:c,ctx:f}),!u&&c&64&&(u=!0,b.duration=f[6],j(()=>u=!1)),!T&&c&128&&(T=!0,b.outduration=f[7],j(()=>T=!1)),!V&&c&256&&(V=!0,b.delayconst=f[8],j(()=>V=!1)),o.$set(b),c&52&&y!==(y=`calc(100vh - ${f[2]} + ${Math.min(f[5],f[4])}px )`)&&r(m,"height",y,!1),c&4&&r(m,"top",f[2],!1),c&8&&r(m,"background",f[3],!1),c&4&&r(t,"height",f[2],!1)},i(f){P||(q(o.$$.fragment,f),P=!0)},o(f){A(o.$$.fragment,f),P=!1},d(f){f&&v(s),ae(o),S=!1,le(R)}}}const U=.6;function _e(a,e,i){let h;ie(a,re,_=>i(9,h=_));let{$$slots:s={},$$scope:t}=e,{img:l}=e,{title:d}=e,{height:g="96vh"}=e,{background:n="black"}=e;const o=`linear-gradient(transparent 25%, ${n} 95%)`;let u,T,V,p,m;function y(){i(4,u=window.pageYOffset)}function P(){i(5,T=window.outerHeight)}function S(_){V=_,i(6,V)}function R(_){p=_,i(7,p)}function H(_){m=_,i(8,m)}return a.$$set=_=>{"img"in _&&i(0,l=_.img),"title"in _&&i(1,d=_.title),"height"in _&&i(2,g=_.height),"background"in _&&i(3,n=_.background),"$$scope"in _&&i(17,t=_.$$scope)},[l,d,g,n,u,T,V,p,m,h,o,s,y,P,S,R,H,t]}class De extends G{constructor(e){super();J(this,e,_e,ge,L,{img:0,title:1,height:2,background:3})}}function ce(a){let e,i;const h=a[5].default,s=N(h,a,a[4],null);return{c(){e=D("div"),s&&s.c(),this.h()},l(t){e=E(t,"DIV",{class:!0});var l=I(e);s&&s.l(l),l.forEach(v),this.h()},h(){k(e,"class","card-outer"),r(e,"border-radius",a[1],!1),r(e,"padding",a[2],!1),r(e,"background",a[0],!1),r(e,"background-size","cover",!1),r(e,"background-position","center",!1),r(e,"max-width","100vw",!1)},m(t,l){O(t,e,l),s&&s.m(e,null),i=!0},p(t,[l]){s&&s.p&&(!i||l&16)&&W(s,h,t,t[4],i?K(h,t[4],l,null):F(t[4]),null),l&2&&r(e,"border-radius",t[1],!1),l&4&&r(e,"padding",t[2],!1),l&1&&r(e,"background",t[0],!1)},i(t){i||(q(s,t),i=!0)},o(t){A(s,t),i=!1},d(t){t&&v(e),s&&s.d(t)}}}function me(a,e,i){let{$$slots:h={},$$scope:s}=e,{background:t="#222222"}=e,{borderRadius:l="16px"}=e,{padding:d="3rem 2rem"}=e,{height:g}=e;return a.$$set=n=>{"background"in n&&i(0,t=n.background),"borderRadius"in n&&i(1,l=n.borderRadius),"padding"in n&&i(2,d=n.padding),"height"in n&&i(3,g=n.height),"$$scope"in n&&i(4,s=n.$$scope)},[t,l,d,g,s,h]}class Ee extends G{constructor(e){super();J(this,e,me,ce,L,{background:0,borderRadius:1,padding:2,height:3})}}function be(a){let e,i,h;const s=a[7].default,t=N(s,a,a[6],null);return{c(){e=D("div"),t&&t.c(),this.h()},l(l){e=E(l,"DIV",{class:!0,style:!0});var d=I(e);t&&t.l(d),d.forEach(v),this.h()},h(){k(e,"class","hsp svelte-3hfet9"),k(e,"style",i="align-items: "+a[0]+"; flex-direction: "+a[1]+"; gap: "+a[2]+"; flex-wrap:wrap; "+a[5]),r(e,"width",a[3],!1),r(e,"height",a[4],!1)},m(l,d){O(l,e,d),t&&t.m(e,null),h=!0},p(l,[d]){t&&t.p&&(!h||d&64)&&W(t,s,l,l[6],h?K(s,l[6],d,null):F(l[6]),null),(!h||d&39&&i!==(i="align-items: "+l[0]+"; flex-direction: "+l[1]+"; gap: "+l[2]+"; flex-wrap:wrap; "+l[5]))&&k(e,"style",i),d&8&&r(e,"width",l[3],!1),d&16&&r(e,"height",l[4],!1)},i(l){h||(q(t,l),h=!0)},o(l){A(t,l),h=!1},d(l){l&&v(e),t&&t.d(l)}}}function ve(a,e,i){let{$$slots:h={},$$scope:s}=e,{align:t}=e,{direction:l}=e,{gap:d}=e,{width:g}=e,{height:n}=e,{style:o=""}=e;return a.$$set=u=>{"align"in u&&i(0,t=u.align),"direction"in u&&i(1,l=u.direction),"gap"in u&&i(2,d=u.gap),"width"in u&&i(3,g=u.width),"height"in u&&i(4,n=u.height),"style"in u&&i(5,o=u.style),"$$scope"in u&&i(6,s=u.$$scope)},[t,l,d,g,n,o,s,h]}class Ie extends G{constructor(e){super();J(this,e,ve,be,L,{align:0,direction:1,gap:2,width:3,height:4,style:5})}}export{Ve as A,Ee as C,Ie as S,De as T};
