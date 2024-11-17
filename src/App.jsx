import { useState } from 'react'

import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Productcard from './shared/Productcard'
import Navbar from './components/Navbar'

function App() {
  
  
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
