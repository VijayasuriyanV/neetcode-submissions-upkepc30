class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dup = new Set (nums)
        return (nums.length !== dup.size)

    }
}
