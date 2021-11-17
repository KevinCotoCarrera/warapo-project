import React from 'react'
import { Button , Box, Stack,} from '@chakra-ui/layout'
import twitter from './../images/twitter-white.svg'
import instagram from './../images/instagram-white.svg'
import youtube from './../images/youtube-white.svg'

function FinalSection(){
    return(<>
        <Box h="120px" w="full" bgColor="black" mt="20" p="2" color="white" display="flex" justifyContent="space-evenly"  >
            <ul style={{ display: 'flex', flexDirection: 'column' , justifyContent:'space-evenly', height: '100%' , marginBottom: '0px' , paddingBottom: '10px'}}>
                <a href="#">
                    <img style={{height: '20px'}} src={twitter}/>
                </a>
                <a href="#">
                    <img style={{height: '20px'}} src={instagram}/>
                </a>
                <a href="#">
                    <img style={{height: '20px'}} src={youtube}/>
                </a>
            </ul>
           
            <ul style={{display: 'flex', flexDirection: 'column' , justifyContent:'space-evenly', height: '100%' , marginBottom: '0px', paddingBottom: '10px'}}>
                <a style={{color : 'white', textDecorationLine: 'none', fontSize: '16px'}} href="#events">Eventos</a>
                <a style={{ color : 'white',textDecorationLine: 'none', fontSize: '16px'}} href="#musica">Top Music</a>
                <a style={{ color : 'white',textDecorationLine: 'none', fontSize: '16px'}} href="">Reserva</a>

            </ul>
        </Box>
        

    </>)}
export default FinalSection