/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sHash = {};
  let isAnagram = true;
  for (const letter of s) {
    sHash[letter] = sHash[letter] + 1 || 1;
  }
  let tHash = {};
  for (const letter of t) {
    tHash[letter] = tHash[letter] + 1 || 1;
  }
  Object.keys(sHash).forEach((key) => {
    if (sHash[key] !== tHash[key]) {
      return (isAnagram = false);
    }
  });
  return isAnagram;
};
