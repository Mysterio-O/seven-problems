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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    if (!Array.isArray(arr)) return 'input must be an Array';
    const n = arr.length;
    let positives = 0;
    let negatives = 0;
    let zeros = 0
    for (const a of arr) {
        if (a < 0) {
            negatives++
        } else if (a === 0) {
            zeros++
        } else {
            positives++
        }
    };
    console.log((positives / n).toFixed(6))
    console.log((negatives / n).toFixed(6))
    console.log((zeros / n).toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
