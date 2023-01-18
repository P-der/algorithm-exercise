// https://leetcode.cn/problems/subsets/
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