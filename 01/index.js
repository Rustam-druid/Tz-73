const express = require('express');

const app = express();
const port = 8000;


app.get('/', (req, res) => {
    return res.send('Welcom !');
});
app.get('/hello', (req, res) => {
    return res.send('<h1>Hello </h1>');
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});