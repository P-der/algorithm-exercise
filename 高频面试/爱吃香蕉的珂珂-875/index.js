// https://leetcode.cn/problems/koko-eating-bananas/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = piles.reduce((pre,next) => pre>next?pre:next)
    while(left < right) {
        let mid = Math.floor((left + right) /2)
        if(canFinish(piles ,mid, h)) {
            right = mid
        }else {
            left = mid+1
        }
    } 
    return left
};
function canFinish(piles, speed , h) {
    let time = piles.reduce((pre, next) => pre + timeOf(next, speed) ,0)
    return time <= h
}

function timeOf(n, speed) {
    return  Math.ceil(n / speed)
}