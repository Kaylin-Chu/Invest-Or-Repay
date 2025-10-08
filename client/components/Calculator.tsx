// Create inputs for investment/debt repayment amount, interest rate for debt, and time period
// Have a predetermined interest rate for investment (eg. 7% for stock market)
// Create a button to calculate
// Display the result below the button
// // Use React state to manage input values and the result

export default function calculate() {
  const amount = (document.querySelector('input[placeholder="$ Extra Amount"]') as HTMLInputElement).value;
  const rate = (document.querySelector('input[placeholder="Interest Rate (%)"]') as HTMLInputElement).value;
  const time = (document.querySelector('input[placeholder="Time Period (years)"]') as HTMLInputElement).value;
  const investmentRate = (document.querySelector('input[placeholder="Investment Interest (%)"]') as HTMLInputElement).value;

  if (!amount || !rate || !time) {
    alert("Please fill in ALL fields.");
    return;
  }
// Math.pow(a,b) = a^b (a to the power of b)
// Compund Interest Formula: A = P(1 + r/n)^(nt)
// A = final amount, P = principal, r = annual interest rate as a decimal, n = number of times interest applied per time period, t = number of time periods elapsed
// P = amount, r = rate/100, t = time
  const debtRepayment = Number(amount) * Math.pow((1 + (Number(rate) / 100)), Number(time));
  const investmentGrowth = Number(amount) * Math.pow((1 + (Number(investmentRate) / 100)), Number(time));

  let resultMessage = `After ${time} years, your debt will grow to $${debtRepayment.toFixed(2)}.\n`;
  resultMessage += `If you invest the same amount at an average return of ${investmentRate}%, it will grow to $${investmentGrowth.toFixed(2)}.\n\n`;

  if (investmentGrowth > debtRepayment) {
    resultMessage += "It's better to invest!";
  } else if (investmentGrowth < debtRepayment) {
    resultMessage += "It's better to repay the debt!";
  } else {
    resultMessage += "Both options yield the same result.";
  }
  // TODO: Display the result on the page (not in alert)
  alert(resultMessage);
}