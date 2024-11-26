const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;
const password=1

app.get('/', (req, res) => {
    return res.send('Welcom !');
});
app.get('/encode/:hello', (req, res) => {
  const v=  Vigenere.Cipher(password).crypt('Lorem');
    return res.send(v);
});
app.get('/decode/:Mpsfn', (req, res) => {
  const v=  Vigenere.Decipher(password).crypt('Mpsfn');
    return res.send(v);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});