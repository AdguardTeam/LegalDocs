# AdGuard pour Android : Avis de confidentialité 
*18 juin 2018*
> **Note liminaire:** Nous ne partageons ni ne vendons aucune partie de vos données personnelles. Nous sommes fiers de déclarer que nous luttons pour la protection de la vie privée des utilisateurs et nous nous engageons fermement à respecter ce principe et à être aussi transparents que possible.

Notre avis de confidentialité énumère l'information qui est recueillie et le traitement qui y est appliqué. Les données recueillies ne contiennent rien de plus que ce qui est essentiel pour fournir toutes les fonctionnalités des produits AdGuard, et ne sont jamais partagées avec des tiers. Nous ne recueillons rien à des fins de suivi et prenons toutes les mesures techniques, administratives et physiques nécessaires pour protéger les informations que nous recevons.

Veuillez lire notre avis de confidentialité pour savoir quelles informations nous sont communiquées pendant l'utilisation d' AdGuard pour Android et comment nous les stockons et les utilisons par la suite.


## Quelles données sont collectées et transmises par AdGuard pour Android


### Vérification de l'état de la licence

Pour valider l'état de la licence, AdGuard se connecte à ses serveurs. A ce moment, les renseignements suivants sont transmis :

* L'identifiant de l'application;
* Version de l'application;
* Nom de l'appareil (utilisé dans le compte personnel afin que l'utilisateur puisse voir la liste des appareils activés avec leurs clefs de licence);
* Clef de licence;
* La langue choisie de l'application;
* L' identifiant du build;
* L'ID du produit Amazon (au cas ou il fut acheté par moyen d'une souscription à Amazon).
Nous utilisons ces données pour vérifier l'état de la licence et associer la licence à l'appareil. Ces informations sont également utilisées pour afficher les clefs de licence de l'utilisateur dans son compte personnel sur adguard.com.

### Réinitialisation de la licence

La licence est réinitialisée à la demande de l'utilisateur. Quand cela se passe, les informations suivantes sont normalement transmises :

* L'identifiant de l'application

### Vérification des mises à jour de l'application

AdGuard se connecte aux serveurs pour vérifier les mises à jour pour l'application. Quand cela se passe, les informations suivantes sont transmises :

* L'identifiant de l'application;
* La version de l'application;
* La langue choisie de l'application;
* Le canal des mises à jour choisi.

Les contrôles de mise à jour sont effectués périodiquement. Nous ne stockons ni n'utilisons ces données plus tard (mais nous les accumulons sous une forme anonyme pour compter le nombre total d'installations de produits AdGuard).

### Contrôle des filtres de blocage

Pour vérifier les mises à jour des filtres de blocage, AdGuard se connecte à ses serveurs. Lorsque cela se produit, aucune information n'est envoyée. L'application télécharge périodiquement un fichier avec toutes les versions des filtres et leurs mises à jour disponibles.

### Demande de période d'essai

Lorsque la période d'essai est demandée par l'utilisateur, les informations suivantes sont envoyées à notre serveur pour l'activer :

* L'identifiant de l'application;
* L'adresse email de l'utilisateur (le guide d'installation et autres matériaux informationnels y seront envoyés);
* La langue choisie de l'application;
* L'identifiant du build.

### Envoi de plainte concernant une page Web

L'utilisateur peut soumettre un rapport sur un problème avec un site Web directement depuis l'application. L'application ouvrira la page web reports.adguard.com et transmettra automatiquement des informations sur sa configuration. L'utilisateur peut alors modifier ou supprimer le fichier du rapport.

A moins que l'utilisateur n'accepte de soumettre ces informations en cliquant sur le bouton "Soumettre", aucune de ces informations ne sera sauvegardée ou envoyée nulle part. Au cas contraire, le rapport sera rendu public (mais anonyme) sur [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### Envoi de message au service technique

Les utilisateurs peuvent envoyer les messages adressés au service technique depuis l'appli-même. Il existe aussi l'option de joindre un rapport diagnostique contenant des infos sur la configuration du système et de l'appli. Aucune information ne sera transmise nulle part sauf si l'utilisateur lui-même valide la soumission.

Normalement ces messages contiennent l'information suivante :

* L'identifiant de l'application;
* La version de l'application;
* Nom de l'appareil (le nom du fabricant de l'appareil ainsi que le nom du modèle);
* La version d'Android;
* Version du noyau Android;
* Liste des filtres mis en marche;
* La configuration des applications.

Si l'option “Envoyer un rapport de système” est activée, le programme va envoyer l'information additionnelle suivante (utilisée dans le cadre du dépannage uniquement):

* Liste des threads d'application et leurs traces de pile;
* Contenu du journal;
* La liste des applications installées.

### Quand AdGuard plante

Au premier lancement, on demande aux utilisateurs s'ils autorisent AdGuard à envoyer des rapports automatiques de plantage. Si oui (et seulement dans ce ce cas-là), les informations suivantes seront envoyées à nos serveurs lors du plantage de l'application :

* Nom et modèle de l'appareil;
* Version de l'OS et du noyau;
* Statut ROOT;
* L'ID Android inidentifiable;
* Mémoire vive (RAM) totale et libre;
* Orientation de l'écran;
* Résolution et densité de l'écran;
* Nom et version de l'application;
* Information pertinente au plantage (message d'erreur et trace d'appel);
* Les dernières lignes du fichier du journal.

Ces données sont ensuite utilisées par nos développeurs pour étudier le plantage et réparer le problème potentiel.

### Inspection des sites Web par le module de Navigation sécurisée 

Si l'option “Protection contre l'hameçonnage et les maliciels” est activée, AdGuard inspecte tous les sites Web avant que l'utilisateur s'y rende. Nous utilisons Lookup API pour ces fins et l'information sur le site visité est envoyée sous forme de préfixes hash. Nous ne pourrons pas déterminer quel site Web vous visitez.

Quand le module de Navigation sécurisée est activé, AdGuard effectue périodiquement un contrôle de latence pour la liste des serveurs de sécurité de navigation; aucune information n'est cependant envoyée dans ces requêtes.

### La communauté de Navigation sécurisée

Si l'option " Aidez-nous à développer la Sécurité de navigation " est activée, l'application enverra périodiquement des données anonymes sur la sécurité :

* Les liens URL des sites Web visités et identifiés par AdGuard comme potentiellement non fiables (l'accès à ces sites est bloqué par le module "Navigation sécurisée");
* Information sur la nature des menaces identifiées.

Les informations décrites ci-dessus, lorsqu'elles sont collectées par AdGuard pour Android, ne sont généralement pas mises en relation avec d'autres informations personnelles et sont utilisées anonymement en agrégation avec des informations similaires d'autres utilisateurs du logiciel AdGuard dans des buts analytiques.

