// https://leetcode.cn/problems/house-robber-ii/
var rob = function(nums) {
    let n = nums.length;
    if(n===1) return nums[0]
    return Math.max(robRange(nums, 0 , n-2), robRange(nums, 1, n-1))
};
var robRange = function(nums, start, end) {
    let dp_i = 0
    let dp_i_1 = 0;
    let dp_i_2 = 0
    for(let i = end; i >=start; i--) {
        dp_i = Math.max(dp_i_1, nums[i]+dp_i_2);
        dp_i_2 = dp_i_1
        dp_i_1 = dp_i;
    }
    return dp_i
}