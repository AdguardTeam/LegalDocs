# Extensions de navigateur AdGuard : Avis de confidentialité
*06 novembre 2019*

> **Note liminaire:** Nous ne partageons ni ne vendons aucune partie de vos données personnelles. Nous sommes fiers de déclarer que nous luttons pour la protection de la vie privée des utilisateurs et nous nous engageons fermement à respecter ce principe et à être aussi transparents que possible.

Cet avis de confidentialité énumère toutes les informations que nous pouvons recueillir et explique pourquoi nous le faisons et comment nous utilisons ces informations. Les informations que nous recueillons ne comprennent rien de plus que ce qui est essentiel pour fournir toutes les fonctionnalités des produits AdGuard..

Nous croyons que la protection de la vie privée est un droit humain fondamental. C'est pourquoi nous sommes transparents sur ce que fait AdGuard et expliquons l'objectif de chaque petite information recueillie par nos applications.


## Quelles données peuvent être collectées par l'extension de navigateur AdGuard et à quel moment

* [Vérification des mises à jour des filtres de blocage](#filters-updates-check)
* [Statistiques sur l'utilisation des filtres publicitaires](#ad-filters-stats)
* [Envoi de plainte sur une page Web](#web-page-complaint)
* [Inspection des sites Web par le module de Navigation sécurisée](#browsing-security-check)
* [Communauté de Navigation Sécurisée](#browsing-security-community)

### <a id="filters-updates-check"></a>Vérification des mises à jour des filtres de blocage

AdGuard se connecte à ses serveurs pour vérifier les mises à jour. Les informations suivantes sont alors transmises :

* Type de navigateur;
* La langue choisie du navigateur;
* ID de l'extension (un nombre aléatoire généré lors de l'installation de l'extension);
* Version de l'extension de navigateur;
* Type de build de l'extension.

Les mises à jour des filtres sont vérifiées une fois par jour. Nous accumulons les données obtenues de cette façon pour établir la quantité des utilisateurs actifs.


 ### <a id="ad-filters-stats"></a>Statistiques sur l'utilisation des filtres publicitaires

L'option “Envoyer les statistiques de l'utilisation des filtres publicitaires” est normalement **désactivée par défaut**. Rien ne sera envoyé sauf si l'utilisateur active l'option à la main pour nous aider à améliorer les filtres de blocage. [Cet article de notre Base de Connaissances](https://kb.adguard.com/general/filter-rules-statistics) explique pourquoi l'activation de cette fonctionnalité peut nous aider.

Si l'utilisateur active la fonctionnalité “Envoyer les statistiques de l'utilisation des filtres publicitaires”, l'information suivante est envoyée périodiquement : 

* Version de l'extension de navigateur;
* Type de navigateur;
* Liste des filtres activés;
* Une liste comprenant les éléments suivants :
  * Le nom de domaine visité du site Web,
  * Le nombre des pages consultées récemment,
  * La liste des règles de filtrage et des ID des filtres activés sur le site Web en question,
  * Le nom de domaine des requêtes bloquées est envoyé pour les règles des URL. La liste est créée sur la base des statistiques de connexions au site Web depuis le dernier envoi de données.
 
En collectant les données statistiques sur les règles de filtrage utilisées, nous pouvons ensuite détecter et supprimer les règles qui ne sont pas utilisées. À la fin, cela va améliorer l'expérience de tous les utilisateurs d' AdGuard. 


### <a id="web-page-complaint"></a> Envoi de plainte sur une page Web


L'utilisateur peut soumettre un rapport sur un problème avec un site Web directement depuis l'application. L'application ouvrira la page web reports.adguard.com et transmettra automatiquement des informations sur sa configuration. L'utilisateur peut alors modifier ou supprimer le fichier du rapport.

A moins que l'utilisateur n'accepte de soumettre ces informations en cliquant sur le bouton "Soumettre", aucune de ces informations ne sera sauvegardée ou envoyée nulle part. Dans le cas contraire, le rapport sera rendu public (mais anonyme) sur [GitHub](https://github.com/adguardteam/adguardfilters/issues).

 
### <a id="browsing-security-check"></a> Inspection des sites Web par le module de Navigation sécurisée

Si l'option “Protection contre l'hameçonnage et les maliciels” est activée, AdGuard inspecte tous les sites Web avant que l'utilisateur s'y rende. Nous utilisons Lookup API pour ces fins et l'information sur le site visité est envoyée sous forme de préfixes hash. Nous ne pourrons pas déterminer quel site Web vous visitez.


### <a id="browsing-security-community"></a> La communauté de Navigation sécurisée


Si l'utilisateur active l'option " Aidez-nous à développer la Sécurité de navigation ", l'application enverra périodiquement des données anonymes sur la sécurité :

* Les liens URL des sites Web visités et identifiés par AdGuard comme potentiellement non fiables, le tout accompagné d'information sur la nature des menaces décernées;
* La langue choisie du navigateur;
* Information  statistique supplémentaire sur les menaces identifiées par les logiciels AdGuard.

Les informations décrites ci-dessus, lorsqu'elles sont collectées par l'extension de navigateur AdGuard, ne sont généralement pas mises en relation avec d'autres informations personnelles liées à l'utilisateur et sont utilisées anonymement dans des buts analytiques en agrégation avec des informations similaires provenant d'autres utilisateurs du logiciel AdGuard.


