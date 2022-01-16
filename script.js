// Assignment Code
//Assigns generate id from html to variable generateBtn
var generateBtn = document.querySelector("#generate");

//Global variables that are arrays for the criteria that can be included in the random password
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//Function that generates the password
function generatePassword() {
    //Local variables that are within the scope of the function
    var userChoice;
    var criteria = [];
    //Prompt that asks the user to enter a number between 8 and 128 for the length of their password
    let pwLength = prompt("How many characters would you like your password to have? (It must be at least 8 characters long and it cannot be more than 128 characters long)");
    //Conditional statement that cancels the function if the user enters nothing
    if (pwLength === null) {
        return;
    };
    //Conditional statement that does not allow the user to enter outside of the range of 8 to 128
    if (pwLength < 8 || pwLength > 128) {
        var wrongInput = prompt("Please enter a number between 8 and 128 for your password length.");
    };
    //Conditional statement that excepts the valid input from the user for the password length and proceeds to ask them confirm statements
    if (pwLength >= 8 || pwLength <= 128) {
        var lowerCase = confirm("Would you like your password to contain lowercase letters?");
        var upperCase = confirm("Would you like your password to contain uppercase letters?");
        var numericCharacter = confirm("Would you like your password to contain numbers?");
        var specialCharacter = confirm("Would you like your password to contain special characters?");
    }
    //Conditional statement that runs through all of the selections of criteria that user wants to include in their random password
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
    } else if (!lowerCase && !upperCase && !numericCharacter && specialCharacter) {
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
    //For loop that randomly shuffles the password so it is truly a random password and stops after the length of the user input for password length
    for (var i = 0; i < pwLength.length; i++) {
        var confirms = userChoice[Math.floor(Math.random() * userChoice.length)];
        criteria.push(confirms);
    }
    //Joins the criteria array together which contains all chracters, letters, and numbers
    var randPassword = criteria.join("");
    //Prints out the random password to the password box via query selector - it prints out a password but its even close to the right length being entered.
    document.querySelector("#password").textContent = randPassword;
    //Returns the value random password
    return randPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);