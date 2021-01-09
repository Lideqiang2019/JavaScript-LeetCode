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



/**
 * 层序遍历的方法
 */


 /**
  * 单调栈，下一个最大的数
  */
 var nextGreaterElements = function(nums) {
    /**
     * 单调栈，从后向前,但这个是一个环形数组, 可以使用i%n技巧，将i索引变到nums的索引范围内，相当于实现了环形数组的形式，而不用加长数组了
     */
    let n = nums.length
    let ans = new Array(2*n).fill(0)
    let stack = []
    nums = nums.concat(nums)
    for(let i=nums.length-1;i>=0;i--){
        // 栈里面保存较大的数，小的全部pop出去
        while(stack.length!==0 && stack.slice(-1)<=nums[i]){
            stack.pop()
        }
        ans[i] = stack.length===0?-1:stack.slice(-1)
        stack.push(nums[i])
    }
    // 默认处理最后一个数
    return ans.slice(0,n)
};

// 优化,但是内存好像没有怎么优化
var nextGreaterElements = function(nums) {
    /**
     * 单调栈，从后向前,但这个是一个环形数组, 可以使用i%n技巧，将i索引变到nums的索引范围内，相当于实现了环形数组的形式，而不用加长数组了
     */
    let n = nums.length
    let ans = new Array(n).fill(0)
    let stack = []
    // nums = nums.concat(nums)
    for(let i=2*n-1;i>=0;i--){
        // 栈里面保存较大的数，小的全部pop出去
        while(stack.length!==0 && stack.slice(-1)<=nums[i%n]){
            stack.pop()
        }
        ans[i%n] = stack.length===0?-1:stack.slice(-1)
        stack.push(nums[i%n])
    }
    // 默认处理最后一个数
    return ans
};


/**
 * 二叉搜索树的最近祖先
 */
var lowestCommonAncestor = function(root, p, q) {
    /**
     * 1. lowestCommonAnecstor返回一个公共祖先
     * 2. 
     */

    if(root.val>p.val && root.val>q.val){
        return lowestCommonAncestor(root.left, p, q)
    }
    if(root.val<q.val && root.val<p.val){
        return lowestCommonAncestor(root.right,p,q)
    }
    return root
};

/**
 * 二叉树的公共祖先
 */

var lowestCommonAncestor = function(root, p, q) {
    if(root==null) return null
    if(root==p || root==q) return root

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    // 三种情况
    if(left!==null && right!==null){
        return root
    }
    if(left==null && right==null){
        return null
    }
    return left==null?right:left
};
