document.documentElement.classList.add("js");
const P=document.body.dataset.p,C=document.body.dataset.cta,B=document.body;
const L=[["about","About"],["services","Services"],["skills","Skills"],["gallery","Gallery"]];
const X={tw:"https://x.com/JustADev_rblx",pf:"https://www.roblox.com/users/4160171573/profile",em:"justadev.business@gmail.com"};
const esc=s=>String(s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
B.insertAdjacentHTML("afterbegin",`<div id="ov"><div><img src="/assets/logo.png" alt=""><p>Just a Studio</p></div></div><nav><div class="w"><a class="br" href="/"><img src="/assets/logo.png" alt="Just a Studio logo"><span>Just a Studio</span></a><button id="mb" aria-label="Menu">☰</button><ul>${L.map(([h,t])=>`<li><a href="/${h}" class="${P==h?"on":""}">${t}</a></li>`).join("")}<li><a class="btn" href="/contact">Hire Me</a></li></ul></div></nav>`);
B.insertAdjacentHTML("beforeend",`${C?`<section class="cta"><div class="w"><p class="ey">Let’s work together</p><h2>${C}</h2><p class="lead">Tell me about your project, timeline and what “done” looks like. I reply within 24 hours.</p><a class="btn" style="background:var(--bg);color:var(--fg);margin-top:32px" href="/contact">Start a project</a></div></section>`:""}<footer><div class="w"><div><a class="br" href="/"><img src="/assets/logo.png" alt=""><span>Just a Studio</span></a><p>The Studio <b>YOU</b> can rely on to just <em>Do</em>.</p></div><ul>${L.map(([h,t])=>`<li><a href="/${h}">${t}</a></li>`).join("")}<li><a href="/contact">Contact</a></li></ul><ul><li><a href="mailto:${X.em}">${X.em}</a></li><li><a href="${X.pf}" target="_blank" rel="noreferrer">Profile</a></li><li><a href="${X.tw}" target="_blank" rel="noreferrer">Twitter / X</a></li><li>Discord · justadev</li></ul></div><div class="w sm"><p>© 2026 Just a Studio™. All rights reserved.</p><p>Not affiliated with Roblox Corporation.</p></div></footer>`);
document.getElementById("mb").onclick=()=>document.querySelector("nav ul").classList.toggle("open");
const tk=document.querySelector(".tk");if(tk){const g=Array(4).fill(["Luau","Figma","Roblox Studio","Eclipse Animator"].map(t=>`<b>${t}</b><span>✦</span>`).join("")).join("");tk.innerHTML=`<div class="mg">${g}</div><div class="mg">${g}</div>`}
const ov=document.getElementById("ov");
addEventListener("pageshow",()=>setTimeout(()=>ov.classList.add("h"),250));
document.addEventListener("click",e=>{const a=e.target.closest("a[href^='/']"),h=a&&a.getAttribute("href");if(!a||a.target||e.metaKey||e.ctrlKey||h.startsWith("//")||h.includes("#"))return;e.preventDefault();ov.classList.remove("h");setTimeout(()=>location.href=a.href,500)});
const io=new IntersectionObserver(r=>r.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.15});
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
