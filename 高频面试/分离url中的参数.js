function getUrlParam(sUrl, sKey) {
    var paramArr = sUrl.split('?')[1].split('#')[0];
    const args = {};
    for (const element of paramArr.split('&').map(kv => kv.split('='))) {
        const key = element[0];
        const val = element[1];
        if (args[key] == void 0) {
            // 如果key是第一次加入
            args[key] = val;
        } else {
            // 如果之前已经加入了，则加入的应该是一个数组
            args[key] = [].concat(args[key], val);
        }   
    }
    return sKey == void 0 ? args : args[sKey] || '';
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',(line)=>{
    let inputs = line.split(' ');
    console.log(getUrlParam(inputs[0],inputs[1]));
})