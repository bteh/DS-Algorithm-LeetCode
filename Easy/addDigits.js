/* EASY
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 Since 2 has only one digit, return it.

*/

// Technique: Math

var addDigits = function(num) {
	if(num === 0) return 0
	return (num % 9 === 0) ? 9 : num % 9; // if 9 is divisible by the number then return 9 else return the remainder of that number
};   