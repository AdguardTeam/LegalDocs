# AdGuard pour Android : Avis de confidentialité 
*06 novembre 2019*
> **Note liminaire:** Nous ne partageons ni ne vendons aucune partie de vos données personnelles. Nous sommes fiers de déclarer que nous luttons pour la protection de la vie privée des utilisateurs et nous nous engageons fermement à respecter ce principe et à être aussi transparents que possible.

Notre avis de confidentialité énumère l'information que nous pouvons recueillir et explique pourquoi nous la recueillons, ainsi que le traitement qui y est appliqué. Les données recueillies ne contiennent rien de plus que ce qui est essentiel pour fournir toutes les fonctionnalités des produits AdGuard.

Nous pensons que la protection de la confidentialité est un droit humain fondamental. C'est pourquoi nous sommes transparents sur ce que fait AdGuard et expliquons l'objectif de chaque petite information recueillie par nos applications.


## Quelles données et à quel moment AdGuard pour Android peut-il collecter

 * [Vérification de l'état de la licence](#license-status-check)
 * [Réinitialisation de la licence](#license-reset)
 * [Demande de période d'essai](#trial-period-request)
 * [Vérification des mises à jour de l'appli](#app-update-check)
 * [Contrôle des mises à jour des filtres de blocage](#filters-updates-check)
 * [Envoi de plainte concernant une page Web](#web-page-complaint)
 * [Envoi de message au service technique](#support-message)
 * [Rapport automatique de crash](#automatic-crash-reporting)
 * [Information technique et celle d'interaction](#technical-and-interaction-data)
 * [Vérification du site par la Navigation sécurisée](#browsing-security-check)
 * [Communauté de Navigation sécurisée](#browsing-security-community)

### <a id="license-status-check"></a> Vérification de l'état de la licence

Pour valider l'état de la licence, AdGuard se connecte à ses serveurs. A ce moment, les renseignements suivants sont transmis :

* L'identifiant de l'application;
* Version de l'application;
* Nom de l'appareil (utilisé dans le compte personnel afin que l'utilisateur puisse voir la liste des appareils activés avec leurs clefs de licence);
* Clef de licence;
* La langue choisie de l'application;
* L' identifiant du build;

Nous utilisons ces données pour vérifier l'état de la licence et associer la licence à l'appareil. Ces informations sont également utilisées pour afficher les clefs de licence de l'utilisateur dans son compte personnel sur adguard.com.

Les utilisateurs peuvent également entrer leurs identifiants de compte personnel adguard.com (login et mot de passe) pour activer la fonctionnalité Premium de l'application. Dans ce cas, l'application enverra également cette paire login et mot de passe au serveur afin d'authentifier l'utilisateur.

### <a id="license-reset"></a> Réinitialisation de la licence

La licence est réinitialisée à la demande de l'utilisateur. Quand cela se passe, les informations suivantes sont normalement transmises :

* L'identifiant de l'application

### <a id="trial-period-request"></a> Demande de période d'essai

Quand un utilisateur demande une période d'essai, les informations suivantes sont normalement envoyées vers notre serveur pour l'activer :

 * L'identifiant de l'application;
 * Adresse électronique de l'utilisateur (les instructions d'activation et autres documents de prélecture seront envoyés à l'adresse électronique spécifiée);
 * La langue choisie de l'application;
 * L'identifiant du build.


### <a id="app-update-check"></a> Vérification des mises à jour de l'application

AdGuard se connecte aux serveurs pour vérifier les mises à jour pour l'application. Quand cela se passe, les informations suivantes sont transmises :

* L'identifiant de l'application;
* La version de l'application;
* La langue choisie de l'application;
* Le canal des mises à jour choisi.

Les contrôles de mise à jour sont effectués périodiquement. Nous ne stockons ni n'utilisons ces données plus tard (mais nous les accumulons sous une forme anonyme pour compter le nombre total d'installations de produits AdGuard).

###<a id="filters-updates-check"></a> Contrôle des mises à jour des filtres de blocage

Pour vérifier les mises à jour des filtres de blocage, AdGuard se connecte à ses serveurs. Lorsque cela se produit, aucune information n'est envoyée. L'application télécharge périodiquement un fichier avec toutes les versions des filtres et leurs mises à jour disponibles.


### <a id="web-page-complaint"></a> Envoi de plainte concernant une page Web

L'utilisateur peut soumettre un rapport sur un problème avec un site Web directement depuis l'application. L'application ouvrira la page web reports.adguard.com et transmettra automatiquement des informations sur sa configuration. L'utilisateur peut alors modifier ou supprimer le fichier du rapport.

A moins que l'utilisateur n'accepte de soumettre ces informations en cliquant sur le bouton "Soumettre", aucune de ces informations ne sera sauvegardée ou envoyée nulle part. Au cas contraire, le rapport sera rendu public (mais anonyme) sur [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### <a id="support-message"></a> Envoi de message au service technique

Les utilisateurs peuvent envoyer les messages adressés au service technique depuis l'appli-même, dans ce cas-là l'information suivante sera envoyée avec le message et le courriel spécifié :

* L'identifiant de l'application;
* La version de l'application;
* Nom de l'appareil (le nom du fabricant de l'appareil ainsi que le nom du modèle);
* La version d'Android;
* Version du noyau Android;
* Liste des filtres mis en marche;
* La configuration des applications.

Si l'option “Envoyer un rapport de système” est activée, le programme va envoyer l'information additionnelle suivante (utilisée dans le cadre du dépannage uniquement) :

* Liste des threads d'application et leurs traces de pile;
* Contenu du journal;
* La liste des applications installées.

### <a id="automatic-crash-reporting"></a> Rapport automatique de crash

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

### <a id="technical-and-interaction-data"></a> Information technique et celle d'interaction

Au premier lancement l'appli demande l'utilisateur s'il autorise AdGuard à envoyer des données techniques et celles d'interaction. S'ils le font (et seulement s'ils le font), les informations suivantes seront envoyées :

 * ID de télémétrie synthétique (chaîne aléatoire générée lors de l'installation de l'application) ;
 * Configuration de l'application (modules activés, statut d'activation) ;
 * Informations sur l'appareil (type, taille de l'écran, langue, version Android) ;
 * Noms des écrans visualisés dans l'application ;
 * Lorsque les données sont envoyées à AdGuard, votre adresse IP peut être temporairement collectée dans le cadre de nos journaux de serveur.

 Ces données ne seront utilisées qu'en interne et ne seront pas partagées avec des tiers.

 Voici comment nous utilisons ces informations :

 * Pour découvrir quelle fonctionnalité est la plus utilisée ;
 * Pour trouver les problèmes que l'on peut rencontrer lors de l'utilisation de l'application ;
 * À des fins de recherche et correction des erreurs dans l'interface UI/UX ;
 * Pour apprendre ce que les gens ont ou n'ont pas epprécié dans notre application.


### <a id="browsing-security-check"></a> Inspection des sites Web par le module de Navigation sécurisée 

Lors du premier lancement, il est demandé à l'utilisateur s'il autorise AdGuard à envoyer des données techniques et d'interaction. S'ils le font (et seulement s'ils le font), les informations suivantes leur seront envoyées :

 * ID de télémétrie synthétique (chaîne aléatoire générée lors de l'installation de l'application) ;
 * Configuration de l'application (modules activés, statut d'activation) ;
 * Informations sur l'appareil (type, taille de l'écran, langue, version Android) ;
 * Noms des écrans visualisés dans l'application ;
 * Lorsque les données sont envoyées à AdGuard, votre adresse IP peut être temporairement collectée dans le cadre de nos journaux de serveur.

 Ces données ne seront utilisées qu'en interne et ne seront pas partagées avec des tiers.

 Voici comment nous utilisons ces informations :

 * Découvrir quelle fonctionnalité est la plus utilisée ;
 * Trouver les problèmes que l'on peut rencontrer lors de l'utilisation de l'application ;
 * Recherche et correction des erreurs dans l'interface UI/UX ;
 * Apprendre ce que les gens aiment ou n'aiment pas dans notre application.

### <a id="browsing-security-check"></a> Vérification du site par la Navigation sécurisée 
Si l'option “Protection contre l'hameçonnage et les maliciels” est activée, AdGuard inspecte tous les sites Web avant que l'utilisateur s'y rende. Nous utilisons Lookup API pour ces fins et l'information sur le site visité est envoyée sous forme de préfixes hash. Nous ne pourrons pas déterminer quel site Web vous visitez.


### <a id="browsing-security-community"></a> La communauté de Navigation sécurisée

Si l'option " Aidez-nous à développer la Sécurité de navigation " est activée, l'application enverra périodiquement des données anonymes sur la sécurité :

* Les liens URL des sites Web visités et identifiés par AdGuard comme potentiellement non fiables (l'accès à ces sites est bloqué par le module "Navigation sécurisée");
* Information sur la nature des menaces identifiées.

Les informations décrites ci-dessus, lorsqu'elles sont collectées par AdGuard pour Android, ne sont généralement pas mises en relation avec d'autres informations personnelles et sont utilisées anonymement en agrégation avec des informations similaires d'autres utilisateurs du logiciel AdGuard dans des buts analytiques.

