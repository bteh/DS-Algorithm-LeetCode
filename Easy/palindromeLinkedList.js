/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 var isPalindrome = function(head) {
 	if(!head) return true;
// create an array that we will push the linkedlist to
	let arr = [];
// use a while loop to traverse to the linkedlist and push in the value into it
	while(head){
		arr.push(head);
		head = head.next
}
	let reversed = arr.reverse();
	
	for(let i = 0; i < arr.length/2; i++){
		if(arr[i] !== reversed[arr.length - i - 1]){
			return false;
		}
	}
	return true;
// once it is in the array we want to reverse it 
// once reveresed, we check if the array is the same to one another, if it is return true if not return false

 }
 