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

console.log(letterCombinations('234'))

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