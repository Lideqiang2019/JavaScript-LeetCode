function myNew(parent,...args){
    // 继承父级的原型
    let child = Object.create(parent.prototype);
    // 将父级的方法和参数传递给child
    let result = parent.apply(child,args);
    return typeof result === 'object'?result:child;
}

function Animal(animal){
    function getAnimal(){
        return this.animal;
    }
}

let instance1 = myNew(Animal,'dog');

console.log(instance1.animal);