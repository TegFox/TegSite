import{S as P,i as M,s as j,k as b,w as _,l as y,m as E,x as p,h as m,n as v,p as I,b as $,y as k,f as h,t as d,z as w,C as Q,D as W,E as K,F as O,q as V,a as T,e as G,r as C,c as L,I as D,u as z,J as B,B as X}from"../../../chunks/index-cb6f9799.js";import{g as S}from"../../../chunks/GlobalVars-ecebef74.js";import{T as Z}from"../../../chunks/Title-f42e0ef2.js";import{B as N}from"../../../chunks/Body-14f873fe.js";import{C as x}from"../../../chunks/Comms-05246e12.js";import{S as H}from"../../../chunks/StackPanel-86054d37.js";import{C as ee}from"../../../chunks/Card-27e38055.js";import{i as te}from"../../../chunks/prices-2f6f2777.js";import{i as se}from"../../../chunks/ych-90f1038c.js";import{i as ne}from"../../../chunks/terms-dae409b5.js";import{i as re}from"../../../chunks/about-19f04270.js";const le=""+new URL("../../../assets/forest-81acb79c.png",import.meta.url).href;function ae(i){let e,s,n;const r=i[7].default,t=Q(r,i,i[8],null);return{c(){e=b("div"),t&&t.c(),this.h()},l(l){e=y(l,"DIV",{class:!0,style:!0});var a=E(e);t&&t.l(a),a.forEach(m),this.h()},h(){v(e,"class","greyscale-card-inner svelte-1jfpdue"),v(e,"style",s=`--greyscale-card-darkness: ${i[1]}; --greyscale-card-padding: ${i[3]}`)},m(l,a){$(l,e,a),t&&t.m(e,null),n=!0},p(l,a){t&&t.p&&(!n||a&256)&&W(t,r,l,l[8],n?O(r,l[8],a,null):K(l[8]),null),(!n||a&10&&s!==(s=`--greyscale-card-darkness: ${l[1]}; --greyscale-card-padding: ${l[3]}`))&&v(e,"style",s)},i(l){n||(h(t,l),n=!0)},o(l){d(t,l),n=!1},d(l){l&&m(e),t&&t.d(l)}}}function ie(i){let e,s,n,r;return s=new ee({props:{background:i[4],padding:"0",$$slots:{default:[ae]},$$scope:{ctx:i}}}),{c(){e=b("div"),_(s.$$.fragment),this.h()},l(t){e=y(t,"DIV",{class:!0,style:!0});var l=E(e);p(s.$$.fragment,l),l.forEach(m),this.h()},h(){v(e,"class","greyscale-card-outer svelte-1jfpdue"),v(e,"style",n=`--greyscale-card-base: ${i[0]}`),I(e,"height",i[2])},m(t,l){$(t,e,l),k(s,e,null),r=!0},p(t,[l]){const a={};l&16&&(a.background=t[4]),l&266&&(a.$$scope={dirty:l,ctx:t}),s.$set(a),(!r||l&1&&n!==(n=`--greyscale-card-base: ${t[0]}`))&&v(e,"style",n),l&4&&I(e,"height",t[2])},i(t){r||(h(s.$$.fragment,t),r=!0)},o(t){d(s.$$.fragment,t),r=!1},d(t){t&&m(e),w(s)}}}function fe(i,e,s){let{$$slots:n={},$$scope:r}=e,{base:t="100%"}=e,{background:l="#222222"}=e,{darkness:a="20%"}=e,{overlay:f}=e,{height:c="auto"}=e,{padding:o="3rem 2rem"}=e,u;return f?u=`linear-gradient(${f}, ${f}), ${l}`:u=l,i.$$set=g=>{"base"in g&&s(0,t=g.base),"background"in g&&s(5,l=g.background),"darkness"in g&&s(1,a=g.darkness),"overlay"in g&&s(6,f=g.overlay),"height"in g&&s(2,c=g.height),"padding"in g&&s(3,o=g.padding),"$$scope"in g&&s(8,r=g.$$scope)},[t,a,c,o,u,l,f,n,r]}class oe extends P{constructor(e){super(),M(this,e,fe,ie,j,{base:0,background:5,darkness:1,overlay:6,height:2,padding:3})}}function Y(i){let e,s;return{c(){e=b("div"),s=V(i[2]),this.h()},l(n){e=y(n,"DIV",{class:!0});var r=E(e);s=C(r,i[2]),r.forEach(m),this.h()},h(){v(e,"class","text goto-ds svelte-h6f4we")},m(n,r){$(n,e,r),D(e,s)},p(n,r){r&4&&z(s,n[2])},d(n){n&&m(e)}}}function ue(i){let e,s,n,r,t=i[2]&&Y(i);return{c(){e=b("div"),s=V(i[1]),n=T(),t&&t.c(),r=G(),this.h()},l(l){e=y(l,"DIV",{class:!0});var a=E(e);s=C(a,i[1]),a.forEach(m),n=L(l),t&&t.l(l),r=G(),this.h()},h(){v(e,"class","h2 goto-ds svelte-h6f4we")},m(l,a){$(l,e,a),D(e,s),$(l,n,a),t&&t.m(l,a),$(l,r,a)},p(l,a){a&2&&z(s,l[1]),l[2]?t?t.p(l,a):(t=Y(l),t.c(),t.m(r.parentNode,r)):t&&(t.d(1),t=null)},d(l){l&&m(e),l&&m(n),t&&t.d(l),l&&m(r)}}}function ce(i){let e,s,n;return s=new oe({props:{background:i[0],overlay:i[4],height:i[6],padding:i[5],base:"75%",$$slots:{default:[ue]},$$scope:{ctx:i}}}),{c(){e=b("a"),_(s.$$.fragment),this.h()},l(r){e=y(r,"A",{href:!0});var t=E(e);p(s.$$.fragment,t),t.forEach(m),this.h()},h(){v(e,"href",i[3]),I(e,"text-decoration","none"),I(e,"color","white")},m(r,t){$(r,e,t),k(s,e,null),n=!0},p(r,[t]){const l={};t&1&&(l.background=r[0]),t&16&&(l.overlay=r[4]),t&64&&(l.height=r[6]),t&32&&(l.padding=r[5]),t&134&&(l.$$scope={dirty:t,ctx:r}),s.$set(l),(!n||t&8)&&v(e,"href",r[3])},i(r){n||(h(s.$$.fragment,r),n=!0)},o(r){d(s.$$.fragment,r),n=!1},d(r){r&&m(e),w(s)}}}function me(i,e,s){let{background:n="#222222"}=e,{title:r=""}=e,{sub:t}=e,{href:l}=e,{overlay:a}=e,{padding:f="3rem 0 3rem 2rem"}=e,{height:c="auto"}=e;return i.$$set=o=>{"background"in o&&s(0,n=o.background),"title"in o&&s(1,r=o.title),"sub"in o&&s(2,t=o.sub),"href"in o&&s(3,l=o.href),"overlay"in o&&s(4,a=o.overlay),"padding"in o&&s(5,f=o.padding),"height"in o&&s(6,c=o.height)},[n,r,t,l,a,f,c]}class A extends P{constructor(e){super(),M(this,e,me,ce,j,{background:0,title:1,sub:2,href:3,overlay:4,padding:5,height:6})}}function ge(i){let e,s,n,r;return e=new A({props:{background:`url(${te})`,overlay:i[0],href:S.links.prices.path,title:"Prices",sub:"Learn More"}}),n=new A({props:{background:`url(${se})`,overlay:i[0],href:S.links.ych.path,title:"YCH",sub:"Your Character Here. Learn More"}}),{c(){_(e.$$.fragment),s=T(),_(n.$$.fragment)},l(t){p(e.$$.fragment,t),s=L(t),p(n.$$.fragment,t)},m(t,l){k(e,t,l),$(t,s,l),k(n,t,l),r=!0},p(t,l){const a={};l&1&&(a.overlay=t[0]),e.$set(a);const f={};l&1&&(f.overlay=t[0]),n.$set(f)},i(t){r||(h(e.$$.fragment,t),h(n.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),d(n.$$.fragment,t),r=!1},d(t){w(e,t),t&&m(s),w(n,t)}}}function $e(i){let e,s,n,r;return e=new A({props:{background:`url(${ne})`,overlay:i[0],href:S.links.termsfaq.path,title:"Terms & FAQ",sub:"Learn More"}}),n=new A({props:{background:`url(${re})`,overlay:i[0],href:S.links.about.path,title:"About Me!",sub:"Learn More"}}),{c(){_(e.$$.fragment),s=T(),_(n.$$.fragment)},l(t){p(e.$$.fragment,t),s=L(t),p(n.$$.fragment,t)},m(t,l){k(e,t,l),$(t,s,l),k(n,t,l),r=!0},p(t,l){const a={};l&1&&(a.overlay=t[0]),e.$set(a);const f={};l&1&&(f.overlay=t[0]),n.$set(f)},i(t){r||(h(e.$$.fragment,t),h(n.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),d(n.$$.fragment,t),r=!1},d(t){w(e,t),t&&m(s),w(n,t)}}}function he(i){let e,s,n,r,t,l,a;return n=new H({props:{direction:"column",gap:"2rem",align:"stretch",$$slots:{default:[ge]},$$scope:{ctx:i}}}),l=new H({props:{direction:"column",gap:"2rem",align:"stretch",$$slots:{default:[$e]},$$scope:{ctx:i}}}),{c(){e=b("div"),s=b("div"),_(n.$$.fragment),r=T(),t=b("div"),_(l.$$.fragment),this.h()},l(f){e=y(f,"DIV",{class:!0});var c=E(e);s=y(c,"DIV",{class:!0});var o=E(s);p(n.$$.fragment,o),o.forEach(m),r=L(c),t=y(c,"DIV",{class:!0});var u=E(t);p(l.$$.fragment,u),u.forEach(m),c.forEach(m),this.h()},h(){v(s,"class","mobilewrap-flexitem svelte-1d3nsl5"),v(t,"class","mobilewrap-flexitem svelte-1d3nsl5"),v(e,"class","mobilewrap-flexbox svelte-1d3nsl5")},m(f,c){$(f,e,c),D(e,s),k(n,s,null),D(e,r),D(e,t),k(l,t,null),a=!0},p(f,[c]){const o={};c&3&&(o.$$scope={dirty:c,ctx:f}),n.$set(o);const u={};c&3&&(u.$$scope={dirty:c,ctx:f}),l.$set(u)},i(f){a||(h(n.$$.fragment,f),h(l.$$.fragment,f),a=!0)},o(f){d(n.$$.fragment,f),d(l.$$.fragment,f),a=!1},d(f){f&&m(e),w(n),w(l)}}}function de(i,e,s){let{overlay:n}=e;return i.$$set=r=>{"overlay"in r&&s(0,n=r.overlay)},[n]}class _e extends P{constructor(e){super(),M(this,e,de,he,j,{overlay:0})}}function pe(i){let e,s;return{c(){e=b("div"),s=V(i[1]),this.h()},l(n){e=y(n,"DIV",{});var r=E(e);s=C(r,i[1]),r.forEach(m),this.h()},h(){I(e,"height",i[3])},m(n,r){$(n,e,r),D(e,s)},p(n,r){r&2&&z(s,n[1]),r&8&&I(e,"height",n[3])},d(n){n&&m(e)}}}function ve(i){let e,s;return{c(){e=b("img"),this.h()},l(n){e=y(n,"IMG",{src:!0,alt:!0}),this.h()},h(){B(e.src,s=i[0])||v(e,"src",s),v(e,"alt","Logo"),I(e,"height",i[3])},m(n,r){$(n,e,r)},p(n,r){r&1&&!B(e.src,s=n[0])&&v(e,"src",s),r&8&&I(e,"height",n[3])},d(n){n&&m(e)}}}function ke(i){let e,s,n;function r(a,f){if(a[0])return ve;if(a[1])return pe}let t=r(i),l=t&&t(i);return{c(){l&&l.c(),e=T(),s=b("div"),n=V(i[2]),this.h()},l(a){l&&l.l(a),e=L(a),s=y(a,"DIV",{class:!0});var f=E(s);n=C(f,i[2]),f.forEach(m),this.h()},h(){v(s,"class","h3")},m(a,f){l&&l.m(a,f),$(a,e,f),$(a,s,f),D(s,n)},p(a,f){t===(t=r(a))&&l?l.p(a,f):(l&&l.d(1),l=t&&t(a),l&&(l.c(),l.m(e.parentNode,e))),f&4&&z(n,a[2])},d(a){l&&l.d(a),a&&m(e),a&&m(s)}}}function J(i){let e,s,n;return{c(){e=b("a"),s=V("Go to "),n=V(i[2]),this.h()},l(r){e=y(r,"A",{href:!0,class:!0});var t=E(e);s=C(t,"Go to "),n=C(t,i[2]),t.forEach(m),this.h()},h(){v(e,"href",i[5]),v(e,"class","text link")},m(r,t){$(r,e,t),D(e,s),D(e,n)},p(r,t){t&4&&z(n,r[2]),t&32&&v(e,"href",r[5])},d(r){r&&m(e)}}}function we(i){let e,s,n,r,t,l;e=new H({props:{direction:"row",align:"center",gap:"1rem",$$slots:{default:[ke]},$$scope:{ctx:i}}});const a=i[6].default,f=Q(a,i,i[7],null);let c=i[5]&&J(i);return{c(){_(e.$$.fragment),s=T(),n=b("div"),f&&f.c(),r=T(),c&&c.c(),t=G(),this.h()},l(o){p(e.$$.fragment,o),s=L(o),n=y(o,"DIV",{class:!0});var u=E(n);f&&f.l(u),u.forEach(m),r=L(o),c&&c.l(o),t=G(),this.h()},h(){v(n,"class","text")},m(o,u){k(e,o,u),$(o,s,u),$(o,n,u),f&&f.m(n,null),$(o,r,u),c&&c.m(o,u),$(o,t,u),l=!0},p(o,u){const g={};u&143&&(g.$$scope={dirty:u,ctx:o}),e.$set(g),f&&f.p&&(!l||u&128)&&W(f,a,o,o[7],l?O(a,o[7],u,null):K(o[7]),null),o[5]?c?c.p(o,u):(c=J(o),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null)},i(o){l||(h(e.$$.fragment,o),h(f,o),l=!0)},o(o){d(e.$$.fragment,o),d(f,o),l=!1},d(o){w(e,o),o&&m(s),o&&m(n),f&&f.d(o),o&&m(r),c&&c.d(o),o&&m(t)}}}function be(i){let e,s,n;return s=new H({props:{direction:"column",gap:"1rem",align:"flex-start",$$slots:{default:[we]},$$scope:{ctx:i}}}),{c(){e=b("div"),_(s.$$.fragment),this.h()},l(r){e=y(r,"DIV",{});var t=E(e);p(s.$$.fragment,t),t.forEach(m),this.h()},h(){I(e,"width",i[4]),I(e,"margin-left","0"),I(e,"margin-right","auto"),I(e,"padding","2rem")},m(r,t){$(r,e,t),k(s,e,null),n=!0},p(r,[t]){const l={};t&175&&(l.$$scope={dirty:t,ctx:r}),s.$set(l),t&16&&I(e,"width",r[4])},i(r){n||(h(s.$$.fragment,r),n=!0)},o(r){d(s.$$.fragment,r),n=!1},d(r){r&&m(e),w(s)}}}function ye(i,e,s){let{$$slots:n={},$$scope:r}=e,{img:t}=e,{icon:l}=e,{name:a}=e,{logoSize:f="4rem"}=e,{width:c}=e,{href:o}=e;return i.$$set=u=>{"img"in u&&s(0,t=u.img),"icon"in u&&s(1,l=u.icon),"name"in u&&s(2,a=u.name),"logoSize"in u&&s(3,f=u.logoSize),"width"in u&&s(4,c=u.width),"href"in u&&s(5,o=u.href),"$$scope"in u&&s(7,r=u.$$scope)},[t,l,a,f,c,o,n,r]}class F extends P{constructor(e){super(),M(this,e,ye,be,j,{img:0,icon:1,name:2,logoSize:3,width:4,href:5})}}const Ie=""+new URL("../../../assets/twitter-e5c7f768.svg",import.meta.url).href,Ee=""+new URL("../../../assets/trello-2b86b968.png",import.meta.url).href,Te=""+new URL("../../../assets/patreon-6f96cee9.png",import.meta.url).href;function Le(i){let e;return{c(){e=V(`Twitter is where I post art and updates most frequently. If you want to keep up with me and my\r
            shenanigans, this is the place to go!`)},l(s){e=C(s,`Twitter is where I post art and updates most frequently. If you want to keep up with me and my\r
            shenanigans, this is the place to go!`)},m(s,n){$(s,e,n)},d(s){s&&m(e)}}}function De(i){let e;return{c(){e=V(`Trello is how I keep track of my queue! If I have commissions or projects in progress, all\r
            of it will be accounted for on this board!`)},l(s){e=C(s,`Trello is how I keep track of my queue! If I have commissions or projects in progress, all\r
            of it will be accounted for on this board!`)},m(s,n){$(s,e,n)},d(s){s&&m(e)}}}function Ve(i){let e;return{c(){e=V("Patreon is a service that allows subscribers to get access to exclusive content!")},l(s){e=C(s,"Patreon is a service that allows subscribers to get access to exclusive content!")},m(s,n){$(s,e,n)},d(s){s&&m(e)}}}function Ce(i){let e,s,n,r,t,l;return e=new F({props:{img:Ie,name:"Twitter",href:S.external.twitter,width:i[0],$$slots:{default:[Le]},$$scope:{ctx:i}}}),n=new F({props:{img:Ee,name:"Trello",href:S.external.trello,width:i[0],$$slots:{default:[De]},$$scope:{ctx:i}}}),t=new F({props:{img:Te,name:"Patreon",href:S.external.patreon,width:i[0],$$slots:{default:[Ve]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment),s=T(),_(n.$$.fragment),r=T(),_(t.$$.fragment)},l(a){p(e.$$.fragment,a),s=L(a),p(n.$$.fragment,a),r=L(a),p(t.$$.fragment,a)},m(a,f){k(e,a,f),$(a,s,f),k(n,a,f),$(a,r,f),k(t,a,f),l=!0},p(a,f){const c={};f&1&&(c.width=a[0]),f&2&&(c.$$scope={dirty:f,ctx:a}),e.$set(c);const o={};f&1&&(o.width=a[0]),f&2&&(o.$$scope={dirty:f,ctx:a}),n.$set(o);const u={};f&1&&(u.width=a[0]),f&2&&(u.$$scope={dirty:f,ctx:a}),t.$set(u)},i(a){l||(h(e.$$.fragment,a),h(n.$$.fragment,a),h(t.$$.fragment,a),l=!0)},o(a){d(e.$$.fragment,a),d(n.$$.fragment,a),d(t.$$.fragment,a),l=!1},d(a){w(e,a),a&&m(s),w(n,a),a&&m(r),w(t,a)}}}function qe(i){let e,s,n;return s=new H({props:{style:"justify-content: space-evenly",$$slots:{default:[Ce]},$$scope:{ctx:i}}}),{c(){e=b("div"),_(s.$$.fragment),this.h()},l(r){e=y(r,"DIV",{style:!0});var t=E(e);p(s.$$.fragment,t),t.forEach(m),this.h()},h(){I(e,"display","flex"),I(e,"flex-direction","column"),I(e,"align-items","center")},m(r,t){$(r,e,t),k(s,e,null),n=!0},p(r,[t]){const l={};t&3&&(l.$$scope={dirty:t,ctx:r}),s.$set(l)},i(r){n||(h(s.$$.fragment,r),n=!0)},o(r){d(s.$$.fragment,r),n=!1},d(r){r&&m(e),w(s)}}}function Se(i,e,s){let{socialwidth:n}=e;return i.$$set=r=>{"socialwidth"in r&&s(0,n=r.socialwidth)},[n]}class He extends P{constructor(e){super(),M(this,e,Se,qe,j,{socialwidth:0})}}function Pe(i){let e;return{c(){e=V("Hey! I'm Teg, and I draw fluffy animals!")},l(s){e=C(s,"Hey! I'm Teg, and I draw fluffy animals!")},m(s,n){$(s,e,n)},d(s){s&&m(e)}}}function Me(i){let e,s,n,r;return e=new x({props:{status:S.comms}}),n=new _e({props:{overlay:Ae}}),{c(){_(e.$$.fragment),s=T(),_(n.$$.fragment)},l(t){p(e.$$.fragment,t),s=L(t),p(n.$$.fragment,t)},m(t,l){k(e,t,l),$(t,s,l),k(n,t,l),r=!0},p:X,i(t){r||(h(e.$$.fragment,t),h(n.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),d(n.$$.fragment,t),r=!1},d(t){w(e,t),t&&m(s),w(n,t)}}}function je(i){let e,s;return e=new H({props:{direction:"column",gap:"6rem",$$slots:{default:[Me]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment)},l(n){p(e.$$.fragment,n)},m(n,r){k(e,n,r),s=!0},p(n,r){const t={};r&1&&(t.$$scope={dirty:r,ctx:n}),e.$set(t)},i(n){s||(h(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){w(e,n)}}}function ze(i){let e,s;return e=new He({props:{socialwidth:Fe}}),{c(){_(e.$$.fragment)},l(n){p(e.$$.fragment,n)},m(n,r){k(e,n,r),s=!0},p:X,i(n){s||(h(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){w(e,n)}}}function Ge(i){let e,s,n,r,t,l,a,f,c,o;return t=new Z({props:{title:"Welcome!",img:le,$$slots:{default:[Pe]},$$scope:{ctx:i}}}),a=new N({props:{$$slots:{default:[je]},$$scope:{ctx:i}}}),c=new N({props:{color:S.colors.teg_grey,$$slots:{default:[ze]},$$scope:{ctx:i}}}),{c(){e=b("title"),s=V("Teg Fox"),n=T(),r=b("div"),_(t.$$.fragment),l=T(),_(a.$$.fragment),f=T(),_(c.$$.fragment)},l(u){e=y(u,"TITLE",{});var g=E(e);s=C(g,"Teg Fox"),g.forEach(m),n=L(u),r=y(u,"DIV",{});var q=E(r);p(t.$$.fragment,q),l=L(q),p(a.$$.fragment,q),f=L(q),p(c.$$.fragment,q),q.forEach(m)},m(u,g){$(u,e,g),D(e,s),$(u,n,g),$(u,r,g),k(t,r,null),D(r,l),k(a,r,null),D(r,f),k(c,r,null),o=!0},p(u,[g]){const q={};g&1&&(q.$$scope={dirty:g,ctx:u}),t.$set(q);const R={};g&1&&(R.$$scope={dirty:g,ctx:u}),a.$set(R);const U={};g&1&&(U.$$scope={dirty:g,ctx:u}),c.$set(U)},i(u){o||(h(t.$$.fragment,u),h(a.$$.fragment,u),h(c.$$.fragment,u),o=!0)},o(u){d(t.$$.fragment,u),d(a.$$.fragment,u),d(c.$$.fragment,u),o=!1},d(u){u&&m(e),u&&m(n),u&&m(r),w(t),w(a),w(c)}}}const Ae="#0000002a",Fe="20rem";class Ze extends P{constructor(e){super(),M(this,e,null,Ge,j,{})}}export{Ze as default};