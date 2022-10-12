/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dupes = {};
  let isDupe = false;
  for (let i = 0; i < nums.length; i++) {
    if (dupes[nums[i]]) {
      isDupe = true;
      break;
    } else {
      dupes[nums[i]] = true;
    }
  }
  return isDupe;
};
