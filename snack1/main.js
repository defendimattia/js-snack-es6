const bicyclesList = [
    { name: "Bianchi Oltre XR4", weight: 7.2 },
    { name: "Specialized S-Works Tarmac", weight: 6.8 },
    { name: "Cannondale SuperSix Evo", weight: 6.9 },
    { name: "Trek Madone SLR 9", weight: 7.1 },
    { name: "Pinarello Dogma F12", weight: 7.3 },
    { name: "Giant TCR Advanced Pro", weight: 7.0 },
    { name: "Cervélo R5", weight: 6.7 },
    { name: "Wilier Triestina Zero SLR", weight: 6.6 },
    { name: "Colnago C64", weight: 7.4 },
    { name: "Salsa Warbird", weight: 8.1 }
]

let maxWeight = { name: "init", weight: 0 }

for (let key in bicyclesList) {

    const bicycleObj = bicyclesList[key]
    const bicycleWeight = bicycleObj.weight

    if (bicycleWeight > maxWeight.weight) maxWeight = bicycleObj

}

console.log(`La bicicletta più pesante è: ${maxWeight.name}, che pesa: ${maxWeight.weight} Kg`)