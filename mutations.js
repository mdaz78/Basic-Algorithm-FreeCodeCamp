// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
    var input = arr[0].toLowerCase();
    var check = arr[1].toLowerCase();

    var inputArr = input.split('');
    var checkArr = check.split('');

    var validate = true;

    for (var i = 0; i < checkArr.length; i++) {
        validate = false;
        for (var j = 0; j < inputArr.length; j++) {
            if(checkArr[i] == inputArr[j]) {
                validate = true;
                break;
            } else {
                validate = false;
            }
        }

        if (!validate) {
            return false;
        }
    }

    return true;

}

console.log(mutation(["hello", "hel"]));
