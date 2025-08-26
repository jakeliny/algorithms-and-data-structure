export function quickSort(array: number[]): number[] {
	if (array.length < 2) {
		return array;
	}

	const pivo = array.shift();
	const smallest: number[] = [];
	const biggest: number[] = [];

	for (const item of array) {
		if (item < pivo!) {
			smallest.push(item);
		} else {
			biggest.push(item);
		}
	}

	return [...quickSort(smallest), pivo, ...quickSort(biggest)];
}

export function quickSortWithFilter(array: number[]): number[] {
	if (array.length < 2) {
		return array;
	}

	const pivo = array.shift();
	const smallest: number[] = array.filter((n) => n < pivo);
	const biggest: number[] = array.filter((n) => n > pivo);

	return [
		...quickSortWithFilter(smallest),
		pivo,
		...quickSortWithFilter(biggest),
	];
}
