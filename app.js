const STRUCTURES = [
  {
    "id": 1,
    "region": "Pelve e Coxa",
    "name": "Artéria ilíaca externa",
    "where": "Na pelve, corre sobre o músculo psoas maior e dirige-se ao ligamento inguinal.",
    "relations": "Passe profundamente ao ligamento inguinal; ao cruzá-lo, continua como artéria femoral.",
    "tip": "Referência prática: procure o ligamento inguinal."
  },
  {
    "id": 2,
    "region": "Pelve e Coxa",
    "name": "Artéria femoral",
    "where": "Logo abaixo do ligamento inguinal, dentro do trígono femoral.",
    "relations": "Veia femoral medial; nervo femoral lateral.",
    "tip": "Pulso femoral: metade da linha entre EIAS e sínfise púbica."
  },
  {
    "id": 3,
    "region": "Pelve e Coxa",
    "name": "Circunflexa ilíaca superficial",
    "where": "Ramo da femoral logo abaixo do ligamento inguinal.",
    "relations": "Corre lateralmente em direção à EIAS.",
    "tip": "Fica superficial na região inguinal lateral."
  },
  {
    "id": 4,
    "region": "Pelve e Coxa",
    "name": "Epigástrica superficial",
    "where": "Pequeno ramo da femoral.",
    "relations": "Sobe anteriormente para a parede abdominal.",
    "tip": "Guia: direção ao umbigo."
  },
  {
    "id": 5,
    "region": "Pelve e Coxa",
    "name": "Pudenda externa superficial",
    "where": "Sai medialmente da femoral.",
    "relations": "Vai para genitais externos.",
    "tip": "Cruza superficialmente a região medial da coxa proximal."
  },
  {
    "id": 6,
    "region": "Pelve e Coxa",
    "name": "Pudenda externa profunda",
    "where": "Ramo mais profundo que a pudenda externa superficial.",
    "relations": "Passa entre músculos mediais da coxa.",
    "tip": "Procure em plano profundo da região femoral medial."
  },
  {
    "id": 7,
    "region": "Pelve e Coxa",
    "name": "Femoral profunda",
    "where": "Grande ramo posterior/lateral da femoral.",
    "relations": "Surge cerca de 3–5 cm abaixo do ligamento inguinal e mergulha atrás do adutor longo.",
    "tip": "Principal artéria profunda da coxa."
  },
  {
    "id": 8,
    "region": "Pelve e Coxa",
    "name": "Circunflexa femoral medial",
    "where": "Ramo da femoral profunda.",
    "relations": "Segue posteriormente para o colo do fêmur, passando entre iliopsoas e pectíneo.",
    "tip": "Muito importante para irrigação da cabeça do fêmur."
  },
  {
    "id": 9,
    "region": "Pelve e Coxa",
    "name": "Circunflexa femoral lateral",
    "where": "Sai lateralmente da femoral profunda.",
    "relations": "Passa profundamente ao sartório e ao reto femoral.",
    "tip": "Irriga região lateral/anterior proximal da coxa."
  },
  {
    "id": 10,
    "region": "Pelve e Coxa",
    "name": "Ramo descendente da circunflexa femoral lateral",
    "where": "Desce na face lateral/anterior da coxa.",
    "relations": "Acompanha o músculo vasto lateral.",
    "tip": "Participa de anastomoses ao redor do joelho."
  },
  {
    "id": 11,
    "region": "Joelho",
    "name": "Artéria descendente do joelho",
    "where": "Último ramo importante da femoral.",
    "relations": "Surge antes do hiato do adutor e desce medialmente ao joelho.",
    "tip": "Integra a rede periarticular do joelho."
  },
  {
    "id": 12,
    "region": "Joelho",
    "name": "Artéria obturatória",
    "where": "Ramo da ilíaca interna.",
    "relations": "Passa pelo canal obturatório, perto do obturador externo e forame obturado.",
    "tip": "Importante na pelve e região medial da coxa."
  },
  {
    "id": 13,
    "region": "Joelho",
    "name": "Glútea superior",
    "where": "Sai da pelve acima do músculo piriforme.",
    "relations": "Acompanha o nervo glúteo superior e a região do glúteo médio.",
    "tip": "Referência: acima do piriforme."
  },
  {
    "id": 14,
    "region": "Joelho",
    "name": "Glútea inferior",
    "where": "Sai abaixo do músculo piriforme.",
    "relations": "Acompanha o nervo glúteo inferior na região do glúteo máximo.",
    "tip": "Referência: abaixo do piriforme."
  },
  {
    "id": 15,
    "region": "Joelho",
    "name": "Artéria poplítea",
    "where": "Continuação da femoral na fossa poplítea.",
    "relations": "Relação superficial para profunda: nervo tibial, veia poplítea, artéria poplítea.",
    "tip": "Mnemônico: NVA = nervo, veia, artéria."
  },
  {
    "id": 16,
    "region": "Perna",
    "name": "Tibial anterior",
    "where": "Perfura a membrana interóssea e vai ao compartimento anterior da perna.",
    "relations": "Fica entre tibial anterior e extensor longo dos dedos.",
    "tip": "Continua como artéria dorsal do pé."
  },
  {
    "id": 17,
    "region": "Perna",
    "name": "Tronco tíbiofibular",
    "where": "Pequeno tronco após bifurcação da poplítea.",
    "relations": "Logo após a saída da tibial anterior.",
    "tip": "Divide-se em tibial posterior e fibular."
  },
  {
    "id": 18,
    "region": "Perna",
    "name": "Tibial posterior",
    "where": "Compartimento posterior profundo da perna.",
    "relations": "Passa atrás do maléolo medial.",
    "tip": "Pulso tibial posterior: atrás do maléolo medial."
  },
  {
    "id": 19,
    "region": "Perna",
    "name": "Fibular",
    "where": "Ramo lateral da tibial posterior.",
    "relations": "Corre próximo à fíbula.",
    "tip": "Irriga compartimento lateral/posterior da perna."
  },
  {
    "id": 20,
    "region": "Joelho",
    "name": "Superior lateral do joelho",
    "where": "Região acima e lateral ao joelho.",
    "relations": "Contorna o côndilo femoral lateral.",
    "tip": "Artéria genicular da rede do joelho."
  },
  {
    "id": 21,
    "region": "Joelho",
    "name": "Superior medial do joelho",
    "where": "Região acima e medial ao joelho.",
    "relations": "Contorna o côndilo femoral medial.",
    "tip": "Artéria genicular da rede do joelho."
  },
  {
    "id": 22,
    "region": "Joelho",
    "name": "Inferior lateral do joelho",
    "where": "Região abaixo e lateral ao joelho.",
    "relations": "Contorna a tíbia proximal lateral.",
    "tip": "Artéria genicular da rede do joelho."
  },
  {
    "id": 23,
    "region": "Joelho",
    "name": "Inferior medial do joelho",
    "where": "Região abaixo e medial ao joelho.",
    "relations": "Contorna a tíbia proximal medial.",
    "tip": "Artéria genicular da rede do joelho."
  },
  {
    "id": 24,
    "region": "Joelho",
    "name": "Média do joelho",
    "where": "Ramo profundo da poplítea.",
    "relations": "Perfura profundamente a cápsula articular.",
    "tip": "Vai diretamente ao interior do joelho."
  },
  {
    "id": 25,
    "region": "Joelho",
    "name": "Recorrente tibial anterior",
    "where": "Sobe a partir da tibial anterior.",
    "relations": "Retorna para a rede arterial do joelho.",
    "tip": "Conecta perna anterior com anastomoses do joelho."
  },
  {
    "id": 26,
    "region": "Dorso do Pé",
    "name": "Tarsal lateral",
    "where": "Face lateral do dorso do pé.",
    "relations": "Ramo da dorsal do pé em direção lateral.",
    "tip": "Auxilia a irrigação do dorso lateral."
  },
  {
    "id": 27,
    "region": "Dorso do Pé",
    "name": "Dorsal do pé",
    "where": "Continuação da tibial anterior no dorso do pé.",
    "relations": "Entre tendão do hálux e tendão do extensor longo dos dedos.",
    "tip": "Pulso dorsal do pé: muito cobrado em clínica."
  },
  {
    "id": 28,
    "region": "Dorso do Pé",
    "name": "Arqueada",
    "where": "Corre transversalmente no dorso do pé.",
    "relations": "Na base dos metatarsos.",
    "tip": "Origina artérias metatarsais dorsais."
  },
  {
    "id": 29,
    "region": "Dorso do Pé",
    "name": "Plantar profunda",
    "where": "Ramo profundo que segue para a planta do pé.",
    "relations": "Comunica-se com o arco plantar profundo.",
    "tip": "Liga dorso e planta do pé."
  },
  {
    "id": 30,
    "region": "Dorso do Pé",
    "name": "1ª metatarsal dorsal",
    "where": "Primeiro espaço interdigital.",
    "relations": "Relacionada ao hálux e segundo dedo.",
    "tip": "Importante na irrigação dorsal do primeiro espaço."
  },
  {
    "id": 31,
    "region": "Dorso do Pé",
    "name": "Metatarsais dorsais",
    "where": "Entre os metatarsos dorsais.",
    "relations": "Derivam da artéria arqueada.",
    "tip": "Seguem para os espaços intermetatarsais."
  },
  {
    "id": 32,
    "region": "Dorso do Pé",
    "name": "Digitais dorsais comuns",
    "where": "Antes da divisão para os dedos.",
    "relations": "Ramos distais das metatarsais dorsais.",
    "tip": "Precedem as digitais próprias."
  },
  {
    "id": 33,
    "region": "Dorso do Pé",
    "name": "Digitais dorsais próprias",
    "where": "Nas laterais dorsais dos dedos.",
    "relations": "Ramos terminais digitais.",
    "tip": "Irrigação final dos dedos no dorso."
  },
  {
    "id": 34,
    "region": "Planta do Pé",
    "name": "Plantar medial",
    "where": "Face medial da planta do pé.",
    "relations": "Menor ramo terminal da tibial posterior.",
    "tip": "Acompanha a região medial plantar."
  },
  {
    "id": 35,
    "region": "Planta do Pé",
    "name": "Plantar lateral",
    "where": "Segue lateralmente pela planta.",
    "relations": "Maior ramo terminal da tibial posterior.",
    "tip": "Contribui principalmente para o arco plantar profundo."
  },
  {
    "id": 36,
    "region": "Planta do Pé",
    "name": "Arco plantar profundo",
    "where": "Profundo aos tendões flexores.",
    "relations": "Formado principalmente pela plantar lateral com ramo plantar profundo da dorsal do pé.",
    "tip": "Base arterial profunda da planta."
  },
  {
    "id": 37,
    "region": "Planta do Pé",
    "name": "Metatarsais plantares",
    "where": "Entre os metatarsos plantares.",
    "relations": "Originadas do arco plantar profundo.",
    "tip": "Seguem distalmente na planta."
  },
  {
    "id": 38,
    "region": "Planta do Pé",
    "name": "Digitais plantares comuns",
    "where": "Antes da divisão digital.",
    "relations": "Ramos das metatarsais plantares.",
    "tip": "Distribuem-se para os espaços digitais."
  },
  {
    "id": 39,
    "region": "Planta do Pé",
    "name": "Digitais plantares próprias",
    "where": "Nas margens plantares dos dedos.",
    "relations": "Ramos terminais digitais.",
    "tip": "Irrigação final dos dedos na planta."
  }
];

