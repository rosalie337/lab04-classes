export const Linter = item => {
    
    
    if(item === '[' || item === '(' || item === '{' ) {     
    stack.push(item);
    } else if(item ===']') {
        if (stack.isEmpty() || stack.pop != '[') {    
    return false;
};