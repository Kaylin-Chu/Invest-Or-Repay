import calculate from './Calculator.tsx'
export default function Home() {
  return (
    <>
      <div className='text-center'>
        <h2 className="text-2xl font-bold">Debt Repayment Details</h2>
        <input
          type="number"
          placeholder="$ Amount"
          className="m-2 border p-2"
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          className="m-2 border p-2"
        />
        <input
          type="number"
          placeholder="Time Period (years)"
          className="m-2 border p-2"
        />
        <br/>
        <h2 className="text-2xl font-bold">Investment Estimates</h2>
        <input
          type="number"
          placeholder="$ Amount"
          className="m-2 border p-2"
        />
        <input
          list="interestRates"
          type="number"
          placeholder="Interest Rate (%)"
          className="m-2 border p-2"
        />
          <datalist id="interestRates">
            <option value="7" label="Stock Market (avg 7%)" />
            <option value="4" label="Bonds (avg 4%)" />
            <option value="1" label="Savings Account (avg 1%)" />
          </datalist>
        <input
          type="number"
          placeholder="Time Period (years)"
          className="m-2 border p-2"
        />
        <br/>
        <button
          onClick={() => calculate()}
          className="m-2 rounded bg-blue-500 p-2 text-white"
        >
          Calculate
        </button>
      </div>
    </>
  )
}
