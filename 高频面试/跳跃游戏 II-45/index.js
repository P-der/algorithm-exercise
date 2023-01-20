// https://leetcode.cn/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划算法
var jump = function(nums) {
    let memo = new Array(nums.length).fill(nums.length)
    return dp(nums, 0)
    function dp(nums, p) {
        let n = nums.length;
        if(p>= n-1) return 0

        if(memo[p] != n) {
            return memo[p]
        }

        let steps  = nums[p]
        for(let i = 1; i<= steps; i++) {
            let subP = dp(nums, p+i)
            memo[p] = Math.min(memo[p], subP+1)
        }
        return memo[p]
    }
};

// 贪心算法
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0
    let maxPos = 0
    let end = 0
    for(let i = 0; i < nums.length-1;i++) { // 不需要考虑最后一个能跳多远
        maxPos = Math.max(maxPos, i + nums[i])
        if(end === i) { // 达到边界更新步数
            end = maxPos
            steps++
        }
    }
    return steps
};
