"use strict";
/* Fuentes: [autor, fecha, título, url, nombre corto] */
const R={
1:["Peralta, L. / La República","5 de agosto de 2025","Ciberdelincuentes se hacen pasar por trabajadores del Banco de la Nación y roban más de S/1 millón a Municipalidad de Yura en Arequipa","https://larepublica.pe/sociedad/2025/08/05/ciberdelincuentes-se-hacen-pasar-por-trabajadores-del-banco-de-la-nacion-y-roban-mas-de-s1-millon-a-municipalidad-de-yura-en-arequipa-395650","La República"],
2:["TV Perú Noticias","30 de octubre de 2024","Interbank reconoce que datos de sus clientes fueron expuestos por un tercero","https://www.tvperu.gob.pe/noticias/nacionales/interbank-reconoce-que-datos-de-sus-clientes-fueron-expuestos-por-un-tercero","TV Perú"],
3:["Banco Santander","14 de mayo de 2024","Comunicado","https://www.santander.com/es/stories/comunicado","Santander"],
4:["Pepco Group","27 de febrero de 2024","Notice regarding Hungarian business","https://www.pepcogroup.eu/media-news/pepco-group-n-v-notice-regarding-hungarian-business/","Pepco Group"],
5:["Congressional Research Service","2024","The Change Healthcare Cyberattack","https://www.congress.gov/crs_external_products/IN/HTML/IN12330.web.html","CRS"],
6:["U.S. House Committee on Energy and Commerce","3 de mayo de 2024","What We Learned: Change Healthcare Cyber Attack","https://energycommerce.house.gov/posts/what-we-learned-change-healthcare-cyber-attack","Cámara de EE. UU."],
7:["NHS England","actualización del 10 de noviembre de 2025","Synnovis cyber incident","https://www.england.nhs.uk/synnovis-cyber-incident/","NHS England"],
8:["Martin, A. / The Record","25 de junio de 2025","Ransomware attack contributed to patient’s death, says Britain’s NHS","https://therecord.media/ransomware-attack-contributed-patient-death-uk-nhs","The Record"],
9:["Associated Press / NBC News","2024","Indonesia won’t pay an $8 million ransom after a cyberattack compromised its national data center","https://www.nbcnews.com/news/world/indonesia-wont-pay-8-million-ransom-cyberattack-compromised-national-d-rcna158747","NBC News"],
10:["Sansec Forensics Team","25 de junio de 2024","Polyfill supply chain attack hits 100K+ sites","https://sansec.io/research/polyfill-supply-chain-attack","Sansec"],
11:["Port of Seattle","2024 y abril de 2025","Port Cyberattack Archive","https://www.portseattle.org/news/port-cyberattack-archive","Port of Seattle"],
12:["TechCrunch","9 de octubre de 2024","The Internet Archive slammed by DDoS attack and data breach","https://techcrunch.com/2024/10/09/the-internet-archive-slammed-by-ddos-attack-and-data-breach/","TechCrunch"],
15:["Banco de la Nación","25 de abril de 2025","BN advierte sobre llamadas y mensajes falsos para obtener información sensible de los clientes","https://www.bn.com.pe/noticias/2025/25042025-advierte-sobre-llamadas-fraudulentas.asp","Banco de la Nación"]
};
const COL={"Vishing":"#c0392b","Fuga de datos":"#0b7285","Phishing":"#b7791f","Ransomware":"#7c3aed","Malware":"#2f855a","DDoS":"#2b6cb0"};

