// commands/python.js
export const pythonCommands = [
  // === Bases langage ===
  {
    id: "py-venv-create",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "env",
    label: "Créer un environnement virtuel",
    command: "python -m venv .venv",
    description: "Crée un environnement virtuel isolé dans le dossier .venv.",
    example: "Ensuite : source .venv/bin/activate (Linux) ou .venv\\Scripts\\activate (Windows)."
  },
  {
    id: "py-venv-activate-linux",
    framework: "Python",
    env: "CLI",
    os: "linux",
    category: "env",
    label: "Activer venv (Linux/macOS)",
    command: "source .venv/bin/activate",
    description: "Active l'environnement virtuel .venv.",
    example: "Le prompt affiche (.venv) et pip installe dans cet env."
  },
  {
    id: "py-venv-activate-windows",
    framework: "Python",
    env: "CLI",
    os: "windows",
    category: "env",
    label: "Activer venv (Windows)",
    command: ".venv\\Scripts\\activate",
    description: "Active venv sous Windows (cmd/Powershell).",
    example: "Le prompt affiche (.venv)."
  },
  {
    id: "py-install-package",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "pip",
    label: "Installer un package avec pip",
    command: "pip install requests",
    description: "Installe la bibliothèque requests dans l'env courant.",
    example: "Vérifie avec python -c \"import requests; print(requests.__version__)\"."
  },
  {
    id: "py-freeze-requirements",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "pip",
    label: "Générer requirements.txt",
    command: "pip freeze > requirements.txt",
    description: "Sauvegarde les versions exactes des dépendances.",
    example: "Permet de recréer le même environnement ailleurs avec pip install -r requirements.txt."
  },
  {
    id: "py-run-script",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "run",
    label: "Exécuter un script Python",
    command: "python main.py",
    description: "Lance le fichier main.py avec l'interpréteur Python.",
    example: "Assure-toi d'être dans l'environnement virtuel approprié."
  },

  // === Syntaxe de base ===
  {
    id: "py-hello-world",
    framework: "Python",
    env: "code",
    os: "all",
    category: "basics",
    label: "Hello world",
    command: "print(\"Hello, world!\")",
    description: "Affiche une chaîne dans la console.",
    example: "À mettre dans un fichier hello.py puis python hello.py."
  },
  {
    id: "py-f-string",
    framework: "Python",
    env: "code",
    os: "all",
    category: "basics",
    label: "f-string formatage moderne",
    command: "name = \"Alice\"\nprint(f\"Hello {name}!\")",
    description: "Utilise les f-strings pour interpoler des variables dans une chaîne.",
    example: "Plus lisible que 'Hello %s' % name."
  },
  {
    id: "py-list-comprehension",
    framework: "Python",
    env: "code",
    os: "all",
    category: "basics",
    label: "List comprehension",
    command: "squares = [x * x for x in range(10)]",
    description: "Construit une liste à partir d'une boucle.",
    example: "Très idiomatique en Python pour transformer/filtrer des séquences."
  },
  {
    id: "py-dict-comprehension",
    framework: "Python",
    env: "code",
    os: "all",
    category: "basics",
    label: "Dict comprehension",
    command: "mapping = {user.id: user.name for user in users}",
    description: "Construit un dict à partir d'une séquence d'objets.",
    example: "Pratique pour indexer des résultats par ID."
  },
  {
    id: "py-with-open",
    framework: "Python",
    env: "code",
    os: "all",
    category: "io",
    label: "Lire un fichier avec context manager",
    command: "with open(\"file.txt\", \"r\", encoding=\"utf-8\") as f:\n    data = f.read()",
    description: "Gestion automatique de la fermeture du fichier.",
    example: "Évite les fuites de file descriptors."
  },
  {
    id: "py-try-except",
    framework: "Python",
    env: "code",
    os: "all",
    category: "basics",
    label: "Gestion d'exception simple",
    command: "try:\n    risky_operation()\nexcept Exception as e:\n    print(f\"Erreur: {e}\")",
    description: "Capture les exceptions et affiche le message.",
    example: "Toujours logguer ou traiter les erreurs plutôt que de les ignorer."
  },

  // === HTTP / APIs (requests) ===
  {
    id: "py-requests-get",
    framework: "Python",
    env: "code",
    os: "all",
    category: "http",
    label: "GET HTTP avec requests",
    command: "import requests\n\nresp = requests.get(\"https://api.example.com/items\")\nprint(resp.status_code)\nprint(resp.json())",
    description: "Effectue une requête GET et parse une réponse JSON.",
    example: "À utiliser dans des scripts pour consommer des APIs internes/externes."
  },
  {
    id: "py-requests-post-json",
    framework: "Python",
    env: "code",
    os: "all",
    category: "http",
    label: "POST JSON avec requests",
    command: "import requests\n\npayload = {\"name\": \"test\"}\nresp = requests.post(\"https://api.example.com/items\", json=payload)\nprint(resp.json())",
    description: "Envoie un JSON en POST et lit la réponse.",
    example: "Permet de tester une API REST sans Postman."
  },

  // === CLI / scripts ops ===
  {
    id: "py-argparse-cli",
    framework: "Python",
    env: "code",
    os: "all",
    category: "cli",
    label: "Script CLI simple avec argparse",
    command: "import argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument(\"--env\", default=\"dev\")\nargs = parser.parse_args()\nprint(f\"Running for env: {args.env}\")",
    description: "Permet de créer des scripts en ligne de commande avec options.",
    example: "python script.py --env=prod."
  },
  {
    id: "py-logging-basic",
    framework: "Python",
    env: "code",
    os: "all",
    category: "logging",
    label: "Configurer le logging basique",
    command: "import logging\n\nlogging.basicConfig(level=logging.INFO)\nlogging.info(\"App démarrée\")",
    description: "Initialise un logger simple sur stdout.",
    example: "Préférer logging à print dans les applications."
  },

  // === Data / NumPy / Pandas ===
  {
    id: "py-pip-install-numpy-pandas",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "data",
    label: "Installer NumPy et Pandas",
    command: "pip install numpy pandas",
    description: "Installe les libs de base pour data science.",
    example: "Ensuite: import numpy as np; import pandas as pd."
  },
  {
    id: "py-numpy-array",
    framework: "Python",
    env: "code",
    os: "all",
    category: "data",
    label: "Créer un array NumPy",
    command: "import numpy as np\n\narr = np.array([1, 2, 3])\nprint(arr * 2)",
    description: "Tableau numérique vectorisé.",
    example: "Permet des calculs rapides sur des vecteurs/matrices."
  },
  {
    id: "py-pandas-read-csv",
    framework: "Python",
    env: "code",
    os: "all",
    category: "data",
    label: "Lire un CSV avec Pandas",
    command: "import pandas as pd\n\ndf = pd.read_csv(\"data.csv\")\nprint(df.head())",
    description: "Charge un CSV dans un DataFrame.",
    example: "Très utilisé pour explorations et transformations de données."
  },
  {
    id: "py-pandas-groupby",
    framework: "Python",
    env: "code",
    os: "all",
    category: "data",
    label: "GroupBy et agrégation",
    command: "import pandas as pd\n\ndf = pd.read_csv(\"orders.csv\")\nagg = df.groupby(\"user_id\")[\"total\"].sum()\nprint(agg.head())",
    description: "Somme par user_id avec Pandas.",
    example: "Équivalent d'un GROUP BY SQL côté Python."
  },

  // === ML de base (scikit-learn) ===
  {
    id: "py-install-sklearn",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "ml",
    label: "Installer scikit-learn",
    command: "pip install scikit-learn",
    description: "Librairie de ML classique (régression, classification, clustering...).",
    example: "Ensuite: from sklearn.model_selection import train_test_split."
  },
  {
    id: "py-sklearn-train-test-split",
    framework: "Python",
    env: "code",
    os: "all",
    category: "ml",
    label: "train_test_split",
    command: "from sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
    description: "Sépare les données en train/test.",
    example: "Standard pour évaluer un modèle ML."
  },
  {
    id: "py-sklearn-logreg",
    framework: "Python",
    env: "code",
    os: "all",
    category: "ml",
    label: "Régression logistique",
    command: "from sklearn.linear_model import LogisticRegression\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\nprint(model.score(X_test, y_test))",
    description: "Classeur simple pour problèmes de classification binaire.",
    example: "Bon baseline pour des tâches de scoring."
  },
  {
    id: "py-sklearn-random-forest",
    framework: "Python",
    env: "code",
    os: "all",
    category: "ml",
    label: "RandomForestClassifier",
    command: "from sklearn.ensemble import RandomForestClassifier\n\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\nrf.fit(X_train, y_train)\nprint(rf.feature_importances_)",
    description: "Modèle d'ensemble robuste pour de nombreux cas tabulaires.",
    example: "Souvent très performant sans tuning énorme."
  },

  // === Deep Learning (PyTorch / TensorFlow) ===
  {
    id: "py-install-pytorch",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "dl",
    label: "Installer PyTorch (CPU)",
    command: "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu",
    description: "Installe PyTorch pour CPU (version simple).",
    example: "Adapter la commande selon GPU/CUDA si dispo."
  },
  {
    id: "py-pytorch-tensor",
    framework: "Python",
    env: "code",
    os: "all",
    category: "dl",
    label: "Créer un tenseur PyTorch",
    command: "import torch\n\nx = torch.tensor([[1., 2.], [3., 4.]])\nprint(x @ x)",
    description: "Tenseur 2D et multiplication matricielle.",
    example: "Base de tout modèle deep learning PyTorch."
  },
  {
    id: "py-install-tensorflow",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "dl",
    label: "Installer TensorFlow",
    command: "pip install tensorflow",
    description: "Installe TensorFlow (CPU par défaut).",
    example: "Ensuite: import tensorflow as tf."
  },
  {
    id: "py-tf-keras-sequential",
    framework: "Python",
    env: "code",
    os: "all",
    category: "dl",
    label: "Keras Sequential model simple",
    command: "import tensorflow as tf\n\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(64, activation='relu', input_shape=(10,)),\n    tf.keras.layers.Dense(1)\n])\nmodel.compile(optimizer='adam', loss='mse')",
    description: "Réseau de neurones simple pour régression.",
    example: "Ensuite: model.fit(X_train, y_train, epochs=10, batch_size=32)."
  },

  // === Data pipeline / notebooks ===
  {
    id: "py-install-jupyter",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "notebook",
    label: "Installer Jupyter",
    command: "pip install jupyterlab",
    description: "Installe JupyterLab pour notebooks interactifs.",
    example: "Ensuite: jupyter lab pour lancer l'interface web."
  },
  {
    id: "py-jupyter-start",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "notebook",
    label: "Lancer JupyterLab",
    command: "jupyter lab",
    description: "Démarre l'interface JupyterLab sur http://localhost:8888.",
    example: "Idéal pour exploration data / prototypage ML."
  },

  // === Packaging / outils avancés ===
  {
    id: "py-poetry-init",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "packaging",
    label: "Initialiser un projet avec Poetry",
    command: "poetry init",
    description: "Configure pyproject.toml pour gérer dépendances et packaging.",
    example: "Réponds aux questions pour définir nom, version, dépendances."
  },
  {
    id: "py-black-format",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "lint",
    label: "Formater le code avec Black",
    command: "black .",
    description: "Formateur de code Python opinionated (PEP8).",
    example: "À intégrer dans la CI ou pre-commit pour formater automatiquement."
  },
  {
    id: "py-mypy-typecheck",
    framework: "Python",
    env: "CLI",
    os: "all",
    category: "lint",
    label: "Vérifier les types avec mypy",
    command: "mypy src/",
    description: "Analyse statique des types pour du Python typé (PEP 484).",
    example: "Ajoute des annotations de type pour améliorer la robustesse des gros projets."
  }
];
