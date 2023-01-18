// https://leetcode.cn/problems/reverse-nodes-in-k-group/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head) return null;
    let a,b;
    a = b = head;
    for(let i = 0;i<k;i++) {
        if(b== null)return head
        b = b.next
    }
    let newHead = reverse(a,b) 
    a.next = reverseKGroup(b, k)
    return newHead
};
// 反转 [a,b) 区间的链表
function reverse(a, b) {
    let pre = null;
    let cur = a;
    while(cur !== b) {
        let next = cur.next;
        cur.next = pre;
        pre = cur
        cur = next
    }
    return pre
}