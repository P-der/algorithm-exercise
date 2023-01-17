
// https://leetcode.cn/problems/lfu-cache/
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.keyToVal = new Map()
    this.keyToFreq =  new Map()
    this.freqTokeys =  new Map()
    this.cap = capacity
    this.minFreq  = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(!this.keyToVal.has(key)) {
        return -1
    }
    // 添加 key 对应的 freq
    this.increaseFreq(key)
    return this.keyToVal.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.cap <= 0) return;
    if(this.keyToVal.has(key)) {
        this.keyToVal.set(key, value)
        this.increaseFreq(key)
        return
    }

    if(this.cap <= this.keyToVal.size) {
        this.removeMinFreqKey();
    }

    this.keyToVal.set(key, value);
    this.keyToFreq.set(key, 1);
    if(!this.freqTokeys.has(1)) {
        this.freqTokeys.set(1, [])
    }
    this.freqTokeys.get(1).push(key)
    this.minFreq = 1
};
LFUCache.prototype.removeMinFreqKey = function() {
    let keyList = this.freqTokeys.get(this.minFreq)
    let deleteKey = keyList[0];
    keyList.shift();
    if(keyList.length === 0) {
        this.freqTokeys.delete(this.minFreq);
    }
    this.keyToVal.delete(deleteKey)
    this.keyToFreq.delete(deleteKey)
}
LFUCache.prototype.increaseFreq = function(key) {
    let freq = this.keyToFreq.get(key)
    this.keyToFreq.set(key, freq+1)
    let newKeyList = this.freqTokeys.get(freq).filter((i)=> i!== key);// 需要修改
    this.freqTokeys.set(freq, newKeyList);

    if(!this.freqTokeys.has(freq+1)) {
        this.freqTokeys.set(freq+1, [])
    }
    this.freqTokeys.get(freq+1).push(key)

    if(!this.freqTokeys.get(freq).length) {
        this.freqTokeys.delete(freq)
        if(freq === this.minFreq) {
            this.minFreq ++
        }
    }
}
// test
// let lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // 返回 1 // cache=[1,2], cnt(2)=1, cnt(1)=2

// lfu.put(3, 3);   // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // 返回 -1（未找到）
// lfu.get(3);      // 返回 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // 返回 -1（未找到）
// lfu.get(3);      // 返回 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // 返回 4
//                  // cache=[3,4], cnt(4)=2, cnt(3)=3
