/**
 * 正则表达式匹配检查
 */
let map = new Map();
key = "1"
map.set(key,1)
console.log(map.get(key))
console.log(map.has(key))

dic[1] = "ss"
dic[2] = "sss"
console.log(dic[1])
console.log(2 in dic)
var isMatch = function(s, p) {
    // 状态与选择
    // dp表示s[i..]与p[j..]能够匹配,做这题说明dp的形式可以多样的，其实也有点回溯算法的意思。
    // 2. 选择列
    return dp(s,0,p,0)
    function dp(s,i,p,j){
        let m=s.length, n=p.length;
        // 1. 结束条件
        if(j===n){
            return i===m;
        }
        if(i===m){
            if((n-j)%2===1){
                return false;
            }
            // 检查是否为x*y*z*形式
            for(;j+1<n;j+=2){
                if(p[j+1]!='*'){
                    return false;
                }
            }
            return true;
        }
        // 记录i,j消除重叠子wenti 
        let memo = {}
        let key = i.toString() + ',' + j.toString();
        if(key in memo){
            return memo[key];
        }
        var res = false;
        if(s[i]===p[j] || p[j]==='.'){
            if(j<n-1&&p[j+1]==='*'){
                // p有*，匹配0个或者多个
                res = dp(s,i,p,j+2) || dp(s,i+1,p,j)
            }else{
                res = dp(s,i+1,p,j+1)
            }
        }else{
            if(j<n-1&&p[j+1]==='*'){
                res = dp(s,i,p,j+2)
            }else{
                res = false;
            }
        }
        // 将当前结果记入备忘录
        memo[key] = res;
        return res;
    }
};
