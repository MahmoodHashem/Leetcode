

var reverseString = function(s) {

    const reverseHelper = (left, right) => {
        if (left < right) {
            [s[left], s[right]] = [s[right], s[left]]; 
            reverseHelper(left + 1, right - 1); 
        }
    };
    
    reverseHelper(0, s.length - 1);
    return s;
};

