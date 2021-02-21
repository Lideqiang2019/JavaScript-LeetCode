function intervalSchedule(intvs){
    let n = intvs.length;
    // 1. 排序, 以end来排序
    intvs.sort((a,b)=>(a[1]>b[1])?1:(a[1]<b[1])?-1:0);

    // 2. 按照贪心策略，每次选取end最靠前的（最短的），以谋求最多的不重叠子区间
    let x_end = intvs[0][1];
    let count = 1;
    for(const inv of intvs){
        let start = inv[0];
        if(start>=x_end){
            // 跳过去
            count++;
            x_end = inv[1];
        }
    }
    return count;
}

let arr = [[1,2], [2,3], [3,4], [1,3]];
console.log(intervalSchedule(arr));

/**
 * 
 * @param {*} intervals 435. 无重叠区间
 */
var eraseOverlapIntervals = function(intervals) {
    // 求最多不重叠的子区间个数
    let n = intervals.length;
    return n - intervalSchedule(intervals);
    function intervalSchedule(intvs){
        let n = intvs.length;
        if(n===0){
            return 0;
        }
        // 1. 排序, 以end来排序
        intvs.sort((a,b)=>(a[1]>b[1])?1:(a[1]<b[1])?-1:0);

        // 2. 按照贪心策略，每次选取end最靠前的（最短的），以谋求最多的不重叠子区间
        let x_end = intvs[0][1];
        let count = 1;
        for(const inv of intvs){
            let start = inv[0];
            if(start>=x_end){
                // 跳过去
                count++;
                x_end = inv[1];
            }
        }
        return count;
    }
};

/**
 * 
 * @param {*} intvs 452. 用最少数量的箭引爆气球
 */
var findMinArrowShots = function(intvs) {
    let n = intvs.length;
    if(n===0) return 0;
    // 1. 排序, 以end来排序
    intvs.sort((a,b)=>(a[1]>b[1])?1:(a[1]<b[1])?-1:0);

    // 2. 按照贪心策略，每次选取end最靠前的（最短的），以谋求最多的不重叠子区间
    let x_end = intvs[0][1];
    let count = 1;
    for(const inv of intvs){
        let start = inv[0];
        if(start>x_end){
            // 跳过去
            count++;
            x_end = inv[1];
        }
    }
    return count;
};