// Problem: 移除数组中的元素(返回新的数组)
// 描述：移除数组arr中的所有值和item相等的元素。不要直接修改数组，结果返回新的数组 //
  ```js
  function remove(arr, item) { //TODO}
  let newArray = remove([1,2,3,4,2],2);//[1,3,4]
```
// @interview start
// 原地修改数组
function removeElemet(arr, item) {
  let n = arr.length;
  let left = 0,
    right = 0;
  for (let i = 0; i < n; i++) {
    if(arr[right]!=item){
      arr[left] = arr[right];
      left++;
    }
    right++;
  }
  return arr.slice(0,left+1)
}

// @interview end
