// commands/docker.js
export const dockerCommands = [
  {
    id: "docker-build-image",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "build",
    label: "Construire l'image Docker de l'application",
    command: "docker build -t mon-app:latest .",
    description: "Construit une image Docker à partir du Dockerfile courant.",
    example: "Place-toi dans le dossier du Dockerfile et exécute la commande, puis 'docker images | grep mon-app'."
  },
  {
    id: "docker-run-app",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Lancer le container Spring Boot",
    command: "docker run --rm -p 8080:8080 mon-app:latest",
    description: "Lance le container en exposant le port 8080 sur la machine hôte.",
    example: "Après build, exécute la commande et teste http://localhost:8080."
  },
  {
    id: "docker-ps",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "inspect",
    label: "Lister les containers en cours",
    command: "docker ps",
    description: "Liste les containers Docker actifs.",
    example: "Lance plusieurs containers puis exécute 'docker ps' pour les voir."
  },
  {
    id: "docker-ps-all",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "inspect",
    label: "Lister tous les containers (y compris arrêtés)",
    command: "docker ps -a",
    description: "Affiche tous les containers, même ceux qui sont stoppés.",
    example: "Après avoir stoppé un container, vérifie qu'il apparaît dans la liste."
  },
  {
    id: "docker-logs-follow",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "logs",
    label: "Suivre les logs d'un container",
    command: "docker logs -f <container_id>",
    description: "Affiche les logs en temps réel pour un container donné.",
    example: "Remplace <container_id> par un ID réel et génère des requêtes sur l'app pour voir les logs."
  },
  {
    id: "docker-exec-bash",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "debug",
    label: "Entrer dans un container (bash)",
    command: "docker exec -it <container_id> /bin/bash",
    description: "Ouvre un shell bash à l'intérieur du container.",
    example: "Sur un container Linux, exécute la commande et explore /app, /etc, etc."
  },
  {
    id: "docker-stop-container",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Arrêter un container",
    command: "docker stop <container_id>",
    description: "Arrête proprement un container donné.",
    example: "Arrête un container en cours, puis vérifie qu'il disparaît de 'docker ps'."
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
    example: "Après l'avoir stoppé, supprime-le puis vérifie 'docker ps -a'."
  },
  {
    id: "docker-rmi-image",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Supprimer une image",
    command: "docker rmi mon-app:latest",
    description: "Supprime l'image Docker mon-app:latest.",
    example: "Supprime l'image puis vérifie qu'elle n'apparaît plus dans 'docker images'."
  },
  {
    id: "docker-system-prune",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "cleanup",
    label: "Nettoyer les ressources Docker inutilisées",
    command: "docker system prune -f",
    description: "Supprime les containers, images, réseaux et cache inutilisés.",
    example: "Après plusieurs tests, exécute la commande puis 'docker system df' pour voir l'espace libéré."
  },
  {
    id: "docker-compose-up",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "compose",
    label: "Lancer un stack docker-compose",
    command: "docker compose up -d",
    description: "Lance les services définis dans docker-compose.yml en arrière-plan.",
    example: "Dans un projet avec docker-compose.yml, exécute la commande puis 'docker ps' pour voir les services."
  },
  {
    id: "docker-compose-down",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "compose",
    label: "Arrêter et supprimer les services docker-compose",
    command: "docker compose down",
    description: "Arrête les services et supprime les ressources créées par docker-compose up.",
    example: "Exécute après les tests pour nettoyer tous les containers du stack."
  },
  {
    id: "docker-inspect-container",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "inspect",
    label: "Inspecter un container",
    command: "docker inspect <container_id>",
    description: "Affiche les détails techniques d'un container (IP, volumes, env...).",
    example: "Inspecte un container et repère son adresse IP interne et ses variables d'env."
  },
  {
    id: "docker-top",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "debug",
    label: "Voir les processus dans un container",
    command: "docker top <container_id>",
    description: "Liste les processus en cours d'exécution dans un container.",
    example: "Vérifie quel process tourne réellement dans ton container applicatif."
  },
  {
    id: "docker-login-registry",
    framework: "Docker",
    env: "CLI",
    os: "all",
    category: "registry",
    label: "Se connecter à un registre Docker",
    command: "docker login <registry-url>",
    description: "Authentifie l'utilisateur auprès d'un registre Docker privé.",
    example: "Exécute 'docker login registry.gitlab.com' pour pouvoir pousser/puller des images privées."
  }
];
4.4. commands/
