/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let resultArray = []
    let product = 1
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i]
    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 0){
            let tempProd = 1
            for (let k = 0; k < nums.length; k++) {
                if(j !== k){
                    tempProd *= nums[k]
                }
            }
            resultArray.push(tempProd)
        }else{
            resultArray.push(product / nums[j])

        }
        
    }
    return(resultArray)
}; 
console.log(productExceptSelf([1,2,3,4]))
