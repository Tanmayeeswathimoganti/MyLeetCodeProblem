/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
let map = new Map();
let winners = [];
let oneLooser = [];
for(let [winner, looser] of matches) {
    if(!map.has(winner)) {
        map.set(winner, [1, 0]);
    }else {
        map.get(winner)[0] = (map.get(winner)[0] + 1);
    }

    if(!map.has(looser)) {
        map.set(looser, [0, 1]);
    }else {
        map.get(looser)[1] = (map.get(looser)[1] + 1);
    }
}

for(let [key, value] of map) {
    if(value[1] == 0) {
       winners.push(key);
    }else if(value[1] == 1) {
        oneLooser.push(key);
    }
}
    
winners.sort((a, b) => a - b);
oneLooser.sort((a, b) => a - b); 
    
return [winners, oneLooser];
};