// 1. 跟踪属性
const user={
    name:'Jake'
};

let p = new Proxy(user,{
    get(target,property,receiver){
        console.log(`get ${property}`);
        return Reflect.get(...arguments);
    },
    set(target,property,value,receiver){
        console.log(`set ${property} ${value}`);
        // console.log(target);
        // console.log(receiver);
        return Reflect.set(...arguments)
    }
})

console.log(p.name);
p.name = 'rose';

// 2. 隐藏属性
const hiddenProperites = ['foo','bar'];
const targetObj = {
    'foo':1,
    'bar':2,
    'baz':3
};

let p1 = new Proxy(targetObj,{
    get(target,property,receiver){
        if(hiddenProperites.includes(property)){
            return undefined;
        }else{
            return Reflect.get(...arguments);
        }
    },

    has(target,property,receiver){
        if(hiddenProperites.includes(property)){
            return false;
        }else{
            return Reflect.has(...arguments);
        }
    }
})

console.log(p1.bar);
console.log(p1.baz);
console.log(p1.foo);


console.log('bar' in p1);
// 3.c属性验证
// 4. 函数与构造函数参数验证