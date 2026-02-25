// commands/linux.js
export const linuxCommands = [
  // --- FICHIERS / NAVIGATION ---
  {
    id: "linux-pwd",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Afficher le répertoire courant",
    command: "pwd",
    description: "Affiche le chemin absolu du répertoire dans lequel tu te trouves.",
    example: "Très utilisé avant un rm ou un tar pour vérifier où tu es dans l'arborescence."
  },
  {
    id: "linux-cd",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Changer de répertoire",
    command: "cd /chemin/vers/dossier",
    description: "Change le répertoire courant vers le chemin indiqué.",
    example: "cd /var/log pour aller inspecter les logs système."
  },
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
    id: "linux-mkdir-p",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Créer un répertoire (avec parents)",
    command: "mkdir -p /chemin/vers/dossier",
    description: "Crée un répertoire, en créant également les dossiers parents manquants.",
    example: "mkdir -p /data/app/logs pour préparer un chemin de logs."
  },
  {
    id: "linux-rm-rf",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "danger",
    label: "Supprimer récursivement (attention)",
    command: "rm -rf /chemin/vers/dossier",
    description: "Supprime un dossier et tout son contenu sans confirmation.",
    example: "À utiliser avec énormément de prudence, toujours vérifier le chemin avec pwd + ls avant."
  },
  {
    id: "linux-cp-r",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Copier un dossier récursivement",
    command: "cp -r source/ destination/",
    description: "Copie un répertoire et tout son contenu vers une autre destination.",
    example: "cp -r /etc/nginx /backup/nginx_conf pour sauvegarder la conf Nginx."
  },
  {
    id: "linux-mv",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Déplacer ou renommer un fichier/dossier",
    command: "mv source destination",
    description: "Déplace ou renomme un fichier/dossier.",
    example: "mv app.log app.log.1 pour archiver un log."
  },
  {
    id: "linux-cat",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Afficher le contenu d'un fichier",
    command: "cat fichier.txt",
    description: "Affiche le contenu complet du fichier dans le terminal.",
    example: "cat /etc/hosts pour voir la configuration des hosts."
  },
  {
    id: "linux-less",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Afficher un fichier page par page",
    command: "less fichier.log",
    description: "Permet de parcourir un fichier long (navigation haut/bas, recherche).",
    example: "less /var/log/syslog et utilise /motif pour faire une recherche."
  },
  {
    id: "linux-du-sh",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "files",
    label: "Taille totale d'un dossier",
    command: "du -sh /chemin/vers/dossier",
    description: "Affiche la taille totale d'un répertoire.",
    example: "du -sh /var/log pour savoir combien d'espace occupent les logs."
  },

  // --- RECHERCHE / TEXTE ---
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
    id: "linux-grep-ignore-case",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "search",
    label: "grep insensible à la casse",
    command: "grep -Ri \"motif\" .",
    description: "Recherche 'motif' sans tenir compte de la casse dans le répertoire courant.",
    example: "grep -Ri \"error\" logs/ pour retrouver toutes les erreurs."
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
    id: "linux-find-large-files",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "search",
    label: "Trouver les gros fichiers (+100M)",
    command: "find / -type f -size +100M -exec ls -lh {} \\; 2>/dev/null",
    description: "Recherche les fichiers de plus de 100 Mo sur le système.",
    example: "Utile pour identifier les fichiers qui saturent un disque."
  },
  {
    id: "linux-sed-inplace",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "text",
    label: "Remplacer un texte dans un fichier (sed)",
    command: "sed -i 's/ancien/nouveau/g' fichier.conf",
    description: "Remplace toutes les occurrences de 'ancien' par 'nouveau' dans un fichier.",
    example: "sed -i 's/8080/8081/g' application.properties pour changer un port."
  },
  {
    id: "linux-awk-column-sum",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "text",
    label: "Somme d'une colonne avec awk",
    command: "awk '{s+=$2} END {print s}' fichier.txt",
    description: "Additionne toutes les valeurs de la 2e colonne d'un fichier.",
    example: "Utile pour sommer des métriques exportées en texte."
  },

  // --- LOGS ---
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
    id: "linux-tail-n100",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "logs",
    label: "Afficher les 100 dernières lignes d'un log",
    command: "tail -n 100 /var/log/syslog",
    description: "Montre les dernières lignes d'un fichier de log.",
    example: "Utile pour un quick check après un redéploiement applicatif."
  },
  {
    id: "linux-tail-nginx-error",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "logs",
    label: "Suivre les erreurs Nginx",
    command: "tail -f /var/log/nginx/error.log",
    description: "Affiche en temps réel les erreurs Nginx.",
    example: "Lance des requêtes erronées vers Nginx et observe les logs d'erreur."
  },
  {
    id: "linux-journalctl-unit",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "logs",
    label: "Voir les logs d'un service systemd",
    command: "journalctl -u nom-du-service.service",
    description: "Affiche les logs d'un service géré par systemd.",
    example: "journalctl -u nginx.service pour consulter les logs Nginx."
  },
  {
    id: "linux-journalctl-follow",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "logs",
    label: "Suivre les logs d'un service systemd",
    command: "journalctl -u nom-du-service.service -f",
    description: "Suivi temps réel des logs d'un service systemd.",
    example: "journalctl -u myapp.service -f après un déploiement pour surveiller le démarrage."
  },
  {
    id: "linux-dmesg",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "logs",
    label: "Voir les messages du kernel",
    command: "dmesg | less",
    description: "Affiche les messages du noyau Linux (boot, matériel, erreurs...).",
    example: "Utile après un souci de disque ou de réseau pour voir les messages kernel."
  },

  // --- RÉSEAU / CONNECTIVITÉ ---
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
    id: "linux-ss-listen",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "Lister les ports en écoute (ss)",
    command: "ss -lntp",
    description: "Affiche les sockets TCP en écoute avec le PID du process.",
    example: "Utile pour remplacer netstat, très utilisé en prod moderne."
  },
  {
    id: "linux-ip-a",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "Afficher la configuration réseau",
    command: "ip a",
    description: "Affiche les interfaces réseau et leurs adresses IP.",
    example: "Vérifie l'IP d'une VM ou d'un pod (dans certains contextes)."
  },
  {
    id: "linux-ping",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "Tester la connectivité ICMP",
    command: "ping -c 4 exemple.com",
    description: "Envoie 4 paquets ICMP pour tester la connectivité vers un host.",
    example: "ping -c 4 google.com pour vérifier la connectivité Internet."
  },
  {
    id: "linux-traceroute",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "Tracer le chemin réseau",
    command: "traceroute exemple.com",
    description: "Affiche le chemin réseau (hops) jusqu'à une destination.",
    example: "Permet de diagnostiquer un routage anormal ou un blocage intermédiaire."
  },

  // --- TRANSFERT / SSH / BACKUP ---
  {
    id: "linux-ssh",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "ssh",
    label: "Se connecter à un serveur distant (SSH)",
    command: "ssh user@host",
    description: "Ouvre une session shell sécurisée sur un serveur distant.",
    example: "ssh ubuntu@1.2.3.4 pour se connecter à une VM cloud."
  },
  {
    id: "linux-scp",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "transfer",
    label: "Copier un fichier via SSH (scp)",
    command: "scp fichier.txt user@host:/chemin/distant/",
    description: "Transfère un fichier local vers un serveur distant via SSH.",
    example: "scp app.jar ubuntu@1.2.3.4:/opt/app/ pour déployer un jar."
  },
  {
    id: "linux-rsync",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "transfer",
    label: "Synchroniser des dossiers (rsync)",
    command: "rsync -avz /src/ user@host:/dst/",
    description: "Synchronise un répertoire local avec un répertoire distant (avec compression).",
    example: "rsync -avz /var/www/ ubuntu@1.2.3.4:/backup/www/ pour faire un backup distant."
  },
  {
    id: "linux-ssh-keygen",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "ssh",
    label: "Générer une clé SSH",
    command: "ssh-keygen -t ed25519 -C \"mon_email@example.com\"",
    description: "Crée une paire de clés SSH pour l'authentification sans mot de passe.",
    example: "Accepte le chemin par défaut (~/.ssh/id_ed25519) puis ajoute la clé publique sur GitHub/serveur."
  },
  {
    id: "linux-ssh-copy-id",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "ssh",
    label: "Copier la clé publique sur un serveur",
    command: "ssh-copy-id user@host",
    description: "Installe ta clé publique sur un serveur pour te connecter sans mot de passe.",
    example: "ssh-copy-id ubuntu@1.2.3.4 puis teste 'ssh ubuntu@1.2.3.4' sans mot de passe."
  },

  // --- COMPRESSION / ARCHIVES ---
  {
    id: "linux-tar-gz",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "archive",
    label: "Créer une archive tar.gz",
    command: "tar -czf archive.tar.gz dossier/",
    description: "Crée une archive compressée du dossier.",
    example: "tar -czf logs.tar.gz /var/log pour compresser les logs avant envoi."
  },
  {
    id: "linux-tar-extract",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "archive",
    label: "Extraire une archive tar.gz",
    command: "tar -xzf archive.tar.gz",
    description: "Extrait le contenu d'une archive tar.gz dans le répertoire courant.",
    example: "Utile pour extraire des backups ou des releases d'application."
  },

  // --- PERMISSIONS / UTILISATEURS ---
  {
    id: "linux-chmod-exec",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "permissions",
    label: "Rendre un script exécutable",
    command: "chmod +x script.sh",
    description: "Ajoute le droit d'exécution sur un script.",
    example: "Exécute chmod +x puis ./script.sh pour lancer le script."
  },
  {
    id: "linux-chown-recursive",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "permissions",
    label: "Changer propriétaire d'un dossier (récursif)",
    command: "sudo chown -R user:group /chemin/vers/dossier",
    description: "Change le propriétaire et le groupe d'un dossier et de son contenu.",
    example: "chown -R appuser:appgroup /opt/app pour corriger les permissions d'une app."
  },
  {
    id: "linux-useradd",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "users",
    label: "Créer un nouvel utilisateur",
    command: "sudo useradd -m -s /bin/bash monuser",
    description: "Crée un utilisateur avec un home et un shell bash.",
    example: "Complète avec 'sudo passwd monuser' pour définir son mot de passe."
  },

  // --- SERVICES / PROCESS / MONITORING ---
  {
    id: "linux-systemctl-status",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "services",
    label: "Vérifier l'état d'un service systemd",
    command: "sudo systemctl status nom-du-service",
    description: "Affiche l'état détaillé d'un service géré par systemd.",
    example: "sudo systemctl status nginx pour vérifier si Nginx est actif."
  },
  {
    id: "linux-systemctl-restart",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "services",
    label: "Redémarrer un service systemd",
    command: "sudo systemctl restart nom-du-service",
    description: "Redémarre proprement un service.",
    example: "sudo systemctl restart myapp pour redémarrer une application backend."
  },
  {
    id: "linux-ps-aux",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "process",
    label: "Lister tous les processus",
    command: "ps aux",
    description: "Affiche la liste complète des processus en cours.",
    example: "Filtre avec ps aux | grep java pour repérer un process Java particulier."
  },
  {
    id: "linux-top",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "monitoring",
    label: "Surveiller CPU/mémoire (top)",
    command: "top",
    description: "Affiche les processus triés par consommation de ressources.",
    example: "Observe les processus qui consomment le plus pendant un test de charge."
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
    example: "Compare la mémoire avant/après lancement d'un service lourd."
  },
  {
    id: "linux-df-h",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "monitoring",
    label: "Vérifier l'espace disque",
    command: "df -h",
    description: "Affiche l'utilisation des systèmes de fichiers en unités lisibles.",
    example: "Repère un filesystem à 100% qui bloque les écritures."
  },
  {
    id: "linux-uptime",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "monitoring",
    label: "Voir depuis combien de temps la machine tourne",
    command: "uptime",
    description: "Affiche le temps depuis le dernier reboot et la charge moyenne.",
    example: "Permet de voir rapidement si une machine vient de redémarrer."
  },

  // --- PLANIFICATION / CONFIG / UTIL ---
  {
    id: "linux-crontab-edit",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "schedule",
    label: "Éditer la crontab courante",
    command: "crontab -e",
    description: "Ouvre l'éditeur pour planifier des tâches récurrentes.",
    example: "Ajoute une ligne '0 3 * * * /usr/local/bin/backup.sh' pour un backup quotidien à 3h."
  },
  {
    id: "linux-hostnamectl",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "config",
    label: "Changer le hostname de la machine",
    command: "sudo hostnamectl set-hostname nouveau-nom",
    description: "Modifie le nom d'hôte de la machine.",
    example: "Utilisé lors de la configuration initiale d'une VM ou d'un serveur."
  },
  {
    id: "linux-sysctl-net-forward",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "network",
    label: "Activer le routage IP",
    command: "sudo sysctl -w net.ipv4.ip_forward=1",
    description: "Active le forwarding IP (utile pour des gateways, VPN, etc.).",
    example: "Après modification, vérifie la valeur avec 'sysctl net.ipv4.ip_forward'."
  },

  // --- HTTP / JSON / ENV ---
  {
    id: "linux-curl-healthcheck",
    framework: "Linux",
    env: "HTTP",
    os: "linux",
    category: "http",
    label: "Tester un endpoint HTTP (healthcheck)",
    command: "curl -v http://localhost:8080/actuator/health",
    description: "Envoie une requête HTTP détaillée vers un endpoint de santé.",
    example: "Utile pour tester la santé d'un service Spring Boot en local ou sur un pod."
  },
  {
    id: "linux-wget-download",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "http",
    label: "Télécharger un fichier (wget)",
    command: "wget https://exemple.com/fichier.tar.gz",
    description: "Télécharge un fichier depuis une URL.",
    example: "wget https://download.example.com/app.tar.gz pour récupérer un package."
  },
  {
    id: "linux-jq-pretty-json",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "json",
    label: "Formater un JSON en sortie (jq)",
    command: "curl -s http://localhost:8080/actuator/health | jq '.'",
    description: "Utilise jq pour afficher joliment une réponse JSON.",
    example: "Très pratique pour analyser des payloads d'API en ligne de commande."
  },
  {
    id: "linux-env-grep",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "env",
    label: "Lister les variables d'env contenant un motif",
    command: "env | grep MOTIF",
    description: "Affiche les variables d'environnement dont le nom ou la valeur contient MOTIF.",
    example: "env | grep JAVA pour voir les variables liées au JDK."
  },
  {
    id: "linux-export-var",
    framework: "Linux",
    env: "CLI",
    os: "linux",
    category: "env",
    label: "Définir une variable d'environnement",
    command: "export MY_VAR=valeur",
    description: "Définit une variable d'environnement pour la session en cours.",
    example: "export SPRING_PROFILES_ACTIVE=dev avant de lancer une app Spring Boot."
  }
];