let currentRegion = "Todas";
const cardsEl = document.getElementById("cards");
const template = document.getElementById("cardTemplate");
const searchInput = document.getElementById("searchInput");
const pdfBtn = document.getElementById("pdfBtn");
let mediaStore = JSON.parse(localStorage.getItem("arterias_media") || "{}");
let notesStore = JSON.parse(localStorage.getItem("arterias_notes") || "{}");

function saveStores(){
  localStorage.setItem("arterias_media", JSON.stringify(mediaStore));
  localStorage.setItem("arterias_notes", JSON.stringify(notesStore));
}

function render(){
  cardsEl.innerHTML = "";
  const q = searchInput.value.toLowerCase().trim();
  STRUCTURES.filter(s => {
    const byRegion = currentRegion === "Todas" || s.region === currentRegion;
    const txt = `${s.name} ${s.region} ${s.where} ${s.relations} ${s.tip}`.toLowerCase();
    return byRegion && (!q || txt.includes(q));
  }).forEach(s => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".card");
    card.dataset.id = s.id;
    node.querySelector(".number").textContent = s.id;
    node.querySelector(".region").textContent = s.region;
    node.querySelector("h3").textContent = s.name;
    node.querySelector(".info").innerHTML = `
      <p><b>📍 Onde encontrar:</b> ${s.where}</p>
      <p><b>🔎 Relações/guia:</b> ${s.relations}</p>
      <p><b>💡 Dica clínica ou prática:</b> ${s.tip}</p>
    `;
    const notes = node.querySelector(".notes");
    notes.value = notesStore[s.id] || "";
    notes.addEventListener("input", e => {
      notesStore[s.id] = e.target.value;
      saveStores();
    });
    node.querySelector(".cameraInput").addEventListener("change", e => addFiles(s.id, e.target.files));
    node.querySelector(".fileInput").addEventListener("change", e => addFiles(s.id, e.target.files));
    cardsEl.appendChild(node);
    renderPreview(s.id);
  });
}

