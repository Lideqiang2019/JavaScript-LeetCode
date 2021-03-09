// 查找数组中的第二大的数，要求时间复杂度为O（n）
// k = 2
function findKNum(nums){
    let max = nums[0],
        second = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            second = max; // 这个很重要，要将大旗给第二个变量
            max = nums[i]; // 更新最大值
        }else{
            // 如果不大于max则判断是否大于第二大的值，如果大于则赋值，否则跳过
            if(nums[i]>second){
                second = nums[i];
            }
        }
    }
    return [max,second];
}

console.log(findKNum(Array.from(range(199))));

function* range(n){
    for(let i=0;i<n;i++){
        yield i;
    }
}

console.log(Array.from(range(19)));