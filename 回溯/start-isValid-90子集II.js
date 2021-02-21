/*
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/
var subsetsWithDup = function(nums) {
  let res = []; // 结果集
  let track = [];
  backtrack(nums.sort((a,b)=>a>b?1:a<b?-1:0),0,track);
  return res;
  // 回溯算法
  function backtrack(nums,start,track){
      // 每轮结束，将结果放入res
      res.push(track.slice());

      // 选择列表
      for(let i=start;i<nums.length;i++){
          // 如果和上一个数相同的话，就不选了
          if(i>start && nums[i]===nums[i-1]){
              continue;
          }
          // if(isSame(nums,i)){
          //     continue;
          // }
          // 做选择
          track.push(nums[i]);
          // 下一步应该向后找,从当前的值向后
          backtrack(nums,i+1,track);
          // 回撤
          track.pop();
      }
  }
  // function isSame(nums,i){
  //     // 如果nums[i]在之前(nums[0...i])出现过了，不应该再出现了，在回溯算法中应该直接跳过
  //     return nums.slice(0,i).indexOf(nums[i])!==-1;
  // }
};