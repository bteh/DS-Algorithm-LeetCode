/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

var isAnagram = function(s, t) {
	let map1 = {};
	let map2 = {};
  if(s.length !== t.length) return false;
  for(let i = 0; i < s.length; i++){
  	let letter = s[i]
  	if(map1[letter]){
  		map1[letter]++
  	} else{
  		map1[letter] = 1;
  	}
  }
  for(let j = 0; j < t.length; j++){
  	let letter = t[j]
  	if(map2[letter]){
  		map2[letter]++
  	} else {
  		map2[letter] = 1
  	}
  }
  for(key in map1){
  	if(map1[key] !== map2[key]) return false
  }
  return true;
};

var isAnagram = function(s, t) {
	return s.split('').sort('').join('') === t.split('').sort('').join('');
}

function isAnagram(s, t) {
    const map = {};
    s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
    t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
    return Object.keys(map).every(k => map[k] === 0);
}