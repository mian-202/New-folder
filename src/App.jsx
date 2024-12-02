import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Voopo from './pages/Voopo'
import OxvaXlim from './pages/OxvaXlim'
import Aspire from './pages/Aspire'
import Vooproso from './pages/Vooproso'
import DetailpageO from './pages/DetailpageO'
import DetailpageV from './pages/DetailpageV'
import DetailpageA from './pages/detailpageA'
import DetailpageVo from './pages/DetailpageVo'
import Layout from './pages/Layout'




const App = () => {
  return (
   
    <div>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Voopo" element={<Voopo />} />
  <Route path="/Voopo/:id" element={<DetailpageV />} />
  <Route path="/OxvaXlim" element={<OxvaXlim />} />
  <Route path="/OxvaXlim/:id" element={<DetailpageO/>} />
  <Route path="/Aspire" element={<Aspire/>} />
  <Route path="/Aspire/:id" element={<DetailpageA/>} />
  <Route path="/Vooproso" element={<Vooproso/>} />
  <Route path="/Vooproso/:id" element={<DetailpageVo/>} />
 </Routes>
 <Layout/>
    </div>
  )
}

export default App
