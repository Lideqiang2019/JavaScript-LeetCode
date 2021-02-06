// let i = 0;
// for (let _ of nTimes(3)) {
//     console.log(i);
//     let div = document.createElement('div');
//     div.innerHTML = `${i}`;
//     document.body.appendChild(div);
//     i++;
// }

// function* nTimes(n) {
//     while (n--) {
//         yield;
//     }
// }

/**
let num = 0, intervalId = null;
let max = 10;
let incrementNumber = function () {
    num++;
    // 如果达到最大值，则取消所有未执行的任务
    if (num == max) {
        clearInterval(intervalId);
        alert("Done");
    }
}
intervalId = setInterval(incrementNumber, 500);
 */

var url = "c.biancheng.net";  //要打开的网页地址
var features = "height=500, width=800, top=100, left=100, toolbar=no, menubar=no,\
scrollbars = no, resizable = no, location = no, status = no";  //设置新窗口的特性
//动态生成一个超链接
document.write('<a href="c.biancheng.net" target="newW">切换到C语言中文网首页</a>');
var me = window.open(url, "newW", featrues);  //打开新窗口
setTimeout(function () {  //定时器
    if (me.closed) {
        console.log("创建的窗口已经关闭。");
    } else {
        me.close();
    }
}, 5000);  //半秒钟之后关闭该窗口



