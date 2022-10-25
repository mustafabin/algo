// Longest Substring with maximum K Distinct Characters (medium)
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

const longest_substring_with_k_distinct = function(str, k) {
    let windowStart = 0
    let result = 0
    let distinctChars = {}
    for (let i = 0; i < str.length; i++) {
        distinctChars[str[i]] = 1 + (distinctChars[str[i]] || 0)
        while(Object.keys(distinctChars).length > k){
            // shrink
            distinctChars[str[windowStart]] -= 1
            if (distinctChars[str[windowStart]] === 0) delete distinctChars[str[windowStart]]
            windowStart ++
        }
        let windowLength = (i - windowStart) + 1
        result = Math.max(result,windowLength)
    }
    return result;
  };
  

  console.log(longest_substring_with_k_distinct("araaci",2))