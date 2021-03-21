// https://blog.csdn.net/chentony123/article/details/81428803
//使用递归的方式实现数组、对象的深拷贝
function deepClone1(obj){
    // 判断是不是object，如果是数组则返回数组对象，否则返回{}
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj === 'object'){
        // 如果obj不是空
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                if(obj[key] && typeof obj[key] === 'object'){
                    objClone[key] = deepClone1(obj[key]);
                }else{
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}
let a = {
    'name':'xiaoming',
    "age":18,
    getName: function(){
        return this.name;
    },
    "a":{
        "b":1
    }
}

let c = [1,2,a];

let b = deepClone1(c);
console.log(b);

function deepClone(obj){
    let objClone = typeof obj=='object'?{}:[];
    for(let s in obj){
        if(obj.hasOwnProperty(s)){
            // 判断不是原型上的属性
            if(obj[s] && typeof obj[s]!='object'){
                // 已经递归到底了
                objClone[s] = obj[s];
            }else{
                // 递归
                objClone[s] = deepClone(obj[s]);
            }
        }
    }
    return objClone;
}


