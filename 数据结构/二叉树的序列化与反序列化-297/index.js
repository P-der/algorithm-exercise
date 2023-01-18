// https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 前序遍历 其他类似
var serialize = function(root) {
    let s = [];
    _serialize(root, s)
    return s.toString()
};
function _serialize(root, s) {
    if(!root) {
        s.push('#')
        return
    }

    s.push(root.val)
    _serialize(root.left, s)
    _serialize(root.right, s)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodeVal = data.split(',');
    return _deserialize(nodeVal)
};

function _deserialize(nodes) {
    if(!nodes.length) return null;
    let root = nodes.shift();
    if(root === '#') return null;
    root = new TreeNode(root);
    root.left = _deserialize(nodes)
    root.right = _deserialize(nodes)
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


// 后序遍历
/* 
    由于root节点在最后所以需要反过来deserialize
*/
// 中序遍历
/*
    由于无法获取根节点，所以无法实现
*/

// 层级遍历
var serialize = function(root) {
    let s = []
    let q = [root]
    if(!root) return ''
    while(q.length > 0) {
        let node = q.shift();

        if(node === null) {
            s.push('#')
            continue
        }

        s.push(node.val)
        q.push(node.left)
        q.push(node.right)
    }
    return s.toString()
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data) return null
    let nodes = data.split(',');
    root = new TreeNode(nodes[0]);
    let q = [root]
    for(let i = 1; i< nodes.length;) {
        let parent = q.shift();
        let left = nodes[i];
        if(left !== "#") {
            parent.left = new TreeNode(left)
            q.push(parent.left)
        }else {
            parent.left = null;
        }
        i++
        let right = nodes[i]
        if(right !== '#') {
            parent.right = new TreeNode(right)
            q.push(parent.right)
        }else {
            parent.right = null
        }
        i++
    }
    return root
};
