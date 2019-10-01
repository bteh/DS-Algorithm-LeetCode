// given a string return the character that shows up the most

function maxCharacter(str) {
  let map = {};
  let splitStr = str.toLowerCase().split('');
  for(let i = 0; i < splitStr.length; i++){
    let word = splitStr[i];
    map[word] ? map[word]++ : map[word] = 1;
  }
  let max = 0;
  for(char in map){
    max = Math.max(max, map[char])
  }
  return Object.keys(map)
  .filter((c) => map[c] === max 
  ).join('')
}

maxCharacter('people')