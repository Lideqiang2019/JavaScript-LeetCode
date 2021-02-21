var solveNQueens = function(n) {
    let table = new Array(n).fill('.').map(x=>new Array(n).fill('.'));
    let res = [];
    let row = 0;
    backtrack(table,row);
    return res;
    function backtrack(table,row){
        // 结束条件
        if(row === table.length){
            // 将最后一行的结果加入，提前把结构组织一下
            let stringBuilder = table.slice();
            for(let i=0;i<stringBuilder.length;i++){
                stringBuilder[i] = stringBuilder[i].join('');
            }
            res.push(stringBuilder.slice());
        }
        for(let i=0;i<n;i++){
            // 如果有不合适的直接跳过
            if(!isValid(table,row,i)){
                continue;
            }
            // 选择
            table[row][i] = 'Q';
            backtrack(table,row+1);
            table[row][i] = '.';
        }
        function isValid(table,row,col){
            // 检测列
            for(let i=0;i<row;i++){
                if(table[i][col]=='Q'){
                    return false;
                }
            }
            // 检测左上
            for(let i=row,j=col;i>=0&&j>=0;i--,j--){
                if(table[i][j]=='Q'){
                    return false;
                }
            }

            // 检测右上
            for(let i=row,j=col;i>=0&&j<table.length;i--,j++){
                if(table[i][j]=='Q'){
                    return false;
                }
            }
            return true;
        }
    }
};

console.log(solveNQueens(4))