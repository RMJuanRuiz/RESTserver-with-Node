require('./config/config');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/user', function(req, res) {
    res.json('get user');
})

app.post('/user', function(req, res) {
    let body = req.body;

    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            message: 'The name is necessary'
        });

    } else {
        res.json({
            person: body
        });
    }
})

app.put('/user/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    });
})

app.delete('/user', function(req, res) {
    res.json('delete user');
})

app.listen(process.env.PORT, () => {
    console.log(`listening port ${ process.env.PORT }`);
})