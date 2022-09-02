var passwordEl = document.querySelector("#password");
var btngenerateEl = document.querySelector("#generate");
var btncopyEl = document.querySelector("#copy");


btngenerateEl.addEventListener("click", function() {

    var charLength = prompt("How many letters long should your new password be? choose a number between 8 and 128");

    if ((charLength >= 8) && (charLength <= 128)) {

        var symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
        var numbers = "0123456789";
        var lowerCase = "abcdefghijklmnopqrstuvwxyz";
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var newpassword = "";

        var genSymbols = confirm("do you want to use special characters? i.e (!,@,#,$)");
        var genNumbers = confirm("do you want to use numbers?");
        var genLowerCase = confirm("do you want lower case letters?");
        var genUpperCase = confirm("do you want upper case letters?")


        var allCharacters = symbols + numbers + lowerCase + upperCase;
        var a = symbols + numbers + lowerCase;
        var b = symbols + numbers + upperCase;
        var c = symbols + lowerCase + upperCase;
        var d = numbers + lowerCase + upperCase;
        var e = symbols + numbers;
        var f = symbols + lowerCase;
        var g = symbols + upperCase;
        var h = numbers + lowerCase;
        var j = numbers + upperCase;
        var k = lowerCase + upperCase;



        if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if((genSymbols === true) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if((genSymbols === true) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                var character = Math.floor(Math.random() * allCharacters.length);
                newpassword += a.charAt(character, character + 1);
            }
        }



        passwordEl.textContent = newpassword;
        

















    }







})

