/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
//find middle value
let lower = 0 //first index
let upper = nums.length -1 //last index -->5
  
  while(lower <= upper){
    let middle = lower + Math.floor((upper-lower)/2) 
    if(nums[middle] === target){
      return middle
    }
    if(target < nums[middle]){
      upper = middle -1
    }
    else{
      lower = middle + 1
    }
  }

  return -1
};