// Assignment Code
var generateBtn = document.querySelector("#generate");
var int;
var lowerCase;
var upperCase;
var numericCharacter;
var specialCharacter;

letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
characters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    int = parseint(prompt("How many characters would you like your password to have? (It must be at least 8 characters long and it cannot be more than 128 characters long)"));
    if (int >= 8 || int <= 128) {
        lowerCase = confirm("Would you like your password to contain lowercase letters?");
        upperCase = confirm("Would you like your password to contain uppercase letters?");
        numericCharacter = confirm("Would you like your password to contain numbers?");
        specialCharacter = confirm("Would you like your password to contain special characters?");
    } if (int < 8 || int > 128) {
        int = parseInt(prompt("Please enter a number between 8 and 128 for your password length."));
    } else 
    parseInt(prompt("If you would like to proceed, please enter a number between 8 and 128."));
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
