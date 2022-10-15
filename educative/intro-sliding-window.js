// Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

// Let’s understand this problem with an example:

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// Time complexity O(n*k)

let averageOfSubArrays = (array, k) => {
    // loop through the array
    // get the sub section and calculate the avg
    // move until the last sub section
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i + k]) {
            let j = i + k;
            let subArray = array.slice(i, j);
            let average =
                subArray.reduce((prev, item) => prev + item) / subArray.length;
            result.push(average);
        }
    }
    return result;
};

// Time complexity O(n) with sliding window

let average_of_sub_arrays = (array, k) => {
    let result = []
    let sum = 0.0;
    let windowStart = 0
    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        // tally sum 
        sum += array[windowEnd]
        
        if (windowEnd >= k -1 ) {
            result.push(sum/k)
            sum -= array[windowStart]
            windowStart += 1

        }
    }
    return result
};

// console.log(average_of_sub_arrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]


// O(n)
let max_sum_of_sub_array = (array, K) => {
    let maxSum = 0;
    let tempSum = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        tempSum += array[windowEnd]
        // slide window 
        if(windowEnd >= K -1){
            maxSum = Math.max(maxSum,tempSum)
            tempSum -= array[windowStart]
            windowStart += 1
        }
    }
    return maxSum
}
// console.log(max_sum_of_sub_array([2, 1, 5, 1, 3, 2],3 ))  // expected  9