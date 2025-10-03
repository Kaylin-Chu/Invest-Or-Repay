import calculate from './Calculator.tsx'
export default function Home() {
  return (
    <>
      <div className='text-center m-6'>
        <h2 className="text-2xl font-bold mt-10">Debt Repayment Details</h2>
        <input
          type="number"
          placeholder="$ Amount"
          className="m-2 border p-2"
        />
        <input
          type="string"
          placeholder="Frequency"
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
        <h2 className="text-2xl font-bold mt-10">Investment Rate Estimate</h2>
        <input
          list="interestRates"
          type="number"
          placeholder="Investment Interest (%)"
          className="m-2 border p-2"
        />
          <datalist id="interestRates">
            <option value="7" label="Stock Market (avg 7%)" />
            <option value="4" label="Bonds (avg 4%)" />
            <option value="1" label="Savings Account (avg 1%)" />
          </datalist>
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
