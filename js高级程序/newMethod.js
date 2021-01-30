let newMethod = function(parent,...args){
    let child = Object.create(parent.prototype);
    let result = parent.apply(child,args);
    return typeof result === 'object'?result: child;
}

function Animal(name,age){
    this.name = name;
    this.age = age;
}

Animal.prototype.sayName = function(){
    console.log(this.name,this.age);
}

let cat = newMethod(Animal,'cat',1);
cat.sayName();