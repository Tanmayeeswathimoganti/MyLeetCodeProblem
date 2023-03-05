/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let tempAverage = -Infinity;
    let numer = 0;
    let currArr = [];
    
    for(let i = 0; i < k; i++) {
        numer += nums[i];
    }
    
    tempAverage = numer / k;
    
    for(let j = k; j < nums.length; j++) {
            numer -= nums[j - k];
            numer += nums[j];
        tempAverage = Math.max(tempAverage, numer / k);
    }
    
    return tempAverage;
};