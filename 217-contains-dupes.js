/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dupes = {};
  let isDupe = false;
  nums.map((num, i) => {
    if (dupes[num]) {
      isDupe = true;
      return isDupe;
    } else {
      dupes[num] = 1;
    }
  });
  return isDupe;
};
