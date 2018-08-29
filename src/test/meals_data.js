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

const meals_data = [[breakfast, snack, lunch, snack], [breakfast, snack, lunch]];

export default meals_data;