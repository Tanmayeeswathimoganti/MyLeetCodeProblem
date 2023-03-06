/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map([["b", 0], ["a", 0], ["l", 0], ["n", 0], ["o", 0]]);
    let instance = 0;
    let elligible = true;
    
    for(let i = 0; i < text.length; i++) {
        if(map.has(text[i])) {
            map.set(text[i], map.get(text[i]) + 1);
        }
    }

    console.log(map);

    while(elligible) {
        let canDo = true;
    for(let [key, value] of map) {
        if(key == "b") {
            if(value < 1) {
           canDo = false;
           elligible = false; 
           break;
         }else {
            map.set(key, map.get(key) - 1);
         }
        }

        if(key == "a") {
            if(value < 1) {
           canDo = false;
           elligible = false; 
           break;
         }else {
            map.set(key, map.get(key) - 1);
         }
        }

        if(key == "l") {
            if(value < 2) {
           canDo = false;
           elligible = false; 
           break;
         }else {
            map.set(key, map.get(key) - 2);
         }
        }

         if(key == "o") {
            if(value < 2) {
           canDo = false;
           elligible = false; 
           break;
         }else {
            map.set(key, map.get(key) - 2);
         }
        }

         if(key == "n") {
            if(value < 1) {
           canDo = false;
           elligible = false; 
           break;
         }else {
            map.set(key, map.get(key) - 1);
         }
        }
    }
        if(canDo) {
            instance++;
        }
    }
    
    return instance;
};