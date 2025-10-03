// Create inputs for investment/debt repayment amount, interest rate for debt, and time period
// Have a predetermined interest rate for investment (eg. 7% for stock market)
// Create a button to calculate
// Display the result below the button
// // Use React state to manage input values and the result

export default function calculate() {
  const amount = (document.querySelector('input[placeholder="$ Amount"]') as HTMLInputElement).value;
  const rate = (document.querySelector('input[placeholder="Interest Rate (%)"]') as HTMLInputElement).value;
  const time = (document.querySelector('input[placeholder="Time Period (years)"]') as HTMLInputElement).value;
  const investmentRate = (document.querySelector('input[placeholder="Investment Interest Rate (%)"]') as HTMLInputElement).value;

  if (!amount || !rate || !time) {
    alert("Please fill in all fields.");
    return;
  }

  const debtRepayment = amount * Math.pow((1 + (Number(rate) / 100)), Number(time));
  const investmentGrowth = amount * Math.pow((1 + (investmentRate / 100)), Number(time));

  let resultMessage = `After ${time} years, your debt will grow to $${debtRepayment.toFixed(2)}.\n`;
  resultMessage += `If you invest the same amount at an average return of ${investmentRate}%, it will grow to $${investmentGrowth.toFixed(2)}.\n\n`;

  if (investmentGrowth > debtRepayment) {
    resultMessage += "It's better to invest!";
  } else if (investmentGrowth < debtRepayment) {
    resultMessage += "It's better to repay the debt!";
  } else {
    resultMessage += "Both options yield the same result.";
  }

  alert(resultMessage);
}