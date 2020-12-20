// 递归
// 迭代

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
    const res = [];
    const stk = [];
    while (root || stk.length) {
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
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
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 
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