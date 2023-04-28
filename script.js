// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);



  function writePassword() {
    var prompts = getPrompts();
    var passwordText = document.querySelector("#password"); 
    if (prompts) {
      var password = generatePassword();    
      passwordText.value = password; 

    } else {
      passwordText.value = "";
    }
  }

function generatePassword() {
  var newpassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomSet = Math.floor(Math.random() * selectedCharacters.length);
    newpassword = newpassword + selectedCharacters[randomSet];
    }
    return newpassword;
}

  function getPrompts() {
    selectedCharacters = [];

    passwordLength = parseInt(prompt("How many characters do you want your password to be? (8-128 characters)"));
    
    if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Please input number value that is 8-128")
      return false;
    }
    if (confirm("Would you like to use lowercase letters in your password?")) {
      selectedCharacters = selectedCharacters.concat(lowerCase);
    }
    if (confirm("Would you like to use uppercase letters in your password?")) {
      selectedCharacters = selectedCharacters.concat(upperCase);
    }
    if (confirm("Would you like to use numbers in your password?")) {
      selectedCharacters = selectedCharacters.concat(numbers);
    }
    if (confirm("Would you like to use special characters in your password?")) {
      selectedCharacters = selectedCharacters.concat(specialCharacters);
    }
    return true;
  }
 
  


  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //var mathLowerCase = Math.floor(Math.random() * lowerCase.length);
  //var randomLowerCase = lowerCase[mathLowerCase];
  
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  //var mathUpperCase = Math.floor(Math.random() * upperCase.length);
  //var randomUpperCase = upperCase[mathUpperCase];
  
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  //var mathNumbers = Math.floor(Math.random() * numbers.length);
  //var randomNumbers = numbers[mathNumbers];
  
  var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~", "\"", "\\", "\[", "\]", "\,"];
  //var mathSpecialCharacters = Math.floor(Math.random() * specialCharacters.length);
  //var randomSpecialCharacters = specialCharacters[mathSpecialCharacters];
  
  //var randomPassword = [randomLowerCase, randomUpperCase, randomNumbers, randomSpecialCharacters]
  //var mathPassword = Math.floor(Math.random() * randomPassword.length);
  //var singlePasswordItem = randomPassword[mathPassword];
  
  var selectedCharacters = [];



/*
// Write password to the #password input
function createPassword() {
passwordLength, lowerCase, upperCase, numbers, specialCharacters
}

function writePassword() {
  var password = generatePassword();     //need to create and define generatePassword function
  var passwordText = document.querySelector("#password");  //where the generated password will be displayed, the card body

  passwordText.value = password;     // displays password on to screen, in card-body

}
var passwordLength = [];
  for (var i = 8; i <= 128; i++) {
    passwordLength.push(i)
  };

generateBtn.addEventListener("click", writePassword);
*/