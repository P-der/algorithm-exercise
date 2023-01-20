// https://leetcode.cn/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针法
var trap = function(height) {
    if(!height.length) return 0;
    let left = 0;
    let right = height.length-1
    let leftMax = height[0]
    let rightMax = height[right]
    let res = 0
    while(left <= right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if(leftMax < rightMax) {
            res += leftMax - height[left]
            left ++
        }else {
            res += rightMax -height[right]
            right -- 
        }
    }
    return res
};