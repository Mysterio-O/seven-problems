# 7 Problem Solving (Solve Me First, Simple Array Sum, Compare the Triplets, A Very Big Sum, Diagonal Difference, Plus Minus, Staircase)
---
## 1. arrayOfSum

### Solution
   ```javascript
       function simpleArraySum(ar) {
         if (!Array.isArray(ar)) return "input must be an array";
         let int = 0;
            for (const a of ar) {
                if (typeof a !== 'number') continue;
                 int += a
             }
          return int;
        }
```

**Argument:** `takes Array of number as argument`
 - checking the input type, if its not an Array -> `return`;
 - then looping through that Array, and checking element type;
 - if the element from the iteration is not a number -> skips that iteration by `continue`;
 - if the element is a number then adding that number with the `int` variable;
 - returning `int` variable after the loop, which is the sum of the numbers;

 ---

 ## 2. compareTriplets

 ### Solution
 ```javascript
 function compareTriplets(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        return 'inputs must be array of int'
    }
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {

        if (a[i] < 1 || a[i] > 100) continue;
        if (b[i] < 1 || b[i] > 100) continue;

        if (a[i] > b[i]) {
            alice += 1;
        } else if (a[i] < b[i]) {
            bob += 1;
        };
    }
    const arr = [alice, bob]
    return arr;
}
```

**Argument:** `a & b (array of int)`
 - first checking the inputs type, if it is not an `Array` -> `return`;
 - creating loop based on input `Array` length;
 - skipping the iteration when element from both `Array` is less than 1 or higher than 100;
 - comparing by index value, if a[element] is bigger then b[element] alice gets 1 point;
 - else bob gets 1 point;
 - returning their point in an `Array`;

 ---

 ## 3. aVeryBigSum

 ### Solution
 ```javascript
 function aVeryBigSum(ar) {
    if (!Array.isArray(ar)) return 'input must be an array of int';
    let long = 0;
    for (const n of ar) {
        long += Number(n);
    }
    return long
}
```
**Argument:** `ar is an Array of integer`
 - first checking the input type, if its not an `Array` -> `return`;
 - loop through the `Array` and add every number with `JavaScript` `Number` method;
 - `Number` in `JavaScript` handles big integers automatically;
 - returning the `long` variable, which is the sum of big integers;

 ---

 ## 4. diagonalDifference

 ### Solution
 ```javascript
 function diagonalDifference(arr) {
    const n = arr.length;
    let primary_sum = 0;
    let secondary_sum = 0;
    for(let i = 0; i < n; i++){
        primary_sum += arr[i][i];
        secondary_sum += arr[i][n -1 - i]
    }
    return Math.abs(primary_sum - secondary_sum);
}
```
**Arguments:** `Array of Array of integers`
 - taking `n` as the length of the main argument;
 - creating a loop based on array length;
 - calculating primary diagonal (top-left -> bottom-right) with the `i` value;
 - calculating the secondary diagonal (top-right -> bottom-left) with the `i` and `n` value;
 - returning the absolute difference with `Math.abs()` method;

---

## 5. plusMinus

### Solution
```javascript
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
```
**Arguments:** `Array of integers`
 - checking the input type, if not `Array` -> `return`;
 - looping through the array and checking the value of the element from every iteration;
 - increasing the count of the type between `positive`, `negative` and `zero` by condition in the loop;
 - diving the type numbers by the total length of the input `Array` and using toFixed method for ensuring 6 decimal places

---

## 6. staircase

### Solution
```javascript
function staircase(n) {
    if(typeof n !== 'number' || Number.isNaN(n)) return 'input must be a number';
    if(n<1)return 'provide valid number which is bigger than 0';
    if(n> 100) return 'provide a valid number which is less than 101';
    for(let i = 1;i <= n;i++){
        const spaces = " ".repeat(n - i);
        const hashes = "#".repeat(i);
        console.log(spaces + hashes);
    }
}
```
**Arguments:** `number`
 - checking the input type, if not number -> return
 - checking if the number is less than 1 and greater than 100 -> `return`;
 - creating loop based on number;
 - counting space count by subtracting `i` value from `n` value;
 - counting hash count by `i` count;
 - printing `spaces` and `hashes`;