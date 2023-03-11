/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    if(s.length < 2) {
        return s;
    }
    let changed = true;
    let sArr = s.split('');
    let i = 0;

    while(changed) {
        i++;
        let temp = [];
        let len = sArr.length;
        while(sArr.length > 0) {
        let char1 = sArr.pop();
        if(sArr.length >= 1) {
        let char2 = sArr.pop();
        if(Math.abs(char1.charCodeAt(0) - char2.charCodeAt(0)) != 32) {
            temp.push(char1);
            sArr.push(char2);
        }
        }else {
            temp.push(char1);
        }

        }
        if(temp.length == len) {
            changed = false;
        }
        sArr = [...temp];
    }

    if(i % 2 == 1) {
        sArr.reverse();
    }

    return sArr.join('');
};