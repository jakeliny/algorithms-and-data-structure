export function binarySearch(array: number[], target: number): number {
	let smallestIndex = 0;
	let biggestIndex = array.length - 1;

	while (smallestIndex <= biggestIndex) {
		let middleindex = Math.floor((smallestIndex + biggestIndex) / 2);

		if (array[middleindex] === target) {
			return middleindex;
		}

		if (array[middleindex] < target) {
			smallestIndex = middleindex + 1;
		}

		if (array[middleindex] > target) {
			biggestIndex = middleindex - 1;
		}
	}
}
