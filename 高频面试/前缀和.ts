/**
 * 560. 和为K的子数组
 * @param nums 
 * @param k 
 * 此时时间复杂度比较大，可以用hashmap让时间复杂度降下来，降成O(n)
 */
function subarraySum(nums: number[], k: number): number {
    let ans:number = 0;
    let n:number = nums.length;
    let sum:Array<number> = new Array(n+1).fill(0); 
    for(let i=0;i<n;i++){
        sum[i+1] = sum[i] + nums[i];
    }
    console.log(sum);
    for(let i=1;i<=n;i++){
        for(let j=0;j<i;j++){
            if(sum[i] - sum[j] === k){
                ans++;
                console.log(nums.slice(j,i));
            }
        }
    }
    return ans;
};
console.log(subarraySum([1,2,0,3,4],3));

function subarraySumPro(nums: number[], k: number): number {
    // 思路是sum[j] = sum[i] - k，用hashmap记录一下sum[j]
    let ans:number = 0;
    let n:number = nums.length;
    let map = new Map(); 
    map.set(0,1);
    let sum_i:number = 0;
    for(let i=0;i<=n;i++){
        sum_i = nums[i] + sum_i;
        let sum_j:number = sum_i - k;
        if(map.has(sum_j)){
            ans +=map.get(sum_j);
        }
        map.set(sum_i,map.get(sum_i)?map.get(sum_i)+1:1);
    }
    return ans;
};

console.log(subarraySumPro([1,2,0,3,4],3));