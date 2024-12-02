import React from 'react'

const Home = () => {
  return (
    <div>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/image/slider 2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/image/slider5.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/image/slider6.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Home
