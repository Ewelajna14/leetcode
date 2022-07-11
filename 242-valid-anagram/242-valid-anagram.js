/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sSorted = [...s].sort().join('')
  const tSorted = [...t].sort().join('')
  if(sSorted == tSorted){
    return true
  }
    else{
        return false
    }
};