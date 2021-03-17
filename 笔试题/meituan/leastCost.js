const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function leastCost(line){
    let cost = 0,
        buy = 0;
    for(let i=1;i<line.length;i++){
        let nums = line[i].split(' ').map(x=>parseInt(x));
        let [x,y] = nums;
        if(x>=y){
            buy +=x;
            cost +=(x-y);
        }else{
            buy +=y;
        }
    }
    return buy.toString() + ' '+cost.toString()
}

let input = [];
rl.on('line',(line)=>{
    input.push(line);
    if(input.length===parseInt(input[0])+1){
        console.log(leastCost(input));
    }
})