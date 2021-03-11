let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(666);
    },1000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(888);
    },1000);
})

// p1.then((res)=>{
//     console.log(res);
//     p2.then((res)=>{
//         console.log('res1',res);
//     })
// })
// async function getRes(){
//     let res1 = await p1;
//     let res2 = await p2;
//     console.log(res1);
//     console.log(res2);
// }

// getRes();
// p1.then(()=>{
//     console.log(1);
// },()=>{
//     console.log(2);
//     throw new Error('11');
// }).then(()=>{
//     console.log(4);
// }).catch(()=>{
//     console.log(3);
// })





