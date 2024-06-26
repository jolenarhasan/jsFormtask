var exchange = document.querySelector(".exchangeForm");

exchange.onsubmit = function(e) {
    e.preventDefault();

    const amount = parseFloat(document.querySelector('.amount').value);
    const convertTO = document.querySelector('.exchange').value;
    const res = document.querySelector('.result');

    if (isNaN(amount)) {
        res.textContent = 'Please enter a valid number';
        return;
    }

    var Transfers = {
        dollar: 3.5,
        dinar: 5,
        nis: 1
    };

    const convertedAmount = amount * Transfers[convertTO];
    res.textContent = `Converted amount: ${convertedAmount.toFixed(2)} ${convertTO}`;
}
