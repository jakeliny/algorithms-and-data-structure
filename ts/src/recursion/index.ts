export function sumArray(array: number[]): number {
	if (array.length === 0) {
		return 0;
	}

	const firstNumber: number = array.shift();
	return firstNumber + sumArray(array);
}

export function multiplyArray(array: number[]): number {
	if (array.length === 0) {
		return 1;
	}

	const firstNumber: number = array.shift();
	return firstNumber * multiplyArray(array);
}

export function findBiggestNumber(array: number[]): number {
	if (array.length === 1) {
		return array[0];
	}
	const firstNumber: number = array.shift();
	const biggestNumber = findBiggestNumber(array);

	if (firstNumber > biggestNumber) {
		return firstNumber;
	}

	return biggestNumber;
}

export function findSmallestNumber(array: number[]): number {
	if (array.length === 1) {
		return array[0];
	}
	const firstNumber: number = array.shift();
	const smallestNumber = findSmallestNumber(array);

	if (firstNumber < smallestNumber) {
		return firstNumber;
	}

	return smallestNumber;
}

export function countItems(array: number[]): number {
	if (array.length === 0) {
		return 0;
	}

	array.pop();
	return 1 + countItems(array);
}
