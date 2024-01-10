// Methods!

// Apple vs PC world => PC: Motherboard | Apple: Logic Board

// Function and a method

// Function a set of operations that is independent

// Method is a function scoped to an object

const someArray = [1, 2, 3, 4, 5];

const poppedValue = someArray.pop();
// poppedValue = 5

const popTheLastValueOfAnArray = function (array) {
  const newArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }

  return array[array.length - 1];
};

popTheLastValueOfAnArray(someArray);

const bobTheBuilder = {
  name: "Bob",
  age: 42,
  powerLevel: 9001,
  occupation: "builder",
  greet: function () {
    console.log(
      `Hi! My name is ${somePerson.name}, I'm ${somePerson.age} years old and I'm a ${somePerson.occupation}`
    );
  },
};

bobTheBuilder.greet();

// const greet = function (person) {
//   console.log(
//     `Hi! My name is ${person.name}, I'm ${person.age} years old and I'm a ${person.occupation}`
//   );
// };

// greet(somePerson);
