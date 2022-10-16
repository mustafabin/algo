/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let setMap = {}
    // O(n)
    for (let i = 0; i < nums.length; i++) {
        // setMap[nums[i]] = setMap[nums[i]] || 0 + 1
        if( setMap[nums[i]]){
            setMap[nums[i]] ++
        }else{
            setMap[nums[i]] = 1
        }
    }
    // O(n log n)
    let sortedSet = Object.entries(setMap).sort((a,b)=>b[1] - a[1])
    let result = []
    // O(k)
    for (let i = 0; i < k; i++) {
        result.push(sortedSet[i][0])
    }
    return result;

};

console.log(topKFrequent([1,1,1,2,2,3], 2)) // expected [1,2]