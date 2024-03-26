const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select")

async function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    console.log(currencySelect.value)

    const moedas = "USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL"
    const url = `https://economia.awesomeapi.com.br/last/${moedas}`
    const data = await fetch(url).then(response => response.json())

    let total = 1
    const dolarToday = data.USDBRL["bid"]
    const euroToday = data.EURBRL["bid"]
    const libraToday = data.GBPBRL["bid"]
    const bitcoinToday = data.BTCBRL["bid"]
    const real = 1

    // const dolarToday = 5.2;
    // const euroToday = 6.2;
    // const libraToday = 4.6;
    // const bitcoinToday = 7.2;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assents/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assents/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assents/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assents/bitcoin.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);
