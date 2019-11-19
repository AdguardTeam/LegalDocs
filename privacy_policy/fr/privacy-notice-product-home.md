# AdGuard Home : Avis de confidentialité

*06 novembre 2019*

> **Note liminaire:** Nous ne partageons ni ne vendons aucune partie de vos données personnelles. Nous sommes fiers de déclarer que nous luttons pour la protection de la vie privée des utilisateurs et nous nous engageons fermement à respecter ce principe et à être aussi transparents que possible.

Cet avis de confidentialité énumère toutes les informations que nous pouvons recueillir et explique pourquoi nous le faisons et comment nous utilisons ces informations. Les informations que nous recueillons ne comprennent rien de plus que ce qui est essentiel pour fournir toutes les fonctionnalités des produits AdGuard..

Nous croyons que la protection de la vie privée est un droit humain fondamental. C'est pourquoi nous sommes transparents sur ce que fait AdGuard et expliquons l'objectif de chaque petite information recueillie par nos applications.



## Quel type de données peut être recueilli par AdGuard Home et à quel moment

 * [Le traitement des requêtes DNS](#dns-queries)
 * [Contrôle des mises à jour](#updates-check)
 * [Contrôle des mises à jour des filtres](#filters-updates-check)
 * [Vérification des domaines par le module de Navigation sécurisée](#browsing-security-check)
 * [Vérification de domaines par le Contrôle Parental](#parental-control-check)

### <a id="dns-queries"></a> Le traitement des requêtes DNS

AdGuard Home se connecte aux serveurs DNS configurés comme "Upstreams" et leur envoie des requêtes DNS

### <a id="update-check"></a> Contrôle des mises à jour

AdGuard Home télécharge périodiquement un fichier [du type .json](https://github.com/AdguardTeam/AdGuardHome/blob/master/version.json) pour vérifier s'il en existe déjà une nouvelle version. Aucune information n'est transmise nulle part pendant ce procès.

### <a id="filters-updates-check"></a> Contrôle des mises à jour des filtres

AdGuard se connecte aux serveurs spécifiques pour vérifier les mises à jour pour les filtres activés. Quand cela se passe, aucune information n'y est transmise. De temps en temps AdGuard Home télécharge un fichier contenant toutes les versions des filtres et leurs mises à jours disponibles.

### <a id="browsing-security-check"></a> Vérification des domaines par le module de Navigation sécurisée (inactive par défaut) :

Pour chaque domaine demandé, AdGuard Home se connecte au serveur de Navigation sécurisée et passe un préfixe de 8 caractères du nom de domaine au hachage SHA256. Le serveur répond avec une liste de hachage complet et AdGuard Home vérifie s'il y a une compatibilité. Les préfixes envoyés ne sont pas stockés et ne révèlent aucune information personnelle.

### <a id="parental-control-check"></a> Vérification de domaines par le Contrôle Parental (inactive par défaut) :

Pour chaque domaine demandé, AdGuard Home se connecte au serveur du Contrôle parental et passe un préfixe de 8 caractères du nom de domaine au hachage SHA256. Le serveur répond avec une liste de hachage complet et AdGuard Home vérifie s'il y a une compatibilité. Les préfixes envoyés ne sont pas stockés et ne révèlent aucune information personnelle.