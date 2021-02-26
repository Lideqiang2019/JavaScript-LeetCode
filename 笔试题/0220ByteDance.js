/*
    题目描述：
    给定一串字符串和一个字符数组，问字符串在字符数组中出现的最长连续子串
    eg. 1. 'AXBCDCEFWDNMN',['C','D'] // 输出 “CD”
        2. 'AXBCDCEFWDNMN',['D','C','C','E','Z'] // 输出 “CDCE”
 */
// 'ABBCAD',['A','B','C']此解法存在一个问题，对于题目给的列子是可以完成的，但是left不是一步一步更新的，这有可能会忽略最优解
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

var findMatchedCharsPro = function(str,arr){
    // 这道题不适合=再用shrink，因为关心的是字符串最长是arr子串的排序,需要统计arr中每个字符出现的次数
    // 开启暴力模式
    let res = 0;
    let dic = {};
    let n = arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
            if(checkInclusion(str,arr.slice(i,j))){
                if(j-i>res){
                    console.log(arr.slice(i,j));
                    res = j - i;
                    dic[res] = arr.slice(i,j);
                }
            }
        }
    }
    return [res,dic[res]];
    function checkInclusion(s2, s1) {
        // 这题其实有点连续子串的意思, 窗口就不会那么麻烦了，注意s1和s2含义，别搞反了
        // s1是need, s2必须是连续的子串
        let left=0,
            right = 0;
        let need = {};
        let window = {};
        for(let c of s1){
            need[c]?need[c]++:need[c]=1;
        }
        let needsLen = Object.keys(need).length;
        let valid = 0;
        while(right<s2.length){
            let c = s2[right];
            right++;
            if(need[c]){
                // 这个字符在need里，需要更新一下窗口
                window[c]?window[c]++:window[c]=1;
                if(need[c] == window[c]){
                    valid++;
                }
                
            }
    
            while(right-left>=s1.length){
                // 如果窗口中的字符比s1中字符还多，应该更新窗口大小
                if(valid == needsLen){
                    return true;
                }
                let d = s2[left];
                left++;
                if(need[d]){
                    if(need[d] == window[d]){
                        valid--;
                    }
                    window[d]--;
                }
            }
        }
        return false;
    };
}
console.log(findMatchedCharsPro('AXBCDCEFWDNMN',['D','C','E','F','Z'])); // ['D','C','E','F','Z']

/**
 * 
 * @param {*} num 
 * 题目描述：
 * 一个数字如2021,1. 将其子数字顺序打乱得到最大和最小的数，将最大和最小数的差作为一个新的数字重复1
 * 但是应该注意如果最大值和最小值之差小于1000，应该*10, 直到输出值为6174
 * 输出“2021->2088->...->6174”
 */
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

// console.log(toAList(2021));

/**
 * 在问卷调查中，有可能出现跳题的现象，每道题目都有得分，问将问卷做到最后一题能够获得的最大分数和最少分数。
 */
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

// console.log(getQuestionMinMaxVal(questions))