/* f: año-mes para ordenar. i: impactos [etiqueta, texto] */
const C=[
{n:1,f:"2025-07",d:"Julio de 2025",p:"Yura (Arequipa), Perú",v:"Municipalidad Distrital de Yura",t:"Vishing",x:"Con spoofing de número telefónico e ingeniería social.",s:"Falsos empleados del Banco de la Nación llamaron a funcionarios financieros y lograron que entregaran códigos de verificación. El banco indicó que sus sistemas no fueron vulnerados.",i:[["Económico","pérdida de más de S/ 1 millón."],["Legal","denuncia ante la PNP y el Ministerio Público."]],r:[1,15],g:["Perú","Institución del Estado"]},
{n:2,f:"2024-10",d:"Octubre de 2024",p:"Lima, Perú",v:"Interbank",t:"Fuga de datos",x:"Acceso a través de un tercero.",s:"Un tercero expuso sin autorización datos de un grupo de clientes, al parecer con credenciales de un servidor administrado por un proveedor.",i:[["Información","datos de clientes expuestos."],["Nota","el banco afirmó que los depósitos estaban seguros."]],r:[2],g:["Perú","Banca"]},
{n:3,f:"2024-05",d:"Mayo de 2024",p:"Madrid; afectó a Chile, España y Uruguay",v:"Santander",t:"Fuga de datos",x:"Compromiso de un proveedor externo.",s:"Se detectó acceso no autorizado a una base de datos alojada en un proveedor.",i:[["Información","datos de clientes y empleados."],["Nota","no incluía datos transaccionales ni credenciales de banca por internet."]],r:[3],g:["Chile","Uruguay","Banca"]},
{n:4,f:"2024-02",d:"Febrero de 2024",p:"Hungría",v:"Pepco Group",t:"Phishing",x:"Con ingeniería social.",s:"El negocio húngaro sufrió un ataque de phishing sofisticado.",i:[["Económico","pérdida de unos 15,5 millones de euros."],["Nota","no se reportó afectación de datos."]],r:[4],g:["Comercio"]},
{n:5,f:"2024-02",d:"Febrero de 2024",p:"Estados Unidos",v:"Change Healthcare (UnitedHealth Group)",t:"Ransomware",x:"Con robo de información; grupo ALPHV/BlackCat.",s:"Su sistema de transacciones sanitarias fue atacado y quedó fuera de servicio.",i:[["Servicios","interrupción de recetas, reclamaciones y pagos a escala nacional."],["Información","datos sensibles expuestos."]],r:[5,6],g:["Salud"]},
{n:6,f:"2024-06",d:"Junio de 2024",p:"Londres, Reino Unido",v:"Synnovis (proveedor del NHS)",t:"Ransomware",x:"Con fuga de datos; grupo Qilin.",s:"El proveedor de análisis clínicos fue atacado y se publicaron datos robados.",i:[["Servicios","más de 11.000 citas y procedimientos retrasados."],["Humano","la demora de un resultado fue uno de varios factores en la muerte de un paciente."]],r:[7,8],g:["Salud"]},
{n:7,f:"2024-06",d:"Junio de 2024",p:"Surabaya, Indonesia",v:"Centro Nacional de Datos Temporal",t:"Ransomware",x:"Variante de LockBit 3.0. El Gobierno no pagó el rescate.",s:"Los atacantes pidieron 8 millones de dólares tras cifrar sistemas del Estado.",i:[["Servicios","más de 230 organismos públicos afectados."],["Información","gran parte de los datos no tenía respaldo."]],r:[9],g:["Institución del Estado"]},
{n:8,f:"2024-06",d:"Junio de 2024",p:"Internacional",v:"Polyfill.io",t:"Malware",x:"Ataque a la cadena de suministro de software.",s:"Tras cambiar de dueño, el dominio sirvió código malicioso en los sitios que lo usaban.",i:[["Servicios","más de 100.000 sitios incorporaban el recurso; no todos sus visitantes fueron afectados."]],r:[10],g:["Tecnología"]},
{n:9,f:"2024-08",d:"Agosto de 2024",p:"Seattle, Estados Unidos",v:"Autoridad Portuaria de Seattle",t:"Ransomware",x:"Con robo de datos; grupo Rhysida.",s:"Afectó el aeropuerto y los puertos. La entidad se negó a pagar el rescate.",i:[["Servicios","equipaje, pantallas, wifi y sitio web, aunque los vuelos operaron."],["Información","datos de empleados y contratistas."]],r:[11],g:["Transporte"]},
{n:10,f:"2024-10",d:"Octubre de 2024",p:"Estados Unidos; alcance internacional",v:"Internet Archive",t:"DDoS",x:"Con fuga de datos en el mismo período; no está demostrado que sea el mismo actor.",s:"El sitio sufrió un ataque de denegación de servicio y una brecha de datos.",i:[["Servicios","interrupciones de Wayback Machine."],["Información","unos 31 millones de registros con contraseñas cifradas."]],r:[12],g:["Tecnología"]}
];

const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const types=[...new Set(C.map(c=>c.t))].sort((a,b)=>C.filter(c=>c.t===b).length-C.filter(c=>c.t===a).length);
const state={type:"Todos",q:"",sort:"recent"};
let visible=[];

/* Estadísticas con conteo animado */
const years=C.map(c=>+c.f.slice(0,4));
const stat=[[C.length,"casos"],[types.length,"tipos de ataque"],[new Set(C.flatMap(c=>c.r)).size,"fuentes"],[Math.min(...years)+"–"+Math.max(...years),"período"]];
$("stats").innerHTML=stat.map(([v,l])=>`<div><dt>${l}</dt><dd data-v="${v}">${v}</dd></div>`).join("");
if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
  document.querySelectorAll(".stats dd").forEach(el=>{
    const end=+el.dataset.v;if(!end)return;const t0=performance.now();
    (function tick(t){const k=Math.min((t-t0)/900,1);el.textContent=Math.round(end*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(tick)})(t0);
  });
}

/* Barra de distribución + chips */
$("dist").innerHTML=types.map(t=>{const n=C.filter(c=>c.t===t).length;return `<button type="button" class="seg" data-t="${t}" style="--c:${COL[t]};--n:${n}" aria-pressed="false" title="${t}: ${n}"><span>${t} ${n}</span></button>`}).join("");
$("chips").innerHTML=["Todos",...types].map(t=>`<button type="button" class="chip" data-t="${t}" aria-pressed="${t==="Todos"}" ${COL[t]?`style="--c:${COL[t]}"`:""}>${COL[t]?"<i></i>":""}${t}</button>`).join("");

