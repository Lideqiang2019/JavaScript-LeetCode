let arr = [1,2,3,2,3,4].sort((a,b)=>(a>b)?1:(a<b)?-1:0);
console.log(arr);

// 1. 移除重复的元素, 将不重复的元素，移到前面，返回slow之前的即可
function removeDuplicate(arr){
    let slow = 0,fast = 0;
    while(fast<arr.length){
        if(arr[slow]!==arr[fast]){
            slow++;
            arr[slow] = arr[fast];
        }
        fast++;
    }
    return arr.slice(0,slow+1);
}

// console.log(removeDuplicate(arr));

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.size=0;
        this.dumpyHead = new Node();
    }

    insertNode(val,item){
        let newNode = new Node(val);
        let curNode = this.findNode(item);
        newNode.next = curNode.next;
        curNode.next = newNode;
        this.size++;
        // let curNode = this.findNode(item);
        // let newNode = new Node(val);
        // let tmp = curNode.next;
        // curNode.next = newNode;
        // newNode.next = tmp;
        // this.size++;
    }
    findNode(item){
        let node = this.dumpyHead;
        while(node.val!=item){
            node = node.next;
        }
        return node;
    }
    display(){
        let node = this.dumpyHead;
        let res = [];
        while(node.next){
            res.push(node.next.val);
            node = node.next;
        }
        return res;
    }
    removeDuplicateNodes(){
        this.dumpyHead = this._removeDuplicateNodes(this.dumpyHead);
    }
    _removeDuplicateNodes(root){
        let slow=root,fast=root;
        while(fast!=null){
            if(slow.val!=fast.val){
                slow = slow.next;
                slow.val = fast.val;
            }
            fast = fast.next;
        }
        // 把后面的都折断
        slow.next = null;
        return root;
    }
}

let myLinkedList = new LinkedList();
myLinkedList.insertNode(0);
myLinkedList.insertNode(1,0);
myLinkedList.insertNode(2,1);
myLinkedList.insertNode(3,2);
myLinkedList.insertNode(4,3);
myLinkedList.insertNode(3,3);
console.log(myLinkedList.display());
myLinkedList.removeDuplicateNodes();
console.log(myLinkedList.display());


let arr1 = [1,2,3,4,4,3];
function removeElement(arr,val){
    let slow = 0,fast = 0;
    while(fast<arr.length){
        if(arr[fast]!==val){
            arr[slow] = arr[fast];
            slow++;
        }
        fast++;
    }
    return arr.slice(0,slow);
}

let arr2 = [1,2,0,3,0];
function moveZeroes(arr){
    let slow = 0,fast = 0;
    while(fast<arr.length){
        if(arr[fast]!==0){
            arr[slow] = arr[fast];
            slow++;
        }
        fast++;
    }
    for(let i=slow;i<arr.length;i++){
        arr[i] = 0
    }
    return arr;
}

console.log(moveZeroes(arr2));
