interface Note {
  id: number;
  date: string;
  type: "note" | "cmd";
  framework: string;
  env: string;
  content: string;
}

const STORAGE_KEY = "notes_travail_ts_v1";

function loadNotes(): Note[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Note[];
  } catch {
    return [];
  }
}

function saveNotes(notes: Note[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function $(id: string): HTMLElement {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Element #${id} introuvable`);
  }
  return el;
}

function renderNotes(): void {
  const notes = loadNotes();

  const list = $("notesList") as HTMLDivElement;
  const search = ( $("searchInput") as HTMLInputElement ).value.toLowerCase();
  const fw = ( $("filterFramework") as HTMLInputElement ).value.toLowerCase();
  const env = ( $("filterEnv") as HTMLInputElement ).value.toLowerCase();
  const type = ( $("filterType") as HTMLSelectElement ).value;

  list.innerHTML = "";

  notes
    .filter((n) =>
      (!search || n.content.toLowerCase().includes(search) ||
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

function init(): void {
  const today = new Date().toISOString().slice(0, 10);
  ( $("dateInput") as HTMLInputElement ).value = today;

  // Enregistrer
  ($("saveBtn") as HTMLButtonElement).onclick = () => {
    const date = ( $("dateInput") as HTMLInputElement ).value;
    const type = ( $("typeInput") as HTMLSelectElement ).value as "note" | "cmd";
    const framework = ( $("frameworkInput") as HTMLInputElement ).value.trim();
    const env = ( $("envInput") as HTMLInputElement ).value.trim();
    const content = ( $("contentInput") as HTMLTextAreaElement ).value.trim();

    if (!content) {
      alert("Le contenu est vide.");
      return;
    }

    const notes = loadNotes();
    const newNote: Note = {
      id: Date.now(),
      date: date || today,
      type,
      framework,
      env,
      content,
    };
    notes.push(newNote);
    saveNotes(notes);

    ( $("contentInput") as HTMLTextAreaElement ).value = "";
    renderNotes();
  };

  // Filtres
  ["searchInput", "filterFramework", "filterEnv", "filterType"].forEach((id) => {
    const el = $(id);
    el.addEventListener("input", renderNotes);
  });

  // Export JSON
  ($("exportBtn") as HTMLButtonElement).onclick = () => {
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
  const importFileInput = $("importFile") as HTMLInputElement;
  ($("importBtn") as HTMLButtonElement).onclick = () => importFileInput.click();

  importFileInput.onchange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = ev.target?.result as string;
        const data = JSON.parse(text) as Note[];
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
