const fs = require('fs');
const rs = fs.createReadStream("/Users/crazycatzhang/Downloads/a.mp3");
const ws = fs.createWriteStream("b.mp3");
rs.pipe(ws);