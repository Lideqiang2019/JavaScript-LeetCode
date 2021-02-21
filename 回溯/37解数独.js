// 心中应该明白，backtrack会递归求解所有情况，结束条件只是给递归换到下次递归的一个信号
var solveSudoku = function(board) {
    function backtrack(board,i,j){
        let m=9,
            n=9;
        // 结束条件
        if(i==m){
            return true;
        }
        if(j==n){
            // 这一行结束了
            return backtrack(board,i+1,0);
        }
        if(board[i][j]!='.'){
            // 如果已经填过数字了
            return backtrack(board,i,j+1);
        }
        // 选择列表
        for(let ch='1';ch<='9';ch++){
            if(!isValid(board,i,j,String(ch))){
                continue;
            }
            board[i][j] = ch.toString();
            if(backtrack(board,i,j+1)){
                return true;
            };
            board[i][j] = '.';
        } 
    }
    function isValid(board,row,col,ch){
        for(let i=0;i<9;i++){
            if(board[i][col]==ch){
                return false;
            }
            if(board[row][i]==ch){
                return false;
            }
            if(board[Math.floor(row/3)*3+Math.floor(i/3)][Math.floor(col/3)*3+i%3]==ch){
                return false;
            }
        }
        return true;
    }
    backtrack(board,0,0);
    return board;
};

let matrix = 
[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
console.log(solveSudoku(matrix))