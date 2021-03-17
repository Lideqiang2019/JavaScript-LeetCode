const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function countNums(input){
    // 用一个map维护每一个窗口（k大小）中的每个数的数量，求出众数
    let [n,k] = input[0].split(' ').map(x=>parseInt(x));
    let nums = input[1].split(' ').map(x=>parseInt(x));
    for(let i=0;i<n-k+1;i++){ // 是N-k？
        console.log(getMost(nums.slice(i,i+k)));
    }
    function getMost(nums){
        let map = {};
        for(let i=0;i<nums.length;i++){
            map[nums[i]] != undefined?map[nums[i]]++:map[nums[i]]=1;
        }
        // 对map的value排序
        let most = nums[0];
        Object.keys(map).forEach((key,val)=>{
            if(map[key]>map[most]){
                most = key;
            }
            if(map[key]===map[most]){
                if(key<most){
                    most = key;
                }
            }
        })
        return most;
    }
}

let input = [];
rl.on('line',(line)=>{
    input.push(line);
    if(input.length===2){
        countNums(input);
    }
})