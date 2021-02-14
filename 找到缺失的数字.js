/**
 * 
 * @param {*} nums 
 * 448. 找到所有数组中消失的数字
 * 【笔记】将所有正数作为数组下标，置对应数组值为负值。那么，仍为正数的位置即为（未出现过）消失的数字。

举个例子：

原始数组：[4,3,2,7,8,2,3,1]

重置后为：[-4,-3,-2,-7,8,2,-3,-1]
 */
var findDisappearedNumbers = function(nums) {

    let res = [];
    for(let i=0;i<nums.length;i++){
        let index = Math.abs(nums[i])-1;
        nums[index] =-Math.abs(nums[index]);
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            res.push(i+1);
        }
    }
    return res;
};