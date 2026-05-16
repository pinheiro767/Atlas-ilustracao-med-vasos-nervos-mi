
const DATA = JSON.parse(document.getElementById("data").textContent);
const cats = ["Regiões","Artérias","Veias","Nervos","Linfonodos"];
let cat = "Regiões";
let media = {};
let notes = JSON.parse(localStorage.getItem("atlas_notes") || "{}");

const tabs = document.getElementById("tabs");
const cards = document.getElementById("cards");
const tpl = document.getElementById("tpl");
const search = document.getElementById("search");
const groupFilter = document.getElementById("groupFilter");

cats.forEach(c=>{
  const b=document.createElement("button");
  b.className="tab"+(c===cat?" active":"");
  b.textContent=c;
  b.onclick=()=>{
    cat=c;
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    renderGroups();
    render();
  };
  tabs.appendChild(b);
});

function renderGroups(){
  const groups = ["Todos", ...new Set(DATA.filter(i=>i.cat===cat).map(i=>i.grupo))];
  groupFilter.innerHTML = groups.map(g=>`<option>${g}</option>`).join("");
}

function render(){
  cards.innerHTML="";
  const q=search.value.toLowerCase();
  const g=groupFilter.value || "Todos";
  const arr=DATA.filter(i=>{
    return i.cat===cat && (g==="Todos" || i.grupo===g) &&
      (!q || (i.nome+" "+i.grupo+" "+i.localizar).toLowerCase().includes(q));
  });
  arr.forEach((it,idx)=>{
    const key=it.cat+"|"+it.grupo+"|"+it.nome;
    const n=tpl.content.cloneNode(true);
    n.querySelector(".num").textContent=idx+1;
    n.querySelector(".grupo").textContent=it.grupo;
    n.querySelector("h2").textContent=it.nome;
    n.querySelector(".loc").textContent=it.localizar;
    n.querySelector(".inf").textContent=it.info;
    const hidden=n.querySelector(".hiddenInfo");
    n.querySelector(".toggle").onclick=()=>{
      hidden.classList.toggle("open");
      n.querySelector(".toggle").textContent = hidden.classList.contains("open") ? "🙈 Ocultar informações" : "👁️ Mostrar informações";
    };
    const ta=n.querySelector("textarea");
    ta.value=notes[key] || "";
    ta.oninput=()=>{notes[key]=ta.value;localStorage.setItem("atlas_notes",JSON.stringify(notes));};
    const prev=n.querySelector(".preview");
    n.querySelector(".photo").onchange=e=>addFiles(key,prev,e.target.files);
    n.querySelector(".file").onchange=e=>addFiles(key,prev,e.target.files);
    cards.appendChild(n);
    drawPreview(key,prev);
  });
}

function addFiles(key, prev, list){
  media[key]=media[key] || [];
  [...list].forEach(f=>{
    media[key].push({name:f.name,type:f.type,url:URL.createObjectURL(f)});
  });
  drawPreview(key,prev);
}
function drawPreview(key,prev){
  prev.innerHTML="";
  (media[key]||[]).forEach((f,i)=>{
    const d=document.createElement("div");
    d.className="thumb";
    if(f.type.startsWith("image/")){
      d.innerHTML=`<button class="remove">×</button><img src="${f.url}"><span>${f.name}</span>`;
      d.querySelector("img").onclick=()=>zoom(f.url);
    }else{
      d.innerHTML=`<button class="remove">×</button><div style="height:94px;display:grid;place-items:center;font-size:2rem">📎</div><span>${f.name}</span>`;
    }
    d.querySelector(".remove").onclick=()=>{media[key].splice(i,1);drawPreview(key,prev);};
    prev.appendChild(d);
  });
}
function zoom(url){
  const z=document.createElement("div");
  z.className="zoom";
  z.innerHTML=`<button>×</button><img src="${url}">`;
  z.onclick=e=>{if(e.target===z || e.target.tagName==="BUTTON") z.remove();};
  document.body.appendChild(z);
}

document.getElementById("themeBtn").onclick=()=>{
  document.body.classList.toggle("light");
  document.getElementById("themeBtn").textContent=document.body.classList.contains("light") ? "☀️ Modo claro" : "🌙 Modo escuro";
};
search.oninput=render;
groupFilter.onchange=render;

let deferredPrompt;
const installBtn=document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();deferredPrompt=e;installBtn.hidden=false;
});
installBtn.onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true;};
if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");

renderGroups();
render();
