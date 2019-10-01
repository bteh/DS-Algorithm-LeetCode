//How do you find the missing number in a given integer array of 1 to 100?

var missingNumber = function(array){
// sum of sequence formula - actual total sum to get the missing number
let expectedSum = (array.length+1)(array.length+2)/ 2
let actualSum = 0;
for(let i = 0; i < array.length; i++){
	actualSum += numbers[i];
}
return expectedSum - actualSum
}

