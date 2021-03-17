const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function solution(inputs){
    inputs.shift();
    let res = [];
    for(let i=0;i<inputs.length;i++){
        if(i%2===1){
            res.push(getMaxValue(inputs[i]));
        }
    }
    return res.join(' ');
}

function getMaxValue(input){
    // 环形子数组的最大和
    let nums = input.split(' ').map(x=>parseInt(x));
    let maxTillHere = nums[0],
        maxIntotal = nums[0],
        minTillHere = nums[0],
        minIntotal = nums[0],
        sum = nums[0];
    for(let i=1;i<nums.length;i++){
        sum += nums[i];
        if(maxTillHere+nums[i]>nums[i]){
            maxTillHere = maxTillHere + nums[i];
        }else{
            maxTillHere = nums[i];
        }
        maxIntotal = Math.max(maxIntotal,maxTillHere);
        if(minTillHere+nums[i]<nums[i]){
            minTillHere = minTillHere + nums[i];
        }else{
            minTillHere = nums[i];
        }
        minIntotal = Math.min(minIntotal,minTillHere);
    }
    if(sum===minIntotal){
        // 全是负数
        return maxIntotal;
    }
    return Math.max(sum-minIntotal,maxIntotal);
}
let inputs = [];
rl.on('line',(line)=>{
    inputs.push(line);
    if(inputs.length===1+2*inputs[0]){
        // console.log(getMaxValue(input));
        console.log(solution(inputs));
    }
})