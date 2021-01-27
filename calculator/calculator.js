window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");

  amount.value = 300000;
  years.value = 30;
  rate.value = 4.5;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  try {
    let monthlyPayment = calculateMonthlyPayment(values);
    if (monthlyPayment === 'NaN' || monthlyPayment === 'Infinity') {
      throw new Error('You must enter a value greater than 0');
    } else {
    updateMonthly(monthlyPayment);
    }
  } catch (e) {
  alert(e);
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let pInterest = (values.rate / 100) / 12;
  let totalPayments = values.years * 12;
  let monthlyPayment = (principle * pInterest) / (1 - (1 + pInterest) ** -totalPayments);
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = '$' + monthly;
}
