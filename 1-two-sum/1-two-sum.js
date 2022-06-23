/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const complementary ={}
    for (let i=0; i<nums.length; i++){
        
        if(complementary[nums[i]]>=0){
           return [complementary[nums[i]], i]
        }
      
        complementary[target - nums[i]] = i
    
    }
    
 
};