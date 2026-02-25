// commands/sql.js
export const sqlCommands = [
  {
    id: "sql-select-active-users",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "Sélection des utilisateurs actifs",
    command: "SELECT id, name, email FROM users WHERE active = true;",
    description: "Exemple simple de sélection avec filtre boolean.",
    example: "Insère des users avec active = true/false puis exécute la requête."
  },
  {
    id: "sql-join-users-orders",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "join",
    label: "Jointure utilisateurs / commandes",
    command: "SELECT u.name, o.id AS order_id, o.total\nFROM users u\nJOIN orders o ON o.user_id = u.id;",
    description: "Jointure simple entre users et orders.",
    example: "Crée des users et orders liés, exécute la requête et vérifie la cohérence."
  },
  {
    id: "sql-group-by-status",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "aggregation",
    label: "Nombre de commandes par statut",
    command: "SELECT status, COUNT(*) AS count\nFROM orders\nGROUP BY status;",
    description: "Compte les commandes par statut.",
    example: "Insère des commandes NEW/PAID/CANCELLED et vérifie les totaux."
  },
  {
    id: "sql-last-orders",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "10 dernières commandes",
    command: "SELECT * FROM orders ORDER BY created_at DESC LIMIT 10;",
    description: "Récupère les 10 commandes les plus récentes.",
    example: "Teste après avoir inséré des commandes avec des dates différentes."
  },
  {
    id: "sql-pagination",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "select",
    label: "Pagination simple (page 2 de 10)",
    command: "SELECT * FROM orders ORDER BY id OFFSET 10 LIMIT 10;",
    description: "Retourne la 2e page de 10 résultats (page 1 = OFFSET 0).",
    example: "Adapte OFFSET pour naviguer entre les pages."
  },
  {
    id: "sql-window-row-number",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "window",
    label: "Numéro de ligne par client (ROW_NUMBER)",
    command: "SELECT user_id, id AS order_id, total,\n       ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn\nFROM orders;",
    description: "Numérote les commandes par client, rn=1 étant la plus récente.",
    example: "Vérifie que pour chaque user, rn=1 est la dernière commande."
  },
  {
    id: "sql-window-running-total",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "window",
    label: "Somme cumulée par client",
    command: "SELECT user_id, created_at, total,\n       SUM(total) OVER (PARTITION BY user_id ORDER BY created_at) AS running_total\nFROM orders;",
    description: "Calcule le cumul des montants par client.",
    example: "Pour un client, vérifie que running_total augmente à chaque commande."
  },
  {
    id: "sql-cte-last-7-days",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "cte",
    label: "Commandes des 7 derniers jours (CTE)",
    command: "WITH recent_orders AS (\n  SELECT * FROM orders\n  WHERE created_at >= NOW() - INTERVAL '7 days'\n)\nSELECT user_id, COUNT(*) AS nb_orders\nFROM recent_orders\nGROUP BY user_id;",
    description: "Utilise une CTE pour isoler les commandes récentes puis agréger.",
    example: "Crée des commandes avant/après la limite temporelle et vérifie le filtrage."
  },
  {
    id: "sql-function-user-total",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "function",
    label: "Fonction PostgreSQL – total par utilisateur",
    command: "CREATE OR REPLACE FUNCTION get_user_total_orders(p_user_id INT)\nRETURNS NUMERIC AS $$\nDECLARE\n    v_total NUMERIC;\nBEGIN\n    SELECT COALESCE(SUM(total), 0)\n    INTO v_total\n    FROM orders\n    WHERE user_id = p_user_id;\n\n    RETURN v_total;\nEND;\n$$ LANGUAGE plpgsql;",
    description: "Fonction PL/pgSQL qui retourne la somme des commandes pour un utilisateur.",
    example: "Crée la fonction puis exécute 'SELECT get_user_total_orders(1);'."
  },
  {
    id: "sql-call-function-user-total",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "function",
    label: "Appel de la fonction get_user_total_orders",
    command: "SELECT get_user_total_orders(1) AS total_for_user_1;",
    description: "Exemple d'appel de la fonction précédente.",
    example: "Compare le résultat avec la somme calculée manuellement."
  },
  {
    id: "sql-coalesce",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "expression",
    label: "Remplacer les NULL par une valeur par défaut",
    command: "SELECT COALESCE(phone, 'N/A') AS phone_display FROM users;",
    description: "Remplace les valeurs NULL de phone par 'N/A'.",
    example: "Insère des users sans téléphone et vérifie le résultat de la requête."
  },
  {
    id: "sql-case-segmentation",
    framework: "SQL",
    env: "DB",
    os: "all",
    category: "expression",
    label: "Segmenter les commandes par montant",
    command: "SELECT id, total,\n       CASE WHEN total >= 100 THEN 'VIP' ELSE 'STANDARD' END AS segment\nFROM orders;",
    description: "Classe les commandes en segments selon leur montant.",
    example: "Insère des commandes > 100 et < 100 et vérifie la valeur de segment."
  }
];
