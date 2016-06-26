# Mon CV - Jerome Schneider
---------------------------

EExplication du d�veloppement de ma page de Curriculum Vitae et de l'utilistation de git et github.

  - Utilisation de BootStrap et Bootswatch pour la mise en page
  - Yeoman (Yo, Bower, Gulp)
  - Node.js
  - npm
  - Installation d'une libraire pour le d�filement (jquery.smooth-scroll.js)
  - Utilisation de Git pour le service de versionning
  - GitHub
  - D�ploier les donn�es d'un r�pertoire contenant dans le r�sultat de la compilation du code html

## Yoeman
---------
Yoeman est une plateforme qui permet de r�cup�rer des templates qui ont �t� cr��s pour nous. Cela nous permet d'�tre plus rapidement productif et d'utiliser les "best practice" en vigueur. 

Il se compose de trois outils nous permettant de r�cup�rer et d�ploier facilement ces templates:
 - **Yo** nous permet de r�cup�rer les projets et de les d�ploier dans un r�pertoire
 - **Gulp** nous permet de construire, de pr�visualiser et de tester notre application
 - **npm** nous permet de r�cup�rer diff�rents plugins sur le net et de les installer automatiquement dans nos projets. Il est �galement n�cessaire � l'installation de **bower** que nous utiliserons pour t�l�charger nos plugins.

## gulp
----
Gulp est un task runner , c'est � dire qu'il est capable de lancer des bouts de scripts � notre place.

Afin de lancer notre serveur, nous utilisons la t�che d�fini :
```sh
$ gulp serve
```

2 autres commandes sont �glament utilis�es avec gulp :
```sh
# compile et minise le code dans le r�pertoire build
$ gulp build

# contr�le du r�sultat une fois le code build�
$ gulp serve:dist

# ajoute et commit les modifications de dist sur le serveur distant
$ gulp deploy
```

## bower
----
L'avantage d'utiliser un logiciel comme **bower** c'est qu'il g�re � notre place les d�pendances, c'est � dire qu'il t�l�charge automitiquement les �l�ments n�cessaires au bon fonctionnnement du plugin que l'on d�sire utilis�.

Pour fonctionner, bower � besoin que l'on installe **node.js** ainsi que **git**.

Afin d'installer bower sur notre poste nous utiliserons la commande suivante :
```sh
$ npm install -g bower
```

## node.js
----------
Comme expliquer dans le point pr�c�dant, node.js est n�cessaire qu bon fonctionnement de **bower**. C'est pourquoi nous l'avons installer.

Selon la d�finition de Wikipedia:
> Node.js est une plateforme logicielle libre et �v�nementielle en JavaScript orient�e vers les applications r�seau qui doivent pouvoir monter en charge. Elle utilise la machine virtuelle V8 et impl�mente sous licence MIT les sp�cifications CommonJS. Node.js contient une biblioth�que de serveur HTTP int�gr�e, ce qui rend possible de faire tourner un serveur web sans avoir besoin d'un logiciel externe comme Apache ou lighttpd, et permettant de mieux contr�ler la fa�on dont le serveur web fonctionne.

## Bootstrap
------------
Pour la mise en page plusieurs �l�ments ont �t� utilis� dans le framework bootstrap:
 - Le syst�me de grille afin d'avoir une mise en page responsive pouvant s'afficher sur plusieurs tailles d'�cran
 - Des classes de mise en page pour les diff�rents �l�ments de la page html (div, img, etc.)
 - Le composant glyphicons permettant l'affichage d'images mise � disposition dans le framework
 - Le composant navbar permettant l'affichage d'un menu dans ma page
 - Le composant progress bar permettant l'affichage de bar de niveau pour �valuer les qualit�s

## Bootswatch
-------------
Pour modifier le th�me de Bootstrap, j'ai utilis� une librairie mise � disposition par Bootswatch.
 - Le th�me choisi est cerulean

## Installation d'un premier plugin javacript via la commande bower
------
Afin de tester le fonctionnement de **bower** nous avons installons un plugin qui permet de faire d�filer tout en douceur nos liens vers leurs ancres.

Pour facilit� l'installation de ce plugin, **bower** nous permet d'ex�cuter une commande qui le t�l�charge et l'installe � notre place.
```sh
# installe une version d'un package et l'ajoute au fichier bower.json (option --save)
$ bower install jquery.smooth-scroll --save

# permet de d�sinstaller un package
$ bower uninstall  jquery.smooth-scroll --save
```

## Git
------
Afin de pouvoir versionner nos fichiers et de les partager, nous utilisons un logiciel de versionning. Il est �galement n�cessaire au bon fonctionnement de **bower** puisque ce manager de package est bas� sur Git.

