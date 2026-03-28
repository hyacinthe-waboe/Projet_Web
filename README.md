# 🌱 Mon Empreinte Carbone - Projet Web MIASHS

## 📖 À propos du projet
Ce projet web a été réalisé par un groupe de quatre étudiants dans le cadre d'un projet universitaire en deuxième année de Licence MIASHS (Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales) à l'Université Toulouse - Jean Jaurès. 

L'objectif principal est de sensibiliser le public à l'écologie à travers un outil interactif permettant d'évaluer l'empreinte carbone hebdomadaire d'un individu. Pour garantir la fiabilité des calculs, l'ensemble des données manipulées provient de l'API officielle de l'ADEME via la plateforme **Impact CO2**.

## ✨ Fonctionnalités clés
* **Calculateur interactif :** Un formulaire exhaustif permet à l'utilisateur de renseigner ses habitudes de vie réparties en cinq thématiques : Transport, Alimentation, Boisson, Chauffage et Numérique.
* **Intégration API en temps réel :** Le moteur JavaScript effectue des requêtes (`XMLHttpRequest`) vers l'API `impactco2.fr` pour récupérer les facteurs d'émission exacts associés aux choix de l'utilisateur.
* **Visualisation des résultats :** La restitution des données s'appuie sur la bibliothèque **Chart.js** pour générer des graphiques comparatifs clairs (score de l'utilisateur VS moyenne nationale de 188,46 kgCO2/semaine).
* **Comparateur visuel :** Injection dynamique d'iframes interactives (étiquettes animées) pour visualiser son impact de manière ludique en le comparant à des objets du quotidien.
* **Espace éducatif :** Une section dédiée à la sensibilisation pour comprendre ce qu'est l'empreinte carbone et découvrir des actions concrètes pour la réduire.

## 🛠️ Technologies utilisées
* **Frontend :** HTML5, CSS3 (Design responsive, Animations CSS)
* **Logique / Scripts :** JavaScript (Vanilla)
* **Stockage :** `localStorage` pour la transmission des données de calcul entre la page de formulaire et la page de résultats.
* **Librairie de visualisation :** Chart.js
* **Source de données :** API RESTful *Impact CO2*

## 📂 Architecture du projet
* `Index.html` : La page d'accueil de l'application présentant l'outil et l'équipe.
* `Pages/ex1.html` : L'interface contenant le questionnaire détaillé pour évaluer sa consommation.
* `Pages/ex2.html` : Le tableau de bord affichant le bilan carbone, les graphiques et les widgets de comparaison.
* `Pages/sensibilisation.html` : La page d'information et de conseils écologiques.
* `CSS/style.css` : La feuille de style globale gérant l'identité visuelle (palette de couleurs océan/nature) et la mise en page adaptative.
* `Javascript/script.js` : Le cœur logique de l'application traitant les événements de formulaire, les appels API, les algorithmes de calcul mathématique et la génération de graphiques.

## 👥 L'équipe de développement
Ce projet a été imaginé, conçu et développé par :
* Rubens Hasler
* Hyacinthe Waboe
* Olti Mjeku
* Ismael Cabrera Belmar
