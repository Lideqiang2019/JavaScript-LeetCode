/**
 * https://www.nowcoder.com/questionTerminal/14c0359fb77a48319f0122ec175c9ada
 */
/**
 * 考虑，尽可能平均地分配葡萄，才能让吃的多的人吃的最少。而/_\a,b,c可以组成一个三角形，当然如果c边过大，那么考虑将c分成两段。
 * 取最长边设置为c
 * 情况一：a+b>c,那么只要找到a,b,c边的中点即可平分，但有可能不能整除，用Math.ceil()向上取整
 * 情况二：a+b<=c, 若c>2*(a+b),那么只要取c的中点，否则还是可以去a,b,c三者中点，向上取整即可。
 */
let input = [];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function solution(input){
    let n = parseInt(input[0]);
    // console.log(input);
    // console.log(2**53 - 1);
    for(let i=1;i<n+1;i++){
        let arr = input[i].split(' ').map(x=>BigInt(x));
        arr.sort((a,b)=>(a>b)?1:a<b?-1:0);
        let a = arr[0], b = arr[1], c = arr[2];
        console.log(ave(a,b,c).toString());
    }
}

function ave(a,b,c){
    let sum  = a + b + c;
    console.log(sum,sum / 3n);
    // console.log(a,b,c,a+b,a+b>c);
    if(a+b>c){
    //res.push(Math.ceil(sum/3));
        return (sum + 2n) / 3n;
    }
    if(c>2n*(a+b)){
         return (c+1n)/ 2n;
    }
    return (sum+2n) / 3n;
}

rl.on('line',line=>{
    input.push(line);
    let n = parseInt(input[0]);
    if(input.length===n+1){
        solution(input);
    }
})


