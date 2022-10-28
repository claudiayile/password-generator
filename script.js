// Assignment code here

function generatePassword(){

    var charSet = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var stringLength = 22;
    var password = "";
    for(i=0; i< stringLength; i++){
      var randomChar = Math.floor(Math.random()* charSet.length-1);
      password += charSet.substring(randomChar, randomChar-1);
    }
return password;

  
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
