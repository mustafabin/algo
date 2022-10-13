/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  let groupMap = {};
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let wordSorted = strs[i].split("").sort().join("");
    if (groupMap[wordSorted] !== undefined) {
      groupMap[wordSorted] = [...groupMap[wordSorted], word];
    } else {
      groupMap[wordSorted] = [word];
    }
  }
  return Object.values(groupMap);
};
