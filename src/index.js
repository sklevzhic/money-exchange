// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let coins = {
        "H": 50, 
        "Q": 25, 
        "D": 10, 
        "N": 5, 
        "P": 1
    };
    let minCoins = {};


    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

	for (let key in coins) {
    let result = Math.floor(currency / coins[key]);
		if (result !== 0) {                         
     		minCoins[key] = result;
  		}
        currency = currency - result*coins[key];       
    }     
  return minCoins;
}

