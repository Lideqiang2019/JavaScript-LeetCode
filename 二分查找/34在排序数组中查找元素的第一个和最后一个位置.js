/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 */
var searchRange = function(nums, target) {
    // 其实是找左右边界
    let res = [];
    if(nums.length===0){
        return [-1,-1];
    }
    let first = findLeftBound(nums,target);
    if(first===-1){
        return [-1,-1];
    }
    return [first,findRightBound(nums,target)];
    function findRightBound(nums,target){
        if (nums.length == 0) return -1;
        let left = 0,
            right = nums.length;
        while(left<right){
            let mid = left + Math.floor((right - left)/2);
            if(nums[mid]>target){
                right = mid;
            }else if(nums[mid]<target){
                left = mid + 1;
            }else{
                left = mid + 1;
            }
        }
        return left - 1;
    }
    function findLeftBound(nums,target){
        if (nums.length == 0) return -1;
        let left = 0,
            right = nums.length;
        while(left<right){
            let mid = left + Math.floor((right - left)/2);
            if(nums[mid]>target){
                right = mid;
            }else if(nums[mid]<target){
                left = mid + 1;
            }else{
                right = mid;
            }
        }
        if(nums[left]===target){
            return left;
        }
        return -1;
    }
};