/**
 * 
 * @param {*} nums 
 */
// 给定一个数组[1,2,3,4] 输出下一个更大元素的数组[2,3,4,-1]
/**
 * 
 * @param {*} nums 
 * 单调栈可以节省时间，可以将比当前i小的元素全都pop出去，只留下较大的元素，那么最近的下一个元素，比i大
 */
var nextGreaterElement = function(nums){
    let res = new Array(nums.length);
    let stack = [];
    for(let i=nums.length-1;i>=0;i--){
        // 将比i小的元素从栈中取出
        while(nums.length>0 && nums[i]>=stack[stack.length-1]){
            stack.pop();
        }
        // 如果栈为空，那么没有下一个更大的元素
        res[i] = stack.length===0?-1:stack[stack.length-1];
        // 把当前元素放入栈中，和i之前的元素比较
        stack.push(nums[i]);
    }
    return res;
}

/**
 * @param {*} nums 
 * 下一个更大的元素，循环数组
 */
var nextGreaterElementLoop = function(nums){
    let res = new Array(nums.length);
    let n = nums.length;
    let stack = [];
    for(let i=2*n-1;i>=0;i--){
        // 将比i小的元素从栈中取出
        while(nums.length>0 && nums[i]>=stack[stack.length-1]){
            stack.pop();
        }
        // 如果栈为空，那么没有下一个更大的元素
        res[i%n] = stack.length===0?-1:stack[stack.length-1];
        // 把当前元素放入栈中，和i之前的元素比较
        stack.push(nums[i%n]);
    }
    return res;
}

console.log(nextGreaterElementLoop([1,2,1]));

var dailyTemperatures = function(T) {
    /**
     * 单调栈和下一个较大的元素基本一致
     * 需要一个栈，存储较大的数，而放弃较小的数，以便能够降低时间复杂度
     */
    let stack = [];
    let n = T.length;
    let res = new Array(T.length).fill(0);
    for(let i=n-1;i>=0;i--){
        while(stack.length!==0 && T[i]>=T[stack[stack.length-1]]){
            stack.pop();
        }
        res[i] = stack.length===0?0:Math.abs(i-stack[stack.length-1]);
        stack.push(i);
    }
    return res;
};

// console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));