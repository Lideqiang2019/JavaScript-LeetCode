/**
 * 2021-02-28：给定一个整型数组arr，和一个整数num。某个arr中的子数组sub，如果想达标，必须满足：sub中最大值 – sub中最小值 <= num，返回arr中达标子数组的数量。

福哥答案2021-02-28：

采用两个双端队列，存序号。maxWindow从大到小，minWindow从小到大。
1.两个双端队列同时右扩。当最大值-最小值大于sum，退出循环。
2.计数。
3.删除双端队列左边的过期序号。
有代码。
 */

function countNum(arr,num){
    /**
     * 这题可以使用暴力解法，每次求区间内的最大值和最小值，差值后比较，如果满足条件更新结果。
     * 使用双端队列可以将时间复杂度从o(N^2)降低到O(N)
     */
    let n = arr.length;
    let count = 0;
    let right = 0;
    if(n<1 || num<0){
        return 0;
    }
    let maxQueue = [];
    let minQueue = [];
    for(let left = 0;left<n;left++){
        while(right<n){
            // 维护最大队列
            while(maxQueue.length>0 && arr[maxQueue[maxQueue.length-1]]<=arr[left]){
                maxQueue.pop();
            }
            maxQueue.push(left);

            // 维护最小队列
            while(minQueue.length>0 && arr[minQueue[minQueue.length-1]]>=arr[left]){
                minQueue.pop();
            }
            minQueue.push(left);

            // 判断是否满足条件
            if((arr[maxQueue[0]]-arr[minQueue[0]])>num){
                break;
            }else{
                right++;
            }
        }
        count += right - left;
        // 删除过期的窗口
        if(maxQueue[0]===left){
            maxQueue.shift();
        }
        if(minQueue[0]===left){
            minQueue.shift();
        }
    }
    return count;
}

console.log(countNum([1,2],6));