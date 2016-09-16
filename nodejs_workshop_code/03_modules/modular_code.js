var math_module = require('./math_module');

var handleCallback = function(error, result, time) {
     if (error) {
         console.log("ERROR: " + error.message);
     } else {
         console.log("Returned value is : " + result + " (" + time + " ms)");
     }
 };

console.log("Calling subtract for 10 and 5");
math_module.subtract(100, 5, handleCallback);
console.log("Calling subtract for 5 and 10");
math_module.subtract(5, 100, handleCallback);
console.log("Calling subtract for 20 and 17");
math_module.subtract(20, 17, handleCallback);
console.log("Calling subtract for 17 and 20");
math_module.subtract(17, 20, handleCallback);
console.log("================================");

console.log("The 'name' variable is (which has been exported) : " + math_module.modulename);

console.log("The 'maxtime' variable is not exported: " + math_module.maxTime);
