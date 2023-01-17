// https://leetcode.cn/problems/edit-distance/
// 暴力解法
// leetcode 中 js 会超时
var minDistance = function(word1, word2) {
    function dp(i, j) {
        if(i== -1) {
            return j+1
        }
        if(j == -1) {
            return i+1
        }
        if(word1[i]=== word2[j]) {
            return dp(i-1, j -1)
        }else {
            return Math.min( dp(i,j-1)+1, dp(i-1, j)+1, dp(i-1, j-1) +1)
        }
    }
    return dp(word1.length-1, word2.length-1)
};
// 备忘录
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let memo = {};
    function dp(i, j) {
        let key = `${i}&${j}`;
        if(key in memo) {
            return memo[key]
        }
        if(i== -1) {
            return j+1
        }
        if(j == -1) {
            return i+1
        }
        if(word1[i]=== word2[j]) {
            memo[key] = dp(i-1, j -1)
        }else {
            memo[key] =  Math.min( dp(i,j-1)+1, dp(i-1, j)+1, dp(i-1, j-1) +1)
        }
        return memo[key]
    }
    return dp(m-1, n-1);
};
// DP Table 
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = new Array(m+1).fill(0).map(()=> new Array(n+1).fill(0))
    for(let i = 1; i <= m; i++ ) {
        dp[i][0] = i;
    }
    for(let j = 1; j <=n; j++) {
        dp[0][j] = j;
    }
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j<= n; j++) {
            if(word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            }else {
                dp[i][j] = Math.min( dp[i-1][j] + 1, dp[i-1][j-1]+1, dp[i][j-1]+1)
            }
        }
    }
    return dp[m][n];
};