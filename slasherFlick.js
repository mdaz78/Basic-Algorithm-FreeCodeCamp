// Return the remaining elements of an array after chopping off n elements from the head.
//
// The head means the beginning of the array, or the zeroth index.


function slasher(arr, howMany) {
    var resultArr = [];
    var counter = 0;

    while (counter < arr.length) {
        if(counter < howMany) {
            counter++;
        } else {
            resultArr.push(arr[counter]);
            counter++;
        }
    }

    return resultArr;
}

console.log(slasher([1, 2, 3], 4));
