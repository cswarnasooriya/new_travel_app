import React from 'react';
import './main.css';



//impoting logos from react icons
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';

import img1 from '../../Assets/1.jpg';
import img2 from '../../Assets/2.jpg';
import img3 from '../../Assets/3.jpg';
import img4 from '../../Assets/4.jpg';
import img5 from '../../Assets/5.jpg';
import img6 from '../../Assets/6.jpg';
import img7 from '../../Assets/7.jpg';
import img10 from '../../Assets/9.jpg';
import img9 from '../../Assets/10.jpg';




//lets create array named data to map each another

const Data = [
  {
    id:1,
    imgSrc:img1,
    destTitle:'Traditional Fishers',
    location:'Hikkaduwa',
    grade:'Cultural',
    fees:'LKR 25,000',
    description:'Hikkaduwa Beach is one of Sri Lankans most popular beaches with everyone from families to solo surfers. Located on the southwestern coast of Sri Lanka, Hikkaduwa is known for its sea turtles, pristine beaches, protected coral reefs, and laid-back beach-town atmosphere.',
  },

  {
    id:2,
    imgSrc:img2,
    destTitle:'Gold Land',
    location:'Anuradapura',
    grade:'Religious',
    fees:'LKR 15,000',
    description:'For visiting the Anuradhapura ancient city, give yourself at least one full day at a minimum. There are many things to do in the Anuradhapura ancient city, so be sure to take your time. If you can, another day will really enhance your experience.',
  },

  {
    id:3,
    imgSrc:img3,
    destTitle:'Wonder Bridge',
    location:'Ella',
    grade:'Architecture',
    fees:'LKR 35,000',
    description:'It is one of the best examples of colonial-era railway construction in the country. The construction of the bridge is generally attributed to a local Ceylonese builder, P. K. Appuhami, in consultation with British engineers.',
  },

  {
    id:9,
    imgSrc:img4,
    destTitle:'Timberland',
    location:'Kirinda',
    grade:'Enjoyfull',
    fees:'LKR 40,000',
    description:'It is said that the gods, angered over this cruel deed, made the ocean rush inland and flood the entire land. Its believed that if a princess was sacrificed to the sea, it will be appeased. The brave princess sacrificed herself on behest of her father and for the safety of her motherland.',
  },


  {
    id:5,
    imgSrc:img5,
    destTitle:'Sea Treat',
    location:'Arugambay',
    grade:'Freedom',
    fees:'LKR 30,000',
    description:'It is one of those areas in the world you have to visit at least once in a lifetime. With world-famous Yala National Park as its neighbor, Arugam Bay is lucky to be surrounded by loads of wildlife like monkeys, elephants, and crocodiles. The bay is trendy and a great place to spend at least 3 days',
  },

  {
    id:6,
    imgSrc:img6,
    destTitle:'Traditional Dancers',
    location:'Kandy',
    grade:'Education',
    fees:'LKR 25,000',
    description:'Folk dance, also known as traditional dance, ethnic dance, or folk choreography, joins musical folklore and literary folklore to complete the major field of folklore, thus being a distinct third component of this field',
  },

  {
    id:7,
    imgSrc:img7,
    destTitle:'Elephant Gift',
    location:'Udawalawa',
    grade:'Realistic',
    fees:'LKR 45,000',
    description:'It s success and fame has travelled not just within the country but throughout the world to an extent where Pinnawala synonymous with the Sri Lankan Elephant. Currently being a home to 93 elephants the concept was actualized by the late Hon.',
  },

  {
    id:8,
    imgSrc:img9,
    destTitle:'Load Buddha',
    location:'Polonnaruwa',
    grade:'Ancient',
    fees:'LKR 30,000',
    description:'Polonnaruwa is located 2 hours away from Sigiriya, around 4 hours from Kandy and is part of the cultural triangle of Sigiriya, Polonnaruwa and Anuradapura. So, it s definitely worth making your way here from Sigiriya and exploring the wonders of the Lions Rock. ',
  },

  {
    id:4,
    imgSrc:img10,
    destTitle:'Giant Rock',
    location:'Sigiriya',
    grade:'Natural',
    fees:'LKR 45,000',
    description:'Sigiriya is one of the most valuable historical monuments of Sri Lanka. Referred by locals as the Eighth Wonder of the World, this ancient palace and fortress complex has significant archaeological importance and attracts thousands of tourists annually. It is probably the most visited tourist destination in Sri Lanka.',
  },

]



//main content of main.jsx


const Main = () => {
  return (
    <section  className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">

        {

          Data.map(({id,imgSrc,destTitle,location,grade,fees, description})=>{
            return(
              <div key={id} className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className="icon"/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span >{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    Details <HiOutlineClipboardCheck className="icon"/>
                  </button>



                </div>
                
              </div>
            )
          })

        }

      </div>
    </section>
  )
}

export default Main;