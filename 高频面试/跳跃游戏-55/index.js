// https://leetcode.cn/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthest = 0 
    for(let i = 0; i<nums.length-1;i++) {
        farthest= Math.max(farthest, i + nums[i])
        if(farthest <= i) return false
    }
    return farthest >= nums.length -1
};