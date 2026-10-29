document.documentElement.classList.add("js");
const P=document.body.dataset.p,C=document.body.dataset.cta,B=document.body;
const L=[["about","About"],["services","Services"],["skills","Skills"],["gallery","Gallery"]];
const X={tw:"https://x.com/JustADev_rblx",pf:"https://www.roblox.com/users/4160171573/profile"};
const esc=s=>String(s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
B.insertAdjacentHTML("afterbegin",`<div id="pg"></div><div id="ov"><div><img src="/assets/logo.png" alt=""><p>Just a Studio</p></div></div><nav><div class="w"><a class="br" href="/"><img src="/assets/logo.png" alt="Just a Studio logo"><span>Just a Studio</span></a><button id="mb" aria-label="Menu">☰</button><ul>${L.map(([h,t])=>`<li><a href="/${h}" class="${P==h?"on":""}">${t}</a></li>`).join("")}<li><a class="btn" href="/socials">Socials</a></li></ul></div></nav>`);
B.insertAdjacentHTML("beforeend",`${C?`<section class="cta"><div class="w"><p class="ey">Find me</p><h2>${C}</h2><p class="lead">Catch me on Discord, X or Roblox.</p><a class="btn" style="margin-top:32px" href="/socials">My socials</a></div></section>`:""}<footer><div class="w"><div><a class="br" href="/"><img src="/assets/logo.png" alt=""><span>Just a Studio</span></a><p>The Studio <b>YOU</b> can rely on to just <em>Do</em>.</p></div><ul>${L.map(([h,t])=>`<li><a href="/${h}">${t}</a></li>`).join("")}<li><a href="/socials">Socials</a></li></ul><ul><li><a href="${X.pf}" target="_blank" rel="noreferrer">Profile</a></li><li><a href="${X.tw}" target="_blank" rel="noreferrer">Twitter / X</a></li><li>Discord · justadev</li></ul></div><div class="w sm"><p>© 2026 Just a Studio™. All rights reserved.</p><p>Not affiliated with Roblox Corporation.</p></div></footer>`);
document.getElementById("mb").onclick=()=>document.querySelector("nav ul").classList.toggle("open");
const tk=document.querySelector(".tk");if(tk){const g=Array(4).fill(["Luau","Figma","Roblox Studio","Eclipse Animator"].map(t=>`<b>${t}</b><span>✦</span>`).join("")).join("");tk.innerHTML=`<div class="mg">${g}</div><div class="mg">${g}</div>`}
const ov=document.getElementById("ov");
addEventListener("pageshow",()=>setTimeout(()=>ov.classList.add("h"),250));
document.addEventListener("click",e=>{const a=e.target.closest("a[href^='/']"),h=a&&a.getAttribute("href");if(!a||a.target||e.metaKey||e.ctrlKey||h.startsWith("//")||h.includes("#"))return;e.preventDefault();ov.classList.remove("h");setTimeout(()=>location.href=a.href,500)});
document.querySelectorAll(".q").forEach(e=>e.innerHTML=[...e.textContent].map((c,i)=>`<i style="--k:${i}">${c}</i>`).join(""));
document.querySelectorAll(".ph h1").forEach(h=>{let k=0;const o=[];h.childNodes.forEach(n=>{if(n.nodeType==3)n.textContent.split(/\s+/).filter(Boolean).forEach(t=>o.push(`<span class="wr"><span style="--d:${k++*90+100}ms">${t}</span></span>`));else o.push(`<span class="wr"><span style="--d:${k++*90+100}ms">${n.outerHTML}</span></span>`)});h.innerHTML=o.join(" ")});
document.querySelectorAll(".g3>*,.tl>div,.sk,.sv,.st .w>div,.so li,.bars>*,.ph .ey,.ph .lead,.bio>*,.fl").forEach(e=>{e.classList.add("rv");e.style.transitionDelay=[...e.parentElement.children].indexOf(e)*90+"ms"});
const io=new IntersectionObserver(r=>r.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");setTimeout(()=>x.target.style.transitionDelay="",1400)}}),{threshold:.15});
const rv=()=>document.querySelectorAll(".rv,.bar").forEach(e=>io.observe(e));rv();
const dc=document.getElementById("dc");
if(dc)dc.onclick=()=>{navigator.clipboard.writeText("justadev");dc.querySelector("em").textContent="Copied"};
const md=i=>{const y=i.src.match(/(?:youtu\.be\/|v=)([\w-]{11})/);return y?`<iframe src="https://www.youtube.com/embed/${y[1]}" allowfullscreen></iframe>`:i.kind=="video"?`<video src="${esc(i.src)}" controls playsinline preload="metadata"></video>`:`<img src="${esc(i.src)}" alt="${esc(i.title)}" loading="lazy">`};
const card=i=>`<article class="rv"><div class="m">${md(i)}</div><p class="ey" style="margin-top:16px">${esc(i.cat)}</p><h3 style="margin-top:6px">${esc(i.title)}</h3><p>${esc(i.desc)}</p></article>`;
const G=document.getElementById("gr"),H=document.getElementById("hg");
if(G||H)fetch("/api/media").then(r=>r.json()).catch(()=>[]).then(d=>{
if(H){if(d.length){H.innerHTML=d.slice(0,3).map(card).join("");document.getElementById("hw").hidden=false;rv()}return}
let f="All";const bs=document.querySelectorAll(".fl button"),draw=()=>{const l=d.filter(i=>f=="All"||i.cat==f);G.innerHTML=l.length?l.map(card).join(""):`<p class="lead">No projects uploaded yet.</p>`;rv()};
bs.forEach(b=>b.onclick=()=>{f=b.dataset.f;bs.forEach(x=>x.classList.toggle("on",x==b));draw()});draw()});

document.querySelectorAll(".hv").forEach(el=>{const w=n=>[...n.childNodes].forEach(c=>{if(c.nodeType==3){const f=document.createDocumentFragment();[...c.textContent].forEach((t,i)=>{const s=document.createElement("span");s.className="ch";s.textContent=t==" "?"\u00a0":t;s.style.transitionDelay=i*25+"ms";f.append(s)});c.replaceWith(f)}else if(c.nodeType==1)w(c)});w(el)});
const ty=document.getElementById("ty");
if(ty){const W=["Luau scripting.","UI design.","animation."];let w=0,i=0,d=0;const t=()=>{const s=W[w];i+=d?-1:1;ty.textContent=s.slice(0,i);let n=d?35:75;if(!d&&i==s.length){d=1;n=1800}else if(d&&!i){d=0;w=(w+1)%W.length;n=300}setTimeout(t,n)};setTimeout(t,1600)}

const pg=document.getElementById("pg");
addEventListener("scroll",()=>pg.style.width=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100+"%",{passive:true});
document.querySelectorAll("[data-n]").forEach(b=>{const n=+b.dataset.n,s=b.dataset.s||"",d=+b.dataset.d||0;new IntersectionObserver((r,o)=>{if(!r[0].isIntersecting)return;o.disconnect();const t0=performance.now(),f=t=>{const p=Math.min(1,(t-t0)/1600);b.textContent=(n*(1-Math.pow(1-p,3))).toFixed(d)+s;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}).observe(b)});
const cv=document.getElementById("dots");
if(cv){const x=cv.getContext("2d"),s=cv.parentElement,m={x:-999,y:-999},rm=matchMedia("(prefers-reduced-motion:reduce)").matches;let w,h,t=0;
const rs=()=>{const d=devicePixelRatio||1;w=s.clientWidth;h=s.clientHeight;cv.width=w*d;cv.height=h*d;x.setTransform(d,0,0,d,0,0)};
rs();addEventListener("resize",rs);
s.addEventListener("mousemove",e=>{const r=s.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
s.addEventListener("mouseleave",()=>{m.x=m.y=-999});
const dr=()=>{x.clearRect(0,0,w,h);for(let i=0;i<w;i+=26)for(let j=0;j<h;j+=26){const n=Math.max(0,1-Math.hypot(i-m.x,j-m.y)/170);x.fillStyle=`rgba(10,10,10,${.1+n*.4+Math.sin(i*.01-j*.012+t*1.3)*.05})`;x.beginPath();x.arc(i+13,j+13,1.2+Math.sin(i*.012+j*.012+t)*.5+n*2.6,0,7);x.fill()}t+=.03;if(!rm)requestAnimationFrame(dr)};dr()}
