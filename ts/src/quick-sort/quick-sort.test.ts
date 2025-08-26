import { quickSort } from "./index";

describe("Quick Sort", () => {
	it("should return the sorted array with one item", () => {
		const array = [1];
		const sortedArray = quickSort(array);
		expect(sortedArray).toEqual([1]);
	});

	it("should return the sorted array with two items", () => {
		const array = [2, 1];
		const sortedArray = quickSort(array);
		expect(sortedArray).toEqual([1, 2]);
	});

	it("should return the sorted array with three items", () => {
		const array = [3, 9, 4];
		const sortedArray = quickSort(array);
		expect(sortedArray).toEqual([3, 4, 9]);
	});

	it("should return the sorted array", () => {
		const array = [
			10, 25, 100, 97, 7, 34, 65, 9, 5, 2, 3, 1, 4, 33, 44, 6, 55, 66, 77, 88,
			99,
		];
		const sortedArray = quickSort(array);
		expect(sortedArray).toEqual([
			1, 2, 3, 4, 5, 6, 7, 9, 10, 25, 33, 34, 44, 55, 65, 66, 77, 88, 97, 99,
			100,
		]);
	});

	it("should return sorted array with duplicates", () => {
		const array = [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 33, 34, 44, 55, 65, 66, 77, 88, 97, 99,
			100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 33, 34, 44, 55, 65, 66, 77, 88,
			97, 99, 100,
		];
		const sortedArray = quickSort(array);
		expect(sortedArray).toEqual([
			1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 25, 25, 33,
			33, 34, 34, 44, 44, 55, 55, 65, 65, 66, 66, 77, 77, 88, 88, 97, 97, 99,
			99, 100, 100,
		]);
	});

	it("should return sorted array with negative numbers", () => {
		const array = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
		const sortedArray = quickSort(array);
		expect(sortedArray).toEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]);
	});

	it("should return sorted array with negative and positive numbers", () => {
		const array = [
			-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		];
		const sortedArray = quickSort(array);
		expect(sortedArray).toEqual([
			-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		]);
	});
});
