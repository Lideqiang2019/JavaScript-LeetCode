/**
 * 96. 不同的二叉搜索树
 */
var numTrees1 = function (n) {
    /**
     * 动态规划？其实不用动态规划的思路解决，只要找到递归式子即可
     * 以i为根节点，能够找到f(i)*f(n-i)个不同的子树，其中f(i)以i为结尾的不同二叉搜索树的个数
     */
    let f = new Array(n + 1).fill(0);
    f[0] = 1;
    f[1] = 1; // 如果就一个，那么有一种，这个是base case
    for (let j = 2; j <= n; j++) {
        for (let i = 0; i < j; i++) { // 选择
            f[j] += f[i] * f[j - i - 1];
        }
    }
    return f[f.length - 1];
};

var numTrees = function (n) {
    /**
     递归解法
     */
    let memo = {};
    function dp(n) {
        // base case
        if (n <= 1) {
            return 1;
        }
        let res = 0;
        console.log('1', res);
        // 选择
        if (n in memo) return memo[n];
        for (let i = 0; i < n; i++) {
            res += dp(i) * dp(n - i - 1);
        }
        console.log('2', res);
        memo[n] = res;
        return memo[n];
    }

    return dp(n);
};

// console.log(numTrees(3));

/**
 * 
 * @param {*} n 
 * 95
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var generateTrees = function (n) {
    /**
     * f(n) = sum(f(i)* f(n-i))   1<= i <=n;
     * 此时不是求方法数，而是递归地构造树 f(n) = f(0,i-1)与f(i+1,n)组合
     */
    if (n === 0) return [];
    return hepler(1, n);
    function hepler(start, end) {
        let res = [];
        if (start > end) {
            return [null];
        }
        // 递归找到左右子树,hepler返回子树的列表
        for (let i = start; i <= end; i++) {
            let leftChildren = hepler(start, i - 1);
            let rightChildren = hepler(i + 1, end);
            console.log(leftChildren, rightChildren);
            // 找到左右子树后，递归构建
            for (let left of leftChildren) {
                for (let right of rightChildren) {
                    let root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    res.push(root);
                }
            }
        }
        return res;
    }
};

generateTrees(3);