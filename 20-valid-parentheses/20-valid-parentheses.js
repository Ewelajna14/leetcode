

var isValid = function(s){
    
    const bracketMap ={
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    let opposit = []
    
    for(let i of s ){
        if(bracketMap[i]){
            // push closing bracket
            opposit.push(bracketMap[i])
        }
        else if(opposit.length > 0 && opposit[opposit.length-1] == i){
                // i is closing bracket and my fist element matches 
               opposit.pop()
                 }
        else{
            // i is a closing bracket and top of opposit doesn't match
            return false
        }
    }
    return opposit.length === 0
   }

