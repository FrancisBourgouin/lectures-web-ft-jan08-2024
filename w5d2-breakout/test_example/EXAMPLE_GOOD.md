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

Can you write the test cases covering the following points using mocha and chai, using the expect syntax:

- Invalid (negative, string) price in one of the items (NEEDS TO BE A NUMBER)
- Throw an error if there is no cart, or no tax percentage
- Throw an error if the cart is empty
- When we have a cart with items, and a taxpercentage

# Output

```jsx
const { expect } = require("chai");
const calculateCartTotal = require("./your-cart-total-function"); // Import your cart total function here

describe("calculateCartTotal", () => {
  it("should throw an error if price is invalid (not a number)", () => {
    const cartWithInvalidPrice = [
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
        price: "invalid", // Invalid price (not a number)
      },
    ];

    expect(() => calculateCartTotal(cartWithInvalidPrice, 0.1)).to.throw(
      "Price must be a number"
    );
  });

  it("should throw an error if cart is empty", () => {
    const emptyCart = [];

    expect(() => calculateCartTotal(emptyCart, 0.1)).to.throw("Cart is empty");
  });

  it("should throw an error if no tax percentage is provided", () => {
    const cart = [
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
        price: 1.99,
      },
    ];

    expect(() => calculateCartTotal(cart, undefined)).to.throw(
      "Tax percentage is required"
    );
  });

  it("should calculate subtotal, total, tax amount, and amount of items correctly", () => {
    const cart = [
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
        price: 1.99,
      },
      {
        id: 2,
        name: "Carrot",
        icon: "🥕",
        price: 2.49,
      },
      {
        id: 3,
        name: "Broccoli",
        icon: "🥦",
        price: 3.99,
      },
    ];

    const taxPercentage = 0.1; // 10% tax

    const result = calculateCartTotal(cart, taxPercentage);

    expect(result).to.deep.equal({
      subtotal: 8.47, // 1.99 + 2.49 + 3.99
      total: 9.32, // Subtotal + (Subtotal * Tax Percentage)
      taxAmount: 0.85, // Subtotal * Tax Percentage
      amountOfItems: 3, // Number of items in the cart
    });
  });
});
```
