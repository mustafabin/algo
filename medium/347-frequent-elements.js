/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let setMap = {}
    for(let num of nums){ setMap[num] = 1 + (setMap[num] || 0)}
    return Object.entries(setMap).sort((a,b)=>b[1] - a[1]).slice(0,k).map((item)=>item[0]);
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2)) // expected [2, -1]
