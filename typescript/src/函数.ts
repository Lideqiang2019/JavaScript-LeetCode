function getTotal(one:number,two:number):number{
    return one + two;
}

let total = getTotal(1,2);

function errorFunc():never{
    throw new Error();
    console.log('hello');
}

function add({one,two}:{one:number,two:number}){
    return one+two;
}

export{}