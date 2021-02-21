/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * 1. 两数之和
 */

var twoSum = function(nums, target) {
    /**
     * hashmap，数组未必有序，所以不能用二分查找
     */
    let index = {}
    for(let i=0;i<nums.length;i++){
        index[nums[i]] = i
    }
    for(let j=0;j<nums.length;j++){
        let other = target - nums[j]
        if(index[other]!=undefined && index[other]!=j){
            return [j,index[other]]
        }
    }
    return [-1,-1]
};