Git utilise une architecture de type de distribu�e ce qui contient un certain nombre d'avantage :
 - Cela r�duit les risques de perte de donn�es en cas de crash du serveur. Toutes les machines utilisant le projet git ont toutes les donn�es du projet en local
 - Toutes les actions sont acc�l�r�es car les donn�es sont en local
 - Le fait que les donn�es soit en local permet de gagner du temps en �vitant le trafic r�seau et cela permet �galement de travaillant sans souci hors-connexion

### Les commandes git
---------------------
Les diff�rentes commandes git permettent d'int�ragir avec le serveur et d'ainsi manipuler en toutes s�curit� les modifications effectu�es sur des fichiers.

```sh
# initialisation d'un r�pertoire git
$ git init
```

Cette commande cr�e dans un r�pertoire du syst�me un nouveau d�p�t Git.

Si le r�pertoire existe d�j� et que l'on d�sire le copier, on peut utiliser la commande :

```sh
$ git clone /path/to/repository
```

Un d�p�t Git est compos� de 3 �l�ments:
 - Un espace de travail qui contient r�ellement les fichier
 - Un index qui joue le r�le d'espace de transit pour les fichiers
 - Un HEAD qui pointe vers la derni�re validation que l'on a faite
 
Afin de nous permettre d'ajouter nos changement � l'index, 1 premi�re commande est n�cessaire :

 ```sh
 # ajout d'un fichier monfichier.txt
$ git add monfichier.txt
# ajout de tous les fichiers ne se trouvant pas dans l'index
$ git add *
```

Une fois ces fichiers ajouter � l'index, il nous faudra valider la modification via la commande :
 ```sh
$ git commit -m "Message de validation"
```

Le message est tr�s important puisqu'il permet de d�finir quelles modifications ont �t� apport�es au fichier. Ce message aidera � distinguer plus facilement les diff�rentes version du fichier.

Une fois le **commit** effectu�, le fichier sera donc ajout� au HEAD.

Afin de contr�ler l'�tat des fichiers de notre r�pertoire Git, une commande existe afin de nous r�sumer cela :
 ```sh
$ git status
```

Elle affiche l'�tat des diff�rents fichiers. En rouge pour les fichiers � ajouter et en faire pour les fichiers � commiter.

## GitHub
D�finition GitHub selon Wikipedia :
> GitHub (exploit� sous le nom de GitHub, Inc.) est un service web d'h�bergement et de gestion de d�veloppement de logiciels, utilisant le logiciel de gestion de versions Git. Ce site est d�velopp� en Ruby on Rails et Erlang par Chris Wanstrath, PJ Hyett et Tom Preston-Werner. GitHub propose des comptes professionnels payants, ainsi que des comptes gratuits pour les projets de logiciels libres.

Nous utilisons GitHub afin de mettre � disposition nos donn�es. Un compte pour toute la classe a �t� cr�� ou nous d�posons nos donn�es.

Une fois connect� � notre r�pertoire distant, il est n�cessaire de d�ploier les modifications en local sur ce serveur. Il est �galement possible de r�cup�rer les modifications r�aliser par d'autres personnes travaillant sur le projet.

 ```sh
 # envoyer des donn�es vers le serveur distant
$ git push origin master

# pour mettre � jour le d�p�t local vers les derni�res validations
git pull

# pour fusionner 2 branche
git merge <branch>
```
Dans la mesure du possible, Git tente d'auto-fusionner les changements, mais lorsque des conflits surviennent, nous devons les r�gler par nous-m�me.
 ```sh
 # pour valider les changements
$ git add <filename>
```

Il est certaine fois n�cessaire, afin d'�viter des probl�mes des modifications, de cr�er des nouvelles branches � partir d'un projet existant.
 ```sh
 # pour cr�er une nouvelle branche et l'utiliser
$ git checkout -b gh-pages

# retour � la branche principale
$ git checkout master
```

Il est recommand� de cr�er des tags pour les releases de programmes. Pour cr�er des tags dans git, cette commande est utilis�e :
 ```sh
 # pour cr�er une nouvelle branche et l'utiliser
$ git checkout -b gh-pages

# retour � la branche principale
$ git tag 1.0.0 1b2e1d63ff
```

## Utilisation du plugin Chart.js
Afin de comprendre le fonctionnement du langage **javascript**, nous avons installer le plugin **Chart.js** qui permet d'afficher diff�rents diagrammes.

Nous avons utilis� le langage javascript afin de convertir nos progress bar utiliser dans bootstrap en diagramme de type Doughnut. Le code g�n�r� transforme automatiquement certaines balises et les param�tres afin d'obtenir le r�sultat d�sir�.

