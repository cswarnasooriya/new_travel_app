import React, {useEffect} from 'react';
import './footer.css';
import {FiSend} from 'react-icons/fi';
import video from '../../Assets/1.mp4';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';


import Aos from 'aos';
import 'aos/dist/aos.css';



const Footer = () => {

  //lets create scroll animation

useEffect(()=>{
  Aos.init({duration: 2000})
}, [])



  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>


      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" data-aos-duration="2000" className="text">
            <small>Keep In Touch</small>
            <h2>Travel With Us</h2>
          </div>


          <div data-aos="fade-up" data-aos-duration="2500" className="inputDiv flex">
            <input type='text' placeholder='Enter Email Address'/>
            <button data-aos="fade-up" data-aos-duration="2500" className='btn flex' type='submit'>SEND<FiSend className="icon"/></button>
          </div>
        </div>


        <div data-aos="fade-up" data-aos-duration="2000" className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-up" data-aos-duration="2900" className="logoDiv">
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className="icon"/> Travel. Wa R nA
              </a>
            </div>


            <div data-aos="fade-up" data-aos-duration="3200" className="footerParagraph">
             WaRnA Travel App offers a seamless and 
             user-friendly experience for travelers, providing a
             comprehensive platform for planning, booking, and 
              managing trips. With its intuitive interface, 
              personalized recommendations, and real-time updates, 
              Warna enhances the travel journey, making it convenient
              and enjoyable. WaRnA Travel App ultimately stands out as
               a reliable and efficient tool, catering to the 
               diverse needs of modern travelers.

            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="footerSocials flex">

              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>

            </div>
            




          </div>


          <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks grid">

            {/*group 1*/ }
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>

              

            </div>


          {/*group 2*/ }
            <div data-aos="fade-up" data-aos-duration="3300" className="linkGroup">
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Hostelworld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TripAdvisor
              </li>

              

            </div>


          {/*group 3*/ }
            <div data-aos="fade-up" data-aos-duration="3500" className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Califonia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Melborn
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Oceania
              </li>

              

            </div>
          </div>

          <div className="footerDiv flex">
            <small>Best Travel With Wa R nA</small>
            <small>COPYRIGHTS RESERVED - Chanuka Sandaruwan Warnasooriya 2023</small>
          </div>





        </div>
      </div>
    </section>
  )
}

export default Footer;