// // // 1. Persinal data of users
// const usersData = [
//   {
//     name: "John",
//     age: 25,
//     surname: "Doe",
//     fatherName: "Smith",
//   },
//   {
//     name: "Jane",
//     age: 30,
//     surname: "Doe",
//     fatherName: "Sarah",
//   },
//   {
//     name: "Jack",
//     age: 28,
//     surname: "Doe",
//     fatherName: "John",
//   },
//   {
//     name: "Jill",
//     age: 32,
//     surname: "Doe",
//     fatherName: "Monica",
//   },
// ];
// let counter = 0;

// function getInitialsUser(surname, name, fatherName) {
//     counter++;
//     if(counter <= 3){
//         return surname + " " + name[0] + "." + fatherName[0] + ".";
//     }else{
//         return "Functiom is called more than 3 times"
//     } 
// }

// function displayAlertInputText(text){
//     alert(text);
// }


// usersData.forEach((user) => {
//   const userInitials = getInitialsUser(
//     user.surname,
//     user.name,
//     user.fatherName
//   );
//   console.log(userInitials + " " + user.age);
// });

// // Input data to diplay in alert
// const inputText = prompt("Enter text to display in alert");
// displayAlertInputText(inputText);

//  const usersData = [
//   {
//     name: "John",
//     age: 15,
//     surname: "Doe",
//     fatherName: "Smith",
//   },
//   {
//     name: "Jane",
//     age: 30,
//     surname: "Doe",
//     fatherName: "Sarah",
//   },
//   {
//     name: "Jack",
//     age: 28,
//     surname: "Doe",
//     fatherName: "John",
//   },
//   {
//     name: "Jill",
//     age: 32,
//     surname: "Doe",
//     fatherName: "Monica",
//   },
// ];

//  function getInitialsAge(age) {
//     if(age >= 18){
//         return true;
//     }else{
//         return false;
//     }
// }
// const variabl = getInitialsAge(18);
// usersData.forEach((user) => {
//     if(getInitialsAge(user.age)) {
//       console.log("повнолітній" + " " + user.age);
//        }else{
//         console.log("неповнолітній" + " " + user.age);
//        }
//     });

//     let counter = 0;
//     usersData.forEach(function (item) {
//   if (item[0] == user.age) {
//     console.log(item);
//     counter++;
//   }
// });


// 3.

//  let number = prompt("Введіть трьох значне число");
// if(number > 99 && number < 999){
//  if (number[0] == number[1] || number[0] == number[2] || number[1] == number[0] || number[1] == number[2] || number[2] == number[0] || number[2] == number[1]) {
//    alert("є")
//  } else {
//   alert("нема");
//  }
// }else{
//   alert("Помилка")
// }

// 4.

// let year = prompt("Введіть рік");
// if(year > 0){
//   if(year % 4 == 0 && year % 100 != 0 ){
//     alert("Високосний")
//   }else{
//     alert("Не високосний")
//   }
// }else{
//   alert("Помилка")
// }

// 5

 let years = prompt("Введіть пяти роздярне число");



