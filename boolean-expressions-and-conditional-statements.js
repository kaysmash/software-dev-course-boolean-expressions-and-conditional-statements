const readline = require('readline-sync');

console.log("Your new friend wants to go out to eat. To find out where to go, they ask if you have a nut allergy.");
const answer = readline.question("Do you have a nut allergy? (yes/no)");

if (answer === "yes") {
  console.log("Your friend suggests going to a restaurant that serves Mexican food.");

  const yesDrinkAlcohol = true;
  const noDrinkAlcohol = false;
  const maybeDrinkAlcohol = true;

  console.log("Your new friend also wants to know if you drink alcohol.");
  const answer2 = readline.question("Do you drink alcohol? (yes/no/maybe)");

  if (answer2 === "yes" && yesDrinkAlcohol) {
    console.log("Your friend suggests going to Los Patio.");
  } else if (answer2 === "no" && noDrinkAlcohol) {
    console.log("Your friend suggests going to the taco cart.");
  } else if (answer2 === "maybe" && maybeDrinkAlcohol) {
    console.log("Your friend suggests going to a restaurant that serves both alcoholic and non-alcoholic beverages.");
  } else {
    console.log("Your friend suggests a casual cafe for your meal.");
  }

} else if (answer === "no") {
  console.log("Your friend suggests going to a restaurant that serves Thai food.");

  const yesDrinkAlcoholT = true;
  const noDrinkAlcoholT = false;
  const maybeDrinkAlcoholT = true;

  console.log("Your new friend also wants to know if you drink alcohol.");
  const answer2 = readline.question("Do you drink alcohol? (yes/no/maybe)");

  if (answer2 === "yes" && yesDrinkAlcoholT) {
    console.log("Your friend suggests going to Thai Me Down.");
  } else if (answer2 === "no" && noDrinkAlcoholT) {
    console.log("Your friend suggests going to My Thai.");
  } else if (answer2 === "maybe" && maybeDrinkAlcoholT) {
    console.log("Your friend suggests going to a restaurant that serves both alcoholic and non-alcoholic beverages.");
  } else {
    console.log("Your friend suggests a restaurant with lots of drink options.");
  }

} else {
  console.log("Your friend is not sure what to suggest because the answer wasn't yes or no.");
}
