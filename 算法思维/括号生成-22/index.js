// https://leetcode.cn/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(!n)  return []
    let res = []
    let track = ''
    backtrack(n, n, track, res)
    return res
};
function backtrack(left, right,  track, res) {
    if(left<0|| right<0) return;
    if(right < left) return;

    if(right===0&&left===0) {
        res.push(track)
        return
    }
    backtrack(left-1, right,`${track}(`,res)

    backtrack(left, right-1, `${track})`, res)
    
}