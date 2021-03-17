function callNums(input){
    /**
     * input
     * 
     */
}

let input = [[3,1],[2,3],[3,2],[2,1],[1,2]];

function leastMove(input){
    /**
     * input中包含的是坐标
     */
    let res = 0;
    for(let coords of input){
        let [i,j] = coords;
        res += dfs(i,j);
    }
    return res;
}


function dfs(i,j){
    // 返回步数
    /**
     * i,j是当前的坐标
     */
    // 超出边界
    let x = i,
        y = j;
    if(x<0 || y<0 || x>=n || y>=n){
        return 0;
    }

    if((x===i && y===i) || (x===j && y===j)){
        return 1;
    }

    return dfs(i+1,j)+dfs(i-1,j)+dfs(i,j-1)+dfs(i,j+1);
}