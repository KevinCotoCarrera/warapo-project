import { Box, Heading, HStack, Text, Stack } from '@chakra-ui/layout'
import React from 'react'
import './styles.sass'
import Melatonina from '/src/images/melatonina.jpg'
import Tranqui from '/src/images/tranqui.jpg'
import LazosRotos from '/src/images/lazos-rotos.jpg'
import Andy from '/src/images/andy.png'
import Alex from '/src/images/alex.png'
import Lemuell from '/src/images/lemuell.png'
import Liam from '/src/images/liam.png'
import Andy_modal from '/src/images/andy-modal.jpg'
import Alex_modal from '/src/images/alex-modal.jpg'
import Lemuell_modal from '/src/images/lemuell-modal.jpg'
import Liam_modal from '/src/images/liam-modal.jpg'

import instagram from './../images/instagram-black.svg'
import youtube from './../images/youtube-black.svg'
import spotify from './../images/spotify-black.svg'
import { useDisclosure } from '@chakra-ui/hooks'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Link
  } from "@chakra-ui/react"



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
        img_modal={Andy_modal}
        ig='https://www.instagram.com/andyisasii/'
        yt='https://www.youtube.com/c/AndyIsasi'
        >
        </TopArtists>
        <TopArtists
        img={Liam}
        name='Liam'
        img_modal={Liam_modal}
        ig='https://www.instagram.com/soy_liam/'
        yt='https://www.youtube.com/channel/UCEf0aWxNGZ_KVqONxyjEpMg'
        sfy='https://open.spotify.com/artist/4JLHYM2zhp7TsF2wlz99op?si=Ccoh7MIPTUek0WrjYi_jyg'
        >
        </TopArtists>
        <TopArtists
        img={Lemuell}
        name='Lemuell'
        img_modal={Lemuell_modal}
        ig='https://www.instagram.com/lemuellmusic/'
        yt='https://www.youtube.com/channel/UC5MM-pVjwLcLE9oP5dc86TA'
        >
        </TopArtists>
        <TopArtists
        img={Alex}
        name='Alex Duvall'
        img_modal={Alex_modal}
        ig='https://www.instagram.com/alexduvallofficial/'
        yt='https://www.youtube.com/channel/UCSiwhexEPcokA1CSHnkfMbA/featured'
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
 function TopArtists ({img, name , ig, yt, sfy, text , img_modal}){
     const {isOpen, onOpen, onClose} = useDisclosure()
    return(<>
        <HStack flexDirection="column"
        wrap="wrap"
        
        _hover={{
            color: '#00ABC4',
            transition: '1s'
        }} >
            <Box
            onClick={onOpen}  
            borderRadius="full" borderWidth="4px" borderColor="white"
            backgroundImage={img} backgroundSize="cover" 
            boxShadow="dark-lg" 
            boxSize={['100px' , '120px', '150px']}
            mb={4}
            mt={6}
            //ml="8px"
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
        <Modal isOpen={isOpen} onClose={onClose} size='xs'>
            <ModalOverlay/>
            <ModalContent display='flex' flexDirection='column' alignItems='center'>
                <ModalHeader style={{color: 'black' , fontSize: '1.5rem'}} textAlign="center">{name}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody display="flex" justifyContent='center'  gridGap={10}>
                   
                    <Image src={img_modal} width='52' maxHeight='60' boxShadow='dark-lg' borderRadius="lg"></Image>

                   
                   
                </ModalBody>
                <ModalFooter mt={2} display='flex' justifyContent='space-around' width='60' >
                        <Link href={ig}><Image src={instagram}></Image></Link>
                        <Link href={yt}><Image  src={youtube}></Image></Link>
                        <Link hre={sfy}><Image src={spotify}></Image></Link>
                </ModalFooter>
            </ModalContent>

        </Modal>
    </>)

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
            <Heading as="h4" mb="0px"  size="sm" mt="4">{nameS}</Heading>
            <Text color="gray.500"fontSize="smaller" mt="1">{nameA}</Text>
            </Box>
           
            <Box w="30%" h="full" bgImage={cover} marginLeft="-2" bgSize="cover"></Box>
        </HStack>
    )
}



export default MyTopFive