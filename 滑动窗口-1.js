var minWindow = function(s, t) {
    var need = new Map()
    var window = new Map()

    /**
     * 默写滑动窗口框架即可，这和动态规划还不一样，但是又有点动态规划的那味。
     * 动态规划也是最小回文子串的长度，似乎也可以用动态规划 
     */
   for(c of t){
       need.set(c,getOrDefault(need,c)+1)
   }

   let left=0, right=0
   let valid = 0
   let start=0, len = 1000000
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

       while(valid===t.length){
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
   return s.substr(start,len) // substr(start,len) len为从起点数的字符个数
};

function getOrDefault(map,key){
   if(map.has(key)) return map.get(key)
   return 0
}

console.log(minWindow("ADOBECODEBANC","ABC"))

const minWindow1 = (s, t) => {
    let minLen = s.length + 1;
    let start = s.length;     // 结果子串的起始位置
    let map = {};             // 存储目标字符和对应的缺失个数
    let missingType = 0;      // 当前缺失的字符种类数
    for (const c of t) {      // t为baac的话，map为{a:2,b:1,c:1}
      if (!map[c]) {
        missingType++;        // 需要找齐的种类数 +1
        map[c] = 1;
      } else {
        map[c]++;
      }
    }
    let l = 0, r = 0;                // 左右指针
    for (; r < s.length; r++) {      // 主旋律扩张窗口，超出s串就结束
      let rightChar = s[r];          // 获取right指向的新字符
      if (map[rightChar] !== undefined) map[rightChar]--; // 是目标字符，它的缺失个数-1
      if (map[rightChar] == 0) missingType--;   // 它的缺失个数新变为0，缺失的种类数就-1
      while (missingType == 0) {                // 当前窗口包含所有字符的前提下，尽量收缩窗口
        if (r - l + 1 < minLen) {    // 窗口宽度如果比minLen小，就更新minLen
          minLen = r - l + 1;
          start = l;                 // 更新最小窗口的起点
        }
        let leftChar = s[l];          // 左指针要右移，左指针指向的字符要被丢弃
        if (map[leftChar] !== undefined) map[leftChar]++; // 被舍弃的是目标字符，缺失个数+1
        if (map[leftChar] > 0) missingType++;      // 如果缺失个数新变为>0，缺失的种类+1
        l++;                          // 左指针要右移 收缩窗口
      }
    }
    if (start == s.length) return "";
    return s.substring(start, start + minLen); // 根据起点和minLen截取子串
  };

  var checkInclusion = function(s1, s2) {
    let window = {}
    let need = {}

    for(let c of s1){
        if(!need[c]){
            need[c] = 1
        }
        else{
            need[c]++
        }
    }
    
    let left = 0, right = 0
    let valid = 0
    while(right<s2.length){
        let c = s2[right]
        right++
        if(need[c]!=undefined){
            // 如果c为need所需要
            window[c] = window[c]===undefined?1:window[c]++
            if(window[c]===need[c]){
                // 如果window中的c和need中的c的个数一致，那么应该讲valid增加，可以略去那些重复的
                valid++
            }
        }

        while(right-left>s1.length){
            // 窗口比较大，不是排列
            if(valid===s1.length){
                // 如果valid和s1长度一致，则直接
                return true
            }

            let d = s2[left]
            left++

            if(need[d]!=undefined){
                // 如果d在need里
                if(window[d]===need[d]){
                    valid--
                }
                window[c] = window[c]==undefined?-1:(window[c]-1)
            }
        }
    }
};

checkInclusion("ab","eidbaooo")

