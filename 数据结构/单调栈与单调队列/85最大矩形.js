var largestRectangleArea = function(heights) {
    // 和接雨水差不太多，找到最左侧比当前大的，找到最右侧比当前大的坐标，求结果
    let n = heights.length;
    let res = 0;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let stk = [];
    // 左边单调栈，求出i节点最左边的坐标
    for(let i=0;i<n;i++){
        while(stk.length>0 && heights[stk[stk.length-1]]>=heights[i]){
            stk.pop();
        }
        left[i] = stk.length>0?stk[stk.length-1]:-1;
        stk.push(i);
    }

    stk = [];
    for(let i=n-1;i>=-1;i--){
        while(stk.length>0 && heights[stk[stk.length-1]]>=heights[i]){
            stk.pop();
        }
        right[i] = stk.length>0?stk[stk.length-1]:n;
        stk.push(i);
    }
    console.log(left,right);
    for(let i=0;i<n;i++){
        res = Math.max(res,(right[i]-left[i]-1)*heights[i]);
    }
    return res;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));


