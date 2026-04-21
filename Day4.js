function fullName() {
  console.log("Isainila");
}

fullName();


function fullName(firstName, lastName) {
  return `${Srikumaran} ${Isainila}`;
}

function addNumbers(num1, num2) {
  return num1 + num2;
}


function addNumbers(a, b) {
  return a + b;
}

function areaOfRectangle(length, width) {
  return length * width;
}

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

function areaOfCircle(r) {
  return Math.PI * r * r;
}

function circumOfCircle(r) {
  return 2 * Math.PI * r;
}

function density(mass, volume) {
  return mass / volume;
}

function speed(distance, time) {
  return distance / time;
}

function weight(mass, gravity = 9.8) {
  return mass * gravity;
}

function convertCelsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

function bmi(weight, height) {
  let value = weight / (height * height);

  if (value < 18.5) return "Underweight";
  else if (value <= 24.9) return "Normal";
  else if (value <= 29.9) return "Overweight";
  else return "Obese";
}

function checkSeason(month) {
  month = month.toLowerCase();

  if (["september","october","november"].includes(month)) return "Autumn";
  if (["december","january","february"].includes(month)) return "Winter";
  if (["march","april","may"].includes(month)) return "Spring";
  return "Summer";
}

function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

function solveLinEquation(a, b, c, x, y) {
  return a * x + b * y + c;
}

function solveQuadratic(a = 0, b = 0, c = 0) {
  let d = b*b - 4*a*c;

  if (d < 0) return "No real roots";
  if (d === 0) return [-b / (2*a)];

  let x1 = (-b + Math.sqrt(d)) / (2*a);
  let x2 = (-b - Math.sqrt(d)) / (2*a);

  return [x1, x2];
}

function printArray(arr) {
  for (let item of arr) {
    console.log(item);
  }
}

function showDateTime() {
  let now = new Date();

  let day = String(now.getDate()).padStart(2, '0');
  let month = String(now.getMonth()+1).padStart(2, '0');
  let year = now.getFullYear();

  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');

  console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}

function swapValues(x, y) {
  return [y, x];
}

function reverseArray(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

function capitalizeArray(arr) {
  return arr.map(item => item.toUpperCase());
}

let data = [];

function addItem(item) {
  data.push(item);
  return data;
}

function removeItem(index) {
  data.splice(index, 1);
  return data;
}

function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  return sum;
}

function sumOfOdds(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) sum += i;
  }
  return sum;
}

function sumOfEven(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

function evensAndOdds(n) {
  let even = 0, odd = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) even++;
    else odd++;
  }

  console.log(`Odds: ${odd}, Evens: ${even}`);
}

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

function randomHexaNumberGenerator() {
  let chars = "0123456789abcdef";
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }

  return hex;
}

function userIdGenerator() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < 7; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
}

function rgbColorGenerator() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function isUnique(arr) {
  return new Set(arr).size === arr.length;
}

function sameType(arr) {
  return arr.every(item => typeof item === typeof arr[0]);
}   
