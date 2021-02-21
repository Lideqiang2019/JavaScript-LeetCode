/**
 * 面试题 17.12. BiNode 
 * @param {Node} root 
 * 原地修改二叉搜索树，返回链表头结点
 */
var convertBiNode = function (root) {
    let dummy = new TreeNode(null);
    dfs(root, dummy);
    return dummy.right;

    // *******************

    function dfs(node, tail) {
        if (!node) return tail;

        tail = dfs(node.left, tail);
        node.left = null
        tail.right = node
        tail = node
        tail = dfs(node.right, tail);

        return tail;
    }
};

var convertBiNode = function (root) {
    /**
     * 简单的中序遍历，在中序遍历到某一个节点的时候，需要对节点进行操作
     */
    let dumpy = new TreeNode(null)
    let prev = null
    return dfs(root)
    function dfs(root){
        if(root==null) return null
        dfs(root.left)
        /**
         * do something here
         */
        if(prev==null){
            prev = root
            dumpy.right = root
        }else{
            prev.right = root
            prev = root
        }
        root.left = null
        dfs(root.right)
        return dumpy.right
    }
};

/**
 * 124. 二叉树中的最大路径和
 */
var maxPathSum = function(root) {
    let ans = Number.MIN_SAFE_INTEGER;
    oneSideCount(root);
    return ans;
    function oneSideCount(root){ // oneSideCount返回以某个节点为根节点的左右子树最大路径和
        // 二叉树遍历
        if(root===null) return 0;
        let left = Math.max(0,oneSideCount(root.left)); // 左子树的最大路径和
        let right = Math.max(0,oneSideCount(root.right));// 右字树最大路径和

        // 后序遍历
        ans = Math.max(ans,left+right+root.val);
        return Math.max(left,right)+root.val;
    }
};

