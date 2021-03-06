// Get references to the #generate element (DOM ELEMENT)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // storing whatever is being returned from the generate password function 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate password
function generatePassword() {

  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split(""); // .split makes the strings into arrays 
  var numericChar = "0123456789".split("");
  var lowercaseChar = "abcedfghijklmnopqrstuvwyxz".split("");
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var getRandomPassword = [];
  var finalPassword = " ";


  // Character length prompt
  var charLength = prompt("How many characters would you like your password to contain?");

  // Character length validation
  if (charLength < 8 || charLength > 128) {
    prompt("Password must contain between 8 and 128 characters. Please try again.");
  } else if (isNaN(charLength)) {
    charLength = prompt("Please enter a valid number between 8 and 128 characters.");
  }

  alert("Your password will be " + charLength + " characters.");

  // Lowercase confirm prompt
  var getLowercaseChar = confirm("Do you want to include lowercase characters?");

  // Lowercase confirm validation 
  if (getLowercaseChar) {
    getRandomPassword = getRandomPassword.concat(lowercaseChar);
  }

  // Uppercase confirm prompt
  var getUppercaseChar = confirm("Do you want to include uppercase characters?");

  // Uppercase confirm validation
  if (getUppercaseChar) {
    getRandomPassword = getRandomPassword.concat(uppercaseChar);
  }

  //  Numeric numbers confirm prompt
  var getNumericChar = confirm("Do you want to include numeric characters?");

  // Numeric numbers validation
  if (getNumericChar) {
    getRandomPassword = getRandomPassword.concat(numericChar);
  }

  // Special characters confirm prompt
  var getSpecialChar = confirm("Do you want to include special characters?");

  if (getSpecialChar) {
    getRandomPassword = getRandomPassword.concat(specialChar);
  }


  // For loop to get random characters and numbers based on charLength and return final random password generated

  for (var i = 0; i < charLength; i++) {
    finalPassword += getRandomPassword[Math.floor(Math.random() * getRandomPassword.length)];
  }
  return finalPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
