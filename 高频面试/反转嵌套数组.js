var a = [1,[2,[3,null]]];
var b = [1,2,3,4,5];
console.log(b.slice(0,2));

function reverse(arr){
    var left =  arr[0];
    var right = arr[1];
    var tmp = null;
    while(right){
        tmp = [left,tmp];
        left = right[0];
        right = right[1];
    };
    tmp = [left,tmp];
    return tmp;
};

console.log(reverse(a));
