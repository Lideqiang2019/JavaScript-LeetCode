const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function fixedAfterPoints(line){
    let nums = line.split(' ').map(x=>parseInt(x));
    let res = 0,
        n = nums.length,
        count = 0;
    for(let i=0;i<n;i++){
        res += (i+1)*nums[i];
        count +=nums[i];
    }
    let ave = String((res/count).toFixed(3));
    // 保留一位小数，可以先toString
    let s = ave.split('.');
    let int = s[0];
    let p = s[1][0];
    return (int+'.'+p);
}

let input = [];
rl.on('line',(line)=>{
    console.log(fixedAfterPoints(line));
})