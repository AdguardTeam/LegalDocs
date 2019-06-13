# AdGuard Home : Avis de confidentialité

*03 avril 2019*

> **Note liminaire:** Nous ne partageons ni ne vendons aucune partie de vos données personnelles. Nous sommes fiers de déclarer que nous luttons pour la protection de la vie privée des utilisateurs et nous nous engageons fermement à respecter ce principe et à être aussi transparents que possible.

Notre avis de confidentialité énumère l'information qui est recueillie et le traitement qui y est appliqué. Les données recueillies ne contiennent rien de plus que ce qui est essentiel pour fournir toutes les fonctionnalités des produits AdGuard, et ne sont jamais partagées avec des tiers. Nous ne recueillons rien à des fins de suivi et prenons toutes les mesures techniques, administratives et physiques nécessaires pour protéger les informations que nous recevons.

Veuillez lire notre avis de confidentialité pour savoir quelles informations nous sont communiquées pendant l'utilisation d' AdGuard Home et comment nous les stockons et les utilisons par la suite.


## Quel type de données peut être envoyé par AdGuard Home

### Le traitement des requêtes DNS

AdGuard Home se connecte aux serveurs DNS configurés comme "Upstreams" et leur envoie des requêtes DNS

### Vérification des mises à jour

AdGuard Home télécharge périodiquement un fichier [du type .json](https://github.com/AdguardTeam/AdGuardHome/blob/master/version.json) pour vérifier s'il en existe déjà une nouvelle version. Aucune information n'est transmise nulle part pendant ce procès.

### Vérification des mises à jour des filtres

AdGuard se connecte aux serveurs spécifiques pour vérifier les mises à jour pour les filtres activés. Quand cela se passe, aucune information n'y est transmise. De temps en temps AdGuard Home télécharge un fichier contenant toutes les versions des filtres et leurs mises à jours disponibles.

### Quand l'utilisateur paramètre AdGuard Home pour utiliser le module Navigation sécurisée (inactif par défaut) :

Pour chaque domaine demandé, AdGuard Home se connecte au serveur de Navigation sécurisée et passe un préfixe de 8 caractères du nom de domaine au hachage SHA256. Le serveur répond avec une liste de hachage complet et AdGuard Home vérifie s'il y a une compatibilité. Les préfixes envoyés ne sont pas stockés et ne révèlent aucune information personnelle.

### Quand l'utilisateur paramètre AdGuard Home pour utiliser le Contrôle parental (inactif par défaut) :

Pour chaque domaine demandé, AdGuard Home se connecte au serveur du Contrôle parental et passe un préfixe de 8 caractères du nom de domaine au hachage SHA256. Le serveur répond avec une liste de hachage complet et AdGuard Home vérifie s'il y a une compatibilité. Les préfixes envoyés ne sont pas stockés et ne révèlent aucune information personnelle.