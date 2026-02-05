function showMessage() {
  console.log("This runs after 2 seconds");
}

setTimeout(showMessage, 2000);

console.log("This runs first");

//A callback is just a function passed to another function.