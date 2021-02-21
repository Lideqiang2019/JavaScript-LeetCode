/**
 * 257. 二叉树的所有路径
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
 */
var binaryTreePaths = function(root) {
    if(!root) return [];
    let res = [];
    let path = '';
    traverse(root,path);
    return res;

    function traverse(root,path){
        if(root==null){ // 替代了回撤
            return;
        }
        // 结束条件
        if(root.left==null && root.right==null){
            // 加入最后一个节点
            path +=`${root.val}`;
            res.push(path);
            return;
        }

        // 选择列表
        // 做选择
        path +=`${root.val}->`;
        traverse(root.left,path);
        traverse(root.right,path);
        // 无需回撤，栈会替我们做这个事情
    }
};