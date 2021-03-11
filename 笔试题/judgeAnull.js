let a = undefined;
function isNull(a){
    if(a!==0 && typeof a!=='undefined' && a!==''){
        return true;
    }
    return false;
}

console.log(isNull(''));
console.log(isNull(undefined));
console.log(isNull(0));
console.log(isNull(null));