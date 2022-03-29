const path = require('path');

const pathStr = path.join(__dirname, '../file/test.txt');

console.log(pathStr);

const fullName = path.basename(pathStr);
console.log(fullName);

const nameWithoutExtension = path.basename(pathStr, ".txt");
console.log(nameWithoutExtension);

const extension = path.extname(pathStr);
console.log(extension);