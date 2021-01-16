/**
 * 
 * @param {*} s 
 * @param {*} t 
 * 76. 最小覆盖子串
 */
var minWindow = function(s, t) {
    let needs = {}
    let window = {}
    for(let c of t){
        needs[c]?needs[c]++:needs[c]=1
    }

    let needsLen = Object.keys(needs).length // 不能够与t.lenght混淆
    let left = 0, right=0
    let valid = 0
    let start =0 , len=Number.MAX_SAFE_INTEGER
    while(right<s.length){
        let c = s[right]
        // 扩大窗口
        if(needs[c]){
            window[c]?window[c]++:window[c]=1
            if(window[c]==needs[c]){
                valid++
            }
        }
        right++
        // 窗口大小
        while(valid===needsLen){
            // 可能有重复的字符，需要去重，找到最小的覆盖子串
            if(right-left<len){
                start = left
                len = right - left
            }
            let d = s[left]
            left++
            if(needs[d]){
                if(window[d]==needs[d]){
                    valid--
                }
                window[d]--
            }
        }
    }
    return len==Number.MAX_SAFE_INTEGER?'':s.substr(start,len)
};
var minWindow = function(s, t) {
    var need = new Map()
    var window = new Map()
    // if(s.length<t.length){
    //     return ''
    // }
    /**
     * 默写滑动窗口框架即可，这和动态规划还不一样，但是又有点动态规划的那味。
     * 动态规划也是最小回文子串的长度，似乎也可以用动态规划 
     */
   for(let c of t){
       need.set(c,getOrDefault(need,c)+1)
   }

   let count = 0 
   need.forEach(key=>
        count++
   )

   let left=0, right=0
   let valid = 0
   let start=0, len = Number.MAX_SAFE_INTEGER
   while(right<s.length){
       let c=s[right]
       right++
       if(need.has(c)){
           // 如果当前的字符在need中，需要更新窗口
           window.set(c,getOrDefault(window,c)+1)
           if(window.get(c)===need.get(c)){
               // 如果字符数量一致，将valid++
               valid++
           }
       }

       

       while(valid===count){ // 注意
           if(right-left<len){
               start = left
               len = right - left
           }

           let d = s[left]
           left++
           if(need.has(d)){
               // 如果存在, 那么判断是不是多余的
               if(window.get(d)==need.get(d)){
                   valid--
               }
               window.set(d,getOrDefault(window,d)-1) // 很重要
           }
           
       }
   }
   return len==Number.MAX_SAFE_INTEGER?'':s.substr(start,len) // 注意
};

function getOrDefault(map,key){
   if(map.has(key)) return map.get(key)
   return 0
}


console.log(minWindow("ADOBECODEBANC","ABCC"))

/**
 * 
 * @param {*} t 
 * @param {*} s 
 * 567. 字符串的排列
 */
var checkInclusion = function(t, s) {
    let needs = {}
    let window = {}
    for(let c of t){
        needs[c]?needs[c]++:needs[c]=1
    }

    let needsLen = Object.keys(needs).length // 不能够与t.lenght混淆
    let left = 0, right=0
    let valid = 0
    while(right<s.length){
        let c = s[right]
        // 扩大窗口
        if(needs[c]){
            window[c]?window[c]++:window[c]=1
            if(window[c]==needs[c]){
                valid++
            }
        }
        right++
        // 窗口大小
        while(valid===needsLen){
            // 可能有重复的字符，需要去重，找到最小的覆盖子串
            if(right-left==t.length){
                return true
            }
            let d = s[left]
            left++
            if(needs[d]){
                if(window[d]==needs[d]){
                    valid--
                }
                window[d]--
            }
        }
    }
    return false
};

/**
 * 
 * @param {*} s 
 * @param {*} t 
 * 438. 找到字符串中所有字母异位词
 */

var findAnagrams = function(s, t) {
    let res = []
    let needs = {}
    let window = {}
    for(let c of t){
        needs[c]?needs[c]++:needs[c]=1
    }

    let needsLen = Object.keys(needs).length // 不能够与t.lenght混淆
    let left = 0, right=0
    let valid = 0
    while(right<s.length){
        let c = s[right]
        // 扩大窗口
        if(needs[c]){
            window[c]?window[c]++:window[c]=1
            if(window[c]==needs[c]){
                valid++
            }
        }
        right++
        // 窗口大小
        while(valid===needsLen){
            // 可能有重复的字符，需要去重，找到最小的覆盖子串
            if(right-left==t.length){
                res.push(left)
            }
            let d = s[left]
            left++
            if(needs[d]){
                if(window[d]==needs[d]){
                    valid--
                }
                window[d]--
            }
        }
    }
    return res
};

/**
 * 
 * @param {*} s 
 * 3. 无重复字符的最长子串
 */
var lengthOfLongestSubstring = function(s) {
    /**
     * 找到最长的窗口就可以了
     */
    let res = 0
    let left = 0, right = 0
    let window = {}
    while(right<s.length){
        let c = s[right]
        right++
        window[c]?window[c]++:window[c]=1 // 记录不重复的字符
        while(window[c]>1){
            // 有重复的，考虑更新一下left
            let d = s[left]
            left++
            window[d]--
        }
        res = Math.max(res, right-left)
    }
    return res
};