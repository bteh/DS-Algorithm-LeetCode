var palindrome = function (str){
  let splitArr = str.split('')
  for(let i = 0; i < splitArr.length/2; i++){
    if(splitArr[i] !== splitArr[str.length - i - 1]){
      return false;
    }
  }
  return true;
}

palindrome('racecar')



var palindrome = function(str){
	return str === str.split('').reverse.join('');
}