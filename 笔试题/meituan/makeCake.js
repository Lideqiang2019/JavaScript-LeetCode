const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function makeCake(input){
    let line1 = input[0].split(' ').map(x=>parseInt(x));
    let line2 = input[1].split(' ').map(x=>parseInt(x));
    let [n,m,a,b] = line1;
    // 1. 已经烤好的不能大于a,b中较大的，也不能小于a,b中较小的，否则便取不到最大和最小为a,b的数了
    // 2. 如果n-m比较小，虽然满足条件1，但是不能再做蛋糕了
    let al_max = Math.max(a,b),
        al_min = Math.min(a,b);
    for(let w of line2){
        if(w>al_max || w<al_min){
            return 'NO';
        }
    }
    // 先判断有几个满足条件了，如果部分满足条件，需要进一步确定
    // 1. 如果还没有满足条件，还剩n-m<2是不行的
    // 2. 如果有一个没有满足条件，n-m<1是不行的
    let flag = 0;
    for(let w of line2){
        if(w===a && a!==b){
            flag += 1;
        }
        if(w===b && a!==b){
            flag +=1;
        }
        if((w===a || w===b)&& a===b){
            flag = 1;
        }
    }
    if(flag===0 && (n-m)<2){
        return 'NO';
    }
    if(flag===1 && (n-m)<1){
        return 'NO';
    }
    return 'YES';
}

let input = [];
rl.on('line',(line)=>{
    input.push(line);
    if(input.length===2){
        // 一组数据
        console.log(makeCake(input));
        input = [];
    }
})