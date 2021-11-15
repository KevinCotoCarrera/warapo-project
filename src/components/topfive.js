import { Box, Heading, HStack, Text, Image, Stack } from '@chakra-ui/layout'
import React from 'react'
import './styles.sass'
import header2 from '/src/images/header2.jpg'

const Adele = 'https://charts-static.billboard.com/img/2008/02/adele-v39-155x155.jpg'



function MyTopFive(){

    return(<>
   <HStack
    backgroundColor="blue.900"
    pt={12}
    pl={['4', '8' , '16']}
    height={'40'}
    align="self-start"
    flexDirection="column"
   
    >
        <Text color="gray.500" mb="0px" marginLeft="7px">Artistas 20</Text>
        <Heading as="h2" size="2xl" color='blue.100' >Top Artistas</Heading>
   </HStack>
    <HStack 
    mt={-8}
    mb={8}
    flexDirection='row'
    justifyContent="space-evenly" 
    spacing={4}
    flexWrap="wrap"
    >
        <TopArtists
        img={Adele}
        name='Adele'
        >
        </TopArtists>
        <TopArtists
        img={Adele}
        name='Adele'
        >
        </TopArtists>
        <TopArtists
        img={Adele}
        name='Adele'
        >
        </TopArtists>
        <TopArtists
        img={Adele}
        name='Adele'
        >
        </TopArtists>
      
        </HStack>
        <Stack alignItems="center">
        <ChartMusic></ChartMusic>
        <ChartMusic></ChartMusic>
        <ChartMusic></ChartMusic>
        </Stack>
   
    </>)
}
 function TopArtists ({img, name}){
    return(
        <HStack flexDirection="column"
        _hover={{
            color: '#00ABC4',
            transition: '1s'
        }} >
            <Box  
            borderRadius="full" borderWidth="4px" borderColor="white"
            backgroundImage={img} backgroundSize="cover" 
            boxShadow="dark-lg" 
            boxSize={['65px' , '75px', '100px']}
            mb={4}
            ml="8px"
            _hover={{
                borderColor: '#00ABC4',
                transition: '1s',
            }} 
            >
            </Box>
            <Text 
            textAlign="center"
            fontSize="xl"
            
            >
                {name}
            </Text>
            
            
        </HStack>
      
    )

}


function ChartMusic(){
    return(
        <HStack
        width="300px"
        height="65px"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        
    
        >
          
            <Heading as="h5" mb="0px" w="20%" h="full"  display="flex" alignItems="center" justifyContent="center" size="2xl">1</Heading>       
            <Box w="50%" h="full"  display="flex" flexDirection="column" > 
            <Heading as="h4" mb="0px"  size="sm" mt="4">Hola</Heading>
            <Text color="gray.500"fontSize="smaller" mt="1">Adele</Text>
            </Box>
           
            <Box w="30%" h="full" bgImage={header2} marginLeft="-2" bgSize="cover"></Box>
        </HStack>
    )
}



export default MyTopFive