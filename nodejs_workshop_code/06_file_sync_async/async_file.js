var fs = require('fs');

fs.stat('asyncfile.txt', function(err, stats) {
    if (err) {
		console.log("STAT ERROR: " + err.code + " (" + err.message + ")");
		return;
	}
	else {
		console.log('File has size: ' + stats.size + ' bytes');
		fs.readFile('asyncfile.txt', function(err, data) {
			if (err) {
				console.log("READ ERROR: " + err.code + " (" + err.message + ")");
				return;
			}
			else {
				console.log('File contents: ' + data.toString());
			}
		});
	}
});

console.log("Going to do file operations...");
