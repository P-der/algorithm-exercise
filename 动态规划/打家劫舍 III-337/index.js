// https://leetcode.cn/problems/house-robber-iii/

let memo = new WeakMap()
var rob = function(root) {
    if(!root) return 0;
    if(memo.has(root)) return memo.get(root)
    let do_it = root.val 
        + (root.left ? rob(root.left.left) + rob(root.left.right):0)
        + (root.right ? rob(root.right.left) + rob(root.right.right): 0)
    let not_do = rob(root.left) + rob(root.right)
    let res = Math.max(do_it, not_do);
    memo.set(root, res)
    return res;
};