import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

import img2 from '../assets/images/img-2.jpg'
import img3 from '../assets/images/img-3.jpg'
import img4 from '../assets/images/img-4.jpg'
import img8 from '../assets/images/img-8.jpg'
import img9 from '../assets/images/img-9.jpg'

const Cards = () => {
  return (
    <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                      src={img9}
                      text='Explore the hidden waterfall deep
                      inside the Amazon Jungle'
                      label='Adventure'
                      path='/react-website/services'
                     />
                     <CardItem
                      src={img2}
                      text='Travel through the Island of Bali in a Private Cruise'
                      label='Luxury'
                      path='/react-website/services'
                     />
                </ul>
                <ul className="cards__items">
                    <CardItem
                      src={img3}
                      text='Set Sail in the Atlantice Ocean visitng Uncharted Waters'
                      label='Mystery'
                      path='/react-website/services'
                     />
                     <CardItem
                      src={img4}
                      text='Experience Football on Top of the Himilayan'
                      label='Adventure'
                      path='/react-website/services'
                     />
                    <CardItem
                      src={img8}
                      text='Ride through the Sahara Desert on a guided camel tour'
                      label='Adrenaline'
                      path='/react-website/services'
                     />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
