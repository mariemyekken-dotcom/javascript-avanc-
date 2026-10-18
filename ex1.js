const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonesie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];


destinations.forEach(d => {
    console.log(d.ville);
    
});
const ville = destinations.map(d=>d.ville);
console.log(ville);


const prix1500 = destinations.filter(d =>d.prix<1500);
/*ou bien
destinations.filter(d => {return d.prix<1500});*/


const destinations_id3=destinations.find(d=>d.id === 3);
console.log(destinations_id3);

const destination_id33= destinations.findIndex(d=> d.id === 3);
/*rq*/
prix1500[0].prix+=1000;
console.log(prix1500);
console.log(destinations);

/*rq*/
prix1500.map(d => d.prix +=1000);
console.log(prix1500);
console.log(destinations);



const tokyo=destinations.findIndex(d => d.ville === "tokyo");
console.log(tokyo);

const t=destinations.reduce((s,d)=>s=s+d.prix,0);
console.log(t);