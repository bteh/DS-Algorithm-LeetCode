/*Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

//back track method

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    debugger;
    let result = [];
    backtrack(nums, result);
    return result;
}
    
    function backtrack(nums, result, n = 0){
        debugger;
        if(n === nums.length - 1){
           return result.push(nums.slice(0)) // only one value
        } else{
            for(let i = n; i < nums.length; i++){
                [nums[i], nums[n]] = [nums[n], nums[i]];
                backtrack(nums, result, n + 1);
                [nums[i], nums[n]] = [nums[n], nums[i]];
                
            }
        }
    
};