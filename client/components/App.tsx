import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="app">
        <h1 className="text-3xl text-center font-bold mt-4">
          Invest or Repay?
        </h1>
        <h2 className="text-l text-center mb-4">
          To do or not to do, that is the question.
        </h2>
        <Outlet />
        <p className="text-sm text-center mr-20 ml-20"> Use this tool to find out whether you&apos;d be better off paying <strong>extra</strong> towards your mortgage (or other debt) or investing the difference! </p>
        <footer className="text-center text-sm mt-20"> 
          © Kaylin 2025
        </footer>
      </div>
    </>
  )
}

export default App
