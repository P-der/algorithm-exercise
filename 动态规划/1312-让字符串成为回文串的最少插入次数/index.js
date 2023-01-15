// https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/
// DP table
var minInsertions = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(0).map(()=> new Array(n).fill(0))
    for(let i  = n -2; i>=0 ;i-- ) {
        for(let j = i+1; j< n; j++) {
            if(s[i] == s[j]) {
                dp[i][j] = dp[i+1][j-1];
            }else {
                dp[i][j] = Math.min(dp[i+1][j], dp[i][j-1]) + 1
            }
        }
    }
    return dp[0][n-1]
};
// 压缩算法
var minInsertions = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(0);
    for(let i  = n -2; i>=0 ;i-- ) {
        let pre = 0;
        for(let j = i+1; j< n; j++) {
            let temp = dp[j];
            if(s[i] == s[j]) {
                dp[j] = pre;
            }else {
                dp[j] = Math.min(dp[j], dp[j-1]) + 1
            }
            pre = temp
        }
    }
    return dp[n-1];
};