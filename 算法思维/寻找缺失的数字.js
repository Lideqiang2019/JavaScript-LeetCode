/**
 * 448. 找到所有数组中消失的数字
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:

输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
 */
/**
 * 此题不适合用位运算，因为有多个缺失的
 */
// 1. 排序，然后遍历一下，找到索引和value不对应的数字，但是不满足时间复杂度的要求
// 2. 找到每个值的索引，对应索引的值将其变成原来的相反数，如果出现了两次的数，索引会负负得正，其余只出现一次的全为负，那么找到正的数的索引即可

var findDisappearedNumbers = function(nums) {
    let res = [];
    for(let i=0;i<nums.length;i++){
        let index = Math.abs(nums[i])-1; // 索引是从0开始的
        nums[index] =-Math.abs(nums[index]);
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            res.push(i+1);
        }
    }
    return res;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));

