/**
 * 对于二叉树的算法，明确每个节点需要做的事情，剩下的交给递归框架。
 * 判断BST合法性
 * 判断一个二叉树是不是BST，BST应该满足左节点<根节点<右节点，但是应该是左子树小于右子树，否则有可能出现右子树上小于左子树的情况
 */
class TreeNode{
    constructor(val){
        this.root = val
        this.left = this.right = null
    }
}
function isVaildBST(root,min,max){
    if(root==null) return true
    if(min!==null && root.val<=min) return false
    if(max!==null && root.val>=max) return false

    // 边界，左子树的边界在根节点，右字树的左边界在
    return isVaildBST(root.left,min,root) && isVaildBST(root.right,root,max)
}

/**
 * 在BST中查找一个数
 */
function isInBST(root,target){
    if(root==null) return 
    if(root.val == target) return true

    return isInBST(root.left,target) || isInBST(root.right,target)
}

/**
 * 由于是BST可以优化，用二分法
 */
function isInBST1(root){
    if(root==null) return
    // 二分查找,如果当前root已经比target小了，那去右边找，同理左边也是类似的
    if(root.val<target){
        isInBST1(root.right)
    }
    if(root.val>target){
        isInBST1(root.left)
    }
    if(root.val===target) return true
}

/**
 * 在BST中插入一个数 ,找到空插入即可
 */
function insertIntoBST(root,val){
    if(root==null) return TreeNode(val)
    if(root.val === val) return root
    if(root.val>val){
        // 应该放在左子树上
        root.left = insertIntoBST(root.left,val)
    }
    if(root.val<val){
        root.right = insertIntoBST(root.right,val)
    }
    return root
}

/**
 * 删除一个数
 */
function deleteNodeBST(root, key){
    if(root.val ===key) {
        // 找到了，应该做点什么
        // 情况1.在边际
        if(root.left==null && root.right==null) return root
        // 情况2. 非边际，只有一个子树，那么让自己的子树接替位置即可
        if(root.left==null) return root.right
        if(root.right==null) return root.left
        // 情况3, 两个子树都有,先找到，然后和key节点交换，直接删除即可
        if(root.left!==null&&root.right!=null){
            let minNode = getMin(root.right)
            root.val = minNode.val
            root.right = deleteNodeBST(root.right,minNode.val)
        }
    }
    
    if(root.val<key){
        root.right = deleteNodeBST(root.right,key)
    }
    if(root.val>left){
        root.left = deleteNodeBST(root.left,key)
    }
    return root
}

function getMin(root){
    if(root.left==null) return root
    return getMin(root.left) 
}
/**
 * 
 * @param {*} root  
 * 完全二叉树节点个数
 */
var countNodes = function(root) {
    let leftNode = root, rightNode = root
    let hl = 0, hr = 0
    while(leftNode!=null){
        leftNode = leftNode.left
        hl++
    }
    while(rightNode!=null){
        rightNode = rightNode.right
        hr++
    }
    if(hl === hr){
        return Math.pow(2,hl) - 1
    }
    return 1 + countNodes(root.left) + countNodes(root.right)
};

var buildTree = function(preorder, inorder) {
    var dic = {}
    for(let i=0; i<inorder.length;i++){
        dic[inorder[i]] = i
    }

    function recur(root,left,right){
        /**
         * 返回一棵树的根节点，输入的为前序遍历的根节点和中序遍历的左边界和中序遍历右边界索引
         * 根据前序遍历拿到根节点，根据中序遍历找到左子树和右子树的左右边界
         * 构造二叉树，一定要root.left = 和root.right=
         */
        if(left>right) return
        // 1. 取根节
        let node = new TreeNode(preorder[root])
        i = dic[preorder[root]] // 求中序遍历的根节点的索引, root为前序遍历根节点的索引
        node.left = recur(root + 1, left, i-1)
        node.right = recur(i-left+root+1, i + 1, right) // i-left为左子树的长度，加上左子树的在前序中的索引，即为前序遍历中的右字树的根节点索引

        return node
    }
   
    return recur(0,0,inorder.length-1)
};

var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null
    var i = inorder.indexOf(preorder[0])

    let node = new TreeNode(preorder[0])

    node.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i))
    node.right = buildTree(preorder.slice(i+1),inorder.slice(i+1))
    return node
};

