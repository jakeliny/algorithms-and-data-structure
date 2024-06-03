package main

import "testing"

func TestSelectionSearch(t *testing.T) {
	result := getMinimunNumber([]int{9, 4, 66, 7, 3, 45, 2, 1, 34, 4})
	expected := 1

	if result != expected {
		t.Errorf("getMinimunNumber() = %d; want %d", result, expected)
	}
}
