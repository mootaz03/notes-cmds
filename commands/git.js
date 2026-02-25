// commands/git.js
export const gitCommands = [
  // --- ÉTAT / VUE GLOBALE ---
  {
    id: "git-status-short",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "status",
    label: "État succinct du repo",
    command: "git status -sb",
    description: "Affiche la branche courante et les fichiers modifiés de manière compacte.",
    example: "Modifie un fichier, exécute la commande et observe les marqueurs (M pour modifié, ?? pour non tracké)."
  },
  {
    id: "git-status-verbose",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "status",
    label: "État détaillé du repo",
    command: "git status",
    description: "Affiche l'état complet du dépôt, avec explications sur staging et branche.",
    example: "Après un git add, observe la séparation entre 'staged' et 'not staged'."
  },
  {
    id: "git-branch-list",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "branch",
    label: "Lister les branches locales",
    command: "git branch",
    description: "Affiche toutes les branches locales, avec * sur la branche courante.",
    example: "Permet de vérifier sur quelle branche tu travailles avant un commit ou un merge."
  },
  {
    id: "git-branch-remote",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "branch",
    label: "Lister les branches distantes",
    command: "git branch -r",
    description: "Affiche les branches du remote (origin, etc.).",
    example: "Utile pour voir les branches existantes sur le serveur avant de créer une nouvelle branche."
  },

  // --- LOG / HISTORIQUE ---
  {
    id: "git-log-pretty",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "history",
    label: "Historique compact avec graphe",
    command: "git log --oneline --graph --decorate --all",
    description: "Affiche l'historique des commits sous forme compacte avec graphe ASCII.",
    example: "Dans un repo avec plusieurs branches, observe la structure des merges et rebase."
  },
  {
    id: "git-log-last-10",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "history",
    label: "Voir les 10 derniers commits",
    command: "git log -10 --oneline",
    description: "Affiche les 10 derniers commits en une ligne chacun.",
    example: "Utile pour un quick history après un pull ou un rebase."
  },
  {
    id: "git-show-commit",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "history",
    label: "Afficher le détail d'un commit",
    command: "git show <sha>",
    description: "Affiche les changements et le message du commit <sha>.",
    example: "Récupère un SHA dans git log puis utilise git show pour inspecter ses changements."
  },
  {
    id: "git-blame-file",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "history",
    label: "Voir qui a modifié chaque ligne (blame)",
    command: "git blame chemin/fichier",
    description: "Affiche pour chaque ligne l'auteur et le commit d'origine.",
    example: "Utile pour savoir qui a introduit une ligne de code ou un bug."
  },

  // --- DIFFS ---
  {
    id: "git-diff-working",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "diff",
    label: "Diff des modifications non indexées",
    command: "git diff",
    description: "Affiche les changements non encore ajoutés au staging (git add).",
    example: "Modifie un fichier, exécute git diff pour voir les lignes ajoutées/supprimées."
  },
  {
    id: "git-diff-cached",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "diff",
    label: "Diff des fichiers indexés",
    command: "git diff --cached",
    description: "Affiche les changements déjà ajoutés au staging, prêts pour le commit.",
    example: "Après git add, exécute git diff --cached pour revoir le diff avant commit."
  },
  {
    id: "git-diff-branches",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "diff",
    label: "Comparer deux branches",
    command: "git diff branche1..branche2",
    description: "Affiche les différences entre deux branches (branche2 vs branche1).",
    example: "git diff main..feature/login pour voir ce que la feature ajoute par rapport à main."
  },

  // --- ADD / COMMIT ---
  {
    id: "git-add-file",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "commit",
    label: "Ajouter un fichier au staging",
    command: "git add chemin/fichier",
    description: "Ajoute un fichier spécifique à la zone de staging.",
    example: "git add src/main.java avant de faire git commit."
  },
  {
    id: "git-add-all",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "commit",
    label: "Ajouter toutes les modifications",
    command: "git add .",
    description: "Ajoute toutes les modifications (nouveaux fichiers, modifs, suppressions).",
    example: "À utiliser avec prudence, surtout dans les gros repos."
  },
  {
    id: "git-commit-message",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "commit",
    label: "Créer un commit avec message",
    command: "git commit -m \"Mon message de commit\"",
    description: "Crée un nouveau commit avec le message indiqué.",
    example: "Utilise un message clair, ex : 'feat: ajout du login JWT'."
  },
  {
    id: "git-commit-amend",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "commit",
    label: "Modifier le dernier commit (amend)",
    command: "git commit --amend",
    description: "Modifie le dernier commit (contenu et/ou message).",
    example: "Après un oubli de fichier, git add puis git commit --amend pour l'ajouter au commit précédent."
  },

  // --- BRANCHES / SWITCH ---
  {
    id: "git-branch-new",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "branch",
    label: "Créer une nouvelle branche",
    command: "git branch feature/mon-sujet",
    description: "Crée une nouvelle branche basée sur la branche courante.",
    example: "Sur main, exécute git branch feature/api-v2 puis change de branche avec git switch."
  },
  {
    id: "git-switch-branch",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "branch",
    label: "Basculer sur une branche",
    command: "git switch feature/mon-sujet",
    description: "Change de branche (remplace git checkout pour les branches).",
    example: "git switch main pour revenir sur la branche principale."
  },
  {
    id: "git-branch-delete-local",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "branch",
    label: "Supprimer une branche locale",
    command: "git branch -d feature/mon-sujet",
    description: "Supprime une branche locale déjà mergée.",
    example: "Après merge de feature/mon-sujet dans main, supprime la branche locale."
  },
  {
    id: "git-branch-delete-force",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "branch",
    label: "Supprimer une branche locale (force)",
    command: "git branch -D feature/mon-sujet",
    description: "Supprime une branche locale même si elle n'est pas mergée.",
    example: "À utiliser uniquement si tu es sûr de ne plus avoir besoin du travail sur cette branche."
  },

  // --- MERGE / REBASE ---
  {
    id: "git-merge-branch",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "merge",
    label: "Merger une branche dans la branche courante",
    command: "git merge feature/mon-sujet",
    description: "Fusionne les commits de feature/mon-sujet dans la branche actuelle.",
    example: "Sur main, exécute git merge feature/mon-sujet après validation de la PR."
  },
  {
    id: "git-rebase-branch",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "rebase",
    label: "Rebaser la branche courante sur main",
    command: "git rebase main",
    description: "Rejoue les commits de la branche courante au-dessus de main.",
    example: "Depuis feature/mon-sujet, exécute git rebase main pour intégrer les derniers changements de main."
  },
  {
    id: "git-rebase-interactive",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "rebase",
    label: "Rebase interactif (3 derniers commits)",
    command: "git rebase -i HEAD~3",
    description: "Permet de réécrire les 3 derniers commits (squash, reword, drop...).",
    example: "Sur une feature branch, fusionne 2 commits de cleanup en un seul."
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
    example: "Récupère un bugfix d'une autre branche sans merger toute la branche."
  },
  {
    id: "git-revert-commit",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "history",
    label: "Créer un commit d'annulation",
    command: "git revert <sha>",
    description: "Crée un nouveau commit qui annule les changements du commit <sha>.",
    example: "Utile en prod pour annuler proprement un commit déjà poussé."
  },

  // --- RESET / RESTORE ---
  {
    id: "git-reset-soft",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "reset",
    label: "Annuler le dernier commit (soft)",
    command: "git reset --soft HEAD~1",
    description: "Annule le dernier commit mais garde les fichiers dans le staging.",
    example: "Modifie un message de commit en reset soft puis nouveau commit."
  },
  {
    id: "git-reset-mixed",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "reset",
    label: "Annuler le dernier commit (mixed par défaut)",
    command: "git reset HEAD~1",
    description: "Annule le dernier commit et retire les fichiers du staging, mais garde les modifications.",
    example: "Permet de redécouper un gros commit en plusieurs plus petits."
  },
  {
    id: "git-reset-hard",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "reset",
    label: "Annuler le dernier commit (hard, destructif)",
    command: "git reset --hard HEAD~1",
    description: "Supprime le dernier commit et les modifications associées (irréversible localement).",
    example: "À utiliser uniquement si tu es certain de ne plus avoir besoin des changements."
  },
  {
    id: "git-restore-file",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "reset",
    label: "Annuler les modifications d'un fichier non commité",
    command: "git restore chemin/fichier",
    description: "Restaure le fichier à son état du dernier commit.",
    example: "Utile quand un fichier a été modifié par erreur et que tu veux revenir à la version précédente."
  },

  // --- STASH ---
  {
    id: "git-stash-wip",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "stash",
    label: "Stasher le travail en cours (WIP)",
    command: "git stash push -m \"WIP\"",
    description: "Sauvegarde les modifications non committées dans un stash nommé WIP.",
    example: "Modifie des fichiers, stash, passe sur une autre branche pour corriger un bug urgent."
  },
  {
    id: "git-stash-list",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "stash",
    label: "Lister les stashes",
    command: "git stash list",
    description: "Affiche la liste des stashes disponibles.",
    example: "Permet de voir tous les contextes WIP sauvegardés."
  },
  {
    id: "git-stash-pop",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "stash",
    label: "Appliquer et supprimer le dernier stash",
    command: "git stash pop",
    description: "Restaure les modifications du dernier stash et le supprime de la liste.",
    example: "Après avoir corrigé un bug sur une autre branche, revient sur la branche initiale et pop le stash."
  },
  {
    id: "git-stash-apply",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "stash",
    label: "Appliquer un stash spécifique",
    command: "git stash apply stash@{1}",
    description: "Applique les modifications du stash indiqué sans le supprimer.",
    example: "Utile pour appliquer une même série de changements sur plusieurs branches."
  },

  // --- REMOTE / FETCH / PULL / PUSH ---
  {
    id: "git-remote-add",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "remote",
    label: "Ajouter un remote",
    command: "git remote add origin git@github.com:org/projet.git",
    description: "Associe le remote 'origin' à une URL de dépôt distant.",
    example: "Après git init, ajoute le dépôt GitHub avec cette commande."
  },
  {
    id: "git-fetch-all",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "remote",
    label: "Récupérer toutes les branches distantes",
    command: "git fetch --all --prune",
    description: "Télécharge les mises à jour de tous les remotes et supprime les références obsolètes.",
    example: "Exécute avant un rebase pour être sûr d'avoir les derniers commits distants."
  },
  {
    id: "git-pull-rebase",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "remote",
    label: "Pull avec rebase (plutôt que merge)",
    command: "git pull --rebase",
    description: "Met à jour la branche courante en rebasant les commits locaux sur ceux du remote.",
    example: "Évite les commits de merge inutiles lors de petits changements locaux."
  },
  {
    id: "git-push-set-upstream",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "remote",
    label: "Push et définir la branche distante",
    command: "git push -u origin feature/mon-sujet",
    description: "Publie la branche locale sur origin et définit le suivi (upstream).",
    example: "Après création d'une nouvelle branche, utilise cette commande pour l'associer au remote."
  },
  {
    id: "git-push-force-with-lease",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "remote",
    label: "Push forcé sécurisé",
    command: "git push --force-with-lease",
    description: "Force le push tout en vérifiant que personne n'a poussé entre-temps.",
    example: "À utiliser après un rebase de commits déjà poussés, en coordination avec l'équipe."
  },

  // --- TAGS ---
  {
    id: "git-tag-lightweight",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "tag",
    label: "Créer un tag simple",
    command: "git tag v1.0.0",
    description: "Crée un tag léger sur le commit courant.",
    example: "Utilisé pour marquer une release avant de la builder."
  },
  {
    id: "git-tag-annotated",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "tag",
    label: "Créer un tag annoté",
    command: "git tag -a v1.0.0 -m \"Release 1.0.0\"",
    description: "Crée un tag annoté avec message (recommandé pour les releases).",
    example: "Puis pousse-le avec 'git push origin v1.0.0'."
  },
  {
    id: "git-tag-push-all",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "tag",
    label: "Pousser tous les tags",
    command: "git push --tags",
    description: "Pousse tous les tags locaux vers le remote.",
    example: "À utiliser après avoir créé plusieurs tags de versions."
  },

  // --- CLEANUP / GROS REPOS ---
  {
    id: "git-clean-unstaged",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Supprimer les fichiers non suivis",
    command: "git clean -fd",
    description: "Supprime les fichiers/dossiers non trackés par Git.",
    example: "Après un build, élimine les artefacts générés (attention : destructif)."
  },
  {
    id: "git-gc",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Garbage collect Git",
    command: "git gc --prune=now --aggressive",
    description: "Optimise le dépôt en nettoyant les objets inutilisés et en compactant.",
    example: "À lancer ponctuellement sur les gros repos pour réduire la taille .git."
  },
  {
    id: "git-reflog",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "recovery",
    label: "Voir l'historique des mouvements de HEAD (reflog)",
    command: "git reflog",
    description: "Affiche l'historique des déplacements de HEAD, utile pour récupérer un commit perdu.",
    example: "Après un reset accidentel, retrouve le SHA précédent dans le reflog."
  },

  // --- SUBMODULES / BISECT / WORKTREE ---
  {
    id: "git-submodule-add",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "submodule",
    label: "Ajouter un submodule",
    command: "git submodule add git@github.com:org/lib.git libs/lib",
    description: "Ajoute un dépôt Git comme sous-module dans le repo.",
    example: "Utilisé pour inclure une librairie versionnée séparément."
  },
  {
    id: "git-submodule-update",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "submodule",
    label: "Mettre à jour les submodules",
    command: "git submodule update --init --recursive",
    description: "Initialise et met à jour tous les submodules du projet.",
    example: "À exécuter après un clone d'un repo avec submodules."
  },
  {
    id: "git-bisect-start",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "bisect",
    label: "Démarrer une session git bisect",
    command: "git bisect start",
    description: "Commence une recherche binaire pour trouver le commit fautif.",
    example: "Ensuite : git bisect bad (HEAD) puis git bisect good <sha-bon>."
  },
  {
    id: "git-bisect-good-bad",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "bisect",
    label: "Marquer un commit comme bon ou mauvais (bisect)",
    command: "git bisect good <sha-bon>; git bisect bad <sha-mauvais>",
    description: "Indique à git bisect quels commits sont bons ou mauvais pour réduire la recherche.",
    example: "Répète la procédure jusqu'à ce que Git identifie le commit fautif."
  },
  {
    id: "git-worktree-add",
    framework: "Git",
    env: "CLI",
    os: "all",
    category: "worktree",
    label: "Ajouter un worktree pour une autre branche",
    command: "git worktree add ../projet-feature feature/mon-sujet",
    description: "Crée un second répertoire de travail sur une autre branche, basé sur le même dépôt.",
    example: "Permet de travailler sur deux branches en parallèle sans recloner le repo."
  }
];
