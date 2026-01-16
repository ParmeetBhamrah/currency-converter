const currencyFromEl = document.getElementById("currency-from");

const amtFromEl = document.getElementById("amt-from");

const currencyToEl = document.getElementById("currency-to");

const amtToEl = document.getElementById("amt-to");

const excchangeRateEl = document.getElementById("exchange-rate");

updateRate()

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/e9b079b1829b49765a594aeb/latest/${currencyFromEl.value}`)
    .then((res) => res.json()).
    then((data) => {
        const rate = data.conversion_rates[currencyToEl.value]
        excchangeRateEl.innerText= `1 ${currencyFromEl.value} = ${(rate).toFixed(2) + " " + currencyToEl.value}`
        amtToEl.value = (amtFromEl.value * rate).toFixed(2)
    });
}

currencyFromEl.addEventListener("change", updateRate)

currencyToEl.addEventListener("change", updateRate)

amtFromEl.addEventListener("change", updateRate)

