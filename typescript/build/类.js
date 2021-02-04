"use strict";
class Lady {
    constructor() {
        this.content = '帅哥';
    }
    sayHello() {
        return this.content;
    }
}
class Bt extends Lady {
    sayHello() {
        console.log('11');
        return super.sayHello();
    }
    sayLove() {
        return 'I love you';
    }
}
const p = new Bt();
console.log(p.sayHello());
