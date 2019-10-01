/* Implement a shuffle algorithm */

// best method
// Fisher-Yates
function shuffle(array){
	let currentIndex = array.length;

	//While there remain elements to shuffle
	while(0 !== currentIndex){
		//pick a remaining element
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1

		let temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}


/*
Starting with a full array and working backwards using a loop, a random 
item is picked from all remaining items. A temporary placeholder variable is 
used to store the current value of the array in the loop itself, and 
then the current loop value is replaced by the new random pick. The placeholder is 
then used to replace the random array value, essentially swapping the random and current loop values. 
The loop goes a step backward and shuffles all remaining elements in the array, repeats the swap again, 
and so forth until all items have been effectively picked at random.
The array has been replaced item by item internally as it shuffles itself backwards.
*/