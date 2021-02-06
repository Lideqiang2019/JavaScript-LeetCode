/**
 * 参考https://www.cnblogs.com/nayek/p/11924204.html
 */
class Stack{
    constructor(){
        this.stack = []
    }
    push(val){
        // 入栈
        this.stack.push(val);
    }
    pop(){
        // 出栈
        if(!this.isEmpty()){
            let tmp = this.stack[this.stack.length - 1];
            this.stack.length = this.stack.length - 1;
            return tmp;
        }
        return null;
    }
    peek(){
        // 获取栈顶元素
        if(!this.isEmpty()){
            return this.stack[this.stack.length-1];
        }
        return null;
    }
    isEmpty(){
        // 判断栈是否为空
        return this.stack.length === 0;
    }
    getCount(){
        // 获取栈元素个数
        return this.stack.length;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
stack.pop();
console.log(stack);
stack.pop();
console.log(stack.isEmpty());

/**
 * 栈的应用，找最近的匹配括号 
 */
var isValid = function(s) {
    let map = {
        '(':-1,
        ')':1,
        '[':-2,
        ']':2,
        '{':-3,
        '}':3
    };
    // 先入栈的后出栈，这样能够匹配最近的左右括号 20. 有效的括号
    let stack = [];
    for(const e of s){
        if(map[e]<0){
            // 是左括号入栈
            stack.push(e);
        }else{
            // 右括号，找最近的左括号
            let latest = stack.pop();
            if(map[latest]+map[e]!==0){
                return false;
            }
        }
    }
    if(stack.length) return false;
    return true;
};