/**
 * 645. 错误的集合
集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。

给定一个数组 nums 代表了集合 S 发生错误后的结果。

请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

 

示例 1：

输入：nums = [1,2,2,4]
输出：[2,3]
示例 2：

输入：nums = [1,1]
输出：[1,2]
 */

var findErrorNums = function(nums) {
    /**
     * 如果有重复的数字，其对应的索引一定是同一个，第一次遇到这个重复的value是，索引对应的值是正的，变成负的，下次再遇到肯定是负的
     */
    let n = nums.length;
    let dumpy = -1;
    for(let i=0;i<n;i++){
        let index = Math.abs(nums[i])-1;
        if(nums[index]<0){
            dumpy = nums[i];
        }else{
            nums[index] *= -1; 
        }
    }
    // 找缺失的
    let missing = -1;
    for(let i=0;i<n;i++){
        if(nums[i]>0){
            missing = i+1;
        }
    }
    return [dumpy,missing];
};

console.log(findErrorNums([1,1]));