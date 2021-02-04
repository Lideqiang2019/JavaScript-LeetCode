const Stack = require("./Stack.js")
class Operation {
    constructor(val) {
        this.value = val
    }
}
class Add extends Operation {
    apply(value){
        return value + this.value
    }
    undo(value) {
        return value - this.value
    }
}
class Times extends Operation {
    apply(value) {
        return value * this.value
    }
    undo(value) {
        return value / this.value
    }
}
/** 操作栈 **/
class OpsStack {
    constructor() {
        this.value = 0
        this.operations = new Stack()
    }
    add(op) {
        this.value = op.apply(this.value)
        this.operations.add(op)
    }

    undo() {
        if (this.operations.isEmpty()) {
            return false
        }
        this.value = (this.operations.pop()).undo(this.value)
    }
}
let s = new OpsStack()
s.add(new Add(1))
s.add(new Add(1))
s.add(new Times(2))
console.log("Current value: ", s.value)
s.undo()
s.undo()
console.log("Final value: ", s.value)
// Current value:  4
// Final value:  1