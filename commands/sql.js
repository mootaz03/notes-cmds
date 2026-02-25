// commands/sql.js
export const sqlCommands = [
  // --- SELECT de base ---
  {
    id: "sql-select-all-users",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "Sélectionner tous les utilisateurs",
    command: "SELECT * FROM users;",
    description: "Sélection simple de toutes les colonnes et lignes de la table users.",
    example: "À utiliser en dev uniquement, en prod préfère des colonnes explicites."
  },
  {
    id: "sql-select-columns",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "Sélectionner des colonnes spécifiques",
    command: "SELECT id, name, email FROM users;",
    description: "Sélectionne uniquement les colonnes utiles pour limiter le volume de données.",
    example: "Utilise ce pattern dans tes vues/API pour réduire la charge réseau."
  },
  {
    id: "sql-select-where",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "Filtrer avec WHERE",
    command: "SELECT id, name FROM users WHERE active = true;",
    description: "Filtre les lignes selon une condition (ici les utilisateurs actifs).",
    example: "Ajoute d'autres conditions avec AND/OR pour des filtres plus complexes."
  },
  {
    id: "sql-select-like",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "Recherche textuelle avec LIKE",
    command: "SELECT id, name FROM users WHERE name ILIKE '%john%';",
    description: "Recherche les utilisateurs dont le nom contient 'john' (ILIKE = insensible à la casse, PostgreSQL).",
    example: "Utile pour les fonctions de recherche simple côté back sans moteur dédié."
  },
  {
    id: "sql-select-between",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "Filtrer sur un intervalle (BETWEEN)",
    command: "SELECT * FROM orders WHERE total BETWEEN 100 AND 500;",
    description: "Filtre les commandes dont le montant est compris entre 100 et 500.",
    example: "Combine avec ORDER BY pour analyser un segment de commandes."
  },

  // --- INSERT / UPDATE / DELETE ---
  {
    id: "sql-insert-simple",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "dml",
    label: "Insérer une ligne (INSERT)",
    command: "INSERT INTO users (name, email, active) VALUES ('John', 'john@example.com', true);",
    description: "Insère une nouvelle ligne dans la table users.",
    example: "Après insertion, vérifie avec SELECT * FROM users WHERE email = 'john@example.com';"
  },
  {
    id: "sql-insert-multiple",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "dml",
    label: "Insérer plusieurs lignes en une requête",
    command: "INSERT INTO users (name, email, active) VALUES\n  ('Alice', 'alice@example.com', true),\n  ('Bob', 'bob@example.com', false);",
    description: "Insère plusieurs lignes avec une seule instruction INSERT.",
    example: "Plus performant qu'une boucle avec plusieurs inserts unitaires."
  },
  {
    id: "sql-update",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "dml",
    label: "Mettre à jour des lignes (UPDATE)",
    command: "UPDATE users SET active = false WHERE last_login_at < NOW() - INTERVAL '1 year';",
    description: "Désactive les utilisateurs inactifs depuis plus d'un an.",
    example: "Toujours vérifier le nombre de lignes affectées avant de valider en prod."
  },
  {
    id: "sql-delete",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "dml",
    label: "Supprimer des lignes (DELETE)",
    command: "DELETE FROM sessions WHERE expires_at < NOW();",
    description: "Supprime les sessions expirées.",
    example: "Commence par un SELECT avec la même clause WHERE pour vérifier le scope."
  },
  {
    id: "sql-upsert-postgres",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "dml",
    label: "UPSERT (INSERT ... ON CONFLICT)",
    command: "INSERT INTO users (id, name, email)\nVALUES (1, 'John', 'john@example.com')\nON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, email = EXCLUDED.email;",
    description: "Insère ou met à jour si le primary key (id) existe déjà (PostgreSQL).",
    example: "Très utile pour synchroniser des données sans double INSERT/UPDATE."
  },

  // --- JOINTURES ---
  {
    id: "sql-inner-join",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "join",
    label: "Jointure interne (INNER JOIN)",
    command: "SELECT u.name, o.id AS order_id, o.total\nFROM users u\nINNER JOIN orders o ON o.user_id = u.id;",
    description: "Retourne uniquement les users qui ont des commandes associées.",
    example: "Utilise INNER JOIN quand tu ne veux que les correspondances des deux côtés."
  },
  {
    id: "sql-left-join",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "join",
    label: "Jointure externe gauche (LEFT JOIN)",
    command: "SELECT u.name, o.id AS order_id, o.total\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id;",
    description: "Retourne tous les users, avec les commandes si elles existent.",
    example: "Permet d'inclure les utilisateurs sans commandes (NULL côté orders)."
  },
  {
    id: "sql-right-join",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "join",
    label: "RIGHT JOIN (moins fréquent)",
    command: "SELECT u.name, o.id AS order_id, o.total\nFROM users u\nRIGHT JOIN orders o ON o.user_id = u.id;",
    description: "Retourne toutes les commandes même si aucun user associé (peu utilisé en pratique).",
    example: "Privilégie LEFT JOIN en structurant correctement tes requêtes."
  },
  {
    id: "sql-cross-join",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "join",
    label: "Produit cartésien (CROSS JOIN)",
    command: "SELECT * FROM currencies CROSS JOIN countries;",
    description: "Associe chaque ligne de la première table à chaque ligne de la seconde.",
    example: "Attention à la taille du résultat, utiliser seulement pour des cas précis."
  },
  {
    id: "sql-self-join",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "join",
    label: "Self join (table sur elle-même)",
    command: "SELECT e1.name AS employee, e2.name AS manager\nFROM employees e1\nLEFT JOIN employees e2 ON e1.manager_id = e2.id;",
    description: "Joint une table sur elle-même, typiquement pour des structures hiérarchiques.",
    example: "Utile pour afficher un arbre de management (employé / manager)."
  },

  // --- AGRÉGATIONS ---
  {
    id: "sql-count",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Compter le nombre de lignes",
    command: "SELECT COUNT(*) AS total_users FROM users;",
    description: "Retourne le nombre total d'utilisateurs.",
    example: "Évite COUNT(*) sur de très grandes tables dans les requêtes très fréquentes."
  },
  {
    id: "sql-group-by-status",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Nombre de commandes par statut",
    command: "SELECT status, COUNT(*) AS count\nFROM orders\nGROUP BY status;",
    description: "Agrège les commandes par statut.",
    example: "Permet d'alimenter des stats simples dans un dashboard."
  },
  {
    id: "sql-sum-by-user",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Somme des montants par utilisateur",
    command: "SELECT user_id, SUM(total) AS total_amount\nFROM orders\nGROUP BY user_id;",
    description: "Calcule le total des commandes pour chaque utilisateur.",
    example: "Combine avec HAVING pour filtrer les gros clients."
  },
  {
    id: "sql-having",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Filtrer après agrégation (HAVING)",
    command: "SELECT user_id, COUNT(*) AS nb_orders\nFROM orders\nGROUP BY user_id\nHAVING COUNT(*) >= 10;",
    description: "Filtre les groupes après l'agrégation, ici les utilisateurs avec au moins 10 commandes.",
    example: "Utile pour repérer les clients très actifs."
  },
  {
    id: "sql-avg-min-max",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Moyenne / minimum / maximum",
    command: "SELECT AVG(total) AS avg_total, MIN(total) AS min_total, MAX(total) AS max_total\nFROM orders;",
    description: "Calcule des indicateurs simples sur une colonne numérique.",
    example: "Très pratique pour une vue rapide sur la distribution des montants."
  },

  // --- ORDER BY / LIMIT / OFFSET ---
  {
    id: "sql-order-by-desc",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "Trier les résultats (ORDER BY)",
    command: "SELECT * FROM orders ORDER BY created_at DESC;",
    description: "Trie les commandes de la plus récente à la plus ancienne.",
    example: "Ajoute LIMIT pour ne récupérer que les dernières commandes."
  },
  {
    id: "sql-limit-offset",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "Pagination simple (LIMIT/OFFSET)",
    command: "SELECT * FROM orders ORDER BY id OFFSET 20 LIMIT 10;",
    description: "Récupère la 3e page de 10 résultats (page 1 = offset 0).",
    example: "Pattern classique pour paginer les résultats dans une API REST."
  },
  {
    id: "sql-limit-last-10",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "10 dernières commandes",
    command: "SELECT * FROM orders ORDER BY created_at DESC LIMIT 10;",
    description: "Retourne les 10 commandes les plus récentes.",
    example: "Combine avec un index sur created_at pour de bonnes performances."
  },

  // --- FONCTIONS / EXPRESSIONS ---
  {
    id: "sql-coalesce",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "expression",
    label: "Remplacer les NULL par une valeur",
    command: "SELECT COALESCE(phone, 'N/A') AS phone_display FROM users;",
    description: "Retourne 'N/A' si phone est NULL.",
    example: "Pratique pour afficher une valeur user-friendly dans un reporting."
  },
  {
    id: "sql-case-when",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "expression",
    label: "Expression conditionnelle (CASE)",
    command: "SELECT id, total,\n       CASE WHEN total >= 100 THEN 'VIP' ELSE 'STANDARD' END AS segment\nFROM orders;",
    description: "Segment les commandes selon leur montant.",
    example: "Permet de classer les clients en catégories dans une requête SQL."
  },
  {
    id: "sql-date-range",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "date",
    label: "Filtrer sur une plage de dates",
    command: "SELECT * FROM orders WHERE created_at BETWEEN '2024-01-01' AND '2024-01-31';",
    description: "Filtre les commandes créées en janvier 2024.",
    example: "Adapte les dates à ton contexte et ton type de colonne (date/timestamp)."
  },
  {
    id: "sql-extract-year",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "date",
    label: "Extraire l'année d'une date",
    command: "SELECT id, EXTRACT(YEAR FROM created_at) AS year FROM orders;",
    description: "Retourne l'année du champ created_at.",
    example: "Utilise dans un GROUP BY pour agréger par année."
  },

  // --- WINDOW FUNCTIONS (basics) ---
  {
    id: "sql-window-row-number",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "window",
    label: "Numéro de ligne par client (ROW_NUMBER)",
    command: "SELECT user_id, id AS order_id, total,\n       ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn\nFROM orders;",
    description: "Numérote les commandes de chaque client, rn=1 étant la plus récente.",
    example: "Permet de récupérer la dernière commande par user avec un filtre rn = 1."
  },
  {
    id: "sql-window-running-total",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "window",
    label: "Somme cumulée par client",
    command: "SELECT user_id, created_at, total,\n       SUM(total) OVER (PARTITION BY user_id ORDER BY created_at) AS running_total\nFROM orders;",
    description: "Calcule le cumul des montants de commandes par client.",
    example: "Intéressant pour visualiser l'évolution du CA par client dans le temps."
  },
  {
    id: "sql-window-rank",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "window",
    label: "Rank des clients par CA",
    command: "SELECT user_id, SUM(total) AS total_amount,\n       RANK() OVER (ORDER BY SUM(total) DESC) AS rank\nFROM orders\nGROUP BY user_id;",
    description: "Classe les clients par chiffre d'affaires (RANK avec ex-aequo).",
    example: "Permet d'identifier le top N clients."
  },

  // --- CTE (WITH) ---
  {
    id: "sql-cte-basic",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "cte",
    label: "CTE simple (WITH)",
    command: "WITH big_orders AS (\n  SELECT * FROM orders WHERE total >= 100\n)\nSELECT COUNT(*) FROM big_orders;",
    description: "Crée une CTE pour réutiliser un sous-ensemble de données.",
    example: "Permet de factoriser une sous-requête complexe dans plusieurs SELECT."
  },
  {
    id: "sql-cte-last-7-days",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "cte",
    label: "Commandes des 7 derniers jours (CTE)",
    command: "WITH recent_orders AS (\n  SELECT * FROM orders\n  WHERE created_at >= NOW() - INTERVAL '7 days'\n)\nSELECT user_id, COUNT(*) AS nb_orders\nFROM recent_orders\nGROUP BY user_id;",
    description: "Isoler les commandes récentes dans une CTE puis agréger.",
    example: "Utile pour des statistiques glissantes sur 7 jours."
  },

  // --- TRANSACTIONS ---
  {
    id: "sql-transaction-begin",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "transaction",
    label: "Démarrer une transaction",
    command: "BEGIN;",
    description: "Commence une transaction explicite.",
    example: "Enchaîne plusieurs INSERT/UPDATE, puis termine par COMMIT ou ROLLBACK."
  },
  {
    id: "sql-transaction-commit",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "transaction",
    label: "Valider une transaction",
    command: "COMMIT;",
    description: "Valide définitivement toutes les opérations de la transaction.",
    example: "À utiliser après une série d'opérations cohérentes (par ex. virement bancaire)."
  },
  {
    id: "sql-transaction-rollback",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "transaction",
    label: "Annuler une transaction",
    command: "ROLLBACK;",
    description: "Annule toutes les opérations depuis le BEGIN.",
    example: "Utile si une des opérations intermédiaires échoue ou donne un résultat inattendu."
  },

  // --- DDL (tables/index simples) ---
  {
    id: "sql-create-table-basic",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "ddl",
    label: "Créer une table simple",
    command: "CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT UNIQUE NOT NULL,\n  active BOOLEAN DEFAULT true\n);",
    description: "Crée une table users simple avec clé primaire et contrainte d'unicité sur email.",
    example: "Adaptable à PostgreSQL ; pour MySQL remplace SERIAL par INT AUTO_INCREMENT."
  },
  {
    id: "sql-alter-table-add-column",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "ddl",
    label: "Ajouter une colonne",
    command: "ALTER TABLE users ADD COLUMN last_login_at TIMESTAMP;",
    description: "Ajoute une colonne à une table existante.",
    example: "Vérifie ensuite les valeurs par défaut (NULL si non spécifié)."
  },
  {
    id: "sql-create-index-simple",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "index",
    label: "Créer un index simple",
    command: "CREATE INDEX idx_users_email ON users(email);",
    description: "Crée un index sur la colonne email pour accélérer les recherches.",
    example: "Après création, observe l'effet dans EXPLAIN sur les requêtes filtrant par email."
  },
  {
    id: "sql-drop-index",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "index",
    label: "Supprimer un index",
    command: "DROP INDEX idx_users_email;",
    description: "Supprime l'index nommé idx_users_email.",
    example: "À faire après avoir vérifié que l'index n'est plus utilisé (via EXPLAIN et monitoring)."
  },

  // --- DCL / DROITS ---
  {
    id: "sql-grant-select",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "dcl",
    label: "Donner le droit SELECT sur une table",
    command: "GRANT SELECT ON users TO reporting_user;",
    description: "Autorise reporting_user à lire la table users.",
    example: "Pratique pour isoler un utilisateur dédié aux dashboards/BI."
  },
  {
    id: "sql-revoke-select",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "dcl",
    label: "Retirer le droit SELECT",
    command: "REVOKE SELECT ON users FROM reporting_user;",
    description: "Retire le droit de lecture sur la table users.",
    example: "À utiliser en cas de changement de périmètre pour un utilisateur ou un service."
  }
];
