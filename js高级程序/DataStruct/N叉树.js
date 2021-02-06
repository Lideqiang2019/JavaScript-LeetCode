/**
 * https://www.jb51.net/article/144863.htm
 */
class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}
class MultiwayTree {
    constructor() {
        this._root = null;
    }
    //深度优先遍历
    traverseDF(callback) {
        let stack = [], found = false;
        stack.unshift(this._root);
        let currentNode = stack.shift();
        while (!found && currentNode) {
            found = callback(currentNode) === true ? true : false;
            if (!found) {
                stack.unshift(...currentNode.children);
                currentNode = stack.shift();
            }
        }
    }
    //广度优先遍历
    traverseBF(callback) {
        let queue = [], found = false;
        queue.push(this._root);
        let currentNode = queue.shift();
        while (!found && currentNode) {
            found = callback(currentNode) === true ? true : false;
            if (!found) {
                queue.push(...currentNode.children)
                currentNode = queue.shift();
            }
        }
    }
    contains(callback, traversal) {
        traversal.call(this, callback);
    }
    add(data, toData, traversal) {
        let node = new Node(data)
        if (this._root === null) {
            this._root = node;
            return this;
        }
        let parent = null,
            callback = function (node) {
                if (node.data === toData) {
                    parent = node;
                    return true;
                }
            };
        this.contains(callback, traversal);
        if (parent) {
            parent.children.push(node);
            node.parent = parent;
            return this;
        } else {
            throw new Error('Cannot add node to a non-existent parent.');
        }
    }
    remove(data, fromData, traversal) {
        let parent = null,
            childToRemove = null,
            callback = function (node) {
                if (node.data === fromData) {
                    parent = node;
                    return true;
                }
            };
        this.contains(callback, traversal);
        if (parent) {
            let index = this._findIndex(parent.children, data);
            if (index < 0) {
                throw new Error('Node to remove does not exist.');
            } else {
                childToRemove = parent.children.splice(index, 1);
            }
        } else {
            throw new Error('Parent does not exist.');
        }
        return childToRemove;
    }
    _findIndex(arr, data) {
        let index = -1;
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i].data === data) {
                index = i;
                break;
            }
        }
        return index;
    }
}

var tree = new MultiwayTree();
tree.add('a')
    .add('b', 'a', tree.traverseBF)
    .add('c', 'a', tree.traverseBF)
    .add('d', 'a', tree.traverseBF)
    .add('e', 'b', tree.traverseBF)
    .add('f', 'b', tree.traverseBF)
    .add('g', 'c', tree.traverseBF)
    .add('h', 'c', tree.traverseBF)
    .add('i', 'd', tree.traverseBF);
console.group('traverseDF');
tree.traverseDF(function (node) {
    console.log(node.data);
});
console.groupEnd('traverseDF');
console.group('traverseBF');
tree.traverseBF(function (node) {
    console.log(node.data);
});
console.groupEnd('traverseBF');
// 深度优先查找
console.group('contains1');
tree.contains(function (node) {
    console.log(node.data);
    if (node.data === 'f') {
        return true;
    }
}, tree.traverseDF);
console.groupEnd('contains1')
// 广度优先查找
console.group('contains2');
tree.contains(function (node) {
    console.log(node.data);
    if (node.data === 'f') {
        return true;
    }
}, tree.traverseBF);
console.groupEnd('contains2');
tree.remove('g', 'c', tree.traverseBF);