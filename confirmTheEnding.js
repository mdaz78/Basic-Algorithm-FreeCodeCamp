// Check if a string (first argument, str) ends with the given target string (second argument, target).
//
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    var lenOfTarget = target.length;
    var strEnding = str.slice(-lenOfTarget);
    var targetArr = target.split('');
    var strEndingArr = strEnding.split('');

    for(var i = 0; i < lenOfTarget; i++) {
        if (strEndingArr[i] != targetArr[i]) {
            return false;
        }
    }

    return true;
}

console.log(confirmEnding("Bastian", "an"));
