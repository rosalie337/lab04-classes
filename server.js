const express = require('express');
const app = express();
const stack = require('./stack.js');

app.get(express.json(req, res), => {
    // get response, take res and filter with linting function 
    // use stack first in first out, once filter can use stack with methods in server.js (push, pop, peek)
    // post route, return 
}
});

app.listen(7890, () => {
    console.log('Mic check, 1, 2, 1, 2... started on 7890')
});