var maxAreaOfIsland = function(grid) {
    let m = grid.length,
        n = grid[0].length;
    let q = [];
    let res = 0;
    if(!grid || m===0){
        return 0;
    }
    let tmp = [[0,-1],[1,0],[0,1],[-1,0]];
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1){
                let area = 0;
                q.push([i,j]);

                while(q.length>0){
                    let len = q.length;
                    while(len--){
                        let [x,y] = q.shift();
                        // 上下左右方向遍历，发现有相接的为“1”，直接置“0”即可
                        if(x<0 || x>=m || y<0 || y>=n || grid[x][y]===0){
                            continue;
                        }
                        grid[x][y] = 0;
                        ++area;
                        for(let k=0;k<tmp.length;k++){
                            q.push([x+tmp[k][0],y+tmp[k][1]]);
                        }
                    }
                }
                res = Math.max(res,area);
            }
        }
    }
    return res;
};

var maxAreaOfIsland = function(grid) {
    let m = grid.length,
        n = grid[0].length;
    if(!grid || m===0){
        return 0;
    }
    let res = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            res = Math.max(res,dfs(grid,i,j,m,n));
        }
    }
    return res;
    function dfs(grid,i,j,m,n){

        if( i<0 || j<0 || i>=m || j>=n || grid[i][j]===0){
            return 0;
        }
        grid[i][j] = 0;
        let count = 1+dfs(grid,i+1,j,m,n)+dfs(grid,i-1,j,m,n)+dfs(grid,i,j-1,m,n)+dfs(grid,i,j+1,m,n);
        return count;
    }
};