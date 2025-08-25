package main

import "fmt"

func factorialRecursion(number int) int {
	if number == 1 {
		return 1
	}
	return number * factorialRecursion(number-1)

}

func fat() {
	fmt.Println("Factorial of 15: ", factorialRecursion(15))

}
