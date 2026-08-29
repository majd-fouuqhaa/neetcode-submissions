class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const parsedText = s.match(/[a-z0-9]/gi);
        if (!parsedText) return true;
        return parsedText.join('').toLowerCase() === parsedText.toReversed().join('').toLowerCase();
    }
}
