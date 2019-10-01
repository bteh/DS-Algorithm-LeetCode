/* Reverse a given string
 Technique: For loop
 EASY
*/

var reverseString = function(s){
	let reversed = '';
	for(let i = s.length - 1; i > 0; i--){
		reversed+=s[i]
	}
	return reversed;
}

var reverseString = function(s){
	let reversed = '';
	for(let i = 0; i < s.length; i++){
		reversed = s[i] + reversed
	}
	return reversed;
}

var reverseString = function(s){
	let reversed = '';
	for(let char of s){
		reversed = char + reversed
	}
}