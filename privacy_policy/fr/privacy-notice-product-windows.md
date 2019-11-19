# AdGuard pour Windows : Avis de confidentialité
*06 novembre 2019*

> **Note liminaire:** Nous ne partageons ni ne vendons aucune partie de vos données personnelles. Nous sommes fiers de déclarer que nous luttons pour la protection de la vie privée des utilisateurs et nous nous engageons fermement à respecter ce principe et à être aussi transparents que possible.

Cet avis de confidentialité énumère toutes les informations que nous pouvons recueillir et explique pourquoi nous le faisons et comment nous utilisons ces informations. Les informations que nous recueillons ne comprennent rien de plus que ce qui est essentiel pour fournir toutes les fonctionnalités des produits AdGuard..

Nous croyons que la protection de la vie privée est un droit humain fondamental. C'est pourquoi nous sommes transparents sur ce que fait AdGuard et expliquons l'objectif de chaque petite information recueillie par nos applications.


## Quelles données peuvent être collectées par AdGuard pour Windows et à quel moment

* [Vérification de l'état de la licence](#licence -status-check)
* [Réinitialisation de licence](#license-reset)
* [Activation de la période d'essai](#trial-period-activation)
* [Vérification des mises à jour du programme](#app-update-check)
* [Contrôle des mises à jour des filtres de blocage](#filters-updates-check)
* [Contrôle des notifications disponibles](#notification-check)
* [Plantage du programme](#app-crash)
* [Plantage de l'installateur](#installer-crash)
* [Désinstallation du programme](#app-uninstall)
* [Envoi de plainte concernant une page Web](#web-page-complaint)
* [Envoi d'un message au service technique](#support-message)
* [Vérification d'un site Web par le module de Navigation sécurisée](#browsing-security-check)
* [Communauté de la Navigation sécurisée](#browsing-security-community)
* [Vérification du site Web par le Contrôle Parental](#parental-control-check)


### <a id="license-status-check"></a> Vérification de l'état de la licence

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

### <a id="license-reset"></a> Réinitialisation de la licence


La licence est réinitialisée à la demande de l'utilisateur. Lorsque cela se produit, les informations suivantes sont transmises :

* ID de l'application;
* Configuration partielle des paramètres.


### <a id="app-update-check"></a> Contrôle des mises à jour du programme

Pour vérifier les mises à jour de l'application, AdGuard se connecte à ses serveurs. Lorsque cela se produit, l'information suivante est envoyée :

* L'identifiant de l'application;
* Le canal des mises à jour choisi;
* Nom de l'application;
* Version de l'application;
* La langue choisie de l'application;
* Indice de mise à jour automatique;
* Version du Système opérationnel;

Les contrôles de mise à jour du programme sont effectués périodiquement où à volonté de l'utilisateur. Nous ne stockons pas ces données et ne les utilisons pas plus tard. 


###<a id="filters-updates-check"></a> Contrôle des mises à jour des filtres de blocage

Pour vérifier les mises à jour des filtres de blocage, AdGuard se connecte à ses serveurs. Lorsque cela se produit, aucune information n'est envoyée au serveur. L'application télécharge périodiquement un fichier avec toutes les versions des filtres et leurs mises à jour disponibles.

### <a id="notification-check"></a> Contrôle des notifications disponibles

Le contrôle des notifications disponibles se fait selon une requête de l'utilisateur. Quand cela est fait, l'information suivante est transmise :

* L'identifiant de l'application

### <a id="app-crash"></a> Plantage du programme

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

### <a id="installer-crash"></a> Plantage de l'installateur

Au cas ou AdGuard plante lors du procés d'installation, un rapport de plantage est créé automatiquement que vous serez demandé de nous envoyer. Si vous autorisez l'envoi du rapport, il comportera les informations suivantes :

* Trace d'appels;
* Nom de l'ordinateur;
* Version d' AdGuard;
* Liste des procès actifs
* Version .NET;
* L'identifiant de l'application;
* Nom d'utilisateur Windows actif;
* Journal d'installation.

### <a id="app-uninstall"></a> Désinstallation du programme

Lorsque le programme est désinstallé l'information suivante est envoyée :

* L'identifiant de l'application

### <a id="web-page-complaint"></a> Envoi de plainte concernant une page Web


L'utilisateur peut soumettre un rapport sur un problème avec un site Web directement depuis l'application. L'application ouvrira la page web reports.adguard.com et transmettra automatiquement des informations sur sa configuration. L'utilisateur peut alors modifier ou supprimer le fichier du rapport.

A moins que l'utilisateur n'accepte de soumettre ces informations en cliquant sur le bouton "Soumettre", aucune de ces informations ne sera sauvegardée ou envoyée nulle part. Au cas contraire, le rapport sera rendu public (mais anonyme) sur [GitHub](https://github.com/adguardteam/adguardfilters/issues).


### <a id="support-message"></a> Envoi d'un message au service technique

Les utilisateurs peuvent envoyer les messages adressés au service technique depuis l'appli-même. Dans ce cas-la un fichier spécial contenant des infos sur la configuration du système et de l'appli sera transmis. Ce type d'infos est fréquemment utilisé pour des fins de dépannage. Il existe aussi l'option de joindre un rapport diagnostique avec des infos supplémentaires. Aucune information ne sera transmise nulle part sauf si l'utilisateur lui-même valide la soumission.

Le message au service contient les informations suivantes :

* L'identifiant de l'application;
* La version de l'application;
* La langue choisie de l'application;
* La version du Système opérationnel;
* La version du Microsoft .NET Framework installé sur l'ordinateur;
* La liste des filtres activés;
* Clef de licence.


Si l'option “Envoyer un rapport de système” est activée, le programme va envoyer l'information additionnelle suivante pour effectuer le dépannage :

* Liste des procès actifs;
* Contenu du fichier de journalisation d' AdGuard y compris la liste des erreurs survenues depuis le dernier démarrage du programme.


### <a id="browsing-security-check"></a> Vérification d'un site Web par le module de Navigation sécurisée

Si l'option "Protection contre l'hameçonnage et les maliciels" est activée, AdGuard vérifie chaque site Web avant que l'utilisateur le visite. Nous utilisons l'API Lookup à cette fin, et les informations sur le site visité sont envoyées sous forme de préfixes de hachage. Cela ne nous permet pas de déterminer quel site Web est visité.


### <a id="browsing-security-community"></a> La communauté de Navigation sécurisée

Si l'option " Aidez-nous à développer la Sécurité de navigation " est activée, l'application enverra périodiquement des données anonymes sur la sécurité :

* Les liens URL des sites Web visités et identifiés par AdGuard comme potentiellement non fiables (l'accès à ces sites est bloqué par le module "Navigation sécurisée");
* Information sur la nature des menaces identifiées par le logiciel AdGuard.

Les informations décrites ci-dessus, lorsqu'elles sont collectées par AdGuard pour Android, ne sont généralement pas mises en relation avec d'autres informations personnelles et sont utilisées anonymement en agrégation avec des informations similaires d'autres utilisateurs du logiciel AdGuard dans des buts analytiques.

### <a id="parental-control-check"></a> Vérification du site Web par le Contrôle Parental

Lorsque le contrôle parental est activé, AdGuard utilise son propre service Web pour vérifier les sites Web par référence à la base de données. Nous utilisons l'API Lookup à cette fin, et les informations sur le site visité sont envoyées sous forme de préfixes de hachage. Cela ne nous permet pas de déterminer quel site Web est visité.
