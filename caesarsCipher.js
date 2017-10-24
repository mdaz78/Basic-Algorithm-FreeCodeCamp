// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    var strLength = str.length;
    var count = 0;
    var result = "";
    var check;

    while(count < strLength) {
        check = 0;
        if (str.charCodeAt(count) < 65 || str.charCodeAt(count) > 90) {
            result = result.concat(str[count]);
        } else {
            check = str.charCodeAt(count) + 13;
            if (check > 90) {
                check = str.charCodeAt(count) - 13;
                result = result.concat(String.fromCharCode(check));
            } else {
                result = result.concat(String.fromCharCode(check));
            }
        }
        count++;
    }

    return result;
}

console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
