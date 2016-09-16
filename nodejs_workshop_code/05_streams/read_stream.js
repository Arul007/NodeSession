var fs = require('fs');
var readStream = fs.createReadStream("large_file.txt", {encoding: 'utf8'});

var count=0;
function read() {
  var buffer;
  while (buffer = readStream.read()) {
    count++;
    console.log('>>>>>>>>>>>>>>>>>    ' + count + ')       Data>>>>>>>>>>>>: ', buffer);
  }
}

readStream.on('readable', read);

readStream.on('end', function() {
  console.log('stream ended, read ' + count + ' chunks');
});
