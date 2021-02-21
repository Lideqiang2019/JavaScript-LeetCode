class LinkedList{
    constructor(key,val){
        this.key = key;
        this.val = val;
        this.pre = null;
        this.next = null;
        this.freq = 1; // 默认链表节点的频率为1
    }
}

class DoubleLinkedList{
    constructor(){
        this.dumpyHead = new LinkedList();
        this.dumpyTail = new LinkedList();
        this.dumpyHead.next = this.dumpyTail;
        this.dumpyTail.pre = this.dumpyHead;
    }
    addToHead(node){
        node.next = this.dumpyHead.next;
        node.pre = this.dumpyHead;
        this.dumpyHead.next.pre = node;
        this.dumpyHead.next = node;
    }
    removeFromList(node){
        node.pre.next = node.next;
        node.next.pre = node.pre;
        node.next = null;
        node.pre = null;
    }
}

class LFUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.count = 0;
        // cacheMap
        this.cacheMap = new Map(); // 用于存储链表节点
        this.freqMap = new Map(); // 用于存储freq - 链表，不同的频率来分段存储链表，时间是链表头是先添加的
        this.minFreq = 0;  // 用于找到最小使用频率的节点
    }

    get(key){
        if(!this.cacheMap.has(key)){
            return -1;
        }
        let node = this.cacheMap.get(key);
        this.incFreq(node);
        return node.val;
    }

    put(key,val){
        if (this.capacity === 0) {
            return;
        }
        let node = this.cacheMap.get(key);
        if(node){
            node.val = val;
            this.incFreq(node);
        }else{
            if(this.capacity===this.count){
                // 缓存满了，删除
                let minFreqLinkList = this.freqMap.get(this.minFreq);
                this.cacheMap.delete(minFreqLinkList.dumpyTail.pre.key);
                minFreqLinkList.removeFromList(minFreqLinkList.dumpyTail.pre);
                this.count--;
            }
            let newNode = new LinkedList(key,val);
            this.cacheMap.set(key,newNode);
            let linkList = this.freqMap.get(1);
            if(!linkList){
                linkList = new DoubleLinkedList();
                this.freqMap.set(1,linkList);
            }
            linkList.addToHead(newNode);
            this.count++;
            this.minFreq = 1;
        }
    }

    incFreq(node){
        // 把原频率对应链表中的节点删除，并且添加到新的节点，如果是最小频率点，还应该更新最小频率
        let freq = node.freq;
        console.log(freq);
        let linkList = this.freqMap.get(freq);
        console.log(node,"11111",linkList);
        linkList.removeFromList(node);

        if(freq===this.minFreq && linkList.dumpyHead.next===linkList.dumpyTail){
            this.minFreq = freq + 1;
        }

        node.freq++;
        linkList = this.freqMap.get(freq+1); // 新链表
        if(!linkList){
            linkList = new DoubleLinkedList();
            this.freqMap.set(freq + 1,linkList);
        }
        linkList.addToHead(node);
    }
}

/**
 * 定义节点
 * @param {*} key 
 * @param {*} val 
 */
// var Node = function (key, val) {
//     this.key = key
//     this.val = val
//     this.freq = 1 // 当前节点的 key 被使用的频率
//     this.pre = null // 前一个节点的指针
//     this.post = null // 后一个节点的指针
// }

// /**
//  * 定义双向链表
//  */
// var DoublyLinkedList = function () {
//     this.head = new Node() // 头节点
//     this.tail = new Node() // 尾节点
//     this.head.post = this.tail // 初始化时，头节点的后一个节点为尾节点
//     this.tail.pre = this.head // 初始化时，尾节点的前一个节点为头节点
// }

// DoublyLinkedList.prototype.removeNode = function (node) {
//     // 1. 将当前节点的前一个节点的 post 指针指向当前节点的 post 指针
//     node.pre.post = node.post
//     // 2. 将当前节点的后一个节点的 pre 指针指向当前节点的 pre 指针
//     node.post.pre = node.pre
// }

// DoublyLinkedList.prototype.addNode = function (node) {
//     // 为了方便理解，不妨设当前只有头尾节点以及需要插入的该节点
//     // 总的来说，就是分别处理该节点与头尾节点的 pre/post 指针
//     // 1. 将 该节点的后一个节点 设置为 头节点的后一个节点(即尾节点)
//     node.post = this.head.post
//     // 2. 将 尾节点的前一个节点 设置为 该节点
//     this.head.post.pre = node
//     // 3. 将头节点的后一个节点设置为该节点
//     this.head.post = node
//     // 4. 将该节点的前一个节点设置为头节点
//     node.pre = this.head
// }

