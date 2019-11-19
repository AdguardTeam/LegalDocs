# AdGuard pour Mac : Avis de confidentialité

*06 novembre 2019*


> **Note liminaire:** Nous ne partageons ni ne vendons aucune partie de vos données personnelles. Nous sommes fiers de déclarer que nous luttons pour la protection de la vie privée des utilisateurs et nous nous engageons fermement à respecter ce principe et à être aussi transparents que possible.

Cet avis de confidentialité énumère toutes les informations que nous pouvons recueillir et explique pourquoi nous le faisons et comment nous utilisons ces informations. Les informations que nous recueillons ne comprennent rien de plus que ce qui est essentiel pour fournir toutes les fonctionnalités des produits AdGuard..

Nous croyons que la protection de la vie privée est un droit humain fondamental. C'est pourquoi nous sommes transparents sur ce que fait AdGuard et expliquons l'objectif de chaque petite information recueillie par nos applications.



## Quelles données peuvent être collectées par AdGuard pour Mac et à quel moment 

 * [Vérification de l'état de la licence](#license-status-check)
 * [Réinitialisation de la licence](#license-reset)
 * [Contrôle des mises à jour des filtres de blocage](#filters-updates-check)
 * [Activation de la période d'essai](#trial-period-activation)
 * [Envoi de plainte concernant une page Web](#web-page-complaint)
 * [Envoi de message au service technique](#support-message)
 * [Plantage de l'application](#app-crash)
 * [Vérification des sites Web par le module de Navigation sécurisée](#browsing-security-check)
 * [Communauté de Navigation sécurisée](#browsing-security-community)

### <a id="license-status-check"></a> Vérification de l'état de licence

AdGuard se connecte à ses serveurs pour valider l'état courant de la licence. Lorsque cela ce fait les informations sont transmises :

* Le nom de l'ordinateur;
* L'adresse de hachage MAC;
* Hachage de l'ID du matériel informatique;
* La langue choisie du système opérationnel;
* Identifiant de l'application;
* Version de l'application;
* Clef de licence;
* Identifiant du build. 

Nous utilisons cette information pour vérifier l'état de la licence. Les hachages du MAC et de l'ID du matériel informatique sont utilisés pour lier la licence à l'ordinateur. Cette information est aussi utilisée pour afficher les clefs de licence de l'utilisateur sur son compte personnel sur le site Web adguard.com.

### <a id="license-reset"></a> Réinitialisation de la licence

La licence est réinitialisée à la demande de l'utilisateur. Lorsque cela se produit, les informations suivantes sont transmises :

* L'identifiant de l'application

### <a id="filters-updates-check"></a> Contrôle des mises à jour des filtres de blocage

Pour vérifier les mises à jour des filtres de blocage, AdGuard se connecte à ses serveurs. Lorsque cela se produit, aucune information n'est envoyée. L'application télécharge périodiquement un fichier avec toutes les versions des filtres et leurs mises à jour disponibles.

### <a id="trial-period-activation"></a> Activation de la période d'essai

Quand un utilisateur active la période d'essai, les informations suivantes sont normalement envoyées vers notre serveur :


 * Nom de l'ordinateur;
 * Le hachage de l'adresse du Mac;
 * Le hachage de l'ID de l'ordinateur;
 * La langue choisie du Système Opérationnel;
 * L'identifiant de l'application;
 * La version de l'application
 * L'identifiant du build.

### <a id="web-page-complaint"></a> Envoi de plainte concernant une page Web

L'utilisateur peut soumettre un rapport sur un problème avec un site Web directement depuis l'application. L'application ouvrira la page web reports.adguard.com et transmettra automatiquement des informations sur sa configuration. L'utilisateur peut alors modifier ou supprimer le fichier du rapport.

A moins que l'utilisateur n'accepte de soumettre ces informations en cliquant sur le bouton "Soumettre", aucune de ces informations ne sera sauvegardée ou envoyée nulle part. Au cas contraire, le rapport sera rendu public (mais anonyme) sur [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### <a id="support-message"></a> Envoi de message au service technique


Les utilisateurs peuvent envoyer les messages adressés au service technique depuis l'appli-même. Dans ce cas-là un fichier spécial contenant des informations sur les paramétrages de l'application et la configuration du Système opérationnel sera transmis.  Ce type de données est nécessaire à avoir pour résoudre des problèmes possibles avec l'application AdGuard. L'utilisateur  a en plus la possibilité d'inclure un rapport diagnostique contenant des informations supplémentaires. Au cas où l'utilisateur ne valide pas la saisie des données manuellement rien ne sera envoyé. 

Le rapport contient les informations de nature suivante :

* L'identifiant de l'application;
* Version de l'application;
* La langue choisie du Système opérationnel;
* Version du Système opérationnel;
* Réglages du réseau dans l'application;
* Liste des filtres mis en marche.

Si l'option “ Envoyer rapport diagnostique ” est activée, l'application va envoyer le fichier de journalisation AdGuard contenant des messages internes de l'application (comme les rapports d'erreur ou alertes pour l'utilisateur). Cette information sera utilisée à des fins de dépannage uniquement.

### <a id="app-crash"></a> Plantage de l'application

Dans les cas où un problème de fonctionnement mène à un plantage abrupt de l'application, l'utilisateur est invité à envoyer un rapport de plantage spécial. Si cela est fait, les informations suivantes nous sont envoyées :

* L'identifiant de l'application;
* L' hachage du matériel informatique;
* Modèle d'appareil, son volume de mémoire et espace disque;
* Version de l'application;
* Versions du Système opérationnel et du noyau;
* Trace d'appels;
* La liste des components utilisée par l'application et ses versions;
* L'horodotage du dernier démarrage du système OS;
* L'horodotage du dernier démarrage de l'application.

Cette information est utilisée pour l'évaluation et l'élimination du problème.

### <a id="browsing-security-check"></a> Vérification des sites Web par le module de Navigation sécurisée

Si l'option “Protection contre l'hameçonnage et les maliciels” est activée, AdGuard inspecte tous les sites Web avant que l'utilisateur s'y rende. Nous utilisons Lookup API pour ces fins et l'information sur le site visité est envoyée sous forme de préfixes hash. Ainsi nous ne pourrons pas déterminer quel site Web vous visitez.

### <a id="browsing-security-community"></a> Communauté de Navigation sécurisée

Si l'option " Aidez-nous à développer la Sécurité de navigation " est activée, l'application enverra périodiquement des données anonymes sur la sécurité :

* Les liens URL des sites Web visités et identifiés par AdGuard comme potentiellement non fiables (l'accès à ces sites est bloqué par le module "Navigation sécurisée");
* Information sur la nature des menaces identifiées.

Les informations décrites ci-dessus, lorsqu'elles sont collectées par AdGuard pour Android, ne sont généralement pas mises en relation avec d'autres informations personnelles et sont utilisées anonymement en agrégation avec des informations similaires d'autres utilisateurs du logiciel AdGuard dans des buts analytiques.