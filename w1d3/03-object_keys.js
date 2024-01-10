const mug = {
  size: 360,
  color: "white",
  material: "ceramic",
};

mug["content"] = "coffee";
mug.content = "coffee";

console.log(mug);

// Signal to Noise ratio

// mug["content"]["first"]["liquid"]["state"]["value"]["color"];

// mug.content.first.liquid.state.value.color;

// Square brackets vs dot notation

const key = "content";

// Square brackets
// Can put a variable,
// The pair will evaluate the contents of the square bracket

mug["c" + "olo" + "r"];
mug[key];

const listOfKeys = ["color", "material", "content"];

for (const key of listOfKeys) {
  console.log(mug[key]);
}

// dot notation
// Drax => Very literal person

mug.key; // Will look for a key called key in the object
