/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // increment up until the sum is greater than or equal to target
    // shrink array to min possible size 
        // update result to smallest 
    // if nothing return 0

    let minLength = nums.length + 1
    let windowStart = 0
    let sum = 0
    // 0(n)
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        sum += nums[windowEnd]

        // 0(n - 1) but this would only get this high once so this algorithm is still 0(n)
        while(sum >= target){
            minLength = Math.min(minLength,(windowEnd - windowStart) +1)
            sum -= nums[windowStart]
            windowStart += 1
        }
        
    }
    if(minLength === nums.length + 1){
        return 0
    }
    return minLength
};
