// https://leetcode.cn/problems/house-robber/
// 会超时
var rob = function(nums) {
    function dp(nums, start) {
        if(start >= nums.length) {
            return 0;
        }
        return Math.max(dp(nums, start+1), dp(nums, start+2)+nums[start])
    }
    return dp(nums, 0)
};
// 备忘录优化
var rob = function(nums) {
    let memo = new Array(nums.length).fill(-1)
    function dp(nums, start) {
        if(start >= nums.length) {
            return 0;
        }
        if(memo[start] != -1) return memo[start]
        let res = Math.max(dp(nums, start+1), dp(nums, start+2)+nums[start])
        memo[start] = res;
        return res
    }
    return dp(nums, 0)
};
// DP Table
var rob = function(nums) {
    let n = nums.length
    let dp = new Array(n  + 2).fill(0);
    for(let i = n-1; i >=0; i--) {
        dp[i] = Math.max(dp[i+1], nums[i]+dp[i+2])
    }
    return dp[0]
};
// 状态压缩
var rob = function(nums) {
    let n = nums.length
    let dp_i = 0
    let dp_i_1 = 0;
    let dp_i_2 = 0
    for(let i = n-1; i >=0; i--) {
        dp_i = Math.max(dp_i_1, nums[i]+dp_i_2);
        dp_i_2 = dp_i_1
        dp_i_1 = dp_i;
    }
    return dp_i
};

