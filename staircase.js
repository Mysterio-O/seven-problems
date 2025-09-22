'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    if(typeof n !== 'number') return 'input must be a valid number';
    if(n<1)return 'provide valid number which is bigger than 0';
    if(n> 100) return 'provide a valid number which is less than 101';
    for(let i = 1;i <= n;i++){
        const spaces = " ".repeat(n - i);
        const hashes = "#".repeat(i);
        console.log(spaces + hashes);
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
