import{a as n,w as o,t as _,u as s}from"./entry.4efd4aed.js";import{u as i,a as c}from"./useDate.9764ee7d.js";const l=n({__name:"swr",async setup(p){let t,e;const{data:r}=([t,e]=o(()=>c("/api/date","$OMgreOB8cm")),t=await t,e(),t);return(m,u)=>{var a;return"Stale-while-revalidate (ISR): "+_(s(i)((a=s(r))==null?void 0:a.date))}}});export{l as default};