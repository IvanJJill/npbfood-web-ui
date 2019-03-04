import React from 'react';

import DishCard from './DishCard';

export default ({ mealData }) => {
  return mealData.dishes.map((dish, idx) => (
    <DishCard dish={dish} idx={idx} id={dish.id} key={dish.id} />
  ));
};
