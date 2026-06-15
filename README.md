# Mon Empreinte Carbone

Application web de sensibilisation permettant d'estimer une empreinte carbone hebdomadaire à partir des habitudes de l'utilisateur.

Ce projet a été réalisé en groupe pendant la deuxième année de Licence MIASHS à l'Université Toulouse - Jean Jaurès. Les facteurs d'émission sont récupérés depuis l'API publique **Impact CO2** de l'ADEME.

## Fonctionnalités

- questionnaire réparti en cinq thèmes : transport, alimentation, boissons, chauffage et numérique ;
- récupération des facteurs d'émission depuis l'API Impact CO2 ;
- calcul d'un résultat global et d'un détail par catégorie ;
- transmission des résultats entre les pages avec `localStorage` ;
- graphiques comparatifs générés avec Chart.js ;
- comparaisons visuelles proposées par les widgets Impact CO2 ;
- page de conseils pour mieux comprendre et réduire son impact.

## Technologies

- HTML5 ;
- CSS3 ;
- JavaScript sans framework ;
- Chart.js ;
- API REST Impact CO2 ;
- GitLab Pages pour le déploiement d'origine.

## Structure

```text
public/
├── Index.html                  # Page d'accueil
├── Pages/
│   ├── ex1.html               # Questionnaire
│   ├── ex2.html               # Résultats et graphiques
│   └── sensibilisation.html    # Informations et conseils
├── Javascript/script.js       # Calculs, API et graphiques
├── CSS/style.css              # Styles de l'application
└── Image/                     # Illustrations
```

## Lancer le projet

Le projet ne demande aucune installation de dépendance. Un petit serveur local est recommandé pour éviter les restrictions du navigateur :

```bash
python -m http.server 8000 --directory public
```

Ouvrir ensuite :

```text
http://localhost:8000/Index.html
```

Une connexion Internet est nécessaire pour les appels à Impact CO2 et le chargement de Chart.js.

## Limites actuelles

- les calculs dépendent de la disponibilité de services externes ;
- les résultats sont conservés uniquement dans le navigateur ;
- le projet ne possède pas encore de tests automatisés.

## Équipe

- Rubens Hasler
- Hyacinthe Waboe
- Olti Mjeku
- Ismael Cabrera Belmar
