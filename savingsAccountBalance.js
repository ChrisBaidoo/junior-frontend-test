function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths) {
  let currentBalance = 0;
  for (let i = 0; i < numMonths; i++) {
    let currentMonthTax = null;
    let currentMonthInterest = 0;

    //Calculate Interest Rate
    if (i === 0) {
      currentMonthInterest = (interestRate / 100) * openingSum;
      currentBalance = openingSum + currentMonthInterest;
    } else {
      currentMonthInterest = (interestRate / 100) * currentBalance;
      currentBalance = currentBalance + currentMonthInterest;
    }
    // calculate the tax on the interest for this month if the openingSum is greater than taxFreeLimit

    if (currentBalance > taxFreeLimit) {
      currentMonthTax = (taxRate / 100) * (currentBalance - taxFreeLimit);
    } else {
      currentMonthTax = 0;
    }
    currentBalance = currentBalance - currentMonthTax;
  }

  return currentBalance;
}

balance(25000, 2, 20000, 1, 2);
