interface Animal{
    name:string;
    eat:()=>{};
}

interface Bird{
    sleep:()=>{};
}

function Dog (dog:Animal | Bird){
    if("eat" in dog){
        dog.eat();
    }else{
        dog.sleep();
    }
}