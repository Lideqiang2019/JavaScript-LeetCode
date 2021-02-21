// let dic= {}
// dic['a'] = 1
// dic['b'] = 2
// console.log(dic)
// delete dic['b']
// console.log(dic)

var RandomizedSet = function() {
    this.nums = []
    this.valToKey = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // 如果val已经存在
    if(this.valToKey[val]!==undefined){
        return false
    }
    // 如果不存在，应该val放入nums中，并且valToKey记录
    this.valToKey[val] = this.nums.length // 记录新插入数据的索引
    this.nums.push(val)
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.valToKey[val]==undefined){
        // 如果不存在
        return false
    }
    // 数组删除一个数，如果要复杂度为O(1)，则应该借助ValToKey找到索引
    // 先记录要删除数据的索引，将其赋值至valToKey
    let index= this.valToKey[val]
    let len = this.nums.length-1
    this.valToKey[this.nums[len]] = index
    this.nums[index] = this.nums[len]
    this.nums.pop()
    delete this.valToKey[val]
    return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let len = this.nums.length
    return this.nums[Math.floor(Math.random() * len)]
};

var removeDuplicateLetters = function(s) {
    /**
     * 单调栈来解决保证字符的相对位置
     * 栈的特性，可以操作最近的元素
     * 普通去重，只要Hashmap就能解决，
     * 这里需要注意有是哪个要求：
     * 1. 去重
     * 2. 保证字符的相对顺序
     * 3. 字典序
     * 基于以上考虑，可以用inStack来维护
     */
    let stk = [] // 用于存放结果
    let stack = [] // 单调栈
    let inStack = [] // 用于判断是否为重复的字符
    let count = []
    for(let c of s.split('')){
        count[c]? count[c]++: count[c] = 1
    }

    for(let c of s.split('')){
        count[c]-- 
        if(stack.includes(c)==false){
            while(stack.length && stack[stack.length-1]>c && count[stack[stack.length-1]]){
                // 后面还有c那么可以pop，否则就不pop
                stack.pop()
                // 要更改inStack，因为当前的字符不在stack中了
            }
            stack.push(c)
        }
         
    }

    while(stack.length){
        stk.push(stack.pop())
    }
    return stk.reverse().join('')
};

console.log(removeDuplicateLetters("bcac"))

/**
 * 剑指 Offer 59 - II. 队列的最大值
 */
var MaxQueue = function() {
    /**
     * 队列的最大值，而且时间复杂度为O(1),查找O(1)需要用hashmap，其实是一种优先队列,记录max的index
     */
    this.queue = []
    this.dequeue = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    // dequeue中的队首元素就是最大的值
    if(this.dequeue.length!==0){
        return this.dequeue[0]
    }
    return -1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    // 加入新元素,对于queue直接加入即可，同时维护单调队列
    this.queue.push(value)
    // 将比当前值小的都pop出去
    while(this.dequeue.length!==0 && this.dequeue[this.dequeue.length-1]<value){
        this.dequeue.pop()
    }
    this.dequeue.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    // 对于queue直接pop即可，但是deque维护这queue的最大值，如果queue的pOp值是最大值，应该将dequeue也shift出去
    if(!this.queue.length) return -1
    let val  = this.queue.shift()
    if(val === this.dequeue[0]){
       this.dequeue.shift()
    }
    return val
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */