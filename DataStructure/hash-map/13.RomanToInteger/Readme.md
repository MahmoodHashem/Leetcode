# Intuition

To solve this problem, we need to create a hash table, the characters in which will correspond to a certain number.

# Approach

Passing along the line, we will check the current and the next character at once, if the current one is greater than the next one, then everything is fine, we add it to the result (it is initially equal to 0), otherwise, we subtract the current value from the next value (for example, the current 10, and the next 100 , we do 100 - 10, and we get 90), we also add to the result and additionally increase the index by 1. As a result, at the end of the loop, we will get the result we need.

# Complexity

- Time complexity:

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const currentValue = romanMap[s[i]];
        const nextValue = romanMap[s[i+1]]

        if (currentValue < nextValue) {
            total += nextValue - currentValue 
            i++
        } else {
            total += currentValue;
        }

    }

    return total;
};



```