/* Tarjetas */
$("grid").innerHTML=C.map(c=>`<article class="card" data-n="${c.n}" style="--c:${COL[c.t]}">
<div class="top"><span class="type">${c.t}</span><span>${esc(c.d)}</span></div>
<h2 class="who"><button type="button" class="open" data-n="${c.n}">${esc(c.v)}</button></h2>
<p class="where">${esc(c.p)}</p>
<p>${esc(c.s)}</p>
<p class="impact">${c.i.map(([a,b])=>`<span class="k">${a}:</span> ${esc(b)}`).join(" ")}</p>
<div class="foot"><span>${c.r.length} ${c.r.length>1?"fuentes":"fuente"}</span><span class="more">Ver detalle</span></div></article>`).join("");

function apply(){
  const s=state.q.trim().toLowerCase();
  const match=c=>(state.type==="Todos"||c.t===state.type)&&(!s||[c.v,c.p,c.t,c.s,c.x,c.d,...c.g,...c.i.flat()].join(" ").toLowerCase().includes(s));
  const sorted=[...C].sort((a,b)=>state.sort==="az"?a.v.localeCompare(b.v,"es"):state.sort==="old"?a.f.localeCompare(b.f):b.f.localeCompare(a.f));
  const grid=$("grid");visible=[];
  sorted.forEach(c=>{const el=grid.querySelector(`[data-n="${c.n}"]`);grid.appendChild(el);const ok=match(c);el.hidden=!ok;if(ok)visible.push(c)});
  $("count").textContent=visible.length===1?"1 caso":visible.length+" casos";
  $("empty").hidden=visible.length>0;
  document.querySelectorAll(".chip").forEach(b=>b.setAttribute("aria-pressed",b.dataset.t===state.type));
  document.querySelectorAll(".seg").forEach(b=>{b.classList.toggle("on",b.dataset.t===state.type);b.classList.toggle("off",state.type!=="Todos"&&b.dataset.t!==state.type);b.setAttribute("aria-pressed",b.dataset.t===state.type)});
}
const pick=t=>{state.type=state.type===t?"Todos":t;apply()};
$("chips").addEventListener("click",e=>{const b=e.target.closest("button");if(b){state.type=b.dataset.t;apply()}});
$("dist").addEventListener("click",e=>{const b=e.target.closest("button");if(b)pick(b.dataset.t)});
$("q").addEventListener("input",e=>{state.q=e.target.value;apply()});
$("sort").addEventListener("change",e=>{state.sort=e.target.value;apply()});
$("reset").addEventListener("click",()=>{state.type="Todos";state.q="";$("q").value="";apply()});

/* Detalle */
const dlg=$("dlg");
function show(n){
  const c=C.find(x=>x.n===n),idx=visible.findIndex(x=>x.n===n);
  $("detail").style.setProperty("--c",COL[c.t]);
  $("detail").innerHTML=`<div class="d-top"><div><span class="type" style="color:${COL[c.t]}">${c.t}</span> <span class="where">${esc(c.d)}. ${esc(c.p)}</span></div><button class="x" type="button" data-close>Cerrar</button></div>
<h2 id="d-title">${esc(c.v)}</h2>
<div class="tags">${c.g.map(g=>`<span class="tag">${esc(g)}</span>`).join("")}</div>
<div class="sec"><h3>Qué pasó</h3><p>${esc(c.s)}</p></div>
<div class="sec"><h3>Cómo ocurrió</h3><p>${esc(c.x)}</p></div>
<div class="sec"><h3>Impacto</h3><ul>${c.i.map(([a,b])=>`<li><span class="k">${a}:</span> ${esc(b)}</li>`).join("")}</ul></div>
<div class="sec"><h3>Fuentes</h3><div class="srcs">${c.r.map(k=>`<a class="src" href="${R[k][3]}" target="_blank" rel="noopener noreferrer"><strong>${esc(R[k][4])}</strong>: ${esc(R[k][2])}<small>${esc(R[k][0])}, ${esc(R[k][1])}</small></a>`).join("")}</div></div>
<div class="nav"><button class="btn ghost" type="button" data-go="-1" ${idx<1?"disabled":""}>Caso anterior</button><button class="btn ghost" type="button" data-go="1" ${idx>=visible.length-1?"disabled":""}>Caso siguiente</button></div>`;
  $("detail").dataset.n=n;
  if(!dlg.open)dlg.showModal();
}
$("grid").addEventListener("click",e=>{const b=e.target.closest(".open");if(b)show(+b.dataset.n)});
dlg.addEventListener("click",e=>{
  if(e.target===dlg||e.target.closest("[data-close]"))return dlg.close();
  const g=e.target.closest("[data-go]");
  if(g){const i=visible.findIndex(x=>x.n===+$("detail").dataset.n)+ +g.dataset.go;if(visible[i])show(visible[i].n)}
});

/* Tema */
const root=document.documentElement;
try{const t=localStorage.getItem("tema");if(t)root.dataset.theme=t}catch(_){}
$("theme").addEventListener("click",()=>{
  const dark=root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme=dark?"light":"dark";
  try{localStorage.setItem("tema",root.dataset.theme)}catch(_){}
});
apply();
