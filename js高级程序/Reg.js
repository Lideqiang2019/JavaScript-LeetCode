function captureOne(re, str) {
    var match = re.exec(str);
    console.log(match,re.lastIndex)
    return match && match[1];
}

var numRe = /num=(\d+)/ig,
    wordRe = /word=(\w+)/i,
    a1 = captureOne(numRe, "num=1"),
    a2 = captureOne(wordRe, "word=1")
console.log(a1,a2);
   