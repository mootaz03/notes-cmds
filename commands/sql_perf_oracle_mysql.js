// commands/sql_perf_oracle_mysql.js
export const sqlPerfCommands = [
  // === DIAGNOSTIC / EXPLAIN (MySQL & Oracle) ===
  {
    id: "mysql-explain-basic",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "explain",
    label: "MySQL – EXPLAIN d'une requête",
    command: "EXPLAIN SELECT * FROM orders WHERE user_id = 123;",
    description: "Affiche le plan d'exécution estimé (type de scan, index utilisé, rows estimées).",
    example: "Regarde la colonne type (ALL vs ref vs range) et key (index utilisé ou non)."
  },
  {
    id: "mysql-explain-format-json",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "explain",
    label: "MySQL – EXPLAIN FORMAT=JSON",
    command: "EXPLAIN FORMAT=JSON SELECT * FROM orders WHERE user_id = 123 AND status = 'PAID';",
    description: "Plan d'exécution détaillé au format JSON pour analyse approfondie.",
    example: "Permet d'automatiser l'analyse via des outils ou scripts."
  },
  {
    id: "mysql-show-profile",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "diagnostic",
    label: "MySQL – Profiling d'une requête",
    command: "SET profiling = 1; SELECT ...; SHOW PROFILE FOR QUERY 1;",
    description: "Montre la répartition du temps par étape d'exécution.",
    example: "Identifie si le temps est passé en 'Sending data', 'Sorting result', etc."
  },
  {
    id: "oracle-explain-plan-for",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "explain",
    label: "Oracle – EXPLAIN PLAN FOR",
    command: "EXPLAIN PLAN FOR SELECT * FROM orders WHERE user_id = 123;",
    description: "Prépare le plan d'exécution stocké dans la table PLAN_TABLE.",
    example: "Ensuite, exécute SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY); pour voir le plan."
  },
  {
    id: "oracle-dbms-xplan-display",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "explain",
    label: "Oracle – Afficher un plan avec DBMS_XPLAN",
    command: "SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY(format => 'TYPICAL'));",
    description: "Affiche le plan d'exécution (coûts, cardinalités, type d'accès).",
    example: "Compare le plan avant/après ajout d'un index pour valider le gain."
  },
  {
    id: "oracle-autotrace-session",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "diagnostic",
    label: "Oracle – SET AUTOTRACE ON",
    command: "SET AUTOTRACE ON;\nSELECT * FROM orders WHERE user_id = 123;",
    description: "Affiche le plan et les stats d'exécution après la requête (SQL*Plus).",
    example: "Permet de voir rapidement les lectures logiques/physiques et l'utilisation d'index."
  },

  // === INDEX – CRÉATION / UTILISATION (MySQL & Oracle) ===
  {
    id: "mysql-create-index-simple",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "index",
    label: "MySQL – Index simple sur une colonne",
    command: "CREATE INDEX idx_orders_user_id ON orders(user_id);",
    description: "Index pour accélérer les requêtes filtrant sur user_id.",
    example: "Vérifie l'utilisation de l'index avec EXPLAIN SELECT * FROM orders WHERE user_id = 123;"
  },
  {
    id: "mysql-create-index-composite",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "index",
    label: "MySQL – Index composite (user_id, status)",
    command: "CREATE INDEX idx_orders_user_status ON orders(user_id, status);",
    description: "Index multi-colonnes, efficace pour WHERE user_id=? AND status=?.",
    example: "Attention à l'ordre des colonnes, la sélectivité de la première est critique."
  },
  {
    id: "mysql-create-covering-index",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "index",
    label: "MySQL – Index couvrant (covering index)",
    command: "CREATE INDEX idx_orders_covering ON orders(user_id, status, total);",
    description: "Permet un index-only scan quand la requête ne lit que ces colonnes.",
    example: "EXPLAIN SELECT user_id, status, total FROM orders WHERE user_id=123 AND status='PAID';"
  },
  {
    id: "mysql-create-index-prefix",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "index",
    label: "MySQL – Index sur préfixe de colonne texte",
    command: "CREATE INDEX idx_users_email_prefix ON users(email(20));",
    description: "Index sur les 20 premiers chars de la colonne email pour réduire la taille.",
    example: "Utile pour de très grandes chaînes, avec un compromis sur la sélectivité."
  },
  {
    id: "oracle-create-index-btree",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "index",
    label: "Oracle – Index B-tree",
    command: "CREATE INDEX idx_orders_user_id ON orders(user_id);",
    description: "Index B-tree classique utilisé par Oracle pour les accès point et range.",
    example: "Vérifie l'Index Range Scan via DBMS_XPLAN sur une requête filtrant sur user_id."
  },
  {
    id: "oracle-create-index-function-based",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "index",
    label: "Oracle – Function-based index",
    command: "CREATE INDEX idx_users_lower_email ON users(LOWER(email));",
    description: "Index sur LOWER(email) pour optimiser WHERE LOWER(email)=LOWER(:email).",
    example: "Après création, EXPLAIN SELECT * FROM users WHERE LOWER(email) = 'john@example.com';"
  },
  {
    id: "oracle-create-index-bitmap",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "index",
    label: "Oracle – Index bitmap (colonnes peu distinctes)",
    command: "CREATE BITMAP INDEX idx_orders_status ON orders(status);",
    description: "Index bitmap, efficace pour les colonnes de faible cardinalité en BI (attention aux updates).",
    example: "À réserver aux tables peu modifiées (data warehouse)."
  },
  {
    id: "mysql-drop-index",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "index",
    label: "MySQL – Supprimer un index",
    command: "DROP INDEX idx_orders_user_status ON orders;",
    description: "Supprime l'index idx_orders_user_status de la table orders.",
    example: "À faire après avoir vérifié avec EXPLAIN et les stats que l'index est inutile."
  },
  {
    id: "oracle-drop-index",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "index",
    label: "Oracle – Supprimer un index",
    command: "DROP INDEX idx_orders_user_id;",
    description: "Supprime un index Oracle existant.",
    example: "Vérifie l'impact sur les plans d'exécution et la charge avant suppression définitive."
  },

  // === TUNING DES REQUÊTES (patterns) ===
  {
    id: "sql-avoid-functions-on-indexed-column",
    framework: "SQL Perf / Oracle-MySQL",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "Éviter les fonctions sur les colonnes indexées",
    command: "SELECT * FROM users WHERE created_at >= '2024-01-01'; -- au lieu de WHERE DATE(created_at) >= '2024-01-01'",
    description: "Appliquer une fonction sur une colonne indexée empêche souvent l'utilisation de l'index.",
    example: "Convertis la valeur constante (paramètre) plutôt que la colonne dans la clause WHERE."
  },
  {
    id: "sql-use-exists-instead-of-in",
    framework: "SQL Perf / Oracle-MySQL",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "Utiliser EXISTS plutôt que IN (cas corrélés)",
    command: "SELECT * FROM users u WHERE EXISTS (\n  SELECT 1 FROM orders o WHERE o.user_id = u.id\n);",
    description: "EXISTS peut être plus performant que IN pour certaines corrélations.",
    example: "Compare les plans avec IN et EXISTS via EXPLAIN/DBMS_XPLAN."
  },
  {
    id: "sql-union-all-instead-of-union",
    framework: "SQL Perf / Oracle-MySQL",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "UNION ALL vs UNION",
    command: "SELECT ... FROM t1\nUNION ALL\nSELECT ... FROM t2;",
    description: "UNION ALL ne dédoublonne pas, donc plus rapide et moins consommateur que UNION.",
    example: "Utilise UNION ALL quand tu sais qu'il n'y aura pas de doublons ou que ce n'est pas grave."
  },
  {
    id: "sql-limit-rows-early",
    framework: "SQL Perf / Oracle-MySQL",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "Limiter les lignes tôt (TOP / LIMIT / ROWNUM)",
    command: "SELECT * FROM orders WHERE user_id = 123 ORDER BY created_at DESC LIMIT 50;",
    description: "Limiter le nombre de résultats permet d'éviter des sorts/scan inutiles.",
    example: "Sur Oracle, utilise FETCH FIRST 50 ROWS ONLY."
  },
  {
    id: "sql-select-column-instead-of-count-star",
    framework: "SQL Perf / Oracle-MySQL",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "COUNT(1) vs COUNT(*) (mythe)",
    command: "SELECT COUNT(*) FROM orders;",
    description: "Sur Oracle/MySQL modernes, COUNT(*) est optimisé ; inutile de préférer COUNT(1) pour la perf.",
    example: "Concentre-toi sur le bon indexage plutôt que sur COUNT(1) vs COUNT(*)."
  },
  {
    id: "sql-avoid-wildcard-prefix-like",
    framework: "SQL Perf / Oracle-MySQL",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "Éviter LIKE '%xxx' en début de motif",
    command: "SELECT * FROM users WHERE email LIKE 'john%'; -- indexable\n-- Éviter : email LIKE '%john%'",
    description: "Les motifs commençant par % ne sont pas indexables en B-tree classiques.",
    example: "Si tu as besoin de recherche en plein texte, utiliser un index full-text ou un moteur de recherche dédié."
  },
  {
    id: "sql-denormalization-read-heavy",
    framework: "SQL Perf / Oracle-MySQL",
    env: "DB",
    os: "all",
    category: "tuning",
    label: "Dénormalisation ciblée pour lecture intensive",
    command: "-- Exemple conceptuel : ajouter une colonne 'orders_count' sur users\n-- et la mettre à jour via triggers ou batch",
    description: "Dénormaliser pour éviter des agrégations fréquentes sur de grosses tables.",
    example: "Ex : stocker le total des commandes sur la table users plutôt que de SUM à chaque requête."
  },

  // === HINTS (MySQL / Oracle) ===
  {
    id: "mysql-straight-join",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "hint",
    label: "MySQL – FORCER l'ordre de jointure (STRAIGHT_JOIN)",
    command: "SELECT STRAIGHT_JOIN * FROM A JOIN B ON ...;",
    description: "Indique à MySQL de respecter l'ordre d'écriture des tables dans la jointure.",
    example: "À utiliser uniquement quand tu sais que le plan du moteur est suboptimal."
  },
  {
    id: "mysql-sql-big-result",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "hint",
    label: "MySQL – Hint SQL_BIG_RESULT",
    command: "SELECT SQL_BIG_RESULT * FROM big_table ORDER BY col;",
    description: "Demandé pour de gros sets de résultats, peut améliorer l'utilisation de fichiers temporaires/disque.",
    example: "À tester sur de gros exports/reportings."
  },
  {
    id: "oracle-hint-index",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "hint",
    label: "Oracle – Forcer l'utilisation d'un index",
    command: "SELECT /*+ INDEX(o idx_orders_user_id) */ *\nFROM orders o\nWHERE o.user_id = 123;",
    description: "Demande explicitement l'utilisation de l'index idx_orders_user_id.",
    example: "À utiliser avec prudence, après analyse du plan et des stats."
  },
  {
    id: "oracle-hint-full",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "hint",
    label: "Oracle – Forcer un full table scan",
    command: "SELECT /*+ FULL(o) */ * FROM orders o WHERE total > 0;",
    description: "Indique au moteur de privilégier un scan complet de la table.",
    example: "Utile pour des tables petites ou des requêtes qui touchent la majorité des lignes."
  },
  {
    id: "oracle-hint-parallel",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "hint",
    label: "Oracle – Exécution en parallèle",
    command: "SELECT /*+ PARALLEL(o,4) */ * FROM orders o;",
    description: "Demande une exécution parallèle sur 4 threads pour la table orders.",
    example: "Pertinent pour de très gros scans sur des serveurs multi‑CPU."
  },

  // === STATS / OPTIMIZER ===
  {
    id: "mysql-analyze-table",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "stats",
    label: "MySQL – Mettre à jour les stats d'une table",
    command: "ANALYZE TABLE orders;",
    description: "Met à jour les statistiques utilisées par l'optimiseur MySQL.",
    example: "À utiliser après de gros chargements ou purges de données."
  },
  {
    id: "mysql-optimize-table",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "maintenance",
    label: "MySQL – OPTIMIZE TABLE",
    command: "OPTIMIZE TABLE orders;",
    description: "Reorganise la table et les index, récupère l'espace libre (InnoDB).",
    example: "À planifier en maintenance sur des tables très fragmentées."
  },
  {
    id: "oracle-dbms-stats-gather-table",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "stats",
    label: "Oracle – DBMS_STATS.GATHER_TABLE_STATS",
    command: "BEGIN\n  DBMS_STATS.GATHER_TABLE_STATS(\n    ownname => 'APP',\n    tabname => 'ORDERS',\n    cascade => TRUE\n  );\nEND;",
    description: "Met à jour les statistiques de la table et de ses index.",
    example: "À faire après un gros batch d'import ou suppression."
  },
  {
    id: "oracle-show-last-analyzed",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "stats",
    label: "Oracle – Voir la date de dernière analyse",
    command: "SELECT table_name, last_analyzed\nFROM user_tab_statistics\nWHERE table_name = 'ORDERS';",
    description: "Affiche la date de dernière collecte de stats pour la table.",
    example: "Permet d'identifier les tables dont les stats sont obsolètes."
  },

  // === PARTITIONNING MySQL / Oracle ===
  {
    id: "mysql-range-partitioning",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "partition",
    label: "MySQL – Créer une table partitionnée par date",
    command: "CREATE TABLE orders (\n  id BIGINT NOT NULL,\n  created_at DATE NOT NULL,\n  total DECIMAL(10,2),\n  PRIMARY KEY (id, created_at)\n)\nPARTITION BY RANGE (YEAR(created_at)) (\n  PARTITION p2023 VALUES LESS THAN (2024),\n  PARTITION pmax  VALUES LESS THAN MAXVALUE\n);",
    description: "Partitionne la table par année de created_at (MySQL).",
    example: "Permet des purges rapides en dropant une partition entière."
  },
  {
    id: "mysql-drop-partition",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "partition",
    label: "MySQL – Supprimer une partition",
    command: "ALTER TABLE orders DROP PARTITION p2023;",
    description: "Supprime toutes les lignes de la partition p2023 en une opération rapide.",
    example: "Très efficace pour purger des données anciennes."
  },
  {
    id: "oracle-check-partitions",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "partition",
    label: "Oracle – Lister les partitions d'une table",
    command: "SELECT partition_name, high_value\nFROM user_tab_partitions\nWHERE table_name = 'ORDERS';",
    description: "Affiche les partitions et leurs bornes pour la table ORDERS.",
    example: "Permet de vérifier la stratégie de partitionnement en cours."
  },

  // === VERROUS / ISOLATION / INNODB ===
  {
    id: "mysql-show-engine-innodb-status",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "locks",
    label: "MySQL – Diagnostic des locks InnoDB",
    command: "SHOW ENGINE INNODB STATUS\\G",
    description: "Affiche un rapport détaillé sur les verrous, deadlocks et transactions (InnoDB).",
    example: "Utile pour diagnostiquer des deadlocks et blocages longs."
  },
  {
    id: "mysql-set-transaction-isolation",
    framework: "SQL Perf / MySQL",
    env: "DB",
    os: "all",
    category: "transaction",
    label: "MySQL – Modifier le niveau d'isolement de session",
    command: "SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;",
    description: "Change le niveau d'isolation de la session (par défaut REPEATABLE READ sur MySQL).",
    example: "Peut réduire les risques de contention dans certains scénarios de lecture intensive."
  },
  {
    id: "oracle-select-for-update-skip-locked",
    framework: "SQL Perf / Oracle",
    env: "DB",
    os: "all",
    category: "locks",
    label: "Oracle – SELECT FOR UPDATE SKIP LOCKED",
    command: "SELECT * FROM job_queue\nWHERE status = 'PENDING'\nFOR UPDATE SKIP LOCKED;",
    description: "Permet de distribuer des jobs entre workers sans bloquer sur les lignes lockées.",
    example: "Patron classique de job queue concurrente en Oracle."
  }
];
