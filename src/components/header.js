import React  from "react"
import logo from "./../images/logo-simple.png"
import MyDrawer from "./my-drawer"
import MyCarousel  from "./carousel"
import MyEvents from "./events"
import MyTopFive from "./topfive"
import FinalSection from "./about"

import './styles.sass'
import {
  Heading,
  Button, 
  Image,
  Link,
} from "@chakra-ui/react"




function Header() {
 
   

   

    
  
 



  return (
   <>
    <div className="menu">
    <MyDrawer/>


      <Image
        width={['120px', '150px' , '180px']}
        height={['120px', '150px', '180px']}
        objectFit="fill"
        src={logo}
        alt="Warapo Project Logo"
        
      />

      <Link href="https://wa.me/5352637564">
        <Button  
        size='md' 
        variant="outline"  
        borderColor="white"
        borderWidth="1px"
        color= "white"
        colorScheme="facebook"
        letterSpacing={['normal', 'wider' ,'widest']}
        //color="#00ABC4"
        _hover={{
          opacity: '0.925',
          color: '#00ABC4',
          borderWidth: '1px',
          boxShadow: "1px 1px 1px 1px black",
          transitionDuration: "0.3s",
          backgroundColor: "white"
      }}
        w={['80px', '120px' , '150px']}
        fontSize={['16px', '18px' , '20px']}
        borderRadius="sm"
        height={['36px', '40px']}
        >RESERVA
        </Button>
        </Link>
        
  </div>
  <Heading as="h1" className="heroText" size="2xl" lineHeight="normal" left={['28px', '50px', '80px', '100px']}>Las mejores noches de Cuba,<br></br>Vívelo en:<br></br><span style={{lineHeight: '50px'}} id="events">Warapo</span></Heading>
  <MyCarousel/>
  <MyEvents/>
  <MyTopFive/>
  <FinalSection/>
      
 </>
  )

    
 
  };

export default Header