// // let personalData = {
// //     name: "john",
// //     surName: "patric",
// //     lastName: "jonson",
// //     address: {
// //         city: "Dro",
// //         street: "ran",
// //         number: 11
// //     },
// //     age: [1, 3, 4]
// // }
// // console.log(personalData.name);
// // console.log(personalData.address.street);
// // console.log(personalData.age[1]);


// // const age = Number (prompt("Введіть розмір"));
// // console.log(typeof age);

// // // personalData.size = size;
// // // console.log(personalData);


// // if (age >= 0){
// //  if ( age < 18){
// //     console.log("nepovnolitni")
// //  }else if (age >= 18 && age < 21){
// //     console.log("nopovnolitni v ukr")
// //  }else{
// //     console.log("nopovnolitni vs")
// //  }
// // }else{
// //    console.log("nevirno") 
// // }


// const a = prompt("Vvedit");

// if (a > 1 && a < 5) {
//     console.log('Success')
// } else {
//     console.log('Fail')
// }

// if (a > 1 || a < 5) {
//     console.log('Success')
// } else {
//     console.log('Fail')
// }
const secretNumber = 4;
const a = prompt("Vvedit");
while (a != secretNumber ){
    a = readLine(4)
}
if (secretNumber > a) {
    console.log('Мало')
} else if (a > secretNumber) {
    console.log('Багато')
}else{
    console.log('Вгадав')
}