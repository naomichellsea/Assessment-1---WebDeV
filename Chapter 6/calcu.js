// Selecting elements
const costInput = document.getElementById('cost');
const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculate-btn');
const totalCost = document.getElementById('total-cost');

// Function to calculate total cost
function calculateTotalCost() {
    const costPerLiter = parseFloat(costInput.value);
    const litersPurchased = parseFloat(litersInput.value);
    const total = costPerLiter * litersPurchased;
    totalCost.textContent = `Total cost: AED ${total.toFixed(2)}`; // Displaying in AED
}

// Event listener for the calculate button
calculateBtn.addEventListener('click', calculateTotalCost);
