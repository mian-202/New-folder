import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header class=" body-font bg-black text-white ">
  <div class="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
    <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    {/* <div className="logo">
    <img src="image/logo.jpg " alt="" />
    </div> */}~
    <div className='text text-white pk1 mt-4 fw-bold '>MEHAR BROTHER'S</div>
      
    </Link>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link to="/" className='pk' class="mr-5 hover:text-white pk ">HOME</Link>
      <Link to="/OxvaXlim" class="mr-5 hover:text-white pk  ">OXVA  XLIM</Link>
      <Link to="/Voopo"  class="mr-5 hover:text-white pk ">VOOPOO</Link>
      <Link to="/Aspire" class="mr-6 hover:text-white pk ">ASPIRE</Link>
      <Link to="Vooproso" class="mr-5 hover:text-white pk ">ARGUS</Link>
    </nav>
   
  </div>
</header>
    </div>
  )
}

export default Navbar
