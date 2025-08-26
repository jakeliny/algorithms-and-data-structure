export function selectionSort(array: number[]): number[] {
	const newArr = [];

	while (array.length > 0) {
		let smallNumber = findSmallNumber(array);
		array = removeItemFromArray(array, smallNumber);
		newArr.push(smallNumber);
	}
	return newArr;
}

function findSmallNumber(array: number[]): number {
	let smallNumber = array[0];
	for (let i = 1; i < array.length; i++) {
		if (smallNumber > array[i]) {
			smallNumber = array[i];
		}
	}

	return smallNumber;
}

function removeItemFromArray(array: number[], item: number): number[] {
	const newArray: number[] = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== item) {
			newArray.push(array[i]);
		}
	}

	return newArray;
}
