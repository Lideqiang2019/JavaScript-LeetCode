var maxSlidingWindow = function(nums, k) {
    let window = new MononicQueue();
    let res = [];
    for(let i=0;i<nums.length;i++){
        if(i<k-1){
            window.push(nums[i]);
        }else{
            window.push(nums[i]);
            // res.push(Math.max(...window));
            res.push(window.max());
            window.pop(nums[i-k+1]);
        }
    }
    return res;
};

class MononicQueue{
    q = []

    push(n){
        while(this.q.length!==0 && this.q[this.q.length-1]<n){
            this.q.pop();
        }
        this.q.push(n);
    }

    max(){
        return this.q.slice(0,1);
    }

    pop(n){
       if(n==this.max()){
           this.q.shift();
       } 
    }
}