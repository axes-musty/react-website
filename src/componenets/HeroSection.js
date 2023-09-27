import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
import videoBg from '../assets/videos/video-2.mp4'

function HeroSection () {
  return (
    <div className='hero-container'>
        <video className='video' src={videoBg} playsInline autoPlay muted loop></video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/react-website/sign-up'
            >GET STARTED</Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                link='/react-website/sign-up'
              >WATCH TRAILER <i className="far fa-play-circle"></i>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
