// LocalLevel.js
function exampleFunction() {
    const localVar = "I'm a local-level variable";
    console.log(localVar);
}

exampleFunction(); // This will print the value of localVar
console.log(localVar); // This will result in an error
