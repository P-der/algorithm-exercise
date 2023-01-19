// https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {

    let left = 0
    let right= 1
    weights.forEach(w => {
        left = Math.max(w, left)
        right += w
    })
    while(left < right) {
        let mid = Math.floor((left+right)/2)
        if(canFinish(weights, days, mid)) {
            right = mid
        }else {
            left = mid+1
        }
    }
    return left
};
function canFinish(weights, days, cap ) {
    let i = 0;
    for(let d = 0; d < days; d++) {
        let maxCap = cap;
        while((maxCap -= weights[i]) >= 0) {
            i++
            if(i == weights.length) return true
        }
    }
    return false
}