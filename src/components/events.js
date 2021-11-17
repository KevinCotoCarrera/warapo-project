import React from 'react'
import {
   
    Box,
    ButtonGroup,
    Button,
    Heading,
    Stack,
    Image,
    Link,
    Text
  } from "@chakra-ui/react"
  
import nov_19 from '/src/images/nov_19.jpg'

function Feature({title, img, icon, alt, desc, link, ...rest}){
    return(
    
    <Box
    
    
    className="feature-card"
    shadow="2xl"
    border="1px"
    //borx="1"
    w="260px"
    borderRadius="md"
    _hover={{
        boxShadow: "5px 5px 3px 2px black",
        borderWidth: "1px",
        transitionDuration: "0.5s",
        transitionDelay: "0.1s"
    }}
    {...rest}
    
    >
        <Image 
        src={img}
        alt={alt}
        objectFit="cover"
        boxSize="260px"
        ></Image>
        <Heading fontSize="xl" as="h3" mt={2} p={4}>{title}</Heading>
        <Text  mb={4}  pl={4} pr={4}>{desc}</Text>
        <Link  pl={4}   href="https://wa.me/5352637564"
            >
                
                <Button
                mb={2}
                size='md' 
                variant="solid"  
                borderColor="black"
                borderWidth="1px"
                color="#00ABC4"
                w="150px"
                letterSpacing={['normal', 'wider' ,'widest']}

                _hover={{
                    opacity: '0.725',
                    animationDuration: '0.5',
                    boxShadow: '1px 1px 1px 1px black',
                    textDecoration: 'underline',
                    color: 'rgb(19, 44, 51)'
                    
                }}
                >Reserva
                </Button>
            </Link>
               
    </Box>
    )}
function MyEvents(){
    return(
<>
    <Heading as="h2" textAlign='left' item text size="2xl" pt="48px" pb="24px" pl={['28px', '50px', '80px', '100px']} >Vive las mejores fiestas de la Habana, con una sola identidad</Heading>
    <Stack 
    className="horizontal-scroll-wrapper" 
    justifyContent={{base: 'center', lg: 'space-evenly'}} 
    flexWrap="wrap" flexDirection="row"  
    spacing="16px"
    mb={8}
    >
       <Feature
       title="La Guarida"
       img={nov_19}
       alt="La Guarida"
       desc="Ahora viernes de guarida para que vivas otra ruta de los atardeceres"
       link="#"
       
        ></Feature> 
     {/*  <Feature
       title="La guarida"
       img={header1}
       alt="La Guarida"
       desc="Miercoles de guarida para que vivas otra ruta de los atardeceres"
       link="#"
       
       ></Feature> 
       <Feature
       title="La guarida"
       img={header1}
       alt="La Guarida"
       desc="Miercoles de guarida para que vivas otra ruta de los atardeceres"
       link="#"
      
     ></Feature> */}
      
    </Stack>
</>
    )
}

export default MyEvents