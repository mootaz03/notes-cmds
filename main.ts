// ========= utils =========
function $(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error("Element #" + id + " introuvable");
  return el;
}

// ========= tabs =========
(function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.getAttribute("data-target");
      document.querySelectorAll(".section").forEach((section) => {
        if (section.id === target) section.classList.add("active");
        else section.classList.remove("active");
      });
    });
  });
})();

// ========= NOTES (localStorage) =========
const NOTES_STORAGE_KEY = "notes_travail_modern_v1";

function loadNotes() {
  const raw = localStorage.getItem(NOTES_STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

function renderNotes() {
  const notes = loadNotes();
  const list = $("notesList");
  const search = $("searchInput").value.toLowerCase();
  const fw = $("filterFramework").value.toLowerCase();
  const env = $("filterEnv").value.toLowerCase();
  const type = $("filterType").value;

  list.innerHTML = "";

  const filtered = notes
    .filter((n) =>
      (!search ||
        (n.content || "").toLowerCase().includes(search) ||
        (n.framework || "").toLowerCase().includes(search) ||
        (n.env || "").toLowerCase().includes(search)) &&
      (!fw || (n.framework || "").toLowerCase().includes(fw)) &&
      (!env || (n.env || "").toLowerCase().includes(env)) &&
      (!type || n.type === type)
    )
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">Aucune note pour ces filtres.</div>';
  } else {
    filtered.forEach((n) => {
      const item = document.createElement("div");
      item.className = "note-item";

      const meta = document.createElement("div");
      meta.className = "note-meta";

      const tagType = document.createElement("span");
      tagType.className =
        "tag " + (n.type === "cmd" ? "tag-type-cmd" : "tag-type-note");
      tagType.textContent = n.type === "cmd" ? "CMD" : "NOTE";
      meta.appendChild(tagType);

      const tagDate = document.createElement("span");
      tagDate.className = "tag";
      tagDate.textContent = n.date || "";
      meta.appendChild(tagDate);

      if (n.framework) {
        const tagFw = document.createElement("span");
        tagFw.className = "tag";
        tagFw.textContent = n.framework;
        meta.appendChild(tagFw);
      }
      if (n.env) {
        const tagEnv = document.createElement("span");
        tagEnv.className = "tag";
        tagEnv.textContent = n.env;
        meta.appendChild(tagEnv);
      }

      const content = document.createElement("div");
      content.className = "note-content";
      content.textContent = n.content || "";

      item.appendChild(meta);
      item.appendChild(content);
      list.appendChild(item);
    });
  }

  const countLabel =
    filtered.length === notes.length
      ? filtered.length + " note(s)"
      : filtered.length + " / " + notes.length + " note(s) filtrées";
  $("notesCount").textContent = countLabel;
}

function setupNotes() {
  const today = new Date().toISOString().slice(0, 10);
  $("dateInput").value = today;

  $("saveBtn").onclick = () => {
    const date = $("dateInput").value || today;
    const type = $("typeInput").value === "cmd" ? "cmd" : "note";
    const framework = $("frameworkInput").value.trim();
    const env = $("envInput").value.trim();
    const content = $("contentInput").value.trim();

    if (!content) {
      alert("Le contenu est vide.");
      return;
    }

    const notes = loadNotes();
    notes.push({
      id: Date.now(),
      date,
      type,
      framework,
      env,
      content
    });
    saveNotes(notes);

    $("contentInput").value = "";
    renderNotes();
  };

  ["searchInput", "filterFramework", "filterEnv", "filterType"].forEach((id) => {
    $(id).addEventListener("input", renderNotes);
  });

  $("exportBtn").onclick = () => {
    const notes = loadNotes();
    const blob = new Blob([JSON.stringify(notes, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "notes_travail.json";
    a.click();
    URL.revokeObjectURL(url);
  };

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

// ========= COMMANDES (commands.json) =========
let COMMANDS = [];

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Impossible de copier", err);
  }
  document.body.removeChild(textarea);
}

function populateCommandFilters() {
  const frameworkSelect = $("cmdFramework");
  const envSelect = $("cmdEnv");
  const frameworks = new Set();
  const envs = new Set();

  COMMANDS.forEach((c) => {
    if (c.framework) frameworks.add(c.framework);
    if (c.env) envs.add(c.env);
  });

  frameworks.forEach((fw) => {
    const opt = document.createElement("option");
    opt.value = fw;
    opt.textContent = fw;
    frameworkSelect.appendChild(opt);
  });

  envs.forEach((env) => {
    const opt = document.createElement("option");
    opt.value = env;
    opt.textContent = env;
    envSelect.appendChild(opt);
  });
}

function renderCommands() {
  const list = $("commandsList");
  const search = $("cmdSearch").value.toLowerCase();
  const fw = $("cmdFramework").value;
  const env = $("cmdEnv").value;

  list.innerHTML = "";

  const filtered = COMMANDS.filter((c) => {
    const matchesSearch =
      !search ||
      (c.label || "").toLowerCase().includes(search) ||
      (c.command || "").toLowerCase().includes(search) ||
      (c.description || "").toLowerCase().includes(search);
    const matchesFw = !fw || c.framework === fw;
    const matchesEnv = !env || c.env === env;
    return matchesSearch && matchesFw && matchesEnv;
  });

  if (!filtered.length) {
    list.innerHTML =
      '<div class="empty-state">Aucune commande pour ces filtres. Mets à jour <code>commands.json</code> si besoin.</div>';
  } else {
    filtered.forEach((c) => {
      const item = document.createElement("div");
      item.className = "command-item";

      const meta = document.createElement("div");
      meta.className = "command-meta";

      const tagFw = document.createElement("span");
      tagFw.className = "tag";
      tagFw.textContent = c.framework || "N/A";
      meta.appendChild(tagFw);

      const tagEnv = document.createElement("span");
      tagEnv.className = "tag";
      tagEnv.textContent = c.env || "Env";
      meta.appendChild(tagEnv);

      if (c.category) {
        const tagCat = document.createElement("span");
        tagCat.className = "tag";
        tagCat.textContent = c.category;
        meta.appendChild(tagCat);
      }

      const label = document.createElement("div");
      label.style.fontSize = "0.82rem";
      label.style.fontWeight = "500";
      label.style.marginBottom = "4px";
      label.textContent = c.label || c.id || "Commande";

      const commandBlock = document.createElement("div");
      commandBlock.className = "command-command";

      const cmdText = document.createElement("div");
      cmdText.className = "command-text";
      cmdText.textContent = c.command || "";
      commandBlock.appendChild(cmdText);

      const btnCopy = document.createElement("button");
      btnCopy.className = "copy-btn";
      btnCopy.innerHTML = "<span>📋</span><span>Copier</span>";
      btnCopy.onclick = () => {
        copyToClipboard(c.command || "");
        btnCopy.innerHTML = "<span>✅</span><span>Copié</span>";
        setTimeout(() => {
          btnCopy.innerHTML = "<span>📋</span><span>Copier</span>";
        }, 1200);
      };
      commandBlock.appendChild(btnCopy);

      const desc = document.createElement("div");
      desc.className = "command-description";
      desc.textContent = c.description || "";

      item.appendChild(meta);
      item.appendChild(label);
      item.appendChild(commandBlock);
      item.appendChild(desc);
      list.appendChild(item);
    });
  }

  $("commandsCount").textContent =
    filtered.length + " commande(s) affichée(s)";
}

function setupCommands() {
  // commands.json servi depuis le même repo GitHub Pages
  fetch("commands.json", { cache: "no-store" })
    .then((res) => {
      if (!res.ok) throw new Error("Impossible de charger commands.json");
      return res.json();
    })
    .then((data) => {
      if (!Array.isArray(data)) throw new Error("Format commands.json invalide");
      COMMANDS = data;
      populateCommandFilters();
      renderCommands();
    })
    .catch((err) => {
      console.error(err);
      $("commandsList").innerHTML =
        '<div class="empty-state">Erreur lors du chargement de <code>commands.json</code>. Vérifie qu\'il existe dans le repo.</div>';
      $("commandsCount").textContent = "0 commande";
    });

  ["cmdSearch", "cmdFramework", "cmdEnv"].forEach((id) => {
    $(id).addEventListener("input", renderCommands);
  });
}

// ========= init global =========
window.addEventListener("DOMContentLoaded", () => {
  setupNotes();
  setupCommands();
});
