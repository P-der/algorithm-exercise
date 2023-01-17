
class Node {
    constructor(key, value) {
      this.key = key     
      this.value = value
      this.next = null
      this.prev = null
    }
  }
class DoubleList {
    constructor() {
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0
    }
    addLast(x) {
        x.prev = this.tail.prev;
        x.next = this.tail;
        this.tail.prev.next = x;
        this.tail.prev = x;
        this.size ++
    }
    remove(x) {
        x.prev.next = x.next;
        x.next.prev = x.prev;
        this.size --
    }
    removeFirst() {
        if(this.head.next === this.tail) {
            return null
        }
        let first = this.head.next;
        this.remove(first)
        return first
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.map = {};
    this.cache = new DoubleList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map[key]) {
        return -1
    }
    this.makeRecently(key)
    return this.map[key].value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map[key]) {
        this.deleteKey(key)
        this.addRecently(key, value)
        return
    }
    if(this.cap === this.cache.size) {
        this.deleteLeastRecently()
    }
    this.addRecently(key,value)
};
// 更新排序
LRUCache.prototype.makeRecently = function (key) {
    let x = this.map[key];
    this.cache.remove(x)
    this.cache.addLast(x)
}
// 添加节点
LRUCache.prototype.addRecently = function(key, val) {
    let x = new Node(key, val);
    this.cache.addLast(x);
    this.map[key] = x
}
// 删除节点
LRUCache.prototype.deleteKey = function(key) {
    let x = this.map[key]
    this.cache.remove(x)
    delete this.map[key]
}
// 溢出删除老节点
LRUCache.prototype.deleteLeastRecently = function() {
    let d = this.cache.removeFirst();
    delete this.map[d.key]
}
