/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"
*/

var convertToTitle = function(n) {
    let chars = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    chars = chars.split('');
    if(n < 27){
    	return chars[n];
    } else{
    	let temp = Math.ceil(n/26) - 1;
    	return convertToTitle(temp) + convertToTitle(n - temp*26);
    }

};