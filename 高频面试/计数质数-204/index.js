// https://leetcode.cn/problems/count-primes/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n===0|| n===1) return 0
    let isPrime = new Array(n).fill(true)
    for(let i = 2; i*i<=n; i++) { // 减少范围
        if(isPrime[i]) {
            for(let j = i*i; j<n; j+=i) { // 减少范围
                isPrime[j] = false
            }
        }
    }
    return isPrime.reduce((pre, next) => {
        if(next) {
             pre++
        }
        return pre
    }, -2)
};