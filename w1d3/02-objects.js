// Why objects?

// Being more descriptive, better organized, less variables

const mugSize = 360;
const mugColor = "white";
const mugMaterial = "ceramic";

const mug = {
  size: 360,
  color: "white",
  material: "ceramic",
};

// Solves an issue with declaring things programmatically

// const someList = {};

// for (let i = 0; i < 10; i++) {
//   someList[Math.random()] = Math.random();
// }

// console.log(someList);

console.log(mug.size);

mug["content"] = "coffee";
mug.content = "coffee";

console.log(mug);
