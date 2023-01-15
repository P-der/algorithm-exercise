// https://leetcode.cn/problems/longest-palindromic-subsequence/
var longestPalindromeSubseq = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(0).map(()=> new Array(n).fill(0))
    for(let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    for(let i = n-2; i >=0; i--) {
        for(let j = i+1; j< n; j++) {
            if(s[i]=== s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2
            }else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    } 
    return dp[0][n-1]
};