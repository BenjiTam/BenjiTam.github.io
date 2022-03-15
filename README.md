# Première utilisation (à faire qu'une fois et par une seule personne)
Pour installer le projet, ouvrez un terminal avec git bash et naviguer dans un dossier où le boilerplate sera installé
```bash
npx degit https://github.com/remadex/boilerplate-project-ux.git ./project-ux  
```
Cette commande permet de récupérer un projet git et d'y supprimer le dossier .git <br /><br />
Une fois que le projet est installé, quittez git bash.<br />
Ouvrez Visual Studio Code et ouvrez le dossier ./project-ux<br />

Lors de la première utilisation de ce projet, **quelqu'un** de votre groupe devra créer un dépôt et le relier au projet. Voici comment y parvenir:
```bash
git init
git add .
git commit -m"init project"
```
Ensuite aller sur Github, créer un dépôt (en privé de préférence), suivre les instructions pour un projet déjà existant.<br />
Il faut également aller dans les paramètres du dépôt et ajouter les autres membres du groupe au dépôt

***ATTENTION*** <br />
Si vous travaillez sur un nouveau pc, n'oubliez pas que vous devez configurer git comme vu dans le cours :-)

# Installation

Pour ceux qui ne se sont pas occupés d'installer le projet pour récupérer le projet vous allez devoir faire un git clone du projet dans lequel vous vous trouvez. <br />
```bash
git clone git@github.com:remadex/boilerplate-project-ux.git ./nom_de_votre_projet
Le lien ne sera pas le même 😉
``` 
# Démarrer
Pour commencer à utiliser ce boilerplate, il faudra ouvrir un terminal via visual studio code (ou autre)
```bash
npm install -> Installe les dépendances
npm start -> Démarre le serveur
```
**Et let's go pour le code :-)**

# Ce qui a été mis en place pour vous
- Un serveur qui se rafraichit à chaque changement dans votre code.
- Un système de template (pour le header/footer). Cela vous évitera d'écrire plusieurs fois le même code. N'hésitez pas à refaire la même chose pour d'autres éléments qui se répètent.
- Dans le header, j'ai préparé la logique pour ajouter une classe "active" sur la route active dans le menu (nav > ul > li.active > a). Lisez le code et essayez de le comprendre :-)
- La structure des fichiers. N'hésitez pas à la modifier si vous le souhaitez mais attention à ce que vous faites 🙃

# Quelques explications
- Pour installer des nouveaux paquets (packages), suivez bien les infos de ce même package. Quand l'un d'entre vous, installe un paquet, il faut qu'il le précise aux autres afin que lorsque celui-ci va faire un commit (git add . -> git commit -> ... -> git pull -> git push), son équipe puisse récupérer le projet et refaire un npm install afin de mettre à jour le projet.

# Contact
N'hésitez pas à me contacter si vous avez des questions 😉