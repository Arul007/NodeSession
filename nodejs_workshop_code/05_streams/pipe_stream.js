var fs = require('fs');

fs.createReadStream('large_file.txt').pipe(process.stdout);
