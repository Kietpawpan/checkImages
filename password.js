/* Copyright (c) 2024 by Monte Kietpawpan
 * password.js | v 1.0 August 9, 2024 
 * MIT License */


function setH() {
$(document).on('input', 'textarea', function () {
        $(this).outerHeight(38).outerHeight(this.scrollHeight); // 38 or '1em' -min-height
    }); 
}




function setPaste() {
   navigator.clipboard.readText()
	.then(text => {
        document.getElementById("data2").value=text;

});
}




function copy(){
  const element = document.querySelector("#key1");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  var popup = document.getElementById("c1");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copy1()'></i>";}, 1200);
 }
	

function clearPassword(){
	document.getElementById('key1').value ="";
 	document.getElementById("message").style.display = "none";


}



var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}

/*http://stackoverflow.com/a/12206089/993683 
by @broofa)*/

/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_password_val */
var myInput = document.getElementById("key1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var sp = document.getElementById("sp");

// When the user clicks on the password field, show the message box
myInput.oninput = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box

/*
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
*/

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }


  // Validate numbers
  var numbers = /[0-9]/g; 
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


 // Validate special letters
    var spc = /[^a-zA-Z0-9' ']+/g;
    if(myInput.value.match(spc)) {  
    sp.classList.remove("invalid");
    sp.classList.add("valid");
  } else {
    sp.classList.remove("valid");
    sp.classList.add("invalid");
  }

 // Validate space
    var spa = /[' ']+/g;
    if(myInput.value.match(spa)) {  
    sa.classList.remove("invalid");
    sa.classList.add("valid");
  } else {
    sa.classList.remove("valid");
    sa.classList.add("invalid");
  }



}

