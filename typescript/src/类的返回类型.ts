class Animal {
    protected _name: string;
    constructor(theName: string){
        this._name = theName;
    }
    public move(distanceInMeters: number = 0) {
        console.log('Hello ' + this._name + ' ' + distanceInMeters);
    }
    get getName(): string {
        return this._name;
    }
    set fullname(name:string) {
        this._name = name;
    }
}

class Cat extends Animal {
    public name: string;
    constructor(Name: string, childName: string) {
        super(Name);
        this.name = childName;
    }
    public move(distanceInMeters: number = 5):void {
        console.log(this.name);
        super.move(distanceInMeters)
    }
}

let a = new Animal('horse');
let cat = new Cat("python", 'js');
cat.move();
console.log(cat.name);
a.move();
console.log(a.getName);

class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

export{}



