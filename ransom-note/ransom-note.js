/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomNoteMap = new Map();
    let magazineMap = new Map();
    
    for(let i = 0; i < ransomNote.length; i++) {
        if(ransomNoteMap.has(ransomNote[i])) {
            ransomNoteMap.set(ransomNote[i], ransomNoteMap.get(ransomNote[i]) + 1);
        }else {
            ransomNoteMap.set(ransomNote[i], 1);
        }
    }
    
    for(let j = 0; j < magazine.length; j++) {
        if(magazineMap.has(magazine[j])) {
            magazineMap.set(magazine[j], magazineMap.get(magazine[j]) + 1);
        }else {
            magazineMap.set(magazine[j], 1);
        } 
    }
    
    for(let [key, value] of ransomNoteMap) {
        if(!magazineMap.has(key)) {
            return false;
        }else if(magazineMap.get(key) < value) {
            return false;
        }
    }
    
    return true;
};