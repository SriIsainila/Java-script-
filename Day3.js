// 1. Array Declarations
const emptyArray = [];
const numbers = [10, 20, 30, 40, 50, 60];
console.log('Length of numbers array:', numbers.length);

// 2. Get first, middle, and last item
const firstItem = numbers[0];
const middleItem = numbers[Math.floor(numbers.length / 2)];
const lastItem = numbers[numbers.length - 1];
console.log(firstItem, middleItem, lastItem);

// 3. Mixed data types
const mixedDataTypes = ['Alex', 25, true, { country: 'SL' }, [1, 2], null];
console.log('Mixed array length:', mixedDataTypes.length);

// 4. itCompanies Operations
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies); // Print array
console.log('Number of companies:', itCompanies.length); // Print count

// First, middle, last companies
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);

// Print each company
itCompanies.forEach(company => console.log(company));

// Uppercase and print
itCompanies.forEach(company => console.log(company.toUpperCase()));

// Sentence format
console.log(`${itCompanies.slice(0, -1).join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

// Check existence
let companyToCheck = 'Google';
console.log(itCompanies.includes(companyToCheck) ? companyToCheck : 'Company not found');

// Filter companies with more than one 'o' (without .filter())
const filteredCompanies = [];
for (const company of itCompanies) {
    let count = 0;
    for (const char of company.toLowerCase()) {
        if (char === 'o') count++;
    }
    if (count > 1) filteredCompanies.push(company);
}
console.log('Companies with more than one "o":', filteredCompanies);

// Sorting and Reversing
console.log('Sorted:', [...itCompanies].sort());
console.log('Reversed:', [...itCompanies].reverse());

// Slicing
console.log('First 3:', itCompanies.slice(0, 3));
console.log('Last 3:', itCompanies.slice(-3));
console.log('Middle:', itCompanies.slice(3, 4));

// Removing (Manipulating the original array)
itCompanies.shift(); // Remove first
itCompanies.splice(Math.floor(itCompanies.length / 2), 1); // Remove middle
itCompanies.pop(); // Remove last
console.log('After removals:', itCompanies);

itCompanies.length = 0; // Remove all
console.log('Empty itCompanies:', itCompanies);


export const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];
export const webTechs = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
];
import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

console.log(countries);
console.log(webTechs);


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Remove punctuation using Regex and split by space
const words = text.replace(/[.,]/g, '').split(' ');

console.log(words);
console.log(words.length); // 13


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add Meat at beginning
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add Sugar at end
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove Honey (assuming allergy)
const allergicToHoney = true;
if (allergicToHoney) {
    const honeyIndex = shoppingCart.indexOf('Honey');
    if (honeyIndex !== -1) shoppingCart.splice(honeyIndex, 1);
}

// Modify Tea to Green Tea
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);


// Ethiopia Check
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

// Sass Check
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1. Sort and find min/max
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Sorted Ages: ${ages}`);
console.log(`Min: ${minAge}, Max: ${maxAge}`);

// 2. Find median age
let median;
const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    median = (ages[mid - 1] + ages[mid]) / 2;
} else {
    median = ages[mid];
}
console.log(`Median: ${median}`);

// 3. Find average age
const sum = ages.reduce((acc, curr) => acc + curr, 0);
const average = sum / ages.length;
console.log(`Average: ${average}`);

// 4. Find range
const range = maxAge - minAge;
console.log(`Range: ${range}`);

// 5. Compare (min - average) and (max - average) using abs()
const diffMin = Math.abs(minAge - average);
const diffMax = Math.abs(maxAge - average);
console.log(`Abs diff (min - avg): ${diffMin}`);
console.log(`Abs diff (max - avg): ${diffMax}`);
console.log(`Are they equal? ${diffMin === diffMax}`);

// 6. Slice first ten countries (assuming the countries array from previous context)
const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];
const firstTen = countries.slice(0, 10);
console.log('First ten countries:', firstTen);



const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

// 1. Find the middle country(ies)
const len = countries.length;
const midIndex = Math.floor(len / 2);
let middleCountries;

if (len % 2 === 0) {
    // If even, get two middle items
    middleCountries = [countries[midIndex - 1], countries[midIndex]];
} else {
    // If odd, get one middle item
    middleCountries = [countries[midIndex]];
}
console.log('Middle country(ies):', middleCountries);

// 2. Divide the array into two halves
let firstHalf, secondHalf;

