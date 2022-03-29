const fs = require("fs");
fs.writeFile("hello3.txt", "这是通过writeFile写的内容", function (err) {
   if (!err) {
       console.log("写入成功...");
   } else {
       console.log(err);
   }
});