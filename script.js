// Get references to the #generate element (DOM ELEMENT)
var generateBtn = document.querySelector("#generate");

// Arrays for Password Criteria
var specialChar = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var numericChar = ["0123456789"];
var lowercaseChar = ["abcdefghijklmnopqrstuvwxyz"];
var uppercaseChar = ["ABCDEFGHIJKLMNOPQRSTUVYWXYZ"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate password
function generatePassword() {
  
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numericChar = "0123456789"; 
  var lowercaseChar = "abcedfghijklmnopqrstuvwyxz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var 

  // Character length prompt
  var charLength = prompt("How many characters would you like your password to contain?");

  // Character length validation - do we have to assume after the first alert that they will enter the correct response in the second attempt? 
  if (charLength < 8 || charLength > 128) {
    prompt("Password must contain at least 8 characters. Please try again.");
  } else if (isNaN(charLength)) {
    charLength = prompt("Please enter a valid number.");
  } else {
      alert("Your password will be " + charLength + " characters.");
  }

  // Lowercase confirm










}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
