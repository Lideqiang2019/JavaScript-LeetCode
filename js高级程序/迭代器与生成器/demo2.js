function *generatorFn(){
    yield 'foo';
    yield 'bar';
    return 'baz';
}
let generateObj = generatorFn();
console.log(generateObj.next());
console.log(generateObj.next());
console.log(generateObj.next());

for(const x of generateObj){
    console.log(x);
}

function *nTimes(n){
    while(n--){
        yield;
    }
}

for(let _ of nTimes(3)){
    console.log('foo');
}

function *generatorFn1(initial){
    console.log(initial);
    console.log(yield);
    console.log(yield);
}
let generateObj1 = generatorFn1('foo');
generateObj1.next('bar');
generateObj1.next('baz');
generateObj1.next('aa');
console.log(generateObj1.next('bb'));

// yield可以用来产生无穷计数器
function *generatorFn2(){
    for(let i=0;;i++){
        yield i;
    }
}

let generateObj2 = generatorFn2();
console.log(generateObj2.next());
console.log(generateObj2.next());
console.log(generateObj2.next());
console.log(generateObj2.next());

// range数组填充
function *range(start,end){
    while(start<end){
        yield start++;
    }
}

function *zeros(n){
    while(n--){
        yield 0;
    }
}

console.log(Array.from(range(0,10)));
console.log(Array.from(zeros(10)));

// 产生可以迭代的对象
function *generatorFn3(){
    yield *[1,2,3];
}

// for(const x of generatorFn3()){
//     console.log(x);
// }

// 递归
function* generateFn4(n){
    if(n>0){
        // yield n-1; 2,1,0
        yield* generateFn4(n-1);
        yield n-1; // 0,1,2
    }
}

for(const x of generateFn4(3)){
    console.log(x);
}

console.log('-----');

function iter(n){
    if(n<2) return n;
    return iter(n-1)+iter(n-2);
}
console.log(iter(4));