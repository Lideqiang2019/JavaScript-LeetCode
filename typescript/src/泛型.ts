function Trick<T,P>(first:T,second:P){
    return `${first}${second}`;
}  
Trick<string,number>('a',1); 

function Sort<T>(nums:Array<T>){
    return nums;
}

Sort<number>([1,2,3]);

interface Girl{
    name:string
}

class Waiter<T extends Girl>{
    constructor(private theNames:T[]){
    }
    sayName(index:number){
        return this.theNames[index].name;
    }
}

let w = new Waiter([
    {name:'a'},
    {name:'b'},
    {name:'c'}
]);
w.sayName(1);