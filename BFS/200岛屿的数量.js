var numIslands = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    let q = [];
    let nums = 0;
    if(!grid || m===0){
        return 0;
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==='0'){
                continue;
            }
            if(grid[i][j]==='1'){
                nums++;
            }
            q.push([i,j]);
            grid[i][j]='0';

            while(q.length>0){
                let len = q.length;
                while(len--){
                    let [x,y] = q.shift();
                    // 上下左右方向遍历，发现有相接的为“1”，直接置“0”即可
                    if(x>0 && grid[x-1][y]==='1'){
                        q.push([x-1,y]);
                        grid[x-1][y] = '0';
                    }

                    if(x+1<m && grid[x+1][y]==='1'){
                        q.push([x+1,y]);
                        grid[x+1][y] = '0';
                    }

                    if(y>0 && grid[x][y-1]==='1'){
                        q.push([x,y-1]);
                        grid[x][y-1] = '0';
                    }

                    if(y+1<n && grid[x][y+1]==='1'){
                        q.push([x,y+1]);
                        grid[x][y+1] = '0';
                    }
                }
            }
        }
    }
    return nums;
}