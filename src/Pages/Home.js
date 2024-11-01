import React from 'react'
import LinkedInPost from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cards from './Cards'

function Home() {
  return (
    <div>
        <div>
            <LinkedInPost/>
        </div>
        <br/>
        <br/>
        <div>
            <Cards/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home