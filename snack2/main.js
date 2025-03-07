const teams = [
    { name: 'Team A', points: 0, fouls: 0 },
    { name: 'Team B', points: 0, fouls: 0 },
    { name: 'Team C', points: 0, fouls: 0 },
    { name: 'Team D', points: 0, fouls: 0 },
    { name: 'Team E', points: 0, fouls: 0 },
    { name: 'Team F', points: 0, fouls: 0 },
    { name: 'Team G', points: 0, fouls: 0 },
    { name: 'Team H', points: 0, fouls: 0 },
    { name: 'Team I', points: 0, fouls: 0 },
    { name: 'Team J', points: 0, fouls: 0 }
];

const finalArray = []

// genera numero randomico prendendo come valore il numero massimo
function generateRndmNum(num) {
    return Math.floor(Math.random() * num)
}

for (key in teams) {

    const team = teams[key]
    team.points = generateRndmNum(50)
    team.fouls = generateRndmNum(50)
    finalArray.push(team.name , team.fouls)
}

console.log(finalArray)