// https://leetcode.cn/problems/nim-game/

/**
 * @param {number} n
 * @return {boolean}
 */
// 如果是 4 的倍数就输了，让对手一直是4的倍数就能赢
var canWinNim = function(n) {
    return n % 4 != 0
};