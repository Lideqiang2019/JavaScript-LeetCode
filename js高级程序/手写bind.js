/**
 * https://blog.csdn.net/q3254421/article/details/82999718
 * 理解bind
 */

function myBind(f,objTarget){
    let args = Array.prototype.slice.call(objTarget,2);
    return function(){
        return f.apply(objTarget,Array.prototype.slice.call(arguments).concat(args));
    }
}