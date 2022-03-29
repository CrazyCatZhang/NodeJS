const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.on("request", (req, res) => {
    // res.setHeader('Content-Type', 'text/html;charset=utf-8');
    const url = req.url;
    // const fpath = path.join(__dirname, '../', url);
    let fpath = '';
    if (url === '/') {
        fpath = path.join(__dirname, '../Clock/index.html');
    } else {
        fpath = path.join(__dirname, '../Clock', url);
    }
    fs.readFile(fpath, 'utf8', (err, data) => {
        if (err) return res.end("404 Not Found");
        res.end(data);
    });
});
server.listen(8080, () => {
    console.log('server running on port 8080');
});