var calculate = function(s){
    // 先解决加减,将符号和数字压入栈中
    return hepler(s);
    function hepler(s){
        let n='',f='+',q=[];
        for(let i=0;i<s.length || n;i++){ // 最后一个数还没有加入,如果还有n，
            if(s[i]===' ') continue
            if(/\D/.test(s[i])){
                // 如果是数字
                switch (f) {
                    case '+':
                        q.push(n);
                        break;
                    case '-':
                        q.push(-n);
                        break;
                    case '*':
                        // console.log(q);
                        // q[q.length-1] = q[q.length-1]*n;
                        q.push(q.pop()*n);
                        break;
                    case '/':
                        // q[q.length-1] = q[q.length-1] / n | 0;
                        // console.log(q);
                        q.push(q.pop()/n|0);
                }
                n = '';
                f = s[i];
            }else{
                n +=s[i];
            }
        }
        return q.reduce((pre,cur)=>pre+(cur|0),0);
    }
}

var calculate1 = function(s){
    // 先解决加减,将符号和数字压入栈中
    return hepler(s);
    function hepler(s){
        let n='',f='+',q=[],a = typeof s === 'string' ? Array.from(s).reverse() : s;
        while(a.length || n){ // 最后一个数还没有加入,如果还有n
            let c = a.pop();
            if(c===' ') continue;
            if(c==='('){
                n = hepler(a);
            }
            if(/\D/.test(c)){
                // 如果是数字
                switch (f) {
                    case '+':
                        q.push(n);
                        break;
                    case '-':
                        q.push(-n);
                        break;
                    case '*':
                        q.push(q.pop()*n);
                        break;
                    case '/':
                        q.push(q.pop()/n|0);
                }
                if(c===')'){
                    break;
                }
                n = '';
                f = c;
            }else{
                n +=c;
            }
        }
        return q.reduce((pre,cur)=>pre+(cur|0),0);
    }
}
console.log(calculate1("(1+(4+5+2)-3)+(6+8)"));
// console.log(calculate1(" 2-1 + 2 "));
// console.log(/\D/.test('1'))
// console.log('-5'/'2'|0);
console.log(Array.from("3+2-1+(1-2)"));
console.log(Array.from("3+2-1+(1-2)").reverse());
