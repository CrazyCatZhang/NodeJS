const fs = require('fs');
const ws = fs.createWriteStream("hello4.txt");

ws.once("open", () => {
    console.log("流打开了...");
});
ws.once("close", () => {
    console.log("流关闭了...");
});

ws.write("通过可写流写入文件的内容");
ws.write("今天天气真不错");
ws.write("锄禾日当午");
ws.write("红掌拨清清");
ws.write("清清真漂亮");

ws.end();