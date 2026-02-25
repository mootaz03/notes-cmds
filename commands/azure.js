// commands/azure.js
export const azureCommands = [
  // === Auth / abonnement ===
  {
    id: "az-login",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Se connecter à Azure",
    command: "az login",
    description: "Ouvre un navigateur pour s'authentifier auprès d'Azure.",
    example: "Ensuite, az account show pour vérifier l'abonnement courant."
  },
  {
    id: "az-account-show",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Afficher l'abonnement courant",
    command: "az account show",
    description: "Affiche les infos sur l'abonnement actif (id, tenant, user).",
    example: "Permet de vérifier que tu n'es pas sur le mauvais tenant / subscription."
  },
  {
    id: "az-account-list",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Lister les abonnements",
    command: "az account list -o table",
    description: "Liste les subscriptions disponibles pour ton compte.",
    example: "Sélectionne-en une avec az account set --subscription <ID>."
  },
  {
    id: "az-account-set",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Changer d'abonnement",
    command: "az account set --subscription <SUBSCRIPTION_ID>",
    description: "Change la subscription active pour toutes les commandes suivantes.",
    example: "Important pour éviter de déployer sur la mauvaise subscription."
  },

  // === Resource groups ===
  {
    id: "az-group-list",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "rg",
    label: "Lister les resource groups",
    command: "az group list -o table",
    description: "Affiche tous les resource groups avec leur localisation.",
    example: "Filtre avec --query pour un pattern spécifique."
  },
  {
    id: "az-group-create",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "rg",
    label: "Créer un resource group",
    command: "az group create --name my-rg --location westeurope",
    description: "Crée un resource group dans la région spécifiée.",
    example: "Toujours grouper les ressources d'un projet dans un RG dédié."
  },
  {
    id: "az-group-delete",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "rg",
    label: "Supprimer un resource group",
    command: "az group delete --name my-rg --yes --no-wait",
    description: "Supprime un RG et toutes les ressources associées.",
    example: "À utiliser pour nettoyer des environnements de test/POC."
  },

  // === VM ===
  {
    id: "az-vm-list",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "vm",
    label: "Lister les machines virtuelles",
    command: "az vm list -o table",
    description: "Affiche un tableau de toutes les VMs de la subscription.",
    example: "Ajoute --resource-group pour filtrer."
  },
  {
    id: "az-vm-start",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "vm",
    label: "Démarrer une VM",
    command: "az vm start --name my-vm --resource-group my-rg",
    description: "Démarre une VM stoppée.",
    example: "Réduit la facture en arrêtant les VMs hors heures puis en les redémarrant."
  },
  {
    id: "az-vm-stop",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "vm",
    label: "Arrêter une VM (deallocate)",
    command: "az vm deallocate --name my-vm --resource-group my-rg",
    description: "Arrête la VM et libère les ressources compute (facturation stoppée).",
    example: "Différent de stop simple qui facture encore pour le compute."
  },

  // === Storage / Blob ===
  {
    id: "az-storage-account-list",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "storage",
    label: "Lister les comptes de stockage",
    command: "az storage account list -o table",
    description: "Affiche les comptes de stockage de la subscription.",
    example: "Repère celui utilisé pour les logs, backups, etc."
  },
  {
    id: "az-storage-container-list",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "storage",
    label: "Lister les conteneurs Blob",
    command: "az storage container list --account-name mystorage -o table",
    description: "Liste les containers dans un compte de stockage.",
    example: "Nécessite un contexte d'auth (clé, SAS ou login)."
  },
  {
    id: "az-storage-blob-upload",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "storage",
    label: "Uploader un blob",
    command: "az storage blob upload --account-name mystorage \\\n  --container-name mycontainer \\\n  --file ./build.zip --name build.zip",
    description: "Upload un fichier local dans un container Blob.",
    example: "Utile pour déployer un package vers une WebApp ou Function."
  },

  // === AKS (Kubernetes) ===
  {
    id: "az-aks-list",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "aks",
    label: "Lister les clusters AKS",
    command: "az aks list -o table",
    description: "Affiche les clusters Kubernetes managés AKS.",
    example: "Filtre par resource group si nécessaire."
  },
  {
    id: "az-aks-get-credentials",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "aks",
    label: "Configurer kubectl pour un AKS",
    command: "az aks get-credentials --resource-group my-rg --name my-aks",
    description: "Ajoute le cluster AKS à kubeconfig.",
    example: "Ensuite, kubectl get nodes pour vérifier l'accès."
  },

  // === App Service / Functions ===
  {
    id: "az-webapp-list",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "appservice",
    label: "Lister les WebApps",
    command: "az webapp list -o table",
    description: "Affiche les applications web (App Service).",
    example: "Repère l'app à déployer via az webapp up ou zip deploy."
  },
  {
    id: "az-webapp-log-tail",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "appservice",
    label: "Suivre les logs d'une WebApp",
    command: "az webapp log tail --name my-app --resource-group my-rg",
    description: "Affiche les logs applicatifs d'une WebApp en temps réel.",
    example: "Très utile pour debug sans se connecter au portail."
  },

  // === ACR (Azure Container Registry) ===
  {
    id: "az-acr-login",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "acr",
    label: "Login Docker sur ACR",
    command: "az acr login --name myregistry",
    description: "Permet d'utiliser docker push/pull sur myregistry.azurecr.io.",
    example: "Tagge une image : docker tag app myregistry.azurecr.io/app:1.0.0."
  },
  {
    id: "az-acr-repositories-list",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "acr",
    label: "Lister les repositories ACR",
    command: "az acr repository list --name myregistry -o table",
    description: "Liste les images stockées dans le registry ACR.",
    example: "Permet de vérifier quels tags sont publiés."
  },

  // === Az Monitor / Logs ===
  {
    id: "az-monitor-activity-log",
    framework: "Azure",
    env: "CLI",
    os: "all",
    category: "monitor",
    label: "Afficher l'activity log",
    command: "az monitor activity-log list --max-events 50",
    description: "Liste les 50 derniers événements d'activité au niveau abonnement.",
    example: "Permet d’identifier qui a créé/supprimé des ressources."
  },

  // === Notes pratiques ===
  {
    id: "az-note-resource-naming",
    framework: "Azure",
    env: "note",
    os: "all",
    category: "note",
    label: "Convention de nommage recommandée",
    command: "Pattern : <app>-<env>-<region>-<type>\nEx: myapp-dev-weu-rg, myapp-prod-weu-aks.",
    description: "Avoir des conventions de nommage strictes facilite la gestion multi-environnements.",
    example: "Documenter cela dans les guidelines d'équipe."
  }
];
