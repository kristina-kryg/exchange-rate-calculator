function calculateFee(exchangeRate, feePercentage) {
    const fee = (exchangeRate * feePercentage) / 100;
    return fee;
}


// const maxExchangeRate = exchangeRate - fee;
// document.write("Maximum social exchange rate is " + maxExchangeRate.toFixed(4) + "<br>");

function calculateFeeFromInputs() {
    const exchangeRateValue = document.getElementById("exchange-rate").value;
    const feePercentageValue = document.getElementById("fee").value;

    // const fee = calculateFee(exchangeRate,feePercentage);
    // document.write("The commission fee amount is " + fee.toFixed(4) + "<br>");
}