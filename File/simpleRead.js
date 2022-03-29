const fs = require('fs');
const path = "/Users/crazycatzhang/Downloads/a.png";
fs.readFile(path, function (err, data) {
    if (!err) {
        fs.writeFile("hello.png", data, function (err) {
            if (!err) {
                console.log("文件写入成功");
            }
        });
    }
});