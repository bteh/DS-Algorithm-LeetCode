/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/

E * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 //create a dummy head and have the next be the head while looping thru the og linkedlist if it encounters the val then skip it
 // so the og current is always one ahead
var removeElements = function(head, val) {
    let newNode = new ListNode();
    newNode.next = head;
    let current = head;
    let prev = newNode;
    while(current){
        if(current.val === val){
            prev.next = current.next
        } else{
            prev = prev.next;
        }
        current = current.next
    }
    return newNode.next
    
};