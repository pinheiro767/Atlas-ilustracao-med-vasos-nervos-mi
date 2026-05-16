
const DATA = JSON.parse(document.getElementById("data-json").textContent);
const topics = Object.keys(DATA);
let topic = topics[0];
let files = {};
let notes = JSON.parse(localStorage.getItem("roteiro_notes") || "{}");

const tabsEl = document.getElementById("mainTabs");
const cardsEl = document.getElementById("cards");
const tpl = document.getElementById("cardTemplate");
const search = document.getElementById("search");
const groupFilter = document.getElementById("groupFilter");

topics.forEach(t=>{
  const b=document.createElement("button");
  b.className="tab"+(t===topic?" active":"");
  b.textContent=t;
  b.onclick=()=>{
    topic=t;
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    renderGroups();
    render();
  };
  tabsEl.appendChild(b);
});

function renderGroups(){
  const groups = ["Todos", ...new Set(DATA[topic].map(x=>x.grupo))];
  groupFilter.innerHTML = groups.map(g=>`<option>${g}</option>`).join("");
}

function render(){
  cardsEl.innerHTML="";
  const q=search.value.toLowerCase();
  const g=groupFilter.value || "Todos";
  DATA[topic].filter(item=>{
    const okGroup = g==="Todos" || item.grupo===g;
    const okSearch = !q || (item.titulo+" "+item.grupo).toLowerCase().includes(q);
    return okGroup && okSearch;
  }).forEach((item,idx)=>{
    const key = topic+"|"+item.grupo+"|"+item.titulo;
    const node = tpl.content.cloneNode(true);
    node.querySelector(".group").textContent=item.grupo;
    node.querySelector(".counter").textContent=idx+1;
    node.querySelector("h2").textContent=item.titulo;
    const ta=node.querySelector("textarea");
    ta.value=notes[key] || "";
    ta.oninput=()=>{notes[key]=ta.value;localStorage.setItem("roteiro_notes",JSON.stringify(notes));};
    const preview=node.querySelector(".preview");
    node.querySelector(".photoInput").onchange=e=>addFiles(key,preview,e.target.files);
    node.querySelector(".fileInput").onchange=e=>addFiles(key,preview,e.target.files);
    cardsEl.appendChild(node);
    drawPreview(key,preview);
  });
}

function addFiles(key,preview,list){
  files[key]=files[key] || [];
  [...list].forEach(f=>{
    files[key].push({name:f.name,type:f.type,url:URL.createObjectURL(f)});
  });
  drawPreview(key,preview);
}

function drawPreview(key,preview){
  preview.innerHTML="";
  (files[key]||[]).forEach((f,i)=>{
    const d=document.createElement("div");
    d.className="thumb";
    if(f.type.startsWith("image/")){
      d.innerHTML=`<button class="remove">×</button><img src="${f.url}"><span>${f.name}</span>`;
      d.querySelector("img").onclick=()=>zoom(f.url);
    }else{
      d.innerHTML=`<button class="remove">×</button><div style="height:94px;display:grid;place-items:center;font-size:2rem">📎</div><span>${f.name}</span>`;
    }
    d.querySelector(".remove").onclick=()=>{files[key].splice(i,1);drawPreview(key,preview);};
    preview.appendChild(d);
  });
}

function zoom(url){
  const z=document.createElement("div");
  z.className="zoom";
  z.innerHTML=`<button>×</button><img src="${url}">`;
  z.onclick=e=>{if(e.target===z || e.target.tagName==="BUTTON") z.remove();};
  document.body.appendChild(z);
}

document.getElementById("pdfBtn").onclick=()=>window.print();
search.oninput=render;
groupFilter.onchange=render;

let deferredPrompt;
const installBtn=document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();
  deferredPrompt=e;
  installBtn.hidden=false;
});
installBtn.onclick=async()=>{
  if(!deferredPrompt)return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null;
  installBtn.hidden=true;
};
if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");

renderGroups();
render();
