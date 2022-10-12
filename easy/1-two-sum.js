/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let instaLookup = {};
  for (let i = 0; i < nums.length; i++) {
    let desiredNum = target - nums[i];
    if (instaLookup[desiredNum] != undefined && i != instaLookup[desiredNum]) {
      return [i, instaLookup[desiredNum]];
    } else {
      instaLookup[nums[i]] = i;
    }
  }
};
