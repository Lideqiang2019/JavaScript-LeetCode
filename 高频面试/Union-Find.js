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

// let uf = new UF(5);
// console.log(uf.countNum());
let board = [
            ["X", "O", "O", "X", "X", "X", "O", "X", "O", "O"],
            ["X", "O", "O", "X", "X", "X", "X", "X", "X", "X"],
            ["X", "X", "X", "X", "O", "X", "X", "X", "X", "X"],
            ["X", "O", "X", "X", "X", "O", "X", "X", "X", "O"],
            ["O", "X", "X", "X", "O", "X", "O", "X", "O", "X"],
            ["X", "X", "O", "X", "X", "O", "O", "X", "X", "X"],
            ["O", "X", "X", "O", "O", "X", "O", "X", "X", "O"],
            ["O", "X", "X", "X", "X", "X", "O", "X", "X", "X"],
            ["X", "O", "O", "X", "X", "O", "X", "X", "O", "O"],
            ["X", "X", "X", "O", "O", "X", "O", "X", "X", "O"]
        ];
let res = [
            ['X', 'O', 'O', 'X','X', 'X', 'O', 'X','O', 'O'],
            ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X','X', 'X'],
            ['X', 'X', 'X', 'X','X', 'X', 'X', 'X','X', 'X'],
            ['X', 'X', 'X', 'X','X', 'X', 'X', 'X','X', 'O'],
            ['O', 'X', 'X', 'X','X', 'X', 'X', 'X','X', 'X'],
            ['X', 'X', 'X', 'X','X', 'X', 'X', 'X','X', 'X'],
            ['O', 'X', 'X', 'X','X', 'X', 'X', 'X','X', 'O'],
            ['O', 'X', 'X', 'X','X', 'X', 'X', 'X','X', 'X'],
            ['X', 'X', 'X', 'X','X', 'X', 'X', 'X','O', 'O'],
            ['X', 'X', 'X', 'O','O', 'X', 'O', 'X','X', 'O']
];
var solve = function (board) {
    let m = board.length;
    let n = board[0].length;
    let uf = new UF(m * n + 1); // 初始化很多个根的union
    let dumpy = m * n; // 给dumpy留个位置，为了让周边的O不会变
    // 先把边界上的O归入dumpy
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            uf.union(i * n, dumpy);
        }
        if (board[i][n - 1] === 'O') {
            uf.union(i * n + n - 1, dumpy);
        }
    }

    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') {
            uf.union(j, dumpy);
        }
        if (board[m - 1][j] === 'O') {
            uf.union((m - 1) * n + j, dumpy);
        }
    }
    let d = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (board[i][j] === 'O') {
                // 使用union算法，归类,四个方向
                for (let k = 0; k < 4; k++) {
                    let x = i + d[k][0];
                    let y = j + d[k][1];
                    if (board[x][y] === 'O') {
                        uf.union(x * n + y, i * n + j);
                    }
                }
            }
        }
    }

    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (!uf.connected(dumpy, i * n + j)) {
                board[i][j] = 'X';
            }
        }
    }
    return board;
}
// console.log(solve(board));
// console.log('b'.charCodeAt(0));
var equationsPossible = function(equations) {
    let uf = new UF(26);
    for(const s of equations){
        if(s[1]==='='){
            uf.union(s.charCodeAt(0)-97,s.charCodeAt(3)-97);
        }
    }
    for(const s of equations){
        if(s[1]!='='){
            if(uf.connected(s.charCodeAt(0)-97,s.charCodeAt(3)-97)){
                // 冲突了
                return false
            }
        }
    }
    return true;
};

console.log(equationsPossible(["b==a","a==b"]));


