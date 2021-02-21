/**
 * 
 * @param {*} arr 
 * 969. 煎饼排序
 */
var pancakeSort = function(arr) {
    /**
     * 解决思路：本题没有说是最优，所以每次将最大的值翻转到最后面，然后递归即可。但是应该注意的是，每次移动最大值，需要两次翻转，总        共需要2(n-1)次翻转。
     */
    let res = [];
    let len = arr.length;
    sort(arr,len);
    return res;
    function sort(arr, n){
        if(n<2){
            // 递归结束，不用再递归了
            return;
        }
        // 找最值
        let max_value = 0;
        let max_index = 0;
        for(let i=0;i<n;i++){
            if(max_value<arr[i]){
                max_value=arr[i];
                max_index=i;
            }
        }
        // 翻转reverse
        // 将最大值翻转到最前面了
        reverse(arr,0,max_index);
        res.push(max_index+1);
        // 将最大值翻转到最后面
        reverse(arr,0,n-1);
        res.push(n);
        // n排序好了,递归完成n-1,直到base case
        sort(arr,n-1);
    }
    function reverse(arr,i,j){
        while(i<j){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++,j--;
        }
    }
};