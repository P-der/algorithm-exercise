// https://leetcode.cn/problems/sliding-window-maximum/
class MyQueue {
    constructor() {
        this.queue = []
    }
    push(n) {
        while(this.queue.length > 0 && this.queue[this.queue.length-1] < n) {
            this.queue.pop()
        }
        this.queue.push(n)
    }
    pop(n) {
        if(n === this.queue[0]) {
            this.queue.shift()
        }
    }
    max() {
        return this.queue[0]
    }
}
var maxSlidingWindow = function(nums, k) {
    let window = new MyQueue();
    let res = []
    for(let i = 0; i<nums.length;i++) {
        if(i < k-1) {
            window.push(nums[i])
        }else {
            window.push(nums[i])
            res.push(window.max())
            window.pop(nums[i-k+1])
        }
    }
    return res
};
// 如果把queue中存index，在leetcode中的表现会更快