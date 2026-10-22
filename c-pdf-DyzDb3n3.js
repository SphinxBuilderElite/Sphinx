import{W as f,_ as l,a as m}from"./c-pdf-DM9G-9Sl.js";let a=null;async function u(p){a||(a=new f,l.workerPort=a);const s=await m({data:new Uint8Array(p),isEvalSupported:!1,verbosity:0}).promise,i=[];try{for(let e=1;e<=s.numPages;e++){const c=await(await s.getPage(e)).getTextContent(),n=new Map;for(const t of c.items){if(!("str"in t)||!t.str.trim())continue;const o=Math.round(t.transform[5]/3)*3,r=n.get(o)??[];r.push({x:t.transform[4],s:t.str}),n.set(o,r)}const w=[...n.entries()].sort((t,o)=>o[0]-t[0]).map(([,t])=>t.sort((o,r)=>o.x-r.x).map(o=>o.s).join("   "));i.push(`Page : ${e}
${w.join(`
`)}`)}}finally{await s.destroy()}return i.join(`

`)}export{u as pdfToText};
