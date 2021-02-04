module.exports =  class Stack {
    data = []
    maxSize
  
    constructor(initialData, maxSize = -1) {
        this.data = Array.isArray(initialData) ? initialData : (typeof initialData == "undefined" ? [] : [initialData])
        this.maxSize = maxSize
    }
    
    isFull() {
        return this.maxSize != -1 ? (this.data.length === this.maxSize) : false
    }
    
    isEmpty() {
        return this.data.length === 0
    }
    
    add(item) {
        if(this.isFull()) {
            return false
        }
        this.data.push(item)
    }
    
    *generator() {
        while(!this.isEmpty()) {
            yield this.data.pop()
        }
    }
    
    pop() {
       const { value, done } = this.generator().next() 
       if(done) return false
       return value
    }
  }