import {
	countItems,
	findBiggestNumber,
	findSmallestNumber,
	multiplyArray,
	sumArray,
} from "./index";

describe("Recursion", () => {
	it("should return the sum of an array", () => {
		const array = [30, 5, 10, 15];
		const sum = sumArray(array);
		expect(sum).toBe(60);
	});

	it("Should return the multiplication of an array", () => {
		const array = [30, 5, 10, 15];
		const multiplication = multiplyArray(array);
		expect(multiplication).toBe(22500);
	});

	it("sould return biggest number in an array", () => {
		const array = [30, 5, 10, 15, 45];
		const biggestNumber = findBiggestNumber(array);
		expect(biggestNumber).toBe(45);
	});

	it("should return the smallest number in an array", () => {
		const array = [30, 5, 10, 15, 45];
		const smallestNumber = findSmallestNumber(array);
		expect(smallestNumber).toBe(5);
	});

	it("should return the total number of items in an array", () => {
		const array = [30, 5, 10, 15];
		const totalItems = countItems(array);
		expect(totalItems).toBe(4);
	});
});
