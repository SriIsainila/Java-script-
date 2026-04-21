const firstName = 'Alex';
const lastName = 'Smith';
const country = 'Sri Lanka';
const city = 'Colombo';
const age = 28;
const isMarried = false;
const year = 2026;

console.log(typeof '10' === typeof 10); // false (string vs number)
console.log(parseInt('9.8') === 10);    // false (9 === 10)

const t1 = Boolean("Hello");
const t2 = Boolean(5);
const t3 = Boolean([]);
const f1 = Boolean(0);
const f2 = Boolean("");
const f3 = Boolean(null);

console.log(4 > 3);     // true
console.log(4 >= 3);    // true
console.log(4 < 3);     // false
console.log(4 <= 3);    // false
console.log(4 == 4);    // true
console.log(4 === 4);   // true
console.log(4 != 4);    // false
console.log(4 !== 4);   // false
console.log(4 != '4');  // false
console.log(4 == '4');  // true
console.log(4 === '4'); // false

const lenPy = "python".length; // 6
const lenJar = "jargon".length; // 6
console.log(lenPy !== lenJar); // false (falsy comparison)

console.log(4 > 3 && 10 < 12);   // true
console.log(4 > 3 && 10 > 12);   // false
console.log(4 > 3 || 10 < 12);   // true
console.log(4 > 3 || 10 > 12);   // true
console.log(!(4 > 3));           // false
console.log(!(4 < 3));           // true
console.log(!(false));           // true
console.log(!(4 > 3 && 10 < 12));// false
console.log(!(4 > 3 && 10 > 12));// true
console.log(!(4 === '4'));       // true

console.log(!("dragon".includes('on') && "python".includes('on'))); // false (because both HAVE 'on')

const now = new Date();
console.log(now.getFullYear());      // Year
console.log(now.getMonth() + 1);    // Month (0-11, so +1)
console.log(now.getDate());         // Date
console.log(now.getDay());          // Day of week
console.log(now.getHours());        // Hours
console.log(now.getMinutes());      // Minutes
console.log(Math.floor(Date.now() / 1000)); // Seconds since 1970

const base = prompt('Enter base:');
const height = prompt('Enter height:');
const area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

const sideA = prompt('Enter side a:');
const sideB = prompt('Enter side b:');
const sideC = prompt('Enter side c:');
const perimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`The perimeter of the triangle is ${perimeter}`);

// 1. Rectangle Area and Perimeter
const length = Number(prompt('Enter length:'));
const width = Number(prompt('Enter width:'));
const rectArea = length * width;
const rectPerimeter = 2 * (length + width);
console.log(`Area: ${rectArea}, Perimeter: ${rectPerimeter}`);

// 2. Circle Area and Circumference
const radius = Number(prompt('Enter radius:'));
const PI = 3.14;
const circArea = PI * radius * radius;
const circumference = 2 * PI * radius;
console.log(`Circle Area: ${circArea}, Circumference: ${circumference}`);

// 3. Slope, x-intercept and y-intercept of y = 2x - 2
// Equation form: y = mx + c
const slope1 = 2;
const yIntercept = -2; // when x = 0
const xIntercept = 1;  // when y = 0 -> 0 = 2x - 2 -> 2 = 2x -> x = 1
console.log(`Equation: y=2x-2 -> Slope: ${slope1}, X-intercept: ${xIntercept}, Y-intercept: ${yIntercept}`);

// 4. Slope between point (2, 2) and (6, 10)
const x1 = 2, y1 = 2, x2 = 6, y2 = 10;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(`Slope between points: ${slope2}`);
console.log(`Are the slopes equal? ${slope1 === slope2}`);


const calculateY = (x) => x**2 + 6*x + 9;
console.log(`At x = -3, y is: ${calculateY(-3)}`); 
console.log(`At x = 0, y is: ${calculateY(0)}`);
console.log(`At x = 2, y is: ${calculateY(2)}`);

// 1. Check if name is long or short
const myName = 'Asiri';
if (myName.length > 7) {
    console.log('Your name is long');
} else {
    console.log('Your name is short');
}

// 2. Compare first name and family name length
let firstName = 'kamal';
let lastName = 'ranvir';

if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else if (firstName.length < lastName.length) {
    console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);
} else {
    console.log(`Your first name, ${firstName} and family name, ${lastName} are the same length`);
}

let myAge = 250;
let yourAge = 200;

let ageDifference = myAge - yourAge;

console.log(`I am ${ageDifference} years older than you.`);

const birthYear = prompt('Enter birth year:');
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive`);
} else {
    const waitYears = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${waitYears} years.`);
}
let a = 4;
let b = 3;

// Method 1: Using if else
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

// Method 2: Using ternary operator
let result = a > b 
    ? `${a} is greater than ${b}` 
    : `${a} is less than ${b}`;

console.log(result);

const number = prompt('Enter a number:');

// Use the remainder operator (%) to check if divisible by 2
if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}


// 1. Grading Students
let score = prompt('Enter student score:');
score = Number(score);

if (score >= 80 && score <= 100) {
    console.log('Grade: A');
} else if (score >= 70 && score < 80) {
    console.log('Grade: B');
} else if (score >= 60 && score < 70) {
    console.log('Grade: C');
} else if (score >= 50 && score < 60) {
    console.log('Grade: D');
} else if (score >= 0 && score < 50) {
    console.log('Grade: F');
} else {
    console.log('Invalid score');
}

// 2. Checking Seasons
let monthInput = prompt('Enter month:').toLowerCase();

switch (monthInput) {
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn');
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer');
        break;
    default:
        console.log('Invalid month');
}

// 3. Weekend vs Working Day
let dayInput = prompt('What is the day today?');
// Standardize input (e.g., "saturDaY" -> "Saturday")
let day = dayInput.charAt(0).toUpperCase() + dayInput.slice(1).toLowerCase();

if (day === 'Saturday' || day === 'Sunday') {
    console.log(`${day} is a weekend.`);
} else if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(day)) {
    console.log(`${day} is a working day.`);
} else {
    console.log('Invalid day input.');
}


let monthInput = prompt('Enter a month:');

// Standardize input to Capitalized case (e.g., "FEbruary" -> "February")
let month = monthInput.charAt(0).toUpperCase() + monthInput.slice(1).toLowerCase();

switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month} has 31 days.`);
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${month} has 30 days.`);
        break;
    case 'February':
        console.log(`${month} has 28 days.`);
        break;
    default:
        console.log('Invalid month entered.');
}
