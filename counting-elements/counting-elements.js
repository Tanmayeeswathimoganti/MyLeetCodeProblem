/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let set = new Set(arr);
    let count = 0;
    
    for(let element of arr) {
        if(set.has(element + 1)) {
            count++;
        }
    }
    
    return count;
};