/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 1) {
        return 1;
    }
    let longest = 0;
    let left = 0;
    let right = 0;
    let set = new Set();

    while(right < s.length) {
        if(!set.has(s[right])) {
            set.add(s[right]);
        }else {
            while(set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
        }
        
        if(longest < set.size) {
            longest = set.size;
        }
        
        right++;
    }
    console.log(set);

    return longest;
};