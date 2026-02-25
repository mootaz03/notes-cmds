// main.js (ES module)

// === Imports des domaines (assure-toi que ces fichiers existent dans commands/) ===
import { javaSpringCommands } from "./commands/java_spring.js";
import { angularCommands } from "./commands/angular.js";
import { dockerCommands } from "./commands/docker.js";
import { linuxCommands } from "./commands/linux.js";
import { windowsCommands } from "./commands/windows.js";
import { gitCommands } from "./commands/git.js";
import { sqlCommands } from "./commands/sql.js";
import { sqlAdvancedCommands } from "./commands/sql_advanced.js";
import { sqlPerfCommands } from "./commands/sql_perf_oracle_mysql.js";
import { nosqlCommands } from "./commands/nosql.js";
import { mongoAdvancedCommands } from "./commands/mongo_advanced.js";
import { cloudKubeCommands } from "./commands/cloud_kubernetes.js";
import { shellCommands } from "./commands/shell.js";
import { terraformCommands } from "./commands/terraform.js";
import { nexusCommands } from "./commands/nexus.js";
import { pythonCommands } from "./commands/python.js";
import { awsCommands } from "./commands/aws.js";
import { azureCommands } from "./commands/azure.js";
import { gcloudCommands } from "./commands/gcloud.js";

// === Tableau global de toutes les commandes (UNE SEULE FOIS) ===
const COMMANDS = [
  ...javaSpringCommands,
  ...angularCommands,
  ...dockerCommands,
  ...linuxCommands,
  ...windowsCommands,
  ...gitCommands,
  ...sqlCommands,
  ...sqlAdvancedCommands,
  ...sqlPerfCommands,
  ...nosqlCommands,
  ...mongoAdvancedCommands,
  ...cloudKubeCommands,
  ...shellCommands,
  ...terraformCommands,
  ...nexusCommands,
  ...pythonCommands,
  ...awsCommands,
  ...azureCommands,
  ...gcloudCommands
];

let CURRENT_COMMAND = null;

// ====== Utilitaires ======
function $(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error("Element #" + id + " introuvable");
  return el;
}

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  return Promise.resolve(fallbackCopy(text));
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
  } catch (e) {
    console.error("Copy failed", e);
  }
  document.body.removeChild(textarea);
}

// ====== Filtres & affichage ======
function populateFrameworkFilter() {
  const select = $("frameworkFilter");
  const frameworks = new Set();
  COMMANDS.forEach((c) => {
    if (c.framework) frameworks.add(c.framework);
  });
  Array.from(frameworks)
    .sort()
    .forEach((fw) => {
      const opt = document.createElement("option");
      opt.value = fw;
      opt.textContent = fw;
      select.appendChild(opt);
    });
}

function getSelectedOsFilter() {
  const radios = document.querySelectorAll("input[name='osFilter']");
  for (const r of radios) {
    if (r.checked) return r.value;
  }
  return "";
}

function renderCommands() {
  const list = $("commandsList");
  const search = $("searchInput").value.toLowerCase().trim();
  const fwFilter = $("frameworkFilter").value;
  const osFilter = getSelectedOsFilter();

  list.innerHTML = "";

  const filtered = COMMANDS.filter((c) => {
    const text = (
      (c.label || "") +
      " " +
      (c.command || "") +
      " " +
      (c.description || "") +
      " " +
      (c.example || "") +
      " " +
      (c.framework || "") +
      " " +
      (c.category || "")
    ).toLowerCase();

    const matchSearch = !search || text.includes(search);
    const matchFw = !fwFilter || c.framework === fwFilter;
    const os = (c.os || "all").toLowerCase();
    const matchOs =
      !osFilter || os === "all" || os === osFilter.toLowerCase();

    return matchSearch && matchFw && matchOs;
  });

  if (!filtered.length) {
    list.innerHTML =
      '<div class="empty-state">Aucune commande pour ces critères.</div>';
  } else {
    filtered.forEach((c) => {
      const item = document.createElement("div");
      item.className = "command-item";

      // meta
      const meta = document.createElement("div");
      meta.className = "command-meta";

      const tagFw = document.createElement("span");
      tagFw.className = "tag tag-framework";
      tagFw.textContent = c.framework || "N/A";
      meta.appendChild(tagFw);

      const tagEnv = document.createElement("span");
      tagEnv.className = "tag";
      tagEnv.textContent = c.env || "Env";
      meta.appendChild(tagEnv);

      if (c.category) {
        const tagCat = document.createElement("span");
        tagCat.className = "tag tag-category";
        tagCat.textContent = c.category;
        meta.appendChild(tagCat);
      }

      const tagOs = document.createElement("span");
      tagOs.className = "tag";
      const os = (c.os || "all").toLowerCase();
      if (os === "linux") {
        tagOs.classList.add("tag-os-linux");
        tagOs.textContent = "Linux";
      } else if (os === "windows") {
        tagOs.classList.add("tag-os-windows");
        tagOs.textContent = "Windows";
      } else {
        tagOs.textContent = "Tous OS";
      }
      meta.appendChild(tagOs);

      // label
      const label = document.createElement("div");
      label.className = "command-label";
      label.textContent = c.label || c.id || "Commande";

      // bloc commande + bouton copier
      const cmdBlock = document.createElement("div");
      cmdBlock.className = "command-command";

      const cmdText = document.createElement("div");
      cmdText.className = "command-text";
      cmdText.textContent = c.command || "";
      cmdBlock.appendChild(cmdText);

      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.innerHTML = "<span>📋</span><span>Copier</span>";
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        copyText(c.command || "");
        btn.innerHTML = "<span>✅</span><span>Copié</span>";
        setTimeout(() => {
          btn.innerHTML = "<span>📋</span><span>Copier</span>";
        }, 1200);
      });
      cmdBlock.appendChild(btn);

      const desc = document.createElement("div");
      desc.className = "command-description";
      desc.textContent = c.description || "";

      const ex = document.createElement("div");
      ex.className = "command-example";
      ex.textContent = c.example ? "Exemple / test : " + c.example : "";

      item.appendChild(meta);
      item.appendChild(label);
      item.appendChild(cmdBlock);
      item.appendChild(desc);
      if (c.example) item.appendChild(ex);

      item.addEventListener("click", () => {
        openCommandModal(c);
      });

      list.appendChild(item);
    });
  }

  $("commandsCount").textContent =
    filtered.length + " commande(s) affichée(s) / " + COMMANDS.length + " au total";
}

