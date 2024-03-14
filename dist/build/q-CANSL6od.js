function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as n,l as e,q as C,e as t,E as m,_ as p,U as R}from"./q-B18e1AFI.js";import{c as f,C as g,d as x,D as y,R as E,e as I,f as P,h as U,i as b}from"./q-DvwTjl1F.js";const h=o=>{const s=o.url??"http://localhost/",a=new URL(s),r=n({url:a,params:o.params??{},isNavigating:!1,prevUrl:void 0},{deep:!1}),c=e({}),i=e({type:"initial",dest:a}),l=o.goto??C(()=>p(()=>Promise.resolve().then(()=>S),void 0),"s_BUbtvTyvVRE"),d=n(f,{deep:!1}),u=n({headings:void 0,menu:void 0},{deep:!1}),v=e(),_=e();return t(g,u),t(x,v),t(y,d),t(E,r),t(I,l),t(P,c),t(U,_),t(b,i),m(R,null,3,"qY_1")},w=async()=>{console.warn("QwikCityMockProvider: goto not provided")},S=Object.freeze(Object.defineProperty({__proto__:null,s_BUbtvTyvVRE:w,s_WmYC5H00wtI:h},Symbol.toStringTag,{value:"Module"}));export{w as s_BUbtvTyvVRE,h as s_WmYC5H00wtI};
