# 7 Problem Solving (Solve Me First, Simple Array Sum, Compare the Triplets, A Very Big Sum, Diagonal Difference, Plus Minus, Staircase)
---
## arrayOfSum

### Solution
   ```javascript
       function simpleArraySum(ar) {
         // Write your code here
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
 - checking the input type, if its not an Array -> return;
 - then looping through that Array, and checking element type;
 - if the element from the iteration is not a number -> skips that iteration by `continue`;
 - if the element is a number then adding that number with the `int` variable;
 - returning `int` variable after the loop, which is the sum of the numbers;