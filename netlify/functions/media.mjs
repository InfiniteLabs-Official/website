import{getStore}from"@netlify/blobs";
export const config={path:"/api/media"};
export default async req=>{
const s=getStore("gallery"),u=new URL(req.url),idx=async()=>await s.get("index",{type:"json"})||[];
if(req.method=="GET"){
const f=u.searchParams.get("file");
if(!f)return Response.json(await idx());
const e=(await idx()).find(i=>i.id==f),d=await s.get("f_"+f,{type:"arrayBuffer"});
return e&&d?new Response(d,{headers:{"content-type":e.mime,"cache-control":"public,max-age=31536000"}}):new Response("",{status:404})}
const pw=process.env.ADMIN_PASSWORD;
if(!pw||req.headers.get("x-admin")!=pw)return new Response("",{status:401});
const l=await idx();
if(req.method=="POST"){
const b=await req.json();
if(b.check)return Response.json({ok:1});
const id=crypto.randomUUID(),it={id,title:b.title,cat:b.cat,desc:b.desc,kind:b.kind,src:b.url};
if(b.data){await s.set("f_"+id,Buffer.from(b.data,"base64"));it.mime=b.mime;it.src="/api/media?file="+id}
l.unshift(it);await s.setJSON("index",l);return Response.json(it)}
if(req.method=="DELETE"){
const id=u.searchParams.get("id");
await s.delete("f_"+id);await s.setJSON("index",l.filter(i=>i.id!=id));return Response.json({ok:1})}
return new Response("",{status:405})};
