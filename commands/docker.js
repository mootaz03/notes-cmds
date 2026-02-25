// commands/docker.js
export const dockerCommands = [
  // --- INFO GÉNÉRALE / DIAGNOSTIC ---
  {
    id: "docker-version",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "info",
    label: "Afficher la version Docker",
    command: "docker version",
    description: "Affiche les versions du client et du daemon Docker.",
    example: "Utile pour vérifier la compatibilité avec certaines features (compose v2, buildx, etc.)."
  },
  {
    id: "docker-info",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "info",
    label: "Informations globales sur le daemon",
    command: "docker info",
    description: "Affiche la config du daemon, nombre d'images, de containers, version du kernel, etc.",
    example: "À lancer sur un host pour voir la config de stockage (overlay2, etc.) et les limites."
  },

  // --- CONTAINERS : LISTE / ÉTAT ---
  {
    id: "docker-ps",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "inspect",
    label: "Lister les containers en cours",
    command: "docker ps",
    description: "Liste les containers actuellement en cours d'exécution.",
    example: "Permet de vérifier si ton container applicatif est bien démarré."
  },
  {
    id: "docker-ps-all",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "inspect",
    label: "Lister tous les containers (y compris arrêtés)",
    command: "docker ps -a",
    description: "Affiche les containers en cours et stoppés, avec leur code de sortie.",
    example: "Très utile pour diagnostiquer un container qui a crashé (Exit 1, etc.)."
  },
  {
    id: "docker-logs",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "logs",
    label: "Voir les logs d'un container",
    command: "docker logs <container_id>",
    description: "Affiche les logs du container (stdout/stderr).",
    example: "Remplace <container_id> par l'ID ou le nom et vérifie les stacktraces d'une app en erreur."
  },
  {
    id: "docker-logs-follow",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "logs",
    label: "Suivre les logs en temps réel",
    command: "docker logs -f <container_id>",
    description: "Affiche en continu les logs d'un container (mode follow).",
    example: "Très utilisé en prod pour surveiller un déploiement ou reproduire un bug."
  },
  {
    id: "docker-top",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "debug",
    label: "Voir les processus dans un container",
    command: "docker top <container_id>",
    description: "Liste les processus en cours d'exécution dans le container.",
    example: "Permet de vérifier le process principal (java, node, nginx...) et ses sous-process."
  },
  {
    id: "docker-stats",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "monitoring",
    label: "Monitoring CPU/mémoire des containers",
    command: "docker stats",
    description: "Affiche l'utilisation CPU, mémoire, réseau et I/O pour chaque container.",
    example: "Utile pour voir quel container consomme le plus pendant un test de charge."
  },

  // --- IMAGES : LISTE / BUILD / PULL / PUSH ---
  {
    id: "docker-images",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "images",
    label: "Lister les images Docker locales",
    command: "docker images",
    description: "Affiche les images présentes localement avec leur taille et tags.",
    example: "Permet de repérer les images obsolètes ou très volumineuses."
  },
  {
    id: "docker-pull-image",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "images",
    label: "Télécharger une image depuis un registre",
    command: "docker pull nginx:latest",
    description: "Télécharge l'image nginx:latest depuis Docker Hub (ou un autre registre).",
    example: "docker pull alpine:3.18 pour récupérer une petite image de base Alpine."
  },
  {
    id: "docker-build-image",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "build",
    label: "Construire une image Docker",
    command: "docker build -t mon-app:latest .",
    description: "Construit une image Docker à partir du Dockerfile courant.",
    example: "Place-toi dans le dossier du Dockerfile puis lance la commande, vérifie avec 'docker images'."
  },
  {
    id: "docker-build-no-cache",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "build",
    label: "Construire une image sans cache",
    command: "docker build --no-cache -t mon-app:clean .",
    description: "Construit une image sans réutiliser les couches de cache.",
    example: "Utile pour s'assurer qu'aucune couche obsolète n'est réutilisée (problèmes de build)."
  },
  {
    id: "docker-tag",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "images",
    label: "Tagger une image",
    command: "docker tag mon-app:latest registry.example.com/mon-app:1.0.0",
    description: "Applique un nouveau tag (souvent pour un registre privé ou une version).",
    example: "Tagge l'image locale avant de la pousser dans un registre distant."
  },
  {
    id: "docker-push",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "registry",
    label: "Pousser une image vers un registre",
    command: "docker push registry.example.com/mon-app:1.0.0",
    description: "Envoie l'image taggée vers le registre spécifié.",
    example: "Après un tag, exécute cette commande pour publier l'image en vue du déploiement."
  },
  {
    id: "docker-login",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "registry",
    label: "Se connecter à un registre Docker",
    command: "docker login registry.example.com",
    description: "Authentifie l'utilisateur auprès d'un registre privé.",
    example: "Exécute avant un docker pull/push sur un registre nécessitant un login."
  },
  {
    id: "docker-save",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "images",
    label: "Exporter une image dans un tar",
    command: "docker save -o mon-app.tar mon-app:latest",
    description: "Sauvegarde une image dans un fichier tar, pour transfert offline.",
    example: "Très utile pour déplacer une image entre deux environnements isolés sans registre."
  },
  {
    id: "docker-load",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "images",
    label: "Importer une image depuis un tar",
    command: "docker load -i mon-app.tar",
    description: "Charge une image Docker depuis un fichier tar créé avec docker save.",
    example: "Sur un autre host, exécute docker load -i mon-app.tar pour restaurer l'image."
  },
  {
    id: "docker-inspect-image",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "images",
    label: "Inspecter une image",
    command: "docker inspect mon-app:latest",
    description: "Affiche les métadonnées détaillées d'une image (config, layers, env, etc.).",
    example: "Utile pour vérifier les variables d'environnement ou le CMD par défaut."
  },

  // --- RUN / STOP / EXEC ---
  {
    id: "docker-run-simple",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Lancer un container interactif (shell)",
    command: "docker run -it --rm alpine:3.18 /bin/sh",
    description: "Lance un container Alpine interactif puis supprime le container à la sortie.",
    example: "Pratique pour des tests rapides dans un environnement isolé."
  },
  {
    id: "docker-run-detached-port",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Lancer un container en arrière-plan avec port exposé",
    command: "docker run -d -p 8080:8080 mon-app:latest",
    description: "Lance mon-app:latest en détaché, exposée sur le port 8080 de la machine hôte.",
    example: "Accède ensuite à http://localhost:8080 pour tester l'application."
  },
  {
    id: "docker-run-env",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Passer des variables d'environnement",
    command: "docker run -d -p 8080:8080 -e SPRING_PROFILES_ACTIVE=prod mon-app:latest",
    description: "Démarre un container en définissant des variables d'environnement.",
    example: "Permet d'activer un profil Spring Boot prod sans reconfigurer l'image."
  },
  {
    id: "docker-run-volume",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Monter un volume",
    command: "docker run -d -p 8080:8080 -v /host/logs:/app/logs mon-app:latest",
    description: "Monte un dossier local dans le container pour persister les logs ou données.",
    example: "Permet de récupérer les logs d'application directement sur le host."
  },
  {
    id: "docker-run-limit-memory",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Limiter la mémoire d'un container",
    command: "docker run -d -m 512m --memory-swap=512m mon-app:latest",
    description: "Démarre un container avec 512 Mo de RAM max (pas de swap).",
    example: "Utile pour tester le comportement de l'app avec une mémoire limitée."
  },
  {
    id: "docker-run-restart-always",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Redémarrage automatique du container",
    command: "docker run -d --restart=always mon-app:latest",
    description: "Configure Docker pour redémarrer automatiquement le container s'il crash ou au reboot.",
    example: "Utile pour des petits services sans orchestrateur (attention aux crash loops)."
  },
  {
    id: "docker-stop-container",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Arrêter un container",
    command: "docker stop <container_id>",
    description: "Envoie un SIGTERM puis SIGKILL après timeout pour arrêter le container.",
    example: "Arrête proprement l'application avant de déployer une nouvelle version."
  },
  {
    id: "docker-start-container",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Démarrer un container arrêté",
    command: "docker start <container_id>",
    description: "Redémarre un container qui a été stoppé.",
    example: "Relance un container de base de données stoppé pour maintenance."
  },
  {
    id: "docker-restart-container",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Redémarrer un container",
    command: "docker restart <container_id>",
    description: "Stoppe puis redémarre un container en une seule commande.",
    example: "Utilisé après modification de variables d'environnement via docker update (dans certains cas)."
  },
  {
    id: "docker-rm-container",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Supprimer un container stoppé",
    command: "docker rm <container_id>",
    description: "Supprime un container qui n'est plus en cours d'exécution.",
    example: "Après arrêt, supprime les containers pour garder un environnement propre."
  },
  {
    id: "docker-rm-container-force",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Supprimer un container (force)",
    command: "docker rm -f <container_id>",
    description: "Stoppe et supprime un container en cours d'exécution.",
    example: "À utiliser avec prudence sur des environnements de prod."
  },
  {
    id: "docker-exec-bash",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "debug",
    label: "Entrer dans un container (bash)",
    command: "docker exec -it <container_id> /bin/bash",
    description: "Ouvre un shell bash dans un container en cours.",
    example: "Très utilisé pour debugger une app ou inspecter le filesystem d'un container."
  },
  {
    id: "docker-exec-sh",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "debug",
    label: "Entrer dans un container (sh)",
    command: "docker exec -it <container_id> /bin/sh",
    description: "Ouvre un shell sh, utile pour les images Alpine qui n'ont pas bash.",
    example: "docker exec -it <id_alpine> /bin/sh pour inspecter un container Alpine."
  },
  {
    id: "docker-inspect-container",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "inspect",
    label: "Inspecter un container",
    command: "docker inspect <container_id>",
    description: "Affiche les détails complets d'un container (config, IP, volumes...).",
    example: "Utile pour retrouver l'adresse IP interne d'un container ou ses labels."
  },
  {
    id: "docker-port",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "inspect",
    label: "Lister les ports mappés d'un container",
    command: "docker port <container_id>",
    description: "Affiche les ports exposés du container et leur mapping sur le host.",
    example: "Permet de vérifier quels ports sont réellement exposés pour une app."
  },
  {
    id: "docker-cp",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "files",
    label: "Copier un fichier vers/depuis un container",
    command: "docker cp fichier.txt <container_id>:/tmp/",
    description: "Copie un fichier local dans un container (ou inversement).",
    example: "docker cp my.conf <container_id>:/etc/app/ pour tester une config sans rebuild l'image."
  },

  // --- NETWORKS / VOLUMES ---
  {
    id: "docker-network-list",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "network",
    label: "Lister les réseaux Docker",
    command: "docker network ls",
    description: "Affiche tous les réseaux Docker (bridge, host, overlay...).",
    example: "Permet de voir les networks créés par compose ou manuellement."
  },
  {
    id: "docker-network-create",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "network",
    label: "Créer un réseau bridge",
    command: "docker network create mon-reseau",
    description: "Crée un réseau custom pour isoler un ensemble de containers.",
    example: "Attach les containers d'un même projet sur ce réseau pour qu'ils se résolvent par nom."
  },
  {
    id: "docker-network-connect",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "network",
    label: "Connecter un container à un réseau",
    command: "docker network connect mon-reseau <container_id>",
    description: "Ajoute un container existant à un réseau Docker.",
    example: "Permet de connecter un container à plusieurs réseaux."
  },
  {
    id: "docker-volume-list",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "volumes",
    label: "Lister les volumes Docker",
    command: "docker volume ls",
    description: "Affiche les volumes Docker présents sur le host.",
    example: "Permet de repérer les volumes inutilisés qui prennent de la place."
  },
  {
    id: "docker-volume-create",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "volumes",
    label: "Créer un volume",
    command: "docker volume create mon-volume",
    description: "Crée un volume nommé pour persister des données.",
    example: "Utilisé avec -v mon-volume:/var/lib/postgresql/data pour une base persistante."
  },
  {
    id: "docker-volume-inspect",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "volumes",
    label: "Inspecter un volume",
    command: "docker volume inspect mon-volume",
    description: "Affiche les détails d'un volume (chemin sur le host, labels...).",
    example: "Permet de savoir où les données sont réellement stockées sur le filesystem."
  },

  // --- NETTOYAGE / PRUNE ---
  {
    id: "docker-rmi-image",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Supprimer une image",
    command: "docker rmi mon-app:latest",
    description: "Supprime l'image mon-app:latest du host.",
    example: "À utiliser après avoir migré vers une nouvelle version d'image."
  },
  {
    id: "docker-rmi-dangling",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Supprimer les images dangling",
    command: "docker rmi $(docker images -f \"dangling=true\" -q)",
    description: "Supprime les images sans tag (dangling), souvent issues de builds intermédiaires.",
    example: "Libère de la place disque après plusieurs builds."
  },
  {
    id: "docker-system-df",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "monitoring",
    label: "Voir l'utilisation disque Docker",
    command: "docker system df",
    description: "Affiche l'espace disque utilisé par les images, containers, volumes, etc.",
    example: "Permet d'identifier ce qui prend le plus de place avant un prune."
  },
  {
    id: "docker-system-prune",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Nettoyer les ressources Docker inutilisées",
    command: "docker system prune -f",
    description: "Supprime les containers stoppés, les images dangling et les réseaux inutilisés.",
    example: "À lancer régulièrement sur une machine de dev/CI pour éviter de saturer le disque."
  },

  // --- DOCKER COMPOSE (v2) ---
  {
    id: "docker-compose-up",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "compose",
    label: "Lancer un stack docker compose",
    command: "docker compose up -d",
    description: "Lance les services définis dans docker-compose.yml en arrière-plan.",
    example: "Dans un projet avec docker-compose.yml, exécute la commande puis 'docker ps' pour voir les services."
  },
  {
    id: "docker-compose-up-build",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "compose",
    label: "Lancer compose en rebuildant les images",
    command: "docker compose up --build -d",
    description: "Reconstruit les images avant de démarrer les services.",
    example: "À utiliser après modification d'un Dockerfile ou du code de l'app."
  },
  {
    id: "docker-compose-down",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "compose",
    label: "Arrêter et supprimer le stack compose",
    command: "docker compose down",
    description: "Stoppe les services et supprime les containers, réseaux et par défaut garde les volumes.",
    example: "Utilisé après les tests locaux pour nettoyer l'environnement."
  },
  {
    id: "docker-compose-ps",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "compose",
    label: "Lister les services d'un projet compose",
    command: "docker compose ps",
    description: "Affiche l'état des services gérés par docker-compose.yml.",
    example: "Permet de vérifier lesquels sont up, exited, etc."
  },
  {
    id: "docker-compose-logs",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "compose",
    label: "Voir les logs de tous les services compose",
    command: "docker compose logs",
    description: "Affiche les logs de tous les services d'un projet compose.",
    example: "Ajoute -f pour suivre en temps réel : 'docker compose logs -f'."
  },
  {
    id: "docker-compose-scale",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "compose",
    label: "Scaler un service (nombre de replicas)",
    command: "docker compose up -d --scale web=3",
    description: "Démarre 3 instances du service 'web' défini dans docker-compose.yml.",
    example: "Utilisé pour tester le comportement d'une app derrière un load balancer local."
  },

  // --- ÉVÉNEMENTS / DEBUG AVANCÉ ---
  {
    id: "docker-events",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "debug",
    label: "Suivre les événements Docker",
    command: "docker events",
    description: "Affiche en temps réel les événements du daemon (start/stop, pull, etc.).",
    example: "Utile pour comprendre ce qu'il se passe sur un host fortement utilisé."
  }
];
