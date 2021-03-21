/**
 * 54. 螺旋矩阵
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 */
 var spiralOrder = function(matrix) {
    let res = [];
    let u = 0,
        d = matrix.length-1,
        l = 0,
        r = matrix[0].length-1;
    if(d<0){
        return res;
    }
    while(true){
        /**
         * 上右下左遍历，注意应该要更新结束条件
         */
        // 上
        for(let i=l;i<=r;i++){
            res.push(matrix[u][i]);
        }
        if(++u>d) break;
        // 右
        for(let j=u;j<=d;j++){
            res.push(matrix[j][r]);
        }
        if(--r<l) break;
        // 下
        for(let i=r;i>=l;i--){
            res.push(matrix[d][i]);
        }
        if(--d<u) break;
        // 左
        for(let j=d;j>=u;j--){
            res.push(matrix[j][l]);
        }
        if(++l>r) break;
    }
    return res;
};