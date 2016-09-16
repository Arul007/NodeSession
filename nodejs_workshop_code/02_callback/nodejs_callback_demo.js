var maxTime = 1000;

var subtract = function(large, small, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (large < small) {
        setTimeout(function() {
            callback(new Error("Negative result error"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, large - small, waitTime);
        }, waitTime);
    }
};

var handleCallback = function(error, result, time) {
     if (error) {
         console.log("ERROR: " + error.message);
	   } else {
         console.log("Returned value is : " + result + " (" + time + " ms)");
     }
};

console.log("Calling subtract for 100 and 5");
subtract(100, 5, handleCallback);
console.log("Calling subtract for 5 and 100");
subtract(5, 100, handleCallback);
console.log("Calling subtract for 20 and 17");
subtract(20, 17, handleCallback);
console.log("Calling subtract for 17 and 20");
subtract(17, 20, handleCallback);
console.log("================================");
