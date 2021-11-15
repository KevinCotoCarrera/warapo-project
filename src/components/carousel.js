import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import header1 from '/src/images/header1.jpg'
import header2 from '/src/images/header2.jpg'
import './styles.sass'

import {
    Box
  } from "@chakra-ui/react"
  


function MyCarousel() {
 return(
    <Carousel indicators={false} controls={false}  interval={3000}>
    <Carousel.Item>
      <Box bgImage={header1} height="600px" backgroundPosition="center" className="carousel-img"/>
    </Carousel.Item>
    <Carousel.Item>
    <Box bgImage={header2} height="600px" backgroundPosition="center" className="carousel-img"/>
    </Carousel.Item>
   
  </Carousel>


 )
}
export default MyCarousel