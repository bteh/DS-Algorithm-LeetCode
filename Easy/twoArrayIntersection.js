A/* Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
*/

//using hash-map
var intersection = function(nums1, nums2) {
  let map = {};
  let result = [];

  for(let i = 0; i < nums1.length; i++){
  	map[nums1[i]] = 1 // each element has 1 
	};
	for(let j = 0; j < nums2.length; j++){
		if(map[nums2[j]] === 1){ // if nums2 has the elements of num1 since it'll equal 1
			result.push(nums2[j]); // add it to result
			map[nums2[j]]-- // increase the increment so the next loop it's not still 1 in the map
		}
	}
	return result;
}

//using Set , very clever 
function intersection(nums1, nums2) {
    const set = new Set(nums1);
    return [...new Set(nums2.filter(n => set.has(n)))];
}

/*
The core piece to know is the ... syntax. This is the spread operator, and it essentially takes either an array or 
an object and expands it into its set of items. This lets you do fancy things, so for example if you have the code:

const array = [1, 2];
const array2 = [...array, 3, 4];

*/

var intersection = function(nums1, nums2) {
    let intersection = {};
    
    // collect unique intersections
    for (const n of nums1)
        if (nums2.indexOf(n) !== -1) intersection[n] = 1;
    
    // extract intersections and convert to numbers
    return Object.keys(intersection)
};
