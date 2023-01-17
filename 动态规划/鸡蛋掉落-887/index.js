// https://leetcode.cn/problems/super-egg-drop/
var superEggDrop = function(k, n) {
    let memo = {}
    function dp(k,n) {
        if(k == 1) return n;
        if(n == 0) return 0;
        let key = `${k}&${n}`
        if(key in memo) return memo[key];
        let res = Infinity;
        for(let i = 1; i <= n ; i++) {
            res = Math.min(res, Math.max(dp(k, n-i), dp(k-1, i-1))+1) // 递归分情况
        }
        memo[key] = res
        return res
    }
    return dp(k,n)
};
// 二分搜索优化
var superEggDrop = function(k, n) {
    let memo = {}
    function dp(k,n) {
        if(k == 1) return n;
        if(n == 0) return 0;
        let key = `${k}&${n}`
        if(key in memo) return memo[key];
        let res = Infinity;
        
        let lo = 1;
        let hi = n;
        while(lo <= hi) {
            let mid = Math.floor((lo+hi)/2);
            let broken = dp(k-1, mid-1);
            let not_broken = dp(k, n-mid)
            if(broken > not_broken) {
                hi = mid-1
                res = Math.min(res, broken + 1)
            }else {
                lo = mid+ 1
                res = Math.min(res,not_broken +1)
            }
        }

        memo[key] = res
        return res
    }

    return dp(k,n)
};
// dp 优化
var superEggDrop = function(k, n) {
    let dp = new Array(k+1).fill(0).map(()=> new Array(n+1).fill(0))
    let m = 0;
    while(dp[k][m] < n) {
        m++
        for(let i = 1; i<=k; i++ ) {
            dp[i][m] = dp[i][m-1] + dp[i-1][m-1] + 1
        }
    }
    return m;
};