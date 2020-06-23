/*
14. Write a JavaScript function to convert an amount to coins. Go to the editor
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
*/

let amountToCoins = amount => {
	let possibleCoins = [ 25, 10, 5, 2, 1 ];
	let coins = new Array();
	
	while(amount > 0){
		// Find the first coin that is smaller than the left amount of money
		let inUseCoin;

		for(let i = 0 ; i < possibleCoins.length ; i++){
			if(possibleCoins[i] <= amount){
				inUseCoin = possibleCoins[i];
				break;
			}

			continue;	
		}

		// Find out the number of repetitions and subtract the 'inUseCoin' from the amount of coins lefts & add the 'inUseCoin' to the 'coins' array
		let numberOfRepetitions = Math.floor(amount / inUseCoin);
		for(let j = 0 ; j < numberOfRepetitions ; j++){
			amount -= inUseCoin;
			coins.push(inUseCoin);
		}
	}

	return coins
};

console.log(amountToCoins(46));
