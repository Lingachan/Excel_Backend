const express = require('express');

const app = express();

//incoming request of GET method
//To the route http://localhost:3050/api
app.get('/api', (req, res) => {
    res.send({ YoYo: 'there' });
});


module.exports = app;