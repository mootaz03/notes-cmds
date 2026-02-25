// commands/terraform.js
export const terraformCommands = [
  // === Initialisation / modules ===
  {
    id: "tf-init",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "init",
    label: "Initialiser un projet Terraform",
    command: "terraform init",
    description: "Télécharge les providers et initialise le backend.",
    example: "À lancer après avoir créé/édité main.tf, backend.tf, etc."
  },
  {
    id: "tf-init-upgrade",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "init",
    label: "Init + mise à jour des providers",
    command: "terraform init -upgrade",
    description: "Met à jour les providers vers les dernières versions compatibles.",
    example: "Utile après avoir modifié les contraintes de version dans required_providers."
  },
  {
    id: "tf-get-modules",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "modules",
    label: "Télécharger les modules",
    command: "terraform get",
    description: "Récupère les modules référencés dans la config.",
    example: "Rarement nécessaire avec init moderne, mais utile sur anciens projets."
  },

  // === Validation / format ===
  {
    id: "tf-fmt",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "lint",
    label: "Formater les fichiers .tf",
    command: "terraform fmt",
    description: "Formate tous les fichiers Terraform selon les conventions.",
    example: "À intégrer dans la CI pour garantir un style homogène."
  },
  {
    id: "tf-validate",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "lint",
    label: "Valider la configuration",
    command: "terraform validate",
    description: "Vérifie que les fichiers .tf sont syntaxiquement valides.",
    example: "À lancer avant un plan pour détecter les erreurs évidentes."
  },

  // === Plan / Apply / Destroy ===
  {
    id: "tf-plan",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "plan",
    label: "Générer un plan d'exécution",
    command: "terraform plan",
    description: "Montre ce qui sera créé/modifié/détruit.",
    example: "Utilise terraform plan -out=tfplan pour sauvegarder le plan."
  },
  {
    id: "tf-plan-out",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "plan",
    label: "Plan vers un fichier binaire",
    command: "terraform plan -out=tfplan",
    description: "Sauvegarde le plan dans un fichier pour l'appliquer plus tard.",
    example: "tf apply tfplan → garantit que ce qui est appliqué est exactement ce qui a été planifié."
  },
  {
    id: "tf-apply",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "apply",
    label: "Appliquer les changements",
    command: "terraform apply",
    description: "Applique le plan, demande confirmation.",
    example: "En CI/CD, utilise terraform apply -auto-approve."
  },
  {
    id: "tf-apply-plan-file",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "apply",
    label: "Appliquer un plan existant",
    command: "terraform apply tfplan",
    description: "Applique le plan généré précédemment.",
    example: "Sépare la phase plan (avec review) de la phase apply en prod."
  },
  {
    id: "tf-destroy",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "destroy",
    label: "Détruire l'infrastructure",
    command: "terraform destroy",
    description: "Détruit toutes les ressources gérées par le state courant.",
    example: "À utiliser uniquement sur des environnements jetables (dev/sandbox)."
  },
  {
    id: "tf-destroy-target",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "destroy",
    label: "Détruire une ressource ciblée",
    command: "terraform destroy -target=aws_instance.my_vm",
    description: "Détruit uniquement la ressource ciblée.",
    example: "Utile pour supprimer une VM ou un module précis sans tout détruire."
  },

  // === State ===
  {
    id: "tf-state-list",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "state",
    label: "Lister les ressources dans le state",
    command: "terraform state list",
    description: "Afficher toutes les ressources connues du state.",
    example: "Permet de repérer une ressource à cibler ou à importer."
  },
  {
    id: "tf-state-show",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "state",
    label: "Voir les détails d'une ressource dans le state",
    command: "terraform state show aws_instance.my_vm",
    description: "Montre toutes les propriétés de la ressource stockées dans le state.",
    example: "Utile pour inspecter l'ID côté provider ou les attributs calculés."
  },
  {
    id: "tf-state-mv",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "state",
    label: "Renommer/déplacer une ressource dans le state",
    command: "terraform state mv module.old.aws_instance.vm module.new.aws_instance.vm",
    description: "Déplace une ressource dans le state sans la recréer.",
    example: "Indispensable lors de refactors de modules pour éviter les recréations destructives."
  },
  {
    id: "tf-state-rm",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "state",
    label: "Retirer une ressource du state",
    command: "terraform state rm aws_instance.my_vm",
    description: "Retire la ressource du state (elle reste dans le cloud mais n'est plus gérée).",
    example: "À utiliser avec précaution, en général avant un import propre."
  },

  // === Import / Taint / Refresh ===
  {
    id: "tf-import",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "import",
    label: "Importer une ressource existante",
    command: "terraform import aws_instance.my_vm i-0123456789abcdef0",
    description: "Associe une ressource existante dans le cloud à une ressource Terraform.",
    example: "Très utile pour reprendre la main sur des ressources créées manuellement."
  },
  {
    id: "tf-taint",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "taint",
    label: "Marquer une ressource à recréer",
    command: "terraform taint aws_instance.my_vm",
    description: "Marque une ressource comme corrompue pour forcer sa recréation au prochain apply.",
    example: "Après une mauvaise configuration manuelle, force la recréation propre."
  },
  {
    id: "tf-untaint",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "taint",
    label: "Annuler le taint",
    command: "terraform untaint aws_instance.my_vm",
    description: "Annule la marque de taint et évite la recréation.",
    example: "Si tu as taint par erreur une ressource critique."
  },
  {
    id: "tf-refresh",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "state",
    label: "Mettre à jour le state depuis le cloud (v0.12–0.14)",
    command: "terraform refresh",
    description: "Met à jour le state local en se basant sur la réalité du cloud (ancienne commande).",
    example: "Sur les versions récentes, plan/apply font déjà ce rafraîchissement."
  },

  // === Workspaces ===
  {
    id: "tf-workspace-list",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "workspace",
    label: "Lister les workspaces",
    command: "terraform workspace list",
    description: "Affiche les workspaces disponibles.",
    example: "Permet de voir dev, staging, prod si tu utilises ce pattern."
  },
  {
    id: "tf-workspace-new",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "workspace",
    label: "Créer un workspace",
    command: "terraform workspace new staging",
    description: "Crée un workspace staging avec son propre state.",
    example: "Utilisé pour séparer les états entre environnements."
  },
  {
    id: "tf-workspace-select",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "workspace",
    label: "Basculer de workspace",
    command: "terraform workspace select staging",
    description: "Change le workspace courant.",
    example: "Avant un plan/apply, vérifie que tu es sur le bon workspace."
  },

  // === Cloud spécifique (exemples génériques) ===
  {
    id: "tf-plan-var-file",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "plan",
    label: "Plan avec fichier de variables",
    command: "terraform plan -var-file=env/dev.tfvars",
    description: "Charge un fichier de variables spécifique à un environnement.",
    example: "Utilise un tfvars par env : dev.tfvars, staging.tfvars, prod.tfvars."
  },
  {
    id: "tf-apply-auto-approve",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "apply",
    label: "Apply non interactif (CI/CD)",
    command: "terraform apply -auto-approve",
    description: "Applique le plan sans demander de confirmation.",
    example: "À n'utiliser que dans des pipelines contrôlés."
  },
  {
    id: "tf-output",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "output",
    label: "Afficher les outputs",
    command: "terraform output",
    description: "Affiche les outputs définis dans la configuration.",
    example: "Récupérer un endpoint, un mot de passe généré, un bucket, etc."
  },
  {
    id: "tf-output-json",
    framework: "Terraform",
    env: "CLI",
    os: "all",
    category: "output",
    label: "Outputs au format JSON",
    command: "terraform output -json",
    description: "Retourne les outputs en JSON (pratique pour la CI ou des scripts).",
    example: "Parse le résultat dans un script Python/Bash pour les utiliser ensuite."
  }
];
