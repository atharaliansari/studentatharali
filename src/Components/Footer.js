import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const Navigate = useNavigate();
  const Home = () => Navigate('/')
  const Videos = () => Navigate('/Videos')
  const MyNetwork = () => Navigate('/MyNetwork')
  const Notification = () => Navigate('/Notification')
  const Jobs = () => Navigate('/Jobs')
  return (
    <div>
        <div>

<div class="bg-gray-100">

  <footer class="bg-white shadow-md fixed bottom-0 inset-x-0 py-3">
    <div class="flex justify-around items-center text-gray-600 text-xs md:text-sm lg:text-base">
      <button onClick={Home} class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.75L12 3l9 6.75v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 18.75v-9z" />
        </svg>
        <span>Home</span>
      </button>

      <button onClick={Videos} class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-3.401A1 1 0 0121 7.362v9.276a1 1 0 01-1.447.858L15 14M4 5h10a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
        <span>Video</span>
      </button>

      <button onClick={MyNetwork} class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A6 6 0 1121 10.054v.032a6 6 0 01-1.121 6.729M15 10v10m-4-5h8" />
        </svg>
        <span>My Network</span>
        
      </button>

      <button onClick={Notification} class="flex flex-col items-center relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405 1.405A1.997 1.997 0 0118.2 20H5.8c-.698 0-1.313-.409-1.595-1.005L3 17h5m2 3a2 2 0 104 0" />
        </svg>
        <span>Notifications</span>
        <span class="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">25</span>
      </button>

      <button onClick={Jobs} class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9V5a3 3 0 013-3h2a3 3 0 013 3v4m4 0a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2h12z" />
        </svg>
        <span>Jobs</span>
      </button>
    </div>
  </footer>
</div>
</div>
    </div>
  )
}

export default Footer