/**
 * 2021-02-25：给定一个正数数组arr，请把arr中所有的数分成两个集合。如果arr长度为偶数，
 * 两个集合包含数的个数要一样多；如果arr长度为奇数，两个集合包含数的个数必须只差一个。
 * 请尽量让两个集合的累加和接近，返回最接近的情况下，较小集合的累加和。
 */
/**
 * 有点像目标和，考虑递归和背包解法
 * 但题目中有
 * 1. 个数相等，或者只差1
 * 2. 累加和尽可能接近
 */
// dp()
var sortTwoArr = function(arr){
    let count = 0;
    let len = arr.length;
    if(len<2) return 0;
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    // 分两种情况
    if(len&1===0){
        // 如果长度是偶数
        return dp(arr,0,len/2,Math.floor(sum/2));
    }else{
        // 如果长度是奇数
        let res1 = dp(arr,0,Math.floor(len/2),Math.floor(sum/2)); // 少取一个数
        let res2 = dp(arr,0,Math.floor(len/2)+1,Math.floor(sum/2)) // 多取一个数
        if(res1<res2){
            return res2;
        }else{
            return res1;
        }
    }
    function printIndent(n){
        let s = '';
        for(let i=0;i<n;i++){
            s+='    ';
        }
        return s;
    }
    function dp(arr,i,picks,rest){ // 输入需要取的个数和剩余取值和，返回取值和,rest是控制让返回值接近一半的，picks设置是让结果尽量接近的
        // 结束条件，所有的数都取了一遍
        console.log(printIndent(count++)+`i=${i},picks=${picks},rest=${rest}`)
        if(i===len){
            // 判断是否picks为0 ，如果只能取0个就返回0,
            if(picks===0){
                console.log(printIndent(--count)+`return 0`)
                return 0;
            }else{
                console.log(printIndent(--count)+`return -1`)
                return -1;
            }
        }
        // 选择，选或者不arr[i]
        let p1 = dp(arr,i+1,picks,rest); // 不选 

        let p2 = -1;
        let next = -1;

        // 选了
        if(rest>=arr[i]){
            next = dp(arr,i+1,picks-1,rest-arr[i]);
        }
        if(next!=-1){
            // 如果选了
            p2 = next + arr[i];
        }
        let max = Math.max(p1,p2)
        console.log(printIndent(--count)+`return ${max}`)
        return max;
    }

}

console.log(sortTwoArr([1,2,3,4,100]));