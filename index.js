function calculateFee(exchangeRate, feePercentage) {
    const fee = (exchangeRate * feePercentage) / 100;
    return fee;
}

function calculateFeeFromInputs() {
    const exchangeRateValue = document.getElementById("exchange-rate").value;
    const feePercentageValue = document.getElementById("fee").value;
    
    const fee = calculateFee(exchangeRateValue, feePercentageValue);

   const result = document.getElementById("fee-result");
    result.innerHTML = "The commission fee amount is: <br><strong>" + fee.toFixed(4) + "</strong>";
}
function clearInputs() {
    document.getElementById("fee").value = null;
    document.getElementById("exchange-rate").value = null;
    document.getElementById("fee-result").innerHTML = "";
}