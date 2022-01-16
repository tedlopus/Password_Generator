// Assignment Code
var generateBtn = document.querySelector("#generate");

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
characters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//function for length of characters
function generatePassword() {
    var lowerCase;
    var upperCase;
    var numericCharacter;
    var specialCharacter;
    var userChoice;

    let int = prompt("How many characters would you like your password to have? (It must be at least 8 characters long and it cannot be more than 128 characters long)"); 
    
        if (int < 8 || int > 128) {
            prompt("Please enter a number between 8 and 128 for your password length.");
        } else if (int >= 8 || int <= 128) {
          lowerCase = confirm("Would you like your password to contain lowercase letters?");
          upperCase = confirm("Would you like your password to contain uppercase letters?");
          numericCharacter = confirm("Would you like your password to contain numbers?");
          specialCharacter = confirm("Would you like your password to contain special characters?");
        } else {
            generatePassword();
        };

        if (lowerCase && upperCase && numericCharacter && specialCharacter) {
            userChoice = letters.concat(numbers, characters, upperLetters);
        } else if (lowerCase && upperCase && numericCharacter && !specialCharacter) {
            userChoice = letters.concat(numbers, upperLetters);
        } else if (lowerCase && upperCase && !numericCharacter && !specialCharacter) {
            userChoice = letters.concat(upperLetters);
        } else if (lowerCase && !upperCase && !numericCharacter && !specialCharacter) {
            userChoice = letters;
        } else if (!lowerCase && upperCase && numericCharacter && specialCharacter) {
            userChoice = numbers.concat(characters, upperLetters);
        } else if (!lowerCase && !upperCase && numericCharacter && specialCharacter) {
            userChoice = numbers.concat(characters);
        } else if (!lowerCase && !upperCase && numericCharacter && !specialCharacter) {
            userChoice = numbers;
        } else if (lowerCase && upperCase && !numericCharacter && specialCharacter) {
            userChoice = characters.concat(letters, upperLetters);
        } else if (lowerCase && !upperCase && !numericCharacter && specialCharacter) {
            userChoice = characters.concat(letters);
        }  else if (!lowerCase && !upperCase && !numericCharacter && specialCharacter) {
            userChoice = characters;
        } else if (lowerCase && !upperCase && numericCharacter && specialCharacter) {
            userChoice = numbers.concat(letters, characters);
        } else if (!lowerCase && upperCase && !numericCharacter && specialCharacter) {
            userChoice = upperLetters.concat(characters);
        } else if (!lowerCase && upperCase && !numericCharacter && specialCharacter) {
            userChoice = upperLetters.concat(numbers);
        } else if (!lowerCase && upperCase && !numericCharacter && !specialCharacter) {
            userChoice = upperLetters;
        } else if (lowerCase && !upperCase && numericCharacter && !specialCharacter) {
            userChoice = letters.concat(numbers);
        };

        var criteria = [];

        for (var i = 0; i < int.length; i++) {
            var confirms = userChoice[Math.floor(Math.random() * userChoice.length)];
            criteria.push(confirms); 
        }


        return randPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);