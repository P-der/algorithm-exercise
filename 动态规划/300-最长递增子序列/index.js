/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划的方法
var lengthOfLIS = function(nums) {
    let dp = nums.map(i => 1);
    let res = 1;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i]> nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1)
                res = Math.max(dp[i], res);
            }
        }
    }
    return res;
};
// 二分搜索算法
var lengthOfLIS = function(nums) {
    let top = nums.map(i => 0);
    let piles  = 0; //堆数

    for(let i = 0; i < nums.length; i++){
        let poker = nums[i];

        let left = 0;
        let right = piles;
        while(left < right) {
            let mid = Math.floor((left + right) / 2);
            if(top[mid] > poker) {
                right = mid;
            }else if(top[mid] < poker) {
                left = mid + 1
            }else {
                right = mid
            }
        }
        if(left == piles) {
            piles++
        }
        top[left] = poker;
    }
    return piles;
};