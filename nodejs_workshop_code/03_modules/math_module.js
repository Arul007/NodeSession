var maxTime = 1000;
var name = "Math Module";

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

module.exports.subtract = subtract;
module.exports.modulename = name;
