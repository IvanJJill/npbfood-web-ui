export const MealNames = ["Breakfast", "Snack", "Lunch", "Dinner"];


/////    Breakfast
/////////////////////
const porridge = {
    name: 'Porridge',
    amount: 250,
    kcal: 1000,
    ingredients:{
        oat_flakes:{
            id: 11,
            name: "oat flakes",
            amount: 130,
            cooked: true,
            kcal: 400
        },
        milk:{
            name: "milk",
            amount: 100,
            cooked: false,
            kcal: 300
        },
        honey:{
            name: "honey",
            amount: 20,
            cooked: false,
            kcal: 300
        } 
    }
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


/////    Week days schedled meals
/////////////////////
const monday = [breakfast, lunch, snack];
const tuesday = [snack, lunch2, snack];
const wednesday = [lunch, snack, breakfast];
const thursday = [];
const friday = [];
const saturday = [];
const sunday = [];

/////    Whole week
/////////////////////
const meals_data = [monday, tuesday , wednesday, thursday, friday, saturday, sunday ];

export default meals_data;