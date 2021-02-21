// 递归
// 迭代
var preorderTraversal = function(root) {
    let res = [];
    function preOrder(root){
        if(root==null){
            return;
        }
        res.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    preOrder(root);
    return res;
};

var preorderTraversal = function(root) {
    var res = []
    if(!root) return res
    var stack = [root]
    while(stack && stack.length){
        node = stack.pop()
        res.push(node.val)
        if(node.right){
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left)
        }
    }
    return res
};

var inorderTraversal = function(root) {
    let res = [];
    function inorder(root){
        if(root==null){
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    while(stack.length || root){
        // 每次遍历都要走到最左子树的叶子节点
        while(root){
            stack.push(root);
            root = root.left;
        }
        // 接着开始将节点添加到结果集res
        // 出栈
        root = stack.pop();
        res.push(root.val);
        root = root.right; // 转向右字树
    }
    return res;
};

var postorderTraversal = function(root) {
    let res = [];
    function postorder(root){
        if(root==null){
            return;
        }
        postorder(root.left);
        postorder(root.right);
        res.push(root.val);
    }
    postorder(root);
    return res;
};

var postorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let lastVisited = null
    let cur = root
    while(cur){
        stack.push(cur)
        cur = cur.left
    }
    while(stack.length!==0){
        cur = stack.pop()
        if(cur.right===null || cur.right===lastVisited){
            res.push(cur.val)
            lastVisited = cur
        }else{
            stack.push(cur)
            cur = cur.right
            while(cur){
                stack.push(cur)
                cur = cur.left
            }
        }
    }
    return res;
};

var levelOrder = function(root) {
    if(!root)return []
    let stack = [root]
    let res = []
    while(stack.length!==0){
        let tmp = []
        // 记录每一层的数量，要出来多少个node
        let n = stack.length
        for(let i=0;i<n;i++){
            var node = stack.shift()
            tmp.push(node.val)
            if(node.left){stack.push(node.left)}
            if(node.right){stack.push(node.right)}
        }
        res.push(tmp)
    }
    return res
};

/**
 * 二叉树的最大深度
 * @param  {*} root 
 * @param {*} sum 
 */
var maxDepth = function(root) {
    function dfs(root){
        if(!root) return 0
        let mD = Math.max(dfs(root.left),dfs(root.right)) + 1
        return mD
    }
    return dfs(root)
};

/**
 * 
 * @param {*} root 110. 平衡二叉树
 */
// 自顶向下解法，这个结合Maxdepth容易想到
var isBalanced = function(root) {
    if(root==null) return true;
    return Math.abs(maxDepth(root.left)-maxDepth(root.right))<2 && isBalanced(root.left) && isBalanced(root.right);
    // 递归左右子树，到子节点，每次求高度差
    function maxDepth(root){ // 返回一棵树的最大高度
        if(root==null) return 0;
        let depth = Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
        return depth;
    }
};
// 自底向上
var isBalanced = function(root) {
    let balance = true;
    function hepler(root){ // 返回树的最大节点深度
        if(root== null) return 0;
        let left = hepler(root.left);
        let right = hepler(root.right);
        // 判断是否左右子树的深度差>1
        if(Math.abs(left-right)>1){
            balance = false;
        }
        return Math.max(left,right) + 1;
    }
    hepler(root);
    return balance;
};

/**
 * 对称二叉树
 * @param {*} root 
 * @param {*} sum 
 */
var isSymmetric = function(root) {
    function recur(L,R){
        if(!L && !R){
            return true
        }
        if(!L||!R||L.val!=R.val){
            return false
        }
        return recur(L.left,R.right) && recur(L.right,R.left)
    }
    if(root===null) return true
    return recur(root.left,root.right)
};

/**
 * 112. 路径总和
 * @param {*} root 
 * @param {*} targetSum 
 */
var hasPathSum = function(root, targetSum) {
    if(root==null){
        return false;
    }
    if(root.left==null && root.right==null){
        // 为叶子节点
        return targetSum===root.val;
    }
    return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val);
};
/**
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 */
var pathSum = function(root, sum) {
    var paths = []
    var res = []
    function dfs(root,sum,paths){
        if(root===null)return
        sum -= root.val
        // isLeafNode
        if(root.left===null&&root.right===null){
            if(sum===0){
                paths.push(root.val)
                res.push(paths.slice())
                paths.pop()
            }
            return
        }
        paths.push(root.val)
        dfs(root.left,sum,paths)
        dfs(root.right,sum,paths)
        paths.pop()
    }
    dfs(root,sum,paths)
    return res
};

/**
 * 
 * @param {*} root 103. 二叉树的锯齿形层序遍历
 */
var zigzagLevelOrder = function(root) {

    // 考虑层序遍历，不过要每隔一层就要reverse一下,用一个标志位可解决
    if(!root) return [];
    let q = [root];
    let res = [];
    let leftToRight = true;
    while(q.length){
        let len = q.length;
        let tmp = [];
        for(let i=0;i<len;i++){
            let node = q.shift();
            if(node.left){
                q.push(node.left);
            }
            if(node.right){
                q.push(node.right);
            }
            tmp.push(node.val);
        };
        if(leftToRight){
            res.push(tmp.slice());
        }else{
            res.push(tmp.reverse().slice());
        }
        leftToRight = !leftToRight;
    }
    return res;
};
