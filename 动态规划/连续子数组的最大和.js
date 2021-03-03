function maxSubArray(nums){
    // 定义dp[i]表示以i为结尾的最大子数组之和
    let n = nums.length;
    let dp = new Array(n).fill(0);
    dp[0] = nums[0];
    for(let i=1;i<n;i++){
        // 选择，加入当前的数，或者不加,如果dp已经小于0，那么放弃
        dp[i] = Math.max(nums[i],dp[i-1]+nums[i]);
    }
    let max = 0;
    for(let i=0;i<n;i++){
        max = Math.max(max,dp[i]);
    }
    return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4] ));

let obj = {
    name: "bytedance",
    fun: function(){
        console.log(this.name);
    }
}
let a = obj.fun;
a(); // undefined