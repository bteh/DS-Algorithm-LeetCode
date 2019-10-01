/* Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

*/

var groupAnagrams = function(arr) {
	let map = {};
	for(let i = 0; i < arr.length; i++){
		let sorted = arr.split('').sort().join('');
		if(map[sorted]){ // if we've seen it then add it onto the value since it's an array
			map[sorted].push(str[i]); 
		} else{
			map[sorted] = [str[i]]; // {"aet" : [eat]}
		}
	}
	return Object.values(map) // gives us the value of the map in an array
}