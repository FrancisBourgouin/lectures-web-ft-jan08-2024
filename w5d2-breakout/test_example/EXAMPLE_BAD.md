# Request

Considering a function that takes in a list of items in the shape of:

```js
const cart = [
  {
    id: 1,
    name: "Potato",
    icon: "🥔",
    price: 1.99,
  },
];
```

and will output a subtotal, total, tax, amount of items in the shape of:

```js
const outputObj = {
  subtotal: 9.99,
  total: 11.48,
  taxAmount: 1.49,
  amountOfItems: 5,
};
```

Can you write the test cases

# Output

```jsx
const calculateCartTotal = require("./yourFunction"); // Import your function here

// Test Case 1: Calculate total for an empty cart
const emptyCart = [];
const emptyCartResult = calculateCartTotal(emptyCart);
console.log(emptyCartResult);
// Expected Output:
// {
//   subtotal: 0,
//   total: 0,
//   taxAmount: 0,
//   amountOfItems: 0
// }

// Test Case 2: Calculate total for a cart with one item
const cartWithOneItem = [
  {
    id: 1,
    name: "Potato",
    icon: "🥔",
    price: 1.99,
  },
];
const cartWithOneItemResult = calculateCartTotal(cartWithOneItem);
console.log(cartWithOneItemResult);
// Expected Output:
// {
//   subtotal: 1.99,
//   total: 2.29, // Assuming a tax rate of 15%
//   taxAmount: 0.30,
//   amountOfItems: 1
// }

// Test Case 3: Calculate total for a cart with multiple items
const cartWithMultipleItems = [
  {
    id: 1,
    name: "Potato",
    icon: "🥔",
    price: 1.99,
  },
  {
    id: 2,
    name: "Tomato",
    icon: "🍅",
    price: 2.49,
  },
  {
    id: 3,
    name: "Carrot",
    icon: "🥕",
    price: 0.99,
  },
];
const cartWithMultipleItemsResult = calculateCartTotal(cartWithMultipleItems);
console.log(cartWithMultipleItemsResult);
// Expected Output:
// {
//   subtotal: 5.47,
//   total: 6.28, // Assuming a tax rate of 15%
//   taxAmount: 0.81,
//   amountOfItems: 3
// }
```
