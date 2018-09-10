import React from 'react';

import DishCard from './DishCard';

export default ({ data }) => {
  return data.dishes.map((dish, idx) => <DishCard dish={dish} idx={idx} />);
};