function initSearch() {
  $("searchInput").addEventListener("input", renderCommands);
  $("frameworkFilter").addEventListener("input", renderCommands);
  document
    .querySelectorAll("input[name='osFilter']")
    .forEach((r) => r.addEventListener("change", renderCommands));

  $("searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      renderCommands();
    }
  });

  $("searchBtn").addEventListener("click", () => {
    renderCommands();
  });
}

// ====== Générateur JSON ======
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function getSelectedGenOs() {
  const radios = document.querySelectorAll("input[name='genOs']");
  for (const r of radios) {
    if (r.checked) return r.value;
  }
  return "all";
}

function generateJsonSnippet() {
  const framework = $("genFramework").value.trim();
  const env = $("genEnv").value;
  const os = getSelectedGenOs();
  const category = $("genCategory").value.trim();
  const label = $("genLabel").value.trim();
  const command = $("genCommand").value.trim();
  const description = $("genDescription").value.trim();
  const example = $("genExample").value.trim();
  let id = $("genId").value.trim();

  if (!framework || !label || !command) {
    alert("Framework, Label et Commande sont obligatoires.");
    return;
  }

  if (!id) {
    id = slugify(label || command);
  }

  const obj = {
    id,
    framework,
    env,
    os,
    category,
    label,
    command,
    description,
    example
  };

  const json = JSON.stringify(obj, null, 2);
  $("genOutput").textContent = json;
}

function initGenerator() {
  $("genBtn").addEventListener("click", generateJsonSnippet);

  $("genCopyBtn").addEventListener("click", () => {
    const text = $("genOutput").textContent || "";
    if (!text || text.startsWith("//")) {
      alert("Rien à copier : génère d'abord un JSON.");
      return;
    }
    copyText(text).then(() => {
      const btn = $("genCopyBtn");
      const old = btn.innerHTML;
      btn.innerHTML = "<span class='btn-icon'>✅</span><span>Copié</span>";
      setTimeout(() => (btn.innerHTML = old), 1200);
    });
  });
}

// ====== Modale (zoom commande) ======
function openCommandModal(cmd) {
  CURRENT_COMMAND = cmd;
  const backdrop = $("commandModalBackdrop");
  const modal = $("commandModal");
  const titleEl = $("modalTitle");
  const metaEl = $("modalMeta");
  const cmdEl = $("modalCommand");
  const descEl = $("modalDescription");
  const exEl = $("modalExample");

  titleEl.textContent = cmd.label || cmd.id || "Commande";
  cmdEl.textContent = cmd.command || "";
  descEl.textContent = cmd.description || "";
  exEl.textContent = cmd.example ? "Exemple / test : " + cmd.example : "";

  metaEl.innerHTML = "";
  const fwTag = document.createElement("span");
  fwTag.className = "tag tag-framework";
  fwTag.textContent = cmd.framework || "N/A";
  metaEl.appendChild(fwTag);

  const envTag = document.createElement("span");
  envTag.className = "tag";
  envTag.textContent = cmd.env || "Env";
  metaEl.appendChild(envTag);

  if (cmd.category) {
    const catTag = document.createElement("span");
    catTag.className = "tag tag-category";
    catTag.textContent = cmd.category;
    metaEl.appendChild(catTag);
  }

  const osTag = document.createElement("span");
  osTag.className = "tag";
  const os = (cmd.os || "all").toLowerCase();
  if (os === "linux") {
    osTag.classList.add("tag-os-linux");
    osTag.textContent = "Linux";
  } else if (os === "windows") {
    osTag.classList.add("tag-os-windows");
    osTag.textContent = "Windows";
  } else {
    osTag.textContent = "Tous OS";
  }
  metaEl.appendChild(osTag);

  backdrop.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function closeCommandModal() {
  CURRENT_COMMAND = null;
  $("commandModalBackdrop").classList.add("hidden");
  $("commandModal").classList.add("hidden");
}

// ====== Init global ======
window.addEventListener("DOMContentLoaded", () => {
  populateFrameworkFilter();
  initSearch();
  initGenerator();
  renderCommands();

  // wiring modale
  const closeBtn = $("modalCloseBtn");
  const backdrop = $("commandModalBackdrop");
  const copyBtn = $("modalCopyBtn");

  closeBtn.addEventListener("click", () => closeCommandModal());
  backdrop.addEventListener("click", () => closeCommandModal());

  copyBtn.addEventListener("click", () => {
    if (!CURRENT_COMMAND) return;
    copyText(CURRENT_COMMAND.command || "");
    copyBtn.innerHTML = "<span class='btn-icon'>✅</span><span>Copié</span>";
    setTimeout(() => {
      copyBtn.innerHTML = "<span class='btn-icon'>📋</span><span>Copier la commande</span>";
    }, 1200);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCommandModal();
    }
  });
});
