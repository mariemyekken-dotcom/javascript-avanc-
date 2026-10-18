/*const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmee" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmee" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmee" }
];*/

/*const t =[1,2,3,4,5,6,7];
const [a,b] = t;
const [a1,b1,c] = t;
const [a2, ,b2]= t;
console.log(a, b);
console.log(a1, b1, c);
console.log(a2,b2);
const[ , ,...t2]=t;
console.log(t2);*/


/*const produit={
    id:1,
    nom:"souris",
    prix:20,
    stock:15
};*/
/*const{nom,prix}=produit;*/
/*console.log(nom,prix);*/
/*const{nom:destination,prix}=produit;
console.log(destination,prix);*/

const panier=[{
    id:1,
    nom:"souris",
    prix:20,
    stock:15
},
{
    id:2,
    nom:"clavier",
    prix:80,
    stock:3
},
{
    id:3,
    nom:"ecr",
    prix:350,
    stock:10
}
];
/*nheb nkharj tous les nom et les produits*/
/*const nomprix=panier.map(({nom,prix})=>({nom,prix}));
console.log(nomprix);*/

const nvproduit={
    id:4,
    nom:"ecouteur",
    prix:30,
    stock:5
};
const nvpanier=[...panier,nvproduit];
console.log(nvpanier);