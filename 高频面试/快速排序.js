/**
 * 快速排序的思想是分而治之，“随机”选择一个数，让数组中的左边数小于这个数，右边的数都大于这个数
 * 递归地执行这个“划分”函数
 * 如果不随机选的话，快排的排序优势没有堆排序好，最好是O（nlogn），最坏的是O（n^2）
 */
function quickSort(nums){
    let n= nums.length-1;
    sort(nums,0,n);
    return nums;
}

function sort(nums,lo,hi){
    if(lo>=hi) return;
    let p = partition(nums,lo,hi);
    sort(nums,lo,p-1);
    sort(nums,p+1,hi);
}

function partition(nums,lo,hi){
    // 本来应该随机取，这里取第一个，假设数组是打乱的
    if(lo===hi) return lo;
    let pivot = nums[lo];
    let i = lo,
        j = hi+1;
    while(true){
        while(nums[--j]>pivot){
            // 找到第一个不满足大于p的索引
            if(j===lo) break;
        }
        while(nums[++i]<pivot){
            if(i==hi) break;
        }

        if(i>=j) break;
        // 交换i和j位置上的数
        [nums[i],nums[j]] = [nums[j],nums[i]];
    }

    // 交换pivot
    [nums[lo],nums[j]] = [nums[j],nums[lo]];
    return j;
}

console.log(quickSort([3,2,4,1]));