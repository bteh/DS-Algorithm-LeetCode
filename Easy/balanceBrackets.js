/* 
You are given an array of strings. Each of these strings is made up of bracket characters only :
'(', ')', '{',  '}',  '[',  ']'.
Your task is to determine if of the strings of brackets in the input array are valid or invalid by these criteria.

Sample Input / Output:

"([)]" // false
"()" // true

*/

// Utilize Stack Data Structure
var balanceBrackets = function(str){
	let stack = [];
	let map = {
		'(': ')',
		'{': '}',
		'[': ']'
	}
	for(let i = 0; i < str.length; i++){  // If character is an opening brace add it to a stack
		if(str[i] === '(' || str[i] === '{' || str[i] === '['){
			stack.push(str[i]); // push into the stack all the left entry
		} 
		 //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
		else{
			let last = stack.pop()

			//If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
			if(map[last] !== str[i]){ return false; }
			}
		}
		
		if(stack.length !== 0) { return false; } // if the stack is not empty then its false 
		return true;
	}
