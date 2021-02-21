/**
 * 22. 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 */
var generateParenthesis = function(n) {
    let res = [];
    let track = '';
    backtrack(n,n,track);
    return res;
    function backtrack(left,right,track){
        // left和right代表剩余的可以使用的括号数量
        if(right<left){
            return;
        }
        if(left<0 || right<0){
            return;
        }
        if(left==0 && right==0){
            res.push(track.slice());
            return;
        }
        // 选择左括号或者右括号
        track += '(';
        backtrack(left-1,right,track);
        track = track.slice(0,track.length - 1);;

        track +=')';
        backtrack(left,right-1,track);
        track = track.slice(0,track.length - 1);;
    }
};