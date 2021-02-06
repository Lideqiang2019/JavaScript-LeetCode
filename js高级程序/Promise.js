// let promise = new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve();
//     console.log(2);
// }).then(()=>{
//     console.log(3);
// })
// console.log(4); // 1 2 4 3
/**
let promise1 = new Promise((resolve,reject)=>{
    console.log(1);
    resolve();
    setTimeout(()=>console.log(2),0);
}).then(()=>{
    console.log(3);
})
console.log(4);  // 1 4 3 2
 */

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let promise;
        promise = new Promise(() => {
            resolve();
        })
        promise.then(() => {
            resolve('aaa');
        })
    }, 1000)
});
console.log(p);

function compose(...fn) {
    return fn.reduce((pre, cur) => pre.then(cur), Promise.resolve(x));
}


// async function foo() {
//     console.log(await Promise.resolve('foo')); // 不会先执行，而是先入队
// }
// async function bar() {
//     console.log(await 'bar'); 
// }
// async function baz() {
//     console.log('baz'); // 没有await相等于同步，直接执行。
// }

// foo();
// bar();
// baz();
// baz
// foo
// bar

async function foo() {
    console.log(2);
    console.log(await Promise.resolve(7));
    console.log(8);
}

async function bar() {
    console.log(4);
    console.log(await 9);
    console.log(10);
}

async function baz() {
    console.log(6);
    console.log(await Promise.resolve(11));
    console.log(12);
}
console.log(1);
foo();
console.log(3);
bar();
console.log(5);
baz();
