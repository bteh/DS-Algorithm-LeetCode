/*
Given an array of 1s and 0s which has all 1s first followed by all 0s. Find the number of 0s. Count the number of zeroes in the given array.
Input: arr[] = {1, 1, 1, 1, 0, 0}
Output: 2

Input: arr[] = {1, 0, 0, 0, 0}
Output: 4

Input: arr[] = {0, 0, 0}
Output: 3

Input: arr[] = {1, 1, 1, 1}
Output: 0

*/

var countZeroes = function(arr){
	// check if arr[mid] is 1 if it is then check if arr[mid+1] is 0 
	// check if arr[mid - 1] is 1
	function countZeroes(arr){
    let start = 0;
    let end = arr.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === 1) {
            if (!arr[mid + 1]) return arr.length - mid - 1;
            else start = mid + 1;
        } else if(arr[mid - 1] === 1){
            return arr.length - mid;
        }else {
            end = mid;
        }
        
    }
    return arr.length;
}

}