/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let map = new Map();
    let largestNum = -1;
    
    for(let element of nums) {
        if(!map.has(element)) {
            map.set(element, 1);
        }else {
            map.set(element, map.get(element) + 1);
        }
    }
    
    for(let [key, value] of map) {
        if(value == 1) {
            if(largestNum < key) {
                largestNum = key;
            }
        }
    }
    
    return largestNum;
};