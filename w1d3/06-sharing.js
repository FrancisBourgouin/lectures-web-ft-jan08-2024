let number = 1;
let anotherNumber = number;

number = 9001;

console.log(number, anotherNumber);

// 1,1
// 9001,1
// 9001, 9001 3 maybes
// WTH 2

// Primitives (String / Number / Boolean / ...) are assigned to a variable

const obj = { a: 1, b: 2 };
const otherObj = obj;

obj.a = 5;

console.log(obj, otherObj);

const otherObjButForRealzThisTime = {};

for (const key in obj) {
  otherObjButForRealzThisTime[key] = obj[key];
}

const coolWayToCopyObjKeys = { ...obj }; // Spreading the obj

// {a:5,b2} {a:1,b:2} 2
// {a:5,b2} {a:5,b:2} 2
