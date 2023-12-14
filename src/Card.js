import React, { useState } from 'react'
// import pic from './download.png';

function Card({name, rating, hours, address, description, price, pic}){
  const [readMore, setReadMore] = useState(false);

  let dollars = '';
  for(let i = 0; i < price; i++){
    dollars += '$';
  }

  let ratingInt = Math.round(rating);
  let stars = [];
  for(let i = 0; i <= 5; i++){
    stars.push(ratingInt <= i ? "fa fa-star" : "fa fa-star checked")
  }

  return (
    
        <div className="card example">
          <div className="card-body">
            <div className="row card-picture">
              <img src={pic} alt={name} />
            </div>
            <div className="card-text">
              <div className="row">
                <div className="justify-left-right">
                  <h5>{name.substring(0, 25)}</h5>
                  <div className="rating">
                    <span className={stars[0]}></span>
                    <span className={stars[1]}></span>
                    <span className={stars[2]}></span>
                    <span className={stars[3]}></span>
                    <span className={stars[4]}></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <label>{address}</label>
              </div>
              <div className='justify-left-right'>
                <label>{hours}</label>
                <label>{dollars}</label>
              </div>
              
              <div className="row">
                <label>{readMore ? description : description.substring(0, 200) + '...' }</label>
                <button onClick={ () => setReadMore(!readMore)}>
                  {readMore ? 'show less' : 'show more'}
                </button>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Card