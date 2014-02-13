// Sum of all multiples of 3 and 5 up to 1000

function sumMultiplesOfThreeAndFive () {
	var currentSum = 0;
	for (var i = 1; i < 1000; i++) {
		if (i % 3 === 0) {
			currentSum = currentSum + i;
		} else if (i % 5 === 0) {
			currentSum = currentSum + i;
		}
	}
	return currentSum;
};