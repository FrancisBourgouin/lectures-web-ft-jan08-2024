// Async JS

// Callbacks
// Promises & Async / Await

// client
//   .connect()
//   .catch((err) => console.log(err))
//   .then(() => {
//     client.query("...");
//   })
//   .catch((err) => console.log(err))
//   .finally(() => {
//     client.close();
//   });

// const actions = async function () {
//   let result;
//   try {
//     await client.connect();

//     result = await client.query("...");
//   } catch (err) {
//     console.log(err);
//   }
//   client.close();

//   return result;
// };

// actions();

// const sumOfTwoNumbers = (a, b) => a + b;

// const fancySumOfTwoNumbers = async (a, b) => {
//   return "Your result is: ", a + b;
// };

// const result = fancySumOfTwoNumbers(5, 5) + fancySumOfTwoNumbers(5, 5);

// console.log(result);
