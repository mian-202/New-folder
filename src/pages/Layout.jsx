import React from 'react'
import { BiSolidEditLocation, BiSolidLocationPlus } from 'react-icons/bi'
import { BsEnvelope, BsFacebook, BsFillTelephoneFill, BsInstagram, BsMailbox, BsMailbox2 } from 'react-icons/bs'

const Layout = () => {
  return (
    <div>
      <footer className="bg-black text-white py-8 border-t-4 mt-10 border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Column 1: Company Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 pk "> Phone number <BsFillTelephoneFill className="inline ml-2"/> </h3>
            <ul className="space-y-2">
              <li>
                
                <a href="#" className="hover:text-pink-500 transition duration-300 pk1">03280702467 </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition duration-300 pk1">03334303663</a>
              </li>
             
            </ul>
          </div>

          {/* Column 2: Support */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 pk">Email <BsEnvelope className='inline ml-2'/></h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-500 transition duration-300 pk1">rameezmmehar3663@gmail.com</a>
              </li>
              
             
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 pk">Location <BiSolidLocationPlus className='inline ml-2'/></h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-500 transition duration-300 pk1">New Defence Road Kahna Nau Lahore</a>
              </li>
             
             
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 pk">Shop Product's</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-500 transition duration-300  pk1">Pod And Vap</a>
              </li>
             
             
            </ul>
          </div>


          {/* Column 3: Follow Us */}
          <div className="mb-6 md:mb-0">
  <h3 className="text-2xl font-semibold mb-4 mr-10 pk">Follow us</h3>
  <ul className="space-y-2">
    <li>
      <a href="#" className="hover:text-blue-500 transition duration-300 pk1">
        Facebook <BsFacebook className="inline ml-2" />
      </a>
    </li>

    <li>
      <a href="#" className="hover:text-pink-500 transition duration-300 pk1">
        Instagram <BsInstagram className="inline ml-2" />
      </a>
    </li>
  </ul>
</div>


        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm ">
          <p> .2024 Your Shop Name. </p>
          <div className='pk1 mt-1'>MEHAR BROTHER's.</div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Layout
