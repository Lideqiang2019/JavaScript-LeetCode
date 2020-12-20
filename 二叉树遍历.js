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