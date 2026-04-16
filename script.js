// 1. Declare a variable
let challenge = 'learn Javascript';

// 2. Print the string
console.log(challenge);

// 3. Print the length
console.log(challenge.length);

// 4. Convert to uppercase
console.log(challenge.toUpperCase());

// 5. Convert to lowercase
console.log(challenge.toLowerCase());

// 6. Slice out the first word
console.log(challenge.substr(0, 5)); // 'learn'
// OR
console.log(challenge.substring(0, 5));

// 7. Slice out "Days Of JavaScript" (modify string first)
let newStr = '30 Days Of JavaScript';
console.log(newStr.substring(3)); // "Days Of JavaScript"

// 8. Check if contains "Script"
console.log(challenge.includes('Script'));

// 9. Split into array
console.log(challenge.split());

// 10. Split at space
console.log(challenge.split(' '));

// 11. Split companies string
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12. Replace string
console.log(challenge.replace('Javascript', 'Python'));

// 13. Character at index 15
console.log(challenge.charAt(15));

// 14. Character code of 'J'
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// 15. First occurrence of 'a'
console.log(challenge.indexOf('a'));

// 16. Last occurrence of 'a'
console.log(challenge.lastIndexOf('a'));

// 17. First "because"
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 18. Last "because"
console.log(sentence.lastIndexOf('because'));

// 19. Search "because"
console.log(sentence.search('because'));

// 20. Trim whitespace
let spaced = ' learn Javascript ';
console.log(spaced.trim());

// 21. startsWith
console.log(challenge.startsWith('learn'));

// 22. endsWith
console.log(challenge.endsWith('Javascript'));

// 23. Match all 'a'
console.log(challenge.match(/a/g));

// 24. Concat strings
console.log('30 Days of'.concat(' JavaScript'));

// 25. Repeat string
console.log(challenge.repeat(2));