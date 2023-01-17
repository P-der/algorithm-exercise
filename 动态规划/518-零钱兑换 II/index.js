// https://leetcode.cn/problems/coin-change-ii/
var change = function(amount, coins) {
    let n = coins.length;
    let dp  = new Array(n+1).fill(0).map(()=> new Array(amount + 1).fill(0)) 
    for(let i = 0; i <= n; i++) {
        dp[i][0] = 1
    }
    for(let i = 1; i <= n; i++){
        for(let j = 1 ; j<= amount; j++) {
            if(j - coins[i-1] >= 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]]
            }else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[n][amount]
};
// 压缩状态优化
var change = function(amount, coins) {
    let n = coins.length;
    let dp  = new Array(amount + 1).fill(0);
    dp[0] = 1
    for(let i = 0; i < n; i++){
        for(let j = 1 ; j<=amount; j++) {
            if(j - coins[i] >= 0) {
                dp[j] = dp[j] + dp[j-coins[i]]
            }
        }
    }
    return dp[amount]
};