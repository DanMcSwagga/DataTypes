'use strict';

const countTypesInArray = data => {
  const types = {};
  for (const item of data) {
    Object.keys(types).includes(typeof item) ?
      types[typeof item]++ :
      (types[typeof item] = 1);
  }
  return types;
};

module.exports = { countTypesInArray };
