// https://leetcode.cn/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []
    let track = []
    backtrack(n, k, 1, track)
    return res
    function backtrack(n, k, start, track) {
        if(k === track.length) {
            res.push([...track])
        }
        for(let i = start; i <= n; i++) {
            track.push(i)
            backtrack(n, k, i+1, track )
            track.pop()
        }
    }
};