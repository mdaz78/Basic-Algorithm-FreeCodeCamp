// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


function titleCase(str) {
    str = str.toLowerCase();
    var strArr = str.split(" ");
    var lenOfStrArr = strArr.length;
    var resultArr = [];

    for(var i = 0; i < lenOfStrArr; i++) {
        resultArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }

    return result = resultArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
