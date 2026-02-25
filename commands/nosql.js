// commands/nosql.js
export const nosqlCommands = [
  // --- MongoDB (shell mongosh) ---
  {
    id: "mongo-show-dbs",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "info",
    label: "Lister les bases MongoDB",
    command: "show dbs",
    description: "Affiche la liste des bases de données MongoDB.",
    example: "Utile pour vérifier les bases présentes sur une instance."
  },
  {
    id: "mongo-use-db",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "info",
    label: "Sélectionner une base",
    command: "use mydb",
    description: "Bascule sur la base mydb dans le shell MongoDB.",
    example: "Toujours exécuter use avant des opérations sur les collections."
  },
  {
    id: "mongo-show-collections",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "info",
    label: "Lister les collections",
    command: "show collections",
    description: "Affiche les collections de la base courante.",
    example: "Permet de voir les collections disponibles dans mydb."
  },
  {
    id: "mongo-find-basic",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "query",
    label: "Trouver des documents (find)",
    command: "db.users.find({ active: true })",
    description: "Recherche les documents de la collection users avec active=true.",
    example: "Ajoute .limit(10) pour limiter le nombre de documents retournés."
  },
  {
    id: "mongo-find-projection",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "query",
    label: "Find avec projection",
    command: "db.users.find({ active: true }, { name: 1, email: 1, _id: 0 })",
    description: "Retourne uniquement les champs name et email, sans _id.",
    example: "Permet d'optimiser la quantité de données renvoyées au client."
  },
  {
    id: "mongo-insert-one",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "dml",
    label: "Insérer un document",
    command: "db.users.insertOne({ name: 'John', email: 'john@example.com', active: true })",
    description: "Ajoute un document à la collection users.",
    example: "Vérifie l'insertion avec db.users.find({ email: 'john@example.com' })."
  },
  {
    id: "mongo-update-one",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "dml",
    label: "Mettre à jour un document",
    command: "db.users.updateOne({ email: 'john@example.com' }, { $set: { active: false } })",
    description: "Met à jour le champ active d'un utilisateur.",
    example: "Contrôle le résultat avec db.users.find({ email: 'john@example.com' })."
  },
  {
    id: "mongo-delete-many",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "dml",
    label: "Supprimer plusieurs documents",
    command: "db.sessions.deleteMany({ expiresAt: { $lt: new Date() } })",
    description: "Supprime toutes les sessions expirées.",
    example: "Utile pour faire le ménage dans les collections de sessions."
  },
  {
    id: "mongo-create-index",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "index",
    label: "Créer un index simple",
    command: "db.users.createIndex({ email: 1 }, { unique: true })",
    description: "Crée un index unique sur le champ email.",
    example: "Améliore les recherches par email et empêche les doublons."
  },
  {
    id: "mongo-explain-query",
    framework: "MongoDB",
    env: "DB",
    os: "all",
    category: "explain",
    label: "Analyser un plan de requête (explain)",
    command: "db.orders.find({ userId: 123 }).explain('executionStats')",
    description: "Affiche le plan d'exécution et les stats de la requête find.",
    example: "Permet de vérifier que les index sont bien utilisés."
  },

  // --- Redis (CLI redis-cli) ---
  {
    id: "redis-ping",
    framework: "Redis",
    env: "DB",
    os: "all",
    category: "info",
    label: "Tester la connexion Redis",
    command: "PING",
    description: "Vérifie que le serveur Redis répond (retourne PONG).",
    example: "Utile pour tester rapidement la connectivité et l'authentification."
  },
  {
    id: "redis-set-get",
    framework: "Redis",
    env: "DB",
    os: "all",
    category: "kv",
    label: "Écrire et lire une clé simple",
    command: "SET mykey \"hello\"; GET mykey;",
    description: "SET enregistre une valeur, GET la lit.",
    example: "Permet de tester la latence et le comportement de base du cache."
  },
  {
    id: "redis-setex",
    framework: "Redis",
    env: "DB",
    os: "all",
    category: "kv",
    label: "Set avec expiration (SETEX)",
    command: "SETEX session:123 3600 \"data\"",
    description: "Stocke une clé avec une durée de vie de 3600 secondes.",
    example: "Parfait pour gérer des sessions ou des tokens temporaires."
  },
  {
    id: "redis-incr",
    framework: "Redis",
    env: "DB",
    os: "all",
    category: "kv",
    label: "Incrémenter un compteur",
    command: "INCR page:home:views",
    description: "Incrémente de 1 la valeur d'une clé (ou l'initialise à 1).",
    example: "Utile pour compter les vues de pages ou des events simples."
  },
  {
    id: "redis-keys-pattern",
    framework: "Redis",
    env: "DB",
    os: "all",
    category: "maintenance",
    label: "Lister des clés par motif (ATTENTION en prod)",
    command: "KEYS session:*",
    description: "Retourne toutes les clés qui matchent le motif (opération O(N)).",
    example: "À éviter en prod sur de grands keyspaces, préférer SCAN."
  },
  {
    id: "redis-scan",
    framework: "Redis",
    env: "DB",
    os: "all",
    category: "maintenance",
    label: "Parcourir les clés de manière incrémentale (SCAN)",
    command: "SCAN 0 MATCH session:* COUNT 100",
    description: "Parcours incrémental des clés matching le motif, moins bloquant que KEYS.",
    example: "À utiliser dans un script pour traiter des lots de clés progressivement."
  },

  // --- Elasticsearch (curl + JSON) ---
  {
    id: "es-cat-indices",
    framework: "Elasticsearch",
    env: "HTTP",
    os: "all",
    category: "info",
    label: "Lister les index Elasticsearch",
    command: "curl -s 'http://localhost:9200/_cat/indices?v'",
    description: "Affiche la liste des index avec leur statut, docs count, taille, etc.",
    example: "Permet de vérifier les index existants et leur santé."
  },
  {
    id: "es-search-basic",
    framework: "Elasticsearch",
    env: "HTTP",
    os: "all",
    category: "query",
    label: "Recherche simple dans un index",
    command: "curl -s 'http://localhost:9200/my-index/_search?q=message:error&size=10'",
    description: "Recherche les documents contenant 'error' dans le champ message.",
    example: "Utile pour des recherches rapides dans des logs indexés."
  },
  {
    id: "es-search-dsl",
    framework: "Elasticsearch",
    env: "HTTP",
    os: "all",
    category: "query",
    label: "Recherche DSL JSON",
    command: "curl -s -X POST 'http://localhost:9200/my-index/_search' \\\n -H 'Content-Type: application/json' \\\n -d '{ \"query\": { \"match\": { \"message\": \"timeout\" } } }'",
    description: "Recherche DSL plus riche, ici un match sur le champ message.",
    example: "Permet d'écrire des requêtes booléennes / filtrées complexes."
  },
  {
    id: "es-index-document",
    framework: "Elasticsearch",
    env: "HTTP",
    os: "all",
    category: "dml",
    label: "Indexer un document",
    command: "curl -s -X POST 'http://localhost:9200/my-index/_doc' \\\n -H 'Content-Type: application/json' \\\n -d '{ \"user\": \"john\", \"message\": \"login success\" }'",
    description: "Indexe un nouveau document dans my-index.",
    example: "Vérifie l'indexation avec un _search sur user:john."
  },
  {
    id: "es-delete-by-query",
    framework: "Elasticsearch",
    env: "HTTP",
    os: "all",
    category: "maintenance",
    label: "Supprimer des documents par requête",
    command: "curl -s -X POST 'http://localhost:9200/my-index/_delete_by_query' \\\n -H 'Content-Type: application/json' \\\n -d '{ \"query\": { \"range\": { \"@timestamp\": { \"lt\": \"now-30d\" } } } }'",
    description: "Supprime les documents plus vieux que 30 jours (selon @timestamp).",
    example: "Très utilisé pour le nettoyage de logs dans Elasticsearch."
  }
];
