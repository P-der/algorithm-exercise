// https://leetcode.cn/problems/reverse-linked-list-ii/

var reverseBetween = function(head, left, right) {
    let successor = null;
    if(left === 1) {
        return reverseN(head, right)
    }
    head.next = reverseBetween(head.next, left-1, right-1)
    return head
   function reverseN(head, n)  {
       if(n == 1) {
           successor = head.next;
           return head
       }
       let last = reverseN(head.next, n -1);
       head.next.next = head 
       head.next = successor
       return last;
   }
};