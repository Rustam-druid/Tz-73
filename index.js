const express = require('express');

const app = express();
const port = 8000;


app.get('/', (req, res) => {
    return res.send('Hello Page!');
});
app.get('/about', (req, res) => {
    return res.send('<h1>About Page</h1>');
});
app.get('/hello/:userName', (req, res) => {
    return res.send(`Hello ${req.params.userName}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});