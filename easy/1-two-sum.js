/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let desiredNum = target - nums[i];
    if (hashMap[desiredNum] !== undefined) {
      return [hashMap[desiredNum], i];
    }
    hashMap[nums[i]] = i;
  }
};