// /**
//  * 定义 LFU 类
//  * @param {number} capacity
//  */
// var LFUCache = function (capacity) {
//     this.capacity = capacity // 总的容量
//     this.size = 0 // 当前已使用的容量
//     this.minFreq = 0 // 最小使用频率，为删除操作服务
//     this.cacheMap = new Map() // key-value node
//     this.freqMap = new Map() // 频率-(key，value，频率)
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LFUCache.prototype.get = function (key) {
//     // 缓存中没有这个 key，直接返回 -1
//     if (!this.cacheMap.has(key)) {
//         return -1
//     }
//     // 获取缓存
//     const node = this.cacheMap.get(key)
//     // 将该节点的频率 +1
//     this.incFreq(node)
//     // 返回该节点的值
//     return node.val
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LFUCache.prototype.put = function (key, value) {
//     // 若缓存容量为 0，直接返回
//     if (this.capacity === 0) {
//         return
//     }
//     // 获取缓存中 key 对应的节点
//     const node = this.cacheMap.get(key)
//     if (node) {
//         // 若节点存在，则只需要更新该节点的值以及频率
//         node.val = value
//         this.incFreq(node)
//     } else {
//         // 如果容量已被使用完，则需要移除 最不经常使用 的节点，以空出容量
//         if (this.capacity === this.size) {
//             // 获取最小使用频率所对应的双向链表
//             const minFreqLinkedList = this.freqMap.get(this.minFreq)
//             // 将该链表的尾节点的前一个节点移除(尾节点的前一个节点才是有效节点，尾节点充当哨兵作用)
//             this.cacheMap.delete(minFreqLinkedList.tail.pre.key)
//             minFreqLinkedList.removeNode(minFreqLinkedList.tail.pre)
//             this.size--
//         }
//         // 将该值封装成节点并放进 cacheMap 中
//         const newNode = new Node(key, value)
//         this.cacheMap.set(key, newNode)
//         // 同时需要将该节点插入 freqMap 中频率最小的双向链表中
//         // 获取使用频率为 1 的双向链表
//         let linkedList = this.freqMap.get(1)
//         // 若使用频率为 1 的双向链表是空的，则创建该链表并放进 freqMap 中
//         if (!linkedList) {
//             linkedList = new DoublyLinkedList()
//             this.freqMap.set(1, linkedList)
//         }
//         // 将新节点放入双向链表中，同时更新 size / minFreq
//         linkedList.addNode(newNode)
//         this.size++
//         this.minFreq = 1
//     }

//     /**
//      * @param {Node} node
//      */
// LFUCache.prototype.incFreq = function (node) {
//         // 总的来说，把该节点从旧频率对应的链表中移除，然后放进新频率对应的链表中,更新最小的minFreq
//         // 获取该节点的使用频率
//         let freq = node.freq
//         // 获取该使用频率(旧频率)对应的链表
//         let linkedList = this.freqMap.get(freq)
//         // 将该节点从旧频率对应的链表中移除
//         linkedList.removeNode(node)
//         // 同时满足以下两种情况时，更新 Freq 的值
//         // 1. 旧频率等于最小频率
//         // 2. 该链表为空链表
//         if (freq === this.minFreq && linkedList.head.post === linkedList.tail) {
//             this.minFreq = freq + 1
//         }
//         // 增加该节点的使用频率，姑且称为 新频率
//         node.freq++
//         // 获取新频率对应的链表
//         linkedList = this.freqMap.get(freq + 1)
//         // 如果链表为空，则需要新建链表，并将其放入 freqMap
//         if (!linkedList) {
//             linkedList = new DoublyLinkedList()
//             this.freqMap.set(freq + 1, linkedList)
//         }
//         // 将新频率的节点放进链表中
//         linkedList.addNode(node)
//     }
// };
let lfu = new LFUCache(2)
console.log('!!!')
lfu.put(1, 'a')
lfu.put(2, 'b')
console.log('1', lfu)
lfu.get(1)
console.log(lfu)
lfu.put(3,'c')
console.log(lfu)

