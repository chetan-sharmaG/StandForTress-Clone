import { Box, Button, Stack, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';

const TressAreKeys = () => {

    const MyButton = styled(Button)(({ theme }) => ({
        color: "white",
        backgroundColor: '#EDAA00',
        fontSize: 14,
        fontWeight: 400,
        // fontFamily: "Poppins",
        
        padding: '12px 40px',
        '&:hover': {
            backgroundColor: '#EDAA00',
            'transform': 'translateY(-6px)',
            filter: 'drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25))'
        }
    }))
    return (
        <>


            <Box component='div' sx={{ display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'start', top: '-97px', width: '100%', height: '100vh' }}  >
                <Box component='div' sx={{ width: '100%', height: '80px', position: 'absolute', zIndex: 10, top: -80 }}  >
                    {/* <SvgIcon sx={{ position: 'relative', zIndex: 6, width: "100%", height: "80px" }}> */}
                        <svg class="nectar-shape-divider" width={'100%'} height='80px' aria-hidden="true" fill="#f08376" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none"> <path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path> </svg>
                    {/* </SvgIcon> */}
                </Box>
                <Box component='div' position={'absolute'} sx={{ width: '100%', height: '100%', display: 'flex', 'filter': 'invert(43%) sepia(88%) saturate(266%) hue-rotate(318deg) brightness(97%) contrast(101%)', justifyContent: 'center', alignItems: 'center' }}>
                    <Box component='img' src='/wallpaper.jpg' al sx={{ width: '100%', height: '100%' }} />

                </Box>
                <Stack direction='column' spacing={4} sx={{ width: '68%', top:'60px', display: 'flex', justifyContent: 'center', color: 'white', textAlign: 'center', alignItems: 'center', position: 'relative', zIndex: 11 }}>
                    <Typography variant='h3' sx={{ fontWeight: 700, fontSize: 42 }} >
                        Tress Are Keys
                    </Typography>
                    <Typography variant='h6' sx={{ fontWeight: 300, fontSize: 20 }} >
                        We believe that saving forests is the best way to fight climate change, protect biodiversity, and uplift local communities. Yet, deforestation puts our planet at risk, with 40 football fields lost every minute… every minute!
                    </Typography>
                    <Typography variant='h6' sx={{ fontWeight: 300, fontSize: 20 ,color:'#fff' }} >
                        We’re working to change this. As a global nonprofit, Stand For Trees empowers local communities to safeguard their forests. Thanks to the support of people like you, we have already preserved millions of acres of vital ecosystems.                    </Typography>
                    <Typography variant='h6' sx={{ fontWeight: 900, fontSize: 28,color:'#fff' }} >
                    $1 Saves 1 Tree.</Typography>
                    <MyButton  >LEARN MORE ABOUT US</MyButton>
                </Stack>
            </Box>
        </>
    )
}

export default TressAreKeys
