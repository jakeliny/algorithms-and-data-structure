package main

import "testing"

func TestBinarySearch(t *testing.T) {
	result := getMidIndex(25, 40)
	expected := 32

	if result != expected {
		t.Errorf("getMidIndex() = %d; want %d", result, expected)
	}
}
