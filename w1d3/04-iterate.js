// Iterating with object

const potato = {
  name: "Potator",
  nickName: "Pequeno Pollo",
  type: "Russett",
  size: "8lbs",
};

// By default, we want to access specific keys of an object

// 1. For..in (For the keys in an object) (For the values of an array)
// Don't trust the order

for (const key in potato) {
  console.log(key);
  console.log(potato[key]);
  console.log(potato.key); // will return undefined because key doesn't exist
}

// 2. Convert the object first!

// 2a. Object.values

const listOfValuesFromObject = Object.values(potato);

for (const value of listOfValuesFromObject) {
  console.log(value);
}

// 2b. Object.keys

const listOfKeysFromObject = Object.keys(potato);

for (const key of listOfKeysFromObject) {
  console.log(key);
}

// 2c. Object.entries

const listOfEntriesFromObject = Object.entries(potato);

for (const entry of listOfEntriesFromObject) {
  console.log(entry);
}
