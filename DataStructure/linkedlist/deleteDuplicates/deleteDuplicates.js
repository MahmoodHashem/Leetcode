

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
    let current = head; 

    while(current){
        while(current.next && current.next.data === current.data){
            current.next = current.next.next; 
        }
        current = current.next; 
    }
    return head; 
};