var os = require('os');

var convertToMb = function(value) {
    return(Math.round((value/1024/1024)*100)/100);
}

console.log('Hostname: ' + os.hostname());
console.log('Total Memory: ' + convertToMb(os.totalmem()) + ' Mb');
console.log('Free Memory: ' + convertToMb(os.freemem()) + ' Mb');
