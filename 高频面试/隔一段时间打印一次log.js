function repeatFunc(fn,times,wait){
    let i=0;
    let handler = setInterval(function(){
        fn.apply(null,arguments);
        if(i===times){
            clearInterval(handler);
        }
        i++;
    },wait)
}

function fn(){
    console.log('this');
}

repeatFunc(fn,9,100);
