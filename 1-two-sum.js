/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let instaLookup = {};
  nums.forEach((element, index) => {
    instaLookup[element] = index;
  });
  for (let i = 0; i < nums.length; i++) {
    let desiredNum = target - nums[i];
    if (instaLookup[desiredNum] && i != instaLookup[desiredNum]) {
      return [i, instaLookup[desiredNum]];
    }
  }
};
