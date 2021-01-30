let pattern1 = /[bl]at/gi;
let str = 'BlatatblaBat';
console.log(str.indexOf(str.match(pattern1)[0]));

let str1 = 'https://www.baidu.com:8000/html/page1.html';
let pattern2 = /(\w+):\/\/([^/:]+)(:\d+)?\/([\^html/page1.html\$]+)/; // w匹配所有字符数字和——
let res  = str1.match(pattern2);
console.log(res);
console.log(...'abc')
console.log(Array.from('abc'))
console.log(new Array(3))

let arr = [1,5,10,15,5,12,17];
console.log(arr);
arr.sort((a,b)=>(a>b)?1:-1);
console.log(arr);