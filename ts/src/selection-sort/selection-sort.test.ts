import { selectionSort } from "./index";

describe("Selection Sort", () => {
	it("should sort an array", () => {
		const array = [5, 3, 8, 4, 2, 11, 24, 1, 10, 35];
		const sortedArray = selectionSort(array);
		expect(sortedArray).toEqual([1, 2, 3, 4, 5, 8, 10, 11, 24, 35]);
	});
});
