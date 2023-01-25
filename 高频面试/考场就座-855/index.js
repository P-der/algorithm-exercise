// https://leetcode.cn/problems/exam-room/

/**
 * @param {number} n
 */
var ExamRoom = function(n) {
    this.startMap = {}
    this.endMap = {}
    this.n = n;
    this.pq = [[-1, n]];

};
ExamRoom.prototype.addInterval = function(intv) {
    this.pq.push(intv)
    this.startMap[intv[0]] = intv;
    this.endMap[intv[1]]= intv;
}
function distance(intv, n) {
    let x = intv[0];
    let y = intv[1];
    if (x == -1) return y;
    if (y == n) return n - 1 - x;
    // 中点和端点之间的长度
    return Math.floor((y - x)/2);
}
ExamRoom.prototype.removeInterval = function(intv) {
    this.pq = this.pq.filter(([a,b])=> {
        return a !== intv[0] && b !== intv[1]
    })
    delete this.startMap[intv[0]]
    delete this.endMap[intv[1]];
}
/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    // 从有序集合拿出最长的线段
    this.pq.sort((a,b)=> {
        let A = distance(a, this.n)
        let B = distance(b, this.n)
        if(A === B)  {
            return b[0]-a[0]
        }
        return A - B;
    });
    let longest = this.pq.pop();
    let x = longest[0];
    let y = longest[1];
    let seat;
    if (x == -1) { // 情况一
        seat = 0;
    } else if (y == this.n) { // 情况二
        seat = this.n - 1;
    } else { // 情况三
        seat = (y - x) / 2 + x;
    }
    seat = Math.floor(seat)
    // 将最长的线段分成两段
    let left = [x, seat];
    let right = [seat, y];
    this.removeInterval(longest);
    this.addInterval(left);
    this.addInterval(right);
   
    return seat;
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    // 将 p 左右的线段找出来
    let right = this.startMap[p];
    let left = this.endMap[p];
    // 合并两个线段成为一个线段
    let merged = [left[0], right[1]];
    this.removeInterval(left);
    this.removeInterval(right);
    this.addInterval(merged);
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */