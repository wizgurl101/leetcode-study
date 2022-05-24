package buyAndSellStock

/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Profit will be maximum when buying price is minimum and selling price is maximum.
On one day, you can either buy or sell.
Only one statement either if or else if will be executed.
If the current price is less than the buy price, update the buy price.
If the current price is greater than the sell price, update the sell price.

https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/39038/Kadane's-Algorithm-Since-no-one-has-mentioned-about-this-so-far-%3A)-(In-case-if-interviewer-twists-the-input)
*/

func MaxProfit(prices []int) int {
	minPrice := prices[0]
	maxProfit := 0

	for _, price := range prices {
		if price < minPrice {
			minPrice = price
		}

		profit := price - minPrice

		if profit > maxProfit {
			maxProfit = profit
		}
	}

	return maxProfit
}
