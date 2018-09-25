const SEPARATOR = '---';

export const getMealId = (mealName, idx) => mealName + SEPARATOR + idx;
export const getMealNameAndId = mealId => mealId.split(SEPARATOR);

export const hashCode = s => {
  return s.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

export const equalHashes = obj => {
  if (!obj || !obj.id || !obj.name) return null;
  return hashCode(obj.name) === obj.id;
};
