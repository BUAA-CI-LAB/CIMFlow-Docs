"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[728],{6728:(t,e,n)=>{function i(t){let e=[],n=new Set;for(let i of t)n.has(i.url)||(n.add(i.url),e.push({id:i.url,type:"page",url:i.url,content:i.title})),e.push({id:i.objectID,type:i.content===i.section?"heading":"text",url:i.section_id?`${i.url}#${i.section_id}`:i.url,content:i.content});return e}async function s(t,e,n,s){let r=s?.filters;return(n&&(r=r?`tag:${n} AND (${r})`:`tag:${n}`),0===e.length)?i((await t.search(e,{distinct:1,hitsPerPage:8,...s,filters:r})).hits).filter(t=>"page"===t.type):i((await t.search(e,{distinct:5,hitsPerPage:10,...s,filters:r})).hits)}n.d(e,{searchDocs:()=>s}),n(9189)}}]);