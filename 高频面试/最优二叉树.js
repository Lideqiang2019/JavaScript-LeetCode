
// const readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

let input = [];
function solution(nums){
    // let nums = arr.split(' ').map(x=>parseInt(x));
    // console.log(nums);
    if(nums.length<=1){
        return 0;
    }
    return dp(nums,-1,0,nums.length - 1);
}

function dp(nums,cur,left,right){
    // dp含义是输入nums和以i为根节点的左子树边界和右子树边界，输出最小开销
    let ans = Number.MAX_SAFE_INTEGER;
    if(right-left+1===0){
        return 0;
    }
    for(let i=left;i<=right;i++){
        let tmp = 0;
        if(cur>=0){
            tmp = nums[cur]*nums[i];
        }
        // 递归
        ans = Math.min(ans,tmp+dp(nums,i,left,i-1) + dp(nums,i,i+1,right));
    }
    return ans;
}

// rl.on('line',(line)=>{
//     input.push(line);
//     console.log(input);
//     if(input.length===2){
//         console.log('SS')
//         console.log(solution(input[1]));
//     }
// })

console.log(solution([7,6,5,1,3]))