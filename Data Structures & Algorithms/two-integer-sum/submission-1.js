class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsLength = nums.length;
        if (numsLength === 1) return [0];
        if (numsLength === 2) return [0, 1];

        for (let i = 0; i < numsLength; i++) {
            const otherNumIndex = nums.indexOf(target - nums[i]);
            if (otherNumIndex !== -1 && otherNumIndex !== i) {
                return [i, otherNumIndex];
            }
            continue;
        }
    }
}
