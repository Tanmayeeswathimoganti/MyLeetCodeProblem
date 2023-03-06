/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 1;
    if(nums[0] < 0) {
        startValue = Math.abs(nums[0]) + 1;
    }
    let sum = nums[0] + startValue;
    for(let i = 1; i < nums.length; i++) {
        sum += nums[i];
        if(sum <= 0) {
            startValue = startValue + Math.abs(sum) + 1;
            sum += Math.abs(sum) + 1;
        }
    }
    
    return startValue;
};