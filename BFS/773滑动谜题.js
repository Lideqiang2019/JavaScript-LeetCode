/**
 * 773. 滑动谜题
在一个 2 x 3 的板上（board）有 5 块砖瓦，用数字 1~5 来表示, 以及一块空缺用 0 来表示.

一次移动定义为选择 0 与一个相邻的数字（上下左右）进行交换.

最终当板 board 的结果是 [[1,2,3],[4,5,0]] 谜板被解开。

给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。

示例：

输入：board = [[1,2,3],[4,0,5]]
输出：1
解释：交换 0 和 5 ，1 步完成
输入：board = [[1,2,3],[5,4,0]]
输出：-1
解释：没有办法完成谜板
输入：board = [[4,1,2],[5,0,3]]
输出：5
解释：
最少完成谜板的最少移动次数是 5 ，
一种移动路径:
尚未移动: [[4,1,2],[5,0,3]]
移动 1 次: [[4,1,2],[0,5,3]]
移动 2 次: [[0,1,2],[4,5,3]]
移动 3 次: [[1,0,2],[4,5,3]]
移动 4 次: [[1,2,0],[4,5,3]]
移动 5 次: [[1,2,3],[4,5,0]]
输入：board = [[3,2,4],[1,5,0]]
输出：14
 */
var slidingPuzzle = function(board) {
    let target = [1,2,3,4,5,0];
    let queue = [[].concat(...board)];
    let neighbor = [[1,3],[0,2,4],[1,5],[0,4],[3,5,1],[2,4]];
    let visited = {};
    let step = 0;
    while(queue.length>0){
        let len = queue.length;
        for(i=0;i<len;i++){
            let tmp = queue.shift();
            // 结束条件
            if(tmp.toString()===target.toString()) return step;
            // 找到0
            let index = tmp.findIndex(v=>!v);
            for(let j=0;j<neighbor[index].length;j++){
                // 交换位置，并把交换后的结果入栈
                let list = [...tmp];
                [list[neighbor[index][j]],list[index]] = [list[index],list[neighbor[index][j]]];
                if(!visited[list.toString()]){
                    queue.push(list);
                    visited[list.toString()] = true;
                }
            }
        }
        step++;
    }
    return -1;
}
console.log(slidingPuzzle([[4,1,2],[5,0,3]]));