/*

If you were only permitted to complete at most one buy and at most one sell during the whole period of days, design an algorithm such 
that your profit, i.e., sell price minus buy price, is maximized. Note that you can only not sell a stock before you buy one.

For example:

[1,2,3,4] ==> returns 3 (buy at 1 and sell at 4)

[4,3,2,1] ==> returns 0 (don't buy)

[4,10,25,2,10] ==> returns 21 (buy at 4 and sell at 25)

*/

var maxProfit = function(prices) {
	let profit = 0; 
  let lowest = prices[0]; // set the lowest to the first index
  for(let i = 1; i < prices.length; i++){
  	lowest = Math.min(lowest, prices[i]); // compare index 0 and 1 and whichever is the lowest set that to lowest
  	profit = Math.max((prices[i] - lowest), profit) // set the profit to index 1 - index 0 and check if the current profit or that Math is greater
  }
  return profit;
};