class Node{
    constructor(val){
        this.next = null;
        this.val = val;
    }
}

class LinkedList{
    constructor(){
        this.size = 0; // 链表长度
        this.dumpyHead = new Node(); // 虚拟头结点 
    }
    insert(val,item){
        // 在哪里插入一个val,先根据findNode找到,在其后插入
        let curNode = this.findNode(item);
        let newNode = new Node(val);
        let tmp = curNode.next;
        curNode.next = newNode;
        newNode.next = tmp;
        this.size++;
    }
    findNode(item){
        let node = this.dumpyHead;
        while(node.val!==item){
            node = node.next;
        }
        return node;
    }
    findPreNode(item){
        let node = this.dumpyHead;
        while((node.next!==null && node.next.val!==item)){
            node = node.next;
        }
        return node;
    }
    remove(item){
        let preNode = this.findPreNode(item);
        preNode.next = preNode.next.next;
        this.size--;
    }
    display(){
        let node = this.dumpyHead;
        while(node.next){
            console.log(node.next.val);
            node = node.next; 
        }
    }
    getSize(){
        return this.size;
    }
}

let myLinkedList = new LinkedList();
myLinkedList.insert(0);
myLinkedList.insert(1,0);
myLinkedList.insert(2,1);
// myLinkedList.display();
myLinkedList.insert(3,1);
// myLinkedList.display();
myLinkedList.remove(3);
myLinkedList.insert(5);
myLinkedList.display();
// console.log(myLinkedList.findPreNode(2));
console.log(myLinkedList.getSize());