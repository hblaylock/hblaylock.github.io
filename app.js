console.log("This script is loaded from an external JS file.")

// alert("This is an alert!")

var name = window.prompt("Enter your name: ")
alert(`Hello ${name}!`)

document.getElementById("name").innerHTML = "<h2>Hello " + name + "!</h2>"