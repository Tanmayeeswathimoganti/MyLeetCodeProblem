/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathArr = path.split('/');
    let outArr = [];

    while(pathArr.length > 0) {
        let top = pathArr.pop();
        if(top == '..') {
            let count = 1;
            let temp = pathArr.pop();
            while(count && pathArr.length > 0) {
                if(temp == '..') {
                    count++;
                }else if(temp != '.' && temp != ''){
                    count--;
                }
                temp = pathArr.pop();
            }
            pathArr.push(temp);
        } else if(top == '') {
         while(pathArr[pathArr.length - 1] == '') {
            pathArr.pop();
         }
        } else if(top != '.'){
            outArr.push('/' + top);
        } 
    }

    outArr.reverse();
    if(outArr.length == 0) {
        outArr.push('/');
    }

    return outArr.join('');
};