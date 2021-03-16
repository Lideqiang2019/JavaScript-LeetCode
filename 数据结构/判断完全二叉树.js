/**
 * 
 * @param {*} root 
 * NC 60
 */
function judgeIt( root ) {
    // write code here
    return [isBST(root,null,null),isComplete(root)]
    function isBST(root,min,max){
        if(root==null) return true;
        if(min!=null && root.val<=min.val) return false;
        if(max!=null && root.val>=max.val) return false;
        return isBST(root.left,min,root) && isBST(root.right,root,max);
    }
    function isComplete(root){
        let q = [root];
        while(q[0]!=null){
            let node = q.shift();
            q.push(node.left);
            q.push(node.right);
        }
        while(q.length>0 && q[0]==null){
            q.shift();
        }
        return q.length===0;
    }
}