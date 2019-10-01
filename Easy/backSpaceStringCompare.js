/* Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
*/

var backspaceCompare = function(S, T) {
    return compareStr(S) === compareStr(T);
};

var compareStr = function(str){
    let stack = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] !== '#'){
            stack.push(str[i])
        } else{
            stack.pop() // encounter a hashtag so delete previous in stack   
        }
    }
    return stack.join('') // turn it back into a string
}