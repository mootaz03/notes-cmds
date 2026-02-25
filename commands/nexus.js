// commands/nexus.js
export const nexusCommands = [
  // === Infos / health ===
  {
    id: "nexus-health",
    framework: "Nexus",
    env: "HTTP",
    os: "all",
    category: "health",
    label: "Healthcheck Nexus 3",
    command: "curl -u admin:****** http://nexus.example.com/service/rest/v1/status",
    description: "Retourne le statut général de l'instance Nexus.",
    example: "À utiliser dans des checks de supervision ou un script de déploiement."
  },
  {
    id: "nexus-repos-list",
    framework: "Nexus",
    env: "HTTP",
    os: "all",
    category: "repo",
    label: "Lister les repositories",
    command: "curl -u admin:****** http://nexus.example.com/service/rest/v1/repositories",
    description: "Liste tous les repositories configurés (maven, npm, docker...).",
    example: "Filtrer par format: maven2, npm, docker, raw, etc."
  },

  // === Maven (settings.xml) ===
  {
    id: "nexus-maven-settings",
    framework: "Nexus",
    env: "config",
    os: "all",
    category: "maven",
    label: "Exemple de mirror Maven vers Nexus",
    command: "<settings>\n  <mirrors>\n    <mirror>\n      <id>nexus</id>\n      <url>http://nexus.example.com/repository/maven-public/</url>\n      <mirrorOf>*</mirrorOf>\n    </mirror>\n  </mirrors>\n</settings>",
    description: "Configuration Maven pour utiliser Nexus comme mirror central.",
    example: "À insérer dans ~/.m2/settings.xml."
  },
  {
    id: "nexus-maven-release-snapshot",
    framework: "Nexus",
    env: "config",
    os: "all",
    category: "maven",
    label: "DistributionManagement Maven",
    command: "<distributionManagement>\n  <repository>\n    <id>releases</id>\n    <url>http://nexus.example.com/repository/maven-releases/</url>\n  </repository>\n  <snapshotRepository>\n    <id>snapshots</id>\n    <url>http://nexus.example.com/repository/maven-snapshots/</url>\n  </snapshotRepository>\n</distributionManagement>",
    description: "Configure les repositories de déploiement (release/snapshot) vers Nexus.",
    example: "À mettre dans pom.xml pour mvn deploy."
  },

  // === Gradle ===
  {
    id: "nexus-gradle-repo",
    framework: "Nexus",
    env: "config",
    os: "all",
    category: "gradle",
    label: "Configurer Gradle pour Nexus (Kotlin DSL)",
    command: "repositories {\n  maven {\n    url = uri(\"http://nexus.example.com/repository/maven-public/\")\n  }\n}",
    description: "Ajoute Nexus comme repository Maven dans Gradle.",
    example: "À mettre dans build.gradle.kts."
  },

  // === npm / Node ===
  {
    id: "nexus-npm-registry",
    framework: "Nexus",
    env: "config",
    os: "all",
    category: "npm",
    label: "Configurer npm pour Nexus",
    command: "npm config set registry http://nexus.example.com/repository/npm-group/",
    description: "Utilise un repo group npm sur Nexus comme registry par défaut.",
    example: "Vérifie avec npm config list puis npm install."
  },
  {
    id: "nexus-npm-auth-token",
    framework: "Nexus",
    env: "config",
    os: "all",
    category: "npm",
    label: "Authentification npm vers Nexus",
    command: "npm config set //nexus.example.com/repository/npm-group/:_authToken=\"TOKEN\"",
    description: "Configure un token d'auth pour publier sur un registry Nexus.",
    example: "À utiliser dans un .npmrc dédié à la CI/CD."
  },

  // === Docker / registry ===
  {
    id: "nexus-docker-login",
    framework: "Nexus",
    env: "CLI",
    os: "all",
    category: "docker",
    label: "Login Docker sur Nexus",
    command: "docker login nexus.example.com:5000",
    description: "Authentifie Docker sur le registry Nexus.",
    example: "Ensuite, tagge et push tes images vers nexus.example.com:5000/mon-app:tag."
  },
  {
    id: "nexus-docker-tag-push",
    framework: "Nexus",
    env: "CLI",
    os: "all",
    category: "docker",
    label: "Tagger et pousser une image sur Nexus",
    command: "docker tag mon-app:latest nexus.example.com:5000/mon-app:1.0.0\ndocker push nexus.example.com:5000/mon-app:1.0.0",
    description: "Publie une image Docker dans le repository Docker hosté par Nexus.",
    example: "Vérifie ensuite depuis Nexus UI que l'image est bien listée."
  },

  // === REST API (création repo, cleanup policy, etc.) ===
  {
    id: "nexus-create-maven-hosted",
    framework: "Nexus",
    env: "HTTP",
    os: "all",
    category: "api",
    label: "Créer un repo Maven hosted (REST)",
    command: "curl -u admin:****** -X POST \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"name\":\"maven-releases\",\"online\":true,\"storage\":{\"blobStoreName\":\"default\",\"strictContentTypeValidation\":true,\"writePolicy\":\"ALLOW_ONCE\"},\"maven\":{\"versionPolicy\":\"RELEASE\",\"layoutPolicy\":\"STRICT\"}}' \\\n  http://nexus.example.com/service/rest/v1/repositories/maven/hosted",
    description: "Crée un repository Maven hosted pour les releases (Nexus 3).",
    example: "Adapter name et policies selon tes besoins."
  },
  {
    id: "nexus-delete-repo",
    framework: "Nexus",
    env: "HTTP",
    os: "all",
    category: "api",
    label: "Supprimer un repository (REST)",
    command: "curl -u admin:****** -X DELETE http://nexus.example.com/service/rest/v1/repositories/maven-releases",
    description: "Supprime entièrement un repository Nexus (toutes les artefacts).",
    example: "À utiliser uniquement sur des repositories de test."
  },
  {
    id: "nexus-rebuild-maven-metadata",
    framework: "Nexus",
    env: "HTTP",
    os: "all",
    category: "maintenance",
    label: "Reconstruire les metadata Maven",
    command: "curl -u admin:****** -X POST \\\n 'http://nexus.example.com/service/rest/v1/repository/maven/maven-releases/rebuild-index'",
    description: "Reconstruit l'index/metadata d'un repo Maven sur Nexus.",
    example: "À utiliser si les metadata semblent corrompues ou incomplètes."
  },

  // === CLEANUP / TASKS ===
  {
    id: "nexus-list-tasks",
    framework: "Nexus",
    env: "HTTP",
    os: "all",
    category: "maintenance",
    label: "Lister les tâches planifiées",
    command: "curl -u admin:****** http://nexus.example.com/service/rest/v1/tasks",
    description: "Affiche les tâches (cleanup, rebuild index, etc.).",
    example: "Permet de vérifier que les cleanup policies tournent correctement."
  },
  {
    id: "nexus-run-task",
    framework: "Nexus",
    env: "HTTP",
    os: "all",
    category: "maintenance",
    label: "Lancer une tâche manuellement",
    command: "curl -u admin:****** -X POST http://nexus.example.com/service/rest/v1/tasks/<task-id>/run",
    description: "Déclenche immédiatement l'exécution d'une tâche planifiée.",
    example: "Utile pour forcer un cleanup ou un rebuild d'index."
  },

  // === Notes pratiques (formatés comme commandes / snippets) ===
  {
    id: "nexus-note-cleanup-strategy",
    framework: "Nexus",
    env: "note",
    os: "all",
    category: "note",
    label: "Stratégie de nettoyage recommandée",
    command: "Politique : conserver les 5 dernières versions par artefact, supprimer les snapshots > 30 jours.\nConfigurer via Cleanup Policies dans Nexus UI.",
    description: "Bonne pratique pour éviter de saturer le stockage.",
    example: "Adapter les durées selon la criticité des projets."
  },
  {
    id: "nexus-note-backup",
    framework: "Nexus",
    env: "note",
    os: "all",
    category: "note",
    label: "Backup Nexus (approche simple)",
    command: "Sauvegarder régulièrement le blob store + le dossier sonatype-work/nexus3 + config.\nBonne pratique : snapshot VM ou backup FS régulier.",
    description: "Nexus ne gère pas nativement le backup complet, il faut sauvegarder le storage backend.",
    example: "Documenter le processus pour pouvoir restaurer en cas de crash."
  }
];
