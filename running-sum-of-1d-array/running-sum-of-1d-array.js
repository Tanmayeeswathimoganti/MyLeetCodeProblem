/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let prefixSum = [nums[0]];
    
    for(let i = 1; i < nums.length; i++) {
        prefixSum.push(nums[i] + prefixSum[prefixSum.length - 1]);
    }
    
    return prefixSum;
};