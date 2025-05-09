let ecvTotal;
let ecvTransport;
let ecvAlimentation;
let ecvBoisson;
let ecvChauffage;
let ecvNumerique;



if (window.location.pathname.includes('ex1.html')) {  // Vérifiez si vous êtes sur la page ex1.html
   
    document.addEventListener('click', function (e) {   // Ajoute un écouteur d'événement pour les clics sur le document
       
        if (e.target.type === "submit") {   // Vérifie si l'élément cliqué est un bouton de soumission
            e.preventDefault();

            const form = e.target.closest('form');
            ecvTotal = 0;
            ecvTransport = 0;
            ecvAlimentation = 0;
            ecvBoisson = 0;
            ecvChauffage = 0;
            ecvNumerique = 0;

            // 1. Transport
            const xha = new XMLHttpRequest();
            xha.open("get", "https://impactco2.fr/api/v1/thematiques/ecv/4?detail=0&language=fr");
            xha.onreadystatechange = function () {
                if (xha.readyState === 4 && xha.status === 200) {
                    const reponse = JSON.parse(xha.responseText);
                    console.log(reponse);

                    const transportElement = form.querySelectorAll('[name^="Transport"]');
                    const tab = [];

                    transportElement.forEach((elt, i) => {
                        const transportType = elt.value;
                        const nbrtrajet = form.querySelector(`[name="nbrtrajet${i + 1}"]`).value;
                        if (nbrtrajet != "0" && !tab.includes(transportType)) {   // Vérifie si le nombre de trajets n'est pas égal à "0" et si le type de transport n'est pas déjà dans le tableau transportType

                            tab.push(transportType);
                            let nbrkm = form.querySelector(`[name="nbrkm${i + 1}"]`).value;

                            let valeurEcv = 0;
                            for (const { name: n, ecv: e } of reponse.data) {
                                if (n === transportType) {
                                    valeurEcv = e;
                                    break;
                                }
                            }

                            console.log(`Empreinte carbone par km pour ${transportType} : ${valeurEcv} kgCO2`);

                            if (nbrkm === "") {
                                nbrkm = 5;
                            }

                            const trajet = nbrtrajet * nbrkm;
                            const resultat = trajet * valeurEcv;
                            console.log(`Empreinte carbone par semaine pour ${transportType} : ${resultat} kgCO2`);
                            ecvTransport += resultat;
                        } else {
                            console.log(`${transportType} non selectionné…`);
                        }
                    });

                    // 2. Alimentation
                    const xhb = new XMLHttpRequest();
                    xhb.open("get", "https://impactco2.fr/api/v1/thematiques/ecv/2?detail=0&language=fr");
                    xhb.onreadystatechange = function () {
                        if (xhb.readyState === 4 && xhb.status === 200) {
                            const reponse1 = JSON.parse(xhb.responseText);
                            console.log(reponse1);

                            const alimentElement = form.querySelectorAll('[name^="Aliment"]');
                            const tab = [];

                            alimentElement.forEach((elt, i) => {
                                const alimentType = elt.value;
                                const plats = form.querySelector(`[name="plats${i + 1}"]`).value;
                                if (plats != "0" && !tab.includes(alimentType)) {

                                    tab.push(alimentType);
                                    let gram = form.querySelector(`[name="gram${i + 1}"]`).value;

                                    let valeurEcv = 0;
                                    for (const { name: n, ecv: e } of reponse1.data) {
                                        if (n === alimentType) {
                                            valeurEcv = e;
                                        }
                                    }

                                    console.log(`Empreinte carbone par kg pour ${alimentType} : ${valeurEcv} kgCO2`);

                                    if (gram === "") {
                                        gram = 500;
                                    }

                                    const repas = plats * gram;
                                    const resultat = (repas * valeurEcv) / 1000;

                                    console.log(`Empreinte carbone par semaine pour ${alimentType} : ${resultat} kgCO2`);
                                    ecvAlimentation += resultat;
                                } else {
                                    console.log(`${alimentType} non selectionné…`);
                                }
                            });

                            // 3. Boisson
                            const xhc = new XMLHttpRequest();
                            xhc.open("get", "https://impactco2.fr/api/v1/thematiques/ecv/3?detail=0&language=fr");
                            xhc.onreadystatechange = function () {
                                if (xhc.readyState === 4 && xhc.status === 200) {
                                    const reponse2 = JSON.parse(xhc.responseText);
                                    console.log(reponse2);

                                    const boissonElement = form.querySelectorAll('[name^="boisson"]');
                                    const tab = [];

                                    boissonElement.forEach((elt, i) => {
                                        const boissonType = elt.value;
                                        const litre = form.querySelector(`[name="litre${i + 1}"]`).value;
                                        if (litre != "0" && !tab.includes(boissonType)) {

                                            tab.push(boissonType);
                                            let valeurEcv = 0;

                                            for (const { name: n, ecv: e } of reponse2.data) {
                                                if (n === boissonType) {
                                                    if (n !== "Lait de vache") {
                                                        valeurEcv = e;
                                                    } else {
                                                        valeurEcv = 1.15;
                                                    }
                                                }
                                            }

                                            console.log(`Empreinte carbone par litre pour ${boissonType} : ${valeurEcv} kgCO2`);
                                            const resultat = valeurEcv * litre;
                                            console.log(`Empreinte carbone par semaine pour ${boissonType} : ${resultat} kgCO2`);
                                            ecvBoisson += resultat;
                                        } else {
                                            console.log(`${boissonType} non selectionné…`);
                                        }
                                    });

                                    // 4. Chauffage
                                    const xhd = new XMLHttpRequest();
                                    xhd.open("get", "https://impactco2.fr/api/v1/chauffage?m2=1&language=fr");
                                    xhd.onreadystatechange = function () {
                                        if (xhd.readyState === 4 && xhd.status === 200) {
                                            const reponse3 = JSON.parse(xhd.responseText);
                                            console.log(reponse3);

                                            const chauffageType = form.querySelector('[name="Chauffage"]').value;
                                            let m2 = form.querySelector('[name="m2"]').value;

                                            let valeurEcv = 0;
                                            for (const { name: n, ecv: e } of reponse3.data) {
                                                if (n === chauffageType) {
                                                    valeurEcv = e;
                                                }
                                            }

                                            console.log(`Empreinte carbone par m² pour 1 an de ${chauffageType} : ${valeurEcv} kgCO2`);

                                            if (m2 === "") {
                                                m2 = 63;
                                            }
                                            const resultat = m2 * (valeurEcv / 52);

                                            console.log(`Empreinte carbone par semaine pour ${chauffageType} : ${resultat} kgCO2`);
                                            ecvChauffage += resultat;

                                            // 5. Numérique
                                            const xhe = new XMLHttpRequest();
                                            xhe.open("get", "https://impactco2.fr/api/v1/thematiques/ecv/1?detail=1&language=fr");
                                            xhe.onreadystatechange = function () {
                                                if (xhe.readyState === 4 && xhe.status === 200) {
                                                    const reponse4 = JSON.parse(xhe.responseText);
                                                    console.log(reponse4);

                                                    const numeriqueElement = form.querySelectorAll('[name^="numerique"]');
                                                    const tab = [];

                                                    numeriqueElement.forEach((elt, i) => {
                                                        const numeriqueType = elt.value;
                                                        const mat = form.querySelector(`[name="mat${i + 1}"]`).value;
                                                        if (mat != "0" && !tab.includes(numeriqueType)) {

                                                            tab.push(numeriqueType);
                                                            let valeurEcv = 0;
                                                            let resultat = 0;
                                                            let conv = 0;

                                                            for (const { name: n, ecv: e } of reponse4.data) {
                                                                if (n === numeriqueType) {
                                                                    valeurEcv = e;
                                                                    break;
                                                                }
                                                            }

                                                            if (numeriqueType === "Ordinateur fixe sans écran (particulier)") {
                                                                conv = valeurEcv - 26;
                                                                resultat = conv;
                                                                console.log(`Empreinte carbone par unité pour 1 an de ${numeriqueType} : ${resultat} kgCO2`);
                                                                for (let i = 1; i < mat; i += 0.5) {
                                                                    resultat += 2.5;
                                                                }

                                                            } else if (numeriqueType === "Ordinateur fixe sans écran (professionnel)") {
                                                                conv = valeurEcv - 39;
                                                                resultat = conv;
                                                                console.log(`Empreinte carbone par unité pour 1 an de ${numeriqueType} : ${resultat} kgCO2`);
                                                                for (let i = 1; i < mat; i += 0.5) {
                                                                    resultat += 4;
                                                                }
                                                            } else {
                                                                conv = valeurEcv - 0.3;
                                                                resultat = conv;
                                                                console.log(`Empreinte carbone par unité pour 1 an de ${numeriqueType} : ${resultat} kgCO2`);

                                                                resultat = conv;
                                                                for (let i = 1; i < mat; i += 0.5) {
                                                                    resultat += 0.1;
                                                                }

                                                            }

                                                            resultat = resultat / 52;
                                                            console.log(`Empreinte carbone par semaine pour ${numeriqueType} : ${resultat} kgCO2`);
                                                            ecvNumerique += resultat;
                                                        } else {
                                                            console.log(`${numeriqueType} non selectionné…`);
                                                        }
                                                    });

                                                    // Calcul de l'empreinte carbone totale
                                                    ecvTotal = (ecvTransport + ecvAlimentation + ecvBoisson + ecvChauffage + ecvNumerique).toFixed(1);
                                                    console.log(`Empreinte carbone totale : ${ecvTotal} kgCO2`);

                                                    // Stocke les valeurs ecv dans le localStorage
                                                    localStorage.setItem('ecvTotal', ecvTotal);
                                                    localStorage.setItem('ecvTransport', ecvTransport);
                                                    localStorage.setItem('ecvAlimentation', ecvAlimentation);
                                                    localStorage.setItem('ecvBoisson', ecvBoisson);
                                                    localStorage.setItem('ecvChauffage', ecvChauffage);
                                                    localStorage.setItem('ecvNumerique', ecvNumerique);

                                                    // Redirige vers la page 'ex2.html'
                                                    window.location.href = 'ex2.html';


                                                }
                                            };
                                            xhe.send();
                                        }
                                    };
                                    xhd.send();
                                }
                            };
                            xhc.send();
                        }
                    };
                    xhb.send();
                }
            };
            xha.send();
        }
    });
}

