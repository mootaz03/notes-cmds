// commands/aws.js
export const awsCommands = [
  // === Auth / profils ===
  {
    id: "aws-configure",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Configurer les credentials AWS",
    command: "aws configure",
    description: "Configure access key, secret, région et format par défaut.",
    example: "Utile pour initialiser ~/.aws/credentials et ~/.aws/config."
  },
  {
    id: "aws-configure-profile",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Configurer un profil nommé",
    command: "aws configure --profile myprofile",
    description: "Crée un profil nommé myprofile avec ses propres credentials.",
    example: "Ensuite : aws s3 ls --profile myprofile."
  },
  {
    id: "aws-list-profiles",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "auth",
    label: "Lister les profils AWS configurés",
    command: "aws configure list-profiles",
    description: "Affiche les profils disponibles dans ~/.aws/credentials.",
    example: "Permet de choisir rapidement quel profil utiliser."
  },

  // === Infos / compte / régions ===
  {
    id: "aws-sts-get-caller-identity",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "info",
    label: "Savoir quel compte / utilisateur est utilisé",
    command: "aws sts get-caller-identity",
    description: "Retourne l'ARN de l'utilisateur/role courant, l'account ID, etc.",
    example: "Vérifie que tu n'agis pas sur le mauvais compte (ex: prod)."
  },
  {
    id: "aws-ec2-describe-regions",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "info",
    label: "Lister les régions AWS",
    command: "aws ec2 describe-regions --all-regions",
    description: "Affiche la liste des régions disponibles.",
    example: "Permet de trouver le code de région (eu-west-1, eu-central-1...)."
  },

  // === S3 ===
  {
    id: "aws-s3-ls",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "s3",
    label: "Lister les buckets S3",
    command: "aws s3 ls",
    description: "Affiche les buckets S3 du compte.",
    example: "Ajoute --profile ou --region si besoin."
  },
  {
    id: "aws-s3-ls-bucket",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "s3",
    label: "Lister le contenu d'un bucket",
    command: "aws s3 ls s3://my-bucket/path/",
    description: "Affiche les objets présents dans un chemin S3.",
    example: "Utile pour vérifier la présence de builds, backups, etc."
  },
  {
    id: "aws-s3-sync",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "s3",
    label: "Synchroniser un dossier local vers S3",
    command: "aws s3 sync ./build/ s3://my-bucket/app-build/",
    description: "Synchronise un répertoire local avec un bucket S3.",
    example: "Très utilisé pour déployer un front static sur S3."
  },
  {
    id: "aws-s3-cp-recursive",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "s3",
    label: "Copie récursive vers/depuis S3",
    command: "aws s3 cp ./data/ s3://my-bucket/data/ --recursive",
    description: "Copie récursivement un dossier local vers S3 (ou inversement).",
    example: "Pour uploader un dataset ou des artefacts de build."
  },

  // === EC2 ===
  {
    id: "aws-ec2-describe-instances",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "ec2",
    label: "Lister les instances EC2",
    command: "aws ec2 describe-instances",
    description: "Retourne toutes les instances EC2 (JSON).",
    example: "Ajoute --filters pour limiter par tag ou état."
  },
  {
    id: "aws-ec2-describe-instances-filter-tag",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "ec2",
    label: "Lister les instances par tag",
    command: "aws ec2 describe-instances --filters \"Name=tag:Name,Values=my-app-*\"",
    description: "Filtre les instances dont le tag Name matche my-app-*.",
    example: "Pratique pour trouver tous les serveurs d'une même application."
  },
  {
    id: "aws-ec2-start-instance",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "ec2",
    label: "Démarrer une instance EC2",
    command: "aws ec2 start-instances --instance-ids i-0123456789abcdef0",
    description: "Démarre une instance EC2 stoppée.",
    example: "À utiliser dans des scripts de start/stop d'environnements non 24/7."
  },
  {
    id: "aws-ec2-stop-instance",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "ec2",
    label: "Arrêter une instance EC2",
    command: "aws ec2 stop-instances --instance-ids i-0123456789abcdef0",
    description: "Stoppe une instance EC2 (disque conservé, compute facturé non).",
    example: "Important pour réduire les coûts en dev/test."
  },

  // === EKS (Kubernetes) ===
  {
    id: "aws-eks-update-kubeconfig",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "eks",
    label: "Configurer kubectl pour un cluster EKS",
    command: "aws eks update-kubeconfig --name my-cluster --region eu-west-1",
    description: "Ajoute le cluster EKS dans ton kubeconfig.",
    example: "Ensuite, tu peux utiliser kubectl get pods etc. sur ce cluster."
  },
  {
    id: "aws-eks-list-clusters",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "eks",
    label: "Lister les clusters EKS",
    command: "aws eks list-clusters",
    description: "Affiche les noms des clusters EKS existants.",
    example: "Utile pour vérifier les environnements disponibles."
  },

  // === IAM / roles ===
  {
    id: "aws-iam-list-users",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "iam",
    label: "Lister les utilisateurs IAM",
    command: "aws iam list-users",
    description: "Liste les utilisateurs IAM du compte.",
    example: "Permet de vérifier les comptes existants, à désactiver/provisionner."
  },
  {
    id: "aws-iam-list-roles",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "iam",
    label: "Lister les roles IAM",
    command: "aws iam list-roles",
    description: "Affiche les rôles IAM définis dans le compte.",
    example: "Très utile pour déboguer un problème d'assume-role."
  },
  {
    id: "aws-sts-assume-role",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "iam",
    label: "Assumer un role IAM",
    command: "aws sts assume-role --role-arn arn:aws:iam::ACCOUNT:role/RoleName --role-session-name mysession",
    description: "Génère des credentials temporaires pour un role IAM.",
    example: "À stocker dans des variables d'env temporaires pour travailler avec ce rôle."
  },

  // === CloudWatch Logs ===
  {
    id: "aws-cw-describe-log-groups",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "logs",
    label: "Lister les log groups CloudWatch",
    command: "aws logs describe-log-groups",
    description: "Affiche les log groups CloudWatch Logs.",
    example: "Permet de trouver les logs d'un service donné (Lambda, ECS...)."
  },
  {
    id: "aws-cw-get-log-events",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "logs",
    label: "Lire les logs d'un log stream",
    command: "aws logs get-log-events --log-group-name /aws/lambda/my-func --log-stream-name <stream>",
    description: "Récupère les events d'un log stream CloudWatch.",
    example: "Utilise describe-log-streams pour trouver le stream le plus récent."
  },

  // === Lambda ===
  {
    id: "aws-lambda-list-functions",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "lambda",
    label: "Lister les Lambdas",
    command: "aws lambda list-functions",
    description: "Affiche les fonctions Lambda dans la région courante.",
    example: "Permet de repérer rapidement les noms pour invocation/MAJ."
  },
  {
    id: "aws-lambda-invoke",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "lambda",
    label: "Invoquer une Lambda",
    command: "aws lambda invoke --function-name my-func out.json",
    description: "Invoque la fonction et écrit la réponse dans out.json.",
    example: "Inspecte out.json pour voir le retour et le status code."
  },

  // === CloudFormation ===
  {
    id: "aws-cfn-list-stacks",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "cloudformation",
    label: "Lister les stacks CloudFormation",
    command: "aws cloudformation list-stacks --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE",
    description: "Affiche les stacks en état stable (créées/mises à jour).",
    example: "Pratique pour vérifier l'état d'un déploiement infra."
  },
  {
    id: "aws-cfn-describe-stack-events",
    framework: "AWS",
    env: "CLI",
    os: "all",
    category: "cloudformation",
    label: "Voir les events d'un stack",
    command: "aws cloudformation describe-stack-events --stack-name my-stack",
    description: "Affiche les events (création, erreurs) d'un stack CloudFormation.",
    example: "Indispensable pour diagnostiquer un échec de déploiement."
  }
];
