const path= require('path');
const { compose } = require('stream');


// console.log(__dirname);
// console.log(__filename);

let filePath='/Users/macbook/Documents/GitHub/Learn-Node.js';
// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));
   let addFile=path.join('kittu','tuffy')
//    console.log(addFile)

// console.log(path.resolve('kittu','tuffy','node.js'))

console.log(path.parse(filePath))