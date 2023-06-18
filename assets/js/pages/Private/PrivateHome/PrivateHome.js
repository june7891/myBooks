import React from 'react'
import cover from "./book-cover.jpg"
import Navbar from '../../../components/Navbar'

function PrivateHome() {
  return (
    <>
          <Navbar/>
   

    <h2>Toutes mes livres</h2>
    <h2>Livres prêtés</h2>
    <h2>Livres empruntés</h2>
   <div className="cards-container">
    <div className="card">
      <div className="card-title">Title</div>
      <div className='card-image'>
        <img src={cover} alt="book cover" />
      </div>
    </div>
    <div className="card">
      <div className="card-title">Title</div>
      <div className='card-image'>
        <img src={cover} alt="book cover" />
      </div>
    </div>
   </div>
    </>

  )
}

export default PrivateHome