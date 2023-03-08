/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head || !head.next || left == right) {
        return head;
    }
    let prevLeft = null;
    let leftAnchor = head;
    let nextRight = null;
    let rightAnchor = head.next;
    let tracker = head;
    let start = head;
    let i = 2;
    if(left == 1) {
     start = rightAnchor;
    }
    
    while(tracker && tracker.next) {
        let temp = tracker;
        tracker = tracker.next;
        
        if(i > 1 && i == left) {
            prevLeft = temp;
            leftAnchor = tracker;
        }
        
        if(i == right) {
            rightAnchor = tracker;
            nextRight = tracker.next;
            rightAnchor.next = null;
        }
        i++;
    }
    
        console.log("rightAnchor", rightAnchor);
    
    
    if(right - left == 1) {
        rightAnchor.next = leftAnchor;
        leftAnchor.next = nextRight;
        if(prevLeft)
        prevLeft.next = rightAnchor;
        return start;
    }
    
    let prev = null;
    let curr = leftAnchor;
    while (curr) {
        let nextNode = curr.next; 
        curr.next = prev;        
        prev = curr;              
        curr = nextNode;          
    }
    
    console.log(prev);
    
    if(prevLeft) {
    prevLeft.next = prev;
    }
    
    if(nextRight) {
    leftAnchor.next = nextRight;
    }
    
   if(left == 1) {
     start = rightAnchor;
    }
    
    
    
    return start;
};
