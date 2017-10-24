// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.


function repeatStringNumTimes(str, num) {
    var resultArr = [];

    for (var i = 0; i < num; i++) {
        resultArr.push(str);
    }
    return resultArr.join("");

}

console.log(repeatStringNumTimes("abc", 3));
