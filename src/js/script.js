let personalData = {
    name: "john",
    surName: "patric",
    lastName: "jonson",
    address: {
        city: "Dro",
        street: "ran",
        number: 11
    },
    age: [1, 3, 4]
}
console.log(personalData.name);
console.log(personalData.address.street);
console.log(personalData.age[1]);


const size = prompt("Введіть розмір");
console.log(typeof size);

personalData.size = size;
console.log(personalData);