const fs = require("fs");

fs.open("hello2.txt", "w",function (err, data) {
    if (err) {
        console.log(err);
    } else {
        fs.write(data,"这是异步写的内容...",function (err) {
            if (!err) {
                console.log("写入成功...");
            }
            fs.close(data,function (err) {
                if (!err) {
                    console.log("文件已关闭...");
                }
            });
        });
    }
});