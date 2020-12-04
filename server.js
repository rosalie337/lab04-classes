const express = require('express');
const app = express();
const linter = require('./Linter');

app.use(express.json());

app.post('api/Linter', (req, res) => {
  const word = new linter(req.match, req.lint);
  res.send(word.linter());
});

app.listen(7890, () => {
    console.log('Mic check, 1, 2, 1, 2... started on 7890')
});