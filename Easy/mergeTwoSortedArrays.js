/*
Given two sorted arrays, merge the two arrays together in their respective order

ex: [0,3,4,31] [4,6,30]
output: [0,3,4,4,6,30,31]

*/

function mergeTwoSortedArray(arr1, arr2){
	let result = [];
	let i = 0;
	let j = 0;
	while(i <= arr1.length){
		if(arr[i] <= arr[j]){
			result.push(arr[i])
			i++
		} else{
			result.push(arr[j])
			j++
		}
	}
	while(j <= arr2.length){
		result.push(arr[j])
		j++
	}

	return result;
}