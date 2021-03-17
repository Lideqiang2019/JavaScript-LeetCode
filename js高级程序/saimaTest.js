const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


function solution(input){
    let nums = input[0].split(' ').map(x=>parseInt(x));
    let res = [];
    let [m,n] = nums;
    // 判断该数是否为水仙花数
    for(let i=m;i<n;i++){
        if(isNarcissistic(i)){
            res.push(i);
        }else{
            continue;
        }
    }
    return res;
}

function isNarcissistic(num){
    let hundred = Math.floor(Math.floor(num/10)/10);
    let dec = Math.floor(num/10)%10;
    let unit = num%10;
    if(hundred**3 + dec**3 + unit**3 === num){
        return true;
    }else{
        return false;
    }
}

let input = [];
rl.on('line',(line)=>{
    input.push(line);
    if(input.length===1){
        console.log(solution(input).toString());
    }
})