/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let minValue = -Infinity
    for(let i in nums){
        if(nums[i] === target){
            return i
        }else if(target < minValue){
            return i - 1
        }else{
            minValue = nums[i]
        }
    }
    if(nums.length === 1 && nums[0] > target){
        return 0
    }
    if(nums[nums.length - 1] > target){
        return nums.length -1
    }
    return nums.length
};

console.log(searchInsert([1,3],0))