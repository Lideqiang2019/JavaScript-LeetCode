/**
 * 
  43. 字符串相乘
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    /**
     * 模拟计算乘法的过程，注意对于string，+ js处理的是合并字符串，
     * 需要特殊处理。
     */
    let m = num1.length;
    let n = num2.length;
    let res = new Array(m+n).fill(0);
    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            let mul = (parseInt(num1[i]))*(parseInt(num2[j]));               
            let p1 = i+j;
            let p2 = i+j+1;
            let sum = mul + res[p2];
            res[p2] = sum%10;
            res[p1] += Math.floor(sum/10);
        }
    }
    // 处理前面有0的情况,跳过这些0
    let i=0;
    while(i<res.length && res[i]===0){
        i++;
    }

    // 将其转换为string
    return res.slice(i).join('')?res.slice(i).join(''):'0';
};

/**
 * 用字符串解决Number溢出问题，而不用BigInt
 */
/**
 * 
 * @param {String} nums1 
 * @param {String} nums2
 * @return {String}
 */
var addString = function(nums1,nums2){
    // 对于大于min_num的，用补“0”的方式
    let m = nums1.length;
    let n = nums2.length;
    let sz = m>n?m:n;
    let nums_max = m>n?nums1:nums2;
    let nums_min = m>n?nums2:nums1;
    nums_min = nums_min.padStart(sz,'0');
    let res = new Array(sz+1).fill(0);

    for(let i=sz-1;i>=0;i--){
        let add_num = parseInt(nums_min[i]) + parseInt(nums_max[i]);
        let sum = add_num + res[i+1]; // 必须加上当前位，再考虑进位的事，对于乘法也是一样的
        res[i+1] = sum%10;// 对于个位来说
        res[i] += Math.floor(sum/10);//对于进位来说
    }

    let i=0;
    while(i<res.length && res[i]===0){
        i++;
    }
    return res.slice(i).join('');
}
console.log(addString('42003103152479041','20076611207083201'));
