var fs = require('fs');

console.log('File has size: ' + fs.statSync('syncfile.txt').size + ' bytes');
console.log('File contents: ' + fs.readFileSync('syncfile.txt').toString());
