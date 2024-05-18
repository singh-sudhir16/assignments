/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

const max = ( a, b) =>{
    return  a > b ? a : b;
}
function findLargestElement(numbers) {

    let maxi=-1
    for(let i=0;i<numbers.length;i++)
        maxi = max(numbers[i],maxi);
    return maxi;
}

module.exports = findLargestElement;
