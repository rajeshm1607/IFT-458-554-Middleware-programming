// ModuleScope.js
const moduleLevelVar = "I'm a module level variable";

function logModuleLevelVar() {
    console.log(moduleLevelVar);
}
logModuleLevelVar();
// Export the function to make it accessible to other modules
module.exports = {
    logModuleLevelVar,
};
