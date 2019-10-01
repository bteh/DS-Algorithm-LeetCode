/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Using two pointers and compare

 var mergeTwoLists = function(l1, l2) {
    // create a dummy head
    let dummyHead = new ListNode();
    // create a current to keep track
    let current = dummyHead;
    // set current to dummy head
    while(l1 && l2){
    	if(l1.val < l2.val){
    		current.next = l1;
    		l1 = l1.next;
    	} else{
    		current.next = l2;
    		l2 = l2.next;
    	}
    	current = current.next;
    }
    while(l1){
    	current.next = l1;
    	l1 = l1.next;
    	current = current.next;
    }
    while(l2){
    	current.next = l2;
    	l2 = l2.next
    	current = current.next;
    }

    return dummyHead.next;
    // while theres an l1 and l2, if value of l1 < l2 then put it to the current.next
    // else put l2 to current.next
    // have the current go to the next once l1 or l2 is added on
    // now if theres any left overs from l1 or l2 then do the same with each by adding it on the current 
    // return the next of dummy head 
};