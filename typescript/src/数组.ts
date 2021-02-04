const numerArr:number[] = [1,2,3];
const arr:(number|string)[] = [1,2,'a'];
console.log(arr);

const bts:{
    name:string,
    age:number
}[] = [
    {name:'a',age:19},
    {name:'b',age:10}
];

type lady={
    name:string,
    age:number
}

class Madam{
    name:string;
    age:number;
}

const bts1:lady[] = [
    {name:'a',age:19}
];

const bts2:Madam[] = [
    {name:'a',age:19}
];

export{}