const assert = require("assert");

function capitalizeFirstLetters(input) {
  let splitFirst = input.split(" ");
  for (let i = 0; i < splitFirst.length; i++) {
    splitFirst[i] =
      splitFirst[i].charAt(0).toUpperCase() + splitFirst[i].substring(1);
  }
  return splitFirst.join(" ");
}
console.log(capitalizeFirstLetters("i am learning TDD"));

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(""), "");
// Check that it works for an several string
assert.strictEqual(capitalizeFirstLetters("several words"), "Several Words");

//add comments
