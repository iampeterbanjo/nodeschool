var fs = require('fs')
		, fileContents = fs.readFileSync(process.argv[2]).toString();

console.log(fileContents.split('\n').length - 1);