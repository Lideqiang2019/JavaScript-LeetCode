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

function merge( A, m, B, n ) {
    // write code here
    while(m>0 && n>0){
        if(A[m-1]>B[n-1]){
            A[m+n-1] = A[m-1];
            m--;
        }else{
            A[m+n-1] = B[n-1];
            n--;
        }
    }
    if(n>0){
        for(let i=0;i<n;i++){
            A[i] = B[i];
        }
    }
    return A;
}