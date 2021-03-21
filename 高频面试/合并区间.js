function merge(intervals){
    // 对intervals的起点进行排序
    intervals.sort((a,b)=>a[0]>b[0]?1:a[0]<b[0]?-1:0);
    /**
     * 找到i对应的left和right,找下一个区间的起点，如果起点小于当前的right，那么比较right和下一个区间的右端点组成新的区间
     */
    let res = [];
    let len = intervals.length;
    let i = 0;
    while(i<len){
        let left = intervals[i][0],
            right = intervals[i][1];
        while(i<len-1 && intervals[i+1][0]<=right){
            right = Math.max(right,intervals[i+1][1]);
            i++;
        }
        res.push([left,right]);
        i++;
    }
    return res;
}

console.log(merge([[10,30],[40,60],[80,100],[150,180],[160,190]]));