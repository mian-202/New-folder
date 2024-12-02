import React from 'react'
import { products } from './DataO'
import { Link } from 'react-router-dom'




const OxvaXlim = () => {
  return (
   
 <div className='row'>
    <div className='text-center pt-2'> <p className='fs-1 fw-bold pk'>OXVA XLIM</p></div>
    {
      products.map((x)=>{
            return(
                <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4 my-4 '>
                <div className="card" style={{width:'100%'}}>
               <Link to={`/OxvaXlim/${x.id}`}>
               <img src={x.image} className="card-img-top" alt="..." />
               </Link>
                <div className="card-body">
                  <h5 className="card-title">{x.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary pk">BY NOW</a>
                </div>
              </div>
              </div>
            )
         })
    }
 </div>


  )
}

export default OxvaXlim