/*Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
*/

var happyNumber = function(num){
	let seen = {}; // to keep track if we come across the number before
	while(true){
		let digit =  num.toString().split('').map(val => { return parseInt(val)});
		let sum = digit.reduce((total, square) => { return total + (square * square)}, 0);
		if(sum === 1) {
			return true;
		} else if(seen[sum]){
			return false;
		}
		seen[sum] = true;
		num = sum;
	}
	// split it into array and turn it into an integer

}

