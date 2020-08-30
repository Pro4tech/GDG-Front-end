function myFunction(){
    var x, y, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("inputEmail").value;
  y = document.getElementById("inputPassword").value;
  // If x is Not a Number or less than one or greater than 10
  if (x=="abc@gmail.com" && y=="abc") {
    text = "Signed In!";
  } else {
    text = "Login Failed!";
  }
  document.getElementById("demo").innerHTML = text;
}