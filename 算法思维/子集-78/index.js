// https://leetcode.cn/problems/subsets/
// 数学归纳
var subsets = function(nums) {
    if(!nums.length)  return [[]]
    let n = nums.pop();
    let res = subsets(nums);
    let size = res.length;
    for(let i = 0; i < size; i++) {
        res.push([...res[i],n])
    }
    return res
};
// 回溯算法
var subsets = function(nums) {
    let res = []
    let track = []
    backtrack(nums, 0 , track)
    return res
    function backtrack(nums, start, track) {
        res.push([...track])
        for(let i = start; i < nums.length; i++) {
            track.push(nums[i])
            backtrack(nums, i+1, track)
            track.pop()
        }
    }
};