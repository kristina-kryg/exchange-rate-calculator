function calculateFee(exchangeRate, feePercentage) {
  const fee = (exchangeRate * feePercentage) / 100;
  return fee;
}

function calculateTotalSocialRate() {
  const exchangeRateValue = document.getElementById("social-rate").value;
  const feePercentageValue = document.getElementById("fee").value;
  return (
    calculateFee(exchangeRateValue, feePercentageValue) +
    parseFloat(exchangeRateValue)
  );
}

const showResult = () => {
  const result = document.getElementById("result-container");
  const totalSocialRate = calculateTotalSocialRate();
  result.innerHTML = `The total social rate is: <br><strong> 
    ${totalSocialRate.toFixed(3)}</strong><br>`;
  const standardRate = parseFloat(
    document.getElementById("standard-rate").value,
  );
  result.innerHTML += compareRates(totalSocialRate, standardRate);
};

function compareRates(totalSocialRate, standardRate) {
  if (totalSocialRate < standardRate) {
    return `The most profitable rate for exchange is <strong>social rate</strong>.`;
  } else if (totalSocialRate > standardRate) {
    return `The most profitable rate for exchange is <strong>standard rate</strong>.`;
  } else {
    return `Both rates are equal.`;
  }
}

function clearInputs() {
  document.getElementById("fee").value = null;
  document.getElementById("social-rate").value = null;
  document.getElementById("standard-rate").value = null;
  document.getElementById("result-container").innerHTML = "";
}
