export const MealNames = ["Breakfast", "Snack", "Lunch", "Dinner"];


/////    Breakfast
/////////////////////
const porridge = {
    name: 'Porridge',
    amount: 250,
    kcal: 1000
}
const breakfast = {
    id: 0, // for Breakfast
    dishes: [porridge]
};

/////    Snack
/////////////////////
const fruit = {
    name: 'Fruit',
    amount: 2,
    kcal: 100
}
const snack = {
    id: 1, // for Snack
    dishes: [fruit]
};

/////    Lunch
/////////////////////
const main = {
    name: 'Spagetti',
    amount: 300,
    kcal: 500
}
const desert = {
    name: 'Cake',
    amount: 100,
    kcal: 200
}
const lunch = {
    id: 2, // for Lunch
    dishes: [main, desert]
};

const lunch2 = {
    id: 2,
    dishes:[desert, fruit, porridge]
}

const meals_data = [[breakfast, lunch, snack], [ snack, lunch2, snack], [lunch, snack, breakfast]];

export default meals_data;