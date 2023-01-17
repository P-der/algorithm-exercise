// https://leetcode.cn/problems/longest-common-subsequence/
// 暴力动态规划
var longestCommonSubsequence = function(text1, text2) {
    function dp(i ,j) {
        if(i == -1 || j== -1) {
            return 0
        }
        if(text1[i]=== text2[j]) {
            return dp(i-1, j-1) + 1
        }else  {
            return Math.max(dp(i, j-1), dp(i-1, j))
        }
    }
    return dp(text1.length -1, text2.length -1)
};
// 使用 dp Table
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let dp = new Array(m+1).fill(0).map(()=> new Array(n+1).fill(0)); // fill 需要注意引用值时是复制，会共用同一个引用
    for(let i = 1; i <= m ; i++) {
        for(let j = 1; j <= n; j++) {
            if(text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1]+1
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m][n]
};