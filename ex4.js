const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];

/*const copie=[...destinationsEurope];
console.log(copie);

const fusion=[...destinationsEurope,...destinationsAsie];

const ajouterdebut=["lisbome",...destinationsEurope];
console.log(ajouterdebut);

const ajouterfin=[...destinationsEurope,"landre"];
console.log(ajouterfin);*/

/*const parisnon = destinationsEurope.filter(ville => ville !== "Paris");
console.log(parisnon);*/

const reservation = {
    numero: 201,
    client: "Nadia",
    destination: "Bali",
    statut: "En attente"
};

/*const copieres ={...reservation};
console.log(copieres); */

/*const confirmee ={
    ...reservation,
    statut:"confirmee"
};
console.log(confirmee);*/

/*const assuranceajouter={
    ...reservation,
    assurance:true
};
console.log(assuranceajouter);*/

const nvlreservation = {
    ...reservation,
    statut: "Confirmée",
    destination: "Tokyo"
};

console.log(nvlreservation);