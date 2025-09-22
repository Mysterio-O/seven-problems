'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    if (!Array.isArray(arr)) return 'input must be an Array of integers';
    let total = arr.reduce((a, b) => a + b, 0);

    const largestNumber = Math.max(...arr);
    const smallestNumber = Math.min(...arr);

    const smallest = total - largestNumber;
    const biggest = total - smallestNumber;

    console.log(smallest + " " + biggest);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
