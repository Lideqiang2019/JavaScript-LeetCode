enum Status{
    a=1,
    b,
    c
}

function getStatus(status:number):void{
    if(status===Status.a){
        console.log("a");
    }else if(status===Status.b){
        console.log("b");
    }else if(status===Status.c){
        console.log("c");
    }else{
        console.log("something else");
    }
}

getStatus(3);
console.log(Status[1]);