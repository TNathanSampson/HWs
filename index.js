const pirateShip = {
  crew: 5,
  masts: 3,
  decks: 3,
  cannons: 8,
  parrot: 1,
  ranks: {
    captain: "Two-Eyed Max",
    firstMate: "Slippery Pete",
    quarterMaster: "Shifty Pete"
  },
  seaWorthy: true,
  class: "Galleon",
  material: "Wood",
  Name: "The Defiant"
};

pirateShip.plank = true;
pirateShip.crew = 6;
console.log(pirateShip.ranks.captain);

let battleDamage = "One-Eyed Max";
pirateShip.ranks["captain"] = battleDamage;

console.log(pirateShip.ranks.captain);
