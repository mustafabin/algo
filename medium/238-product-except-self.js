/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let resultArray = []
    for (let i = 0; i < nums.length; i++) {
        let product = 1
        for (let j = 0; j < nums.length; j++) {
            if(i !== j){
                product *= nums[j]
            }
        }
        resultArray.push(product)
    }
    console.log(resultArray)
}; 
productExceptSelf([1,2,3,4])
