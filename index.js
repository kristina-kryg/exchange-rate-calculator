// const feePercentage = 0.29;
// function calculateFee(exchangeRate, feePercentage) {
//     const fee = (exchangeRate * feePercentage) / 100;
//     return fee;
// }
// const fee = calculateFee(exchangeRate,feePercentage);
// document.write("The commission fee amount is " + fee.toFixed(4) + "<br>");

// const maxExchangeRate = exchangeRate - fee;
// document.write("Maximum social exchange rate is " + maxExchangeRate.toFixed(4) + "<br>");

function calculateFeeClicked() {
    const exchangeRateInput = document.getElementById("exchange-rate");
    const exchangeRate = exchangeRateInput.value;
    console.log("User entered exchange rate: " + exchangeRate);
}