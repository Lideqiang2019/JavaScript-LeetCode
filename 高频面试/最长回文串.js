/**
 * 5. 最长回文子串
 */
var longestPalindrome = function(s) {
    function isPalindrome(s,left,right){
        while(left>=0 && right<s.length && s[left] === s[right]){
            left--;
            right++;
        }
        return s.substr(left+1,right-1-left);
    }
    let res = "";
    for(let i=0;i<s.length;i++){
        let s1 = isPalindrome(s,i,i);
        let s2 = isPalindrome(s,i,i+1);

        res = s1.length>res.length?s1:res;
        res = s2.length>res.length?s2:res;
    }
    return res;
};

// 409. 最长回文串
var longestPalindrome = function(s) {
    let obj = {}
    let count = 0;
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(obj[char]){
            count++;
            delete obj[char]
        }else{
            obj[char]=1
        }
    }
    return Object.keys(obj).length<1?count*2:count*2+1;
};

console.log(longestPalindrome1("abccccdd"));