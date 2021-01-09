/**
 * 
 * @param {*} nums1 
 * @param {*} nums2 
 * 下一个更大的元素
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = new Array(nums1.length).fill(0)
    for(let i=0;i<nums1.length;i++){
        for(let j = nums2.indexOf(nums1[i]);j<nums2.length;j++){
            if(nums2[j]>nums1[i]){
                ans[i] = nums2[j] 
                break
            }else{
                ans[i] = -1
            }
        }
    }
    return ans
};

