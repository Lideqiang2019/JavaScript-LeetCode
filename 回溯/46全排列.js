/**
 * 46. 全排列
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */
var permute = function(nums) {
    let res = [];
    let track = [];
    backtrack(nums,0,track);
    return res;

    function backtrack(nums,i,track){
        if(nums.length===track.length){
            res.push(track.slice());
            return;
        }
        for(let i=0;i<nums.length;i++){
            // 如果track中已经有了数字，则调到下一个选择
            if(track.indexOf(nums[i])!==-1){
                continue;
            }
            track.push(nums[i]);
            backtrack(nums,i+1,track);
            track.pop();
        }
    }
};