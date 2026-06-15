<h1 align="center">🌍 Mon Empreinte Carbone</h1>

<p align="center">
  <strong>Comprendre son impact pour commencer à le réduire.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js">
</p>

## 🌱 Le projet

Cette application web estime l'empreinte carbone hebdomadaire d'une personne à partir de ses habitudes, puis présente le résultat de manière claire et visuelle.

Elle a été réalisée en groupe pendant notre deuxième année de **Licence MIASHS** à l'Université Toulouse - Jean Jaurès. Les facteurs d'émission proviennent de l'API publique **Impact CO2** de l'ADEME.

## ✨ Le parcours utilisateur

1. 📝 répondre à un questionnaire sur ses habitudes ;
2. 🌐 récupérer les facteurs d'émission auprès d'Impact CO2 ;
3. 🧮 calculer l'empreinte totale et le détail par catégorie ;
4. 📊 découvrir ses résultats avec des graphiques ;
5. 💡 consulter des comparaisons et des conseils de sensibilisation.

Les cinq catégories étudiées sont :

- 🚗 transport ;
- 🍽️ alimentation ;
- 🥤 boissons ;
- 🔥 chauffage ;
- 💻 numérique.

## 🛠️ Technologies

| Besoin | Solution |
|---|---|
| Structure | HTML5 |
| Mise en page | CSS3 et animations |
| Calculs et interactions | JavaScript sans framework |
| Visualisation | Chart.js |
| Facteurs d'émission | API REST Impact CO2 |
| Passage des résultats | `localStorage` |

## 📂 Structure

```text
public/
├── Index.html                  # Page d'accueil
├── Pages/
│   ├── ex1.html               # Questionnaire
│   ├── ex2.html               # Résultats et graphiques
│   └── sensibilisation.html    # Informations et conseils
├── Javascript/script.js       # Calculs, API et graphiques
├── CSS/style.css              # Identité visuelle
└── Image/                     # Illustrations
```

## 🚀 Lancer l'application

Aucune dépendance n'est à installer. Depuis la racine :

```bash
python -m http.server 8000 --directory public
```

Puis ouvrir :

```text
http://localhost:8000/Index.html
```

Une connexion Internet est nécessaire pour utiliser Impact CO2 et charger Chart.js.

## 🚧 Limites actuelles

- les calculs dépendent de services externes ;
- les résultats sont conservés uniquement dans le navigateur ;
- aucune suite de tests automatisés n'est encore présente.

## 👥 Équipe

- Rubens Hasler
- Hyacinthe Waboe
- Olti Mjeku
- Ismael Cabrera Belmar

<p align="center"><em>Un premier projet web pour apprendre en construisant quelque chose d'utile. 🌿</em></p>
