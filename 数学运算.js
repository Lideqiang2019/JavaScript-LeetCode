/**
 * 
 * @param {*} n 
 * 191. 位1的个数
 */
var hammingWeight = function(n) {
    /**
     * 利用数学运算
     */
    let res = 0
    while(n!==0){
        n = n&(n-1) // 将第n个1变成0，同时赋值给新的n
        res++
    }
    return res
};

/**
 * 231. 2的幂
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false
    return ((n)&(n-1)) === 0
};

/**
 * 
 * @param {*} nums 136. 只出现一次的数字
 */

var singleNumber = function(nums) {
    let res = 0
    for(let num of nums){
        res ^=num
    }
    return res
};

/**
 * 172. 阶乘后的零
 */
var trailingZeroes = function(n) {
    let res = 0
    for(let i=5;i<=n;i=i*5){
        res += Math.floor(n/i)
    }
    return res
};

/**
 * 793. 阶乘函数后K个零
 */
var preimageSizeFZF = function(K) {
    return rightBound(K) - leftBound(K) + 1
    

    /**
     * 可以用暴力循环的方式查找n能够产生k个0的数
     */
    function leftBound(target){
        let lo = 0, hi = Number.MAX_SAFE_INTEGER
        while(lo<hi){
            let mid = lo + Math.floor((hi - lo)/2)
            if(trailingZeroes(mid)>target){
                hi = mid
            }else if(trailingZeroes(mid)<target){
                lo = mid + 1
            }else{
                hi = mid
            }
        }
        return lo
    }

    function rightBound(target){
        let lo = 0, hi = Number.MAX_SAFE_INTEGER
        while(lo<hi){
            let mid = lo + Math.floor((hi - lo)/2)
            if(trailingZeroes(mid)>target){
                hi = mid
            }else if(trailingZeroes(mid)<target){
                lo = mid + 1
            }else{
                lo = mid + 1
            }
        }
        return lo - 1
    }
};
var trailingZeroes = function(n) {
        let res = 0
        for(let i=n;Math.floor(i/5)>0;i=Math.floor(i/5)){
            res += Math.floor(i/5)
        }
        return res
    };