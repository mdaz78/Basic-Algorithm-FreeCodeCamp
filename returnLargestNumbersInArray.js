// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].



function largestOfFour(arr) {
    var max;
    var resultArr = [];

    for (var outerArr = 0; outerArr < arr.length; outerArr++) {
        max = 0;
        for (var innerArr = 0; innerArr < arr[outerArr].length; innerArr++) {
            if (arr[outerArr][innerArr] > max) {
                max = arr[outerArr][innerArr];
            }
        }
        resultArr.push(max);
    }
    return resultArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
