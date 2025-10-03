
export default function Calculator() {
  return (
    <>
    <input type="number" placeholder="Amount" className="border p-2 m-2"/>
    <input type="number" placeholder="Interest Rate (%)" className="border p-2 m-2"/>
    <input type="number" placeholder="Time Period (years)" className="border p-2 m-2"/>
    <button className="bg-blue-500 text-white p-2 m-2 rounded">Calculate</button>
    </>
  )
}
// Create inputs for investment/debt repayment amount, interest rate for debt, and time period
// Have a predetermined interest rate for investment (eg. 7% for stock market)
// Create a button to calculate
// Display the result below the button
// // Use React state to manage input values and the result
