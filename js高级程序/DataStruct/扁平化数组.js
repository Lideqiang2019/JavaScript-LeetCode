/**
 * 341. 扁平化嵌套列表迭代器
 * @param {*} nestedList 
 */
// 解法1：使用递归和队列解决，但是存在的问题是：如果N叉树较大，容易导致this.res过大，next很慢，因为shift要遍历，计算也慢
var NestedIterator = function(nestedList) {
    this.res = []; // 用于存储树的所有扁平化的节点
    this.traverse(nestedList); // 调用dfs算法，将树的节点放入res中
};

NestedIterator.prototype.traverse = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].isInteger()){
            // 如果当前是Integer
            this.res.push(arr[i].getInteger());
        }else{
            // 如果是List，那就递归进去调用
            this.traverse(arr[i].getList());
        }
    }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.res.length>0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.res.shift();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

/**
 * var NestedIterator = function(nestedList) {
    this.list = nestedList;
};

NestedIterator.prototype.hasNext = function() {
    // 让在调用next之前一定会先用hasNext判断是否还有下一个元素是否存
    // 所以只要将下一元素（integer或者list）加入list即可
    while(this.list.length && !this.list[0].isInteger()){
        let first = this.list.shift().getList();
        console.log(first,this.list);
        for(let i = first.length-1;i>=0;i--){
            this.list.unshift(first[i]);
        }
    }
    return !!this.list.length;
};


NestedIterator.prototype.next = function() {
    return this.list.shift().getInteger();
};
*/