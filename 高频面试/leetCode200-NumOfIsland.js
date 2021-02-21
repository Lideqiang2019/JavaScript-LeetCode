/**
 * 岛屿的数量 200
 * 可以用三种方法解决
 * 1. DFS
 * 2. BFS
 * 3. Union-Find 虽然用Union-Find比较费事，但是是掌握该算法的好机会
 */
/***
 * 思考：这道题为什么用BFS和DFS，其实是遍历，而回溯算法解决的是可能的情况，一步一步地尝试。BFS能够解决对于每一小步，都按照几种情况进行遍历，并且做事。
 * 思路：遍历找到为“1”的网格，更新小岛的数量，置“0”，并且搜索上下左右是否还有为“1”，如果有，则置“0”,并递归搜索上下左右，直到递归条件结束
 */
let grid = [
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

// 1. DFS解法
const numIslands_DFS = function (grid) {
    let m = grid.length,
        n = grid[0].length,
        res = 0;// 初始化结果数量为0
    if (!grid || m === 0) {
        return res;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++;
                // 递归置零，搜索上下左右
                dfs(grid, i, j, m, n);
            }
        }
    }
    return res;

    function dfs(grid, i, j, m, n) { // 功能是递归查找与置零
        // 结束条件
        if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === '0') {
            return;
        }
        // 置“0”
        grid[i][j] = '0';

        dfs(grid, i + 1, j, m, n);
        dfs(grid, i - 1, j, m, n);
        dfs(grid, i, j - 1, m, n);
        dfs(grid, i, j + 1, m, n);
    }
};

// console.log(numIslands_DFS(grid));
// 2. BFS
var numIslands_BFS = function (grid) {
    let m = grid.length,
        n = grid[0].length,
        res = 0,
        q = [];// 初始化结果数量为0

    if (!grid || m === 0) {
        return res;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++;
                q.push([i, j]);
                // console.log(q);
                grid[i][j] = '0';
                // 递归置零，搜索上下左右,这里变成bfs,q里面放的是为1的坐标。
                while (q.length !== 0) {
                    let [x,y] = q.shift();
                    // console.log(q,x,y);
                    if (x < m - 1 && grid[x + 1][y] === '1') {
                        q.push([x + 1, y]);
                        // console.log(q);
                        grid[x + 1][y] = '0';
                    }
                    if (x > 0 && grid[x - 1][y] === '1') {
                        q.push([x - 1, y]);
                        grid[x - 1][y] = '0';
                    }
                    if (y > 0 && grid[x][y - 1] === '1') {
                        q.push([x, y - 1]);
                        grid[x][y - 1] = '0';
                    }
                    if (y < n - 1 && grid[x][y + 1] === '1') {
                        q.push([x, y + 1]);
                        grid[x][y + 1] = '0';
                    }
                }
            }
        }
    }
    return res;
}

// console.log(numIslands_BFS(grid));

// 3. Union-Find
class UF {
    constructor(N) {
        this.count = N;
        let parent = [];
        let size = [];// 一个union包含的weights
        for (let i = 0; i < N; i++) {
            parent[i] = i; // 根节点
            size[i] = 1;
        }
        this.parent = parent;
        this.size = size;
    }
    // 将两个节点连通
    union(p, q) {
        // 尽量平衡
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP === rootQ) {// 已经是一个union了
            return;
        }
        // this.parent[rootP] = rootQ;//将rootP指向rootQ
        if (this.size[rootP] > this.size[rootQ]) {
            // rootP节点重
            this.parent[rootQ] = rootP; // 将节点轻的指向节点重的
            this.size[rootQ] += this.size[rootP];
        } else {
            this.parent[rootP] = rootQ;
            this.size[rootP] += this.size[rootQ];
        }
        this.count--;
    }
    // 找到一个union的根节点
    find(x) {
        while (x != this.parent[x]) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }
    // 判断两个节点是否相连
    connected(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        return rootP === rootQ;
    }
    countNum() {
        return this.count;
    }
}

var numIslands_UF = function (grid) {
    let m = grid.length,
        n = grid[0].length,
        waters = 0;// 初始化结果数量为0
    if (!grid || m === 0) {
        return res;
    }

    let uf = new UF(m*n);
    let d = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '0') {
                waters++;
            }else{
                // 使用union算法，归类,四个方向
                for (let k = 0; k < 4; k++) {
                    let x = i + d[k][0];
                    let y = j + d[k][1];
                    if (x>=0 && y>=0 && x<m && y<n && grid[x][y] === '1') {
                        uf.union(x * n + y, i * n + j);
                    }
                }
            }
        }
    }
    return uf.countNum() - waters;
}

console.log(numIslands_UF(grid));