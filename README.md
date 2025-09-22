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
