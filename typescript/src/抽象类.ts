/**
 * 简单来说吧bai
抽象类是在接du口和实体zhi类之间的一个桥dao梁
例如
做一个接zhuan口叫做飞行FlyAnimalAction，里面定shu义一个方法叫做flying，再定义一个方法叫做eat
做一个类叫做蚊子实现接口，蚊子要实现flying方法，实现自己的eat方法
做一个类叫做苍蝇实现接口，苍蝇也要实现flying方法，实现自己的eat方法
你发现所有会飞的动物都要实现这个接口，很麻烦，不如
做一个抽象类FlyAnimal,然后实现上面的接口
在里面实现flying这个方法，因为大部分的飞行动作是一样的，而eat方法则继续写成抽象方法，因为大部分的动物吃东西是不一样的
下面你再写蚊子类就简单了，可以直接继承这个抽象类，然后实现自己的吃方法就行了
而且苍蝇类的制作也是一样，这个时候抽象类的功能就显示出来了，当然抽象类的功能远远不是这些，只是初期理解到这里就够了。
 */
abstract class FlyAnimal{
    fly():void{
        console.log("两只翅膀，上面扰动空气"); // 大家都这样飞的
    }
    abstract eat():void; // 大家吃的不太一样，需要在每个实例中完成
}

class Bird extends FlyAnimal{
    eat(){
        console.log("吃虫子");
    }
}

class Eagle extends FlyAnimal{
    eat(){
        console.log("吃小鸟");
    }
}

let bird = new Bird();
let eagle = new Eagle();

bird.eat();
eagle.eat();
eagle.fly();