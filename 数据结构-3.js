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

/**
 * 
 * @param {*} head 
 * 回文链表
 */
var isPalindrome = function(head) {
    // 用栈来解决，这里的递归可以产生栈
    let left = head;
    let res = true;
    return traverse(head)
    function traverse(right){
        if(right==null) return true
        // 先压栈，即递归走到链表最右边
        let res = traverse(right.next)
        res = res&&(left.val===right.val)
        left = left.next
        return res
    }
};


var isPalindrome = function(head) {
    // 用栈来解决，这里的递归可以产生栈
    /*
    let left = head;
    let res = true;
    return traverse(head)
    function traverse(right){
        if(right==null) return true
        // 先压栈，即递归走到链表最右边
        let res = traverse(right.next)
        res = res&&(left.val===right.val)
        left = left.next
        return res
    }
     */
    /**
     * 不用额外的栈空间，即在原链表上判断是否为回文链表。
     * 利用快慢指针，慢指针找到链表的中间位置，然后两边往里面判断是否为回文链表
     */
    let slow = head, fast = head;
    while(fast!=null && fast.next!=null){
        let p = slow // 用于换原链表
        slow = slow.next
        fast = fast.next.next
    }
    if(fast!=null) {
        p = slow
        slow = slow.next // 如果是奇数，中间的节点不应该反转
    }

    let left = head
    let right = traverse(slow) // 将slow后的链表反转
    while(right!=null){
        if(left.val!==right.val) return false
        left = left.next
        right = right.next
    }
    p.next = traverse(q)
    return true

    function traverse(head){// 反转链表
        let pre = null, cur = head
        while(cur!=null){
            let next = cur.next
            cur.next = pre
            pre = cur
            cur =  next
        }
        return pre
    }
};

/**
 * 
 * @param {*} head 
 * @param {*} k 
 * 反转k个链表
 */
var reverseKGroup = function(head, k) {
    /**
     * 这道题目有子问题的感觉，可以开启递归模式，不过head需要变一下
     * 理解reverseKGroup应该返回的是反转的头节点
     */
    let a = head, b = head
    let newNode = null
    for(let i=0;i<k;i++){
        if(b==null){
            return head
        }
        b =  b.next
    }  
    newNode = reverse(a,b) // 前k个节点的反转成功
    a.next = reverseKGroup(b,k)
    return newNode
};

function reverse(a,b){
    // 反转[a,b)之间的链表
    let pre=null, cur = a, nxt = a
    while(cur!=b){
        nxt = cur.next
        cur.next = pre
        pre = cur
        cur = nxt
    }
    return pre
}
