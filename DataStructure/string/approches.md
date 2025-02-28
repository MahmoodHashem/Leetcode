# String Solutions Approaches

## 796.Rotate String

The key insight is that when you concatenate a string with itself (s + s), it contains all possible rotations of the original string.

For example, if s = "abcde", then s + s = "abcdeabcde" contains all rotations: "abcde", "bcdea", "cdeab", "deabc", "eabcd".

1. First, check if lengths are equal (if not, rotation is impossible)
2. Create a concatenated string s + s which contains all possible rotations
3. Check if goal is a substring of s + s
