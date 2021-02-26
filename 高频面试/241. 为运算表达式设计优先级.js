/**
 * 给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号包含 +, - 以及 * 。

示例 1:

输入: "2-1-1"
输出: [0, 2]
解释: 
((2-1)-1) = 0 
(2-(1-1)) = 2
示例 2:

输入: "2*3-4*5"
输出: [-34, -14, -10, -10, 10]
解释: 
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/different-ways-to-add-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var memo = {};
var diffWaysToCompute = function(input) {
    let res = [];
    if(input in memo){
        return memo[input];
    }
    for(let i=0;i<input.length;i++){
        if(input[i]=='+'||input[i]=='-'||input[i]=='*'){
            // 开启分
            let left = diffWaysToCompute(input.slice(0,i));
            let right = diffWaysToCompute(input.slice(i+1));
            for(let a of left){
                for(let b of right){
                    if(input[i]=='+'){
                        res.push(a+b);
                    }
                    if(input[i]=='-'){
                        res.push(a-b);
                    }
                    if(input[i]=='*'){
                        res.push(a*b);
                    }
                }
            }
        }
    }
    if(res.length===0){
        // 如果res为空，input不是一个算式
        res.push(parseInt(input));
    }
    memo[input] = res;
    return res;
};