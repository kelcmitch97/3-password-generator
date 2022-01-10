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

  // Lowercase confirm prompt
  lowercaseChar = confirm("Do you want to include lowercase characters?");

  // Lowercase confirm validation - Do i need this? 
  if (lowercaseChar) {
    alert("Your password will have lowercase characters.");
  } 

   // Uppercase confirm prompt
   uppercaseChar = confirm("Do you want to include uppercase characters?");

   // Uppercase confirm validation
   if (uppercaseChar) {
     alert("Your password will have uppercase characters.");
   } 

  //  Numeric numbers confirm prompt
  numericChar = confirm("Do you want to include numeric characters?");

  // Numeric numbers validation
  if (numericChar) {
    alert("Your password will have numeric characters.");
  }

  // Special characters confirm prompt
  specialChar = confirm("Do you want to include special characters?");

  if (specialChar) {
    alert("Your password will have special characters.")
  }

  // For loop to get random characters and numbers based on charLength 
    var getRandomLowercase = "";

    for (var i = 0; i < charLength; i++) {
      getRandomLowercase += lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
    }
   console.log(getRandomLowercase);
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
