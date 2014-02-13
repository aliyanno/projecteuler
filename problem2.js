// Sum of even Fibonacci numbers that do not exceed 4,000,000

function sumEvenFibonacciNumbers () {
	var x = 1,
		y = 1,
		i = 0;
	var evenSum = 0;
	while (i <= 4000000) {
		i = x + y;
		if (i % 2 === 0) {
			evenSum = evenSum + i;
		}
		x = y;
		y = i;
	}
	return evenSum;
};
