import IntegerListGennerator from './model';
import render from './view';

// Generate random list and check time perfomance in the console
console.time("GenerateRandom");

const integerListGenerator = new IntegerListGennerator();

console.timeEnd("GenerateRandom");

// Output result to HTML page
render(integerListGenerator);

// Output results to the browser console
const randomList = integerListGenerator.getGeneratedArray();

console.log(randomList);
