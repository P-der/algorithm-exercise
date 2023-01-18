// https://leetcode.cn/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast) {
        slow = slow.next
    }

    let left = head;
    let right = reverse(slow)
    while(right) {
        if(left.val != right.val) {
            return false
        }
        left = left.next;
        right = right.next
    }
    return true
};
function reverse(head) {
    let pre = null
    let cur = head
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre
}