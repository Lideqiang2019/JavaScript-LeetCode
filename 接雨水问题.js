/**
 * 42. 接雨水
 */
// 1. 暴力解法
var trap = function(height) {
    let n = height.length;
    let ans = 0;
    for(let i=1;i<n-1;i++){
        let left = 0, right=0;
        for(let j=i;j<n;j++){
            right = Math.max(right,height[j]);
        }
        for(let j=i;j>=0;j--){
            left = Math.max(left,height[j]);
        }
        ans +=Math.min(left,right) - height[i];
    }
    return ans;
};

// 2. 备忘录优化,在每次迭代的过程中都要计算左边最小值和右边最大值，可以一次性计算l_max[i],i左边的最小值，和r_max[n],[i,n]最大值
var trap_memo = function(height) {
    let n = height.length;
    let l_max = new Array(n).fill(0);
    let r_max = new Array(n).fill(0);
    let ans = 0;

    // base case
    l_max[0] = height[0];
    r_max[n-1] = height[n-1];

    for(let i=1;i<n-1;i++){
        l_max[i] = Math.max(height[i],l_max[i-1]);
    }
    for(let j=n-2;j>=0;j--){
        r_max[j] = Math.max(height[j],r_max[j+1]);
    }

    for(let i=1;i<n-1;i++){
        ans +=Math.min(l_max[i],r_max[i]) - height[i];
    }
    return ans;
};

// console.log(trap_memo([0,1,0,2,1,0,1,3,2,1,2,1]));

var trap_double_points = function(height){
    let n = height.length;
    let left = 1, right = n-1;
    let l_max = height[0];
    let r_max = height[n-1];
    let ans = 0;
    while(left<=right){
        l_max = Math.max(height[left],l_max);
        r_max = Math.max(height[right],r_max);
        
        if(l_max<r_max){
            ans += l_max - height[left];
            left++;
        }else{
            ans += r_max - height[right];
            right--;
        }
    }
    return ans;
}

console.log(trap_double_points([4,2,0,3,2,5]));