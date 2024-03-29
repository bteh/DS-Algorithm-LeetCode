/*Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/ 

/**
 * @param {string} s
 * @return {number}
 */
// O(n^2) solution
function isPalind(s){
    return s===s.split('').reverse().join('');
}
var countSubstrings = function(s) {
    let count=0;
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            if(isPalind(s.substring(i,j+1)))
             count++;   
        }
    }
    return count;
};

