// script.js
function calculate() {
    const invoiceAmount = parseFloat(document.getElementById('invoiceAmount').value);
    if (isNaN(invoiceAmount)) {
        alert("Please enter a valid number");
        return;
    }

    const subtotal = invoiceAmount / 1.16;
    const twoPercent = Math.ceil(subtotal * 0.02);
    const finalAmount = invoiceAmount - twoPercent;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('twoPercent').textContent = twoPercent.toFixed(2);
    document.getElementById('finalAmount').textContent = finalAmount.toFixed(2);
}

function clearFields() {
    document.getElementById('invoiceAmount').value = '';
    document.getElementById('subtotal').textContent = '0.00';
    document.getElementById('twoPercent').textContent = '0.00';
    document.getElementById('finalAmount').textContent = '0.00';
}
