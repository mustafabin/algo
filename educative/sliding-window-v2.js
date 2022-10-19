// Smallest Subarray With a Greater Sum (easy)
// Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Example 1:

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// loop thru array
// add  item to sum
// if total >= S
// shrink window
// else
// increase window


// 
const smallest_subarray_sum = function (s, arr) {
    let windowStart = 0
    let dontAdd = false
    let sum = 0
    let result = 0
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        if(!dontAdd){
            sum+= arr[windowEnd] 
        }
        if(sum>= s){
            // update new res
            let tempResult = (windowEnd - windowStart) + 1
            if(result === 0 || tempResult < result ){
                result = tempResult
            }
            sum -= arr[windowStart]
            windowStart += 1
            dontAdd = true
            windowEnd -= 1
        }else{
            dontAdd = false
            // keep growing
        }

    }
    return result;
};

console.log(smallest_subarray_sum(8, [3, 4, 1, 1, 6])); //expected 2




function smallest_subarray_sum(s, arr) {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0; 
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      
      // shrink the window as small as possible until the 'window_sum' is smaller than 's'
      while (windowSum >= s) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart]
        windowStart += 1 // sliding the window
        }
      }
  
    if (minLength === Infinity) {
      return 0;
    }
    return minLength;
  }
  
  
  console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
  console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`);
  console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);