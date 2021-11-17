import { Box, Heading, HStack, Text, Image, Stack } from '@chakra-ui/layout'
import React from 'react'
import './styles.sass'
import Melatonina from '/src/images/melatonina.jpg'
import Tranqui from '/src/images/tranqui.jpg'
import LazosRotos from '/src/images/lazos-rotos.jpg'
import Andy from '/src/images/andy.png'
import Alex from '/src/images/alex.png'
import Lemuell from '/src/images/lemuell.png'
import Liam from '/src/images/liam.png'




function MyTopFive(){

    return(<>
   <HStack
    id="musica"
    backgroundColor="blue.900"
    pt={12}
    pl={['4', '8' , '16']}
    height={'40'}
    align="self-start"
    flexDirection="column"
   
    >
        <Text color="gray.500" mb="0px" marginLeft="7px">Artistas 4</Text>
        <Heading as="h2" size="2xl" color='blue.100' >Top Artistas</Heading>
   </HStack>
    <HStack 
    mt={-14}
    mb={8}
    flexDirection='row'
    justifyContent="space-evenly" 
    spacing={4}
    flexWrap="wrap"
    >
        <TopArtists
        img={Andy}
        name='Andy Isassi'
        >
        </TopArtists>
        <TopArtists
        img={Liam}
        name='Liam'
        >
        </TopArtists>
        <TopArtists
        img={Lemuell}
        name='Lemuell'
        >
        </TopArtists>
        <TopArtists
        img={Alex}
        name='Alex Duvall'
        >
        </TopArtists>
      
        </HStack>
        <Stack alignItems="center">
        <ChartMusic
        cover={Melatonina}
        nameS="Melatonina"
        nameA="Liam"
        N="1"
        ></ChartMusic>
        <ChartMusic
        cover={Tranqui}
        nameS="Tranqui"
        nameA="Lemuell"
        N="2"
        ></ChartMusic>
        <ChartMusic
        cover={LazosRotos}
        nameS="Lazos rotos"
        nameA="Andy Isassi"
        N="3"
        ></ChartMusic>
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
            mt={6}
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


function ChartMusic({nameA, nameS, N, cover}){
    return(
        <HStack
        width="300px"
        height="65px"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        
    
        >
          
            <Heading as="h5" mb="0px" w="20%" h="full"  display="flex" alignItems="center" justifyContent="center" size="2xl">{N}</Heading>       
            <Box w="50%" h="full"  display="flex" flexDirection="column" > 
            <Heading as="h4" mb="0px"  size="sm" mt="4">{nameA}</Heading>
            <Text color="gray.500"fontSize="smaller" mt="1">{nameS}</Text>
            </Box>
           
            <Box w="30%" h="full" bgImage={cover} marginLeft="-2" bgSize="cover"></Box>
        </HStack>
    )
}



export default MyTopFive