// commands/shell.js
export const shellCommands = [
  // === Navigation / fichiers ===
  {
    id: "sh-pwd",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Afficher le répertoire courant",
    command: "pwd",
    description: "Montre le chemin absolu du dossier courant.",
    example: "Toujours vérifier avec pwd avant un rm -rf."
  },
  {
    id: "sh-ls-lah",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Lister les fichiers avec détails",
    command: "ls -lah",
    description: "Liste les fichiers avec droits, propriétaire, taille lisible.",
    example: "ls -lah /var/log pour repérer les gros fichiers de log."
  },
  {
    id: "sh-cd",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Changer de répertoire",
    command: "cd /chemin/vers/dossier",
    description: "Change le dossier courant.",
    example: "cd /opt/app avant de lancer un script de déploiement."
  },
  {
    id: "sh-mkdir-p",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Créer un dossier (avec parents)",
    command: "mkdir -p /data/apps/logs",
    description: "Crée le dossier et tous les parents manquants.",
    example: "Préparer un chemin pour des données applicatives."
  },
  {
    id: "sh-rm-rf",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "danger",
    label: "Supprimer récursivement (très dangereux)",
    command: "rm -rf /chemin/vers/dossier",
    description: "Supprime un dossier et tout son contenu sans confirmation.",
    example: "Toujours vérifier la commande avec echo ou pwd avant exécution."
  },
  {
    id: "sh-cp-r",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Copier un dossier récursivement",
    command: "cp -r source/ destination/",
    description: "Copie un dossier et tout son contenu.",
    example: "cp -r /etc/nginx /backup/nginx_conf."
  },
  {
    id: "sh-mv",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Déplacer ou renommer",
    command: "mv ancien_nom nouveau_nom",
    description: "Renomme ou déplace un fichier/dossier.",
    example: "mv app.log app.log.1 pour archiver un log."
  },
  {
    id: "sh-touch",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Créer un fichier vide / mettre à jour timestamp",
    command: "touch fichier.txt",
    description: "Crée un fichier vide ou met à jour sa date de modification.",
    example: "touch .env.local pour créer un fichier de config vide."
  },

  // === Visualisation / texte ===
  {
    id: "sh-cat",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "text",
    label: "Afficher le contenu d'un fichier",
    command: "cat fichier.txt",
    description: "Imprime le fichier sur la sortie standard.",
    example: "cat /etc/hosts pour voir la configuration."
  },
  {
    id: "sh-head",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "text",
    label: "Afficher les premières lignes",
    command: "head -n 20 fichier.log",
    description: "Montre les 20 premières lignes d'un fichier.",
    example: "head -n 50 server.log pour inspecter le début d’un log."
  },
  {
    id: "sh-tail-f",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "logs",
    label: "Suivre un fichier en temps réel",
    command: "tail -f fichier.log",
    description: "Affiche les nouvelles lignes ajoutées au fichier.",
    example: "tail -f /var/log/syslog pendant que tu reproduis un bug."
  },
  {
    id: "sh-less",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "text",
    label: "Lire un fichier long (pager)",
    command: "less fichier.log",
    description: "Permet de naviguer dans un long fichier (↑/↓, /recherche).",
    example: "less app.log puis /ERROR pour chercher les erreurs."
  },
  {
    id: "sh-grep-recursive",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "search",
    label: "Recherche récursive (grep)",
    command: "grep -R \"motif\" .",
    description: "Cherche 'motif' dans tous les fichiers du dossier courant.",
    example: "grep -R \"TODO\" src/ pour trouver les TODO dans le code."
  },
  {
    id: "sh-grep-ignore-case",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "search",
    label: "grep insensible à la casse",
    command: "grep -Ri \"motif\" .",
    description: "Comme grep -R mais insensible à la casse.",
    example: "grep -Ri \"error\" logs/."
  },
  {
    id: "sh-find-name",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "search",
    label: "Trouver des fichiers par nom",
    command: "find . -name \"*.log\"",
    description: "Liste tous les fichiers se terminant par .log.",
    example: "find . -name \"pom.xml\" pour tous les modules Maven."
  },

  // === Réseau ===
  {
    id: "sh-curl-get",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "Appel HTTP simple (curl)",
    command: "curl -v http://localhost:8080/actuator/health",
    description: "Envoie une requête GET et affiche les détails de la connexion.",
    example: "Tester rapidement la santé d'un service HTTP ou d’un pod K8s."
  },
  {
    id: "sh-curl-post-json",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "POST JSON (curl)",
    command: "curl -X POST http://localhost:8080/api \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"key\":\"value\"}'",
    description: "Envoie un POST JSON à une API.",
    example: "Tester un endpoint REST sans passer par Postman."
  },
  {
    id: "sh-ping",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "Tester la connectivité ICMP",
    command: "ping -c 4 exemple.com",
    description: "Envoie 4 pings à un host pour tester la connectivité.",
    example: "ping -c 4 google.com pour vérifier Internet depuis une VM."
  },
  {
    id: "sh-dig",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "Résolution DNS (dig)",
    command: "dig exemple.com",
    description: "Interroge les DNS pour un domaine.",
    example: "Vérifier la résolution d'un hostname interne ou externe."
  },

  // === Processus / ressources ===
  {
    id: "sh-ps-aux",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "process",
    label: "Lister tous les processus",
    command: "ps aux",
    description: "Affiche tous les processus en cours avec leur CPU/RAM.",
    example: "ps aux | grep java pour identifier un process Java."
  },
  {
    id: "sh-top",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "monitoring",
    label: "Surveiller CPU/mémoire (top)",
    command: "top",
    description: "Affiche les processus triés par consommation CPU (ou utilise htop).",
    example: "Repérer un process qui consomme 100% CPU lors d’un test."
  },
  {
    id: "sh-df-h",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "monitoring",
    label: "Espace disque (df -h)",
    command: "df -h",
    description: "Affiche l'utilisation des disques en unités lisibles.",
    example: "Repérer un filesystem proche de 100% utilisé."
  },
  {
    id: "sh-free-h",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "monitoring",
    label: "Mémoire (free -h)",
    command: "free -h",
    description: "Affiche la RAM utilisée/libre.",
    example: "Comparer avant/après démarrage d’un service lourd."
  },

  // === Archiver / compression ===
  {
    id: "sh-tar-gz",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "archive",
    label: "Créer une archive tar.gz",
    command: "tar -czf archive.tar.gz dossier/",
    description: "Crée une archive compressée du dossier.",
    example: "tar -czf logs.tar.gz /var/log pour les transférer."
  },
  {
    id: "sh-tar-extract",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "archive",
    label: "Extraire une archive tar.gz",
    command: "tar -xzf archive.tar.gz",
    description: "Extrait l’archive dans le dossier courant.",
    example: "Extraire un bundle applicatif fourni en tar.gz."
  },
  {
    id: "sh-zip",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "archive",
    label: "Créer un zip",
    command: "zip -r archive.zip dossier/",
    description: "Crée une archive ZIP d'un dossier.",
    example: "zip -r app.zip app/ pour partager rapidement un projet."
  },
  {
    id: "sh-unzip",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "archive",
    label: "Dézipper un fichier",
    command: "unzip archive.zip",
    description: "Extrait un zip dans le répertoire courant.",
    example: "Décompresser un artefact obtenu via CI."
  },

  // === SSH / transfert ===
  {
    id: "sh-ssh",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "ssh",
    label: "Se connecter en SSH",
    command: "ssh user@host",
    description: "Ouvre une session shell chiffrée sur un serveur distant.",
    example: "ssh ubuntu@1.2.3.4 pour accéder à une VM cloud."
  },
  {
    id: "sh-scp",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "transfer",
    label: "Copier un fichier via SSH",
    command: "scp fichier.txt user@host:/chemin/distant/",
    description: "Transfère un fichier de la machine locale vers un serveur (ou inversement).",
    example: "scp app.jar ubuntu@1.2.3.4:/opt/app/."
  },
  {
    id: "sh-rsync",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "transfer",
    label: "Synchroniser des dossiers (rsync)",
    command: "rsync -avz /src/ user@host:/dst/",
    description: "Synchronisation efficace de gros répertoires via SSH.",
    example: "rsync -avz /var/www/ server:/backup/www/."
  },

  // === Scripting / variables ===
  {
    id: "sh-export-var",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "env",
    label: "Définir une variable d'environnement",
    command: "export APP_ENV=dev",
    description: "Définit une variable d'environnement pour la session courante.",
    example: "export SPRING_PROFILES_ACTIVE=dev avant de lancer l'app."
  },
  {
    id: "sh-for-loop",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "script",
    label: "Boucle for simple",
    command: "for f in *.log; do echo \"$f\"; done",
    description: "Itère sur une liste de fichiers et exécute une commande pour chacun.",
    example: "Compresser tous les logs : for f in *.log; do gzip \"$f\"; done."
  },
  {
    id: "sh-if-test",
    framework: "Shell / Bash",
    env: "CLI",
    os: "linux",
    category: "script",
    label: "Condition if simple",
    command: "if [ -f config.yaml ]; then echo 'Config OK'; else echo 'Config manquante'; fi",
    description: "Teste l’existence d’un fichier et affiche un message.",
    example: "À utiliser dans un script de lancement de service."
  }
];
