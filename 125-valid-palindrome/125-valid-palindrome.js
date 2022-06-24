/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     let arr = [...s]
     let result = []
     let alphanumeric = '0123456789qwertyuioplkjhgfdsazxcvbnm'
     for (let i of arr){
         if(alphanumeric.includes(i.toLowerCase())){
             result.push(i.toLowerCase())
         }
     }
    
    return(result.join('') == result.reverse().join(''))
};