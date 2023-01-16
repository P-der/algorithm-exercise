// https://www.lintcode.com/problem/867/
// 暴力解法 会超时
var maxA = function(n) {
    function dp(n, a_num, copy) {
        if(n <= 0) return a_num;
        return Math.max(
            dp(n-1, a_num + 1, copy), // +a
            dp(n -1, a_num + copy, copy), // 复制
            dp(n-2, a_num, a_num) // A + V
        )
    }
    return dp(n, 0, 0)
  }
// 加入字典 还是会超时
var maxA = function(n) {
    let memo = {}
    function dp(n, a_num, copy) {
        let key = `${n}&${a_num}&${copy}`
        if(key in memo) return memo[key]
        if(n <= 0) return a_num;
        memo[key] =  Math.max(
            dp(n-1, a_num + 1, copy), // +a
            dp(n -1, a_num + copy, copy), // 复制
            dp(n-2, a_num, a_num) // A + V
        )
        return memo[key]
    }
    return dp(n, 0, 0)
}
// 优化路径
var maxA = function(n) {
    let dp = new Array(n+1).fill(0);
    for(let i = 1;i <=n ; i++) {
        // A
        dp[i] = dp[i-1] + 1; 
        // c + v  的所有情况对比
        for(let j = 2; j < i; j++) {
            dp[i] =  Math.max(dp[i], dp[j-2]*(i-j+1)) // 取最大的
        }
    }
    return dp[n]
}