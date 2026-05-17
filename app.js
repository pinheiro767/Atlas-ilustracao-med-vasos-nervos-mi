
const DATA = JSON.parse(document.getElementById("data").textContent);
let media = {};
let notes = JSON.parse(localStorage.getItem("roteiro_exato_notes") || "{}");
const cards = document.getElementById("cards");
const tpl = document.getElementById("tpl");
const search = document.getElementById("search");

function render(){
  cards.innerHTML="";
  const q=search.value.toLowerCase();
  DATA.filter(i=>!q || (i.nome+" "+i.onde+" "+i.localizar).toLowerCase().includes(q)).forEach(it=>{
    const key=it.numero+"|"+it.nome;
    const n=tpl.content.cloneNode(true);
    n.querySelector(".num").textContent=it.numero;
    n.querySelector("h2").textContent=it.nome;
    n.querySelector(".onde").textContent=it.onde;
    n.querySelector(".loc").textContent=it.localizar;
    const info=n.querySelector(".info");
    n.querySelector(".toggle").onclick=()=>{
      info.classList.toggle("open");
      n.querySelector(".toggle").textContent=info.classList.contains("open")?"🙈 Ocultar informações":"👁️ Mostrar informações";
    };
    const ta=n.querySelector("textarea");
    ta.value=notes[key]||"";
    ta.oninput=()=>{notes[key]=ta.value;localStorage.setItem("roteiro_exato_notes",JSON.stringify(notes));};
    const prev=n.querySelector(".preview");
    n.querySelector(".photo").onchange=e=>addFiles(key,prev,e.target.files);
    n.querySelector(".file").onchange=e=>addFiles(key,prev,e.target.files);
    cards.appendChild(n);
    drawPreview(key,prev);
  });
}
function addFiles(key,prev,list){
  media[key]=media[key]||[];
  [...list].forEach(f=>media[key].push({name:f.name,type:f.type,url:URL.createObjectURL(f)}));
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
  document.getElementById("themeBtn").textContent=document.body.classList.contains("light")?"☀️ Claro":"🌙 Escuro";
};
search.oninput=render;

let deferredPrompt;
const installBtn=document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;installBtn.hidden=false;});
installBtn.onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true;};
if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");
render();
