/**
 * 
 * @param {*} nums 
 * 字集
 */
var res = []
var subsets = function(nums) {
    /**
     * 可以穷举，如果可以穷举的话，就可以用回溯算法
     * 1. 结束条件
     * 2. 选择列表
     * 3. 路径
     */
    let track = []
    recur(nums,0,track)
    return res
    function recur(nums,start,track){
        res.push(track.slice()) // 将路径放入结果集中, 必须用slice，否则不能将[1]push到新的[]中，形成[[1]]

        for(let i=start;i<nums.length;i++){
            // 做选择,应该从start开始
            track.push(nums[i]) // 做选择
            recur(nums, i+1, track)
            track.pop() // 撤销选择
        }
        return res
    }
};

// console.log(subsets([1,2,3]))
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
/**
 * 
 * @param {*} root 
 * 257. 二叉树的所有路径
 */
var binaryTreePaths = function(root) {
    /**
     * 暗含回溯，前序遍历可以完成遍历，不过可以考虑是前序遍历
     */
    var res = []
    let track = ''
    dfs(root,track)
    return res
    function dfs(root, track){
        if(root==null) return
        if(root.left==null && root.right==null){
            // 如果root是叶子节点，则不应该加->, 且将该路径加入结果集
            track +=`${root.val}`
            res.push(track)
            return
        }
        // 对每个节点，加入track
        track +=`${root.val}`+'->'
        dfs(root.left,track)
        dfs(root.right,track)
    }
};


var letterCombinations = function(digits) {
    /**
     * 此题和子集有点像，但实际上是个全排列的题目，可以考虑用回溯算法，明确几个问题
     * 1. 终止条件
     * 2. 选择列表
     * 3. 路径
     */
    let track = ''
    let start = 0
    var res = []
    if(!digits.length) return []
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    backtrack(digits, track, start)
    return res
    function backtrack(digits,track,start){
        // start保证不会重复选择, 选择其他的digits
        if(start>digits.length-1){
            res.push(track)
            return
        }
        let str = map[digits[start]]
        for(let c of str){
            // 选择
            track += c
            backtrack(digits,track,start+1) // 路径
            track = track.slice(0,track.length-1) // 撤销选择
        }
    }
};

// console.log(letterCombinations('234'))

var combine = function(n, k) {
    /**
     * 组合，可以画出树状图，这题和电话字符的排列差不多
     */
    let track = []
    var res = []
    function backtrack(n,start,track){
        if(track.length==k){
            res.push(track.slice())
            return
        }
        // 选择列表，树有k个分支
        for(let i=start;i<=n;i++){
            // 做选择
            track.push(i)
            backtrack(n,i+1,track)
            track.pop()
        }
    }
    backtrack(n,1,track)
    return res
};

var permute = function(nums) {
    /*
     回溯算法
     1. 结束条件，track的长度等于nums的长度
     2. 选择，智能选择不一样的数字，但是不考虑顺序
    */
    let track = []
    var res = []
    backtrack(nums,track)
    return res
    function backtrack(nums, track){
        if(track.length == nums.length){
            res.push(track.slice())
            return
        }
        // 选择列表
        for(let i=0;i<nums.length;i++){
            if(track.indexOf(nums[i])>-1) continue
            track.push(nums[i])
            backtrack(nums,track)
            track.pop()
        }
    }
};

/**
 * 
 * @param {*} n 
 * n皇后问题
 */
var solveNQueens = function(n) {
    /**
     * N皇后会攻击同行、同列、左上和右上
     */
    // 1. 初始化一个“空棋盘”
    let table = new Array(n).fill('.').map(x=>new Array(n).fill('.'))
    let res = []
    backtrack(table,0)
    return res

    function backtrack(board,row){
        if(row==board.length){
            // 每次的board值都会变，因此要用slice拷贝一份，直接push是不行的
            let stringBoard = board.slice()
            console.log(stringBoard)
            for(let i=0;i<board.length;i++){
                stringBoard[i] = stringBoard[i].join('')
            }
            res.push(stringBoard)
            return 
        }
        let n = board[row].length
        for(let col=0;col<n;col++){
            // 做选择
            if(!isValid(board,row,col)){
                continue
            }
            board[row][col] = 'Q'
            backtrack(board, row+1)
            board[row][col] = '.'
        }
    }

    function isValid(board,row,col){
        for(let i=0;i<row;i++){
            // 列中是否有冲突
            if(board[i][col]=='Q'){
                return false
            }
        }

        for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j--){
            // 左上
            if(board[i][j]=='Q'){
                return false
            }
        }

        for(let i=row-1,j=col+1;i>=0 && j<board.length;i--,j++){
            // 右上
            if(board[i][j]=='Q'){
                return false
            }
        }

        return true
    }
};
// console.log(solveNQueens(4))

// let arr1 = [[1,2,3],[4,5,6]]
// let arr2 = [[1,2,4],[4,7,6]]
// console.log(arr1)
// let arr = []
// arr.push(arr1)
// arr.push(arr2)
// console.log(arr)
let matrix = 
[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
var solveSudoku = function(board) {
    const backtrack = (board,i,j)=>{
        let m=9,n=9
        if(i==m){
            return true
        }
        if(j==n){
            // 如果该行已经结束了
            return backtrack(board,i+1,0)
        }
        if(board[i][j]!='.'){
            return backtrack(board,i,j+1)
        }

        for(let ch='1';ch<='9';ch++){
            if(!isValid(board,i,j,String(ch))){
                continue
            }
            board[i][j] = ch.toString()
            if(backtrack(board,i,j+1)){
                return true
            }
            board[i][j] = '.'
        }
    }
    function isValid(board,r,c,ch){
        for(let i=0;i<9;i++){
            if(board[r][i]==ch) return false
            if(board[i][c]==ch) return false
            if(board[Math.floor(r/3)*3 + Math.floor(i/3)][Math.floor(c/3)*3 + i%3]==ch) return false
        }
        return true
    }
    backtrack(board,0,0)
    return board
}; 

// console.log(solveSudoku(matrix))
var generateParenthesis = function(n) {
    /**
     * 穷举是可以写出所有的组合的，对于括号是成对出现的，不能出现右括号多于左括号的情况
     * 可以用left和right记录已经使用的左右括号数量
     * 结束条件为left<right或者是left==0&&right==0将结果放入res
     * 
     */
    let res = []
    let track = []
    backtrack(n, n, track)
    return res
    function backtrack(left, right, track){
        // 结束条件
        if(right<left) return // 右括号应该少于左边，这个是个反向

        if(left<0 || right<0) return
        if(left == 0 && right == 0){
            // res.push(track)
            // console.log(track.join(''))
            res.push(track.join(''))
            return
        }

        // 选择列表,只有两个，左括号或者右括号
        track.push('(')
        backtrack(left - 1, right, track)
        track.pop()

        track.push(')')
        backtrack(left, right -1 , track)
        track.pop()
    }
};

console.log(generateParenthesis(3))
// let a = []
// a.push('(')
// console.log(a)
// a.pop()
// console.log(a)