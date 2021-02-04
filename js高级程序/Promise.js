// let promise = new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve();
//     console.log(2);
// }).then(()=>{
//     console.log(3);
// })
// console.log(4); // 1 2 4 3

let promise1 = new Promise((resolve,reject)=>{
    console.log(1);
    resolve();
    setTimeout(()=>console.log(2),0);
}).then(()=>{
    console.log(3);
})
console.log(4);  // 1 4 3 2