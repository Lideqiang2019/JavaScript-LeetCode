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