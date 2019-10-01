//Flat an n level array - [[1, 2], [[3], [4]], 5] should return [1, 2, 3, 4, 5]

var flatten = function(arr){
	let result = [];
	for(let i = 0; i < arr.length; i++){
		if(Array.isArray(arr[i])){
			result = result.concat(flatten(arr[i]))
		} else{
			result.push(arr[i])
		}
	}
	return result;
}