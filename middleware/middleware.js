const express = require('express');
const app = express();
const qs = require('qs');

app.use(function(req, res, next) {
    let str = '';
    req.on('data', function(data) {
        str += data;
    });
    req.on('end',function () {
        console.log(str);
        res.body = qs.parse(str);
        next();
    });
});

app.post('/middleware', (req, res) => {
    // console.log(res.body);
    res.send(res.body);
});

app.listen(80, () => {
    console.log('server listening on port 80');
});