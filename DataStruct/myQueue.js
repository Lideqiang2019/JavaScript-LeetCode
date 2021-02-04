class Queue{
    constructor(){
        this.queue = [];
    }
    enQueue(val){
        this.queue.push(val);
    }
    deQueue(){
        return this.queue.shift();
    }
    getHead(){
        return this.queue[0];
    }
    getCount(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
}

/**
 * 因为单链队列在出队操作的时候需要 O(n) 的时间复杂度，所以引入了循环队列。循环队列的出队操作平均是 O(1) 的时间复杂度。
 */
class SqQueue{
    constructor(length){
        this.first = 0; // 记录队首元素，循环队列是有长度的，允许队列中间有空 [0,1(last), null, 2(first),3]
        this.last = 0; // 记录对尾元素
        this.queue = new Array(length); // +1防止出现越界
        this.size = 0; // 记录队列中元素的个数
    }
    enQueue(val){
        // 元素入队，先判断一下队列是否满了
        if(this.isFull()){
            // 扩容
            this.resize((this.queue.length-1)*2);
        }
        // 插入元素
        this.queue[this.last] = val;
        this.size++;
        this.last = (this.last + 1)%this.queue.length;
    }
    deQueue(){
        if(this.isEmpty()){
            throw Error('队列为空');
        }
        let r = this.queue[this.first];// 记录出队元素
        this.queue[this.first] = null;
        this.first = (this.first + 1)%this.queue.length;
        this.size--;
        // 如果队中元素很少，则减小队列，以节省空间。
        // 为了保证不浪费空间，在队列空间等于总长度四分之一时
        // 且不为 2 时缩小总长度为当前的一半
        return r;
    }
    getHead(){
        if(this.isEmpty()){
            throw Error('队列为空！')
        }
        return this.queue[this.first];
    }
    getCount(){
        return this.size;
    }
    getLength(){
        return this.queue.length-1;
    }
    resize(length){
        // 扩容
        let q = new Array(length);
        for(let i=0;i<length;i++){
            // 将队列值转移至新的队列
            q[i] = this.queue[(i + this.first)%this.queue.length];
        }
        this.queue = q;
        this.first = 0;
        this.last = this.size;
    }
    isEmpty(){
        return this.size===0;
        // return this.first == this.last
    }
    isFull(){
        return this.size === this.queue.length;
        // return (this.last+1)%this.queue.length === this.first;s
    }
}

let queue = new Queue(4);
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.deQueue();
queue.deQueue();
queue.enQueue(5);
queue.enQueue(6);

console.log(queue,queue.getCount());
console.log(queue.getHead());
