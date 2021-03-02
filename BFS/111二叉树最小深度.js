var minDepth = function(root) {
    /**
     * 最小的深度，用bfs
     */
    if(root==null) return 0;
    let queue = [root];
    let minD = 1;
    while(queue.length>0){
        let len = queue.length;
        for(let i=0;i<len;i++){
            let root = queue.shift();
            if(root.left==null && root.right==null){
                return minD;
            }
            if(root.left!=null){
                queue.push(root.left);
            }
            if(root.right!=null){
                queue.push(root.right);
            }
        }
        minD++;
    }
    return minD;
};