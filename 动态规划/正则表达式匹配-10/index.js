// https://leetcode.cn/problems/regular-expression-matching/

var isMatch = function(s, p) {
    let memo = {}
    let m = s.length;
    let n = p.length;
    return dp(s, 0, p, 0) 
    function dp(s, i, p, j) {
        if(j === n) {
            return i === m
        }
        if(i == m) {
            if((n-j)%2 === 1) {
                return false
            }
            for(;j+1 < n; j+=2) {
                if(p[j+1]!= '*') {
                    return false;
                }
            }
            return true;
        }
        let key = `${i}&${j}`
        if(key in memo) return memo[key]
        let res = false;
        if(s[i]===p[j] || p[j]==='.') {
            if(j < n -1 && p[j+1] == "*") {
                res =  dp(s, i, p, j+2) || dp(s, i+1, p, j)
            }else {
                res = dp(s, i+1, p, j+1)
            }
        }else {
            if(j < n -1 && p[j+1] == "*") {
                res =  dp(s, i,p ,j+2)
            }else {
                res = false;
            }
        }
        memo[key] = res;
        return res;
    }
};