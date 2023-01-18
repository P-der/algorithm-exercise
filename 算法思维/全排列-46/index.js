// https://leetcode.cn/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    let track = []
    backtrack(nums, track)
    return res
    function backtrack(nums, track) {
        if(track.length ===  nums.length) {
            res.push([...track])
        }
        for(let i = 0;i < nums.length;i++) {
            if(track.includes(nums[i])) {
                continue
            }
            track.push(nums[i])
            backtrack(nums, track)
            track.pop()
        }
    }
};