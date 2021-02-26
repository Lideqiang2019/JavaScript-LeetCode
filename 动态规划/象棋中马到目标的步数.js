/**
 * 2021-02-22：一个象棋的棋盘，然后把整个棋盘放入第一象限，棋盘的最左下角是(0,0)位置，
 * 那么整个棋盘就是横坐标上9条线、纵坐标上10条线的区域。给你三个 参数 x，y，k。
 * 返回“马”从(0,0)位置出发，必须走k步。最后落在(x,y)上的方法数有多少种?
 */

// 递归
function getJumpNums(a,b,k){
    /**
     * dp(a,b,k,x,y)表示从（0,0）到x,y走k步的方法数
     * base case dp(a,b,k,0,0)
     */
    return dp(a,b,k,0,0);
    function dp(a,b,rest,x,y){
        // 超出棋盘，直接return
        if(x<0 || y<0 || x>=9 || y>=10){
            return 0;
        }
        if(rest===0){
            // 剩余步数为0，判断是否到达target
            if(x===a && y===b){
                return 1;
            }else{
                return 0;
            }
        }
        let ans = 0;

        ans += dp(a,b,rest-1,x+1,y+2);
        ans += dp(a,b,rest-1,x+1,y-2);
        ans += dp(a,b,rest-1,x-1,y+2);
        ans += dp(a,b,rest-1,x-1,y+2);
        ans += dp(a,b,rest-1,x-2,y+1);
        ans += dp(a,b,rest-1,x-2,y-1);
        ans += dp(a,b,rest-1,x+2,y+1);
        ans += dp(a,b,rest-1,x+2,y-1);

        return rest;

    }
}

console.log(getJumpNums(3,4,5));