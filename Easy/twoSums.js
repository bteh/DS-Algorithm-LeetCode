/*  EASY 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example: 
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/



var twoSum = function(nums, target){
	for(let i = 0; i < nums.length; i++){
		for(let j = i + 1; j < nums.length; j++){
			if(nums[j] === target - nums[i]){
				nums = [i, j];
				return nums
			}
		}
	}
}

var twoSum = function(nums, target){
	let obj = {};
	for(let i = 0; i < nums.length; i++){
		if(obj[target - nums[i]] || obj[target - nums[i]] === 0){
			return [obj[target - nums[i]], i] // have to return the index
		}
		obj[nums[i]] = i; // else if it doesnt equal the target just add it to the object
	}

}