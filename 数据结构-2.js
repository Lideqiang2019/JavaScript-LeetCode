// let a = [1,2,3]
// a.unshift(0)
// console.log(a)
// let b = a.shift()
// a.push(null)
// console.log(b,a)
// let c = a.toString()
// console.log(c)
// console.log(c.split(','))
// let s = []

// for(i of c.split(',')){
//     s.push(Number(i))
// }
// console.log(s)

/**
 * 
 * @param {*} root 
 * 前序遍历的序列化，与反序列化
 */

var serialize = function(root) {
    let s = []
    traverse(root,s)
    return s.toString()
};

function traverse(root,s){
    if(root==null){
        s.push(null)
        return
    }
    // 前序遍历，这里应该做些什么
    s.push(root.val)

    traverse(root.left)
    traverse(root.right)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let s = []
    for(i of data.split(',')){
        s.push(Number(i))
    }
    deTraverse(s)
};

function deTraverse(s){
    if(s.length===0){
        return null
    }
    let root = s.shift()
    if(root==null) return null
    root.left = deTraverse(root)
    root.right = deTraverse(root)
    return root
}

/**
 * 后序遍历
 */
function bSerialized(root,s){
    if(root==null){
        s.push(null)
        return
    }

    traverse(root.left)
    traverse(root.right)
    // 后序遍历，这里应该做些什么
    s.push(root.val)
}

function bDeserized(data){
    if(s.length===0){
        return null
    }
    let root = s.pop()
    if(root==null) return null

    root.right = deTraverse(root)
    root.left = deTraverse(root)
   
    return root
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var serialize = function(root) {
    /**
     * 现将层序遍历的框架写一下
     */
    let q = []
    let s = []
    // 根入队
    q.push(root)
    while(q.length!==0){
        let node = q.shift()
        // 这里打印即可
        if(node==null){
            s.push('X')
            continue
        }
        s.push(node.val)
        q.push(node.left)
        q.push(node.right)
    }
    return s.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data=='X') return null
    let s = data.split(',')

    let root = new TreeNode(s[0])
    let q = [root]
    
    for(let i=1;i<s.length;){
        let parent = q.shift()

        let l = s[i++]
        if(l!='X'){
            parent.left = new TreeNode(l)
            q.push(parent.left)
        }else{
            parent.left = null
        }

        let r = s[i++]
        if(r!='X'){
            parent.right = new TreeNode(r)
            q.push(parent.right)
        }else{
            parent.right = null
        }
    }
    return root  
};

/**
 * 重建二叉树
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null
    var i = inorder.indexOf(preorder[0])

    let node = new TreeNode(preorder[0])

    node.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i))
    node.right = buildTree(preorder.slice(i+1),inorder.slice(i+1))
    return node
};
