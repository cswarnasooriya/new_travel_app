import React, {useEffect} from 'react';
import './home.css';
import video from '../../Assets/animation.mp4';
import {GrLocation} from 'react-icons/gr';
import {HiFilter} from 'react-icons/hi';
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import {BsListTask} from 'react-icons/bs';
import {TbApps} from 'react-icons/tb';  
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";


import Aos from 'aos';
import 'aos/dist/aos.css';




const Home = () => {

//lets create scroll animation

useEffect(()=>{
  Aos.init({duration: 2000})
}, [])

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">

        <div className="textDiv">
          <span data-aos="fade-up" data-aos-duration="2500"
           className='smallText'>
            Our Packages
          </span>

          <h1  data-aos="fade-up" data-aos-duration="2800"
           className='homeTitle'>
            Search Your Freedom!
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="3200" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor='city'>
              Search Your Destination:
            </label>
            <div className='input flex'>
              <input type='text' placeholder='Enter Name Here...'/>
              <GrLocation className='icon'/>
            </div>
          </div>
      



          <div className="dateInput">
            <label htmlFor='date'>
              Select Your Date:
            </label>
            <div className='input flex'>
              <input type='date'/>
              
            </div>
          </div>


          <div className="priceInput">
            <div className='label_total flex'>
              <label htmlFor='price'>
                Max Price:
              </label>

              <h3 className='total'>Rs.75000</h3>
            </div>
            
            <div className='input flex'>
              <input type='range' max="75000" min="1000" />
                
            </div>

          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>  
          
          
          </div>
        
      
      
        <div data-aos="fade-up" data-aos-duration="3500" className="homeFooterIcons flex">

          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <BsInstagram className='icon'/>
            <IoLogoWhatsapp className='icon'/>
            < FaFacebookMessenger  className='icon'/>
          </div>


          <div className="leftIcons">
            
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
            
          </div>

        </div>


    </div>
      

      
    </section>
  )
}

export default Home;