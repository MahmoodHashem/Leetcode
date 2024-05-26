# Intuition
The goal is to remove duplicates from a sorted integer array nums while keeping track of the number of unique elements. The function should return the count of unique elements and modify the input array in-place to contain only the unique elements at the beginning in the same order.

## Approach

1. We initialize a variable l to 1. This variable will keep track of the count of unique elements in the modified nums array.

2. We iterate through the input vector nums starting from the second element (index 1) using a for loop.

3. Inside the loop, we compare the current element nums[i] with the previous unique element nums[i - 1]. If they are not equal, it means we have encountered a new unique element. In this case, we update the nums[l] position with the current element to keep it in place. We then increment l to indicate that we have found one more unique element.

4. After the loop completes, k contains the count of unique elements, and the first k elements of the nums vector contain the unique elements in the same order they appeared in the input.

5. We return the value of l as the final count of unique elements.

## Complexity

### Time complexity:
The time complexity of this algorithm is O(n), where n is the number of elements in the input vector nums. This is because we iterate through the input vector once, and each iteration takes constant time.

### Space complexity:
The space complexity of this algorithm is O(1) because it modifies the input array in-place without using any additional data structures that depend on the size of the input.