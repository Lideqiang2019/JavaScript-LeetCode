function merge(arr1,arr2){
    // 双指针解法
    let res = [];
    let i=0,
        j = 0;
    while(arr1[i]!=undefined && arr2[j]!=undefined){
        if(arr1[i]<=arr2[j]){
            res.push(arr1[i]);
            i++;
        }else{
            res.push(arr2[j]);
            j++;
        }
    }
    if(i<arr1.length-1){
        res.push(...arr1.slice(i,arr1.length))
    }else{
        res.push(...arr2.slice(j,arr2.length));
    }
    return res;
}

console.log(merge([1,2,2,3],[2,3,4]));