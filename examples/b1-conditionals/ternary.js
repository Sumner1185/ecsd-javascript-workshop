// Short hand for simple if else statements
// A common use in JavaScript is for null or undefined checks
const defaultCost = 2.14;
const itemCost = 3.85;
const undefinedCost = undefined;

console.log(`Your item will cost; £${itemCost ? itemCost : defaultCost}`);
console.log(`Your next item will cost; £${undefinedCost ? undefinedCost : defaultCost}`);
