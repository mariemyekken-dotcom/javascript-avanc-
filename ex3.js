const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

/*const [pays1,pays2]=pays;
console.log(pays1);
console.log(pays2);*/

/*const [, ,pays3]=pays;
console.log(pays3);*/

/*const[var1, ...var2]=pays;
console.log(var1);
console.log(var2);*/

const voyage = {
    destination: "Bali",
    prix: 1800,
    duree: 10,
    transport: "Avion",
    hotel: "5 étoiles"
};

/*const{destination,prix}=voyage;
console.log(destination);
console.log(prix);*/

/*const{destination:ville}=voyage;
console.log(ville);*/

/*const{prix=0,duree=1}=voyage;
console.log(prix);
console.log(duree);*/

function affichervoyage({destination, prix, duree, transport, hotel}){
    console.log("Destination :", destination);
    console.log("Prix :", prix);
    console.log("Durée :", duree);
    console.log("Transport :", transport);
    console.log("Hôtel :", hotel);
}
afficherVoyage(voyage);