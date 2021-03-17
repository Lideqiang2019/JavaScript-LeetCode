const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function getPromotedNums(input){
    let counts = input[0].split(' ').map(x=>parseInt(x));
    let scores = input[1].split(' ').map(x=>parseInt(x));
    console.log(counts);
    scores.sort((a,b)=>a>b?-1:a<b?1:0); // 降序排列
    let promoted = scores.slice(0,counts[1]);
    console.log(promoted);
    // 去除0
    let i=promoted.length-1;
    while(i>0 && promoted[i]===0){
        i--;
    }
    return i+1;
}
let input = [];
rl.on('line',(line)=>{
    input.push(line);
    if(input.length===2){
        console.log(getPromotedNums(input));
    }
})