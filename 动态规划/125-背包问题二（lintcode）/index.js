// https://www.lintcode.com/problem/125/
var backPackII = function(w,n, wt, v) {
    let dp = new Array(n+1).fill(0).map(()=> new Array(w+1).fill(0));
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j<= w; j++) {
            if(j - wt[i-1] < 0) {
                dp[i][j] = dp[i-1][j]
            }else {
                dp[i][j] = Math.max(dp[i-1][j - wt[i-1]] + v[i-1], dp[i-1][j])
            }
            
        }
    }
    return dp[n][w]
  }