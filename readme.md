# Mon CV - Jerome Schneider
---------------------------

EExplication du développement de ma page de Curriculum Vitae et de l'utilistation de git et github.

  - Utilisation de BootStrap et Bootswatch pour la mise en page
  - Yeoman (Yo, Bower, Gulp)
  - Node.js
  - npm
  - Installation d'une libraire pour le défilement (jquery.smooth-scroll.js)
  - Utilisation de Git pour le service de versionning
  - GitHub
  - Déploier les données d'un répertoire contenant dans le résultat de la compilation du code html

## Yoeman
---------
Yoeman est une plateforme qui permet de récupérer des templates qui ont été créés pour nous. Cela nous permet d'être plus rapidement productif et d'utiliser les "best practice" en vigueur. 

Il se compose de trois outils nous permettant de récupérer et déploier facilement ces templates:
 - **Yo** nous permet de récupérer les projets et de les déploier dans un répertoire
 - **Gulp** nous permet de construire, de prévisualiser et de tester notre application
 - **npm** nous permet de récupérer différents plugins sur le net et de les installer automatiquement dans nos projets. Il est également nécessaire à l'installation de **bower** que nous utiliserons pour télécharger nos plugins.

## gulp
----
Gulp est un task runner , c'est à dire qu'il est capable de lancer des bouts de scripts à notre place.

Afin de lancer notre serveur, nous utilisons la tâche défini :
```sh
$ gulp serve
```

2 autres commandes sont églament utilisées avec gulp :
```sh
# compile et minise le code dans le répertoire build
$ gulp build

# contrôle du résultat une fois le code buildé
$ gulp serve:dist

# ajoute et commit les modifications de dist sur le serveur distant
$ gulp deploy
```

## bower
----
L'avantage d'utiliser un logiciel comme **bower** c'est qu'il gère à notre place les dépendances, c'est à dire qu'il télécharge automitiquement les éléments nécessaires au bon fonctionnnement du plugin que l'on désire utilisé.

Pour fonctionner, bower à besoin que l'on installe **node.js** ainsi que **git**.

Afin d'installer bower sur notre poste nous utiliserons la commande suivante :
```sh
$ npm install -g bower
```

## node.js
----------
Comme expliquer dans le point précédant, node.js est nécessaire qu bon fonctionnement de **bower**. C'est pourquoi nous l'avons installer.

Selon la définition de Wikipedia:
> Node.js est une plateforme logicielle libre et événementielle en JavaScript orientée vers les applications réseau qui doivent pouvoir monter en charge. Elle utilise la machine virtuelle V8 et implémente sous licence MIT les spécifications CommonJS. Node.js contient une bibliothèque de serveur HTTP intégrée, ce qui rend possible de faire tourner un serveur web sans avoir besoin d'un logiciel externe comme Apache ou lighttpd, et permettant de mieux contrôler la façon dont le serveur web fonctionne.

## Bootstrap
------------
Pour la mise en page plusieurs éléments ont été utilisé dans le framework bootstrap:
 - Le système de grille afin d'avoir une mise en page responsive pouvant s'afficher sur plusieurs tailles d'écran
 - Des classes de mise en page pour les différents éléments de la page html (div, img, etc.)
 - Le composant glyphicons permettant l'affichage d'images mise à disposition dans le framework
 - Le composant navbar permettant l'affichage d'un menu dans ma page
 - Le composant progress bar permettant l'affichage de bar de niveau pour évaluer les qualités

## Bootswatch
-------------
Pour modifier le thème de Bootstrap, j'ai utilisé une librairie mise à disposition par Bootswatch.
 - Le thème choisi est cerulean

## Installation d'un premier plugin javacript via la commande bower
------
Afin de tester le fonctionnement de **bower** nous avons installons un plugin qui permet de faire défiler tout en douceur nos liens vers leurs ancres.

Pour facilité l'installation de ce plugin, **bower** nous permet d'exécuter une commande qui le télécharge et l'installe à notre place.
```sh
# installe une version d'un package et l'ajoute au fichier bower.json (option --save)
$ bower install jquery.smooth-scroll --save

# permet de désinstaller un package
$ bower uninstall  jquery.smooth-scroll --save
```

## Git
------
Afin de pouvoir versionner nos fichiers et de les partager, nous utilisons un logiciel de versionning. Il est également nécessaire au bon fonctionnement de **bower** puisque ce manager de package est basé sur Git.

