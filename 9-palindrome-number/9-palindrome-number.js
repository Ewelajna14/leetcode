/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const check = [...x.toString()]
    const value = []
    for(let i=check.length-1; i>=0; i-- ){
       value.push(check[i]) 
    }
    const newCheck = check.join('')
    const newValue = value.join('')
    
    if(newCheck == newValue){
        return true
    }
    
    return false
}