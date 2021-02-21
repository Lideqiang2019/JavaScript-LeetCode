const readline = require('readline');
const input = []
const maxLine = 3
const rl = readline.createInterface({
    input: process.stdin,
    outputL: process.stdout

})

function solution(input){
    const arr = input[1].split(' ').map(e=>parseInt(e));
    const sum = parseInt(input[2])
    const len = arr.length;
    console.log(arr)
    console.log(sum)
    let i=0, j=len - 1;
    while(i<j){
        let res = arr[i] + arr[j];
        if(res<sum){
            i++;
        }else if(res>sum){
            j--;
        }else{
            return `${arr[i]} ${arr[j]}`
        }
    }
    return 'notfound'
}

rl.on('line',(line)=>{
    input.push(line)
    if(input.length===maxLine){
        console.log(solution(input))
    }
})