// commands/gcloud.js
export const gcloudCommands = [
  // === Auth / projet ===
  {
    id: "gcloud-auth-login",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Se connecter à GCP",
    command: "gcloud auth login",
    description: "Ouvre un navigateur pour s'authentifier dans Google Cloud.",
    example: "Ensuite, configure le projet par défaut."
  },
  {
    id: "gcloud-config-list",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Lister les configurations gcloud",
    command: "gcloud config configurations list",
    description: "Affiche les configurations (projets, comptes) enregistrées.",
    example: "Permet de gérer plusieurs contexts (dev, prod, perso...)."
  },
  {
    id: "gcloud-config-set-project",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Définir le projet GCP courant",
    command: "gcloud config set project my-project-id",
    description: "Définit le projet par défaut pour toutes les commandes.",
    example: "Important pour éviter d'agir sur le mauvais projet."
  },
  {
    id: "gcloud-config-set-region",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Définir la région par défaut",
    command: "gcloud config set compute/region europe-west1",
    description: "Configure la région par défaut pour les ressources compute.",
    example: "Similaire pour la zone : gcloud config set compute/zone europe-west1-b."
  },

  // === Compute Engine ===
  {
    id: "gcloud-compute-list-instances",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "compute",
    label: "Lister les VM (instances)",
    command: "gcloud compute instances list",
    description: "Affiche les instances Compute Engine du projet.",
    example: "Filtre par zone avec --zones."
  },
  {
    id: "gcloud-compute-start-instance",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "compute",
    label: "Démarrer une instance",
    command: "gcloud compute instances start my-vm --zone=europe-west1-b",
    description: "Démarre une VM Compute Engine.",
    example: "À faire avant un ssh si la VM était stoppée."
  },
  {
    id: "gcloud-compute-stop-instance",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "compute",
    label: "Arrêter une instance",
    command: "gcloud compute instances stop my-vm --zone=europe-west1-b",
    description: "Stoppe une VM (facturation disque continue, compute non).",
    example: "Bon réflexe pour les environnements de dev non 24/7."
  },
  {
    id: "gcloud-compute-ssh",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "compute",
    label: "SSH sur une instance",
    command: "gcloud compute ssh my-vm --zone=europe-west1-b",
    description: "Ouvre une session SSH sur la VM (clés gérées par gcloud).",
    example: "Pas besoin de gérer soi-même les clés ssh."
  },

  // === GKE (Kubernetes) ===
  {
    id: "gcloud-gke-get-credentials",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "gke",
    label: "Configurer kubectl pour un cluster GKE",
    command: "gcloud container clusters get-credentials my-cluster --zone=europe-west1-b",
    description: "Ajoute le cluster GKE à kubeconfig.",
    example: "Ensuite: kubectl get nodes pour vérifier l'accès."
  },
  {
    id: "gcloud-gke-list-clusters",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "gke",
    label: "Lister les clusters GKE",
    command: "gcloud container clusters list",
    description: "Affiche tous les clusters Kubernetes managés (GKE).",
    example: "Filtre par région/zone si nécessaire."
  },

  // === Cloud Storage (GCS) ===
  {
    id: "gcloud-gsutil-ls-buckets",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "storage",
    label: "Lister les buckets GCS",
    command: "gsutil ls",
    description: "Affiche tous les buckets du projet.",
    example: "gsutil ls gs://my-bucket pour voir le contenu d'un bucket."
  },
  {
    id: "gcloud-gsutil-cp",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "storage",
    label: "Copier des fichiers vers GCS",
    command: "gsutil cp ./data/file.txt gs://my-bucket/data/",
    description: "Copie un fichier local vers un bucket GCS.",
    example: "Ajoute -r pour copie récursive."
  },
  {
    id: "gcloud-gsutil-rsync",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "storage",
    label: "Synchroniser un dossier avec GCS",
    command: "gsutil -m rsync -r ./build gs://my-bucket/build",
    description: "Synchronisation récursive avec parallélisme (-m).",
    example: "Très utile pour déployer un front static sur GCS."
  },

  // === Cloud Run ===
  {
    id: "gcloud-run-deploy",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "cloudrun",
    label: "Déployer un service Cloud Run",
    command: "gcloud run deploy my-service \\\n  --image=gcr.io/my-project/my-image:latest \\\n  --region=europe-west1 \\\n  --platform=managed",
    description: "Déploie une image container sur Cloud Run.",
    example: "Ajoute --allow-unauthenticated pour exposer publiquement l'URL."
  },
  {
    id: "gcloud-run-list",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "cloudrun",
    label: "Lister les services Cloud Run",
    command: "gcloud run services list --platform=managed --region=europe-west1",
    description: "Affiche les services Cloud Run managés.",
    example: "Permet de vérifier les endpoints déployés."
  },

  // === Cloud Functions ===
  {
    id: "gcloud-functions-list",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "functions",
    label: "Lister les Cloud Functions",
    command: "gcloud functions list",
    description: "Affiche les fonctions déployées.",
    example: "Filtre par région avec --region."
  },

  // === IAM / rôles ===
  {
    id: "gcloud-iam-list-service-accounts",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "iam",
    label: "Lister les comptes de service",
    command: "gcloud iam service-accounts list",
    description: "Affiche les service accounts du projet.",
    example: "Utile pour associer un service account à un GKE node pool ou Cloud Run."
  },
  {
    id: "gcloud-project-get-iam-policy",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "iam",
    label: "Voir la policy IAM d'un projet",
    command: "gcloud projects get-iam-policy my-project-id",
    description: "Affiche les bindings IAM au niveau projet.",
    example: "Permet de vérifier qui a quels rôles (Owner, Editor, etc.)."
  },

  // === Logging / Monitoring ===
  {
    id: "gcloud-logs-read",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "logs",
    label: "Lire des logs Cloud Logging",
    command: "gcloud logging read \"resource.type=gce_instance\" --limit=50 --format=json",
    description: "Lit les 50 derniers logs pour les instances GCE.",
    example: "Adapte le filter pour d'autres ressources (cloud_run_revision, k8s_container...)."
  },
  {
    id: "gcloud-logs-tail",
    framework: "GCloud",
    env: "CLI",
    os: "all",
    category: "logs",
    label: "Suivre des logs en temps réel",
    command: "gcloud logging tail \"resource.type=cloud_run_revision AND resource.labels.service_name=my-service\"",
    description: "Stream des logs Cloud Run en temps réel.",
    example: "Très utile pour diagnostiquer un déploiement Cloud Run."
  },

  // === Notes pratiques ===
  {
    id: "gcloud-note-project-structure",
    framework: "GCloud",
    env: "note",
    os: "all",
    category: "note",
    label: "Organisation recommandée des projets",
    command: "Utiliser un projet GCP par environnement majeur (dev, staging, prod) ou par domaine applicatif.\nÉviter de mélanger dev & prod dans le même projet.",
    description: "Simplifie la gestion des IAM, quotas et facturation.",
    example: "ex: myapp-dev, myapp-staging, myapp-prod comme 3 projets séparés."
  }
];
