import React from "react"
import twitter from './../images/icons8-twitter.svg'
import instagram from './../images/icons8-instagram.svg'
import youtube from './../images/icons8-youtube.svg'
import burger from './../images/icons8-menu.svg'
import './styles.sass'

import {
  Spacer,
  Image,
  Box,
  List,
  ListItem,
  useDisclosure, 
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"
function MyDrawer(){
    const { isOpen, onOpen, onClose } = useDisclosure();
   const btnRef = React.useRef()  ;
   return(
 <>
      
     <Image src={burger} w={['80px', '120px' , '150px']} h={['30px', '40px', '50px']} onClick={onOpen} ref={btnRef}></Image>
     <Drawer
       isOpen={isOpen}
       size="full"
       placement="left"
       onClose={onClose}
       finalFocusRef={btnRef}
     >
       <DrawerOverlay />
       <DrawerContent>
         <DrawerCloseButton />
         <DrawerHeader 
         bgGradient="linear(to-r, pink.400, blue.400 )" 
         onClick={onClose}
         
         >Warapeteate!
         </DrawerHeader>
 
         <DrawerBody padding="0px 0px 0px 0px">
        <List id="nav-d" fontSize={['sm','md','lg']}>
          <ListItem  className="items-nav-d" bgGradient="linear(to-r, blue.400, blue.500 )" ><a onClick={onClose} href="#header" className="links-nav">Inicio</a></ListItem>
          <ListItem onClick={onClose} className="items-nav-d" bgGradient="linear(to-r, blue.500, purple.600 )" ><a href="#events" className="links-nav">Eventos</a></ListItem>
          <ListItem onClick={onClose} className="items-nav-d" bgGradient="linear(to-r,purple.600, green.700 )" ><a href="#musica" className="links-nav">Música</a></ListItem>
          <ListItem onClick={onClose} className="items-nav-d" bgGradient="linear(to-r,green.600, pink.700 )" ><a href="https://wa.me/5352637564" className="links-nav">Reserva</a></ListItem>
        </List>
     
            
         </DrawerBody>
 
         <DrawerFooter 
          padding="0px 10px 50px 10px"
          display="flex" justifyContent="space-evenly"
              >
               <SocialLogos
               logo={twitter}
               />
              
               <SocialLogos
               logo={youtube}
               size="37px"
               />
                 
               <SocialLogos
               logo={instagram}
               size="33px"
               />   
         </DrawerFooter>
       </DrawerContent>
     </Drawer>
 </>
   )};


function SocialLogos({logo , size}){
  return(<>
    <Box 
    display="flex"
    justifyContent="center" alignItems="center" 
    borderWidth="3px" borderColor="black"
    borderRadius="full"
    shadow="sm"
    boxSize="75px" 
    _hover={{
      backgroundColor: "black",
      transition:"1s"
    }}
    >
      <Image src={logo} boxSize={size}></Image>
    </Box>
    </>)}
SocialLogos.defaultProps ={
  size : '35px'
}
export default MyDrawer
