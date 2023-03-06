/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let set = new Set(sentence.split(''));
    
    for(let i = 0; i <= 25; i++) {
        if(!set.has(String.fromCharCode(97 + i))) {
            return false;
        }
    }
    
    return true;
};