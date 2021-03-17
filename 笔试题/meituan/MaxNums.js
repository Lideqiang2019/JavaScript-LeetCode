const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

class TreeNode{
    constructor(key,val){
        
    }
}

function MaxNums(input){
    // 有点打家劫舍的意思,需要提前根据输入简历一棵树
    function rob(root){
        if(root==null) return 0;
        let robIn = root.val;
        if(root.left!=null){
            robIn += rob(root.left.left) + rob(root.left.right);
        }
        if(root.right!=null){
            rootIn +=rob(root.right.left) + rob(root.right.left);
        }
        let rootEx = rob(root.left) + rob(root.right);
        return Math.max(robIn,rootEx);
    }
    
}

let input = [];
rl.on('line',(line)=>{
    input.push(line);
    if(input.length===5){
        MaxNums(input);
    }
})