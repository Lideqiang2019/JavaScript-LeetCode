/**
 * 226 反转二叉树 https://leetcode-cn.com/problems/invert-binary-tree/
 */
var invertTree = function(root) {
    /**
     * 明确invertTree含义，代表是将root作为根节点的左右子树反转,
     * 那么只要递归找到根，将左右子树交换位置即可
     */
    // 在这里操作,左右子树换位问题
    if(root==null) return null
    // if(root.left==null && root.right==null) return
    let tmp = root.left
    root.left = root.right
    root.right = tmp
    // 前序遍历,找到root即可
    invertTree(root.left)
    invertTree(root.right)
    return root
};

/**
 * 116. 填充每个节点的下一个右侧节点指针 https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 */
var connect = function(root) {
    
    connectTwoNode(root)
    return root
};

var connectTwoNode = function (root){
    // 把一颗树的每一层的任意两个节点连接，增加一句即可
    if(root==null) return null
    if(root.left==null && root.right==null) return // 递归停止

    root.left.next = root.right

    if(root.next){
        // 对于当前的节点，右子树已经被其父亲节点“穿透”了
        root.right.next = root.next.left
    }

    connectTwoNode(root.left)
    connectTwoNode(root.right)
}

var flatten = function(root) {
    /**
     * 明确flatten的含义为将当前节点的右子树放到左子树上并返回链表的头节点
     */
    if(root==null) return 
    flatten(root.left)
    flatten(root.right)

    // 在后续遍历这里执行对root的操作
    let le = root.left
    let ri = root.right

    // 将左子树作为root的右子树
    root.left = null
    root.right = le

    // 将原来的左子树走到底，将能加上右子树
    let p = root
    while(p.right!=null){
        p = p.right
    }
    p.right = ri
};

/**
 * 654. 构造最大二叉树
 */
var constructMaximumBinaryTree = function(nums) {
    return buildTree(nums, 0, nums.length-1)
    function buildTree(nums, lo, hi){
        // 求得最大值和其index
        if(lo>hi) return null
        let index = 0 , maxNum = -1000
        for(let i=lo;i<=hi;i++){
            if(nums[i]>maxNum){
                maxNum = nums[i]
                index = i
            }
        }

        let root = new TreeNode(maxNum)

        root.left = buildTree(nums,lo,index-1)
        root.right = buildTree(nums,index+1,hi)

        return root
    }
};

var buildTree = function(preorder, inorder) {
    /**105. 从前序与中序遍历序列构造二叉树
     * 找到构造的root节点，前序和中序都要找
     */
    if(!preorder.length || !inorder.length) return null
    let root = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder[0])

    root.left = buildTree(preorder.slice(1, index+1), inorder.slice(0,index))
    root.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))

    return root
};

/**
 * 106. 从中序与后序遍历序列构造二叉树
 * @param {*} inorder 
 * @param {*} postorder 
 * 
 */

var buildTree = function(inorder, postorder) {
    /**
     * 与前序+中序的解法类似，就是需要从后向前分左右子树
     */
    if(!inorder.length || !postorder.length) return null

    let len = postorder.length-1
    let root = new TreeNode(postorder[len])
    let index = inorder.indexOf(postorder[len])

    root.right = buildTree(inorder.slice(index+1), postorder.slice(index,len))
    root.left = buildTree(inorder.slice(0,index), postorder.slice(0,index))

    return root
};

/**
 * 652. 寻找重复的子树
 */

let b = new Map()
let a = 'a'
if(!b.has(a)){
    b.set(a,0)
}
let freq = b.get(a)

b.set(a,freq+1)
console.log(b)

