const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function LengthOfLIS(input){
    let nums = input[1].split(' ').map(x=>parseInt(x));
    let n = nums.length;
    let dp = new Array(n).fill(1);
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i] = Math.max(dp[i],dp[j]+1);
            }
        }
    }
    let res = 0;
    for(let i=0;i<n;i++){
        res = Math.max(res,dp[i]);
    }
    return res;
}

let input = [];
rl.on('line',(line)=>{
    input.push(line);
    if(input.length===parseInt(input[0][0])+1){
    // if(input.length===2){
        console.log(LengthOfLIS(input));
    }
})