import { useState } from 'react'
import RequestDashbaord from './pages/RequestDashbaord'
import NavBar from './components/NavBar'
function App() {
  

  return (
    <>
    <div className="pages">
    <NavBar/>
    <RequestDashbaord/>
    </div>
    </>
  )
}

export default App
