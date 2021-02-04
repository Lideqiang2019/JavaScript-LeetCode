// interface代码重用
interface Girl{
    name:string;
    age:number;
    bust:number;
    waistLine?:number;
    [propname:string]:any;
    sayName():string;
}

interface Teacher extends Girl{
    tech():string;
}

const girl = {
    name: 'ldq',
    age:18,
    bust:80,
    waistLine:90,
    sex:'nan',
    sayName(){
        return '欢迎光临！';
    },
    tech(){
        return "山东";
    }
}

class girl1 implements Girl{
    name: 'ldq';
    age:18;
    bust:80;
    waistLine:90;
    sex:'nan';
    sayName(){
        return '欢迎光临！';
    };
}

const screenResume = (name:string,age:number,bust:number):void=>{
    age<24 && bust>=90 && console.log(name+'进入面试');
    age>=24 || bust<90 && console.log(name+'被淘汰');
}

const screenResume1 = (girl:Teacher):void=>{
    girl.age<24 && girl.bust>=90 && console.log(girl.name+'进入面试');
    girl.age>=24 || girl.bust<90 && console.log(girl.name+girl.sex+'被淘汰'+girl.waistLine);
    console.log(girl.sayName());
}

// screenResume('ss',21,91);
screenResume1(girl);

export{}