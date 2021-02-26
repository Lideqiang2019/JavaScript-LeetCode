/**
 * 215. 数组中的第K个最大元素
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 */
var findKthLargest = function(nums, k) {
    function partition(nums,lo,hi){
        let pivot = nums[lo];
        let i = lo,
            j = hi + 1;
        while(true){
            while(nums[--j]>pivot){
                if(j===lo) break;
            }
            while(nums[++i]<pivot){
                if(i===hi) break;
            }
            if(i>=j) break;
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
        [nums[j],nums[lo]] = [nums[lo],nums[j]];
        return j;
    }
    // 快速选择
    let left = 0,
        right = nums.length-1;
    k = nums.length - k;
    while(left<=right){
        let p = partition(nums,left,right);
        if(p<k){
            left = p + 1;
        }else if(p>k){
            right = p - 1;
        }else{
            return nums[p];
        }
    }
    return -1;
};