/**
 * 
 * @param {*} head 
 * 382. 链表随机节点
给定一个单链表，随机选择链表的一个节点，并返回相应的节点值。保证每个节点被选的概率一样。

进阶:
如果链表十分大且长度未知，如何解决这个问题？你能否使用常数级空间复杂度实现？

示例:

// 初始化一个单链表 [1,2,3].
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
Solution solution = new Solution(head);

// getRandom()方法应随机返回1,2,3中的一个，保证每个元素被返回的概率相等。
solution.getRandom();
 */

var Solution = function(head) {
    this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let p = this.head;
    let res = 0;
    let i= 0;
    while(p!=null){
        let r = Math.floor(Math.random()*(++i));
        if(r===0){
            res = p.val;
        }
        p = p.next;
    }
    return res;
};


function getRandom(k){
    let res = new Array(k);
    let p = head;
    // base case
    for(let j=0;j<k&&p!=null;j++){
        res[j] = p.val;
        p = p.next;
    }

    let i = k;
    while(p!=null){
        let r = Math.floor(Math.random()*(++i));
        if(r<k){
            res[r] = p.val;
        }
        p = p.next;
    }
    return res;


}