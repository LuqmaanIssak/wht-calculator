// JavaScript: Calculator Logic
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

// Event listeners for keyboard shortcuts
document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate-btn');
    const clearButton = document.getElementById('clear-btn');

    function triggerCalculate() {
        calculateButton.click();
    }

    function triggerClear() {
        clearButton.click();
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            triggerCalculate();
        } else if (event.key === 'Escape' || event.key === 'Delete') {
            triggerClear();
        }
    });
});

// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        }, function(error) {
            console.log('Service Worker registration failed:', error);
        });
    });
}
