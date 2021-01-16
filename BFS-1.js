/**
 * 
 * @param {*} root 
 * 111. 二叉树的最小深度
 */
var minDepth = function(root) {
    /**
     * 最小的深度，用bfs
     * 
     */
    // 用队列
    if(!root) return 0
    let minD = 1
    let q = [root]
    while(q.length!=0){
        // 出队
        let len = q.length
        for(let i=0;i<len;i++){
            let tmp = q.shift()
            if(tmp.left==null && tmp.right==null){
                return minD
            }
            if(tmp.left!=null) q.push(tmp.left)
            if(tmp.right!=null) q.push(tmp.right)
        }
        minD++
    }
    return minD
}; 


var openLock = function(deadends, target) {
    /**
     * 为什么可以用BFS，因为对于任意一个当前的密码组合，如“0000”可以向上或者向下拨动，而且是有时序的，可以组成图结构
     */
    let q = ["0000"]
    let step = 0
    let deads = {}
    for(let d of deadends){
        deads[d] = true
    }
    let visited = {}
    while(q.length){
        let n = q.length
        for(let i=0;i<n;i++){
            let tmp = q.shift()
            if(deads[tmp]){
                continue
            }
            if(tmp==target){
                return step
            }
            for(let j=0;j<4;j++){
                let plusone = plusOne(tmp,j)
                let minusone = minusOne(tmp,j)
                if(!visited[plusone]){
                    q.push(plusone)
                    visited[plusone] = true
                }

                if(!visited[minusone]){
                    q.push(minusone)
                    visited[minusone] = true
                }
            }
        }
        step++
    }
    return -1
};

var plusOne = (s,i)=>{
    let strList = s.split('')
    
    if(strList[i]=='9'){
        strList[i] = '0'
    }else{
        strList[i]++
    }
    return strList.join('')
   
}

var minusOne = (s,i)=>{
    let strList = s.split('')
   
    if(strList[i]=='0'){
        strList[i] = '9'
    }else{
        strList[i]--
    }
    return strList.join('')
}

let deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"]
let target = "8888"

console.log(openLock(deadends, target))
// console.log(minusOne("0000",1),plusOne("0000",2))