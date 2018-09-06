export const MealNames = ['Breakfast', 'Snack', 'Lunch', 'Dinner'];
export const MealTypes = ['Main', 'Desert', 'Drink'];

export const Ingredients = {
  11: {
    name: 'oat flakes',
    amount: 130,
    cooked: true,
    kcal: 400
  },
  12: {
    name: 'milk',
    amount: 100,
    cooked: false,
    kcal: 300
  },
  13: {
    name: 'honey',
    amount: 20,
    cooked: false,
    kcal: 300
  },
  14: {
    name: 'apple',
    amount: 150,
    cooked: false,
    kcal: 50
  },
  144: {
    name: 'pear',
    amount: 150,
    cooked: false,
    kcal: 50
  },
  145: {
    name: 'banana',
    amount: 150,
    cooked: false,
    kcal: 50
  },
  15: {
    name: 'spagetti',
    amount: 100,
    cooked: false,
    kcal: 400
  },
  16: {
    name: 'tomato sauce',
    amount: 25,
    cooked: true,
    kcal: 25
  },
  17: {
    name: 'cake',
    amount: 100,
    cooked: true,
    kcal: 600
  }
};

const cookActions = {
  0: { name: 'boil' },
  1: { name: 'fry' },
  2: { name: 'stir' },
  3: { name: 'slice' },
  4: { name: 'mix' }
};

/////    Dishes
/////////////////////
const porridge = {
  name: 'Porridge',
  type: 0, // for Main dish
  portions: 1,
  amount: 250,
  ingredients: [11, 12, 13],
  cook: [
    {
      first: {
        0: [11, 12] // boil oat flakes with milk
      }
    },
    {
      second: {
        4: ['first', 13] // mix first (boiled oat flakes and milk) with ingredient 13 - honey
      }
    }
  ]
};

const fruit = {
  name: 'Fruit',
  type: 1, // for Desert dish
  portions: 1,
  amount: 2,
  ingredients: [14, 144]
};

const main = {
  name: 'Spagetti',
  type: 0, // for Main dish
  portions: 1,
  amount: 300,
  ingredients: [15, 16]
};
const desert = {
  name: 'Cake',
  type: 1, // for Desert dish
  portions: 1,
  amount: 100,
  ingredients: [17]
};

/////    Meal: Breakfast
/////////////////////

const breakfast = {
  id: 0, // for Breakfast
  dishes: [porridge]
};

/////    Meal: Snack
/////////////////////

const snack = {
  id: 1, // for Snack
  dishes: [fruit]
};

/////    Meal: Lunch
/////////////////////

const lunch = {
  id: 2, // for Lunch
  dishes: [main, desert]
};

const lunch2 = {
  id: 2,
  dishes: [desert, fruit, porridge]
};

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
const meals_data = [
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
];

export default meals_data;
