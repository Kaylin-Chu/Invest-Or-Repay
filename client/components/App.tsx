import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="app">
        <h1 className="text-3xl text-center font-bold">
          Invest or Repay?
        </h1>
        <h2 className="text-l text-center">
          To do or not to do, that is the question.
        </h2>
        <Outlet />
        <footer className="text-center text-sm"> 
          Kaylin 2025
        </footer>
      </div>
    </>
  )
}

export default App
