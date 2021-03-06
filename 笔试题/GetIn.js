const t = {a: { b: [{c:2}]}}
function getIn(params,array,defaultValue){
    // 根据array，比如去'b'，params->'b'，判断是否存在需要的变量名，如果有那么继续array迭代
    let i = 0,
        n = array.length;
    if(array[0] in params){
      if(i>n){
        console.log(params[array[0]]);
        return;
      }else{
        ++i;
        getIn(params[array[0]],array.slice(i),defaultValue);
      }
    }
}

getIn(t,['a','b','0'],'');

//评测题目: 无
// 实现一个function getIn(params, array, defaultValue) {
	
//}

const t = {a: { b: [{c:2}, {d:1}]}, e: 'alipay'}
function getIn(params,array,defaultValue){
    let i = 0;
    if(array[0] in params){
      if(typeof params[array[0]]!='object'){
        console.log(params[array[0]]);
        return params[array[0]];
      }else{
        ++i;
        getIn(params[array[0]],array.slice(i),defaultValue);
      }
    }else{
      throw error('没找到！')
    }
}

const t = {a: { b: [{c:2}]}}
/**
 * 
 * @param {*} params 
 * @param {*} array 
 * @param {*} defaultValue 
 * @returns 
 * 题目含义： 输入object和array，和defaultValue
 * 其中array中存储object的属性，getIn函数完成的目标是，按照array的顺序从params中取出object，将取出的结果直接赋值或者给defalutValue
 * 如：getIn(t,['a','b','0'],'');

    getIn(t,['a','b'],'') = [{c:2}]

    getIn(t, ['e'], '') = 'alipay'
 */
function getIn(params,array,defaultValue){
    // 根据array，比如去'b'，params->'b'，判断是否存在需要的变量名，如果有那么继续array迭代
    let i = 0,
        n = array.length;
    let res = '';
    if(array[0] in params){
      if(i>n){
        if(!defaultValue){
          res = params[array[0]];
        }else{
          res = defaultValue;
        }
        return res;
      }else{
        ++i;
        getIn(params[array[0]],array.slice(i),defaultValue);
      }
    }
}



// const test = {a:1} 
// test.b.c

// const t = {a: { b: [{c:2}]}}

// getIn(test, ['b', 'c'],3) === 3
// getIn(test, ['a'], Valu) === 1
  
// getIn(t, ['a', 'b', '0', 'c'], '') === 2

