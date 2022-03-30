const express = require('express');
const app = express();
const router = require('../router/router');

app.use(express.urlencoded({extended: false}));

const cors = require('cors');
app.use(cors());

// console.log(router);
app.use('/api', router);

app.listen(80, () => {
    console.log('server listening on port 80');
});

