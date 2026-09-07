function calculateFee(exchangeRate, feePercentage) {
  const fee = (exchangeRate * feePercentage) / 100;
  return fee;
}

function calculateTotalSocialRate() {
  const exchangeRateValue = document.getElementById("social-rate").value;
  const feePercentageValue = document.getElementById("fee").value;
  return (
    calculateFee(exchangeRateValue, feePercentageValue) +
    Number(exchangeRateValue)
  );
}

const showResult = () => {
  const result = document.getElementById("result-container");
  const totalSocialRate = calculateTotalSocialRate();
  result.innerHTML =
    "The total social rate is: <br><strong>" +
    totalSocialRate.toFixed(3) +
    "</strong>";
};

function clearInputs() {
  document.getElementById("fee").value = null;
  document.getElementById("social-rate").value = null;
  document.getElementById("standard-rate").value = null;
  document.getElementById("fee-result").innerHTML = "";
}
