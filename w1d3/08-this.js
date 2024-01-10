const bobTheBuilder = {
  name: "Bob",
  age: 42,
  powerLevel: 9001,
  occupation: "builder",
  greet: function () {
    console.log(
      `Hi! My name is ${this.name}, I'm ${this.age} years old and I'm a ${this.occupation}`
    );
  },
  greetArrow: () => {
    console.log(
      `Hi! My name is ${this.name}, I'm ${this.age} years old and I'm a ${this.occupation}`
    );
  },
};

bobTheBuilder.greet();
bobTheBuilder.greetArrow();

// Concept of THIS

// Arrow functions

function functionDefinition() {
  // ...
  // THIS is defined during the definition of the function
}

const functionExpression = function () {
  // ...
  // THIS is defined during the definition of the function
};

const functionExpressionButArrowStyle = () => {
  // ...
  // THIS is defined during the execution of the function
};

const singleStepArrowFunction = () => 2 + 2;
