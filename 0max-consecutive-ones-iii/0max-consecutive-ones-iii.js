/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
 let left = 0;
 let right = 0;
    
    let zeroCount = 0;
    let maxWindowSize = 0;
    
    while(zeroCount <= k  && right < nums.length) {
        if(nums[right] == 0) {
            zeroCount++;
        }
        if(zeroCount > k) {
            break;
        }
        right++;
    }
    
    maxWindowSize = right - left;
    
    while(right < nums.length) {
        while(zeroCount > k) {
            if(nums[left] == 0) {
                zeroCount--;
            }
            left++;
        }
        
        right++;
       if(nums[right] == 0) {
            zeroCount++;
        }
        
        if(zeroCount > k) {
        maxWindowSize = Math.max(maxWindowSize, right - left);
        }
        
    }
    
    while(zeroCount > k) {
     if(nums[left] == 0) {
        zeroCount--;
     }
        left++;
    }
    
    if(zeroCount <= k) {
        maxWindowSize = Math.max(maxWindowSize, right - left);
    }
    
    return maxWindowSize;
};