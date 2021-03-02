/**
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

// console.log(openLock(deadends, target))
// console.log(minusOne("0000",1),plusOne("0000",2))
let board = [[1,2,3],[4,0,5]]
// let start = board.slice().map(x=>x=x.join('')).join('')
// console.log(typeof start)
// start  = Array.from(start)
// let tmp = start[0]
// start[0] = start[1]
// start[1] = tmp
// console.log(start)
/**
 * 
 * @param {*} board 
 * 773. 滑动谜题
 */
// var slidingPuzzle = function(board) {
//     /**
//      * BFS和回溯算法可以解决暴力穷举问题，但是有所不同的是回溯算法有         撤回的操作，用于尝试，而BFS适合用来寻路，尤其是对于“小步”尝试，       对于此问题有点像openlock，但是openlock可以抽象为一个图，用来
//      * 寻找路，不会走回头路，朝着一个方向。其实对于移动的问题，只要移        动“0”数字即可，把和“0”相邻的数字进行交换，看看是否满足要求。
//      */
//     let target = [1, 2, 3, 4, 5, 0]
//     // 记录每个位置在二维数组中的相邻数字的索引
//     let neighbor = [[1,3],[0,2,4],[1,5],[0,4],[1,3,5],[2,4]]
//     let q = [[].concat(...board)]
//     // console.log(q) 
//     let visited = {} // 访问后的不用再次访问
//     let step = 0
//     while(q.length!==0){
//         // 出队
        
//         let len = q.length
//         for(let i=0;i<len;i++){
//             const cur = q.shift()
//             if(target.toString() === cur.toString()){
//                 return step
//             }
//             // 找到“0”的索引，并交换位置
//             let idx = cur.findIndex(v=>!v)
//             // console.log(idx)
//             for(let j=0;j<neighbor[idx].length;j++){
//                 // 交换位置
//                 let adj = neighbor[idx][j]
//                 let list = [...cur]
//                 // console.log(list)
//                 [list[adj],list[idx]] = [list[idx],list[adj]]
//                 if(!visited[list.toString()]){
//                     q.push(list)
//                     visited[list.toString()] = true
//                 }
//             }
//         }
//         step++
//     }
// };

var slidingPuzzle = function(board) {
    let target = [1, 2, 3, 4, 5, 0]
    // 邻接数组，滑板板上面每个位置可以移动的方位
    let neighbor = [[3, 1], [4, 0, 2], [5, 1], [0, 4], [1, 3, 5], [2, 4]]
    // 移动状态数组，储存当次移动和下次移动的移动状态。
    // 数组前面储存当次未遍历状态，后面储存下次将要遍历的状态
    let queue = [[].concat(...board)]
    let visited = {}, step = 0

    while (queue.length) {
        // queue长度会发生变化，这里len需要事先储存
        let len = queue.length
        // 依次将当前步数状态转化为下一步的状态，
        while (len--) {
            const cur = queue.shift();
            if (cur.toString() === target.toString()) return step
            let idx = cur.findIndex(v => !v)
            // 依次从邻接数组移动滑块至空位
            for (let j = 0; j < neighbor[idx].length; j++) {
                let adj = neighbor[idx][j]
                let list = [...cur];
                // 移动滑块，交换位置，表示已移动
                [list[adj],list[idx]] = [list[idx],list[adj]]
                // 新状态添加进移动状态数组，准备下次移动
                if(!visited[list.toString()]){
                    queue.push(list)
                    visited[list.toString()] = true
                }
            }
        }
        // 循环结束表明所有状态均已转换至下一步，此时步数加一，开始循环下一步
        step++
    }
    return -1
};


console.log(slidingPuzzle(board))