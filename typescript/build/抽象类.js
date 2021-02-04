"use strict";
class FlyAnimal {
    fly() {
        console.log("两只翅膀，上面扰动空气");
    }
}
class Bird extends FlyAnimal {
    eat() {
        console.log("吃虫子");
    }
}
class Eagle extends FlyAnimal {
    eat() {
        console.log("吃小鸟");
    }
}
let bird = new Bird();
let eagle = new Eagle();
bird.eat();
eagle.eat();
eagle.fly();
