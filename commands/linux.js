// commands/linux.js
export const linuxCommands = [
  {
    id: "linux-ls-lah",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Lister les fichiers (détails + tailles lisibles)",
    command: "ls -lah",
    description: "Affiche la liste des fichiers avec droits, propriétaire et tailles lisibles.",
    example: "Exécute dans un répertoire contenant des fichiers de tailles variées pour vérifier les colonnes affichées."
  },
  {
    id: "linux-grep-recurse",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "search",
    label: "Recherche récursive dans le code",
    command: "grep -R \"motif\" src/",
    description: "Recherche le texte 'motif' dans tous les fichiers sous src/.",
    example: "Remplace 'motif' par le nom d'une classe ou d'une méthode et vérifie les fichiers listés."
  },
  {
    id: "linux-tail-f",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "logs",
    label: "Suivre un fichier de log en temps réel",
    command: "tail -f /var/log/syslog",
    description: "Affiche en continu les nouvelles lignes dans un fichier de log.",
    example: "Génère de l'activité système (ping, ssh) et observe les nouvelles entrées."
  },
  {
    id: "linux-find-pom",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "search",
    label: "Trouver tous les pom.xml",
    command: "find . -name \"pom.xml\"",
    description: "Liste tous les fichiers pom.xml à partir du répertoire courant.",
    example: "Dans un repo multi-modules, exécute la commande et vérifie la liste."
  },
  {
    id: "linux-lsof-ports",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "Lister les ports ouverts (process)",
    command: "sudo lsof -i -P -n | grep LISTEN",
    description: "Affiche les processus qui écoutent sur des ports réseau.",
    example: "Repère le process qui écoute sur 8080 avant de démarrer ton app."
  },
  {
    id: "linux-systemctl-status",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "services",
    label: "Vérifier l'état d'un service systemd",
    command: "sudo systemctl status nom-du-service",
    description: "Affiche l'état détaillé d'un service géré par systemd.",
    example: "Exécute 'sudo systemctl status ssh' pour vérifier si le service SSH est actif."
  },
  {
    id: "linux-df-h",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "monitoring",
    label: "Vérifier l'espace disque",
    command: "df -h",
    description: "Affiche l'utilisation disque avec des tailles lisibles.",
    example: "Repère les partitions proches de 100% d'utilisation."
  },
  {
    id: "linux-free-h",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "monitoring",
    label: "Vérifier la mémoire",
    command: "free -h",
    description: "Affiche la mémoire utilisée/libre avec des unités lisibles.",
    example: "Observe la mémoire avant et après le lancement d'une grosse application."
  },
  {
    id: "linux-top",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "monitoring",
    label: "Surveiller CPU/mémoire en temps réel",
    command: "top",
    description: "Affiche les processus triés par usage CPU/mémoire.",
    example: "Repère les processus les plus gourmands pendant un test de charge."
  },
  {
    id: "linux-chmod-exec",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Rendre un script exécutable",
    command: "chmod +x script.sh",
    description: "Ajoute les droits d'exécution au script.",
    example: "Exécute chmod +x puis ./script.sh pour lancer le script."
  }
];
