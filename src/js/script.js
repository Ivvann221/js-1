const ageOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const ageTwo = [11, 12, 13, 14, 15, 16, 17];

// const age = ageOne.concat(ageTwo); // склєювання даних

const age = [...ageOne, ...ageTwo]

console.log(age)
