import { binarySearch } from "./index";

describe("Binary Search", () => {
	it("should return the index of the target in the array", () => {
		const array = [
			1, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
			27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 49, 50,
		];
		const target = 33;
		const index = binarySearch(array, target);
		expect(index).toBe(21);
	});
});
