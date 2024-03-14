function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as l,l as n,T as r,P as s,E as i,q as _,_ as u,K as a,w as c}from"./q-B18e1AFI.js";import{u as v,L as h}from"./q-DvwTjl1F.js";import{useGetProfile as m}from"./q-Ciqnj2e8.js";const d=()=>{const[e,t,o]=l();o.value.isSession?e.value=!0:t("/login")},f=()=>{const e=n(!1),t=m(),o=v();return r(_(()=>u(()=>Promise.resolve().then(()=>g),void 0),"s_WgkLO0Z0SRY",[e,o,t])),s("main",null,null,e.value&&s("div",null,{class:"text-gray-900"},[s("div",null,{class:"text-2xl"},"Welcome to the Dashboard Page",3,null),i(h,{children:s("button",null,{class:"text-sm text-sky-500 hover:text-sky-400"},"Home Page",3,null),href:"/",[a]:{href:a}},3,"pD_0")],1,"pD_1"),1,"pD_2")},g=Object.freeze(Object.defineProperty({__proto__:null,_hW:c,s_7w7YYyGS1d0:f,s_WgkLO0Z0SRY:d},Symbol.toStringTag,{value:"Module"}));export{c as _hW,f as s_7w7YYyGS1d0,d as s_WgkLO0Z0SRY};