function addFiles(id, files){
  [...files].forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      mediaStore[id] = mediaStore[id] || [];
      mediaStore[id].push({name:file.name, type:file.type, data:reader.result, date:new Date().toLocaleString("pt-BR")});
      saveStores();
      renderPreview(id);
    };
    reader.readAsDataURL(file);
  });
}

function renderPreview(id){
  const card = document.querySelector(`.card[data-id="${id}"]`);
  if(!card) return;
  const preview = card.querySelector(".preview");
  preview.innerHTML = "";
  (mediaStore[id] || []).forEach((m, idx) => {
    const div = document.createElement("div");
    div.className = "thumb";
    if(m.type && m.type.startsWith("image/")) {
      div.innerHTML = `<button class="remove">×</button><img src="${m.data}" alt=""><span>${m.name}</span>`;
    } else {
      div.innerHTML = `<button class="remove">×</button><div style="height:92px;display:grid;place-items:center;font-size:2rem">📎</div><span>${m.name}</span>`;
    }
    div.querySelector(".remove").onclick = () => {
      mediaStore[id].splice(idx,1);
      saveStores();
      renderPreview(id);
    };
    preview.appendChild(div);
  });
}

document.querySelectorAll(".tab").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentRegion = btn.dataset.region;
    render();
  };
});
searchInput.addEventListener("input", render);

