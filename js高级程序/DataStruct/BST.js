class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    /**
     * 构造二叉搜索树，实现一些方法，插入结点，删除结点（保证还是二叉搜索树），遍历二叉搜索树，获得最大最小值。二叉树的合理性
     * 
     */
    constructor(){
        this.size = 0;
        this.root = null;
    }
    insertNode(val){
        this.root = this._appChild(this.root,val);
    }
    removeNode(node){

    }
    _appChild(parentNode,val){ // 作用是将val添加到树的需要的位置
        if(parentNode==null){
            this.size++;
            return new Node(val);
        }
        if(parentNode.val>val){
            // 应该添加在左子树上
            parentNode.left = this._appChild(parentNode.left,val);
        }else{
            // 应该添加在右子树上
            parentNode.right = this._appChild(parentNode.right,val);
        }
        return parentNode;
    }

    preorderTraversal(node=this.root){
        if(node==null) return;
        console.log(node.val);
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
    }

    inorderTraversal(node=this.root){
        if(node==null) return;
        this.preorderTraversal(node.left);
        console.log(node.val);
        this.preorderTraversal(node.right);
    }

    postTraversal(node=this.root){
        if(node==null) return;
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
        console.log(node.val);
    }

    levelTraversal(){
        let queue = [this.root];
        let res = [];
        while(queue.length){
            let tmp = [];
            let len = queue.length;
            for(let i=0;i<len;i++){
                let node = queue.shift();
                tmp.push(node.val);
                if(node.left){
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);
                }
            }
            res.push(tmp);
        }
        return res;
    }

    isVaildBST(root,min,max){
        if(root==null) return true
        if(min!==null && root.val<=min) return false
        if(max!==null && root.val>=max) return false
    
        // 边界，左子树的边界在根节点，右字树的左边界在
        return isVaildBST(root.left,min,root) && isVaildBST(root.right,root,max)
    }

    isInBST(target){
        return this._isInBST(this.root,target)
    }
    // 查找一个结点是否存在
    _isInBST(root,target){
        if(root==null) return false;
        if(root.val==target) return true;
        if(root.val>target){
            return this._isInBST(root.left,target)
        }
        if(root.val<target){
            return this._isInBST(root.right,target)
        }
    }
    
    deleteNodeBST(key){
        this.root = this._deleteNodeBST(this.root,key);
    }

    _deleteNodeBST(root, key){
        if(root == null) return null;
        if(root.val ===key) {
            // 找到了，应该做点什么
            // 情况1.在边际
            if(root.left==null && root.right==null) return root
            // 情况2. 非边际，只有一个子树，那么让自己的子树接替位置即可
            if(root.left==null) return root.right
            if(root.right==null) return root.left
            // 情况3, 两个子树都有,先找到，然后和key节点交换，直接删除即可
            if(root.left!==null&&root.right!=null){
                let minNode = this._getMin(root.right)
                root.val = minNode.val
                root.right = this._deleteNodeBST(root.right,minNode.val)
            }
        }
        
        if(root.val<key){
            root.right = this._deleteNodeBST(root.right,key)
        }
        if(root.val>key){
            root.left = this._deleteNodeBST(root.left,key)
        }
        return root
    }

    _getMin(root){
        if(root.left==null) return root
        return this._getMin(root.left) 
    }

}

// 节点数组
var nodes = [8, 3, 10, 1, 5, 14, 4, 6, 13];

var binaryTree = new BST();
nodes.forEach( key => {
  binaryTree.insertNode(key);
});
console.log(binaryTree.root);
binaryTree.preorderTraversal();
binaryTree.deleteNodeBST(3);
console.log(binaryTree.levelTraversal());
console.log(binaryTree.isInBST(2));

