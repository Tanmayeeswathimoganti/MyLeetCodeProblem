/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        while(slow.val == fast.val && fast.next) {
            fast = fast.next;
        }
        
        if(slow.val == fast.val && fast.next == null) {
            slow.next = null;
        }else {
          slow.next = fast;
        }
        slow = fast;
    }
    
    return head;
};