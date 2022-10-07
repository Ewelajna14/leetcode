/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
     if(ransomNote.length > magazine.length) {
        return false;
    }

    let magazineCopy = magazine;

    for (const character of ransomNote) {
        if(magazineCopy.indexOf(character) !== -1) {
            magazineCopy = magazineCopy.replace(character, "");
        } else {
            return false;
        }
    }

    return true;

};



   /* const map = new Map()
    
    for (let i=0; i<magazine.length; i++){
        if(map.has(magazine[i])){
            map.set(magazine[i], map.get(magazine[i])+1)
        }
        else{
            map.set(magazine[i], 1)
        }
    }
    
    for (let i=0; i<ransomNote.length; i++){
        if(!map.has(ransomNote[i]) || map.set(ransomNote[i]) === 0){
            return false
        }
        
        map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
    }
    
    return true*/
    