Git utilise une architecture de type de distribuée ce qui contient un certain nombre d'avantage :
 - Cela réduit les risques de perte de données en cas de crash du serveur. Toutes les machines utilisant le projet git ont toutes les données du projet en local
 - Toutes les actions sont accélérées car les données sont en local
 - Le fait que les données soit en local permet de gagner du temps en évitant le trafic réseau et cela permet également de travaillant sans souci hors-connexion

### Les commandes git
---------------------
Les différentes commandes git permettent d'intéragir avec le serveur et d'ainsi manipuler en toutes sécurité les modifications effectuées sur des fichiers.

```sh
# initialisation d'un répertoire git
$ git init
```

Cette commande crée dans un répertoire du système un nouveau dépôt Git.

Si le répertoire existe déjà et que l'on désire le copier, on peut utiliser la commande :

```sh
$ git clone /path/to/repository
```

Un dépôt Git est composé de 3 éléments:
 - Un espace de travail qui contient réellement les fichier
 - Un index qui joue le rôle d'espace de transit pour les fichiers
 - Un HEAD qui pointe vers la dernière validation que l'on a faite
 
Afin de nous permettre d'ajouter nos changement à l'index, 1 première commande est nécessaire :

 ```sh
 # ajout d'un fichier monfichier.txt
$ git add monfichier.txt
# ajout de tous les fichiers ne se trouvant pas dans l'index
$ git add *
```

Une fois ces fichiers ajouter à l'index, il nous faudra valider la modification via la commande :
 ```sh
$ git commit -m "Message de validation"
```

Le message est très important puisqu'il permet de définir quelles modifications ont été apportées au fichier. Ce message aidera à distinguer plus facilement les différentes version du fichier.

Une fois le **commit** effectué, le fichier sera donc ajouté au HEAD.

Afin de contrôler l'état des fichiers de notre répertoire Git, une commande existe afin de nous résumer cela :
 ```sh
$ git status
```

Elle affiche l'état des différents fichiers. En rouge pour les fichiers à ajouter et en faire pour les fichiers à commiter.

## GitHub
Définition GitHub selon Wikipedia :
> GitHub (exploité sous le nom de GitHub, Inc.) est un service web d'hébergement et de gestion de développement de logiciels, utilisant le logiciel de gestion de versions Git. Ce site est développé en Ruby on Rails et Erlang par Chris Wanstrath, PJ Hyett et Tom Preston-Werner. GitHub propose des comptes professionnels payants, ainsi que des comptes gratuits pour les projets de logiciels libres.

Nous utilisons GitHub afin de mettre à disposition nos données. Un compte pour toute la classe a été créé ou nous déposons nos données.

Une fois connecté à notre répertoire distant, il est nécessaire de déploier les modifications en local sur ce serveur. Il est également possible de récupérer les modifications réaliser par d'autres personnes travaillant sur le projet.

 ```sh
 # envoyer des données vers le serveur distant
$ git push origin master

# pour mettre à jour le dépôt local vers les dernières validations
git pull

# pour fusionner 2 branche
git merge <branch>
```
Dans la mesure du possible, Git tente d'auto-fusionner les changements, mais lorsque des conflits surviennent, nous devons les régler par nous-même.
 ```sh
 # pour valider les changements
$ git add <filename>
```

Il est certaine fois nécessaire, afin d'éviter des problèmes des modifications, de créer des nouvelles branches à partir d'un projet existant.
 ```sh
 # pour créer une nouvelle branche et l'utiliser
$ git checkout -b gh-pages

# retour à la branche principale
$ git checkout master
```

Il est recommandé de créer des tags pour les releases de programmes. Pour créer des tags dans git, cette commande est utilisée :
 ```sh
 # pour créer une nouvelle branche et l'utiliser
$ git checkout -b gh-pages

# retour à la branche principale
$ git tag 1.0.0 1b2e1d63ff
```

## Utilisation du plugin Chart.js
Afin de comprendre le fonctionnement du langage **javascript**, nous avons installer le plugin **Chart.js** qui permet d'afficher différents diagrammes.

Nous avons utilisé le langage javascript afin de convertir nos progress bar utiliser dans bootstrap en diagramme de type Doughnut. Le code généré transforme automatiquement certaines balises et les paramètres afin d'obtenir le résultat désiré.

