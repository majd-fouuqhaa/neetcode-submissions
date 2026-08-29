class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const sMap = {};
        const tMap = {};

        for (let i = 0; i < s.length; i++) {
            sMap[s[i]] = sMap[s[i]] + 1 || 1;
        }

        for (let j = 0; j < t.length; j++) {
            tMap[t[j]] = tMap[t[j]] + 1 || 1;
        }

        return Object.entries(sMap).every(([key, value]) => {
            return sMap[key] === tMap[key];
        })
    }
}
