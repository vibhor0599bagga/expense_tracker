const expenseform = document.getElementById("expenseform");
const expenselist = document.getElementById("expenselist");
const totalAmountElement = document.getElementById("total-amount");

let totalAmount = 0;

expenseform.addEventListener('submit', function(event) {
  event.preventDefault();

  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (description && category && !isNaN(amount)) {
    const row = document.createElement('tr');

    const formattedAmount = formatIndianCurrency(amount); // format the amount with Indian currency commas
    row.innerHTML = `<td>${description}</td>
                     <td>${category}</td>
                     <td>${formattedAmount}</td>`;

    expenselist.appendChild(row);

    totalAmount += amount;
    const formattedTotalAmount = formatIndianCurrency(totalAmount); // format the total amount with Indian currency commas
    totalAmountElement.textContent = `Total: ${formattedTotalAmount}`;

    document.getElementById("description").value = '';
    document.getElementById("category").value = '';
    document.getElementById("amount").value = '';
  } else {
    alert("Please Fill Correct Enteries...");
  }
});

function formatIndianCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
}
