// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.


function findLongestWord(str) {
    var strArr = str.split(' ');
    var lenOfStrArr = strArr.length;
    var max = 0;

    for (var i = 0; i < lenOfStrArr; i++) {
        if(strArr[i].length > max) {
            max = strArr[i].length;

        }
    }

    return max;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
