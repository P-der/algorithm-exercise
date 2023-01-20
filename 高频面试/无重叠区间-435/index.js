// https://leetcode.cn/problems/non-overlapping-intervals/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=> a[1]-b[1])
    let end = intervals[0][1]
    let count = 1
    intervals.forEach(interval => {
        if(interval[0] >= end) {
            count ++;
            end = interval[1]
        }
    })
    return intervals.length - count
};