// commands/java_spring.js
export const javaSpringCommands = [
  {
    id: "mvn-clean-verify",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "build",
    label: "Build complet avec tests",
    command: "mvn clean verify",
    description: "Nettoie le projet, compile et exécute tous les tests.",
    example: "À la racine d'un projet Maven, exécute cette commande et vérifie 'BUILD SUCCESS'."
  },
  {
    id: "mvn-package-skip-tests",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "build",
    label: "Build jar rapide (sans tests)",
    command: "mvn clean package -DskipTests",
    description: "Génère un jar exécutable sans lancer les tests pour accélérer le build.",
    example: "Vérifie la présence du jar dans target/ puis lance 'java -jar target/mon-app.jar'."
  },
  {
    id: "spring-boot-run",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Lancer l'application Spring Boot (dev)",
    command: "mvn spring-boot:run",
    description: "Lance l'application en mode développement via Maven.",
    example: "Exécute la commande puis teste http://localhost:8080."
  },
  {
    id: "spring-boot-run-profile",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Lancer Spring Boot avec un profil",
    command: "mvn spring-boot:run -Dspring-boot.run.profiles=dev",
    description: "Démarre l'application avec le profil Spring 'dev'.",
    example: "Définis un message spécifique dans application-dev.yml et vérifie qu'il est utilisé."
  },
  {
    id: "spring-boot-jar-run",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Lancer l'application depuis le jar",
    command: "java -jar target/mon-app.jar",
    description: "Lance le jar Spring Boot déjà buildé.",
    example: "Après un 'mvn package', exécute cette commande et vérifie que l'app démarre."
  },
  {
    id: "mvn-test-single-class",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "test",
    label: "Lancer une classe de test spécifique",
    command: "mvn -Dtest=NomDeMaClasseDeTest test",
    description: "Exécute une seule classe de test JUnit.",
    example: "Remplace NomDeMaClasseDeTest par une vraie classe et vérifie que seul ce test est exécuté."
  },
  {
    id: "mvn-test-single-method",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "test",
    label: "Lancer une méthode de test spécifique",
    command: "mvn -Dtest=NomDeMaClasseDeTest#maMethodeDeTest test",
    description: "Exécute une seule méthode de test dans une classe JUnit.",
    example: "NomDeMaClasseDeTest#maMethodeDeTest → vérifie que seul ce test est lancé."
  },
  {
    id: "mvn-dependency-tree",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "debug",
    label: "Afficher l'arbre des dépendances Maven",
    command: "mvn dependency:tree",
    description: "Affiche l'arbre des dépendances pour détecter les conflits.",
    example: "Utilise cette commande quand tu as un NoSuchMethodError pour repérer un conflit de version."
  },
  {
    id: "mvn-dependency-updates",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "maintenance",
    label: "Lister les mises à jour de dépendances",
    command: "mvn versions:display-dependency-updates",
    description: "Affiche les versions plus récentes disponibles pour les dépendances Maven.",
    example: "Exécute la commande pour voir quelles libs peuvent être mises à jour (plugin versions-maven-plugin requis)."
  },
  {
    id: "spring-actuator-health",
    framework: "Java / Spring Boot",
    env: "HTTP",
    os: "all",
    category: "monitoring",
    label: "Vérifier la santé de l'application (Actuator)",
    command: "curl http://localhost:8080/actuator/health",
    description: "Interroge l'endpoint Actuator /health.",
    example: "Active Actuator, lance l'app, exécute la commande et vérifie le JSON retourné."
  },
  {
    id: "spring-h2-console",
    framework: "Java / Spring Boot",
    env: "HTTP",
    os: "all",
    category: "db",
    label: "Accéder à la console H2",
    command: "http://localhost:8080/h2-console",
    description: "URL de la console H2 embarquée (si activée).",
    example: "Active H2 et la console dans application.yml, puis ouvre l'URL dans le navigateur."
  },
  {
    id: "spring-log-level-debug",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "logs",
    label: "Lancer Spring Boot en mode debug log",
    command: "mvn spring-boot:run -Dspring-boot.run.arguments=--logging.level.root=DEBUG",
    description: "Augmente le niveau de log global à DEBUG au démarrage.",
    example: "Observe que les logs détaillés de Spring s'affichent dès le start."
  },
  {
    id: "spring-jpa-show-sql",
    framework: "Java / Spring Boot",
    env: "config",
    os: "all",
    category: "db",
    label: "Afficher les requêtes SQL générées (JPA)",
    command: "spring.jpa.show-sql=true",
    description: "Propriété Spring à placer dans application.yml/properties pour logguer les requêtes SQL.",
    example: "Ajoute la propriété, redémarre l'app et observe les requêtes SQL dans les logs."
  },
  {
    id: "spring-flyway-migrate",
    framework: "Java / Spring Boot",
    env: "CLI",
    os: "all",
    category: "db",
    label: "Lancer les migrations Flyway",
    command: "mvn flyway:migrate",
    description: "Exécute les migrations Flyway configurées dans le projet.",
    example: "Ajoute un script dans src/main/resources/db/migration, exécute la commande et vérifie la migration appliquée."
  },
  {
    id: "spring-openapi-ui",
    framework: "Java / Spring Boot",
    env: "HTTP",
    os: "all",
    category: "api",
    label: "Accéder à la documentation OpenAPI/Swagger",
    command: "http://localhost:8080/swagger-ui/index.html",
    description: "URL standard de Swagger UI (selon lib utilisée).",
    example: "Ajoute springdoc-openapi-ui, démarre l'app et ouvre l'URL pour voir la doc des endpoints."
  }
];
