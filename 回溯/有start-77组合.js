/**
 * 77. 组合
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */
var combine = function(n, k) {
    if(n===0) return [];
    let res = [];
    let track = [];
    backtrack(n,1,k,track);
    return res;

    function backtrack(n,start,k,track){
        // 结束条件
        if(k===track.length){
            res.push(track.slice());
            return;
        }
        // 选择列表
        for(let i=start;i<=n;i++){
            // 做选择
            track.push(i);
            backtrack(n,i+1,k,track);
            track.pop();
        }
    }
};