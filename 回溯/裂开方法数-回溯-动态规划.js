/**
 * https://my.oschina.net/u/4553401/blog/4961211
 * 2021-02-23：给定一个正数n，求n的裂开方法数。规定：后面的数不能比前面的数小 。比如4的裂开方法有： 1+1+1+1、1+1+2、1+3、2+2、4，5种，所以返回5。
 */
// 一般用动态规划的场景是求数量，没有具体的结果，回溯一般有具体的结果，回溯可能会有重复的子问题，可以用动态规划优化
// 1. 回溯法，画出图，但是这题似乎更适合动态规划
// 允许从重复的时候不用考虑start，去重可以在选择的时候选择，这里是要求必须是递增的
function getDifferSumWays(num){
    let res = [];
    let track = [];
    let count = 0;
    backtrack(track,num);
    return res;
    function backtrack(track,rest){
        // 结束条件
        if(rest===0){
            res.push(track.slice());
            count++;
        }
        for(let i=1;i<=rest;i++){
            // 保证顺序
            if(i<track[track.length-1]){
                continue;
            }
            track.push(i);
            backtrack(track,rest-i);
            track.pop();
        }
    }
}
console.log(getDifferSumWays(4));

function printIndet(n){
    let s = '';
    for(let i=0;i<n;i++){
        s+='    ';
    }
    return s;
}
// 2. 递归，明确dp含义
function getDifferSumWaysPro(num){
    let count = 0;
    if(num<=0) return 0;
    if(num===1) return 1;
    return dp(1,num);

    function dp(start, rest){
        // dp表示还有rest条件下，可以拼凑的方法数
        // base case
        console.log(printIndet(count++)+`start=${start},rest=${rest}`);
        if(rest===0){
            console.log(printIndet(--count)+`return 1`);
            return 1;
        }
        let ans = 0;
        // 选择
        for(let i=start;i<=rest;i++){
            ans +=dp(i,rest-i);
        }
        console.log(printIndet(--count)+`return ${ans}`);
        return ans;
    }
}

console.log(getDifferSumWaysPro(4));

function getDifferSumWaysProMax(num){
    let dp  = new Array(num+1).fill(0).map(x=>new Array(num+1).fill(0));
    // dp[start][rest]表示还剩rest的数字时，用start...rest可以拼凑的方法数
    // base case dp[...][0] = 0,因为没有可以剩余用来拼凑的数字了 dp[i][i]=1 
    // dp[start][rest] = dp[start][rest-start] + dp[start+1][rest]
    for(let i=0;i<=num;i++){
        dp[i][i] = 1;
        dp[i][0] = 0;
    }

    for(let start = num - 1;start>=1;start--){
        for(let rest = start+1;rest<=num;rest++){
            dp[start][rest] = dp[start][rest-start] + dp[start+1][rest] // 入股start> rest-start那么更新rest-start，否则让start++
        }
    }
    return dp[1][num];
}

// 压缩技巧
