/**
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：

字母异位词指字母相同，但排列不同的字符串。
不考虑答案输出的顺序。
示例 1:

输入:
s: "cbaebabacd" p: "abc"

输出:
[0, 6]

解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 示例 2:

输入:
s: "abab" p: "ab"

输出:
[0, 1, 2]

解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。

 */
var findAnagrams = function(s, p) {
    let res = [];
    let need = {};
    let window = {};
    let valid = 0;
    let left = 0,
        right = 0;
    for(let c of p){
        need[c]?need[c]++:need[c]=1;
    }
    let needsLen = Object.keys(need).length;
    while(right<s.length){
        let c = s[right++];
        if(need[c]){
            window[c]?window[c]++:window[c]=1;
            if(need[c]==window[c]){
                valid++;
            }
        }
        // console.log(left,right,window,need);
        // shrink条件
        while(right-left>=p.length){
            if(valid==needsLen){
                // 更新结果
                res.push(left);
            }
            let d = s[left++];
            if(need[d]){
                if(window[d]==need[d]){
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return res;
};

console.log(findAnagrams("cbaebabacd","abc"));