// https://leetcode.cn/problems/partition-equal-subset-sum/
var canPartition = function(nums) {
    let sum = nums.reduce((pre, next)=> pre+next, 0);
    if(sum % 2 != 0) return false;

    let n = nums.length;
    sum = sum/2;

    let dp = new Array(n+1).fill(0).map(()=> new Array(sum + 1).fill(false));
    for(let i = 0; i<= n; i++) {
        dp[i][0] = true
    }
    for(let i = 1; i<=n; i++) {
        for(let j = 1; j <= sum; j++) {
            if(j - nums[i-1] < 0) {
                dp[i][j] = dp[i-1][j]
            }else {
                dp[i][j] = dp[i-1][j] || dp[i-1][j- nums[i-1]]
            }
        }
    }
    return dp[n][sum]
};
// 优化 状态压缩
var canPartition = function(nums) {
    let sum = nums.reduce((pre, next)=> pre+next, 0);
    if(sum % 2 != 0) return false;

    let n = nums.length;
    sum = sum/2;

    let dp = new Array(sum + 1).fill(false);
    dp[0] = true
    for(let i = 0; i<n; i++) {
        for(let j =sum ;  j >= 0; j--) {
            if(j - nums[i] >= 0) {
                dp[j] = dp[j] || dp[j- nums[i]]
            }
        }
    }
    return dp[sum]
};