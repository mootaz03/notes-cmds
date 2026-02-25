const STORAGE_KEY = "notes_travail_js_v1";

function loadNotes() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function $(id) {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Element #${id} introuvable`);
  }
  return el;
}

function renderNotes() {
  const notes = loadNotes();

  const list = $("notesList");
  const search = $("searchInput").value.toLowerCase();
  const fw = $("filterFramework").value.toLowerCase();
  const env = $("filterEnv").value.toLowerCase();
  const type = $("filterType").value;

  list.innerHTML = "";

  notes
    .filter((n) =>
      (!search ||
        n.content.toLowerCase().includes(search) ||
        (n.framework || "").toLowerCase().includes(search) ||
        (n.env || "").toLowerCase().includes(search)) &&
      (!fw || (n.framework || "").toLowerCase().includes(fw)) &&
      (!env || (n.env || "").toLowerCase().includes(env)) &&
      (!type || n.type === type)
    )
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .forEach((n) => {
      const div = document.createElement("div");
      div.className = "note-item";
      const typeClass = n.type === "cmd" ? "type-cmd" : "type-note";

      div.innerHTML = `
        <div>
          <span class="tag ${typeClass}">${n.type === "cmd" ? "CMD" : "NOTE"}</span>
          <span class="tag">${n.date || ""}</span>
          ${n.framework ? `<span class="tag">${n.framework}</span>` : ""}
          ${n.env ? `<span class="tag">${n.env}</span>` : ""}
        </div>
        <pre>${n.content}</pre>
      `;

      list.appendChild(div);
    });
}

function init() {
  const today = new Date().toISOString().slice(0, 10);
  $("dateInput").value = today;

  // Enregistrer
  $("saveBtn").onclick = () => {
    const date = $("dateInput").value;
    const type = $("typeInput").value === "cmd" ? "cmd" : "note";
    const framework = $("frameworkInput").value.trim();
    const env = $("envInput").value.trim();
    const content = $("contentInput").value.trim();

    if (!content) {
      alert("Le contenu est vide.");
      return;
    }

    const notes = loadNotes();
    const newNote = {
      id: Date.now(),
      date: date || today,
      type,
      framework,
      env,
      content,
    };
    notes.push(newNote);
    saveNotes(notes);

    $("contentInput").value = "";
    renderNotes();
  };

  // Filtres
  ["searchInput", "filterFramework", "filterEnv", "filterType"].forEach((id) => {
    const el = $(id);
    el.addEventListener("input", renderNotes);
  });

  // Export JSON
  $("exportBtn").onclick = () => {
    const notes = loadNotes();
    const blob = new Blob([JSON.stringify(notes, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "notes_travail.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON
  const importFileInput = $("importFile");
  $("importBtn").onclick = () => importFileInput.click();

  importFileInput.onchange = (e) => {
    const target = e.target;
    const file = target.files && target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = ev.target && ev.target.result;
        const data = JSON.parse(text);
        if (!Array.isArray(data)) throw new Error("format");
        saveNotes(data);
        renderNotes();
      } catch (err) {
        alert("Fichier JSON invalide.");
      }
    };
    reader.readAsText(file);
  };

  renderNotes();
}

window.addEventListener("DOMContentLoaded", init);
