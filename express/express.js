const express = require('express');
const app = express();

app.use(express.static('../Clock'));

app.all('/users', (req, res) => {
    res.send({
        name: 'CrazyCatZhang',
        age: 25,
        gender: 'male'
    });
});

//获取客户端的动态参数
app.all('/users/:id', (req, res) => {
    res.send(req.params);
});

app.listen(80, () => {
    console.log('express listening on port 80');
});