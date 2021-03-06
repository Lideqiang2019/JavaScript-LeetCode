/**
 * 将 document.cookie 解析为 HashMap, 如: document.cookie="a=1;b=2;c=3" 解析为 {a: "1", b: "2", c:"3"}
 * @function parseCookies
 * @param  {string} direction {cookie字符串，如"a=1;b=2;c=3"}
 * @return {object} hashMap {解析后的 HashMap}
 */
 function parseCookies(direction){
    let arr = direction.split(';').map(x=>x.split('=')); // 得到有属性名和value的数组
    let map = {};
    for(let i=0;i<arr.length;i++){
      map[arr[i][0]] = arr[i][1];
    }
    return map;
  }
  
  
  
  /**
   * 判断两个矩形是否重叠
   * @function isOverlap
   * @param  {object} rect1 {矩形1的坐标和尺寸，如"{ x: 100, y: 100, width: 100, height: 100 }"}
  * @param  {object} rect2 {矩形2的坐标和尺寸，如"{ x: 150, y: 150, width: 100, height: 100 }"}
   * @return {boolean} isOverlap {是否重叠}
   */
  function isOverlap( rect1,rect2){
    /*
        将rect1和rect2的x坐标投影到x轴上，
      将rect1和rect2的y坐标投影到y轴上
      1. 求出左上和右下的坐标点
      2. 题目中没有告诉x,y的坐标是中心还是左上，这里假设为左上顶点
    */
    let [r1_x1,r1_y1,r1_x2,r1_y2] = getPoints(rect1);
    let [r2_x1,r2_y1,r2_x2,r2_y2] = getPoints(rect2);
    let inter_x1 = Math.max(r1_x1,r2_x1);
    let inter_x2 = Math.min(r1_x2,r2_x2);
    let inter_y1 = Math.min(r1_y1,r2_y1);
    let inter_y2 = Math.max(r1_y2,r2_y2);
    if(inter_x2<inter_x1 && inter_y2>inter_y1){
      // 有交叠，但是还应该判断y轴
      return true;
    }
    return false;
    function getPoints(rect){
      let x1 = rect['x'];
      let y1 = rect['y'];
      let x2 = x1 + rect['width'];
      let y2 = y1 - rect['height'];
      return [x1,y1,x2,y2];
    }
  }

   /**
   * 寻找2个数组的交集
   * @function intersect
   * @param  {array} arr1 {数组1，如"[1,2,3,4,5]"}
   * @param  {array} arr2 {数组2，如"[1,2,4,7,5]"}
   * @return {array} isOverlap {交集数组}
   */
  function intersect(arr1,arr2){
    let map = {},
          isOverlap = [];
    for(let i=0;i<arr1.length;i++){
      map[arr1[i]]? map[arr1[i]]++:map[arr1[i]]=1; 
    }
    for(let j=0;j<arr2.length;j++){
      if(arr2[j] in map){
        isOverlap.push(arr2[j]);
      }
    }
    return isOverlap;
  }
  
  
  /**
   * 数组去重
   * @function unique
   * @param  {array} arr {数组1，如"[1,2,1,5,3,4,5]"}
   * @return {array} unique {合并去重后的数组}
   */
  function unique(arr){
    let nums = [];
    for(let i=0;i<arr.length;i++){
      if(nums.indexOf(arr[i])===-1){
        // 如果map中不含，则是唯一的
        nums.push(arr[i]);
      }
    }
    return nums;
  }
  
  
  
  /**
   * 请基于JS中Array对象的push/pop/shift/unshift，实现一个容量为N的整数队列Queue
   *
   *要求：
   * 1. 当队列容量满时，队列内元素的淘汰算法为“先进先出FIFO”
   * 2. 提供max()方法，获取队列中的最大的元素，要求时间复杂度为O(1)
   * 3. 实现队列的入列add、获取头部元素peek、出列remove方法等基本的队列操作
   *
   * @function Queue // 使用es6的类写法
   * @param  {number} N {容量}
   */
  class Queue{
    constructor(N){
      this.queue = new Array(N);
      this.size = 0; // 维护队列的大小
    }
    max(){
      return Math.max(...this.queue);
    }
    add(element){
      // 判断是否queue是否满了
      if(this.size<N){
         this.queue.push(element);
         this.size++;
      }else{
        throw error('队列已满');
      }
    }
    peek(){
      // 判断队列是否还有值
      if(this.size>0){
        return this.queue[0];
      }else{
        throw error('队列为空');
      }
    }
    remove(element){
      // 假设移除的是队首元素
      // 判断队首是否有元素
      let index = this.queue.indexOf(element);
      if(index!==-1){
        // 队列中有值
        // 用该值后面的变量覆盖前面的变量
        let i = index;
        while(i<(N-1)){
          this.queue[i] = this.queue[i+1];
        }
        this.queue[N-1] = null;
      }
    }
  }
  
  
  