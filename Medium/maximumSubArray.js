/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

var maxSubArray = function(nums) {
    let current = nums[0];
    let sum = nums[0];
    for(let i = 1; i < nums.length; i++){
    	if(current < 0){
    		current = nums[i];
    	} else{
    		current += nums[i]
    	}    
    	sum = Math.max(sum, current)
    }
    return sum
};

/*
Sliding window
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [2,1,4,18,22,1,5,6], 2
Output: 40
Explanation: [ 18,22 ]has the largest sum = 40 by only summing two elements
*/

var maximumSubArray = function (arr, num){
  let tempSum = 0;
  let maxSum = 0;
  for(let i = 0; i < num; i++){
    tempSum = tempSum + arr[i]
  }
  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

maximumSubArray([2,1,4,18,22,1,5,6], 2)