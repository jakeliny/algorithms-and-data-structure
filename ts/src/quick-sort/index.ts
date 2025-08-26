export function quickSort(array: number[]): number[] {
	if (array.length < 2) {
		return array;
	}

	const randomIndex = Math.floor(Math.random() * array.length);
	const pivo = array[randomIndex];
	array.splice(randomIndex, 1);

	const smallest: number[] = [];
	const biggest: number[] = [];

	for (const item of array) {
		if (item < pivo) {
			smallest.push(item);
		} else {
			biggest.push(item);
		}
	}

	return [...quickSort(smallest), pivo, ...quickSort(biggest)];
}
