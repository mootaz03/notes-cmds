// commands/sql_advanced.js
export const sqlAdvancedCommands = [
  // --- EXPLAIN / ANALYSE ---
  {
    id: "sql-explain-basic",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "explain",
    label: "Plan d'exécution (EXPLAIN)",
    command: "EXPLAIN SELECT * FROM orders WHERE user_id = 123;",
    description: "Affiche le plan d'exécution estimé pour la requête (PostgreSQL).",
    example: "Permet de voir si un index est utilisé (Index Scan) ou non (Seq Scan)."
  },
  {
    id: "sql-explain-analyze",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "explain",
    label: "Plan + temps réel (EXPLAIN ANALYZE)",
    command: "EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 123;",
    description: "Exécute la requête et affiche le plan réel avec les temps de chaque étape.",
    example: "À utiliser en dev/staging pour diagnostiquer les lenteurs de requête."
  },
  {
    id: "sql-explain-buffers",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "explain",
    label: "EXPLAIN ANALYZE avec buffers",
    command: "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE user_id = 123;",
    description: "Ajoute des infos sur les lectures disque/mémoire (PostgreSQL).",
    example: "Permet de voir si la requête lit beaucoup de pages depuis le disque."
  },

  // --- INDEX AVANCÉS ---
  {
    id: "sql-index-multi-column",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Index multi-colonnes",
    command: "CREATE INDEX idx_orders_user_status ON orders (user_id, status);",
    description: "Index utile pour des requêtes filtrant à la fois sur user_id et status.",
    example: "Optimise SELECT * FROM orders WHERE user_id = 123 AND status = 'PAID';"
  },
  {
    id: "sql-index-partial",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Index partiel (partial index)",
    command: "CREATE INDEX idx_orders_paid ON orders (created_at) WHERE status = 'PAID';",
    description: "Index uniquement les lignes ayant status = 'PAID' (PostgreSQL).",
    example: "Réduit la taille de l'index si la majorité des commandes ne sont pas 'PAID'."
  },
  {
    id: "sql-index-unique",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Index unique",
    command: "CREATE UNIQUE INDEX idx_users_email_unique ON users (email);",
    description: "Garantit l'unicité de la colonne email (en plus de la contrainte).",
    example: "Utile dans certains cas pour gérer des clés naturelles en plus du PK."
  },
  {
    id: "sql-index-drop-concurrently",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "index",
    label: "Supprimer un index sans bloquer (CONCURRENTLY)",
    command: "DROP INDEX CONCURRENTLY idx_orders_old;",
    description: "Supprime l'index de manière non bloquante (PostgreSQL).",
    example: "À utiliser en prod pour éviter les locks longs sur les tables critiques."
  },

  // --- VACUUM / ANALYZE / MAINTENANCE ---
  {
    id: "sql-analyze-table",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "maintenance",
    label: "Mettre à jour les stats d'une table (ANALYZE)",
    command: "ANALYZE orders;",
    description: "Met à jour les statistiques de la table pour un meilleur plan d'exécution.",
    example: "Utile après de gros changements de volume sur la table."
  },
  {
    id: "sql-vacuum-analyze",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "maintenance",
    label: "VACUUM ANALYZE",
    command: "VACUUM ANALYZE orders;",
    description: "Nettoie la table et met à jour ses statistiques (PostgreSQL).",
    example: "À planifier en tâche de maintenance ou utilisé ponctuellement en dev."
  },
  {
    id: "sql-vacuum-full",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "maintenance",
    label: "VACUUM FULL (compactage)",
    command: "VACUUM FULL orders;",
    description: "Compacte physiquement la table (opération lourde, bloque la table).",
    example: "À éviter en prod sur de grosses tables en journée, à planifier dans des fenêtres de maintenance."
  },

  // --- PARTITIONNEMENT ---
  {
    id: "sql-range-partitioning",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "partition",
    label: "Créer une table partitionnée par plage de dates",
    command: "CREATE TABLE orders_range (\n  id BIGSERIAL PRIMARY KEY,\n  created_at DATE NOT NULL,\n  total NUMERIC\n) PARTITION BY RANGE (created_at);",
    description: "Crée une table partitionnée par plage de dates (PostgreSQL).",
    example: "Ensuite, crée des partitions par mois ou par année pour faciliter la maintenance."
  },
  {
    id: "sql-create-partition",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "partition",
    label: "Créer une partition (range)",
    command: "CREATE TABLE orders_2024 PARTITION OF orders_range\nFOR VALUES FROM ('2024-01-01') TO ('2025-01-01');",
    description: "Crée une partition pour les données de l'année 2024.",
    example: "Utile pour gérer des gros volumes de données (archivage plus simple)."
  },
  {
    id: "sql-attach-partition",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "partition",
    label: "Attacher une table existante comme partition",
    command: "ALTER TABLE orders_range ATTACH PARTITION orders_2023\nFOR VALUES FROM ('2023-01-01') TO ('2024-01-01');",
    description: "Attache une table existante comme partition d'une table partitionnée.",
    example: "Permet de migrer progressivement des tables non partitionnées vers un schéma partitionné."
  },

  // --- TRIGGERS / FONCTIONS ---
  {
    id: "sql-create-trigger-function-audit",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "trigger",
    label: "Créer une fonction de trigger d'audit",
    command: "CREATE OR REPLACE FUNCTION audit_orders_update()\nRETURNS TRIGGER AS $$\nBEGIN\n  INSERT INTO orders_audit(order_id, old_total, new_total, changed_at)\n  VALUES(OLD.id, OLD.total, NEW.total, NOW());\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;",
    description: "Fonction de trigger qui logge les changements de total dans une table d'audit.",
    example: "À associer à un trigger AFTER UPDATE sur la table orders."
  },
  {
    id: "sql-create-trigger-audit",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "trigger",
    label: "Créer un trigger d'audit sur UPDATE",
    command: "CREATE TRIGGER trg_audit_orders_update\nAFTER UPDATE OF total ON orders\nFOR EACH ROW\nEXECUTE FUNCTION audit_orders_update();",
    description: "Trigger qui appelle la fonction d'audit à chaque modification du total d'une commande.",
    example: "Après création, teste un UPDATE sur orders et vérifie l'insertion dans orders_audit."
  },
  {
    id: "sql-drop-trigger",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "trigger",
    label: "Supprimer un trigger",
    command: "DROP TRIGGER trg_audit_orders_update ON orders;",
    description: "Supprime le trigger d'audit sur la table orders.",
    example: "Utile pour désactiver un audit devenu inutile ou trop coûteux."
  },

  // --- OPTIMISATION DES REQUÊTES ---
  {
    id: "sql-use-index-prefix",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "Filtrer dans l'ordre des colonnes d'index",
    command: "SELECT * FROM orders WHERE user_id = 123 AND status = 'PAID';",
    description: "Exemple de requête tirant parti d'un index (user_id, status).",
    example: "Crée l'index CREATE INDEX idx_orders_user_status ON orders(user_id, status); puis EXPLAIN cette requête."
  },
  {
    id: "sql-avoid-select-star",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "Éviter SELECT * en prod",
    command: "SELECT id, user_id, total, status FROM orders WHERE id = $1;",
    description: "Requête typique d'API REST avec colonnes explicites (pas de SELECT *).",
    example: "Permet de réduire la bande passante et de stabiliser les plans d'exécution."
  },
  {
    id: "sql-materialized-view",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "Créer une vue matérialisée",
    command: "CREATE MATERIALIZED VIEW mv_orders_stats AS\nSELECT user_id, COUNT(*) AS nb_orders, SUM(total) AS total_amount\nFROM orders\nGROUP BY user_id;",
    description: "Stocke le résultat pré-calculé d'une requête lourde pour accélérer les lectures.",
    example: "Rafraîchis la vue avec REFRESH MATERIALIZED VIEW mv_orders_stats; selon un job planifié."
  },
  {
    id: "sql-refresh-materialized-view",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "Rafraîchir une vue matérialisée",
    command: "REFRESH MATERIALIZED VIEW CONCURRENTLY mv_orders_stats;",
    description: "Met à jour la vue matérialisée sans bloquer les lectures (PostgreSQL).",
    example: "Nécessite un index unique sur la vue, à planifier en tâche récurrente."
  },

  // --- LOCKS / CONCURRENCE ---
  {
    id: "sql-select-for-update",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "locks",
    label: "Locker une ligne pour mise à jour",
    command: "SELECT * FROM orders WHERE id = 123 FOR UPDATE;",
    description: "Place un verrou sur la ligne pour éviter les mises à jour concurrentes (SELECT ... FOR UPDATE).",
    example: "Pattern classique pour un 'pessimistic locking' dans un flux critique (paiement, stock...)."
  },
  {
    id: "sql-select-for-share",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "locks",
    label: "Lock de lecture partagée",
    command: "SELECT * FROM orders WHERE id = 123 FOR SHARE;",
    description: "Verrou de lecture permettant à d'autres lectures d'avoir lieu, mais bloque certains updates.",
    example: "Moins strict que FOR UPDATE, utilisé pour certaines stratégies de concurrence."
  },
  {
    id: "sql-show-locks",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "locks",
    label: "Lister les verrous actifs",
    command: "SELECT * FROM pg_locks pl JOIN pg_stat_activity psa ON pl.pid = psa.pid;",
    description: "Affiche les verrous PostgreSQL en cours avec les sessions associées.",
    example: "Utile pour diagnostiquer des deadlocks ou des blocages longs."
  },

  // --- MONITORING / STATISTIQUES PG ---
  {
    id: "sql-pg-stat-user-tables",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "monitoring",
    label: "Statistiques d'accès aux tables",
    command: "SELECT relname, seq_scan, idx_scan, n_tup_ins, n_tup_upd, n_tup_del\nFROM pg_stat_user_tables\nORDER BY seq_scan DESC;",
    description: "Montre pour chaque table le nombre de scans séquentiels vs index scans (PostgreSQL).",
    example: "Permet d'identifier les tables qui nécessitent des index supplémentaires."
  },
  {
    id: "sql-pg-stat-user-indexes",
    framework: "SQL (Advanced / PostgreSQL)",
    env: "DB",
    os: "all",
    category: "monitoring",
    label: "Statistiques d'usage des index",
    command: "SELECT relname AS table_name, indexrelname AS index_name, idx_scan, idx_tup_read\nFROM pg_stat_user_indexes\nORDER BY idx_scan DESC;",
    description: "Affiche l'utilisation des index par table (PostgreSQL).",
    example: "Permet de repérer les index jamais utilisés (idx_scan = 0)."
  }
];
