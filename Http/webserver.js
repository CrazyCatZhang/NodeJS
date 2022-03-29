const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    // console.log('Someone visit our webserver');
    // const str = `Your request url is ${req.url},and request method is ${req.method}`;
    // console.log(str);
    const url = req.url;
    let content = '<h1>404 NOT Found</h1>';
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>';
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>';
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end(content);
});
server.listen(8080, () => {
    console.log("http server running on http://localhost:8080");
});