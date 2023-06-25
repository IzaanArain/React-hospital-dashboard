import { useState } from 'react'
import RequestDashbaord from './pages/RequestDashbaord'
import NavBar from './components/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  

  return (
    <>
    <div className="pages">
      <BrowserRouter>
      <Routes>
        <Route 
        path='/' 
        element={<>
        <NavBar/>
        <RequestDashbaord/>
        </>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
