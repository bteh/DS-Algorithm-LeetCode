/* Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

var singleNumber = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++){
    	map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
    }
    for(key in map){
        if(map[key] < 2){
            return key
        }
    }
};



var singleNumber = function(nums) {
    nums.sort();
    for (var i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
};