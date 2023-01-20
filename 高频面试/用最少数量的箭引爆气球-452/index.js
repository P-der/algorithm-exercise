// https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=> a[1]-b[1])
    let count = 1
    let end = points[0][1]
    points.forEach(point => {
        if(point[0]> end) {
            count ++
            end = point[1]
        }
    })
    return count
};