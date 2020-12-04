const Stack = require('./stack.js');

const match = (string) => {
    return string.split('')
      .filter(arr => arr === '{' || arr === '}' || arr === '(' || arr === ')' || arr === '[' || arr === ']');
  };
  
  const linter = (array) => {
      arr = match(array);
      console.log(arr);
      const stack = new Stack();
    
      const matched = {
        '(': ')',
        '[': ']',
        '{': '}',
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for(let i = 0; i < arr.length; i++) {
        const peek = stack.peek();
      if(arr[i] === '(' || arr[i] === '{' || arr[i] === '[') {
        stack.push(arr[i]);
      } else {
        const prevMatch = stack.pop();
        if(arr[i] != matched[prevMatch]) {
          return false;
        }
      }
    }
    if(stack.length != 0) {
      return false;
    }
    return true;
  
  };
  // let arr = '{}}hey';
  let arr = '{{{[hey]}}}}';
  const checkTheLinter = linter(arr);
  console.log(checkTheLinter);
  
module.exports = 
  {
    linter
  }; 