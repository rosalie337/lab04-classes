const express = require('express');
const app = express();
const stack = require('./stack.js');

app.use(express.json());

app.listen(7890, () => {
    console.log('Mic check, 1, 2, 1, 2... started on 7890')
});