if (len % 2 === 0) {
    firstHalf = countries.slice(0, midIndex);
    secondHalf = countries.slice(midIndex);
} else {
    // One more country for the first half if odd
    firstHalf = countries.slice(0, midIndex + 1);
    secondHalf = countries.slice(midIndex + 1);
}

console.log('First Half:', firstHalf);
console.log('Second Half:', secondHalf);


// 1. Iterate 0 to 10
console.log('--- 0 to 10 ---');

// For loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// While loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// Do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 10);


// 2. Iterate 10 to 0
console.log('--- 10 to 0 ---');

// For loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// While loop
let k = 10;
while (k >= 0) {
    console.log(k);
    k--;
}

// Do while loop
let l = 10;
do {
    console.log(l);
    l--;
} while (l >= 0);


// 3. Iterate 0 to n
console.log('--- 0 to n ---');
let n = 5; // Example value for n
for (let i = 0; i <= n; i++) {
    console.log(i);
}


// 1. Hash Pattern
for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
}

// 2. Multiplication Pattern
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// 3. Exponentiation Table (i, i^2, i^3)
console.log('i    i^2   i^3');
for (let i = 0; i <= 10; i++) {
    console.log(`${i}    ${i ** 2}     ${i ** 3}`);
}

// 4. Even Numbers 0 to 100
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

// 5. Odd Numbers 0 to 100
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// 6. Prime Numbers 0 to 100
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(i);
}

// 7. Sum of all numbers
let totalSum = 0;
for (let i = 0; i <= 100; i++) {
    totalSum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${totalSum}.`);

// 8. Sum of Evens and Odds
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) sumEvens += i;
    else sumOdds += i;
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);

// 9. Sums as an Array
console.log([sumEvens, sumOdds]);

// 10. Array of 5 random numbers
const randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 100));
}
console.log(randomArr);

// 11. Array of 5 unique random numbers
const uniqueRandomArr = [];
while (uniqueRandomArr.length < 5) {
    let r = Math.floor(Math.random() * 100);
    if (!uniqueRandomArr.includes(r)) uniqueRandomArr.push(r);
}
console.log(uniqueRandomArr);

// 12. Six characters random ID
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 6; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(randomId);




const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// 1. Random ID of any length
const generateId = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < len; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
};
console.log(generateId(12));

// 2. Random Hex Color
const randomHex = () => `#${Math.random().toString(16).slice(2, 8)}`;
console.log(randomHex());

// 3. Random RGB Color
const randomRgb = () => {
  const r = Math.floor(Math.random() * 256), g = Math.floor(Math.random() * 256), b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
console.log(randomRgb());

// 4. Uppercase Countries
const upperCountries = countries.map(c => c.toUpperCase());
console.log(upperCountries);

// 5. Countries Length Array
const countriesLen = countries.map(c => c.length);
console.log(countriesLen);

// 6. Array of Arrays (Name, Code, Length)
const countriesData = countries.map(c => [c, c.slice(0, 3).toUpperCase(), c.length]);
console.log(countriesData);

// 7. Filter countries with 'land'
const landCountries = countries.filter(c => c.includes('land'));
console.log(landCountries.length > 0 ? landCountries : 'All these countries are without land');

// 8. Filter countries ending with 'ia'
const iaCountries = countries.filter(c => c.endsWith('ia'));
console.log(iaCountries.length > 0 ? iaCountries : 'These are countries ends without ia');

// 9. Country with biggest number of characters
const longestCountry = countries.reduce((a, b) => a.length > b.length ? a : b);
console.log(longestCountry);

// 10. Countries with exactly 5 characters
const fiveCharCountries = countries.filter(c => c.length === 5);
console.log(fiveCharCountries);

// 11. Longest word in webTechs
const longestWebTech = webTechs.reduce((a, b) => a.length > b.length ? a : b);
console.log(longestWebTech);

// 12. WebTechs array of arrays
const webTechsData = webTechs.map(tech => [tech, tech.length]);
console.log(webTechsData);

// 13. MERN Acronym
const mernAcronym = mernStack.map(s => s[0]).join('');
console.log(mernAcronym);

// 14. Iterate through array
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const tech of techs) console.log(tech);

// 15. Reverse fruits without .reverse()
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) reversedFruits.push(fruits[i]);
console.log(reversedFruits);

// 16. Print all elements of nested array
const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']];
for (const stack of fullStack) {
  for (const tech of stack) console.log(tech.toUpperCase());
}
