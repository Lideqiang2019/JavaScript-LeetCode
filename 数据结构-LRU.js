// 1. 定义一个链表
class LinkedNode{
    constructor(key,val){
        this.key = key
        this.val = val
        this.next = null
        this.pre = null
    }
}

// 融合双向链表和hashMap，实现get和put方法

class LRUCache{
    constructor(capacity){
        this.capacity = capacity
        this.hash = {}
        this.count = 0 // 缓存数
        this.dummyHead = new LinkedNode() // 虚拟头
        this.dummyTail = new LinkedNode() // 虚拟尾
        this.dummyHead.next = this.dummyTail
        this.dummyTail.pre = this.dummyHead
    }

    get(key){
        let node = this.hash[key]
        if(node==null){
            // 没有访问
            return -1
        }
        // moveToHead
        this.moveToHead(node)
        return node.val
    }

    put(key,val){
        let node = this.hash[key]
        // 如果Key存在
        if(node==null){
            // 判断是否溢出
            if(this.count===this.capacity){
                // 需要删除尾结点，即最近未使用的
                this.removeLRUItem()
            }
            let newNode = new LinkedNode(key,val)
            this.hash[key] = newNode
            this.addToHead(newNode)
            this.count++
        }else{
            node.val = val
            this.moveToHead(node)
        }
    }

    // 为了保证最近访问的在头部，制定一个方法
    moveToHead(node){
        // 取node,将node在链表中删除
        this.removeFromList(node)
        // 将node添加到头部
        this.addToHead(node)
    }

    removeFromList(node){
        let tmp1 = node.pre
        let tmp2 = node.next
        tmp1.next = tmp2
        tmp2.pre = tmp1
    }

    addToHead(node){
        node.next = this.dummyHead.next
        node.pre = this.dummyHead
        this.dummyHead.next.pre = node
        this.dummyHead.next = node
    }

    removeLRUItem(){
        let tail = this.popTail()
        delete this.hash[tail.key]
        this.count--
    }

    popTail(){
        // 获取最后的node
        let node = this.dummyTail.pre
        this.removeFromList(node)
        return node
    }


}

// class ListNode {
//     constructor(key, value) {
//       this.key = key
//       this.value = value
//       this.next = null
//       this.prev = null
//     }
//   }
  
// class LRUCache {
//     constructor(capacity) {
//         this.capacity = capacity
//         this.hash = {}
//         this.count = 0
//         this.dummyHead = new ListNode()
//         this.dummyTail = new ListNode()
//         this.dummyHead.next = this.dummyTail
//         this.dummyTail.prev = this.dummyHead
//     }

//     get(key) {
//         let node = this.hash[key]
//         if (node == null) return -1
//         this.moveToHead(node)
//         return node.value
//     }

//     put(key, value) {
//         let node = this.hash[key]
//         if (node == null) {
//         if (this.count == this.capacity) {
//             this.removeLRUItem()
//         }
//         let newNode = new ListNode(key, value)
//         this.hash[key] = newNode
//         this.addToHead(newNode)
//         this.count++
//         } else {
//             node.value = value
//             this.moveToHead(node)
//         }
//     }

//     moveToHead(node) {
//         this.removeFromList(node)
//         this.addToHead(node)
//     }

//     removeFromList(node) {
//         let temp1 = node.prev
//         let temp2 = node.next
//         temp1.next = temp2
//         temp2.prev = temp1
//     }

//     addToHead(node) {
//         node.prev = this.dummyHead
//         node.next = this.dummyHead.next
//         this.dummyHead.next.prev = node
//         this.dummyHead.next = node
//     }

//     removeLRUItem() {
//         let tail = this.popTail()
//         delete this.hash[tail.key]
//         this.count--
//     }

//     popTail() {
//         let tail = this.dummyTail.prev
//         this.removeFromList(tail)
//         return tail
//     }
// }

// let lru = new LRUCache(2)
// lru.put(1,'a')
// lru.put(2,'b')
// lru.put(3,'c')
// console.log('1',lru)
// console.log(lru.get(1))
// console.log('2',lru)

// let dic = {}
// dic[1] = 'a'
// console.log(dic[2]==null)
