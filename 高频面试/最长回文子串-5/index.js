// https://leetcode.cn/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '';
    for(let i = 0; i < s.length;i++) {
        let s1 = palindrome(s, i, i)
        let s2 = palindrome(s, i, i+1)
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }
    return res
};

function palindrome(s, l, r) {
    while(l >= 0 && r < s.length && s[l]== s[r]) {
        l--
        r++
    }
    return s.substr(l+1, r-l-1)
}