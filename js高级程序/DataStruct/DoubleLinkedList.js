class Node{
    constructor(val){
        this.next = null;
        this.pre = null;
        this.val = val;
    }
}

class DoubleLinkedList{
    constructor(){
        this.size = 0; // 链表长度
        this.dumpyHead = new Node('head'); // 虚拟头结点 
        this.dumpyTail = new Node('tail');
        this.dumpyHead.next = this.dumpyTail;
        this.dumpyTail.pre = this.dumpyHead;
    }
    insert(val,item){
        // 在哪里插入一个val,先根据findNode找到,在其后插入
        let curNode = this.findNode(item);
        let newNode = new Node(val);
        newNode.next = curNode.next;
        newNode.pre = curNode;
        curNode.next.pre = newNode;
        curNode.next = newNode;
        this.size++;
    }
    findNode(item){
        let node = this.dumpyHead;
        while(node && node.val!==item){
            node = node.next;
        }
        return node;
    }
    remove(item){
        let curNode = this.findNode(item);
        curNode.pre.next = curNode.next;
        curNode.next.pre = curNode.pre;
        curNode.pre = null;
        curNode.next = null;
        this.size--;
    }
    display(){
        let node = this.dumpyHead;
        while(node.next!=null){
            console.log(node.next.val);
            node = node.next; 
        }
    }
    displayReverse(){
        let node = this.dumpyTail;
        while(node.pre){
            console.log(node.pre.val);
            node = node.pre; 
        }
    }
}

let myLinkedList = new DoubleLinkedList();
myLinkedList.insert(0,'head');
myLinkedList.insert(1,0);
myLinkedList.insert(2,1);
// myLinkedList.display();
myLinkedList.insert(3,1);
// myLinkedList.display();
myLinkedList.remove(3);
myLinkedList.display();
myLinkedList.displayReverse();