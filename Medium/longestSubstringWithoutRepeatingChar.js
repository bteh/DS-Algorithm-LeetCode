/*Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    // map = {};
    let start = 0;
    let max = 0; // want to return
    for(let i = 0; i< s.length; i++){
        if(map.has(s[i]) && map.get(s[i]) >= start){ 
// if it has the letter and if the letter's index is greater than start
            start = map.get(s[i]) + 1
// increase the start to where it encounter the same letter from the maps
// since it's not a different letter
        }
        map.set(s[i], i) // set the letter to the index
        max = Math.max(max, i - start + 1) // set max the longest length index a high number subtract start where it began and add 1 to get the whole length not the last index ex arr.length - 1
    }
       
    return max;
};