const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function transform(input){
    input.shift();
    let arr = [];
    for(let i=0;i<input.length;i++){
        arr.push(input[i].split(' ').map(x=>parseInt(x)));
    }
    let m = arr.length,
        n = arr[0].length;
    let arr1 = new Array(m).fill(0).map(x=>new Array(n).fill(0));
    // 需要沾着较小的值转
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            arr1[j][i] = arr[i][j];
        }
    }

    for(let i=0;i<n;i++){
        console.log(arr1[i].join(' '));
    }
    
}

let input = [];
rl.on('line',(line)=>{
    input.push(line);
    let row = parseInt(input[0][0]);
    if(input.length===1+row){
        transform(input);
    }
})