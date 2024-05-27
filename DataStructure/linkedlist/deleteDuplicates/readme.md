# Intuition
The function `deleteDuplicates` aims to remove duplicate nodes from a singly sorted linked list.

# Approach
1. Initialize a pointer `current` to the head of the linked list.
2. Iterate through the linked list using a while loop.
3. Check if the current node's value is equal to the next node's value.
4. If they are equal, skip the next node by updating the current node's next pointer to skip the duplicate node.
5. If they are not equal, move the current pointer to the next node.
6. Repeat steps 3-5 until the end of the linked list is reached.

# Complexity
- Time Complexity: O(n) where n is the number of nodes in the linked list.
- Space Complexity: O(1) as the algorithm uses constant extra space.