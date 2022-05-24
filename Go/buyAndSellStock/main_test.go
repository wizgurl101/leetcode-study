package buyAndSellStock

import "testing"

func TestMaxProfit(t *testing.T) {
	var testInput []int
	testInput = []int{7, 1, 5, 3, 6, 4}

	got := MaxProfit(testInput)
	want := 5

	if got != want {
		t.Errorf("got %v, wanted %v", got, want)
	}
}

func TestMaxProfit2(t *testing.T) {
	var testInput []int
	testInput = []int{7, 6, 4, 3, 1}

	got := MaxProfit(testInput)
	want := 0

	if got != want {
		t.Errorf("got %v, wanted %v", got, want)
	}
}
