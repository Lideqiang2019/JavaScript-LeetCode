let base = 123;
function superPow(a,b){
    /**
     * 返回一个幂运算结果
     */
    if(b.length===0) return 1;
    let tmp = b.pop();
    let part1 = myPowPro(a,tmp);
    let part2 = myPowPro(superPow(a,b),10)
    return (part1*part2) % base;
    function myPow(a,k){
        let res = 1;
        a %= base;
        for(let i=0;i<k;i++){
            res *=a;
            a%=base;
        }
        return res;
    }
}
console.log(superPow(2,[1,0]));
console.log(2**10%123);

// 对幂运算可以优化
// a**b = if(b%2==0) ((a)^(b/2))^2 else a*a^(b-1)
function myPowPro(a,k){
    if(k==0) return 1;
    let res = null;
    if(k%2===0){
        // 是偶数,递归
        res = myPowPro(a,k/2)**2%base;
    }else{
        res = a*myPowPro(a,k-1)%base;
    }
    return res;
}