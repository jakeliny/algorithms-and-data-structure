package main

import (
	"fmt"
)

func getMidIndex(startIndex int, endIndex int) int {
	return (startIndex + endIndex) / 2
}

func binarySearch() {
	var arr = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30,
		31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50}
	var midIndex = getMidIndex(25, 40)

	fmt.Println("Binary Search Array: ", arr)
	fmt.Println("Binary Search Result: ", midIndex)

}
