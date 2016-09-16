var Message = require('./message');

var results = new Message();

results.on('message', function(msg) {
    console.log("   Received Message -> " + msg);
});

results.on('end', function(num) {
    console.log("Got " + num + " message events.");
});

results.on('begin', function() {
    console.log("Begin...");
});

console.log("Waiting for emitted messages...");
