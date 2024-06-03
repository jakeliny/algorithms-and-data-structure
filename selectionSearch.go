package main

import (
	"fmt"
)

func getMinimunNumber(arr []int) int {
	var minimunNumber = arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i] < minimunNumber {
			minimunNumber = arr[i]
		}
	}
	return minimunNumber
}

func selectionSearch() {
	var numbers = []int{3, 4, 5, 9, 2, 6, 5, 3, 5, 1}
	var minimunNumberIndex = getMinimunNumber(numbers)
	fmt.Println("Selection Serarh Array: ", numbers)
	fmt.Println("Selection Serarh result: ", minimunNumberIndex)
}
