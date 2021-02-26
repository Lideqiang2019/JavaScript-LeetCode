/**
 * 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。

 

示例 1：

输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
输出：13
解释：下面是两条和最小的下降路径，用加粗标注：
[[2,1,3],      [[2,1,3],
 [6,5,4],       [6,5,4],
 [7,8,9]]       [7,8,9]]
示例 2：

输入：matrix = [[-19,57],[-40,-5]]
输出：-59
解释：下面是一条和最小的下降路径，用加粗标注：
[[-19,57],
 [-40,-5]]
示例 3：

输入：matrix = [[-48]]
输出：-48

 */
// 自顶向下
/**
 * 只能从选择向下或者向左下，或者右下
 * dp(row,col,matrix) 表示当前位于row和col位置上走的最小路径和
 * base case row==0 return matrix[col];
 * 结束条件：row = matrix.length-1
 * 递归： dp(row,col,matrix) = matrix[row][col] + min(dp(row-1,col-1,matrix) , dp(row-1,col+1,matrix),dp(row-1,col,matrix))
 */
var minFallingPathSum = function(matrix) {
    let count = 0;
    let memo = {};
    let n = matrix.length;
    let res = Number.MAX_SAFE_INTEGER;
    for(let j=0;j<n;j++){
        // 不确定最后一行是哪一列
        res = Math.min(dp(n-1,j,matrix),res);
    }
    return res;
    function printIndent(n){
        let s ='';
        for(let i=0;i<n;i++){
            s+='    ';
        }
        return s;
    }
    function dp(row,col,matrix){
        console.log(printIndent(count++)+`row=${row},col=${col}`);
        let index = `${row},${col}`;
        if(index in memo){
            return memo[index];
        }
        if(row<0 || row>=matrix.length || col<0 || col>=matrix[0].length){
            console.log(printIndent(--count)+`return 99999`);
            return 99999;
        }
        if(row===0){
            console.log(printIndent(--count)+`return ${matrix[0][col]}`);
            return matrix[0][col];
        }
        
        let ans = matrix[row][col] + getMin(
                    dp(row-1,col-1,matrix),
                    dp(row-1,col+1,matrix),
                    dp(row-1,col,matrix))
        memo[index] = ans;
        console.log(printIndent(--count)+`return ${ans}`);
        return ans;
    }
    
};
function getMin(a,b,c){
    return Math.min(a,Math.min(b,c));
}
let matrix = [[2,1,3],[6,5,4],[7,8,9]]
// console.log(minFallingPathSum(matrix));

// 自底向上
function minFallingPathSumPro(matrix){
    // dp[i][j]表示输入i,j位置，输出最小路径和
    // base case dp[0][j]
    let n = matrix.length;
    let res = Number.MAX_SAFE_INTEGER;
    let dp = new Array(n+1).fill(66666).map(x=>new Array(n+1).fill(66666));
    for(let j=0;j<n;j++){
        dp[0][j] = matrix[0][j];
    }
    for(let i=1;i<n;i++){
        for(let j=0;j<n;j++){
            if(j===0){
                dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j],dp[i-1][j+1]);
            }else if(j===n-1){
                dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j-1],dp[i-1][j]);
            }else{
                dp[i][j] = matrix[i][j] + getMin(dp[i-1][j-1],dp[i-1][j],dp[i-1][j+1]);
            }
        }
    }
    for(let i=0;i<n;i++){
        res = Math.min(res,dp[n-1][i]);
    }
    return res;
}

console.log(minFallingPathSumPro(matrix));

