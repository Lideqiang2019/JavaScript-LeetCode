// 简单版本，但是应该考虑如果arr中有重复的，考虑重复数组出现的次数；
function findMatchedChars(str,arr){
    // 由于是连续的字符串，可以用指针解决，并不需要上滑动窗口
    let res = {}; // 用来str存储满足在arr中的字符的索引
    let left = 0,
        right = 0;
    while(right<str.length){
        // 扩大窗口
        if(arr.indexOf(str[right])==-1){
            // 一旦出现不满足在arr中的字符
            // 更新res
            res[right-left] = [left,right];
            // 重新设置窗口
            left = ++right;
        }else{
            // 扩大窗口时检查是否已经超过了数组的长度
            right++;
            if(arr.length==right - left){
                res[right - left] = [left,right];
                break;
            }
        }
    }
    let [start,end] = res[Object.keys(res).sort((a,b)=>a>b?-1:a>b?1:0)[0]];
    return str.slice(start,end);
}
// console.log(findMatchedChars('AXBCDCEFWDNMN',['D','C','C','E','Z'])); // ['D','C','E','F','Z']


function findMin(num){
    let s = num.toString().split('');
    s.sort((a,b)=>(a>b)?1:(a<b)?-1:0);
    return parseInt(s.join(''));
}

function findMax(num){
    let s = num.toString().split('');
    s.sort((a,b)=>(a<b)?1:(a>b)?-1:0);
    return Number(s.join(''));
}


function toAList(num){
    let res = '';
    let cur = num;
    res +=num;
    while(cur!=6174){
        let minus = findMax(cur) - findMin(cur);
        if(minus<1000){
            minus *=10;
        }
        res +='->';
        res += minus;
        cur = minus;
    }
    return res;
}

// 2. 
// 简单版本，但是应该考虑如果arr中有重复的，考虑重复数组出现的次数；
function findMatchedChars(str,arr){
    // 由于是连续的字符串，可以用指针解决，并不需要上滑动窗口
    let res = {}; // 用来str存储满足在arr中的字符的索引
    let left = 0,
        right = 0;
    while(right<str.length){
        // 扩大窗口
        if(arr.indexOf(str[right])==-1){
            // 一旦出现不满足在arr中的字符
            // 更新res
            res[right-left] = [left,right];
            // 重新设置窗口
            left = ++right;
        }else{
            // 扩大窗口时检查是否已经超过了数组的长度
            right++;
            if(arr.length==right - left){
                res[right - left] = [left,right];
                break;
            }
        }
    }
    let [start,end] = res[Object.keys(res).sort((a,b)=>a>b?-1:a>b?1:0)[0]];
    return str.slice(start,end);
}
console.log(findMatchedChars('AXBCDCEFWDNMN',['D','C','C','E','Z'])); // ['D','C','E','F','Z']
// console.log(toAList(2021));

// 3. 得到的最大和最小值，可能是回溯算法，n叉树遍历
const questions = [
    {
        index:0,
        title:"题目1",
        answers:[
            {name:"选项1",score:8},
            {name:"选项1-2",score:10,to:1},
            {name:"选项3",score:15}
        ]
    },
    {
        index:1,
        title:"题目2",
        answers:[
            {name:"选项1",score:3},
            {name:"选项1-2",score:8,to:3},
            {name:"选项3",score:10}
        ]
    },
    {
        index:2,
        title:"题目3",
        answers:[
            {name:"选项1",score:3},
            {name:"选项1-2",score:10},
            {name:"选项3",score:12}
        ]
    },
    {
        index:3,
        title:"题目4",
        answers:[
            {name:"选项1",score:5},
            {name:"选项1-2",score:10},
            {name:"选项3",score:20}
        ]
    }
];

function getQuestionMinMaxVal(questions){
    /**
     * 用res存储最大值和最小值
     * dp含义 dp(questions,i) 表示答题到第i题所得的分数
     * 结束条件： i === index
     * 选择：answers
     * 回撤：不选
     */
    let max = Number.MIN_SAFE_INTEGER,
        min = Number.MAX_SAFE_INTEGER;

    let cur = 0; // 计算路径和
    let resMin = []; // 最小的路径
    let resMax = []; // 最大的路径
    let track = [];
    let n = questions.length - 1;
    backtrack(questions,0,track);
    console.log(resMin[resMin.length-1],resMax[resMax.length-1]);
    return [max,min];

    function backtrack(questions,i,track){
        if(i===n){
            // 结束条件
            if(cur<min){
                min = cur;
                resMin.push(track.slice());
            }
            if(cur>max){
                max = cur;
                resMax.push(track.slice());
            }
            
            return;
        }
        // 选择列表
        for(let answer of questions[i]['answers']){
            // 做选择
            track.push([i,answer['score']]);
            cur += answer['score'];
            let nxt = i + 1; // 下一步要走的
            if(answer['to']!=void 0){
                // 也可能会走这一步
                nxt = answer['to'];
            }
            // 递归
            backtrack(questions,nxt,track);
            // 回撤
            cur -= answer['score'];
            track.pop();
        }
    }
}

console.log(getQuestionMinMaxVal(questions))