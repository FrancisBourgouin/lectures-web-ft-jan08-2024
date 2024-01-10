// Basic object operations

const bob = new Object();
const bobBetter = {};

bobBetter.name = "Robert"; //Adding a key:value
bobBetter.name = "Roberto"; //Modifying a key:value

delete bobBetter.name; //Deleting a key:value

// All the examples above work with [] notation

// Objects are referenced, not assigned, a copy of an object will actually the same object

const obj1 = { a: 1 };
const obj2 = { a: 1 };

obj1 === obj2; // False, two different structures

// Values of an object can be ANYTHING! (as long as it's a value)
