// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let arrayPasswordInput  = []; //This will be the array that is generated based upon the selections of the prompts by the user
let userNumberInput;


// This function prompts the user to enter a password length from 10-64 and it will repeat if the user not meet this condition, once the met the value is stored in a variable that is accessible by the getPasswordOptions function.
function userPasswordLength () {
  let lengthOfPassword = prompt('Enter the number of characters you would like your pasword (e.g 10)');
  lengthOfPassword = parseInt(lengthOfPassword);
  if (lengthOfPassword < 9 || lengthOfPassword > 64) {
    alert('Please enter a number between 10-64 only');
    userPasswordLength();
  }
  else {
    userNumberInput = lengthOfPassword
    return lengthOfPassword;
  }
}

// Function to prompt user for password options and if conditions are met then the corresponding array in concatenated into the arrayPasswordInput
function getPasswordOptions() {
  userPasswordLength();
  let specialPrompt = prompt('Do you want special characters? cancel(NO) ok(YES)');
  if (specialPrompt === 'Yes' || specialPrompt === '') {
    arrayPasswordInput = arrayPasswordInput.concat(specialCharacters)
  }
  let numericPrompt = prompt('Do you want numbers? cancel(NO) ok(YES)');
  if (numericPrompt === 'Yes' || numericPrompt === '') {
    arrayPasswordInput = arrayPasswordInput.concat(numericCharacters)
  }
  let lowerCasePrompt = prompt('Do you want lowercase letters? cancel(NO) ok(YES)');
  if (lowerCasePrompt === 'Yes' || lowerCasePrompt === '') {
    arrayPasswordInput = arrayPasswordInput.concat(lowerCasedCharacters)
  }
  let upperCasePrompt = prompt('Do you want uppercase letters? cancel(NO) ok(YES)');
  if (upperCasePrompt === 'Yes' || upperCasePrompt === '') {
    arrayPasswordInput = arrayPasswordInput.concat(upperCasedCharacters)
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


getPasswordOptions();
console.log(arrayPasswordInput);


// Function for getting a random element from an array
let newPasswordString = '';
// let randomIndex = Math.floor(Math.random() * arrayPasswordInput.length);
// console.log(randomIndex);

function getRandom(arr) {
  for(let arr = 0; arr<userNumberInput; arr++) {
    let randomIndex = Math.floor(Math.random() * arrayPasswordInput.length);
    newPasswordString += arrayPasswordInput[randomIndex];
    console.log(randomIndex);

  }
  let passwordText = document.querySelector('#password');
  passwordText.value = newPasswordString;
}



 // this generates a random special character
  // let randomSpecialCharacter = Math.floor(Math.random() * specialCharacters.length);

  // console.log(specialCharacters[randomSpecialCharacter]);
getRandom();

// Function to generate password with user input
function generatePassword(randompw) {
  console.log(randompw)
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//Pseudo code //

//Generate the password
  //There are 4 arrays which I need to loop through and take one  random value from each to create a password as a start//
  //When I loop through each array, I will need to store each value in 4 variables or 1 variable as a string? //
  //The prompt input from the user will determine the length of the loop? as well as which array I use to make the character//
  //The users character length would I use a loop to execute it e.g 10 times then conditionals to take a value from each array?



              //Pseudo code //
  

//Click 'Generate Password' button//
    
    //This will then execute the getPasswordOptions, this function will be a series of prompts to validate the password criteria//

    //Store the prompt value into variables to be used in the getRandom function//

    //In the getRandom function we will loop through the four arrays.

    //Before we create the password we will need to check each prompt.//
    //First prompt we will check if the input is <= 10), if it isn't send another prompt asking for the numbers that meet the criteria.

    // whether a value is null (No) or 'NO' string is entered if it is we can skip this that array from the loop?//

    //If there is a value '' (OK) or 'Yes' string is entered we will use that array as part of the loop to create the password. 

//getRandom function//

    //This function will take the values from the getPasswordOptions and then validate each prompt. 

      //Run the loop based on the number that the user has entered in the lengthOfPassword prompt, pwLength.length? 
      //include the relevant array in the loop based on the getPasswordOptions. 
      //Run the loop and put the values into one variable each loop?
      //This variable can then used as the passwordText.value?

    // concat all the selected arrays and then loop based on the number of arrays that meet the conditions. 












    // randompw += randomSpecialCharacter;

    // // this generates a random numeric character
    // let randomNumericCharacters = Math.floor(Math.random() * numericCharacters.length);
  
    // randompw += randomNumericCharacters;
  
    
    // // this generates a random lowercase character
    // let randomLowerCasedCharacters = Math.floor(Math.random() * lowerCasedCharacters.length);
  
    // randompw += randomLowerCasedCharacters;
  
    // // this generates a random uppercase character
    // let randomUpperCasedCharacters = Math.floor(Math.random() * upperCasedCharacters.length);
  
    // randompw += randomUpperCasedCharacters;
    // return console.log(randompw);


