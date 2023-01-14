// alert('Ostap');

// console.log('Ostap');

// let name = "ostap";
// let surname = "doe";
// let middleName = 'patric';

// Array
// let age = [12, 13, 22, 17]
// alert(surname[1])

// const personalData = surname + ' ' + name[0] + '.' + ' ' + middleName[0] + '.';
// console.log(personalData);

// let num1 = 2;
// let num2 = 3;

// const result = num1 == num2;
// console.log('result', result);

// let arraySome = ['test', 13, true, 12.56];
// arraySome.push('test2') - додає в кінець
//  arraySome.unshift('test2'); - добавляє в початок
// arraySome.pop('test2'); - забирає ост елемент
// const position = arraySome.indexOf(13); - шукає індекс елемента

// console.log('Lenght', arraySome.length); - довжина масива

// let arraySome = ['test', 13, true, 12.56]; 
//  const position = arraySome.indexOf(13); -шукає елемент
//  arraySome.splice(position, 1); -видаляє елемент
//  console.log('Lenght', arraySome);


let arraySome = [2, 13, 3, 12.56]; 
 const position = arraySome.indexOf(13);
 arraySome.splice(position, 1);
 console.log('Lenght', arraySome);

 if (position >= 0){
  console.log(`Число ${13}`);
 }else{
  console.log(`Число ${13} dfg` );
 }