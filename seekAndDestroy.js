// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
    var initialArr = arguments[0];
    var argsLength = arguments.length;

    var checkArr = [];

    var counter = 1;
    while(counter < argsLength) {
        checkArr.push(arguments[counter]);
        counter++;
    }

    function remove(val) {
        var i = 0;
        var valid = true;
        while(i < checkArr.length) {
            if (val !== checkArr[i]) {
                valid = true;
            } else {
                return false;
            }
            i++;
        }
        return valid;
    }

    var result = initialArr.filter(remove);
    return result;

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
