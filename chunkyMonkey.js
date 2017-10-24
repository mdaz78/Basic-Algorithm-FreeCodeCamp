// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.



function chunkArrayInGroups(arr, size) {
    var counter = 0;
    var resultArr = [];

    while (counter < arr.length) {
        resultArr.push(arr.slice(counter, counter += size));
    }

    return resultArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
