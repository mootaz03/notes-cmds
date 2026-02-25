// commands/git.js
export const gitCommands = [
  {
    id: "git-status-short",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "status",
    label: "État succinct du repo",
    command: "git status -sb",
    description: "Affiche la branche courante et les fichiers modifiés de manière compacte.",
    example: "Modifie un fichier, exécute la commande et observe les marqueurs (M, ??...)."
  },
  {
    id: "git-log-pretty",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "history",
    label: "Historique compact avec graphe",
    command: "git log --oneline --graph --decorate --all",
    description: "Affiche l'historique des commits sous forme compacte avec graphe ASCII.",
    example: "Dans un repo avec plusieurs branches, observe la structure des merges."
  },
  {
    id: "git-diff",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "diff",
    label: "Diff des modifications non indexées",
    command: "git diff",
    description: "Affiche les changements non encore ajoutés au staging.",
    example: "Modifie un fichier et exécute git diff pour voir les lignes ajoutées/supprimées."
  },
  {
    id: "git-diff-cached",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "diff",
    label: "Diff des fichiers indexés",
    command: "git diff --cached",
    description: "Montre les changements qui seront inclus dans le prochain commit.",
    example: "Ajoute des fichiers avec git add puis exécute git diff --cached."
  },
  {
    id: "git-stash-wip",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "stash",
    label: "Stasher le travail en cours (WIP)",
    command: "git stash push -m \"WIP\"",
    description: "Sauvegarde les modifications non committées dans un stash nommé WIP.",
    example: "Modifie des fichiers, stash, puis vérifie 'git status' et restaure avec 'git stash pop'."
  },
  {
    id: "git-branch-merged",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Lister les branches locales mergées",
    command: "git branch --merged",
    description: "Liste les branches entièrement fusionnées dans la branche courante.",
    example: "Après un merge, exécute la commande et supprime les branches obsolètes avec 'git branch -d'."
  },
  {
    id: "git-rebase-interactive",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "history",
    label: "Rebase interactif sur les 3 derniers commits",
    command: "git rebase -i HEAD~3",
    description: "Permet de réécrire les 3 derniers commits (squash, reword, drop...).",
    example: "Sur une feature branch, fusionne 2 commits de cleanup en un seul commit propre."
  },
  {
    id: "git-cherry-pick",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "history",
    label: "Appliquer un commit spécifique",
    command: "git cherry-pick <sha>",
    description: "Applique le commit <sha> sur la branche courante.",
    example: "Récupère un bugfix d'une autre branche sans fusionner toute la branche."
  },
  {
    id: "git-reset-soft",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "history",
    label: "Annuler le dernier commit (soft)",
    command: "git reset --soft HEAD~1",
    description: "Annule le dernier commit mais garde les fichiers dans le staging.",
    example: "Corrige un message de commit en faisant reset soft puis un nouveau commit."
  },
  {
    id: "git-reset-hard",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "danger",
    label: "Annuler le dernier commit (hard)",
    command: "git reset --hard HEAD~1",
    description: "Supprime le dernier commit et les modifications associées (irréversible localement).",
    example: "À utiliser seulement si tu es certain de ne pas avoir besoin des changements."
  },
  {
    id: "git-clean-unstaged",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Nettoyer les fichiers non suivis",
    command: "git clean -fd",
    description: "Supprime les fichiers/dossiers non suivis par Git.",
    example: "Après un build qui crée des fichiers temporaires, nettoie avec git clean -fd (attention!)."
  },
  {
    id: "git-clone-ssh",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "clone",
    label: "Cloner un repo via SSH",
    command: "git clone git@github.com:org/projet.git",
    description: "Clone un repo en utilisant la clé SSH configurée.",
    example: "Vérifie que ta clé SSH est configurée puis exécute la commande pour cloner le projet."
  }
];
