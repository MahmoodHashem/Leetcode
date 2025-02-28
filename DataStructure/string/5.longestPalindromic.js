


function longestPalindrome(s) {
    if (s.length === 0) return "";

    let start = 0, end = 0;


    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        let oddLength = expandAroundCenter(s, i, i);
        let evenLength = expandAroundCenter(s, i, i + 1);
        let length = Math.max(oddLength, evenLength);

        if (length > end - start) {
            start = i - Math.floor((length - 1) / 2);
            end = i + Math.floor(length / 2);
        }
    }

    return s.substring(start, end + 1);
}
