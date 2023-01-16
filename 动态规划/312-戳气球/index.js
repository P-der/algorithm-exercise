// https://leetcode.cn/problems/burst-balloons/
var maxCoins = function(nums) {
    let n = nums.length;
    let points = [1, ...nums, 1];
    // dp[i][j]  (i,j) 之间的最高得分
    let dp = new Array(n+2).fill(0).map(()=> new Array(n+2).fill(0))
    for(let i = n+1 -1; i>=0; i--) {
        for(let j = i+1; j < n+2;j++) { 
            for(let k = i+1;k<j;k++) { // 最后戳k
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k]+dp[k][j]+ points[i]*points[j]*points[k]
                )
            }
        }
    }
    return dp[0][n+1]
};