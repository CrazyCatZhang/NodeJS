const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
    const query = req.query;
    res.send({
        status: 0,
        msg: 'GET SUCCESSFUL',
        data: query
    });
});

router.post('/post', (req, res) => {
    const body = req.body;
    res.send({
        status: 0,
        msg: 'POST SUCCESSFUL',
        data: body
    });
});

module.exports = router;