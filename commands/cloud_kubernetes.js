// commands/cloud_kubernetes.js
export const cloudKubeCommands = [
  // === CONTEXTES / CLUSTERS ===
  {
    id: "kubectl-config-current-context",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "context",
    label: "Afficher le contexte Kubernetes courant",
    command: "kubectl config current-context",
    description: "Affiche le contexte actuellement utilisé (cluster + user + namespace par défaut).",
    example: "Vérifie que tu es bien sur le bon cluster (prod vs preprod vs dev) avant de déployer."
  },
  {
    id: "kubectl-config-get-contexts",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "context",
    label: "Lister tous les contextes",
    command: "kubectl config get-contexts",
    description: "Liste tous les contextes configurés dans ton kubeconfig.",
    example: "Permet de voir les différents clusters auxquels tu peux te connecter."
  },
  {
    id: "kubectl-config-use-context",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "context",
    label: "Basculer de contexte (changer de cluster)",
    command: "kubectl config use-context mon-contexte",
    description: "Change de contexte Kubernetes pour pointer vers un autre cluster/namespace.",
    example: "Très important pour éviter de déployer par erreur sur prod."
  },
  {
    id: "kubectl-config-view",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "context",
    label: "Voir la configuration kubeconfig",
    command: "kubectl config view --minify",
    description: "Affiche uniquement les infos du contexte courant (cluster, user, namespace).",
    example: "Utile pour débugger un problème de connexion (certificat, endpoint API...)."
  },

  // === NAMESPACES ===
  {
    id: "kubectl-get-namespaces",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "namespace",
    label: "Lister les namespaces",
    command: "kubectl get ns",
    description: "Affiche tous les namespaces du cluster.",
    example: "Permet de repérer les espaces dédiés (dev, test, prod...)."
  },
  {
    id: "kubectl-create-namespace",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "namespace",
    label: "Créer un namespace",
    command: "kubectl create namespace my-namespace",
    description: "Crée un nouveau namespace pour isoler ressources et quotas.",
    example: "Pratique pour isoler un projet ou une feature branch."
  },
  {
    id: "kubectl-delete-namespace",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "namespace",
    label: "Supprimer un namespace",
    command: "kubectl delete namespace my-namespace",
    description: "Supprime un namespace et toutes les ressources associées (IRRÉVERSIBLE).",
    example: "À utiliser uniquement sur des environnements de test ou en sachant exactement ce que tu fais."
  },

  // === NODES / CLUSTER HEALTH ===
  {
    id: "kubectl-get-nodes",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "cluster",
    label: "Lister les nœuds du cluster",
    command: "kubectl get nodes",
    description: "Affiche la liste des nœuds (workers) avec leur statut global.",
    example: "Utile pour vérifier que tous les nœuds sont Ready."
  },
  {
    id: "kubectl-describe-node",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "cluster",
    label: "Inspecter un nœud",
    command: "kubectl describe node <node-name>",
    description: "Affiche les détails d'un nœud : labels, taints, ressources, événements.",
    example: "Très utile pour diagnostiquer des pods qui ne se placent pas (taints, manque de ressources...)."
  },
  {
    id: "kubectl-top-nodes",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "monitoring",
    label: "Voir l'utilisation CPU/mémoire des nœuds",
    command: "kubectl top nodes",
    description: "Affiche les ressources consommées par chaque nœud (metrics-server requis).",
    example: "Permet de repérer rapidement un nœud surchargé."
  },
  {
    id: "kubectl-cordon-node",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "cluster",
    label: "Cordonner un nœud (ne plus scheduler dessus)",
    command: "kubectl cordon <node-name>",
    description: "Marque un nœud comme Unschedulable (les nouveaux pods ne seront plus planifiés dessus).",
    example: "Utilisé avant un drain ou une maintenance du nœud."
  },
  {
    id: "kubectl-drain-node",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "cluster",
    label: "Drainer un nœud",
    command: "kubectl drain <node-name> --ignore-daemonsets --delete-emptydir-data",
    description: "Évite les nouveaux pods et évacue les pods existants vers d'autres nœuds.",
    example: "Utile avant une mise à jour/maintenance du nœud."
  },
  {
    id: "kubectl-uncordon-node",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "cluster",
    label: "Uncordonner un nœud",
    command: "kubectl uncordon <node-name>",
    description: "Permet de reprogrammer des pods sur un nœud précédemment cordonné.",
    example: "À exécuter une fois la maintenance du nœud terminée."
  },

  // === PODS ===
  {
    id: "kubectl-get-pods",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "pods",
    label: "Lister les pods (namespace courant)",
    command: "kubectl get pods",
    description: "Affiche les pods dans le namespace courant.",
    example: "Ajoute -o wide pour voir l'IP et le nœud hébergeant chaque pod."
  },
  {
    id: "kubectl-get-pods-all-namespaces",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "pods",
    label: "Lister les pods de tous les namespaces",
    command: "kubectl get pods --all-namespaces",
    description: "Affiche tous les pods du cluster, tous namespaces confondus.",
    example: "Pratique pour chercher rapidement un pod par nom."
  },
  {
    id: "kubectl-describe-pod",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "pods",
    label: "Inspecter un pod",
    command: "kubectl describe pod <pod-name>",
    description: "Affiche tous les détails du pod (events, containers, volumes...).",
    example: "Indispensable pour diagnostiquer un CrashLoopBackOff ou un Pending."
  },
  {
    id: "kubectl-logs-pod",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "pods",
    label: "Voir les logs d'un pod",
    command: "kubectl logs <pod-name>",
    description: "Affiche les logs du container principal du pod.",
    example: "Ajoute -f pour suivre en temps réel et -c <container> pour un container spécifique."
  },
  {
    id: "kubectl-logs-deployment",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "pods",
    label: "Logs de tous les pods d'un deployment",
    command: "kubectl logs deploy/<deployment> -c <container> --tail=100",
    description: "Récupère les logs pour tous les pods d'un deployment (depuis Kubernetes 1.10+).",
    example: "Utile pour visualiser un problème d'instance sur un replica particulier."
  },
  {
    id: "kubectl-exec-shell",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "pods",
    label: "Entrer dans un pod (shell)",
    command: "kubectl exec -it <pod-name> -- /bin/bash",
    description: "Ouvre un shell bash à l'intérieur du container principal.",
    example: "Pour Alpine, utilise /bin/sh au lieu de /bin/bash."
  },
  {
    id: "kubectl-port-forward",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "pods",
    label: "Port-forward vers un pod ou service",
    command: "kubectl port-forward svc/my-service 8080:80",
    description: "Mappe le port 8080 local vers le port 80 du service Kubernetes.",
    example: "Permet de tester une app interne du cluster depuis ta machine."
  },
  {
    id: "kubectl-delete-pod",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "pods",
    label: "Supprimer un pod",
    command: "kubectl delete pod <pod-name>",
    description: "Supprime un pod. Si contrôlé par un deployment/replicaSet, un nouveau pod sera recréé.",
    example: "Pratique pour forcer un redémarrage d'instance."
  },
  {
    id: "kubectl-top-pods",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "monitoring",
    label: "Voir CPU/mémoire des pods",
    command: "kubectl top pods",
    description: "Affiche l'utilisation CPU/mémoire par pod (metrics-server requis).",
    example: "Permet de repérer rapidement des pods en surconsommation."
  },

  // === DEPLOYMENTS / ROLLOUT ===
  {
    id: "kubectl-get-deployments",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "deploy",
    label: "Lister les deployments",
    command: "kubectl get deployments",
    description: "Affiche la liste des deployments dans le namespace courant.",
    example: "Ajoute -o wide pour voir plus de détails."
  },
  {
    id: "kubectl-describe-deployment",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "deploy",
    label: "Inspecter un deployment",
    command: "kubectl describe deployment <deployment>",
    description: "Affiche la spec, les replicas, la stratégie de rollout, les events, etc.",
    example: "Indispensable pour comprendre pourquoi un rollout ne se fait pas."
  },
  {
    id: "kubectl-apply-file",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "deploy",
    label: "Appliquer un manifest YAML",
    command: "kubectl apply -f deployment.yaml",
    description: "Crée ou met à jour les ressources décrites dans le fichier YAML.",
    example: "Utilise kubectl diff -f deployment.yaml avant pour voir ce qui va changer."
  },
  {
    id: "kubectl-rollout-status",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "deploy",
    label: "Suivre le statut d'un rollout",
    command: "kubectl rollout status deployment/<deployment>",
    description: "Suit le déploiement jusqu'à ce qu'il soit terminé (ou en erreur).",
    example: "Très utile dans des scripts CI/CD pour attendre la fin du déploiement."
  },
  {
    id: "kubectl-rollout-history",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "deploy",
    label: "Voir l'historique des rollouts",
    command: "kubectl rollout history deployment/<deployment>",
    description: "Affiche les révisions de deployment (image, annotations, etc.).",
    example: "Permet de voir rapidement quelle version tourne et quelles ont été les modifications."
  },
  {
    id: "kubectl-rollout-undo",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "deploy",
    label: "Roll-back d'un deployment",
    command: "kubectl rollout undo deployment/<deployment>",
    description: "Restaure le deployment à la révision précédente.",
    example: "Utile en cas de déploiement défectueux, permet un retour rapide à la version stable."
  },
  {
    id: "kubectl-scale-deployment",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "deploy",
    label: "Scaler un deployment",
    command: "kubectl scale deployment/<deployment> --replicas=5",
    description: "Change le nombre de replicas d'un deployment.",
    example: "Permet de gérer un pic de charge en augmentant temporairement le nombre de pods."
  },

  // === CONFIGMAPS / SECRETS ===
  {
    id: "kubectl-create-configmap-file",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "config",
    label: "Créer un ConfigMap à partir d'un fichier",
    command: "kubectl create configmap app-config --from-file=config.yaml",
    description: "Crée un ConfigMap dont les données proviennent d'un fichier local.",
    example: "Monté ensuite dans un pod via volume ou envFrom."
  },
  {
    id: "kubectl-get-configmaps",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "config",
    label: "Lister les ConfigMaps",
    command: "kubectl get configmaps",
    description: "Affiche tous les ConfigMaps du namespace.",
    example: "Utile pour vérifier ce qui est disponible pour une app donnée."
  },
  {
    id: "kubectl-create-secret-literal",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "config",
    label: "Créer un Secret depuis des literals",
    command: "kubectl create secret generic db-credentials \\\n  --from-literal=username=myuser \\\n  --from-literal=password=mypassword",
    description: "Crée un Secret contenant des credentials simples (base64 côté API).",
    example: "À consommer ensuite via envFrom ou env dans la spec du pod."
  },
  {
    id: "kubectl-get-secrets",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "config",
    label: "Lister les Secrets",
    command: "kubectl get secrets",
    description: "Liste les secrets disponibles dans le namespace.",
    example: "Utilise kubectl describe pour voir les clés (mais pas les valeurs)."
  },

  // === EVENTS / DEBUG CLUSTER ===
  {
    id: "kubectl-get-events",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "debug",
    label: "Lister les événements récents",
    command: "kubectl get events --sort-by=.metadata.creationTimestamp",
    description: "Affiche les événements du cluster triés par date.",
    example: "Très utile pour diagnostiquer un pod qui ne démarre pas (affinités, quotas, etc.)."
  },
  {
    id: "kubectl-debug-pod",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "debug",
    label: "Debug d'un pod (ephemeral container)",
    command: "kubectl debug -it <pod-name> --image=busybox --target=<container-name>",
    description: "Attache un container éphémère au pod pour le déboguer (K8s >=1.18).",
    example: "Permet de lancer des outils (curl, dig...) même si l'image de base ne les a pas."
  },

  // === HELM (Charts) ===
  {
    id: "helm-version",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Afficher la version Helm",
    command: "helm version",
    description: "Affiche la version du client Helm et du protocole utilisé.",
    example: "Vérifie que tu es sur Helm 3 (pas besoin de Tiller)."
  },
  {
    id: "helm-repo-add",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Ajouter un repo Helm",
    command: "helm repo add bitnami https://charts.bitnami.com/bitnami",
    description: "Ajoute un dépôt de charts Helm nommé bitnami.",
    example: "Ensuite, lance helm search repo bitnami pour voir les charts disponibles."
  },
  {
    id: "helm-repo-update",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Mettre à jour les repos Helm",
    command: "helm repo update",
    description: "Rafraîchit l'index des charts pour tous les repos configurés.",
    example: "À faire avant une install/upgrade pour obtenir les dernières versions."
  },
  {
    id: "helm-search-repo",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Chercher un chart dans les repos",
    command: "helm search repo nginx",
    description: "Recherche les charts contenant 'nginx' dans tous les repos configurés.",
    example: "Permet de trouver rapidement un chart officiel ou communautaire."
  },
  {
    id: "helm-install",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Installer un chart Helm",
    command: "helm install my-release bitnami/nginx",
    description: "Installe le chart nginx du repo bitnami avec le nom de release my-release.",
    example: "Ensuite, inspecte les ressources K8s créées avec kubectl get all -l release=my-release."
  },
  {
    id: "helm-upgrade",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Mettre à jour une release Helm",
    command: "helm upgrade my-release bitnami/nginx -f values-prod.yaml",
    description: "Met à jour la release avec de nouveaux paramètres (values).",
    example: "Combine avec --install pour créer la release si elle n'existe pas."
  },
  {
    id: "helm-rollback",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Roll-back d'une release Helm",
    command: "helm rollback my-release 1",
    description: "Revenir à la révision 1 de la release my-release.",
    example: "Liste les révisions avec helm history my-release avant de choisir laquelle restaurer."
  },
  {
    id: "helm-history",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Voir l'historique d'une release",
    command: "helm history my-release",
    description: "Affiche les différentes révisions (dates, chart version, description).",
    example: "Permet de comprendre l'historique des déploiements via Helm."
  },
  {
    id: "helm-uninstall",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Désinstaller une release Helm",
    command: "helm uninstall my-release",
    description: "Supprime toutes les ressources gérées par la release my-release.",
    example: "Utile pour nettoyer un environnement de test."
  },
  {
    id: "helm-template",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Rendre les manifests K8s depuis un chart",
    command: "helm template my-release ./chart-dir -f values.yaml",
    description: "Génère les manifests YAML K8s sans les appliquer.",
    example: "Très utile pour debug : pipe dans ksdiff, yq, kubectl diff -f - etc."
  },
  {
    id: "helm-lint",
    framework: "Cloud / Kubernetes",
    env: "CLI",
    os: "all",
    category: "helm",
    label: "Lint d'un chart Helm",
    command: "helm lint ./chart-dir",
    description: "Valide la structure du chart et les templates.",
    example: "À intégrer dans la CI pour éviter de déployer des charts invalides."
  }
];
