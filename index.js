const exchangeRate = prompt("Enter the exchange rate");
document.write("The current exchange rate is " + exchangeRate + "<br>");

const feePercentage = 0.29;
function calculateFee(exchangeRate, feePercentage) {
    const fee = (exchangeRate * feePercentage) / 100;
    return fee;
}
const fee = calculateFee(exchangeRate,feePercentage);
document.write("The commission fee amount is " + fee.toFixed(4) + "<br>");

const maxExchangeRate = exchangeRate - fee;
document.write("Maximum social exchange rate is " + maxExchangeRate.toFixed(4) + "<br>");
