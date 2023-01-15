// https://leetcode.cn/problems/maximum-subarray/
var maxSubArray = function(nums) {
    let dp = new Array(nums.length).fill(-Infinity);
    dp[0] = nums[0];
    for(let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i-1]+nums[i]) // 动态规划方程
    }
    return dp.reduce((pre, next)=> Math.max(pre, next), -Infinity)
};