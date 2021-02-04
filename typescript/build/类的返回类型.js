"use strict";
class Animal {
    constructor(theName) {
        this._name = theName;
    }
    move(distanceInMeters = 0) {
        console.log('Hello ' + this._name + ' ' + distanceInMeters);
    }
    get getName() {
        return this._name;
    }
    set fullname(name) {
        this._name = name;
    }
}
class Cat extends Animal {
    constructor(Name, childName) {
        super(Name);
        this.name = childName;
    }
    move(distanceInMeters = 5) {
        console.log(this.name);
        super.move(distanceInMeters);
    }
}
let a = new Animal('horse');
let cat = new Cat("python", 'js');
cat.move();
console.log(cat.name);
a.move();
console.log(a.getName);
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

export{}
