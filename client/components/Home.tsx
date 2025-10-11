import calculate from './Calculator.tsx'
import Cleave from 'cleave.js'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    new Cleave('#amountInput', {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    })
  }, [])

  return (
    <>
      <div className="m-6 text-center">
        <h2 className="mt-10 text-2xl font-bold">Debt Repayment Details</h2>
        <input
          id="amountInput"
          type="text" // Changed to text for Cleave to add comma (not a number)
          placeholder="$ Extra Amount"
          className="m-2 border p-2"
        />
        <input
          id="frequencyInput"
          list="Frequencies"
          type="string"
          placeholder="Frequency"
          className="m-2 border p-2"
        />
        <datalist id="Frequencies">
          <option value="Daily" label="Daily" />
          <option value="Weekly" label="Weekly" />
          <option value="Fortnightly" label="Fortnightly" />
          <option value="Monthly" label="Monthly" />
          <option value="Quarterly" label="Quarterly" />
          <option value="Yearly" label="Yearly" />
        </datalist>
        <input
          id="interestInput"
          type="number"
          placeholder="Interest Rate (%)"
          className="m-2 border p-2"
        />
        <input
          id="timeInput"
          type="number"
          placeholder="Time Period (years)"
          className="m-2 border p-2"
        />
        <h2 className="mt-10 text-2xl font-bold">Investment Rate Estimate</h2>
        <input
          id="investmentInput"
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
        <br />
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
