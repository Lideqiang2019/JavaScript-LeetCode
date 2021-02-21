/**
 * 
 * @param {*} head 
 * 142. 环形链表 II
 */
var detectCycle = function(head) {
    /**
     * 找到第一次相遇的节点，记住为p，按照慢指针的速度
     * 从相遇点到入环点和从头节点到入环节点距离应该相等，所以记录从head到入环点即可
     */
    
    let fast = head, slow = head; 
    while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next
        if(slow==fast){
            // 记录p的位置,跳出循环
            var p = slow
            break
        }
    }
    
    if(fast==null || fast.next==null){
        return null
    }

    let q=head
    while(p!=q){
        p = p.next
        q = q.next
    }
    return q
};

/**
 * 876. 链表的中间结点
 */
var middleNode = function(head) {
    /**
     * 快指针走到底的时候，慢指针应该就是中间节点
     */
    let p=head,q=head
    while(q!=null && q.next!=null){
        p = p.next
        q = q.next.next
    }
    return p
};

/**
 * 19. 删除链表的倒数第N个节点
 */

var removeNthFromEnd = function(head, n) {
    /**
     * 找到链表的倒数第n个节点
     * 可以让快指针先走n步，慢指针再走，等快指针走到最后的时候，则慢指针为要删除的节点
     * 节点删除即可
     */
    let slow = head, fast = head
    while(n){
        fast = fast.next
        n--
    }
    if(fast==null){
        return head.next
    }
    while(fast!=null && fast.next!=null){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return head
};

/**
 * 
 * @param {*} numbers 
 * @param {*} target 
 * 167. 两数之和 II - 输入有序数组
 */
var twoSum = function(numbers, target) {
    /**
     * 二分查找，也可以用hashmap
     * 两个指针，固定一个指针，查找，涉及到查找，则考虑用二分查找
     * 此题已经排序好了，更加暗示了这一点
     * 但是此题不能够跳着让right = mid，否则容易跳过
     */
    let left=0, right = numbers.length-1
    while(left<right){
        let sum = numbers[left] + numbers[right]
        if(sum==target){
            return [left+1,right+1]
        }else if(sum>target){
            right--
        }else{
            left++
        }
    }
    return [-1,-1]
};

var findTarget = function(numbers, target) {
    /**
     * 二分查找，也可以用hashmap
     * 两个指针，固定一个指针，查找，涉及到查找，则考虑用二分查找
     * 此题已经排序好了，更加暗示了这一点
     * 但是此题不能够跳着让right = mid，否则容易跳过
     */
    let left=0, right = numbers.length-1
    while(left<right){
        let mid = left + Math.floor((right - left)/2)
        if(numbers[mid]==target){
            return mid
        }else if(numbers[mid]>target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return -1
};

/**
 * 344. 反转字符串
 */
var reverseString = function(s) {
    let n = s.length
    /**
     * 好像控制双指针也能解决问题
     */
    let p=0, q= n-1
    while(p<q){
        [s[p],s[q]] = [s[q],s[p]]
        p++
        q--
    }
    return s
};

// console.log(findTarget([1,2,3,4,1].sort(),2))
var removeDuplicates = function(nums) {
    /**
     * 排序好的数组
     * 比较当前的nums[slow]与nums[fast]如果二者相等的话，需要去重，将当前的fast赋值给slow
     */
    let slow = 0, fast = 0
    while(fast<nums.length){
        if(nums[slow]!==nums[fast]){
            // 只要记录不重复的就可以了
            slow++
            nums[slow] = nums[fast]
        }else{
            fast++
        }
    }
    return nums.slice(0,slow+1)
};

/**
 * 
 * @param {*} head 
 * 83. 删除排序链表中的重复元素
 */

var deleteDuplicates = function(head) {
    if(!head) return null
     let slow = head, fast=head
     while(fast!=null){
         if(slow.val!=fast.val){
            slow = slow.next
            slow.val = fast.val
         }else{
             fast = fast.next
         }
     }
     slow.next = null
     return head
};

/**
 * 
 * @param {*} nums 
 * @param {*} val 
 * 27. 移除元素
 */

var removeElement = function(nums, val) {
    /**
     * 一下能想到用冒泡，但其实还可以用快慢指针解决
     */
    let slow = 0,fast = 0
    while(fast<nums.length){
        if(nums[fast]!=val){
            
            nums[slow] = nums[fast] 
            slow++
        }
        fast++
    }
    return slow
};

/**
 * 
 * @param {*} nums 
 * 283. 移动零
 */
var moveZeroes = function(nums) {
    /**
     * 将0移动到末尾，依然是快慢指针
     */
    let slow = 0, fast = 0
    while(fast<nums.length){
        // 如果是0
        if(nums[fast]!=0){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    for(let i=slow;i<nums.length;i++){
        nums[i] = 0
    }
    return nums
};