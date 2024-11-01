import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import Dashboard from '../../dashboard/dashboard'

function AppRouter() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Dashboard/*' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default AppRouter