import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Cards from '../../Pages/Cards'
import Videos from '../../Pages/Videos'
import MyNetwork from '../../Pages/MyNetwork'
import Notification from '../../Pages/Notification'
import Jobs from '../../Pages/Jobs'
function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Navbar' element={<Navbar/>}/>
            <Route path='Footer' element={<Footer/>}/>
            <Route path='Cards' element={<Cards/>}/>
            <Route path='Videos' element={<Videos/>}/>
            <Route path='MyNetwork' element={<MyNetwork/>}/>
            <Route path='Notification' element={<Notification/>}/>
            <Route path='Jobs' element={<Jobs/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter