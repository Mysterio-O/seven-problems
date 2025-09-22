# 7 Problem Solving (Solve Me First, Simple Array Sum, Compare the Triplets, A Very Big Sum, Diagonal Difference, Plus Minus, Staircase)
---
## arrayOfSum
**Argument:** `takes Array of number as argument`
 - checking the input type, if its not an Array -> return;
 - then looping through that Array, and checking element type;
 - if the element from the iteration is not a number -> skips that iteration by `continue`;
 - if the element is a number then adding that number with the `int` variable;
 - returning `int` variable after the loop, which is the sum of the numbers;