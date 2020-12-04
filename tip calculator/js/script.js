//easier Dom Grabbinf

const regiser = (element) => document.getElementById(element);

const value = (element) => element.value;

//place all your variables in object to avoid typos and foster reusability and having a single source of truth

const container = {
  CACULATOR: 'calculator',
  BILL: 'bill',
  PERCENTAGE: 'percentage',
  CUSTOMER_NUM: 'customer-num',
  TOTAL_BILL: 'total-bill',
  TOTAL_PER_CUSTOMER: 'total-per-customer',
  TOTAL_PERCENTAGE: 'total-percentage',
};

const form = regiser(container.CACULATOR);

// form submit event handler

form.addEventListener('submit', (event) => {
  //prevent default event action from occurring in ths case submitting the form

  event.preventDefault();

  const howMuch = regiser('bill');
  const tipAmount = regiser('percentage');
  const customerNum = regiser('customer-num');

  const totalBill = regiser('total-bill');
  const totalPercentage = regiser('total-percentage');

  const totalPerCustomer = regiser('total-per-customer');

  let cost = parseFloat(value(howMuch));

  //passing 10 as a second parameter makes sure it converts the num to base 10

  let customers = parseInt(value(customerNum), 10);

  let percentage = 0;

  if (!tipAmount.value) {
    percentage = parseInt(tipAmount.value, 10);
  }

  /*
  console.log(cost);
  console.log(percentage);
  console.log(customers);
  */

  //changed all the let to const because use are not reusing the variables anywhere else

  //console.log('RESULTS');
  const percentageAmount = calculatePercentageAmount(cost, percentage);
  totalPercentage.value = percentageAmount;
  //console.log('percentage Amount ' + percentageAmount);

  const totalValue = calculateTotalValue(cost, percentage);
  totalBill.value = totalValue;
  //console.log('Total Value ' + totalValue);

  const totalPerPerson = calculatePerCustomer(totalValue, customers);
  //totalPerCustomer.value= totalPerPerson
  console.log(`Total Per Customer:  ${totalPerPerson}`);

  return false;
});

function calculatePercentageAmount(cost, percentage) {
  return Math.round((cost / 100) * percentage);
}

function calculateTotalValue(cost, percentageAmount) {
  return Math.round(cost + percentageAmount);
}

function calculatePerCustomer(totalValue, customers) {
  return totalValue / customers;
}
