/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
       let left = 0;
    let outArray = [];
    let tracker = nums.length - 1;
    let right = nums.length - 1;

    while(left < right) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            outArray[tracker--] = nums[left] * nums[left];
            left++;
        }else {
            outArray[tracker--] = nums[right] * nums[right];
            right--; 
        }
    }

    outArray[tracker--] = nums[left] * nums[left];

    return outArray; 
};