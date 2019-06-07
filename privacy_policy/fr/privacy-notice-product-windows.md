# AdGuard pour Windows : Avis de confidentialité
*03 avril 2019*

> **Note liminaire:** Nous ne partageons ni ne vendons aucune partie de vos données personnelles. Nous sommes fiers de déclarer que nous luttons pour la protection de la vie privée des utilisateurs et nous nous engageons fermement à respecter ce principe et à être aussi transparents que possible.

Notre avis de confidentialité énumère l'information qui est recueillie et le traitement qui y est appliqué. Les données recueillies ne contiennent rien de plus que ce qui est essentiel pour fournir toutes les fonctionnalités des produits AdGuard, et ne sont jamais partagées avec des tiers. Nous ne recueillons rien à des fins de suivi et prenons toutes les mesures techniques, administratives et physiques nécessaires pour protéger les informations que nous recevons.

Veuillez lire notre avis de confidentialité pour savoir quelles informations nous sont communiquées pendant l'utilisation d' AdGuard pour Windows et comment nous les stockons et les utilisons par la suite.


## Quelles données sont collectées et transmises par AdGuard pour Windows

### Vérification de l'état de la licence

Pour valider l'état de la licence, AdGuard se connecte à ses serveurs. A ce moment, les renseignements suivants sont transmis :

* Le nom de l'ordinateur;
* Hachage MD5 de l'adresse MAC ;
* Hachage de l'ID de l'ordinateur;
* La langue choisie du Système opérationnel;
* Identifiant de l'application;
* Version de l'application;
* Clef de licence;
* La langue choisie de l'application;
* Identifiant du build;
* Indice démontrant que vous prenez part au développement du module de Navigation sécurisée (si vous le faites).

Nous utilisons cette information pour vérifier l'état de la licence. Les hachages du MAC et de l'ID du matériel informatique sont utilisés pour lier la licence à l'ordinateur. Cette information est aussi utilisée pour afficher les clefs de licence de l'utilisateur sur son compte personnel sur le site Web adguard.com.

### Réinitialisation de la licence


La licence est réinitialisée à la demande de l'utilisateur. Lorsque cela se produit, les informations suivantes sont transmises :

* L'identifiant de l'application


### Contrôle des mises à jour du programme

Pour vérifier les mises à jour de l'application, AdGuard se connecte à ses serveurs. Lorsque cela se produit, l'information suivante est envoyée :

* L'identifiant de l'application;
* Le canal des mises à jour choisi;
* Nom de l'application;
* Version de l'application;
* La langue choisie de l'application;
* Indice de mise à jour automatique;
* Version du Système opérationnel;

Les contrôles de mise à jour du programme sont effectués périodiquement où à volonté de l'utilisateur. Nous ne stockons pas ces données et ne les utilisons pas plus tard. 


### Contrôle des filtres de blocage

Pour vérifier les mises à jour des filtres de blocage, AdGuard se connecte à ses serveurs. Lorsque cela se produit, aucune information n'est envoyée au serveur. L'application télécharge périodiquement un fichier avec toutes les versions des filtres et leurs mises à jour disponibles.

### Contrôle des notifications disponibles

Le contrôle des notifications disponibles se fait selon une requête de l'utilisateur. Quand cela est fait, l'information suivante est transmise :

* L'identifiant de l'application

### Quand le programme plante

Dans les cas où AdGuard plante, un rapport de plantage automatique est créé.  Lors de l'initialisation suivante du programme l'utilisateur est invité à nous envoyer ce rapport. Les informations suivantes nous sont envoyées dans ce rapport :

* Trace d'appels;
* Minidump de mémoire (uniquement si le plantage à eu place dans le code natif);
* Nom de l'ordinateur;
* Version d' AdGuard;
* Préférences AdGuard;
* L'identifiant de l'application;
* Nom d'utilisateur Windows actif;
* Version du .NET Framework;
* Liste des procès actifs.

### Après la désinstallation du programme

Lorsque le programme est désinstallé l'information suivante est envoyée :

* L'identifiant de l'application

### Envoi de plainte concernant une page Web


L'utilisateur peut soumettre un rapport sur un problème avec un site Web directement depuis l'application. L'application ouvrira la page web reports.adguard.com et transmettra automatiquement des informations sur sa configuration. L'utilisateur peut alors modifier ou supprimer le fichier du rapport.

A moins que l'utilisateur n'accepte de soumettre ces informations en cliquant sur le bouton "Soumettre", aucune de ces informations ne sera sauvegardée ou envoyée nulle part. Au cas contraire, le rapport sera rendu public (mais anonyme) sur [GitHub](https://github.com/adguardteam/adguardfilters/issues).


### Envoi de message au service technique

Les utilisateurs peuvent envoyer les messages adressés au service technique depuis l'appli-même. Dans ce cas-la un fichier spécial contenant des infos sur la configuration du système et de l'appli sera transmis. Ce type d'infos est fréquemment utilisé pour des fins de dépannage. Il existe aussi l'option de joindre un rapport diagnostique avec des infos supplémentaires. Aucune information ne sera transmise nulle part sauf si l'utilisateur lui-même valide la soumission.

Le message au service contient les informations suivantes :

* L'identifiant de l'application;
* La version de l'application;
* La langue choisie de l'application;
* La version du Système opérationnel;
* La version du Microsoft .NET Framework installé sur l'ordinateur;
* La liste des filtres activés;
* Clef de licence.


Si l'option “Envoyer rapport de système” est activée, le programme va envoyer l'information additionnelle suivante pour effectuer le dépannage :

* Liste des procès actifs;
* Contenu du fichier de journalisation d' AdGuard y compris la liste des erreurs survenues depuis le dernier démarrage du programme.


### Contrôle des mises à jour de la base de données du module Navigation sécurisée

AdGuard utilise le protocole [Safebrowsing Protocol v2](https://developers.google.com/safe-browsing/) pour vérifier les mises à jour de la base de données locale de Navigation sécurisée. Le protocole Safebrowsing Protocol v2 respecte la confidentialité et n'échange des données qu'avec les serveurs AdGuard par aide des liens URL hachés, donc le serveur ne peut pas tracer les liens originellement requis par les utilisateurs.

Dans le cas où le domaine est présent dans la base de données locale de navigation sécurisée, il est en plus vérifié par rapport à une autre base de données située sur notre serveur. Les informations sur le domaine sont également envoyées sous forme hachée, nous ne connaissons donc pas l'URL originel.

### Contrôle Parental

Lorsque le contrôle parental est activé, AdGuard utilise son propre service Web pour vérifier les sites Web par référence à la base de données. Chaque fois que l'utilisateur est sur le point de visiter un site Web, une demande contenant le nom de domaine de ce site Web est envoyée à ce service. Ces informations ne sont stockées nulle part et ne sont utilisées que pour indiquer si le site Web est inclus dans la liste noire du contrôle parental.


### La communauté de Navigation sécurisée

Si l'option " Aidez-nous à développer la Sécurité de navigation " est activée, l'application enverra périodiquement des données anonymes sur la sécurité :

* Les liens URL des sites Web visités et identifiés par AdGuard comme potentiellement non fiables (l'accès à ces sites est bloqué par le module "Navigation sécurisée");
* Information sur la nature des menaces identifiées.

Les informations décrites ci-dessus, lorsqu'elles sont collectées par AdGuard pour Android, ne sont généralement pas mises en relation avec d'autres informations personnelles et sont utilisées anonymement en agrégation avec des informations similaires d'autres utilisateurs du logiciel AdGuard dans des buts analytiques.