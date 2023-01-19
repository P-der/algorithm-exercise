// https://leetcode.cn/problems/super-pow/

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const base = 1337
var superPow = function(a, b) {
    if(!b.length ) return 1;
    let last = b.pop();

    let part1 = mypow(a, last)
    let part2 = mypow(superPow(a,b), 10)
    return (part1 * part2)%base
};
function mypow(a,k) {
    if(!k) return 1
    a%=base 
    if(k%2 === 1) {
        return (a * mypow(a,k-1)) % base
    }else {
        let p = mypow(a, k/2) 
        return (p*p)%base
    }
}