async function imageToDataUrlForPdf(src){
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const maxW = 1000;
      const scale = Math.min(1, maxW/img.width);
      const canvas = document.createElement("canvas");
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      resolve(canvas.toDataURL("image/jpeg", .82));
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

pdfBtn.onclick = async () => {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p","mm","a4");
  const pageW = 210, pageH = 297, margin = 12;
  let y = 16;

  function addText(text, size=11, bold=false){
    pdf.setFont("helvetica", bold ? "bold" : "normal");
    pdf.setFontSize(size);
    const lines = pdf.splitTextToSize(text, pageW - margin*2);
    lines.forEach(line => {
      if(y > pageH - 18) { pdf.addPage(); y = 16; }
      pdf.text(line, margin, y);
      y += size * .45 + 2;
    });
  }

  addText("Atlas Prático — Artérias do Membro Inferior", 18, true);
  addText("PDF gerado com fotos, anexos e observações registrados no PWA.", 10, false);
  y += 4;

  for(const s of STRUCTURES){
    if(y > pageH - 45) { pdf.addPage(); y = 16; }
    addText(`${s.id}. ${s.name} — ${s.region}`, 14, true);
    addText(`Onde encontrar: ${s.where}`);
    addText(`Relações/guia: ${s.relations}`);
    addText(`Dica: ${s.tip}`);
    if(notesStore[s.id]) addText(`Observações: ${notesStore[s.id]}`);
    const medias = mediaStore[s.id] || [];
    for(const m of medias){
      if(m.type && m.type.startsWith("image/")) {
        const imgData = await imageToDataUrlForPdf(m.data);
        if(imgData){
          if(y > pageH - 75) { pdf.addPage(); y = 16; }
          pdf.addImage(imgData, "JPEG", margin, y, 82, 62);
          pdf.setFontSize(8); pdf.text(m.name.slice(0,60), margin, y+66);
          y += 72;
        }
      } else {
        addText(`Anexo registrado: ${m.name}`);
      }
    }
    y += 4;
  }
  pdf.save("atlas-arterias-membro-inferior.pdf");
};

let deferredPrompt;
const installBtn = document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;
});
installBtn.onclick = async () => {
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.hidden = true;
};

if("serviceWorker" in navigator){
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

render();
