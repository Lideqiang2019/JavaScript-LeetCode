const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function findNums(input){
    // 正则表达式
    let paterrn = /[0-9]+/g; 
    let nums = input.match(paterrn).map(x=>parseInt(x));
    nums.sort((a,b)=>a>b?1:a<b?-1:0);
    for(let i=0;i<nums.length;i++){
        console.log(nums[i].toString());
    }
    return;
}

rl.on('line',(line)=>{
    findNums(line);
})