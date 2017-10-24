function reverseString(str) {
    var strArr = str.split('');
    strArr.reverse();
    var result = strArr.join('');
    return result;
}

console.log(reverseString("hello"));
