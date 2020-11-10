const form = document.getElementById('calculator')
// form submit event handler
form.onsubmit = function(event){
  event.preventDefault()

const howMuch = document.getElementById('bill')
const tipAmount = document.getElementById('percentage')
const customerNum = document.getElementById('customer-num')

const totalBill = document.getElementById('total-bill')
const totalPercentage = document.getElementById('total-percentage')
const totalPerCustomer = document.getElementById('total-per-customer')

  let cost = parseFloat(howMuch.value);
  let customers = parseInt(customerNum.value);

  let percentage = 0;
  if(tipAmount.value !== ''){
    percentage = parseInt(tipAmount.value)
  }
/*
  console.log(cost);
  console.log(percentage);
  console.log(customers);
  */

//console.log('RESULTS');
let percentageAmount = calculatePercentageAmount(cost, percentage);
totalPercentage.value = percentageAmount
//console.log('percentage Amount ' + percentageAmount);

let totalValue = calculateTotalValue(cost, percentage);
totalBill.value = totalValue
//console.log('Total Value ' + totalValue);

let totalPerPerson = calculatePerCustomer(totalValue, customers);
//totalPerCustomer.value= totalPerPerson
console.log('Total Per Customer:  ' + totalPerPerson);

  return false
}

function calculatePercentageAmount(cost, percentage){
  return Math.round(cost/100 * percentage)
}


function calculateTotalValue(cost, percentageAmount) {
  return Math.round((cost + percentageAmount))
}

function calculatePerCustomer(totalValue, customers){
  return (totalValue / customers)
}
