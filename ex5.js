const favoris = [
    { id: 1, ville: "Venise", pays: "Italie", visite: false },
    { id: 2, ville: "Marrakech", pays: "Maroc", visite: true },
    { id: 3, ville: "Maldives", pays: "Maldives", visite: false },
    { id: 4, ville: "Barcelone", pays: "Espagne", visite: true }
];

favoris.forEach(destination => {
    console.log(destination);
});

const nonvisitees = favoris.filter(destination => destination.visite === false);
console.log(nonvisitees);

const villes = favoris.map(destination => destination.ville);
console.log(villes);

const destinationTrouvee = favoris.find(destination => destination.id === 3);
console.log(destinationTrouvee);

const nombrev = favoris.reduce((total, destination) => {
    return total + (destination.visite ? 1 : 0);
}, 0);

console.log(nombrev);

const nouveauxFavoris = [
    ...favoris,
    { id: 5, ville: "Rome", pays: "Italie", visite: false }
];

console.log(nouveauxFavoris);