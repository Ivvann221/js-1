// // 1. Persinal data of users
const usersData = [
  {
    name: "John",
    age: 25,
    surname: "Doe",
    fatherName: "Smith",
  },
  {
    name: "Jane",
    age: 30,
    surname: "Doe",
    fatherName: "Sarah",
  },
  {
    name: "Jack",
    age: 28,
    surname: "Doe",
    fatherName: "John",
  },
  {
    name: "Jill",
    age: 32,
    surname: "Doe",
    fatherName: "Monica",
  },
];
let counter = 0;

function getInitialsUser(surname, name, fatherName) {
    counter++;
    if(counter <= 3){
        return surname + " " + name[0] + "." + fatherName[0] + ".";
    }else{
        return "Functiom is called more than 3 times"
    } 
}

function displayAlertInputText(text){
    alert(text);
}


usersData.forEach((user) => {
  const userInitials = getInitialsUser(
    user.surname,
    user.name,
    user.fatherName
  );
  console.log(userInitials + " " + user.age);
});

// Input data to diplay in alert
const inputText = prompt("Enter text to display in alert");
displayAlertInputText(inputText);