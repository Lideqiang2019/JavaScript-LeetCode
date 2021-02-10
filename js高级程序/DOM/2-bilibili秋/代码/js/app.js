//获取元素
const container = document.querySelector('.container');
const imgs = document.querySelectorAll('img');

//绑定鼠标移入事件 
container.addEventListener('mouseenter', function (e) {
    //获取鼠标在移入时的偏移
    this.x = e.clientX;
    //移除过渡效果
    imgs.forEach(item => {
        item.style.transition = 'none';
    });
});
//绑定鼠标移动事件
container.addEventListener('mousemove', function (e) {
    //获取鼠标移动时的偏移
    this._x = e.clientX;
    //计算鼠标移动的向量
    let disX = this._x - this.x;

    //第一张图的初始值以及变化
    //filter  blur(4px)
    //transform: translate(0px, 0px)
    //变化
    //x       0    1920    1920    disX
    //filter  4     8       4       ???
    const blur_0 = Math.abs(4 + 4 * disX / 1920);
    imgs[0].style.filter = `blur(${blur_0}px)`;

    //第二张图的初始值以及变化
    //filter  blur(0px)
    //transform: translate(0px, 0px)
    //变化
    //x             0    1920        disX
    //filter        0     10          ???
    //translate     0     10
    const blur_1 = Math.abs(10 * disX / 1920);
    const translateX_1 = 10 * disX / 1920;
    imgs[1].style.filter = `blur(${blur_1}px)`;
    imgs[1].style.transform = `translate(${translateX_1}px, 0px) rotate(0deg)`;

    //第三张图的初始值以及变化
    //filter  blur(1px)
    //transform: translate(-58px, 0px)
    //变化
    //x             0       1920        disX
    //filter        1       -5          ???
    //translate     -58     10          ???
    const blur_2 = Math.abs(1 - 5 * disX / 1920);
    const translateX_2 = -58 + 10 * disX / 1920;
    imgs[2].style.filter = `blur(${blur_2}px)`;
    imgs[2].style.transform = `translate(${translateX_2}px, 0px) rotate(0deg)`;

    //第四张图的初始值以及变化
    //filter  blur(4px)
    //transform: translate(0px, 4.87742px)
    //变化
    //x             0       1920        disX
    //filter        4       -10          ???
    //translate     0        42          ???
    const blur_3 = Math.abs(4 - 10 * disX / 1920);
    const translateX_3 = 42 * disX / 1920;
    imgs[3].style.filter = `blur(${blur_3}px)`;
    imgs[3].style.transform = `translate(${translateX_3}px, 4.87742px) rotate(0deg)`;

    //第五张图的初始值以及变化
    //filter  blur(5px)
    //transform: translate(0px, -2.09032px)
    //变化
    //x             0       1920        disX
    //filter        5       -10          ???
    //translate     0        91          ???
    const blur_4 = Math.abs(5 - 10 * disX / 1920);
    const translateX_4 = 91 * disX / 1920;
    imgs[4].style.filter = `blur(${blur_4}px)`;
    imgs[4].style.transform = `translate(${translateX_4}px, -2.09032px) rotate(0deg)`;

    //第六张图的初始值以及变化
    //filter  blur(5px)
    //transform: translate(0px, 0px)
    //变化
    //x             0       1920        disX
    //filter        6       -6          ???
    //translate     0        114        ???
    const blur_5 = Math.abs(6 - 6 * disX / 1920);
    const translateX_5 = 114 * disX / 1920;
    imgs[5].style.filter = `blur(${blur_5}px)`;
    imgs[5].style.transform = `translate(${translateX_5}px, 0px) rotate(0deg)`;
})
//绑定鼠标离开事件
container.addEventListener('mouseleave', function () {
    //增加过渡效果
    imgs.forEach(item => {
        item.style.transition = 'all 0.5s';
    });
    //样式清空
    imgs[0].style.filter = 'blur(4px)';
    imgs[0].style.transform = 'translate(0px, 0px) rotate(0deg)';

    imgs[1].style.filter = 'blur(0px)';
    imgs[1].style.transform = 'translate(0px, 0px) rotate(0deg)';

    imgs[2].style.filter = 'blur(1px)';
    imgs[2].style.transform = 'translate(-58.0645px, 0px) rotate(0deg)';

    imgs[3].style.filter = 'blur(4px)';
    imgs[3].style.transform = 'translate(0px, 4.87742px) rotate(0deg)';

    imgs[4].style.filter = 'blur(5px)';
    imgs[4].style.transform = 'translate(0px, -2.09032px) rotate(0deg)';

    imgs[5].style.filter = 'blur(6px)';
    imgs[5].style.transform = 'translate(0px, 0px) rotate(0deg)';
});

//启动定时器 眨眼睛效果
setInterval(() => {
    setTimeout(() => {
        imgs[1].src = './images/2-zha.png';
    });

    setTimeout(() => {
        imgs[1].src = './images/2-bi.png';
    }, 100);

    setTimeout(() => {
        imgs[1].src = './images/2-zha.png';
    }, 200);

    setTimeout(() => {
        imgs[1].src = './images/2.png';
    }, 300);
}, 3000);