/* You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
*/

var climbStairs = function(n){
	if (n < 2) return n; // if its 1 return 1 way to climb stairs if 2 return 2 ways to climb stairs
	let arr = [0,1,2]; // reference cause can only climb 1 or 2
	for(let i = 3; i <= n; i++){
		arr[i] = arr[i - 1] + arr[i - 2]; // will add up and put it into arr as the next number 
	}
	return arr[n] // once it the loop ends we subtract 1 since its outside the array 
}