const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;
const password=1

app.get('/', (req, res) => {
    return res.send('Welcom !');
});
app.get('/encode/:hello', (req, res) => {
  const v=  Vigenere.Cipher(password).crypt('abc-0123456789@example.com');
    return res.send(v);
});
app.get('/decode/:d', (req, res) => {
  const v=  Vigenere.Decipher(password).crypt('bcd-0123456789@fybnqmf.dpn');
    return res.send(v);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});