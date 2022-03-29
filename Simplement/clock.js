const fs = require("fs");
const path = require("path");

const regStyle = /<style>[\s\S+]*<\/style>/;
const regScript = /<script>[\s\S+]*<\/script>/;

fs.readFile(path.join(__dirname, '../material/index.html'), function (err, data) {
    if (err) return console.log("读取HTML文件失败...", err);

    resolveCSS(data);
    resolveJS(data);
    resolveHTML(data);
});

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr);
    // console.log(r1);
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    // console.log(typeof newCSS);
    fs.writeFile(path.join(__dirname, '../Clock/index.css'), newCSS, function (err) {
        if (err) return console.log("写入CSS文件失败...", err);
        console.log("写入CSS文件成功...");
    });
}

function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr);
    const newJS = r2[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile(path.join(__dirname, '../Clock/index.js'), newJS, function (err) {
        if (err) return console.log("写入JS文件失败...", err);
        console.log("写入JS文件成功...");
    });
}

function resolveHTML(htmlStr) {
    // console.log(htmlStr);
    const newHTML = htmlStr.toString().replace(regStyle, '<link rel="stylesheet" href="index.css">').replace(regScript, '<script src="index.js"></script>');
    fs.writeFile(path.join(__dirname, '../Clock/index.html'), newHTML, function (err) {
        if (err) return console.log("写入HTML文件失败...", err);
        console.log("写入HTML文件成功...");
    });
}
