/**
 * 
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

