import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Calculator from './components/Calculator.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="calculator" element={<Calculator/>} />
  </Route>,
)
