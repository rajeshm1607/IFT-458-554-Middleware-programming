// closureScope.js
function outerFunction() {
    const outerVar = "I'm an outer variable";

    function innerFunction() {
        console.log(outerVar); // Inner function has access to outerVar
    }

    return innerFunction;
}

const closure = outerFunction();
closure(); // This will print the value of outerVar