if (window.location.pathname.includes('ex2.html')) { // Vérifiez si vous êtes sur la page ex2.html
    // recuperation des valeurs stockez pour les utilser dans la page 2
    const ecvTotal = localStorage.getItem('ecvTotal');
    const ecvTransport = localStorage.getItem('ecvTransport');
    const ecvAlimentation = localStorage.getItem('ecvAlimentation');
    const ecvBoisson = localStorage.getItem('ecvBoisson');
    const ecvChauffage = localStorage.getItem('ecvChauffage');
    const ecvNumerique = localStorage.getItem('ecvNumerique');
    console.log(`Empreinte carbone totale : ${ecvTotal} kgCO2`)

    if (ecvTotal) {
        if (ecvTotal > 188.46) {
            document.querySelector("p").innerHTML = `<p style="color: red;">Empreinte carbone Total : ${ecvTotal} kgCO2</p>`;

        }else{
            document.querySelector("p").innerHTML = `<p style="color: green;">Empreinte carbone Total : ${ecvTotal} kgCO2</p>`;
        }
        

        const data = {
            labels: ["Ton Score", "Moyenne"],
            datasets: [{
                label: 'Empreinte Carbone (kgCO2)',
                data: [
                    ecvTotal, 188.46
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {}
        };

        const data1 = {
            labels: ["Transport", "Alimentation", "Boisson", "Chauffage", "Numerique"],
            datasets: [{
                label: 'Empreinte Carbone (kgCO2)',
                data: [
                    ecvTransport,
                    ecvAlimentation,
                    ecvBoisson,
                    ecvChauffage,
                    ecvNumerique
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };

        const config1 = {
            type: 'line',
            data: data1,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Graphe 1
        const myChart1 = new Chart(document.querySelector('#myChart'), config);
        // Graphe 2
        const myChart2 = new Chart(document.querySelector('#myCharty'), config1);

        // Tableau de Comparaison
        const comparateurAnimée = document.createElement('script');
        comparateurAnimée.src = "https://impactco2.fr/iframe.js";
        comparateurAnimée.setAttribute('name', 'impact-co2');
        comparateurAnimée.setAttribute('data-type', 'comparateur/etiquette-animee');
        comparateurAnimée.setAttribute('data-search', `?value=${ecvTotal}&comparisons=alimentationsmartphone,tshirtencoton,painauxraisins,avion-moyencourrier,cafe,telechargement,piscine,pompeachaleur&language=fr&theme=default`);

        const comparateurSimple = document.createElement('script');
        comparateurSimple.src = "https://impactco2.fr/iframe.js";
        comparateurSimple.setAttribute('name', 'impact-co2');
        comparateurSimple.setAttribute('data-type', 'comparateur/etiquette');
        comparateurSimple.setAttribute('data-search', `?value=${ecvTotal}&comparisons=harry-potter,smartphone,repasavecdupoissongras,jeans,carotte,francais,voiturethermique,pates&language=fr&theme=default`);

        document.querySelector("#ex1").appendChild(comparateurAnimée);
        document.querySelector("#ex2").appendChild(comparateurSimple);
        let texte;
        if (ecvTotal >  188.86) {
            texte = "Ce qui supérieure à la moyenne, il est donc nécessaire de mettre en place des mesures de prévention pour la réduire(Voir ci-dessous) !<br/>"
        }else{
            texte = "Ce qui est inferieur a la moyenne donc tes un boss !<br/>"
        }
        document.querySelector("#resultat").innerHTML += `<br/>Tu as obtenu un score de ${ecvTotal}kgCO2… ${texte} Tu trouvera aussi des comparaisons amusantes de ton resultat par rapport a d'autres equivalents `
    }
}
