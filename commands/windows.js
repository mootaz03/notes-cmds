// commands/windows.js
export const windowsCommands = [
  {
    id: "windows-dir",
    framework: "Windows",
    env: "CLI",
    os: "windows",
    category: "files",
    label: "Lister les fichiers (cmd.exe)",
    command: "dir",
    description: "Affiche la liste des fichiers et dossiers.",
    example: "Ouvre cmd.exe dans un dossier et tape 'dir'."
  },
  {
    id: "windows-powershell-get-childitem",
    framework: "Windows",
    env: "CLI",
    os: "windows",
    category: "files",
    label: "Lister les fichiers (PowerShell)",
    command: "Get-ChildItem",
    description: "Équivalent PowerShell de 'dir' avec plus d'options.",
    example: "Dans PowerShell, exécute 'Get-ChildItem -Recurse -Filter *.log'."
  },
  {
    id: "windows-tasklist",
    framework: "Windows",
    env: "CLI",
    os: "windows",
    category: "process",
    label: "Lister les processus en cours",
    command: "tasklist",
    description: "Affiche les processus en cours d'exécution.",
    example: "Exécute et repère ton IDE ou ton navigateur dans la liste."
  },
  {
    id: "windows-netstat-ano",
    framework: "Windows",
    env: "CLI",
    os: "windows",
    category: "network",
    label: "Ports ouverts (netstat)",
    command: "netstat -ano",
    description: "Affiche les connexions réseau et ports à l'écoute.",
    example: "Filtre avec 'netstat -ano | findstr 8080' pour voir qui écoute sur 8080."
  },
  {
    id: "windows-findstr",
    framework: "Windows",
    env: "CLI",
    os: "windows",
    category: "search",
    label: "Recherche texte dans des fichiers",
    command: "findstr /S /I \"motif\" *.java",
    description: "Cherche 'motif' dans tous les fichiers .java du dossier courant et sous-dossiers.",
    example: "Dans un repo Java, remplace 'motif' par le nom d'une méthode."
  },
  {
    id: "windows-set-env",
    framework: "Windows",
    env: "CLI",
    os: "windows",
    category: "env",
    label: "Définir une variable d'environnement temporaire",
    command: "set MY_VAR=valeur",
    description: "Définit une variable d'environnement pour la session en cours (cmd.exe).",
    example: "Définis MY_VAR puis vérifie avec 'echo %MY_VAR%'."
  },
  {
    id: "windows-powershell-env",
    framework: "Windows",
    env: "CLI",
    os: "windows",
    category: "env",
    label: "Définir une variable d'environnement (PowerShell)",
    command: "$env:MY_VAR=\"valeur\"",
    description: "Définit une variable d'environnement dans PowerShell.",
    example: "Vérifie avec '$env:MY_VAR'."
  },
  {
    id: "windows-open-services",
    framework: "Windows",
    env: "CLI",
    os: "windows",
    category: "services",
    label: "Ouvrir la gestion des services",
    command: "services.msc",
    description: "Ouvre la console de gestion des services Windows.",
    example: "Dans Exécuter (Win+R), tape 'services.msc' et valide."
  }
];
