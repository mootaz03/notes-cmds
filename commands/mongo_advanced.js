// commands/mongo_advanced.js
export const mongoAdvancedCommands = [
  // === PROFILER / EXPLAIN / DIAGNOSTIC ===
  {
    id: "mongo-profiler-enable-slow",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "profiler",
    label: "Activer le profiler pour les requêtes lentes",
    command: "db.setProfilingLevel(1, { slowms: 100 });",
    description: "Active le profiler pour les requêtes prenant plus de 100 ms.",
    example: "Inspecte les requêtes lentes dans db.system.profile.find()."
  },
  {
    id: "mongo-profiler-disable",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "profiler",
    label: "Désactiver le profiler",
    command: "db.setProfilingLevel(0);",
    description: "Désactive le profiler pour la base courante.",
    example: "À faire une fois l'analyse terminée pour limiter l'overhead."
  },
  {
    id: "mongo-explain-query",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "explain",
    label: "Plan d'exécution détaillé (explain)",
    command: "db.orders.find({ userId: 123 }).explain('executionStats')",
    description: "Affiche le plan et les stats d'exécution (documents scannés, index utilisée...).",
    example: "Vérifie que stage 'IXSCAN' est bien utilisé plutôt que 'COLLSCAN'."
  },
  {
    id: "mongo-explain-aggregate",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "explain",
    label: "Explain sur une pipeline d'aggregation",
    command: "db.orders.aggregate([\n  { $match: { status: 'PAID' } },\n  { $group: { _id: '$userId', total: { $sum: '$total' } } }\n]).explain('executionStats')",
    description: "Affiche le plan d'exécution d'une pipeline d'aggregation.",
    example: "Permet de voir dans quel ordre s'exécutent les stages et quels index sont utilisés."
  },
  {
    id: "mongo-current-op",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "monitoring",
    label: "Lister les opérations en cours",
    command: "db.currentOp({ active: true, secs_running: { $gt: 5 } })",
    description: "Affiche les opérations longues en cours d'exécution.",
    example: "Utile pour identifier les requêtes qui bloquent ou saturent le cluster."
  },

  // === INDEX AVANCÉS (TTL, TEXT, GEO, WILDCARD...) ===
  {
    id: "mongo-index-compound",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Index composé (compound index)",
    command: "db.orders.createIndex({ userId: 1, createdAt: -1 })",
    description: "Index multi-colonnes pour optimiser les requêtes par userId + createdAt.",
    example: "Améliore db.orders.find({ userId: 123 }).sort({ createdAt: -1 }).limit(20)."
  },
  {
    id: "mongo-index-ttl",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Index TTL (expiration automatique)",
    command: "db.sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 })",
    description: "Supprime automatiquement les documents dont expiresAt est passé.",
    example: "Très utile pour nettoyer des sessions, tokens ou logs courts."
  },
  {
    id: "mongo-index-unique",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Index unique",
    command: "db.users.createIndex({ email: 1 }, { unique: true })",
    description: "Garantit l'unicité du champ email et accélère les recherches par email.",
    example: "Essaye d'insérer deux documents avec le même email pour vérifier l'erreur."
  },
  {
    id: "mongo-index-partial",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Index partiel (partial index)",
    command: "db.orders.createIndex(\n  { status: 1, userId: 1 },\n  { partialFilterExpression: { status: 'PAID' } }\n)",
    description: "Index seulement les documents status='PAID', réduit la taille de l'index.",
    example: "Optimise les requêtes fréquentes sur les commandes payées."
  },
  {
    id: "mongo-index-text",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Index texte (full-text search)",
    command: "db.articles.createIndex({ title: 'text', body: 'text' })",
    description: "Permet des recherches full-text sur title et body.",
    example: "Utilise db.articles.find({ $text: { $search: 'mongodb performance' } })."
  },
  {
    id: "mongo-index-geo2d-sphere",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Index géospatial 2dsphere",
    command: "db.places.createIndex({ location: '2dsphere' })",
    description: "Index pour requêtes géospatiales sur des coordonnées GeoJSON.",
    example: "Permet db.places.find({ location: { $near: { $geometry: {...}, $maxDistance: 1000 } } });"
  },
  {
    id: "mongo-index-wildcard",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Wildcard index",
    command: "db.config.createIndex({ 'settings.$**': 1 })",
    description: "Indexe dynamiquement tous les champs sous settings.*",
    example: "Utile pour des documents semi-structurés avec beaucoup de champs variables."
  },
  {
    id: "mongo-drop-index",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Supprimer un index",
    command: "db.orders.dropIndex('idx_orders_user_createdAt')",
    description: "Supprime l'index nommé idx_orders_user_createdAt.",
    example: "Liste les index avec db.orders.getIndexes() avant de supprimer."
  },

  // === AGGREGATION PIPELINE – BASE ===
  {
    id: "mongo-agg-match-group",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Somme par utilisateur",
    command: "db.orders.aggregate([\n  { $match: { status: 'PAID' } },\n  { $group: { _id: '$userId', total: { $sum: '$total' } } }\n])",
    description: "Somme des montants de commandes payées par userId.",
    example: "Ajoute $sort pour trier par total décroissant."
  },
  {
    id: "mongo-agg-group-count",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Compter les documents par status",
    command: "db.orders.aggregate([\n  { $group: { _id: '$status', count: { $sum: 1 } } }\n])",
    description: "Compte le nombre de commandes par statut.",
    example: "Utile pour un dashboard simple sur la répartition des statuts."
  },
  {
    id: "mongo-agg-project",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Projection de champs et calcul",
    command: "db.orders.aggregate([\n  { $project: { _id: 0, userId: 1, totalWithTax: { $multiply: ['$total', 1.2] } } }\n])",
    description: "Calcule un champ dérivé totalWithTax dans la pipeline.",
    example: "Permet de préparer des valeurs dérivées sans les stocker."
  },
  {
    id: "mongo-agg-sort-limit",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Trier et limiter dans un pipeline",
    command: "db.orders.aggregate([\n  { $match: { userId: 123 } },\n  { $sort: { createdAt: -1 } },\n  { $limit: 10 }\n])",
    description: "Retourne les 10 dernières commandes de l'utilisateur.",
    example: "Combine avec un index (userId, createdAt) pour de bonnes perfs."
  },
  {
    id: "mongo-agg-bucket",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Bucketisation par tranche de montant",
    command: "db.orders.aggregate([\n  {\n    $bucket: {\n      groupBy: '$total',\n      boundaries: [0, 50, 100, 500, 1000],\n      default: 'other',\n      output: { count: { $sum: 1 } }\n    }\n  }\n])",
    description: "Regroupe les commandes par tranches de montant.",
    example: "Pratique pour des histogrammes simples côté UI."
  },

  // === AGGREGATION – $LOOKUP / $FACET / COMPLEXE ===
  {
    id: "mongo-agg-lookup",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Jointure avec $lookup",
    command: "db.orders.aggregate([\n  { $match: { status: 'PAID' } },\n  { $lookup: {\n      from: 'users',\n      localField: 'userId',\n      foreignField: '_id',\n      as: 'user'\n  }},\n  { $unwind: '$user' }\n])",
    description: "Jointure entre orders et users au sein de MongoDB.",
    example: "Permet d'enrichir les commandes avec les infos utilisateur."
  },
  {
    id: "mongo-agg-facet",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Pipeline multi-facettes ($facet)",
    command: "db.orders.aggregate([\n  { $match: { status: 'PAID' } },\n  {\n    $facet: {\n      byUser: [ { $group: { _id: '$userId', total: { $sum: '$total' } } } ],\n      byDay:  [ { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, total: { $sum: '$total' } } } ]\n    }\n  }\n])",
    description: "Calcule plusieurs agrégations en parallèle sur le même set filtré.",
    example: "Très utile pour construire un dashboard multi‑vue en une seule requête."
  },
  {
    id: "mongo-agg-add-fields",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Ajouter des champs avec $addFields",
    command: "db.orders.aggregate([\n  { $match: { status: 'PAID' } },\n  { $addFields: { year: { $year: '$createdAt' } } }\n])",
    description: "Ajoute un champ year dérivé de createdAt.",
    example: "Peut ensuite être utilisé dans un $group par année."
  },
  {
    id: "mongo-agg-out",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Écrire le résultat dans une collection ($out)",
    command: "db.orders.aggregate([\n  { $match: { status: 'PAID' } },\n  { $group: { _id: '$userId', total: { $sum: '$total' } } },\n  { $out: 'orders_totals_by_user' }\n])",
    description: "Stocke le résultat de l'aggregation dans une nouvelle collection.",
    example: "Utile pour du pré-calcul, à rafraîchir périodiquement."
  },

  // === SHARDING / REPLICA SET ADMIN ===
  {
    id: "mongo-rs-status",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "replica",
    label: "Statut du replica set",
    command: "rs.status()",
    description: "Affiche l'état des membres du replica set (PRIMARY, SECONDARY, etc.).",
    example: "Vérifie que les SECONDARY sont en sync et qu'il n'y a pas de rollback."
  },
  {
    id: "mongo-rs-config",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "replica",
    label: "Configuration du replica set",
    command: "rs.conf()",
    description: "Affiche la configuration du replica set (priorités, votes...).",
    example: "Permet de vérifier qu'un node n'a pas une priorité trop élevée par erreur."
  },
  {
    id: "mongo-rs-stepdown",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "replica",
    label: "Forcer la bascule de PRIMARY (stepDown)",
    command: "rs.stepDown(60)",
    description: "Demande au PRIMARY d'abandonner son rôle pour 60s, forçant une élection.",
    example: "Utilisé pour des tests de bascule ou pour faire une maintenance sur l'ancien PRIMARY."
  },
  {
    id: "mongo-enable-sharding-db",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "sharding",
    label: "Activer le sharding sur une base",
    command: "sh.enableSharding('mydb')",
    description: "Active la possibilité de sharder des collections de la base mydb.",
    example: "Étape préalable avant sh.shardCollection(...)."
  },
  {
    id: "mongo-shard-collection",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "sharding",
    label: "Sharder une collection",
    command: "sh.shardCollection('mydb.orders', { userId: 'hashed' })",
    description: "Active le sharding de mydb.orders sur userId (clé hashed recommandée).",
    example: "Permet de distribuer la collection sur plusieurs shards."
  },
  {
    id: "mongo-balancer-status",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "sharding",
    label: "Statut du balancer",
    command: "sh.getBalancerState(); sh.isBalancerRunning();",
    description: "Indique si le balancer (répartition des chunks) est actif.",
    example: "Utile pour diagnostiquer des problèmes de distribution des données."
  },

  // === BACKUP / RESTORE / MAINTENANCE ===
  {
    id: "mongo-mongodump",
    framework: "MongoDB (Advanced)",
    env: "CLI",
    os: "all",
    category: "backup",
    label: "Backup logique (mongodump)",
    command: "mongodump --uri='mongodb://user:pass@host:27017/mydb' --out=/backup/mydb",
    description: "Crée un dump binaire de la base mydb.",
    example: "À utiliser pour des backups applicatifs, ou migrations entre clusters."
  },
  {
    id: "mongo-mongorestore",
    framework: "MongoDB (Advanced)",
    env: "CLI",
    os: "all",
    category: "backup",
    label: "Restauration (mongorestore)",
    command: "mongorestore --uri='mongodb://user:pass@host:27017' /backup/mydb",
    description: "Restaure une base à partir d'un dump créé par mongodump.",
    example: "À tester sur un environnement de staging avant de l'utiliser en prod."
  },
  {
    id: "mongo-compact-collection",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "maintenance",
    label: "Compacter une collection",
    command: "db.runCommand({ compact: 'orders' })",
    description: "Compacte une collection pour réduire la fragmentation (bloquant).",
    example: "À planifier en fenêtre de maintenance et à éviter sur des collections très grosses en prod."
  },
  {
    id: "mongo-validate-collection",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "maintenance",
    label: "Valider l'intégrité d'une collection",
    command: "db.runCommand({ validate: 'orders', full: true })",
    description: "Vérifie l'intégrité logique et physique d'une collection.",
    example: "À utiliser en cas de doute sur la corruption ou après un incident disque."
  },

  // === SECURITY / CONNEXIONS / TIMEOUTS ===
  {
    id: "mongo-users-info",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "security",
    label: "Lister les utilisateurs de la base",
    command: "db.getUsers()",
    description: "Affiche les utilisateurs et leurs rôles pour la base courante.",
    example: "Vérifie que seuls les comptes nécessaires ont des privilèges élevés."
  },
  {
    id: "mongo-create-user-readwrite",
    framework: "MongoDB (Advanced)",
    env: "DB",
    os: "all",
    category: "security",
    label: "Créer un utilisateur readWrite sur une base",
    command: "db.createUser({ user: 'app_user', pwd: '***', roles: [ { role: 'readWrite', db: 'mydb' } ] })",
    description: "Crée un compte applicatif limité à la base mydb.",
    example: "Toujours préférer des comptes dédiés par application / environnement."
  }
];
