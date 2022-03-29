const fs = require('fs');
const fd = fs.openSync("hello.txt", "w");
fs.writeSync(fd, "今天天气真不错", 2);
fs.closeSync(fd);
