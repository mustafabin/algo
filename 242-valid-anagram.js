/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let arr1 = s.split("").sort();
  let arr2 = t.split("").sort();

  return arr1.join("") === arr2.join("");
};
