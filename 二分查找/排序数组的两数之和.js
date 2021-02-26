let arr = [1,3,2,5,7],
    target = 9;

function findTarget(arr,target){
    arr.sort((a,b)=>(a>b)?1:(a<b)?-1:0);
    let left = 0,
        right = arr.length - 1 ;
    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum===target){
            return [left,right];
        }else if(sum<target){
            left++;
        }else{
            right--;
        }
    }
    return [-1,-1];
}
console.log(findTarget(arr,target));