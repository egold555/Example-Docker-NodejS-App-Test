const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! </br> This was updated from git!');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});