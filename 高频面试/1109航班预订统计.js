/**
 * 1109. 航班预订统计
这里有 n 个航班，它们分别从 1 到 n 进行编号。

我们这儿有一份航班预订表，表中第 i 条预订记录 bookings[i] = [j, k, l] 意味着我们在从 j 到 k 的每个航班上预订了 l 个座位。

请你返回一个长度为 n 的数组 answer，按航班编号顺序返回每个航班上预订的座位数。

 

示例：

输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
输出：[10,55,45,25,25]
 */

class Difference{
    constructor(nums) {
        this.nums = nums;
        this.diff = new Array(this.nums.length);
        this.diff[0] = this.nums[0];
        for(let i=1;i<nums.length;i++){
            this.diff[i] = this.nums[i] - this.nums[i-1];
        }
    }
    increment(i,j,val){
        // 给nums的i,j都增加val
        this.diff[i] += val;
        if(j<this.nums.length-1){
            // 只有j在数组中才有必要-val
            this.diff[j+1] -= val;
        }
        
    }
    result(){
        let res = new Array(this.diff.length).fill(0);
        res[0] = this.diff[0];
        for(let i=1;i<this.diff.length;i++){
            res[i] = res[i-1] + this.diff[i];
        }
        return res;
    }
}

// let nums = [1,2,3,4,5];
// let df = new Difference(nums);
// df.increment(1,1,3);
// console.log(df.result());
var corpFlightBookings = function(bookings, n) {
    
    let nums = new Array(n).fill(0);
    let df = new Difference(nums);
    for(let i=0;i<bookings.length;i++){
        let [lo,hi,val] = bookings[i];
        lo--;
        hi--;
        df.increment(lo,hi,val);
    }
    return df.result();
};
console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]],5));