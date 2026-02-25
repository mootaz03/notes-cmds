// commands/angular.js
export const angularCommands = [
  {
    id: "ng-serve-open",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Lancer l'application Angular en dev",
    command: "ng serve -o",
    description: "Démarre le serveur de dev et ouvre le navigateur.",
    example: "À la racine du projet Angular, exécute la commande et modifie un composant pour voir le hot reload."
  },
  {
    id: "ng-serve-port",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Lancer Angular sur un port spécifique",
    command: "ng serve --port 4300",
    description: "Démarre l'app sur le port 4300 au lieu de 4200.",
    example: "Exécute puis ouvre http://localhost:4300."
  },
  {
    id: "ng-build-prod",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "build",
    label: "Build production",
    command: "ng build --configuration production",
    description: "Génère un build optimisé pour la prod dans dist/.",
    example: "Inspecte dist/ pour vérifier la minification et le bundling."
  },
  {
    id: "ng-build-analyze",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "build",
    label: "Analyser la taille du bundle",
    command: "ng build --configuration production --stats-json",
    description: "Génère un fichier de stats pour analyser les bundles.",
    example: "Utilise webpack-bundle-analyzer sur le fichier stats pour identifier les modules lourds."
  },
  {
    id: "ng-test",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "test",
    label: "Lancer les tests unitaires",
    command: "ng test",
    description: "Exécute les tests unitaires avec Karma/Jasmine.",
    example: "Modifie un test pour le faire échouer et observe le résultat dans le runner."
  },
  {
    id: "ng-lint",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "quality",
    label: "Lint du code Angular",
    command: "ng lint",
    description: "Analyse le code avec les règles de lint configurées.",
    example: "Ajoute un import non utilisé, exécute ng lint et vérifie le warning."
  },
  {
    id: "ng-generate-component",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "scaffolding",
    label: "Générer un composant",
    command: "ng g c feature/mon-component",
    description: "Crée un nouveau composant Angular dans le dossier feature.",
    example: "Exécute la commande et vérifie la création des fichiers .ts/.html/.scss."
  },
  {
    id: "ng-generate-service",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "scaffolding",
    label: "Générer un service",
    command: "ng g s services/user",
    description: "Crée un nouveau service Angular dans le dossier services.",
    example: "Exécute et vérifie la création du fichier user.service.ts."
  },
  {
    id: "ng-generate-guard",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "scaffolding",
    label: "Générer un guard de route",
    command: "ng g guard guards/auth",
    description: "Crée un guard pour protéger les routes.",
    example: "Exécute, puis configure-le dans le routing pour protéger une route."
  },
  {
    id: "ng-update-angular",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "maintenance",
    label: "Mettre à jour Angular",
    command: "ng update @angular/core @angular/cli",
    description: "Met à jour Angular core et CLI vers la dernière version compatible.",
    example: "Exécute dans un projet Angular et suis les instructions (backup recommandé)."
  },
  {
    id: "npm-install",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "deps",
    label: "Installer les dépendances npm",
    command: "npm install",
    description: "Installe les dépendances définies dans package.json.",
    example: "Après un clone de repo, exécute npm install avant ng serve."
  },
  {
    id: "npm-ci",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "deps",
    label: "Install reproductible pour CI",
    command: "npm ci",
    description: "Installe les dépendances à partir de package-lock.json (reproductible, plus rapide).",
    example: "Utilise npm ci dans les pipelines pour garantir la même arborescence node_modules."
  },
  {
    id: "npm-audit-fix",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "security",
    label: "Corriger automatiquement certaines vulnérabilités",
    command: "npm audit fix",
    description: "Applique les corrections de vulnérabilités quand c'est possible sans changement majeur.",
    example: "Exécute après un npm audit pour corriger les vulnérabilités low/medium."
  },
  {
    id: "ng-serve-host-all",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Lancer Angular accessible sur le LAN",
    command: "ng serve --host 0.0.0.0 --disable-host-check",
    description: "Permet d'accéder à l'app Angular depuis d'autres machines du réseau.",
    example: "Depuis une autre machine, ouvre http://IP_DE_TON_PC:4200."
  },
  {
    id: "ng-build-base-href",
    framework: "Angular",
    env: "CLI",
    os: "all",
    category: "build",
    label: "Build Angular pour GitHub Pages",
    command: "ng build --configuration production --base-href /mon-repo/",
    description: "Build l'app pour être servie sous un sous-chemin (ex: GitHub Pages).",
    example: "Déploie dist/ sur GitHub Pages en veillant à utiliser le même base-href."
  }
];
