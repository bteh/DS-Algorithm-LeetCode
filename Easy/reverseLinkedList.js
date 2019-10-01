/*

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

/*



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    while(head){
    	 // save next before we overwrite node.next!
    	let temp = head.next;
    	// reverse pointer
    	head.next = prev; // 1 is now pointing to null
    	// step forward in the list
    	prev = head; // null is now the head 
    	head = temp;
    }
    return prev
};





var reverseList = function(head) {
    // Edge cases, nothing to reverse
    if (!head || !head.next) { return head; }

    // Step 1, reverse the tail
    var tail = reverseList(head.next);
    // Step 2, the second item will point to head
    head.next.next = head;
    // Step 3, the head is detached
    head.next = null;
 
    // Don't forget to return the last item of your initial list, which is recursively returned by our function
    return tail;
};






