import{s as $}from"./entry.no-QDdXl.js";import{C as u,D as x}from"./scheduler.LO_MRueC.js";const C=()=>{const t=$;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},U={subscribe(t){return C().page.subscribe(t)}};function S(t){const s=t-1;return s*s*s+1}function V(t,{delay:s=0,duration:o=400,easing:e=x}={}){const n=+getComputedStyle(t).opacity;return{delay:s,duration:o,easing:e,css:r=>`opacity: ${r*n}`}}function D(t,{delay:s=0,duration:o=400,easing:e=S,x:n=0,y:r=0,opacity:p=0}={}){const a=getComputedStyle(t),c=+a.opacity,b=a.transform==="none"?"":a.transform,f=c*(1-p),[g,y]=u(n),[m,d]=u(r);return{delay:s,duration:o,easing:e,css:(i,l)=>`
			transform: ${b} translate(${(1-i)*g}${y}, ${(1-i)*m}${d});
			opacity: ${c-f*l}`}}export{V as a,S as c,D as f,U as p};