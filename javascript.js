function sayHello(){
  console.log("Hello, World!") ;
}

function popup() {
  alert("Hello, World!") ;
}

function inbrowser() {
  var p=document.getElementById("inbrowser")
p.innerHTML="Hello, World!" ;
}

function stranger() {
  var person = prompt("What is your name?");

if (person != null) {
    document.getElementById("stranger").innerHTML ="Hey " + person + "! How was your day?";
}
}
