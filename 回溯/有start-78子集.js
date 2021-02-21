/*
78 . 子集1
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
*/
var subsets = function(nums) {
    let res = []; // 结果集
    let track = [];
    backtrack(nums,0,track);
    return res;
    // 回溯算法
    function backtrack(nums,start,track){
        // 每轮结束，将结果放入res
        res.push(track.slice());

        // 选择列表
        for(let i=start;i<nums.length;i++){
            // 做选择
            track.push(nums[i]);
            // 下一步应该向后找,从当前的值向后
            backtrack(nums,i+1,track);
            // 回撤
            track.pop();
        }
    }
};
